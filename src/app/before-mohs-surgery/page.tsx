import Link from 'next/link';

export const metadata = {
  title: 'Before Your Mohs Surgery | Southern Skies Dermatology',
  description: 'Important pre-surgical instructions and what to expect before your Mohs surgery at Southern Skies Dermatology. Prepare for your procedure.',
};

export default function BeforeMohsSurgeryPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-800 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Before Your Mohs Surgery
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
            Important instructions to help you prepare for your procedure
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Proper preparation for your Mohs surgery is important for ensuring the best possible outcome.
              Please read the following instructions carefully and follow them as directed. If you have
              any questions or concerns, please contact our office.
            </p>
          </div>

          {/* Medication Instructions */}
          <div className="bg-gradient-to-br from-primary/10 to-blue-100/50 p-8 rounded-xl mb-12">
            <h2 className="text-3xl font-bold mb-6">Medication Instructions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="text-primary">⚠️</span>
                  Blood-Thinning Medications
                </h3>
                <p className="text-gray-700 mb-3">
                  <span className="font-bold">Important:</span> Please inform our staff if you are taking
                  any blood-thinning medications, including:
                </p>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Aspirin</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Plavix (clopidogrel)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Coumadin (warfarin)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Other anticoagulants or antiplatelet medications</span>
                  </li>
                </ul>
                <p className="text-gray-700 mt-3 italic">
                  Do not stop taking these medications without first consulting the physician who
                  prescribed them.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="text-primary">⚠️</span>
                  Immunosuppressing Medications
                </h3>
                <p className="text-gray-700 mb-3">
                  Please inform our staff if you are taking immunosuppressing medications such as:
                </p>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Prednisone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Methotrexate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Other immunosuppressants</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Herbal Supplements to Stop</h3>
                <p className="text-gray-700 mb-3">
                  Please stop taking the following supplements at least one week before your surgery:
                </p>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Ginkgo Biloba</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Vitamin E</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Vitamin C (high doses)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Fish Oil</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Ginseng</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Continue Your Prescribed Medications</h3>
                <p className="text-gray-700">
                  Take all other prescribed medications as usual unless specifically instructed otherwise
                  by your doctor. Bring a list of all medications with you on the day of surgery.
                </p>
              </div>
            </div>
          </div>

          {/* Day Before Surgery */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">The Day Before Your Surgery</h2>
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-primary text-2xl mt-1">✓</span>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Avoid Alcohol</h3>
                    <p className="text-gray-700">
                      Do not consume alcohol for at least 24-48 hours before your surgery.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-2xl mt-1">✓</span>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Get Adequate Rest</h3>
                    <p className="text-gray-700">
                      Get a good night's sleep to help your body prepare for the procedure.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-2xl mt-1">✓</span>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Prepare Questions</h3>
                    <p className="text-gray-700">
                      Write down any last-minute questions you may have for your surgeon.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Day of Surgery */}
          <div className="bg-blue-50 p-8 rounded-xl mb-12">
            <h2 className="text-3xl font-bold mb-6">Day of Surgery</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Personal Hygiene</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Shower or bathe to help minimize infection risk</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Avoid makeup if surgery is on your face</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Wash your hair (you may not be able to for a few days after)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Eating & Drinking</h3>
                <p className="text-gray-700">
                  <span className="font-bold">Eat a good breakfast.</span> Unlike many surgeries, you do not
                  need to fast before Mohs surgery. Having food in your system will help you feel better
                  during the procedure.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">What to Wear</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Wear comfortable, loose-fitting clothing that allows easy access to the surgical area</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Avoid tight collars if surgery is on your head or neck</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Layer your clothing - bring a jacket as rooms can be cold</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Wear shoes that are easy to slip on and off</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">What to Bring</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Photo ID and insurance card</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>List of current medications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Something to keep you occupied (book, tablet, phone with charger)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Snacks and water (you may be here for several hours)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>A companion for support and to drive you home (recommended)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* What to Expect */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">What to Expect</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-bold text-lg mb-2">Duration</h3>
                <p className="text-gray-700">
                  Plan to spend 2-4 hours at our office. The exact time depends on how many layers
                  need to be removed to ensure all cancer cells are eliminated.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-bold text-lg mb-2">Waiting Between Stages</h3>
                <p className="text-gray-700">
                  You will wait in a comfortable area while your tissue is being processed and examined.
                  This is why we recommend bringing something to keep you occupied.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-bold text-lg mb-2">Local Anesthesia</h3>
                <p className="text-gray-700">
                  You will remain awake during the procedure. Local anesthetic is used to numb the area,
                  so you should not feel pain during surgery.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-bold text-lg mb-2">Questions Welcome</h3>
                <p className="text-gray-700">
                  Don't hesitate to communicate any concerns with our medical staff. We are here to
                  ensure your comfort and answer all your questions.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-50 p-8 rounded-xl text-center">
            <h3 className="text-xl font-bold mb-4">Questions or Concerns?</h3>
            <p className="text-gray-700 mb-6">
              If you have any questions about these instructions or need to reschedule your surgery,
              please contact our office as soon as possible.
            </p>
            <Link
              href="/contact"
              className="text-primary font-semibold hover:underline inline-flex items-center gap-2"
            >
              Contact Our Office →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Preparing for Your Procedure
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Following these instructions will help ensure the best possible outcome for your surgery.
            We look forward to caring for you.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/mohs-surgery"
              className="bg-secondary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-secondary/90 transition-all hover:scale-105 shadow-xl"
            >
              Learn About Mohs Surgery
            </Link>
            <Link
              href="/after-mohs-surgery"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all"
            >
              After Surgery Care
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
