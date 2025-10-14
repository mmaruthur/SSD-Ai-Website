'use client';

import { useState } from 'react';
import ProviderCard from '@/components/cards/ProviderCard';

interface Provider {
  name: string;
  professionalTitle?: string;
  imageUrl?: string;
  slug: { current: string };
  shortBio?: string;
  areasOfExpertise?: string[];
  specialty: string;
}

interface ProvidersClientProps {
  providers: Provider[];
}

export default function ProvidersClient({ providers }: ProvidersClientProps) {
  const [filter, setFilter] = useState<string>('all');

  const filteredProviders = filter === 'all'
    ? providers
    : providers.filter(provider => provider.specialty === filter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-800 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Meet Our Providers
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
            Our team of board-certified dermatologists and experienced physician assistants
            are dedicated to providing exceptional care for all your skin health needs.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white border-b sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                filter === 'all'
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Providers ({providers.length})
            </button>
            <button
              onClick={() => setFilter('Dermatologist')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                filter === 'Dermatologist'
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Dermatologists ({providers.filter(p => p.specialty === 'Dermatologist').length})
            </button>
            <button
              onClick={() => setFilter('Physician Assistant')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                filter === 'Physician Assistant'
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Physician Assistants ({providers.filter(p => p.specialty === 'Physician Assistant').length})
            </button>
          </div>
        </div>
      </section>

      {/* Providers Grid */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {filteredProviders.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">No providers found in this category.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProviders.map((provider) => (
                <ProviderCard key={provider.slug.current} {...provider} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Schedule an Appointment
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our providers are ready to help you achieve healthy, beautiful skin.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="/contact"
              className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
            >
              Request Appointment
            </a>
            <a
              href="/services"
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/5 transition-all"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
