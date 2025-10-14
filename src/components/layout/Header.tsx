'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  // This keeps track of whether the mobile menu is open or closed
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/ssd-logo.png"
              alt="Southern Skies Dermatology"
              width={250}
              height={60}
              priority
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation Menu - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Home
            </Link>

            {/* Providers Dropdown */}
            <div className="relative group">
              <Link
                href="/providers"
                className="text-gray-700 hover:text-primary transition-colors font-medium flex items-center gap-1"
              >
                Providers
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="absolute left-0 mt-2 w-56 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link href="/providers/dr-mario-maruthur" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary">
                    Dr. Mario Maruthur
                  </Link>
                  <Link href="/providers/dr-malia-downing" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary">
                    Dr. Malia Downing
                  </Link>
                  <Link href="/providers/emma-stephens-pa" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary">
                    Emma Stephens, PA
                  </Link>
                  <Link href="/providers/raven-omar-pa-c" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary">
                    Raven Omar, PA-C
                  </Link>
                </div>
              </div>
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
              <Link
                href="/services"
                className="text-gray-700 hover:text-primary transition-colors font-medium flex items-center gap-1"
              >
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="absolute left-0 mt-2 w-64 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link href="/mohs-surgery" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary">
                    Mohs Surgery
                  </Link>
                  <Link href="/skin-exams-biopsies" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary">
                    Skin Exams & Biopsies
                  </Link>
                  <Link href="/services" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary">
                    All Services
                  </Link>
                </div>
              </div>
            </div>

            {/* Plan Your Visit Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary transition-colors font-medium flex items-center gap-1">
                Plan Your Visit
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link href="/before-mohs-surgery" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary">
                    Before Your Mohs Surgery
                  </Link>
                  <Link href="/after-mohs-surgery" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary">
                    After Your Mohs Surgery
                  </Link>
                  <Link href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary">
                    Request Appointment
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              About
            </Link>

            <Link
              href="/locations"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Locations
            </Link>

            <Link
              href="/bill-pay"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Bill Pay
            </Link>

            <Link
              href="/careers"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Careers
            </Link>

            <Link
              href="/contact"
              className="bg-secondary text-primary px-6 py-2 rounded font-bold hover:bg-secondary/90 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button - Only shows on mobile */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {/* Hamburger icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu - Slides down when hamburger is clicked */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link
              href="/"
              className="block text-gray-700 hover:text-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/providers"
              className="block text-gray-700 hover:text-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Providers
            </Link>
            <Link
              href="/services"
              className="block text-gray-700 hover:text-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/mohs-surgery"
              className="block text-gray-700 hover:text-primary transition-colors font-medium pl-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Mohs Surgery
            </Link>
            <Link
              href="/skin-exams-biopsies"
              className="block text-gray-700 hover:text-primary transition-colors font-medium pl-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Skin Exams & Biopsies
            </Link>
            <Link
              href="/before-mohs-surgery"
              className="block text-gray-700 hover:text-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Before Mohs Surgery
            </Link>
            <Link
              href="/after-mohs-surgery"
              className="block text-gray-700 hover:text-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              After Mohs Surgery
            </Link>
            <Link
              href="/locations"
              className="block text-gray-700 hover:text-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Locations
            </Link>
            <Link
              href="/bill-pay"
              className="block text-gray-700 hover:text-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Bill Pay
            </Link>
            <Link
              href="/careers"
              className="block text-gray-700 hover:text-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Careers
            </Link>
            <Link
              href="/contact"
              className="block bg-secondary text-primary px-6 py-2 rounded font-bold hover:bg-secondary/90 transition-colors text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
