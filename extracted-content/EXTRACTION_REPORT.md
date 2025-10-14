# WordPress Content Extraction Report
## Southern Skies Dermatology Website

**Extraction Date:** October 12, 2025
**Source:** WordPress SQL Database (`mysql.sql`)
**Total Records Extracted:** 442 posts with 3,332 metadata records

---

## Summary

Successfully extracted ALL content from the WordPress database including:
- Complete page content with full HTML/Divi Builder shortcodes
- Service descriptions and procedures
- Location information with addresses, hours, and contact details
- Provider/doctor profiles
- Menu navigation structure
- All metadata and custom fields

---

## Extracted Content Files

### 1. `pages-content.json` (2.8 MB)
**36 Published Pages** including:

**Main Pages:**
- Home (88,094 characters)
- Our Doctors & Staff (43,219 characters)
- Locations (45,171 characters)
- Contact (24,854 characters)
- Request an Appointment (24,415 characters)
- Refer Patient (24,364 characters)

**Service Pages:**
- Skin Biopsies (65,166 characters)
- Mohs Surgery (69,132 characters)
- Pre-Cancer Treatments - Cryotherapy and Chemical Peels (65,328 characters)
- Mole Removal (61,385 characters)
- Plastic Surgery Reconstruction (full content)
- Before Mohs Surgery (14,266 characters)

**Visit Process Pages:**
- Prepare for Your Visit (15,873 characters)
- After Your Visit (16,644 characters)

**Provider Pages:**
- Dr. Mario Maruthur
- Dr. Malia Downing
- Raven Omar, PA-C
- Emma Stephens PA

**Utility Pages:**
- Contact Thank You
- Application Thank You
- Referral Thank You
- Appointment Request Thank You
- Ask A Question Thank You
- Privacy Policy
- Bill Pay
- Jobs

### 2. `services-complete.json` (431 KB)
**10 Service Entries** including:

**Surgical Services:**
- Mohs Surgery (comprehensive content)
- Before Mohs Surgery (patient preparation guide)
- Plastic Surgery Reconstruction (post-Mohs reconstruction)

**Medical Dermatology:**
- Pre-Cancer Treatments - Cryotherapy and Chemical Peels
- Skin Biopsies
- Mole Removal
- Skin Exams and Biopsies

All services include:
- Full descriptions and procedures
- Patient preparation information
- What to expect content
- Before/after care instructions
- Frequently asked questions

### 3. `locations-complete.json` (131 KB)
**5 Location Records** including:

**Main Office - St. Vincent's East (Trussville):**
- Address: 48 Medical Park Dr E #458, Birmingham, AL 35235
- Phone: (205) 900-2000
- Hours: M-Th: 8am-4:30pm, Fri: 8am-12pm
- Services: Full dermatology suite, Mohs surgery, medical dermatology, Botox
- Google Maps embed codes
- Detailed office descriptions

**Pell City Office - ENT Associates of Alabama:**
- Address: 423 23rd St N, Pell City, AL 35125
- Phone: (205) 900-2000
- Hours: Tue: 8am-4:00pm
- Services: Skin exams, spot checks, biopsies, medical dermatology
- Communities served: Moody, Odenville, Pell City, Riverside, Talladega, etc.

**Gadsden Regional Medical Center:**
- Address: 300 Medical Center Dr E #402, Gadsden, AL 35903
- Phone: (205) 900-2000
- Hours: M-Wed-Thur: 8am-4:30pm
- Services: Mohs surgery, full-body exams, biopsies, pre-cancer treatments
- Parking and accessibility information

Each location includes:
- Complete address and contact information
- Operating hours
- Services offered
- Parking/accessibility details
- About this office descriptions
- Google Maps integration codes
- Communities served

### 4. `providers-complete.json` (459 KB)
**9 Provider Records:**

**Physicians:**
- Dr. Mario Maruthur (Mohs surgeon, founder)
- Dr. Malia Downing (Dermatologist)

**Physician Assistants:**
- Raven Omar, PA-C
- Emma Stephens, PA

Each provider profile includes:
- Full bio and credentials
- Education and training
- Specialties
- Professional experience
- Personal information
- Photos and images
- Divi Builder layout templates

### 5. `menu-structure.json` (41 KB)
**38 Menu Items** including:
- Main navigation structure
- Service submenu items
- Location links
- Provider pages
- Patient resources

### 6. `all-posts.json` (5.5 MB)
Complete database dump of all 442 posts including:
- All post types (pages, layouts, revisions, nav items)
- Complete metadata
- Publishing history
- Post relationships

---

## Content Structure

### Post Fields Extracted:
- **ID** - WordPress post ID
- **post_title** - Page/post title
- **post_content** - Full HTML content including Divi Builder shortcodes
- **post_excerpt** - Summary/excerpt text
- **post_status** - Publishing status (publish, draft, etc.)
- **post_name** - URL slug
- **post_type** - Content type (page, nav_menu_item, et_pb_layout, etc.)
- **post_date** - Original publication date
- **post_modified** - Last modified date
- **meta** - All custom fields and metadata

### Metadata Includes:
- Divi Builder settings and configurations
- SEO data (titles, descriptions, focus keywords)
- Custom CSS
- Page layouts
- Form configurations
- Image attachments
- Widget settings
- Menu order and relationships

---

## Key Content Highlights

### Services Offered:
1. **Surgical Dermatology**
   - Mohs Micrographic Surgery
   - Skin cancer removal
   - Plastic reconstruction after Mohs
   - Mole removal/excision
   - Skin biopsies

2. **Medical Dermatology**
   - Full body skin exams
   - Pre-cancer treatments (cryotherapy, chemical peels)
   - Acne treatment
   - Rash treatment (psoriasis, eczema)
   - Skin cancer screenings

3. **Cosmetic Dermatology**
   - Botox injections
   - Dermal fillers
   - Cosmetic procedures

### Office Locations:
1. **Trussville/East Birmingham** - Main office, full services
2. **Pell City** - Tuesday clinic, full exam services
3. **Gadsden** - Monday, Wednesday, Thursday services

### Patient Resources:
- Before/after visit instructions
- Mohs surgery preparation guides
- Insurance and billing information
- Contact forms and appointment requests
- Patient referral system
- Job applications

---

## Technical Notes

### Content Format:
- All content stored with Divi Builder shortcodes (`[et_pb_*]`)
- HTML entities properly decoded
- SQL escapes cleaned
- Newlines normalized

### Image References:
- Images referenced with full URLs: `https://southernskiesdermatology.com/wp-content/uploads/...`
- Includes: hero images, service photos, provider headshots, office photos, logos, dividers

### Forms:
- Gravity Forms shortcodes present
- Contact forms
- Appointment request forms
- Referral forms
- Job application forms

---

## Next Steps for Migration

### Content Processing:
1. **Parse Divi Builder Shortcodes** - Convert `[et_pb_*]` shortcodes to Next.js components
2. **Download Images** - Pull all images from referenced URLs
3. **Convert Forms** - Rebuild Gravity Forms as Next.js forms
4. **Process Metadata** - Extract SEO data for Next.js metadata API
5. **Structure Data** - Organize into Next.js content collections

### Recommended Structure:
```
/content
  /pages
    - home.json
    - about.json
    - contact.json
  /services
    - mohs-surgery.json
    - skin-biopsies.json
    - pre-cancer-treatments.json
  /locations
    - trussville.json
    - pell-city.json
    - gadsden.json
  /providers
    - dr-mario-maruthur.json
    - dr-malia-downing.json
    - raven-omar-pac.json
```

---

## Content Quality

✅ **Complete** - All published content extracted with full HTML
✅ **Metadata** - All custom fields and SEO data preserved
✅ **Images** - All image URLs captured
✅ **Forms** - Form shortcodes identified
✅ **Navigation** - Menu structure extracted
✅ **Locations** - Full office details with maps
✅ **Providers** - Complete bio information

---

## File Locations

All extracted content saved to:
```
/Users/alvarogonzalez/Desktop/SSD Website Complete 10-12-25/ssd-nextjs/extracted-content/
```

Files:
- `pages-content.json` (2.8 MB) - All page content
- `services-complete.json` (431 KB) - Service information
- `locations-complete.json` (131 KB) - Office locations
- `providers-complete.json` (459 KB) - Doctor/staff profiles
- `menu-structure.json` (41 KB) - Navigation menus
- `all-posts.json` (5.5 MB) - Complete database
- `extraction-summary.json` (8.7 KB) - Summary statistics
- `EXTRACTION_REPORT.md` (this file) - Detailed report

---

## Extraction Script

Python script used: `extract_final.py`

The script:
- Parses WordPress SQL INSERT statements
- Handles complex SQL string escaping
- Decodes HTML entities
- Normalizes line endings
- Maps WordPress field structure correctly
- Combines posts with metadata
- Filters by post type and status
- Outputs structured JSON

---

## Contact Information

**Practice:** Southern Skies Dermatology and Surgery
**Phone:** (205) 900-2000
**Website:** southernskiesdermatology.com
**Locations:** Trussville (Main), Pell City, Gadsden

---

*End of Extraction Report*
