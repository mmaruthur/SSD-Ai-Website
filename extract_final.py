#!/usr/bin/env python3
"""
Final WordPress SQL content extractor - optimized for single-line INSERTs
"""

import re
import json
import html
from collections import defaultdict
import os

def clean_text(text):
    """Clean and decode HTML entities"""
    if not text or text in ('NULL', 'null'):
        return ""
    # Remove surrounding quotes
    if (text.startswith("'") and text.endswith("'")) or (text.startswith('"') and text.endswith('"')):
        text = text[1:-1]
    # Unescape SQL escapes
    text = text.replace("\\'", "'").replace('\\"', '"').replace("\\\\", "\\")
    text = text.replace("\\r\\n", "\n").replace("\\n", "\n").replace("\\r", "\n")
    text = text.replace("\\t", "\t")
    # Decode HTML entities
    text = html.unescape(text)
    return text

def parse_values_from_insert(line):
    """
    Parse VALUES from INSERT statement.
    This handles the format: INSERT INTO `table` VALUES (row1),(row2),...;
    """
    # Extract everything between VALUES and the final semicolon
    match = re.search(r'VALUES\s+(.+);?\s*$', line, re.DOTALL)
    if not match:
        return []

    values_str = match.group(1).rstrip(';')

    # Now we need to split by "),(" but respecting quotes
    # We'll track parenthesis depth and quotes
    records = []
    current_record = []
    current_field = ""
    in_string = False
    string_char = None
    escape_next = False
    paren_depth = 0
    field_start = False

    i = 0
    while i < len(values_str):
        char = values_str[i]

        if escape_next:
            current_field += char
            escape_next = False
            i += 1
            continue

        if char == '\\' and in_string:
            current_field += char
            escape_next = True
            i += 1
            continue

        # Handle quotes
        if char in ("'", '"'):
            if not in_string:
                in_string = True
                string_char = char
            elif char == string_char:
                # Check if this is really the end (peek ahead to see if it's escaped)
                in_string = False
                string_char = None
            current_field += char
            i += 1
            continue

        # If we're in a string, just accumulate
        if in_string:
            current_field += char
            i += 1
            continue

        # Outside of strings, handle structural characters
        if char == '(':
            paren_depth += 1
            if paren_depth == 1:
                # Start of a new record
                field_start = True
                i += 1
                continue
            current_field += char
            i += 1
            continue

        if char == ')':
            paren_depth -= 1
            if paren_depth == 0:
                # End of record
                if current_field or field_start:
                    current_record.append(current_field)
                records.append(current_record)
                current_record = []
                current_field = ""
                field_start = False
                i += 1
                # Skip comma after closing paren
                if i < len(values_str) and values_str[i] == ',':
                    i += 1
                continue
            current_field += char
            i += 1
            continue

        if char == ',' and paren_depth == 1:
            # Field separator
            current_record.append(current_field)
            current_field = ""
            i += 1
            continue

        current_field += char
        i += 1

    return records

def process_sql_file(sql_file):
    """Process the SQL file line by line"""
    print("Reading and processing SQL file...")

    posts = []
    postmeta = defaultdict(dict)

    with open(sql_file, 'r', encoding='utf-8', errors='ignore') as f:
        for line_num, line in enumerate(f, 1):
            line = line.strip()

            # Process wp_posts
            if line.startswith('INSERT INTO `wp_posts` VALUES'):
                print(f"Processing wp_posts at line {line_num}...")
                records = parse_values_from_insert(line)
                print(f"  Found {len(records)} records")

                for record in records:
                    if len(record) >= 23:
                        # Field order based on CREATE TABLE:
                        # 0:ID, 1:post_author, 2:post_date, 3:post_date_gmt, 4:post_content,
                        # 5:post_title, 6:post_excerpt, 7:post_status, 8:comment_status,
                        # 9:ping_status, 10:post_password, 11:post_name, 12:to_ping, 13:pinged,
                        # 14:post_modified, 15:post_modified_gmt, 16:post_content_filtered,
                        # 17:post_parent, 18:guid, 19:menu_order, 20:post_type, 21:post_mime_type, 22:comment_count
                        post = {
                            'ID': clean_text(record[0]),
                            'post_author': clean_text(record[1]),
                            'post_date': clean_text(record[2]),
                            'post_date_gmt': clean_text(record[3]),
                            'post_content': clean_text(record[4]),
                            'post_title': clean_text(record[5]),
                            'post_excerpt': clean_text(record[6]),
                            'post_status': clean_text(record[7]),
                            'comment_status': clean_text(record[8]),
                            'ping_status': clean_text(record[9]),
                            'post_password': clean_text(record[10]),
                            'post_name': clean_text(record[11]),
                            'to_ping': clean_text(record[12]),
                            'pinged': clean_text(record[13]),
                            'post_modified': clean_text(record[14]),
                            'post_modified_gmt': clean_text(record[15]),
                            'post_content_filtered': clean_text(record[16]),
                            'post_parent': clean_text(record[17]),
                            'guid': clean_text(record[18]),
                            'menu_order': clean_text(record[19]),
                            'post_type': clean_text(record[20]),
                            'post_mime_type': clean_text(record[21]),
                            'comment_count': clean_text(record[22]) if len(record) > 22 else '0',
                            'meta': {}
                        }
                        posts.append(post)

            # Process wp_postmeta
            elif line.startswith('INSERT INTO `wp_postmeta` VALUES'):
                print(f"Processing wp_postmeta at line {line_num}...")
                records = parse_values_from_insert(line)
                print(f"  Found {len(records)} metadata records")

                for record in records:
                    if len(record) >= 4:
                        post_id = clean_text(record[1])
                        meta_key = clean_text(record[2])
                        meta_value = clean_text(record[3])

                        postmeta[post_id][meta_key] = meta_value

    print(f"\nTotal posts extracted: {len(posts)}")
    print(f"Total postmeta records: {sum(len(v) for v in postmeta.values())}")

    # Combine posts with their metadata
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

    # Find services - could be pages, custom post types, or layouts
    services = []
    locations = []
    providers = []

    for post in posts:
        if post['post_status'] != 'publish':
            continue

        post_type = post['post_type']
        title_lower = post['post_title'].lower()
        name_lower = post['post_name'].lower()
        content_lower = post['post_content'][:500].lower() if post['post_content'] else ""

        # Identify services
        service_keywords = ['botox', 'filler', 'mohs', 'surgery', 'skin cancer', 'acne', 'cosmetic',
                           'laser', 'treatment', 'procedure', 'peel', 'microneedling', 'rejuvenation']
        if (any(kw in title_lower for kw in service_keywords) or
            any(kw in name_lower for kw in service_keywords) or
            post_type in ('service', 'services')):
            services.append(post)

        # Identify locations
        location_keywords = ['trussville', 'pell city', 'gadsden', 'location', 'office', 'clinic']
        if (any(kw in title_lower for kw in location_keywords) or
            any(kw in name_lower for kw in location_keywords) or
            post_type in ('location', 'locations')):
            locations.append(post)

        # Identify providers/doctors
        provider_keywords = ['dr.', 'doctor', 'physician', 'provider', 'dermatologist', 'pa-c', 'np']
        if (any(kw in title_lower for kw in provider_keywords) or
            any(kw in name_lower for kw in provider_keywords) or
            post_type in ('provider', 'providers', 'doctor', 'team')):
            providers.append(post)

    # Get menu items
    menu_items = [p for p in posts if p['post_type'] == 'nav_menu_item']

    # Remove duplicates by ID
    def dedupe_by_id(items):
        seen = set()
        result = []
        for item in items:
            if item['ID'] not in seen:
                seen.add(item['ID'])
                result.append(item)
        return result

    services = dedupe_by_id(services)
    locations = dedupe_by_id(locations)
    providers = dedupe_by_id(providers)

    print(f"\n=== EXTRACTION SUMMARY ===")
    print(f"Pages: {len(pages)}")
    print(f"Services: {len(services)}")
    print(f"Locations: {len(locations)}")
    print(f"Providers: {len(providers)}")
    print(f"Menu items: {len(menu_items)}")

    # Create output directory
    output_dir = "/Users/alvarogonzalez/Desktop/SSD Website Complete 10-12-25/ssd-nextjs/extracted-content"
    os.makedirs(output_dir, exist_ok=True)

    # Save extracted content
    print("\nSaving extracted content...")

    with open(f"{output_dir}/services-complete.json", 'w', encoding='utf-8') as f:
        json.dump(services, f, indent=2, ensure_ascii=False)

    with open(f"{output_dir}/locations-complete.json", 'w', encoding='utf-8') as f:
        json.dump(locations, f, indent=2, ensure_ascii=False)

    with open(f"{output_dir}/providers-complete.json", 'w', encoding='utf-8') as f:
        json.dump(providers, f, indent=2, ensure_ascii=False)

    with open(f"{output_dir}/pages-content.json", 'w', encoding='utf-8') as f:
        json.dump(pages, f, indent=2, ensure_ascii=False)

    with open(f"{output_dir}/menu-structure.json", 'w', encoding='utf-8') as f:
        json.dump(menu_items, f, indent=2, ensure_ascii=False)

    # Save all posts for reference
    with open(f"{output_dir}/all-posts.json", 'w', encoding='utf-8') as f:
        json.dump(posts, f, indent=2, ensure_ascii=False)

    # Create detailed summary
    summary = {
        'extraction_date': '2025-10-12',
        'total_posts': len(posts),
        'pages': {
            'count': len(pages),
            'list': [{'ID': p['ID'], 'title': p['post_title'], 'slug': p['post_name'], 'has_content': len(p['post_content']) > 100} for p in pages]
        },
        'services': {
            'count': len(services),
            'list': [{'ID': p['ID'], 'title': p['post_title'], 'slug': p['post_name'], 'type': p['post_type']} for p in services]
        },
        'locations': {
            'count': len(locations),
            'list': [{'ID': p['ID'], 'title': p['post_title'], 'slug': p['post_name'], 'type': p['post_type']} for p in locations]
        },
        'providers': {
            'count': len(providers),
            'list': [{'ID': p['ID'], 'title': p['post_title'], 'slug': p['post_name'], 'type': p['post_type']} for p in providers]
        },
        'menu_items': {
            'count': len(menu_items)
        }
    }

    with open(f"{output_dir}/extraction-summary.json", 'w', encoding='utf-8') as f:
        json.dump(summary, f, indent=2, ensure_ascii=False)

    print(f"\n✓ Content saved to: {output_dir}")

    print("\n=== PAGES ===")
    for i, page in enumerate(pages[:15], 1):
        content_length = len(page['post_content'])
        print(f"{i}. {page['post_title']}")
        print(f"   Slug: {page['post_name']}, Content: {content_length} chars")

    print("\n=== SERVICES ===")
    for i, service in enumerate(services[:15], 1):
        print(f"{i}. {service['post_title']}")
        print(f"   Type: {service['post_type']}, Slug: {service['post_name']}")

    print("\n=== LOCATIONS ===")
    for i, location in enumerate(locations[:15], 1):
        print(f"{i}. {location['post_title']}")
        print(f"   Type: {location['post_type']}, Slug: {location['post_name']}")

    print("\n=== PROVIDERS ===")
    for i, provider in enumerate(providers[:15], 1):
        print(f"{i}. {provider['post_title']}")
        print(f"   Type: {provider['post_type']}, Slug: {provider['post_name']}")

    print("\n✓ Extraction complete!")

if __name__ == "__main__":
    main()
