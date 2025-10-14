/**
 * Import WordPress Extracted Content to Sanity CMS
 *
 * This script takes the extracted WordPress content and imports it into Sanity.
 * Run with: node scripts/import-to-sanity.js
 */

const { createClient } = require('@sanity/client');
const fs = require('fs');
const path = require('path');

// Initialize Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'demo-project',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

console.log('🚀 Starting Sanity Import...\n');

/**
 * Import Providers
 */
async function importProviders() {
  console.log('👨‍⚕️ Importing Providers...');

  const providersPath = path.join(__dirname, '../extracted-content/providers.json');

  if (!fs.existsSync(providersPath)) {
    console.log('   ⚠️  No providers.json found. Run extraction script first.');
    return;
  }

  const providers = JSON.parse(fs.readFileSync(providersPath, 'utf8'));

  for (const provider of providers) {
    try {
      const sanityDoc = {
        _type: 'provider',
        name: provider.name,
        slug: {
          _type: 'slug',
          current: provider.slug,
        },
        professionalTitle: provider.title,
        specialty: determineSpecialty(provider.name, provider.title),
        shortBio: provider.shortBio,
        biography: provider.bio,
        education: provider.education || [],
        certifications: provider.certifications || [],
        areasOfExpertise: provider.specialties || [],
        active: provider.active !== false,
        displayOrder: providers.indexOf(provider) + 1,
      };

      // Create the document
      const result = await client.create(sanityDoc);
      console.log(`   ✓ Imported: ${provider.name} (${result._id})`);
    } catch (error) {
      console.log(`   ✗ Error importing ${provider.name}: ${error.message}`);
    }
  }

  console.log(`\n✅ Imported ${providers.length} providers\n`);
}

/**
 * Helper: Determine specialty from name/title
 */
function determineSpecialty(name, title) {
  if (name.includes('Dr.') || title.includes('MD') || title.includes('Dermatologist')) {
    return 'Dermatologist';
  } else if (title.includes('PA')) {
    return 'Physician Assistant';
  } else if (title.includes('NP')) {
    return 'Nurse Practitioner';
  }
  return 'Dermatology Provider';
}

/**
 * Create Sample Services
 */
async function createSampleServices() {
  console.log('💼 Creating Sample Services...');

  const services = [
    {
      title: 'Mohs Surgery',
      category: 'Medical Dermatology',
      shortDescription: 'Advanced skin cancer treatment with the highest cure rate and minimal scarring.',
      fullDescription: 'Mohs micrographic surgery is the most effective technique for treating many basal cell carcinomas (BCCs) and squamous cell carcinomas (SCCs), the two most common types of skin cancer. It offers the highest cure rate while preserving healthy tissue and minimizing cosmetic impact.',
      benefits: ['Highest cure rate', 'Tissue preservation', 'Immediate results', 'Minimal scarring'],
      featured: true,
      displayOrder: 1,
    },
    {
      title: 'Skin Cancer Screening',
      category: 'Medical Dermatology',
      shortDescription: 'Comprehensive full-body skin examinations for early detection.',
      fullDescription: 'Regular skin cancer screenings are essential for early detection and treatment. Our board-certified dermatologists perform thorough examinations to identify suspicious lesions and provide immediate recommendations.',
      benefits: ['Early detection', 'Professional examination', 'Peace of mind', 'Prevention planning'],
      featured: true,
      displayOrder: 2,
    },
    {
      title: 'Botox & Fillers',
      category: 'Cosmetic Services',
      shortDescription: 'Expert cosmetic treatments for a youthful appearance.',
      fullDescription: 'Our experienced providers offer expert injection techniques for Botox and dermal fillers to smooth wrinkles, restore volume, and enhance your natural beauty.',
      benefits: ['Quick procedure', 'Natural results', 'Minimal downtime', 'Long-lasting'],
      featured: true,
      displayOrder: 3,
    },
  ];

  for (const service of services) {
    try {
      const sanityDoc = {
        _type: 'service',
        title: service.title,
        slug: {
          _type: 'slug',
          current: service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        },
        category: service.category,
        shortDescription: service.shortDescription,
        fullDescription: service.fullDescription,
        benefits: service.benefits,
        featured: service.featured,
        displayOrder: service.displayOrder,
      };

      const result = await client.create(sanityDoc);
      console.log(`   ✓ Created: ${service.title} (${result._id})`);
    } catch (error) {
      console.log(`   ✗ Error creating ${service.title}: ${error.message}`);
    }
  }

  console.log(`\n✅ Created ${services.length} sample services\n`);
}

/**
 * Create Sample Locations
 */
async function createSampleLocations() {
  console.log('📍 Creating Sample Locations...');

  const locations = [
    {
      name: 'Scottsdale Office',
      address: '1234 Main Street, Suite 100',
      city: 'Scottsdale',
      state: 'AZ',
      zipCode: '85251',
      phone: '(480) 555-1234',
      email: 'scottsdale@southernskiesdermatology.com',
      hoursOfOperation: [
        { day: 'Monday', hours: '8:00 AM - 5:00 PM' },
        { day: 'Tuesday', hours: '8:00 AM - 5:00 PM' },
        { day: 'Wednesday', hours: '8:00 AM - 5:00 PM' },
        { day: 'Thursday', hours: '8:00 AM - 5:00 PM' },
        { day: 'Friday', hours: '8:00 AM - 5:00 PM' },
      ],
      parkingInfo: 'Free parking available in rear lot',
      accessibilityFeatures: ['Wheelchair accessible entrance', 'Elevator available'],
      displayOrder: 1,
    },
    {
      name: 'Phoenix Office',
      address: '5678 Central Avenue, Suite 200',
      city: 'Phoenix',
      state: 'AZ',
      zipCode: '85012',
      phone: '(602) 555-5678',
      email: 'phoenix@southernskiesdermatology.com',
      hoursOfOperation: [
        { day: 'Monday', hours: '8:00 AM - 5:00 PM' },
        { day: 'Tuesday', hours: '8:00 AM - 5:00 PM' },
        { day: 'Wednesday', hours: '8:00 AM - 5:00 PM' },
        { day: 'Thursday', hours: '8:00 AM - 5:00 PM' },
        { day: 'Friday', hours: '8:00 AM - 4:00 PM' },
      ],
      parkingInfo: 'Street parking and nearby garage',
      accessibilityFeatures: ['Wheelchair accessible entrance'],
      displayOrder: 2,
    },
  ];

  for (const location of locations) {
    try {
      const sanityDoc = {
        _type: 'location',
        name: location.name,
        slug: {
          _type: 'slug',
          current: location.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        },
        address: location.address,
        city: location.city,
        state: location.state,
        zipCode: location.zipCode,
        phone: location.phone,
        email: location.email,
        hoursOfOperation: location.hoursOfOperation,
        parkingInfo: location.parkingInfo,
        accessibilityFeatures: location.accessibilityFeatures,
        displayOrder: location.displayOrder,
      };

      const result = await client.create(sanityDoc);
      console.log(`   ✓ Created: ${location.name} (${result._id})`);
    } catch (error) {
      console.log(`   ✗ Error creating ${location.name}: ${error.message}`);
    }
  }

  console.log(`\n✅ Created ${locations.length} sample locations\n`);
}

/**
 * Main execution
 */
async function main() {
  console.log('════════════════════════════════════════════════════════════');
  console.log('   Sanity CMS Import Tool');
  console.log('════════════════════════════════════════════════════════════\n');

  // Check if Sanity is configured
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID === 'demo-project') {
    console.log('⚠️  WARNING: Sanity is not configured!\n');
    console.log('To use this script, you need to:');
    console.log('1. Create a Sanity account at https://sanity.io');
    console.log('2. Create a new project');
    console.log('3. Update .env.local with your project ID and API token');
    console.log('4. Run this script again\n');
    console.log('For now, the website will continue using mock data.\n');
    return;
  }

  try {
    await importProviders();
    await createSampleServices();
    await createSampleLocations();

    console.log('\n════════════════════════════════════════════════════════════');
    console.log('   Import Complete! ✅');
    console.log('════════════════════════════════════════════════════════════\n');
    console.log('Next steps:');
    console.log('1. Visit http://localhost:3000/studio to view your content');
    console.log('2. Add images to providers, services, and locations');
    console.log('3. Edit and customize the content as needed\n');
  } catch (error) {
    console.error('\n❌ Import failed:', error.message);
    process.exit(1);
  }
}

main();
