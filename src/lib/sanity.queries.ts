import { client } from './sanity.client';

// Provider Queries
export async function getAllProviders() {
  const query = `*[_type == "provider" && active == true] | order(displayOrder asc) {
    _id,
    name,
    slug,
    professionalTitle,
    specialty,
    shortBio,
    biography,
    "imageUrl": profileImage.asset->url,
    education,
    certifications,
    areasOfExpertise,
    locations[]->{ name, slug },
    displayOrder,
    active
  }`;

  try {
    return await client.fetch(query);
  } catch (error) {
    console.error('Error fetching providers:', error);
    return [];
  }
}

export async function getProviderBySlug(slug: string) {
  const query = `*[_type == "provider" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    professionalTitle,
    specialty,
    shortBio,
    biography,
    "imageUrl": profileImage.asset->url,
    education,
    certifications,
    areasOfExpertise,
    locations[]->{
      name,
      slug,
      address,
      phone
    },
    displayOrder,
    active
  }`;

  try {
    return await client.fetch(query, { slug });
  } catch (error) {
    console.error('Error fetching provider:', error);
    return null;
  }
}

// Service Queries
export async function getAllServices() {
  const query = `*[_type == "service"] | order(displayOrder asc) {
    _id,
    title,
    slug,
    category,
    shortDescription,
    fullDescription,
    "imageUrl": featuredImage.asset->url,
    benefits,
    featured,
    displayOrder
  }`;

  try {
    return await client.fetch(query);
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
}

export async function getServiceBySlug(slug: string) {
  const query = `*[_type == "service" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    category,
    shortDescription,
    fullDescription,
    "imageUrl": featuredImage.asset->url,
    benefits,
    faqs,
    "beforeAfterGallery": beforeAfterGallery[].asset->url,
    featured,
    displayOrder
  }`;

  try {
    return await client.fetch(query, { slug });
  } catch (error) {
    console.error('Error fetching service:', error);
    return null;
  }
}

// Location Queries
export async function getAllLocations() {
  const query = `*[_type == "location"] | order(displayOrder asc) {
    _id,
    name,
    slug,
    address,
    city,
    state,
    zipCode,
    phone,
    email,
    hoursOfOperation,
    "imageUrl": locationImage.asset->url,
    mapCoordinates,
    parkingInfo,
    accessibilityFeatures,
    description,
    displayOrder
  }`;

  try {
    return await client.fetch(query);
  } catch (error) {
    console.error('Error fetching locations:', error);
    return [];
  }
}

export async function getLocationBySlug(slug: string) {
  const query = `*[_type == "location" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    address,
    city,
    state,
    zipCode,
    phone,
    email,
    hoursOfOperation,
    "imageUrl": locationImage.asset->url,
    mapCoordinates,
    parkingInfo,
    accessibilityFeatures,
    description,
    displayOrder
  }`;

  try {
    return await client.fetch(query, { slug });
  } catch (error) {
    console.error('Error fetching location:', error);
    return null;
  }
}

// Featured Content Queries
export async function getFeaturedProviders(limit = 3) {
  const query = `*[_type == "provider" && active == true] | order(displayOrder asc) [0...${limit}] {
    _id,
    name,
    slug,
    professionalTitle,
    specialty,
    shortBio,
    "imageUrl": profileImage.asset->url,
    areasOfExpertise
  }`;

  try {
    return await client.fetch(query);
  } catch (error) {
    console.error('Error fetching featured providers:', error);
    return [];
  }
}

export async function getFeaturedServices(limit = 3) {
  const query = `*[_type == "service" && featured == true] | order(displayOrder asc) [0...${limit}] {
    _id,
    title,
    slug,
    category,
    shortDescription,
    "imageUrl": featuredImage.asset->url,
    featured
  }`;

  try {
    return await client.fetch(query);
  } catch (error) {
    console.error('Error fetching featured services:', error);
    return [];
  }
}
