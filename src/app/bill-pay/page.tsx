import Link from 'next/link';

export const metadata = {
  title: 'Bill Pay | Southern Skies Dermatology',
  description: 'Conveniently pay your Southern Skies Dermatology bill online. Fast, secure payment portal available 24/7.',
};

export default function BillPayPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-800 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Bill Pay
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
            Convenient and secure online payment for your dermatology services
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-12 text-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Pay your Southern Skies Dermatology & Surgery bill quickly and securely through our
              online payment portal. Our system is available 24/7 for your convenience.
            </p>
          </div>

          {/* Payment Portal */}
          <div className="bg-gradient-to-br from-primary/10 to-blue-100/50 p-8 md:p-12 rounded-xl mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Online Payment Portal</h2>
            <p className="text-center text-gray-700 mb-8">
              To pay your bill, you will need the following information:
            </p>

            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-primary text-2xl mt-1">✓</span>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Last Name</h3>
                    <p className="text-gray-600">As it appears on your account</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-2xl mt-1">✓</span>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Date of Birth</h3>
                    <p className="text-gray-600">For account verification</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-2xl mt-1">✓</span>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Payment Amount</h3>
                    <p className="text-gray-600">The amount you wish to pay</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://ssd.ema.md/ema/pay/Online#/pm/payfac/pay"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-secondary text-primary px-10 py-5 rounded-lg font-bold text-xl hover:bg-secondary/90 transition-all hover:scale-105 shadow-xl"
              >
                Pay Your Bill Online
              </a>
              <p className="text-sm text-gray-600 mt-4">
                You will be redirected to our secure payment portal
              </p>
            </div>
          </div>

          {/* Additional Information */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Payment Options</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Credit/Debit Cards</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Secure online processing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>24/7 availability</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Instant confirmation</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Need Help?</h3>
              <p className="text-gray-700 mb-4">
                If you have questions about your bill or need assistance with payment, our billing
                department is here to help.
              </p>
              <Link
                href="/contact"
                className="text-primary font-semibold hover:underline inline-flex items-center gap-2"
              >
                Contact Us →
              </Link>
            </div>
          </div>

          {/* Insurance & Billing Information */}
          <div className="bg-blue-50 p-8 rounded-xl mb-12">
            <h2 className="text-3xl font-bold mb-6">Insurance & Billing</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                We accept most major insurance plans and will file claims on your behalf. Please verify
                your coverage with your insurance provider prior to your appointment.
              </p>
              <p>
                <span className="font-bold">Important:</span> You are responsible for any co-payments,
                deductibles, or non-covered services at the time of your visit.
              </p>
              <p>
                If you have questions about insurance coverage or billing, please contact our billing
                department. We are committed to making your healthcare affordable and accessible.
              </p>
            </div>
          </div>

          {/* FAQs */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-bold text-lg mb-2">When will I receive my bill?</h3>
                <p className="text-gray-700">
                  Bills are typically sent out 2-4 weeks after your visit, once insurance processing
                  is complete.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-bold text-lg mb-2">Is the online payment portal secure?</h3>
                <p className="text-gray-700">
                  Yes, our payment portal uses industry-standard encryption and security measures to
                  protect your personal and financial information.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-bold text-lg mb-2">Can I set up a payment plan?</h3>
                <p className="text-gray-700">
                  Payment plans may be available for qualifying patients. Please contact our billing
                  department to discuss your options.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-bold text-lg mb-2">What if I don't have my account information?</h3>
                <p className="text-gray-700">
                  If you need assistance locating your account information or have questions about your
                  bill, please contact our office during business hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Questions About Your Bill?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Our billing team is here to help with any questions or concerns about your account.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact"
              className="bg-secondary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-secondary/90 transition-all hover:scale-105 shadow-xl"
            >
              Contact Billing
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
