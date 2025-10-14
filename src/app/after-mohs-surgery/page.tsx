import Link from 'next/link';

export const metadata = {
  title: 'After Your Mohs Surgery | Southern Skies Dermatology',
  description: 'Post-surgical care instructions and recovery information after your Mohs surgery. Learn about wound care, activity restrictions, and what to expect.',
};

export default function AfterMohsSurgeryPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-800 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            After Your Mohs Surgery
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
            Important aftercare instructions to ensure proper healing and optimal results
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Proper post-surgical care is essential for optimal healing and the best cosmetic outcome.
              Please follow these instructions carefully. If you have any questions or concerns during
              your recovery, don't hesitate to contact our office.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-gray-700 font-semibold">
                Our surgical team will call you the same day or the next day after your surgery to check
                on your recovery. Dr. Maruthur personally calls surgery patients on Friday or over the
                weekend. We also provide after-hours on-call access for any concerns.
              </p>
            </div>
          </div>

          {/* Immediate Post-Surgery Care */}
          <div className="bg-gradient-to-br from-primary/10 to-blue-100/50 p-8 rounded-xl mb-12">
            <h2 className="text-3xl font-bold mb-6">Immediate Care (First 24-48 Hours)</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Keep Your Bandage Dry</h3>
                <p className="text-gray-700">
                  Keep your surgical dressing clean and dry for the first 24-48 hours. Avoid getting
                  the bandage wet during bathing.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Manage Discomfort</h3>
                <p className="text-gray-700 mb-3">
                  Pain and soreness at the surgery site for 2-3 days is normal. You may experience:
                </p>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Mild to moderate discomfort</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Tightness around the surgical site</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Slight bruising or swelling</span>
                  </li>
                </ul>
                <p className="text-gray-700 mt-3">
                  Take over-the-counter pain medication as directed. Avoid aspirin or ibuprofen if you
                  were advised to do so.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Minor Bleeding</h3>
                <p className="text-gray-700">
                  Some minor bleeding is normal, especially if you take blood thinners. If bleeding
                  occurs, apply firm, direct pressure for 20 minutes without peeking.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Elevation</h3>
                <p className="text-gray-700">
                  Keep the surgical area elevated when possible (especially for the first 48 hours) to
                  minimize swelling and promote healing.
                </p>
              </div>
            </div>
          </div>

          {/* Wound Care Instructions */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Wound Care Instructions</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Cleaning Your Wound</h3>
                <ol className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-primary">1.</span>
                    <span>Wash your hands thoroughly with soap and water</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-primary">2.</span>
                    <span>Gently clean the wound with mild soap and water or as directed by your surgeon</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-primary">3.</span>
                    <span>Pat the area dry with a clean towel or gauze</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-primary">4.</span>
                    <span>Apply antibiotic ointment (if prescribed) to the wound</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-primary">5.</span>
                    <span>Cover with a clean bandage or dressing</span>
                  </li>
                </ol>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">How Often to Change Dressings</h3>
                <p className="text-gray-700">
                  Change your dressing daily or as directed by your surgeon. More frequent changes may
                  be needed if the bandage becomes wet or soiled.
                </p>
              </div>
            </div>
          </div>

          {/* Activity Restrictions */}
          <div className="bg-blue-50 p-8 rounded-xl mb-12">
            <h2 className="text-3xl font-bold mb-6">Activity Restrictions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3">First Week</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Avoid strenuous exercise, heavy lifting, and vigorous activity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>No swimming, hot tubs, or soaking the wound</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Avoid bending over or straining (increases blood pressure at the wound site)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Light walking is encouraged</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Weeks 2-3</h3>
                <p className="text-gray-700 mb-3">
                  Continue with lower activity levels. Most patients can gradually resume more normal
                  activities after the first week, but strenuous exercise should be avoided for 2-3 weeks.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Returning to Normal Activity</h3>
                <p className="text-gray-700">
                  After 2-3 weeks, you may gradually resume more strenuous physical activities. Follow
                  your surgeon's specific recommendations for your situation.
                </p>
              </div>
            </div>
          </div>

          {/* Recovery Timeline */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Recovery Timeline</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-bold text-lg mb-2">1-2 Weeks: Initial Healing</h3>
                <p className="text-gray-700">
                  Surgical sites typically heal well within one week. Sutures are removed or dissolve
                  within 1-2 weeks depending on the type used and location.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-bold text-lg mb-2">2-4 Weeks: Continued Recovery</h3>
                <p className="text-gray-700">
                  The wound continues to strengthen. Redness and firmness around the scar are normal
                  during this phase.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-bold text-lg mb-2">3-6 Months: Scar Maturation</h3>
                <p className="text-gray-700">
                  The scar will gradually soften and flatten. Initial redness begins to fade.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-bold text-lg mb-2">9-12 Months: Final Result</h3>
                <p className="text-gray-700">
                  Complete healing takes up to one year. Our goal is for there to be minimal scarring
                  and little to no signs that a surgery was performed at the one-year mark.
                </p>
              </div>
            </div>
          </div>

          {/* Warning Signs */}
          <div className="bg-red-50 border-2 border-red-200 p-8 rounded-xl mb-12">
            <h2 className="text-3xl font-bold mb-6 text-red-800">When to Call Your Doctor</h2>
            <p className="text-gray-700 mb-4 font-semibold">
              Contact our office immediately if you experience any of the following:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-red-600 text-xl mt-1">⚠️</span>
                <span><span className="font-bold">Excessive bleeding</span> that doesn't stop with 20 minutes of pressure</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 text-xl mt-1">⚠️</span>
                <span><span className="font-bold">Signs of infection:</span> increasing redness, warmth, swelling, pus, or foul odor</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 text-xl mt-1">⚠️</span>
                <span><span className="font-bold">Fever</span> over 100.4°F (38°C)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 text-xl mt-1">⚠️</span>
                <span><span className="font-bold">Severe pain</span> not relieved by medication</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 text-xl mt-1">⚠️</span>
                <span><span className="font-bold">Wound separation</span> or opening of the incision</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 text-xl mt-1">⚠️</span>
                <span><span className="font-bold">Allergic reaction</span> to medications or dressings</span>
              </li>
            </ul>
            <p className="text-gray-700 mt-6 font-semibold">
              Note: Post-operative infections are rare, occurring in approximately 1 in 100 cases.
              However, prompt treatment is important if infection does occur.
            </p>
          </div>

          {/* Optimizing Your Scar */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Optimizing Your Scar Appearance</h2>
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-primary text-2xl mt-1">✓</span>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Sun Protection</h3>
                    <p className="text-gray-700">
                      Protect your scar from sun exposure for at least one year. Use sunscreen (SPF 30+)
                      and/or cover the area with clothing.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-2xl mt-1">✓</span>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Scar Massage</h3>
                    <p className="text-gray-700">
                      After sutures are removed and the wound is fully closed, gentle massage can help
                      soften the scar tissue (ask your surgeon when it's safe to start).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-2xl mt-1">✓</span>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Silicone Products</h3>
                    <p className="text-gray-700">
                      Silicone gel sheets or ointments may help improve scar appearance. Discuss with
                      your surgeon if these are right for you.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-2xl mt-1">✓</span>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Be Patient</h3>
                    <p className="text-gray-700">
                      Scars take time to mature. What looks prominent at first will typically improve
                      significantly over the first year.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Follow-Up Care */}
          <div className="bg-gradient-to-br from-primary/10 to-blue-100/50 p-8 rounded-xl mb-12">
            <h2 className="text-3xl font-bold mb-6">Follow-Up Care</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                <span className="font-bold">Suture Removal:</span> If you have non-dissolving sutures,
                you will be scheduled for a suture removal appointment in 1-2 weeks.
              </p>
              <p className="text-gray-700">
                <span className="font-bold">Post-Op Check:</span> We will schedule follow-up appointments
                as needed to monitor your healing and ensure the best possible outcome.
              </p>
              <p className="text-gray-700">
                <span className="font-bold">Long-Term Monitoring:</span> After successful treatment,
                continue with regular skin cancer screenings as recommended by your dermatologist.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center">
            <div className="bg-gray-50 p-8 rounded-xl inline-block">
              <h3 className="text-xl font-bold mb-4">Questions During Recovery?</h3>
              <p className="text-gray-700 mb-6">
                Our team is here to support you throughout your recovery. Don't hesitate to reach out
                with any questions or concerns.
              </p>
              <Link
                href="/contact"
                className="text-primary font-semibold hover:underline inline-flex items-center gap-2"
              >
                Contact Our Office →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Recovery Journey
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Following these post-operative instructions will help ensure optimal healing and the best
            cosmetic outcome. We're with you every step of the way.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/before-mohs-surgery"
              className="bg-secondary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-secondary/90 transition-all hover:scale-105 shadow-xl"
            >
              Pre-Surgery Instructions
            </Link>
            <Link
              href="/mohs-surgery"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all"
            >
              About Mohs Surgery
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
