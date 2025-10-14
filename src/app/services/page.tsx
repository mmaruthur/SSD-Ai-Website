import { getAllServices } from '@/lib/sanity.queries';
import ServicesClient from './ServicesClient';

// Fallback data from WordPress export
const fallbackServices = [
  {
    title: 'Mohs Surgery',
    shortDescription: 'Mohs micrographic surgery is the most advanced and effective treatment for most types of skin cancer, with cure rates up to 99% for new cancers. This precise surgical technique minimizes scarring while ensuring complete cancer removal with the highest cure rate and lowest recurrence rate.',
    imageUrl: 'https://southernskiesdermatology.com/wp-content/uploads/2022/06/Dr.-M-action-2-operating-.jpg',
    slug: { current: 'mohs-surgery' },
    category: 'Surgical Procedures',
    featured: true,
  },
  {
    title: 'Skin Biopsies',
    shortDescription: 'Skin biopsies can detect or rule out multiple skin conditions. Our board-certified dermatologists perform biopsies with local anesthetic to provide quick and accurate results for diagnosis and treatment planning.',
    imageUrl: 'https://southernskiesdermatology.com/wp-content/uploads/2022/05/doctor-dermatologist-examining-birthmarks-and-mole-2021-09-04-09-08-11-utc.jpg',
    slug: { current: 'skin-biopsies' },
    category: 'Diagnostic Procedures',
    featured: true,
  },
  {
    title: 'Full Body Skin Exams',
    shortDescription: 'Comprehensive visual examination checking skin all over including your scalp and between your toes for any abnormalities. Early detection is key to successful treatment of skin conditions and cancers.',
    imageUrl: 'https://southernskiesdermatology.com/wp-content/uploads/2022/04/female-doctor-checking-the-body-of-female-patient-2021-08-28-16-45-40-utc.png',
    slug: { current: 'full-body-skin-exams' },
    category: 'Preventive Care',
    featured: true,
  },
  {
    title: 'Mole & Skin Tag Removal',
    shortDescription: 'Safe and quick removal of benign spots including moles and skin tags. This procedure allows patients to get right back to their day with minimal downtime and excellent cosmetic results.',
    imageUrl: 'https://southernskiesdermatology.com/wp-content/uploads/2022/05/doctor-dermatologist-examining-birthmarks-and-mole-2021-09-04-09-08-11-utc.jpg',
    slug: { current: 'mole-skin-tag-removal' },
    category: 'Cosmetic Procedures',
    featured: false,
  },
  {
    title: 'Plastic Surgery Reconstruction',
    shortDescription: 'Specialized reconstruction after skin cancer removal. Led by Dr. Mario Maruthur, one of the best trained and high-volume Mohs surgeons in the United States, using advanced plastic surgery techniques to minimize scarring and optimize cosmetic outcomes.',
    imageUrl: 'https://southernskiesdermatology.com/wp-content/uploads/2022/05/doctor-dermatologist-examining-birthmarks-and-mole-2021-09-04-09-08-11-utc.jpg',
    slug: { current: 'plastic-surgery-reconstruction' },
    category: 'Surgical Procedures',
    featured: true,
  },
  {
    title: 'Pre-Cancer Treatments - Cryotherapy and Chemical Peels',
    shortDescription: 'Cryotherapy for Actinic Keratosis and Chemical Peels for pre-cancerous lesions. These treatments help prevent the development of skin cancer by removing pre-cancerous cells and treating various topical conditions.',
    imageUrl: 'https://southernskiesdermatology.com/wp-content/uploads/2022/04/female-doctor-checking-the-body-of-female-patient-2021-08-28-16-45-40-utc.png',
    slug: { current: 'pre-cancer-treatments-cryotherapy-and-chemical-peels' },
    category: 'Medical Dermatology',
    featured: false,
  },
  {
    title: 'Before Mohs Surgery',
    shortDescription: 'Preparing for Mohs Surgery - Learn what to expect before your procedure. Mohs surgery is an outpatient procedure performed in our clinic and requires no hospital stay.',
    imageUrl: 'https://southernskiesdermatology.com/wp-content/uploads/2022/06/Chelsi-Davis-Shundra-Sawyer.jpg',
    slug: { current: 'before-mohs-surgery' },
    category: 'Surgical Procedures',
    featured: false,
  },
];

export default async function ServicesPage() {
  // Fetch real data from Sanity
  // const services = await getAllServices();

  // Use Sanity data if available, otherwise use fallback
  // const allServices = services.length > 0 ? services : fallbackServices;

  // TEMPORARY: Using fallback data until Sanity is populated with real services
  const allServices = fallbackServices;

  return <ServicesClient services={allServices} />;
}
