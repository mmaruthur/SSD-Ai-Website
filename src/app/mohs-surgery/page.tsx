import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Mohs Micrographic Surgery | Southern Skies Dermatology',
  description: 'Mohs micrographic surgery is the gold-standard treatment for skin cancer with a 99% cure rate. Performed by fellowship-trained Dr. Mario Maruthur.',
};

export default function MohsSurgeryPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-800 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Mohs Micrographic Surgery
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
            The gold-standard treatment for most skin cancers with a 99% cure rate
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Mohs micrographic surgery is the most advanced and effective treatment for most types of skin cancer,
              specifically basal cell carcinoma and squamous cell carcinoma. This precise surgical technique offers
              cure rates up to 99% for new cancers and has the lowest recurrence rate of any skin cancer treatment.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The procedure is performed by Dr. Mario Maruthur, a fellowship-trained and board-certified Mohs surgeon
              who specializes exclusively in skin cancer treatment.
            </p>
          </div>

          {/* What Makes Mohs Unique */}
          <div className="bg-gray-50 p-8 rounded-xl mb-12">
            <h2 className="text-3xl font-bold mb-6">What Makes Mohs Surgery Unique?</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-primary text-2xl mt-1">✓</span>
                <div>
                  <h3 className="font-bold text-lg mb-2">100% Margin Examination</h3>
                  <p className="text-gray-700">
                    Unlike standard excision which examines only 1-2% of margins, Mohs surgery examines 100%
                    of both peripheral and deep margins to ensure complete cancer removal.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-2xl mt-1">✓</span>
                <div>
                  <h3 className="font-bold text-lg mb-2">Surgeon as Pathologist</h3>
                  <p className="text-gray-700">
                    Your surgeon acts as both the surgeon and pathologist, examining tissue under a microscope
                    during the procedure to precisely locate and remove all cancer cells.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-2xl mt-1">✓</span>
                <div>
                  <h3 className="font-bold text-lg mb-2">Tissue-Sparing Technique</h3>
                  <p className="text-gray-700">
                    The unique mapping technique removes only cancerous tissue while preserving maximum healthy
                    skin, resulting in minimal scarring and better cosmetic outcomes.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-2xl mt-1">✓</span>
                <div>
                  <h3 className="font-bold text-lg mb-2">Same-Day Reconstruction</h3>
                  <p className="text-gray-700">
                    After cancer removal is confirmed, reconstruction of the surgical site is performed by the
                    same doctor using advanced plastic surgery techniques.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* The Procedure */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">The Mohs Surgery Procedure</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3">1. Initial Removal</h3>
                <p className="text-gray-700">
                  Under local anesthetic, the visible tumor is surgically removed along with a thin layer of
                  surrounding tissue. The tissue is precisely mapped and marked.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">2. Microscopic Examination</h3>
                <p className="text-gray-700">
                  The removed tissue is processed and examined under a microscope. The surgeon checks 100% of
                  the margins for cancer cells using the unique mapping technique.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">3. Additional Layers (If Needed)</h3>
                <p className="text-gray-700">
                  If cancer cells are found at the margins, additional layers are removed only from the specific
                  areas where cancer remains. This process continues until margins are clear.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">4. Reconstruction</h3>
                <p className="text-gray-700">
                  Once all cancer is removed, Dr. Maruthur performs plastic surgery reconstruction to close the
                  wound and optimize cosmetic appearance.
                </p>
              </div>
            </div>
          </div>

          {/* What to Expect */}
          <div className="bg-blue-50 p-8 rounded-xl mb-12">
            <h2 className="text-3xl font-bold mb-6">What to Expect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-lg mb-2">Duration</h3>
                <p className="text-gray-700">
                  The procedure typically takes 2-4 hours depending on the size and depth of the cancer.
                  Most of this time is spent processing and examining tissue while you wait comfortably.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Anesthesia</h3>
                <p className="text-gray-700">
                  Local anesthetic is used, so you remain awake and comfortable throughout the procedure.
                  No hospital stay is required.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Recovery</h3>
                <p className="text-gray-700">
                  Most patients return to normal activities within 1-2 weeks. Lower activity is recommended
                  for 2-3 weeks. Sutures are typically removed or dissolve within 1-2 weeks.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Scarring</h3>
                <p className="text-gray-700">
                  Minimal scarring is a primary goal of Mohs surgery. Full scar maturation takes 9-12 months,
                  and most scars fade significantly over time.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Dr. Maruthur */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Why Choose Dr. Mario Maruthur?</h2>
            <div className="bg-gray-50 p-8 rounded-xl">
              <p className="text-gray-700 mb-4">
                Dr. Mario Maruthur is a fellowship-trained and board-certified Mohs Micrographic surgeon who
                focuses exclusively on skin cancer treatment. He completed his fellowship at the prestigious
                Memorial Sloan Kettering Cancer Center in New York, one of the world's leading cancer treatment
                centers.
              </p>
              <p className="text-gray-700 mb-4">
                With his advanced training in both Mohs surgery and plastic surgery reconstruction, Dr. Maruthur
                provides comprehensive care from diagnosis through reconstruction, ensuring the best possible
                outcomes for his patients.
              </p>
              <Link
                href="/providers/dr-mario-maruthur"
                className="text-primary font-semibold hover:underline inline-flex items-center gap-2"
              >
                Learn more about Dr. Maruthur →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Schedule Your Consultation
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Early detection and treatment are key to successful skin cancer treatment.
            Contact us today to discuss if Mohs surgery is right for you.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact"
              className="bg-secondary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-secondary/90 transition-all hover:scale-105 shadow-xl"
            >
              Request Appointment
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
