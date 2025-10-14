'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredLocation: '',
    preferredProvider: '',
    appointmentType: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (will be replaced with actual API call later)
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setSubmitStatus('success');

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      preferredLocation: '',
      preferredProvider: '',
      appointmentType: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-800 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
            Schedule an appointment or get in touch with our team. We're here to help with all your dermatology needs.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📞</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-gray-600 mb-2">Call us during business hours</p>
              <a href="tel:+14805551234" className="text-primary font-semibold hover:underline">
                (480) 555-1234
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✉️</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-600 mb-2">Send us a message anytime</p>
              <a href="mailto:info@southernskiesdermatology.com" className="text-primary font-semibold hover:underline">
                info@southernskiesdermatology.com
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📍</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Locations</h3>
              <p className="text-gray-600 mb-2">Multiple convenient offices</p>
              <Link href="/locations" className="text-primary font-semibold hover:underline">
                View All Locations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Request an Appointment</h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          {submitStatus === 'success' && (
            <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg mb-8">
              <p className="font-semibold">✓ Thank you for your request!</p>
              <p>We'll contact you within 24 hours to confirm your appointment.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-gray-50 p-8 md:p-12 rounded-2xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="preferredLocation" className="block text-sm font-semibold mb-2">
                  Preferred Location *
                </label>
                <select
                  id="preferredLocation"
                  name="preferredLocation"
                  value={formData.preferredLocation}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select a location</option>
                  <option value="scottsdale">Scottsdale Office</option>
                  <option value="phoenix">Phoenix Office</option>
                  <option value="tempe">Tempe Office</option>
                </select>
              </div>

              <div>
                <label htmlFor="preferredProvider" className="block text-sm font-semibold mb-2">
                  Preferred Provider (Optional)
                </label>
                <select
                  id="preferredProvider"
                  name="preferredProvider"
                  value={formData.preferredProvider}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">No preference</option>
                  <option value="dr-malia-downing">Dr. Malia Downing</option>
                  <option value="emma-stephens-pa">Emma Stephens, PA-C</option>
                  <option value="raven-omar-pa-c">Raven Omar, PA-C</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="appointmentType" className="block text-sm font-semibold mb-2">
                Appointment Type *
              </label>
              <select
                id="appointmentType"
                name="appointmentType"
                value={formData.appointmentType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">Select appointment type</option>
                <option value="new-patient">New Patient Visit</option>
                <option value="skin-check">Skin Cancer Screening</option>
                <option value="cosmetic">Cosmetic Consultation</option>
                <option value="acne">Acne Treatment</option>
                <option value="mohs">Mohs Surgery</option>
                <option value="other">Other Concern</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                Additional Information (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Tell us about your concerns or questions..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? 'Submitting...' : 'Request Appointment'}
            </button>

            <p className="text-sm text-gray-600 text-center mt-4">
              * Required fields. We'll contact you within 24 hours to confirm your appointment.
            </p>
          </form>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Office Hours</h2>
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="flex justify-between py-2 border-b">
                  <span className="font-semibold">Monday:</span>
                  <span>8:00 AM - 5:00 PM</span>
                </p>
                <p className="flex justify-between py-2 border-b">
                  <span className="font-semibold">Tuesday:</span>
                  <span>8:00 AM - 5:00 PM</span>
                </p>
                <p className="flex justify-between py-2 border-b">
                  <span className="font-semibold">Wednesday:</span>
                  <span>8:00 AM - 5:00 PM</span>
                </p>
                <p className="flex justify-between py-2">
                  <span className="font-semibold">Thursday:</span>
                  <span>8:00 AM - 5:00 PM</span>
                </p>
              </div>
              <div>
                <p className="flex justify-between py-2 border-b">
                  <span className="font-semibold">Friday:</span>
                  <span>8:00 AM - 5:00 PM</span>
                </p>
                <p className="flex justify-between py-2 border-b">
                  <span className="font-semibold">Saturday:</span>
                  <span className="text-gray-500">Closed</span>
                </p>
                <p className="flex justify-between py-2">
                  <span className="font-semibold">Sunday:</span>
                  <span className="text-gray-500">Closed</span>
                </p>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-6">
              Emergency? Call us at <a href="tel:+14805551234" className="text-primary font-semibold">(480) 555-1234</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
