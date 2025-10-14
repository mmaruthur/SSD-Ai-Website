#!/usr/bin/env python3
"""
Advanced WordPress SQL content extractor using sqlparse
"""

import re
import json
import html
from collections import defaultdict
import os

def clean_text(text):
    """Clean and decode HTML entities"""
    if not text or text == 'NULL':
        return ""
    # Remove quotes
    if text.startswith("'") and text.endswith("'"):
        text = text[1:-1]
    # Decode HTML entities
    text = html.unescape(text)
    # Unescape SQL escapes
    text = text.replace("\\'", "'").replace('\\"', '"').replace("\\\\", "\\")
    text = text.replace("\\r\\n", "\n").replace("\\n", "\n")
    return text

def extract_from_insert(insert_statement, table_name):
    """Extract data from INSERT INTO statement"""
    records = []

    # Find VALUES clause
    values_match = re.search(r'VALUES\s*(.+)', insert_statement, re.DOTALL | re.IGNORECASE)
    if not values_match:
        return records

    values_part = values_match.group(1)

    # Split by ),( to get individual records
    # This is a simple approach - for complex data we need better parsing
    record_pattern = r'\(([^)]+(?:\([^)]*\)[^)]*)*)\)'

    # For wp_posts, we need to handle the fact that content can contain parentheses
    # So we'll use a different approach

    current_pos = 0
    in_string = False
    string_char = None
    escape_next = False
    paren_depth = 0
    record_start = -1

    for i, char in enumerate(values_part):
        if escape_next:
            escape_next = False
            continue

        if char == '\\':
            escape_next = True
            continue

        if char in ("'", '"') and not in_string:
            in_string = True
            string_char = char
        elif char == string_char and in_string:
            in_string = False
            string_char = None

        if not in_string:
            if char == '(':
                if paren_depth == 0:
                    record_start = i + 1
                paren_depth += 1
            elif char == ')':
                paren_depth -= 1
                if paren_depth == 0 and record_start >= 0:
                    record_data = values_part[record_start:i]
                    records.append(record_data)
                    record_start = -1

    return records

def parse_wp_posts_record(record_str):
    """Parse a wp_posts record"""
    fields = []
    current_field = ""
    in_string = False
    string_char = None
    escape_next = False

    for char in record_str:
        if escape_next:
            current_field += char
            escape_next = False
            continue

        if char == '\\':
            current_field += char
            escape_next = True
            continue

        if char in ("'", '"') and not in_string:
            in_string = True
            string_char = char
            continue

        if char == string_char and in_string:
            in_string = False
            string_char = None
            continue

        if char == ',' and not in_string:
            fields.append(current_field.strip())
            current_field = ""
            continue

        current_field += char

    if current_field:
        fields.append(current_field.strip())

    return fields

def process_sql_file(sql_file):
    """Process the SQL file and extract content"""
    print("Reading SQL file...")
    with open(sql_file, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()

    print("Extracting wp_posts data...")
    posts = []

    # Find INSERT INTO wp_posts
    posts_pattern = r'INSERT INTO `wp_posts` VALUES\s*(.+?);'
    posts_matches = re.finditer(posts_pattern, content, re.DOTALL)

    for match in posts_matches:
        insert_data = match.group(1)
        records = extract_from_insert("VALUES " + insert_data, "wp_posts")

        for record in records:
            fields = parse_wp_posts_record(record)

            if len(fields) >= 23:
                post = {
                    'ID': clean_text(fields[0]),
                    'post_author': clean_text(fields[1]),
                    'post_date': clean_text(fields[2]),
                    'post_content': clean_text(fields[4]),
                    'post_title': clean_text(fields[5]),
                    'post_excerpt': clean_text(fields[6]),
                    'post_status': clean_text(fields[7]),
                    'post_name': clean_text(fields[9]),
                    'post_modified': clean_text(fields[11]),
                    'post_parent': clean_text(fields[13]),
                    'guid': clean_text(fields[14]),
                    'menu_order': clean_text(fields[15]),
                    'post_type': clean_text(fields[16]),
                    'meta': {}
                }
                posts.append(post)

    print(f"Found {len(posts)} posts")

    # Extract postmeta
    print("Extracting wp_postmeta data...")
    postmeta = defaultdict(dict)

    postmeta_pattern = r'INSERT INTO `wp_postmeta` VALUES\s*(.+?);'
    postmeta_matches = re.finditer(postmeta_pattern, content, re.DOTALL)

    for match in postmeta_matches:
        insert_data = match.group(1)
        records = extract_from_insert("VALUES " + insert_data, "wp_postmeta")

        for record in records:
            fields = parse_wp_posts_record(record)

            if len(fields) >= 4:
                post_id = clean_text(fields[1])
                meta_key = clean_text(fields[2])
                meta_value = clean_text(fields[3])

                postmeta[post_id][meta_key] = meta_value

    print(f"Found metadata for {len(postmeta)} posts")

    # Combine posts with metadata
    for post in posts:
        post_id = post['ID']
        if post_id in postmeta:
            post['meta'] = postmeta[post_id]

    return posts

def main():
    sql_file = "/Users/alvarogonzalez/Desktop/SSD Website Complete 10-12-25/Old SSD Website/wp-content/mysql.sql"

    posts = process_sql_file(sql_file)

    # Filter by post type and status
    pages = [p for p in posts if p['post_type'] == 'page' and p['post_status'] == 'publish']
    services = []
    locations = []
    menu_items = [p for p in posts if p['post_type'] == 'nav_menu_item']

    # Look for services and locations in pages and other post types
    for post in posts:
        post_type = post['post_type']
        post_status = post['post_status']
        title_lower = post['post_title'].lower()
        name_lower = post['post_name'].lower()

        # Check if it's published
        if post_status != 'publish':
            continue

        # Check for service keywords
        if ('service' in title_lower or 'service' in name_lower or
            'treatment' in title_lower or 'procedure' in title_lower or
            post_type in ('service', 'services', 'et_pb_layout')):
            services.append(post)

        # Check for location keywords
        if ('location' in title_lower or 'location' in name_lower or
            'office' in title_lower or 'clinic' in title_lower or
            post_type in ('location', 'locations')):
            locations.append(post)

    # Remove duplicates
    services = [dict(t) for t in {tuple(d.items()) for d in services}]
    locations = [dict(t) for t in {tuple(d.items()) for d in locations}]

    print(f"\nExtraction Summary:")
    print(f"  - {len(pages)} pages")
    print(f"  - {len(services)} services")
    print(f"  - {len(locations)} locations")
    print(f"  - {len(menu_items)} menu items")

    # Create output directory
    output_dir = "/Users/alvarogonzalez/Desktop/SSD Website Complete 10-12-25/ssd-nextjs/extracted-content"
    os.makedirs(output_dir, exist_ok=True)

    # Save content
    print("\nSaving extracted content...")

    with open(f"{output_dir}/services-complete.json", 'w', encoding='utf-8') as f:
        json.dump(services, f, indent=2, ensure_ascii=False)

    with open(f"{output_dir}/locations-complete.json", 'w', encoding='utf-8') as f:
        json.dump(locations, f, indent=2, ensure_ascii=False)

    with open(f"{output_dir}/pages-content.json", 'w', encoding='utf-8') as f:
        json.dump(pages, f, indent=2, ensure_ascii=False)

    with open(f"{output_dir}/menu-structure.json", 'w', encoding='utf-8') as f:
        json.dump(menu_items, f, indent=2, ensure_ascii=False)

    # Save all posts for reference
    with open(f"{output_dir}/all-posts.json", 'w', encoding='utf-8') as f:
        json.dump(posts, f, indent=2, ensure_ascii=False)

    # Create summary
    summary = {
        'extraction_date': '2025-10-12',
        'total_posts': len(posts),
        'pages': len(pages),
        'services': len(services),
        'locations': len(locations),
        'menu_items': len(menu_items),
        'page_list': [{'ID': p['ID'], 'title': p['post_title'], 'name': p['post_name']} for p in pages],
        'service_list': [{'ID': p['ID'], 'title': p['post_title'], 'name': p['post_name']} for p in services],
        'location_list': [{'ID': p['ID'], 'title': p['post_title'], 'name': p['post_name']} for p in locations]
    }

    with open(f"{output_dir}/extraction-summary.json", 'w', encoding='utf-8') as f:
        json.dump(summary, f, indent=2, ensure_ascii=False)

    print(f"\nContent saved to: {output_dir}")

    print("\n=== PAGES FOUND ===")
    for page in pages[:20]:
        print(f"  - {page['post_title']} (ID: {page['ID']})")

    print("\n=== SERVICES FOUND ===")
    for service in services[:20]:
        print(f"  - {service['post_title']} (ID: {service['ID']}, Type: {service['post_type']})")

    print("\n=== LOCATIONS FOUND ===")
    for location in locations[:20]:
        print(f"  - {location['post_title']} (ID: {location['ID']}, Type: {location['post_type']})")

if __name__ == "__main__":
    main()
