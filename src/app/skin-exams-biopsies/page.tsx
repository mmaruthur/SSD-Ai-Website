import Link from 'next/link';

export const metadata = {
  title: 'Skin Exams & Biopsies | Southern Skies Dermatology',
  description: 'Annual skin exams and expert skin biopsies for early detection and diagnosis of skin cancer. Schedule your full-body skin examination today.',
};

export default function SkinExamsBiopsiesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-800 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Skin Exams & Biopsies
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
            Early detection saves lives. Schedule your annual full-body skin examination.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Schedule an Annual Full-Body Skin Exam</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Regular skin examinations are one of the most important steps you can take to protect your health.
              Early detection of skin cancer dramatically improves treatment outcomes and can be life-saving.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Annual skin exams are especially recommended for patients with numerous moles, outdoor jobs or
              hobbies with sun exposure, or a personal or family history of skin cancer.
            </p>
          </div>

          {/* What to Expect - Skin Exams */}
          <div className="bg-gray-50 p-8 rounded-xl mb-12">
            <h2 className="text-3xl font-bold mb-6">What to Expect During Your Skin Exam</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Duration</h3>
                <p className="text-gray-700">
                  A typical full-body skin examination takes 15-30 minutes, allowing our providers to carefully
                  examine every area of your skin.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Comprehensive Examination</h3>
                <p className="text-gray-700">
                  Our doctors perform a thorough full-body examination, including hard-to-see areas. We use a
                  polarized magnifying glass called a dermatoscope to examine spots in detail and may take
                  digital photos of suspicious spots for monitoring.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Medical History Review</h3>
                <p className="text-gray-700">
                  Your doctor will review your medical history and family history to assess your risk factors
                  and create a personalized screening plan.
                </p>
              </div>
            </div>
          </div>

          {/* Skin Biopsies */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Skin Biopsies</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              If a suspicious spot is identified during your exam, a skin biopsy may be necessary to diagnose
              skin cancer or other skin conditions. A biopsy is a quick, minimally invasive procedure performed
              under local anesthesia.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The sample is sent to a pathologist for microscopic examination, and results are typically
              available within 2-7 days.
            </p>

            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Types of Skin Biopsies</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <span className="text-primary text-2xl mt-1">1.</span>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Punch Biopsy</h4>
                    <p className="text-gray-700">
                      Uses a circular tool to remove a small plug of skin, including deeper layers.
                      This method is ideal for examining lesions that may extend into the dermis.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-2xl mt-1">2.</span>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Shave Biopsy</h4>
                    <p className="text-gray-700">
                      Removes a thin sample of skin using a razor-like blade. This technique is often used
                      for raised or surface lesions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-2xl mt-1">3.</span>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Excisional Biopsy</h4>
                    <p className="text-gray-700">
                      Removes the entire spot with a scalpel, including some surrounding tissue. This method
                      is used when complete removal of the lesion is necessary for diagnosis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Regular Screening Matters */}
          <div className="bg-gradient-to-br from-primary/10 to-blue-100/50 p-8 rounded-xl mb-12">
            <h2 className="text-3xl font-bold mb-6">Why Regular Screening Matters</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-primary text-2xl">✓</span>
                <p className="text-gray-700">
                  <span className="font-bold">Early Detection:</span> Skin cancer is highly treatable when
                  caught early, with cure rates exceeding 99% for many types.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-2xl">✓</span>
                <p className="text-gray-700">
                  <span className="font-bold">Expert Evaluation:</span> Our board-certified dermatologists
                  have the training and experience to identify suspicious lesions.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-2xl">✓</span>
                <p className="text-gray-700">
                  <span className="font-bold">Peace of Mind:</span> Regular screenings provide reassurance
                  and help you monitor changes in your skin over time.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-2xl">✓</span>
                <p className="text-gray-700">
                  <span className="font-bold">Comprehensive Care:</span> From detection through treatment,
                  our team provides complete care for all your dermatology needs.
                </p>
              </div>
            </div>
          </div>

          {/* Who Should Get Screened */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Who Should Get Screened?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Everyone can benefit from regular skin cancer screenings, but certain individuals are at higher risk:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Individuals with numerous moles or atypical moles</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>People with outdoor occupations or hobbies involving sun exposure</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Those with a personal history of skin cancer</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Those with a family history of skin cancer</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Fair-skinned individuals who burn easily</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Anyone with a history of severe sunburns or tanning bed use</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Schedule Your Skin Exam Today
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Early detection is the key to successful treatment. Don't wait - protect your skin health
            with a comprehensive examination.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact"
              className="bg-secondary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-secondary/90 transition-all hover:scale-105 shadow-xl"
            >
              Schedule Appointment
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
