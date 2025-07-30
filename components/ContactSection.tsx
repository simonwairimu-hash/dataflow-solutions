'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, company, phone, service, message } = formData;

    const subject = encodeURIComponent(`Support Request from ${name}`);
    const body = encodeURIComponent(
      `Hi Simon,

You have a new inquiry:

Full Name: ${name}
Email: ${email}
Company: ${company || 'N/A'}
Phone: ${phone || 'N/A'}
Service Interested In: ${service || 'N/A'}

Message:
${message}

Regards,
TechFlow Contact Form`
    );

    const mailtoLink = `mailto:simontheanalyst0@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Let's Start Your Digital Transformation
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to take your business to the next level? Get in touch with our team of experts and let's discuss your project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className="ri-mail-line text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Email</div>
                    <div className="text-slate-600">simontheanalyst0@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className="ri-phone-line text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Phone</div>
                    <div className="text-slate-600">+254 702 415 184</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <h4 className="text-xl font-bold text-slate-900 mb-4">Why Choose TechFlow?</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <i className="ri-check-line text-green-500"></i>
                  <span className="text-slate-700">Free initial consultation</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="ri-check-line text-green-500"></i>
                  <span className="text-slate-700">Custom solutions for your business</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="ri-check-line text-green-500"></i>
                  <span className="text-slate-700">Proven track record with 150+ clients</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="ri-check-line text-green-500"></i>
                  <span className="text-slate-700">24/7 support and maintenance</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form id="contact-form" onSubmit={handleSubmit} className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
                    placeholder="Company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
                    placeholder="+254 702 415 184"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Service Interested In
                </label>
                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm appearance-none pr-8"
                  >
                    <option value="">Select a service</option>
                    <option value="ai-automation">AI Automation</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="data-analysis">Data Analysis</option>
                    <option value="it-solutions">IT Solutions</option>
                    <option value="frontend-development">Frontend Development</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                  <i className="ri-arrow-down-s-line absolute right-3 top-3 text-slate-400"></i>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  maxLength={500}
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm resize-none"
                  placeholder="Tell us about your project and requirements..."
                ></textarea>
                <div className="text-right text-xs text-slate-500 mt-1">
                  {formData.message.length}/500
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer whitespace-nowrap font-semibold"
              >
                <span className="flex items-center justify-center gap-2">
                  Send Message
                  <i className="ri-send-plane-line"></i>
                </span>
              </button>

              {submitStatus && (
                <div className={`mt-6 p-4 rounded-lg ${submitStatus === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                  {submitStatus === 'success' ? 'Thank you! Your message has been sent successfully.' : 'Sorry, there was an error sending your message. Please try again.'}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
