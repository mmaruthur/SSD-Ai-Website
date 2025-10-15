'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  // This keeps track of whether the mobile menu is open or closed
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="wp-header bg-[#0B61C7] shadow-sm sticky top-0 z-50">
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
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className="wp-nav-item text-white hover:text-white transition-colors font-bold px-4 py-2"
            >
              Home
            </Link>

            {/* Providers Dropdown */}
            <div className="relative group">
              <Link
                href="/providers"
                className="wp-nav-item text-white hover:text-white transition-colors font-bold px-4 py-2 flex items-center gap-1"
              >
                Providers
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="wp-submenu absolute left-0 mt-2 w-56 shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-0">
                  <Link href="/providers/dr-mario-maruthur" className="wp-submenu-item block text-white hover:bg-[#0a559f]">
                    Dr. Mario Maruthur
                  </Link>
                  <Link href="/providers/dr-malia-downing" className="wp-submenu-item block text-white hover:bg-[#0a559f]">
                    Dr. Malia Downing
                  </Link>
                  <Link href="/providers/emma-stephens-pa" className="wp-submenu-item block text-white hover:bg-[#0a559f]">
                    Emma Stephens, PA
                  </Link>
                  <Link href="/providers/raven-omar-pa-c" className="wp-submenu-item block text-white hover:bg-[#0a559f]">
                    Raven Omar, PA-C
                  </Link>
                </div>
              </div>
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
              <Link
                href="/services"
                className="wp-nav-item text-white hover:text-white transition-colors font-bold px-4 py-2 flex items-center gap-1"
              >
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="wp-submenu absolute left-0 mt-2 w-64 shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-0">
                  <Link href="/mohs-surgery" className="wp-submenu-item block text-white hover:bg-[#0a559f]">
                    Mohs Surgery
                  </Link>
                  <Link href="/skin-exams-biopsies" className="wp-submenu-item block text-white hover:bg-[#0a559f]">
                    Skin Exams & Biopsies
                  </Link>
                  <Link href="/services" className="wp-submenu-item block text-white hover:bg-[#0a559f]">
                    All Services
                  </Link>
                </div>
              </div>
            </div>

            {/* Plan Your Visit Dropdown */}
            <div className="relative group">
              <button className="wp-nav-item text-white hover:text-white transition-colors font-bold px-4 py-2 flex items-center gap-1">
                Plan Your Visit
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="wp-submenu absolute left-0 mt-2 w-64 shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-0">
                  <Link href="/before-mohs-surgery" className="wp-submenu-item block text-white hover:bg-[#0a559f]">
                    Before Your Mohs Surgery
                  </Link>
                  <Link href="/after-mohs-surgery" className="wp-submenu-item block text-white hover:bg-[#0a559f]">
                    After Your Mohs Surgery
                  </Link>
                  <Link href="/contact" className="wp-submenu-item block text-white hover:bg-[#0a559f]">
                    Request Appointment
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="wp-nav-item text-white hover:text-white transition-colors font-bold px-4 py-2"
            >
              About
            </Link>

            <Link
              href="/locations"
              className="wp-nav-item text-white hover:text-white transition-colors font-bold px-4 py-2"
            >
              Locations
            </Link>

            <Link
              href="/bill-pay"
              className="wp-nav-item text-white hover:text-white transition-colors font-bold px-4 py-2"
            >
              Bill Pay
            </Link>

            <Link
              href="/careers"
              className="wp-nav-item text-white hover:text-white transition-colors font-bold px-4 py-2"
            >
              Careers
            </Link>

            <Link
              href="/contact"
              className="wp-button bg-[#FFD700] text-[#0B61C7] px-6 py-2 font-bold ml-2"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button - Only shows on mobile */}
          <button
            className="md:hidden text-white"
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
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-white/20 pt-4">
            <Link
              href="/"
              className="block text-white hover:text-[#FFD700] transition-colors font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/providers"
              className="block text-white hover:text-[#FFD700] transition-colors font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Providers
            </Link>
            <Link
              href="/services"
              className="block text-white hover:text-[#FFD700] transition-colors font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/mohs-surgery"
              className="block text-white hover:text-[#FFD700] transition-colors font-bold pl-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Mohs Surgery
            </Link>
            <Link
              href="/skin-exams-biopsies"
              className="block text-white hover:text-[#FFD700] transition-colors font-bold pl-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Skin Exams & Biopsies
            </Link>
            <Link
              href="/before-mohs-surgery"
              className="block text-white hover:text-[#FFD700] transition-colors font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Before Mohs Surgery
            </Link>
            <Link
              href="/after-mohs-surgery"
              className="block text-white hover:text-[#FFD700] transition-colors font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              After Mohs Surgery
            </Link>
            <Link
              href="/about"
              className="block text-white hover:text-[#FFD700] transition-colors font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/locations"
              className="block text-white hover:text-[#FFD700] transition-colors font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Locations
            </Link>
            <Link
              href="/bill-pay"
              className="block text-white hover:text-[#FFD700] transition-colors font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Bill Pay
            </Link>
            <Link
              href="/careers"
              className="block text-white hover:text-[#FFD700] transition-colors font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Careers
            </Link>
            <Link
              href="/contact"
              className="wp-button block bg-[#FFD700] text-[#0B61C7] px-6 py-2 font-bold text-center mt-4"
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
