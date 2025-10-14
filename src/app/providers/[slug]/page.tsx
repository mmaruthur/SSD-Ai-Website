import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProviderBySlug } from '@/lib/sanity.queries';

export default async function ProviderDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const provider = await getProviderBySlug(slug);

  if (!provider) {
    notFound();
  }

  // Handle Sanity data structure
  const imageUrl = provider.imageUrl || 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600';
  const professionalTitle = provider.professionalTitle || '';
  const specialty = provider.specialty || 'Dermatology Provider';
  const biography = provider.biography || provider.shortBio || '';
  const education = provider.education || [];
  const certifications = provider.certifications || [];
  const areasOfExpertise = provider.areasOfExpertise || [];

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>→</span>
            <Link href="/providers" className="hover:text-primary">Providers</Link>
            <span>→</span>
            <span className="text-gray-900 font-semibold">{provider.name}</span>
          </div>
        </div>
      </div>

      {/* Provider Header */}
      <section className="bg-gradient-to-r from-primary to-blue-800 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-1">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={imageUrl}
                  alt={provider.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                {provider.name}
              </h1>
              <p className="text-2xl text-blue-100 mb-2">{professionalTitle}</p>
              <p className="text-xl text-blue-200 mb-8">{specialty}</p>
              <Link
                href="/contact"
                className="inline-block bg-secondary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-secondary/90 transition-all hover:scale-105 shadow-xl"
              >
                Schedule with {provider.name.split(' ')[provider.name.startsWith('Dr.') ? 1 : 0]}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">About {provider.name}</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed text-lg">
              {biography}
            </p>
          </div>
        </div>
      </section>

      {/* Credentials Grid */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Education */}
            {education.length > 0 && (
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl">🎓</span>
                </div>
                <h3 className="text-2xl font-bold mb-6">Education</h3>
                <ul className="space-y-3">
                  {education.map((item, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Certifications */}
            {certifications.length > 0 && (
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl">🏆</span>
                </div>
                <h3 className="text-2xl font-bold mb-6">Certifications</h3>
                <ul className="space-y-3">
                  {certifications.map((item, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Specialties */}
            {areasOfExpertise.length > 0 && (
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl">⚕️</span>
                </div>
                <h3 className="text-2xl font-bold mb-6">Specialties</h3>
                <ul className="space-y-3">
                  {areasOfExpertise.map((item, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Schedule?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Book an appointment with {provider.name} today
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact"
              className="bg-secondary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-secondary/90 transition-all hover:scale-105 shadow-xl"
            >
              Request Appointment
            </Link>
            <Link
              href="/providers"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all"
            >
              View All Providers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
