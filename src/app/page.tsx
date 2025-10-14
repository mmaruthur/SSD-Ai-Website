import Link from 'next/link';
import ServiceCard from '@/components/cards/ServiceCard';
import ProviderCard from '@/components/cards/ProviderCard';
import { getFeaturedProviders, getFeaturedServices } from '@/lib/sanity.queries';

// Fallback mock data from WordPress export
const fallbackServices = [
  {
    title: 'Mohs Surgery',
    shortDescription: 'Mohs micrographic surgery is the most advanced and effective treatment for most types of skin cancer, with cure rates up to 99% for new cancers and the lowest recurrence rate.',
    imageUrl: 'https://southernskiesdermatology.com/wp-content/uploads/2022/06/Dr.-M-action-2-operating-.jpg',
    slug: { current: 'mohs-surgery' },
  },
  {
    title: 'Skin Biopsies',
    shortDescription: 'Skin biopsies can detect or rule out multiple skin conditions. Performed with local anesthetic for quick and accurate results.',
    imageUrl: 'https://southernskiesdermatology.com/wp-content/uploads/2022/05/doctor-dermatologist-examining-birthmarks-and-mole-2021-09-04-09-08-11-utc.jpg',
    slug: { current: 'skin-biopsies' },
  },
  {
    title: 'Full Body Skin Exams',
    shortDescription: 'Comprehensive visual examination checking skin all over including your scalp and between your toes for any abnormalities. Early detection is key.',
    imageUrl: 'https://southernskiesdermatology.com/wp-content/uploads/2022/04/female-doctor-checking-the-body-of-female-patient-2021-08-28-16-45-40-utc.png',
    slug: { current: 'full-body-skin-exams' },
  },
];

const fallbackProviders = [
  {
    name: 'Dr. Mario Maruthur',
    professionalTitle: 'MD, FAAD, FACMS - Mohs Surgeon & Dermatologist',
    imageUrl: 'https://southernskiesdermatology.com/wp-content/uploads/2022/12/dr-mario-maruthur-new-pic.jpg',
    slug: { current: 'dr-mario-maruthur' },
    shortBio: 'Fellowship-trained and Board-Certified Mohs Micrographic surgeon specializing exclusively in skin cancer treatment. Trained at Memorial Sloan Kettering Cancer Center and graduated top of his class from University of Arkansas for Medical Sciences.',
    areasOfExpertise: ['Mohs Surgery', 'Skin Cancer Treatment', 'Dermatologic Oncology', 'Plastic Surgery Reconstruction'],
  },
  {
    name: 'Dr. Malia Downing',
    professionalTitle: 'MD, FAAD - Dermatologist',
    imageUrl: 'https://southernskiesdermatology.com/wp-content/uploads/2025/05/dr-downin-bio-pic.jpg',
    slug: { current: 'dr-malia-downing' },
    shortBio: 'Double Board-Certified dermatologist with fellowship training in both Mohs Micrographic Surgery and Dermatologic Cosmetic Surgery. Graduated summa cum laude and second in her medical school class. Member of Alpha Omega Alpha Medical Honor Society.',
    areasOfExpertise: ['Mohs Surgery', 'Cosmetic Dermatology', 'Skin Cancer Treatment', 'Medical Dermatology'],
  },
  {
    name: 'Raven Omar, PA-C',
    professionalTitle: 'PA-C - Physician Assistant',
    imageUrl: 'https://southernskiesdermatology.com/wp-content/uploads/2025/05/dummy-image.jpg',
    slug: { current: 'raven-omar-pa-c' },
    shortBio: 'Birmingham native and dermatology surgical physician assistant. Graduated from Samford University with Master of Physician Assistant Studies. Former Samford basketball player and two-time championship winner. Assists in Mohs procedures and post-Mohs plastic reconstruction.',
    areasOfExpertise: ['Medical Dermatology', 'Skin Cancer Screening', 'Mohs Surgery Assistance', 'Plastic Surgery Reconstruction'],
  },
];

export default async function Home() {
  // Fetch real data from Sanity
  // const services = await getFeaturedServices(3);
  // const providers = await getFeaturedProviders(3);

  // Use Sanity data if available, otherwise use fallback
  // const featuredServices = services.length > 0 ? services : fallbackServices;
  // const featuredProviders = providers.length > 0 ? providers : fallbackProviders;

  // TEMPORARY: Using fallback data until Sanity is populated
  const featuredServices = fallbackServices;
  const featuredProviders = fallbackProviders;
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-blue-700 to-blue-900 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Expert Dermatology Care
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Comprehensive skin care solutions from board-certified dermatologists
              and experienced physician assistants across multiple locations.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                href="/contact"
                className="bg-secondary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-secondary/90 transition-all hover:scale-105 shadow-xl"
              >
                Book Appointment
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose Us
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Board-Certified Experts</h3>
              <p className="text-gray-600">
                Double board-certified Mohs surgeons and experienced dermatology specialists
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📍</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Multiple Locations</h3>
              <p className="text-gray-600">
                Convenient offices across the region for easy access to care
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💙</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Comprehensive Care</h3>
              <p className="text-gray-600">
                From medical dermatology to advanced cosmetic procedures
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert treatments for all your dermatology needs, from medical care to cosmetic enhancements
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredServices.map((service) => (
              <ServiceCard key={typeof service.slug === 'string' ? service.slug : service.slug.current} {...service} />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary font-semibold text-lg hover:gap-4 transition-all"
            >
              View All Services
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Providers Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Our Providers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our team of board-certified dermatologists and experienced physician assistants
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredProviders.map((provider) => (
              <ProviderCard key={typeof provider.slug === 'string' ? provider.slug : provider.slug.current} {...provider} />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/providers"
              className="inline-flex items-center gap-2 text-primary font-semibold text-lg hover:gap-4 transition-all"
            >
              Meet Our Full Team
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Our Patients Say
            </h2>
            <p className="text-xl text-gray-600">
              Read testimonials from our satisfied patients
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Gale Sanders',
                location: 'Gadsden',
                text: 'I was extremely pleased with my experience at Southern Skies. The scar was barely noticeable within a month. I recommend them highly!',
                rating: 5,
              },
              {
                name: 'Rebecca Long',
                location: 'Gadsden',
                text: "I'm very pleased with the care and concern of this staff. The reconstruction looks wonderful. They treat me like family.",
                rating: 5,
              },
              {
                name: 'Michael Brown',
                location: 'Ohatchee',
                text: 'Dr. Mario and his staff are very professional. They make me feel secure with their treatment and knowledge.',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-secondary text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Schedule your appointment today and experience expert dermatology care
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact"
              className="bg-secondary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-secondary/90 transition-all hover:scale-105 shadow-xl"
            >
              Request Appointment
            </Link>
            <Link
              href="/locations"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all"
            >
              Find a Location
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
