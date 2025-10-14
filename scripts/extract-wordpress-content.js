/**
 * WordPress Content Extractor
 *
 * This script analyzes the WordPress files and extracts:
 * - Provider information (doctors, PA's, etc.)
 * - Service information
 * - Location data
 * - Images
 *
 * Then prepares it for import into Sanity CMS
 */

const fs = require('fs');
const path = require('path');

// Path to your WordPress installation
const WORDPRESS_PATH = '/Users/alvarogonzalez/Desktop/SSD Website Complete 10-12-25/Old SSD Website';
const OUTPUT_PATH = '/Users/alvarogonzalez/Desktop/SSD Website Complete 10-12-25/ssd-nextjs/extracted-content';

// Create output directory
if (!fs.existsSync(OUTPUT_PATH)) {
  fs.mkdirSync(OUTPUT_PATH, { recursive: true });
}

console.log('🔍 Starting WordPress Content Extraction...\n');

/**
 * Extract Provider JSON files
 */
function extractProviders() {
  console.log('👨‍⚕️ Extracting Provider Data...');

  const uploadsPath = path.join(WORDPRESS_PATH, 'wp-content/uploads');
  const providerFiles = [];

  // Find all provider JSON files (improved matching)
  function findProviderFiles(dir) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        findProviderFiles(filePath);
      } else if (file.endsWith('.json')) {
        // Check if it's a provider file (more lenient matching)
        const lowerFile = file.toLowerCase();
        if (lowerFile.includes('dr-') ||
            lowerFile.includes('dr.') ||
            lowerFile.includes('-pa-') ||
            lowerFile.includes('-pa.') ||
            lowerFile.includes('provider') ||
            lowerFile.match(/(malia|raven|emma|stephens)/i)) {
          providerFiles.push(filePath);
        }
      }
    });
  }

  if (fs.existsSync(uploadsPath)) {
    findProviderFiles(uploadsPath);
  }

  console.log(`   Found ${providerFiles.length} provider files`);

  const providers = [];

  providerFiles.forEach((file, index) => {
    try {
      const content = fs.readFileSync(file, 'utf8');
      const data = JSON.parse(content);

      // Extract provider info from the Divi Builder data
      const providerInfo = extractProviderInfo(data, file);

      if (providerInfo) {
        providers.push(providerInfo);
        console.log(`   ✓ Extracted: ${providerInfo.name}`);
      }
    } catch (error) {
      console.log(`   ✗ Error reading ${path.basename(file)}: ${error.message}`);
    }
  });

  // Save extracted providers
  fs.writeFileSync(
    path.join(OUTPUT_PATH, 'providers.json'),
    JSON.stringify(providers, null, 2)
  );

  console.log(`\n✅ Extracted ${providers.length} providers`);
  console.log(`   Saved to: ${path.join(OUTPUT_PATH, 'providers.json')}\n`);

  return providers;
}

/**
 * Clean HTML and escape characters from text
 */
function cleanText(text) {
  if (!text) return '';

  return text
    .replace(/<[^>]*>/g, '')           // Remove HTML tags
    .replace(/\\"/g, '"')               // Fix escaped quotes
    .replace(/\\'/g, "'")               // Fix escaped single quotes
    .replace(/\\\//g, '/')              // Fix escaped slashes
    .replace(/\\n/g, ' ')               // Replace escaped newlines with space
    .replace(/&nbsp;/g, ' ')            // Replace nbsp with space
    .replace(/&amp;/g, '&')             // Fix ampersands
    .replace(/&quot;/g, '"')            // Fix quotes
    .replace(/\s+/g, ' ')               // Normalize whitespace
    .trim();
}

/**
 * Parse provider information from Divi Builder data
 */
function extractProviderInfo(data, filePath) {
  try {
    // Get the post_content which contains the Divi Builder shortcodes
    // Handle two different formats:
    // 1. Object with post_content field
    // 2. Direct string content
    let content = '';
    let postTitle = '';

    if (data.data) {
      const post = Object.values(data.data)[0];
      if (typeof post === 'string') {
        // Format 1: content is a string
        content = post;
        postTitle = path.basename(filePath, '.json').replace(/-/g, ' ');
      } else if (post && post.post_content) {
        // Format 2: content is in post_content field
        content = post.post_content;
        postTitle = post.post_title || '';
      }
    }

    if (!content) {
      console.log(`   ⚠️  No content found in ${path.basename(filePath)}`);
      return null;
    }

    // Extract name from h1 tag (most reliable) or use post title
    let name = postTitle;
    const nameMatch = content.match(/<h1[^>]*><span[^>]*>(.*?)<\/span><\/h1>/);
    if (nameMatch) {
      name = cleanText(nameMatch[1]);
    }

    // Extract credentials/education from blurb section
    let education = [];
    const educationPattern = /et_pb_blurb[^>]*>.*?<p><span[^>]*>(Bachelor[^<\[]{10,200}|Master[^<\[]{10,200}|University[^<\[]{20,200}|College[^<\[]{20,200}|MD[^<\[]{10,100})/gis;
    const educationMatches = content.matchAll(educationPattern);
    for (const match of educationMatches) {
      const edu = cleanText(match[1]);
      // Skip if it's a testimonial or contains testimonial keywords
      if (edu.length > 15 && !edu.includes('"') && !edu.includes('pleased') && !education.includes(edu)) {
        education.push(edu);
      }
    }

    // Determine title/role
    let title = 'Physician Assistant';
    if (name.includes('Dr.') || name.includes('MD')) {
      title = 'Dermatologist';
    } else if (name.includes('PA')) {
      title = 'Physician Assistant';
    } else if (name.includes('NP')) {
      title = 'Nurse Practitioner';
    }

    // Extract full biography from "About" section
    let bio = '';

    // First, remove testimonial carousel sections to avoid matching them
    const contentWithoutTestimonials = content.replace(/\[dica_divi_carousel.*?\[\\\/dica_divi_carousel\]/gs, '');

    // Look for biographical text patterns (these are common starts to provider bios)
    const firstName = name.split(/[,\s]+/)[name.startsWith('Dr.') ? 1 : 0]; // Get first name
    const bioPatterns = [
      new RegExp(`(${firstName}[^<]*(?:was|is|has|grew|received|graduated|attended|earned|completed)[^<]{200,1500})`, 'i'),
      /(?:was raised|was born|grew up|received (?:her|his) (?:undergraduate|Bachelor|Master|medical))[^<]{200,1500}/i,
      /(Emma|Raven|Malia|Dr\.|PA).*?(?:University|College|School|Hospital|Practice|Clinic)[^<]{200,1500}/i
    ];

    for (const pattern of bioPatterns) {
      const bioMatch = contentWithoutTestimonials.match(pattern);
      if (bioMatch) {
        const extracted = cleanText(bioMatch[0]);
        // Make sure it's not a testimonial (no quotes, no "pleased with")
        if (extracted.length > 200 && !extracted.includes('"') && !extracted.includes('pleased with') && !extracted.includes('recommend them')) {
          bio = extracted;
          break;
        }
      }
    }

    // If still no bio found, look for any long paragraph after "About" section
    if (!bio || bio.length < 100) {
      const aboutSectionPattern = /About.*?<\/h2>.*?<p[^>]*>(.*?)<\/p>/gs;
      const aboutMatches = contentWithoutTestimonials.matchAll(aboutSectionPattern);
      for (const match of aboutMatches) {
        const text = cleanText(match[1]);
        // Must be longer than 300 chars (bios are substantial) and not a testimonial
        if (text.length > 300 && !text.includes('"') && !text.includes('reviewed') && !text.includes('pleased')) {
          bio = text;
          break;
        }
      }
    }

    // Extract short bio (first 2 sentences or 200 chars)
    let shortBio = '';
    if (bio && bio.length > 0) {
      const sentences = bio.match(/[^.!?]+[.!?]+/g);
      if (sentences && sentences.length >= 2) {
        shortBio = sentences.slice(0, 2).join(' ').trim();
      } else {
        shortBio = bio.substring(0, 200) + '...';
      }
    }

    // Extract profile image URL
    let imageUrl = '';
    // Look for various image patterns
    const imagePatterns = [
      /https:\\\/\\\/[^"'\s]*\\\/([^"'\\/\s]*bio-pic\.jpg)/i,
      /https:\\\/\\\/[^"'\s]*\\\/(dr-[^"'\\/\s]*\.jpg)/i,
      /src="(https:\/\/[^"]*\/[^"]*bio-pic\.jpg)"/i,
      /src="(https:\/\/[^"]*\/dr-[^"]*\.jpg)"/i
    ];

    for (const pattern of imagePatterns) {
      const imageMatch = content.match(pattern);
      if (imageMatch) {
        imageUrl = imageMatch[imageMatch.length - 1] || imageMatch[0];
        imageUrl = imageUrl
          .replace(/\\\//g, '/')
          .replace(/\\/g, '');
        break;
      }
    }

    // Extract specialties from content
    const specialties = [];
    const specialtyKeywords = {
      'Mohs surgery': /mohs/i,
      'Skin Cancer Treatment': /skin cancer/i,
      'Medical Dermatology': /medical dermatology/i,
      'Cosmetic Dermatology': /cosmetic dermatology/i,
      'Surgical Dermatology': /surgical|surgery/i,
      'General Dermatology': /dermatology/i
    };

    for (const [specialty, pattern] of Object.entries(specialtyKeywords)) {
      if (pattern.test(content)) {
        specialties.push(specialty);
      }
    }

    // Extract certifications
    const certifications = [];
    const certPatterns = [
      /Board[- ]Certified/i,
      /fellowship trained/i,
      /certified/i
    ];

    for (const pattern of certPatterns) {
      const match = content.match(pattern);
      if (match && !certifications.includes(match[0])) {
        certifications.push(match[0]);
      }
    }

    return {
      name,
      slug: name.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, ''),
      title,
      bio,
      shortBio: shortBio || bio.substring(0, 200) + '...',
      imageUrl,
      education: education.slice(0, 5),
      certifications,
      specialties: [...new Set(specialties)], // remove duplicates
      active: true,
      sourceFile: path.basename(filePath)
    };
  } catch (error) {
    console.log(`   Error parsing provider data: ${error.message}`);
    return null;
  }
}

/**
 * Main execution
 */
console.log('════════════════════════════════════════════════════════════\n');
console.log('   WordPress to Next.js Content Extractor\n');
console.log('════════════════════════════════════════════════════════════\n');

const providers = extractProviders();

console.log('\n════════════════════════════════════════════════════════════');
console.log('   Extraction Complete!');
console.log('════════════════════════════════════════════════════════════\n');
console.log(`📁 Output folder: ${OUTPUT_PATH}`);
console.log(`\nNext steps:`);
console.log(`1. Review the extracted data in: extracted-content/providers.json`);
console.log(`2. Run the import script to add this data to Sanity`);
console.log(`3. Manually review and clean up any formatting issues\n`);
