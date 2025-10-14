import Link from 'next/link';

export const metadata = {
  title: 'Careers | Southern Skies Dermatology',
  description: 'Join the Southern Skies Dermatology team. Explore career opportunities in dermatology and healthcare in Central Arkansas.',
};

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-800 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Careers at Southern Skies
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
            Join our team of dedicated healthcare professionals committed to exceptional patient care
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Why Work With Us?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At Southern Skies Dermatology & Surgery, we believe that exceptional patient care begins
              with an exceptional team. We are always looking for talented, compassionate professionals
              who share our commitment to providing the highest quality dermatologic care.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              As a growing practice with multiple locations throughout Central Arkansas, we offer
              opportunities for professional growth, continuing education, and the chance to work
              alongside some of the region's most respected dermatology specialists.
            </p>
          </div>

          {/* Benefits & Culture */}
          <div className="bg-gradient-to-br from-primary/10 to-blue-100/50 p-8 rounded-xl mb-12">
            <h2 className="text-3xl font-bold mb-6">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <span className="text-primary text-2xl mt-1">✓</span>
                <div>
                  <h3 className="font-bold text-lg mb-2">Competitive Compensation</h3>
                  <p className="text-gray-700">
                    Competitive salary and comprehensive benefits package
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-2xl mt-1">✓</span>
                <div>
                  <h3 className="font-bold text-lg mb-2">Professional Development</h3>
                  <p className="text-gray-700">
                    Continuing education opportunities and career advancement
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-2xl mt-1">✓</span>
                <div>
                  <h3 className="font-bold text-lg mb-2">Collaborative Environment</h3>
                  <p className="text-gray-700">
                    Work alongside board-certified experts in a supportive team
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-2xl mt-1">✓</span>
                <div>
                  <h3 className="font-bold text-lg mb-2">State-of-the-Art Facilities</h3>
                  <p className="text-gray-700">
                    Modern equipment and technology at multiple locations
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-2xl mt-1">✓</span>
                <div>
                  <h3 className="font-bold text-lg mb-2">Work-Life Balance</h3>
                  <p className="text-gray-700">
                    Flexible scheduling options and paid time off
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-2xl mt-1">✓</span>
                <div>
                  <h3 className="font-bold text-lg mb-2">Growth Opportunities</h3>
                  <p className="text-gray-700">
                    Growing practice with expanding locations and services
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Positions We Hire */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Career Opportunities</h2>
            <p className="text-lg text-gray-700 mb-8">
              We regularly seek qualified professionals for various positions, including:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Clinical Positions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Medical Assistants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Nurse Practitioners</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Physician Assistants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Licensed Practical Nurses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Registered Nurses</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Administrative Positions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Front Desk Coordinators</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Patient Care Coordinators</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Medical Billers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Insurance Specialists</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Office Managers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Application Process */}
          <div className="bg-blue-50 p-8 rounded-xl mb-12">
            <h2 className="text-3xl font-bold mb-6">How to Apply</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3">1. Contact Our Team</h3>
                <p className="text-gray-700">
                  Reach out to us through our contact form or call our main office to inquire about
                  current openings and application requirements.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">2. Submit Your Application</h3>
                <p className="text-gray-700">
                  Provide your resume, cover letter, and any relevant certifications or licenses.
                  Tell us about your experience and why you'd like to join our team.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">3. Interview Process</h3>
                <p className="text-gray-700">
                  Qualified candidates will be contacted for an interview. We'll discuss the position,
                  your qualifications, and answer any questions you have about working with us.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">4. Join Our Team</h3>
                <p className="text-gray-700">
                  Selected candidates will receive an offer and begin our comprehensive onboarding
                  and training program.
                </p>
              </div>
            </div>
          </div>

          {/* Equal Opportunity */}
          <div className="mb-12 text-center">
            <div className="bg-gray-50 p-6 rounded-xl inline-block">
              <p className="text-gray-700">
                <span className="font-bold">Southern Skies Dermatology & Surgery</span> is an equal opportunity employer.
                <br />
                We celebrate diversity and are committed to creating an inclusive environment for all employees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            We would love to hear from you! Contact us today to learn more about career opportunities
            at Southern Skies Dermatology & Surgery.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact"
              className="bg-secondary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-secondary/90 transition-all hover:scale-105 shadow-xl"
            >
              Contact Us About Careers
            </Link>
            <Link
              href="/locations"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all"
            >
              View Our Locations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
