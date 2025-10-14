#!/usr/bin/env python3
"""
Extract content from WordPress SQL dump for Next.js migration
"""

import re
import json
import html
from collections import defaultdict

def clean_text(text):
    """Clean and decode HTML entities"""
    if not text:
        return ""
    # Decode HTML entities
    text = html.unescape(text)
    return text

def extract_posts(sql_content):
    """Extract posts from wp_posts INSERT statements"""
    posts = []

    # Find INSERT INTO wp_posts statements
    insert_pattern = r"INSERT INTO `wp_posts` VALUES \((.*?)\)(?:,\(|;)"

    matches = re.finditer(insert_pattern, sql_content, re.DOTALL)

    for match in matches:
        values_str = match.group(1)
        # Split by comma but respect quotes
        values = parse_sql_values(values_str)

        if len(values) >= 23:
            post = {
                'ID': values[0],
                'post_author': values[1],
                'post_date': values[2],
                'post_content': clean_text(values[4]),
                'post_title': clean_text(values[5]),
                'post_excerpt': clean_text(values[6]),
                'post_status': values[7],
                'post_name': values[9],
                'post_modified': values[11],
                'post_parent': values[13],
                'guid': values[14],
                'menu_order': values[15],
                'post_type': values[16],
                'post_mime_type': values[17],
            }
            posts.append(post)

    return posts

def extract_postmeta(sql_content):
    """Extract post metadata from wp_postmeta"""
    postmeta = defaultdict(dict)

    # Find INSERT INTO wp_postmeta statements
    insert_pattern = r"INSERT INTO `wp_postmeta` VALUES \((.*?)\)(?:,\(|;)"

    matches = re.finditer(insert_pattern, sql_content, re.DOTALL)

    for match in matches:
        values_str = match.group(1)
        values = parse_sql_values(values_str)

        if len(values) >= 4:
            post_id = values[1]
            meta_key = values[2]
            meta_value = clean_text(values[3])

            postmeta[post_id][meta_key] = meta_value

    return postmeta

def parse_sql_values(values_str):
    """Parse SQL INSERT values, handling quoted strings properly"""
    values = []
    current_value = ""
    in_quotes = False
    quote_char = None
    escape_next = False

    i = 0
    while i < len(values_str):
        char = values_str[i]

        if escape_next:
            current_value += char
            escape_next = False
            i += 1
            continue

        if char == '\\':
            escape_next = True
            current_value += char
            i += 1
            continue

        if char in ('"', "'") and not in_quotes:
            in_quotes = True
            quote_char = char
            i += 1
            continue

        if char == quote_char and in_quotes:
            in_quotes = False
            quote_char = None
            i += 1
            continue

        if char == ',' and not in_quotes:
            values.append(current_value.strip())
            current_value = ""
            i += 1
            continue

        current_value += char
        i += 1

    if current_value:
        values.append(current_value.strip())

    return values

def extract_terms(sql_content):
    """Extract taxonomy terms"""
    terms = []

    # Find INSERT INTO wp_terms
    insert_pattern = r"INSERT INTO `wp_terms` VALUES \((.*?)\)(?:,\(|;)"

    matches = re.finditer(insert_pattern, sql_content, re.DOTALL)

    for match in matches:
        values_str = match.group(1)
        values = parse_sql_values(values_str)

        if len(values) >= 4:
            term = {
                'term_id': values[0],
                'name': clean_text(values[1]),
                'slug': values[2],
                'term_group': values[3]
            }
            terms.append(term)

    return terms

def extract_menus(sql_content):
    """Extract menu structure"""
    menus = []

    # Get nav_menu_item posts
    posts_pattern = r"INSERT INTO `wp_posts`.*?post_type.*?nav_menu_item"

    return menus

def main():
    print("Reading SQL file...")
    sql_file = "/Users/alvarogonzalez/Desktop/SSD Website Complete 10-12-25/Old SSD Website/wp-content/mysql.sql"

    with open(sql_file, 'r', encoding='utf-8', errors='ignore') as f:
        sql_content = f.read()

    print("Extracting posts...")
    posts = extract_posts(sql_content)

    print("Extracting post metadata...")
    postmeta = extract_postmeta(sql_content)

    print("Extracting taxonomy terms...")
    terms = extract_terms(sql_content)

    # Combine posts with their metadata
    for post in posts:
        post_id = post['ID']
        if post_id in postmeta:
            post['meta'] = postmeta[post_id]

    # Filter by post type
    pages = [p for p in posts if p['post_type'] == "'page'" and p['post_status'] == "'publish'"]
    services = [p for p in posts if p['post_type'] in ("'service'", "'services'") and p['post_status'] == "'publish'"]
    locations = [p for p in posts if p['post_type'] in ("'location'", "'locations'") and p['post_status'] == "'publish'"]
    menu_items = [p for p in posts if p['post_type'] == "'nav_menu_item'"]

    # Also check for services/locations in pages or custom fields
    for page in pages:
        title_lower = page['post_title'].lower()
        name_lower = page['post_name'].lower()

        if any(keyword in title_lower or keyword in name_lower for keyword in ['service', 'treatment', 'procedure']):
            services.append(page)
        elif any(keyword in title_lower or keyword in name_lower for keyword in ['location', 'office', 'clinic']):
            locations.append(page)

    print(f"\nFound:")
    print(f"  - {len(pages)} pages")
    print(f"  - {len(services)} services")
    print(f"  - {len(locations)} locations")
    print(f"  - {len(menu_items)} menu items")
    print(f"  - {len(terms)} taxonomy terms")

    # Create output directory
    import os
    output_dir = "/Users/alvarogonzalez/Desktop/SSD Website Complete 10-12-25/ssd-nextjs/extracted-content"
    os.makedirs(output_dir, exist_ok=True)

    # Save extracted content
    print("\nSaving extracted content...")

    with open(f"{output_dir}/services-complete.json", 'w', encoding='utf-8') as f:
        json.dump(services, f, indent=2, ensure_ascii=False)

    with open(f"{output_dir}/locations-complete.json", 'w', encoding='utf-8') as f:
        json.dump(locations, f, indent=2, ensure_ascii=False)

    with open(f"{output_dir}/pages-content.json", 'w', encoding='utf-8') as f:
        json.dump(pages, f, indent=2, ensure_ascii=False)

    with open(f"{output_dir}/menu-structure.json", 'w', encoding='utf-8') as f:
        json.dump(menu_items, f, indent=2, ensure_ascii=False)

    with open(f"{output_dir}/taxonomy-terms.json", 'w', encoding='utf-8') as f:
        json.dump(terms, f, indent=2, ensure_ascii=False)

    # Create a summary
    summary = {
        'extraction_date': '2025-10-12',
        'total_posts': len(posts),
        'pages': len(pages),
        'services': len(services),
        'locations': len(locations),
        'menu_items': len(menu_items),
        'terms': len(terms),
        'page_titles': [p['post_title'] for p in pages],
        'service_titles': [p['post_title'] for p in services],
        'location_titles': [p['post_title'] for p in locations]
    }

    with open(f"{output_dir}/extraction-summary.json", 'w', encoding='utf-8') as f:
        json.dump(summary, f, indent=2, ensure_ascii=False)

    print(f"\nContent saved to: {output_dir}")
    print("\nPage titles found:")
    for page in pages[:10]:
        print(f"  - {page['post_title']}")

    print("\nService titles found:")
    for service in services[:10]:
        print(f"  - {service['post_title']}")

    print("\nLocation titles found:")
    for location in locations[:10]:
        print(f"  - {location['post_title']}")

if __name__ == "__main__":
    main()
