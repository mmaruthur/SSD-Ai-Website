import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

interface ProviderCardProps {
  name: string;
  professionalTitle?: string; // Sanity field
  title?: string; // Legacy field
  imageUrl?: string; // Sanity field
  image?: string; // Legacy field
  slug: string | { current: string }; // Sanity returns object, legacy is string
  shortBio?: string;
  areasOfExpertise?: string[]; // Sanity field
  specialties?: string[]; // Legacy field
}

export default function ProviderCard({
  name,
  professionalTitle,
  title,
  imageUrl,
  image,
  slug,
  shortBio,
  areasOfExpertise,
  specialties = [],
}: ProviderCardProps) {
  // Handle both Sanity and legacy data structures
  const finalTitle = professionalTitle || title || '';
  const finalImage = imageUrl || image || 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600';
  const finalSlug = typeof slug === 'string' ? slug : slug.current;
  const finalSpecialties = areasOfExpertise || specialties;

  return (
    <Link href={`/providers/${finalSlug}`} className="group">
      <Card className="overflow-hidden h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
        <div className="relative h-80 overflow-hidden bg-gray-100">
          <Image
            src={finalImage}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-1 text-gray-900 group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-primary font-semibold mb-3">{finalTitle}</p>

          {shortBio && (
            <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
              {shortBio}
            </p>
          )}

          {finalSpecialties.length > 0 && (
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {finalSpecialties.slice(0, 3).map((specialty, index) => (
                  <span
                    key={index}
                    className="text-xs bg-blue-50 text-primary px-3 py-1 rounded-full"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center text-primary font-semibold group-hover:gap-3 gap-2 transition-all">
            View Profile
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
