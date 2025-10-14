import Link from 'next/link';

export const metadata = {
  title: 'About Us | Southern Skies Dermatology',
  description: 'Learn about Southern Skies Dermatology - our mission, values, and commitment to providing exceptional dermatology care with board-certified specialists.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-800 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About Southern Skies Dermatology
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
            Providing exceptional dermatology care with compassion, expertise, and cutting-edge treatments
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Southern Skies Dermatology is a premier dermatology practice dedicated to providing comprehensive
              skin care services to patients across the region. Our team of board-certified dermatologists and
              experienced physician assistants combine advanced medical expertise with a patient-centered approach
              to deliver exceptional care.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We specialize in medical dermatology, Mohs micrographic surgery for skin cancer, cosmetic procedures,
              and complete skin health management. Our practice is built on a foundation of clinical excellence,
              continuous innovation, and genuine care for each patient we serve.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With multiple convenient locations and state-of-the-art facilities, we make quality dermatology
              care accessible to our community. From routine skin examinations to advanced surgical procedures,
              our team is committed to helping you achieve and maintain healthy, beautiful skin.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-to-br from-primary/10 to-blue-100/50 p-8 rounded-xl mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Our mission is to provide the highest quality dermatological care through:
            </p>
            <ul className="space-y-3 text-gray-700 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-primary text-2xl mt-1">•</span>
                <span>Clinical excellence and evidence-based treatment approaches</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-2xl mt-1">•</span>
                <span>Compassionate, patient-centered care that prioritizes your needs and concerns</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-2xl mt-1">•</span>
                <span>Advanced technology and innovative treatment options</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-2xl mt-1">•</span>
                <span>Education and empowerment to help you make informed decisions about your skin health</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-2xl mt-1">•</span>
                <span>Accessible, convenient care across multiple locations</span>
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Why Choose Southern Skies Dermatology?</h2>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                  <span className="text-primary text-2xl">🏆</span>
                  Board-Certified Expertise
                </h3>
                <p className="text-gray-700">
                  Our physicians are board-certified by the American Board of Dermatology and fellowship-trained
                  in specialized areas including Mohs micrographic surgery. Dr. Mario Maruthur completed his
                  fellowship at Memorial Sloan Kettering Cancer Center, one of the world's premier cancer
                  treatment centers.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                  <span className="text-primary text-2xl">🔬</span>
                  Advanced Treatment Options
                </h3>
                <p className="text-gray-700">
                  We offer the latest in dermatological treatments, from cutting-edge skin cancer surgery with
                  on-site pathology to advanced cosmetic procedures. Our investment in state-of-the-art
                  technology ensures you receive the most effective treatments available.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                  <span className="text-primary text-2xl">💙</span>
                  Comprehensive Care
                </h3>
                <p className="text-gray-700">
                  From medical dermatology and skin cancer treatment to cosmetic enhancements, we provide
                  complete skin care services under one roof. Our integrated approach means you receive
                  coordinated care for all your dermatology needs.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                  <span className="text-primary text-2xl">📍</span>
                  Multiple Convenient Locations
                </h3>
                <p className="text-gray-700">
                  With offices strategically located throughout the region, we make it easy to access quality
                  dermatology care close to home or work. Each location features modern facilities and the
                  same high standard of care.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                  <span className="text-primary text-2xl">⭐</span>
                  Patient-Centered Approach
                </h3>
                <p className="text-gray-700">
                  We believe in building lasting relationships with our patients. Our team takes time to listen
                  to your concerns, answer your questions, and develop personalized treatment plans that align
                  with your goals and lifestyle.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                  <span className="text-primary text-2xl">🎯</span>
                  Excellence in Outcomes
                </h3>
                <p className="text-gray-700">
                  Our focus on quality extends from diagnosis through treatment and follow-up care. We maintain
                  high cure rates for skin cancer treatment, exceptional cosmetic results, and consistently
                  high patient satisfaction scores.
                </p>
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div className="bg-blue-50 p-8 rounded-xl mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Core Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-2">Excellence</h3>
                <p className="text-gray-700">
                  We strive for excellence in everything we do, from clinical outcomes to patient experience.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Compassion</h3>
                <p className="text-gray-700">
                  We treat every patient with empathy, respect, and genuine care for their well-being.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Innovation</h3>
                <p className="text-gray-700">
                  We embrace new technologies and techniques that improve patient outcomes and experiences.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Integrity</h3>
                <p className="text-gray-700">
                  We maintain the highest ethical standards in all our professional relationships and practices.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Accessibility</h3>
                <p className="text-gray-700">
                  We work to make quality dermatology care accessible and convenient for all patients.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Education</h3>
                <p className="text-gray-700">
                  We empower patients through education, helping them make informed decisions about their care.
                </p>
              </div>
            </div>
          </div>

          {/* What Sets Us Apart */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">What Sets Us Apart</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-primary text-2xl mt-1">✓</span>
                <div>
                  <p className="text-gray-700">
                    <span className="font-bold">Fellowship-Trained Mohs Surgeons:</span> Our Mohs surgeons have
                    completed additional fellowship training at prestigious institutions, ensuring the highest
                    level of expertise in skin cancer treatment.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-2xl mt-1">✓</span>
                <div>
                  <p className="text-gray-700">
                    <span className="font-bold">On-Site Pathology Lab:</span> Our in-house pathology laboratory
                    allows for same-day results during Mohs surgery, minimizing your time and ensuring complete
                    cancer removal.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-2xl mt-1">✓</span>
                <div>
                  <p className="text-gray-700">
                    <span className="font-bold">Experienced Support Team:</span> Our physician assistants and
                    medical staff are highly trained dermatology professionals who share our commitment to
                    exceptional patient care.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-2xl mt-1">✓</span>
                <div>
                  <p className="text-gray-700">
                    <span className="font-bold">Comprehensive Services:</span> From skin cancer screening and
                    treatment to cosmetic procedures and medical dermatology, we offer complete care for all
                    skin types and conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience the Southern Skies Difference
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of satisfied patients who trust us with their skin health. Schedule your appointment today.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact"
              className="bg-secondary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-secondary/90 transition-all hover:scale-105 shadow-xl"
            >
              Schedule Appointment
            </Link>
            <Link
              href="/providers"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all"
            >
              Meet Our Providers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
