import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content - 3 columns */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Southern Skies Dermatology
            </h3>
            <p className="text-white/90 mb-4">
              Expert dermatology care serving multiple locations with
              compassionate, comprehensive skin health services.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-white/90 hover:text-secondary transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/providers"
                  className="text-white/90 hover:text-secondary transition-colors"
                >
                  Meet Our Providers
                </Link>
              </li>
              <li>
                <Link
                  href="/locations"
                  className="text-white/90 hover:text-secondary transition-colors"
                >
                  Locations
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/90 hover:text-secondary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-white/90 hover:text-secondary transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <ul className="space-y-2 text-white/90">
              <li className="flex items-start gap-2">
                <span>📞</span>
                <div>
                  <p className="font-medium">Phone</p>
                  <a
                    href="tel:+15555555555"
                    className="hover:text-secondary transition-colors"
                  >
                    (555) 555-5555
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span>✉️</span>
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href="mailto:info@southernskiesdermatology.com"
                    className="hover:text-secondary transition-colors"
                  >
                    info@southernskiesdermatology.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span>📍</span>
                <div>
                  <p className="font-medium">Multiple Locations</p>
                  <Link
                    href="/locations"
                    className="hover:text-secondary transition-colors"
                  >
                    View All Locations
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Copyright */}
        <div className="border-t border-white/20 pt-8 text-center text-white/80 text-sm">
          <p>
            © {new Date().getFullYear()} Southern Skies Dermatology. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
