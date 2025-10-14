import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

interface ServiceCardProps {
  title: string;
  shortDescription?: string; // Sanity field
  description?: string; // Legacy field
  imageUrl?: string; // Sanity field
  image?: string; // Legacy field
  slug: string | { current: string }; // Sanity returns object, legacy is string
  featured?: boolean;
}

export default function ServiceCard({
  title,
  shortDescription,
  description,
  imageUrl,
  image,
  slug,
  featured = false,
}: ServiceCardProps) {
  // Handle both Sanity and legacy data structures
  const finalDescription = shortDescription || description || '';
  const finalImage = imageUrl || image || 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800';
  const finalSlug = typeof slug === 'string' ? slug : slug.current;

  return (
    <Link href={`/services/${finalSlug}`} className="group">
      <Card className="overflow-hidden h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={finalImage}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {featured && (
            <div className="absolute top-4 right-4 bg-secondary text-primary px-3 py-1 rounded-full text-sm font-semibold">
              Featured
            </div>
          )}
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            {finalDescription}
          </p>
          <div className="flex items-center text-primary font-semibold group-hover:gap-3 gap-2 transition-all">
            Learn More
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
