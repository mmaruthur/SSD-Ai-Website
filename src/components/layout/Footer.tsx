import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="wp-footer bg-[#0B61C7] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content - 3 columns */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: About */}
          <div>
            <h3 className="footer-title text-xl font-bold mb-4">
              Southern Skies Dermatology
            </h3>
            <p className="text-white/90 mb-4">
              Expert dermatology care serving multiple locations with
              compassionate, comprehensive skin health services.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="footer-title text-xl font-bold mb-4">Quick Links</h3>
            <ul className="wp-footer-menu space-y-2">
              <li className="wp-footer-menu-item">
                <Link
                  href="/services"
                  className="relative text-white hover:text-[#FFD700] transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li className="wp-footer-menu-item">
                <Link
                  href="/providers"
                  className="relative text-white hover:text-[#FFD700] transition-colors"
                >
                  Meet Our Providers
                </Link>
              </li>
              <li className="wp-footer-menu-item">
                <Link
                  href="/locations"
                  className="relative text-white hover:text-[#FFD700] transition-colors"
                >
                  Locations
                </Link>
              </li>
              <li className="wp-footer-menu-item">
                <Link
                  href="/contact"
                  className="relative text-white hover:text-[#FFD700] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li className="wp-footer-menu-item">
                <Link
                  href="/careers"
                  className="relative text-white hover:text-[#FFD700] transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li className="wp-footer-menu-item">
                <Link
                  href="/about"
                  className="relative text-white hover:text-[#FFD700] transition-colors"
                >
                  About
                </Link>
              </li>
              <li className="wp-footer-menu-item">
                <Link
                  href="/bill-pay"
                  className="relative text-white hover:text-[#FFD700] transition-colors"
                >
                  Bill Pay
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="footer-title text-xl font-bold mb-4">Contact Information</h3>
            <ul className="space-y-3 text-white/90">
              <li className="flex items-start gap-3">
                <span className="text-xl">📞</span>
                <div>
                  <p className="font-bold">Phone</p>
                  <a
                    href="tel:+14062522653"
                    className="hover:text-[#FFD700] transition-colors"
                  >
                    (406) 252-2653
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">✉️</span>
                <div>
                  <p className="font-bold">Email</p>
                  <a
                    href="mailto:info@southernskiesdermatology.com"
                    className="hover:text-[#FFD700] transition-colors"
                  >
                    info@southernskiesdermatology.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">📍</span>
                <div>
                  <p className="font-bold">Multiple Locations</p>
                  <Link
                    href="/locations"
                    className="hover:text-[#FFD700] transition-colors"
                  >
                    View All Locations
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Copyright */}
        <div className="copyright border-t border-white/20 pt-8 text-center text-white/90 text-sm">
          <p>
            © {new Date().getFullYear()} Southern Skies Dermatology. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
