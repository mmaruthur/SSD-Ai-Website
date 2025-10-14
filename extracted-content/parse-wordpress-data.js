const fs = require('fs');
const path = require('path');

// Load JSON data
const providers = require('./providers-complete.json');
const services = require('./services-complete.json');
const locations = require('./locations-complete.json');

// Helper function to extract image URL from Divi shortcode content
function extractImageUrl(content) {
  // Find all src URLs
  const srcMatches = content.match(/src="([^"]+)"/g);

  if (srcMatches) {
    // Filter out dividers, icons, and other non-main images
    const cleanUrls = srcMatches
      .map(m => m.match(/src="([^"]+)"/)[1])
      .filter(url => {
        return !url.includes('Divider') &&
               !url.includes('divider') &&
               !url.includes('icon') &&
               !url.includes('Icon') &&
               !url.includes('youtube') &&
               !url.includes('youtu.be') &&
               !url.includes('Logo_As_BG') &&
               !url.includes('.svg') &&
               (url.includes('.jpg') || url.includes('.jpeg') || url.includes('.png') || url.includes('.webp'));
      });

    if (cleanUrls.length > 0) return cleanUrls[0];
  }

  // Try background_image attribute
  const backgroundMatch = content.match(/background_image="([^"]+)"/);
  if (backgroundMatch &&
      !backgroundMatch[1].includes('Divider') &&
      !backgroundMatch[1].includes('Logo_As_BG')) {
    return backgroundMatch[1];
  }

  return null;
}

// Helper function to extract text content from HTML/shortcodes
function extractTextContent(content) {
  // Remove Divi shortcodes
  let text = content.replace(/\[et_pb[^\]]*\]/g, '');
  text = text.replace(/\[\/et_pb[^\]]*\]/g, '');
  text = text.replace(/\[dsm[^\]]*\]/g, '');
  text = text.replace(/\[\/dsm[^\]]*\]/g, '');
  text = text.replace(/\[dica[^\]]*\]/g, '');
  text = text.replace(/\[\/dica[^\]]*\]/g, '');

  // Remove HTML tags
  text = text.replace(/<[^>]+>/g, ' ');

  // Decode HTML entities
  text = text.replace(/&nbsp;/g, ' ');
  text = text.replace(/&amp;/g, '&');
  text = text.replace(/&lt;/g, '<');
  text = text.replace(/&gt;/g, '>');
  text = text.replace(/&quot;/g, '"');

  // Clean up whitespace
  text = text.replace(/\s+/g, ' ').trim();

  return text;
}

// Helper function to truncate text to a specific length
function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
}

// Parse Providers
console.log('Parsing Providers...');
const parsedProviders = providers
  .filter(p => {
    // Filter out templates and "Our Doctors & Staff" pages
    return p.post_status === 'publish' &&
           p.post_title !== 'Provider Template' &&
           p.post_title !== 'Our Doctors & Staff' &&
           !p.post_title.includes('Template');
  })
  .map(provider => {
    const imageUrl = extractImageUrl(provider.post_content);
    const textContent = extractTextContent(provider.post_content);

    // Try to extract a short bio (first paragraph)
    const shortBio = truncateText(textContent, 250);

    // Determine specialty based on title
    let specialty = 'Provider';
    let professionalTitle = '';

    if (provider.post_title.includes('Dr.')) {
      specialty = 'Dermatologist';
      if (provider.post_title.includes('Maruthur')) {
        professionalTitle = 'MD, FAAD, FACMS - Mohs Surgeon & Dermatologist';
      } else if (provider.post_title.includes('Downing')) {
        professionalTitle = 'MD, FAAD - Dermatologist';
      } else {
        professionalTitle = 'MD, FAAD - Dermatologist';
      }
    } else if (provider.post_title.includes('PA-C') || provider.post_title.includes('PA')) {
      specialty = 'Physician Assistant';
      professionalTitle = 'PA-C - Physician Assistant';
    } else if (provider.post_title.includes('NP') || provider.post_title.includes('Nurse Practitioner')) {
      specialty = 'Nurse Practitioner';
      professionalTitle = 'NP - Nurse Practitioner';
    }

    // Extract areas of expertise from content
    const areasOfExpertise = [];
    if (textContent.includes('Mohs')) areasOfExpertise.push('Mohs Surgery');
    if (textContent.includes('skin cancer')) areasOfExpertise.push('Skin Cancer Treatment');
    if (textContent.includes('cosmetic') || textContent.includes('Cosmetic')) areasOfExpertise.push('Cosmetic Dermatology');
    if (textContent.includes('dermatology') && areasOfExpertise.length === 0) areasOfExpertise.push('Medical Dermatology');
    if (areasOfExpertise.length === 0) areasOfExpertise.push('General Dermatology');

    return {
      name: provider.post_title,
      professionalTitle,
      imageUrl: imageUrl || 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600',
      slug: { current: provider.post_name },
      shortBio,
      areasOfExpertise,
      specialty,
    };
  })
  // Remove duplicates by slug (keep the latest one)
  .reduce((acc, provider) => {
    const existing = acc.find(p => p.slug.current === provider.slug.current);
    if (!existing) {
      acc.push(provider);
    }
    return acc;
  }, []);

console.log(`Found ${parsedProviders.length} providers`);

// Parse Services
console.log('\nParsing Services...');
const parsedServices = services
  .filter(s => {
    return s.post_status === 'publish' &&
           s.post_title !== 'Service Template' &&
           !s.post_title.includes('Template');
  })
  .map(service => {
    const imageUrl = extractImageUrl(service.post_content);
    const textContent = extractTextContent(service.post_content);
    const shortDescription = truncateText(textContent, 150);

    // Determine category
    let category = 'Medical Dermatology';
    if (textContent.includes('cosmetic') || textContent.includes('Cosmetic') ||
        textContent.includes('Botox') || textContent.includes('filler')) {
      category = 'Cosmetic Services';
    } else if (textContent.includes('surgical') || textContent.includes('Surgery') ||
               textContent.includes('Mohs')) {
      category = 'Surgical Procedures';
    }

    // Determine if featured (Mohs Surgery and Skin Cancer Screening are always featured)
    const featured = service.post_title.includes('Mohs') ||
                    service.post_title.includes('Skin Cancer') ||
                    service.post_title.includes('Screening');

    return {
      title: service.post_title,
      shortDescription,
      imageUrl: imageUrl || 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
      slug: { current: service.post_name },
      category,
      featured,
    };
  })
  .reduce((acc, service) => {
    const existing = acc.find(s => s.slug.current === service.slug.current);
    if (!existing) {
      acc.push(service);
    }
    return acc;
  }, []);

console.log(`Found ${parsedServices.length} services`);

// Parse Locations
console.log('\nParsing Locations...');
const parsedLocations = locations
  .filter(l => {
    return l.post_status === 'publish' &&
           l.post_title !== 'Location Template' &&
           !l.post_title.includes('Template');
  })
  .map(location => {
    const imageUrl = extractImageUrl(location.post_content);
    const textContent = extractTextContent(location.post_content);

    // Extract address, phone, etc. from content
    // This is a simplified extraction - you might need to adjust based on actual content structure
    const phoneMatch = textContent.match(/\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/);
    const phone = phoneMatch ? phoneMatch[0] : '(205) 123-4567';

    // Determine city/state from title
    let city = location.post_title.split(' ')[0];
    let name = location.post_title;

    // Default hours
    const hoursOfOperation = [
      { day: 'Monday', hours: '8:00 AM - 5:00 PM' },
      { day: 'Tuesday', hours: '8:00 AM - 5:00 PM' },
      { day: 'Wednesday', hours: '8:00 AM - 5:00 PM' },
      { day: 'Thursday', hours: '8:00 AM - 5:00 PM' },
      { day: 'Friday', hours: '8:00 AM - 5:00 PM' },
    ];

    return {
      name,
      slug: { current: location.post_name },
      address: '123 Main Street, Suite 100',  // You'll need to update with real data
      city,
      state: 'AL',
      zipCode: '35173',
      phone,
      email: `${location.post_name}@southernskiesdermatology.com`,
      hoursOfOperation,
      imageUrl: imageUrl || 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800',
      parkingInfo: 'Free parking available',
      accessibilityFeatures: ['Wheelchair accessible entrance', 'Accessible restrooms'],
    };
  })
  .reduce((acc, location) => {
    const existing = acc.find(l => l.slug.current === location.slug.current);
    if (!existing) {
      acc.push(location);
    }
    return acc;
  }, []);

console.log(`Found ${parsedLocations.length} locations`);

// Output the results
console.log('\n=== PROVIDERS ===');
console.log(JSON.stringify(parsedProviders, null, 2));

console.log('\n=== SERVICES ===');
console.log(JSON.stringify(parsedServices, null, 2));

console.log('\n=== LOCATIONS ===');
console.log(JSON.stringify(parsedLocations, null, 2));

// Save to separate files for easy use
fs.writeFileSync(
  path.join(__dirname, 'parsed-providers.json'),
  JSON.stringify(parsedProviders, null, 2)
);

fs.writeFileSync(
  path.join(__dirname, 'parsed-services.json'),
  JSON.stringify(parsedServices, null, 2)
);

fs.writeFileSync(
  path.join(__dirname, 'parsed-locations.json'),
  JSON.stringify(parsedLocations, null, 2)
);

console.log('\n✓ Saved parsed data to JSON files');
