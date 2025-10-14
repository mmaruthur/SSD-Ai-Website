import { getAllProviders } from '@/lib/sanity.queries';
import ProvidersClient from './ProvidersClient';

// Fallback data from WordPress export and live website
const fallbackProviders = [
  {
    name: 'Dr. Mario Maruthur',
    professionalTitle: 'MD, FAAD, FACMS - Mohs Surgeon & Dermatologist',
    imageUrl: 'https://southernskiesdermatology.com/wp-content/uploads/2022/12/dr-mario-maruthur-new-pic.jpg',
    slug: { current: 'dr-mario-maruthur' },
    shortBio: 'Dr. Mario Maruthur is a fellowship-trained and Board-Certified Mohs Micrographic surgeon and Board-Certified Dermatologist that focuses exclusively on skin cancer treatment. Born and raised in Hot Springs, Arkansas, Dr. Maruthur graduated top of his class with a 4.0 GPA from University of Arkansas for Medical Sciences. He completed his dermatology residency at Emory University and his fellowship in Mohs Micrographic Surgery and Dermatologic Oncology at the prestigious Memorial Sloan Kettering Cancer Center in New York, where he trained under renowned skin cancer surgeons. He currently lives in Vestavia Hills, AL with his wife Dr. Kristina Falkenstrom.',
    areasOfExpertise: ['Mohs Surgery', 'Skin Cancer Treatment', 'Dermatologic Oncology', 'Plastic Surgery Reconstruction'],
    specialty: 'Dermatologist',
  },
  {
    name: 'Dr. Malia Downing',
    professionalTitle: 'MD, FAAD - Dermatologist',
    imageUrl: 'https://southernskiesdermatology.com/wp-content/uploads/2025/05/dr-downin-bio-pic.jpg',
    slug: { current: 'dr-malia-downing' },
    shortBio: 'Dr. Malia Downing is a Double Board-Certified dermatologist with fellowship training in both Mohs Micrographic Surgery and Dermatologic Cosmetic Surgery. She graduated summa cum laude from the College of Saint Scholastica and second in her class from University of North Dakota medical school. Dr. Downing completed her dermatology residency at University of Kansas and fellowship at Surgical Dermatology Group in Birmingham, AL. She is a member of the American Academy of Dermatology, American Society for Dermatologic Surgery, American College of Mohs Surgery, and Alpha Omega Alpha Medical Honor Society. She has published multiple peer-reviewed journal articles and presented at national conferences.',
    areasOfExpertise: ['Mohs Surgery', 'Skin Cancer Treatment', 'Cosmetic Dermatology', 'Medical Dermatology'],
    specialty: 'Dermatologist',
  },
  {
    name: 'Emma Stephens, PA',
    professionalTitle: 'PA-C - Physician Assistant',
    imageUrl: 'https://southernskiesdermatology.com/wp-content/uploads/2025/05/dr-emma-bio-pic.jpg',
    slug: { current: 'emma-stephens-pa' },
    shortBio: 'Emma was born and raised in Madison, AL, and graduated from Bob Jones High School. She went to Samford University, where she earned her BSN in Nursing in 2015. She worked in the cardiac ICU for three years before entering the Physician Assistant Studies program at UAB, where she earned her Masters Degree. Emma discovered her passion for dermatology during clinical rotations in PA school. She has been working in dermatology since 2021 and is passionate about patient care and education.',
    areasOfExpertise: ['Medical Dermatology', 'Skin Cancer Screening', 'Mohs Surgery Assistance', 'Patient Care'],
    specialty: 'Physician Assistant',
  },
  {
    name: 'Raven Omar, PA-C',
    professionalTitle: 'PA-C - Physician Assistant',
    imageUrl: 'https://southernskiesdermatology.com/wp-content/uploads/2025/05/dummy-image.jpg',
    slug: { current: 'raven-omar-pa-c' },
    shortBio: 'Raven Omar is a Birmingham native and dermatology surgical physician assistant. She graduated top of her class from Clay-Chalkville High School and earned her Bachelor of Science in Health Sciences (2021) and Master of Physician Assistant Studies (December 2023) from Samford University. A former point guard for Samford women\'s basketball team (2017-2021), she helped the team win two championships. Raven has been a dermatology surgical physician assistant since 2024, assisting in Mohs procedures and post-Mohs plastic reconstruction. She is passionate about caring for people and making sure her patients leave with a smile.',
    areasOfExpertise: ['Medical Dermatology', 'Skin Cancer Screening', 'Mohs Surgery Assistance', 'Plastic Surgery Reconstruction', 'Patient Care'],
    specialty: 'Physician Assistant',
  },
];

export default async function ProvidersPage() {
  // Fetch real data from Sanity
  // const providers = await getAllProviders();

  // Use Sanity data if available, otherwise use fallback
  // const allProviders = providers.length > 0 ? providers : fallbackProviders;

  // TEMPORARY: Using fallback data until Sanity is populated with real providers
  const allProviders = fallbackProviders;

  return <ProvidersClient providers={allProviders} />;
}
