"use client";

import { useState } from "react";
import { FaPhone, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    purpose: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Replace with your WhatsApp number (include country code without + or spaces)
    // Example: For +1 234 567 8900, use 12345678900
    const whatsappNumber = "1234567890"; // REPLACE THIS WITH YOUR ACTUAL NUMBER
    
    // Create WhatsApp message
    const message = `*New Contact Request*%0A%0A*Name:* ${formData.name}%0A*Contact:* ${formData.contact}%0A*Email:* ${formData.email}%0A*Purpose:* ${formData.purpose}`;
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    
    // Reset form
    setFormData({ name: "", contact: "", email: "", purpose: "" });
  };

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Contact Us
        </h1>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Get in touch with us to discuss your project
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <FaPhone className="text-primary-600 text-2xl mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-gray-600">+1 (234) 567-8900</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaEnvelope className="text-primary-600 text-2xl mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">info@architectbuilder.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaWhatsapp className="text-primary-600 text-2xl mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold mb-1">WhatsApp</h3>
                  <p className="text-gray-600">+1 (234) 567-8900</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-primary-600 text-2xl mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-gray-600">
                    123 Architecture Street<br />
                    Design City, DC 12345
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-primary-50 rounded-lg">
              <h3 className="font-semibold mb-2">Business Hours</h3>
              <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-700">Saturday: 10:00 AM - 4:00 PM</p>
              <p className="text-gray-700">Sunday: Closed</p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Send Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="contact" className="block text-sm font-semibold mb-2">
                  Contact Number *
                </label>
                <input
                  type="tel"
                  id="contact"
                  required
                  value={formData.contact}
                  onChange={(e) => setFormData({...formData, contact: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email ID *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="purpose" className="block text-sm font-semibold mb-2">
                  Purpose *
                </label>
                <textarea
                  id="purpose"
                  required
                  value={formData.purpose}
                  onChange={(e) => setFormData({...formData, purpose: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="text-xl" />
                Send via WhatsApp
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-4 text-center">
              Clicking submit will open WhatsApp with your message
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
