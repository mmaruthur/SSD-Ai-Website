import Link from 'next/link';
import Image from 'next/image';
import { getAllLocations } from '@/lib/sanity.queries';

// Real location data from https://southernskiesdermatology.com
const fallbackLocations = [
  {
    name: "St. Vincent's East Campus",
    slug: { current: 'st-vincents-east' },
    address: '48 Medical Park Dr E #458',
    city: 'Birmingham',
    state: 'AL',
    zipCode: '35235',
    phone: '(205) 900-2000',
    email: 'info@southernskiesdermatology.com',
    hoursOfOperation: [
      { day: 'Monday', hours: '8:00 AM - 4:30 PM' },
      { day: 'Tuesday', hours: '8:00 AM - 4:30 PM' },
      { day: 'Wednesday', hours: '8:00 AM - 4:30 PM' },
      { day: 'Thursday', hours: '8:00 AM - 4:30 PM' },
      { day: 'Friday', hours: '8:00 AM - 12:00 PM' },
      { day: 'Saturday', hours: 'Closed' },
      { day: 'Sunday', hours: 'Closed' },
    ],
    imageUrl: 'https://southernskiesdermatology.com/wp-content/uploads/2022/06/Kelsie-Bogdan-Amie-Golightly-Tiffany-Wilson-Chelsi-Davis-Dr-M-Adrienne-Keely-Pam-Owen-Stephanie-White-cropped-scaled.jpg',
    parkingInfo: 'Free parking available on-site',
    accessibilityFeatures: ['Wheelchair accessible entrance', 'Accessible restrooms', 'Accessible parking spaces'],
  },
  {
    name: 'Southern Skies Dermatology / ENT Associates of Alabama',
    slug: { current: 'pell-city' },
    address: '423 23rd St N',
    city: 'Pell City',
    state: 'AL',
    zipCode: '35125',
    phone: '(205) 900-2000',
    email: 'info@southernskiesdermatology.com',
    hoursOfOperation: [
      { day: 'Monday', hours: 'Closed' },
      { day: 'Tuesday', hours: '8:00 AM - 4:00 PM' },
      { day: 'Wednesday', hours: 'Closed' },
      { day: 'Thursday', hours: 'Closed' },
      { day: 'Friday', hours: 'Closed' },
      { day: 'Saturday', hours: 'Closed' },
      { day: 'Sunday', hours: 'Closed' },
    ],
    imageUrl: 'https://southernskiesdermatology.com/wp-content/uploads/2022/04/female-doctor-checking-the-body-of-female-patient-2021-08-28-16-45-40-utc.png',
    parkingInfo: 'Free parking available',
    accessibilityFeatures: ['Wheelchair accessible entrance'],
  },
  {
    name: 'Gadsden Regional Medical Center',
    slug: { current: 'gadsden' },
    address: '300 Medical Center Dr E #402',
    city: 'Gadsden',
    state: 'AL',
    zipCode: '35903',
    phone: '(205) 900-2000',
    email: 'info@southernskiesdermatology.com',
    hoursOfOperation: [
      { day: 'Monday', hours: '8:00 AM - 4:30 PM' },
      { day: 'Tuesday', hours: 'Closed' },
      { day: 'Wednesday', hours: '8:00 AM - 4:30 PM' },
      { day: 'Thursday', hours: '8:00 AM - 4:30 PM' },
      { day: 'Friday', hours: 'Closed' },
      { day: 'Saturday', hours: 'Closed' },
      { day: 'Sunday', hours: 'Closed' },
    ],
    imageUrl: 'https://southernskiesdermatology.com/wp-content/uploads/2022/05/doctor-dermatologist-examining-birthmarks-and-mole-2021-09-04-09-08-11-utc.jpg',
    parkingInfo: 'Free parking available',
    accessibilityFeatures: ['Wheelchair accessible entrance', 'Accessible restrooms'],
  },
  {
    name: 'RMC Oxford Mediplex',
    slug: { current: 'oxford' },
    address: '1400 Highway Dr Ste C',
    city: 'Oxford',
    state: 'AL',
    zipCode: '36203',
    phone: '(205) 900-2000',
    email: 'info@southernskiesdermatology.com',
    hoursOfOperation: [
      { day: 'Monday', hours: '8:00 AM - 4:30 PM' },
      { day: 'Tuesday', hours: 'Closed' },
      { day: 'Wednesday', hours: '8:00 AM - 4:30 PM' },
      { day: 'Thursday', hours: '8:00 AM - 4:30 PM' },
      { day: 'Friday', hours: 'Closed' },
      { day: 'Saturday', hours: 'Closed' },
      { day: 'Sunday', hours: 'Closed' },
    ],
    imageUrl: 'https://southernskiesdermatology.com/wp-content/uploads/2022/06/Dr.-M-action-2-operating-.jpg',
    parkingInfo: 'Free parking available',
    accessibilityFeatures: ['Wheelchair accessible entrance', 'Accessible restrooms'],
  },
];

export default async function LocationsPage() {
  // Fetch real data from Sanity
  // const sanityLocations = await getAllLocations();

  // Use Sanity data if available, otherwise use fallback
  // const locations = sanityLocations.length > 0 ? sanityLocations : fallbackLocations;

  // TEMPORARY: Using fallback data until Sanity is populated with real Alabama locations
  const locations = fallbackLocations;
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-800 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Locations
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
            Convenient dermatology care across multiple locations. Find the office nearest you.
          </p>
        </div>
      </section>

      {/* Quick Location Cards */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {locations.map((location) => (
              <a
                key={typeof location.slug === 'string' ? location.slug : location.slug.current}
                href={`#${typeof location.slug === 'string' ? location.slug : location.slug.current}`}
                className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold mb-2">{location.name}</h3>
                <p className="text-gray-600 mb-1">{location.city}, {location.state}</p>
                <p className="text-primary font-semibold">{location.phone}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Location Cards */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto space-y-16">
          {locations.map((location, index) => {
            const locationSlug = typeof location.slug === 'string' ? location.slug : location.slug.current;
            const locationImage = location.imageUrl || 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800';
            const mapUrl = `https://maps.google.com/?q=${encodeURIComponent(`${location.address}, ${location.city}, ${location.state} ${location.zipCode}`)}`;

            return (
            <div
              key={locationSlug}
              id={locationSlug}
              className="bg-white rounded-2xl shadow-xl overflow-hidden scroll-mt-20"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className={`relative h-96 md:h-auto ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <Image
                    src={locationImage}
                    alt={location.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className={`p-8 md:p-12 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <h2 className="text-4xl font-bold mb-6">{location.name}</h2>

                  {/* Address */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <span>📍</span> Address
                    </h3>
                    <p className="text-gray-700">
                      {location.address}<br />
                      {location.city}, {location.state} {location.zipCode}
                    </p>
                    <a
                      href={mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-semibold hover:underline inline-block mt-2"
                    >
                      Get Directions →
                    </a>
                  </div>

                  {/* Contact */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <span>📞</span> Contact
                    </h3>
                    <p className="text-gray-700">
                      Phone: <a href={`tel:${location.phone}`} className="text-primary hover:underline">{location.phone}</a><br />
                      Email: <a href={`mailto:${location.email}`} className="text-primary hover:underline">{location.email}</a>
                    </p>
                  </div>

                  {/* Hours */}
                  {location.hoursOfOperation && location.hoursOfOperation.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                        <span>🕐</span> Hours
                      </h3>
                      <div className="space-y-1">
                        {location.hoursOfOperation.map((schedule) => (
                          <div key={schedule.day} className="flex justify-between text-sm">
                            <span className="font-medium text-gray-700">{schedule.day}:</span>
                            <span className={schedule.hours === 'Closed' ? 'text-gray-400' : 'text-gray-700'}>
                              {schedule.hours}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Parking */}
                  {location.parkingInfo && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                        <span>🅿️</span> Parking
                      </h3>
                      <p className="text-gray-700">{location.parkingInfo}</p>
                    </div>
                  )}

                  {/* Accessibility */}
                  {location.accessibilityFeatures && location.accessibilityFeatures.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                        <span>♿</span> Accessibility
                      </h3>
                      <ul className="space-y-1">
                        {location.accessibilityFeatures.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="text-primary mt-1">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* CTA Button */}
                  <Link
                    href="/contact"
                    className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
                  >
                    Schedule at {location.name.split(' ')[0]}
                  </Link>
                </div>
              </div>
            </div>
          );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Not Sure Which Location to Choose?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us and we'll help you find the most convenient office and provider for your needs.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact"
              className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
            >
              Contact Us
            </Link>
            <Link
              href="/providers"
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/5 transition-all"
            >
              Meet Our Providers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
