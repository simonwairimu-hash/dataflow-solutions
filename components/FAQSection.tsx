
'use client';

import { useState } from 'react';

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "How long does it typically take to implement an AI automation solution?",
      answer: "Implementation timeline varies based on project complexity. Simple automation projects can be completed in 2-4 weeks, while comprehensive AI systems may take 2-3 months. We provide detailed timelines during our initial consultation and keep you updated throughout the process."
    },
    {
      question: "What kind of ROI can I expect from your data analysis services?",
      answer: "Our clients typically see 25-40% improvement in operational efficiency and 15-30% increase in revenue within the first 6 months. We provide detailed ROI projections based on your specific business metrics and goals during our initial assessment."
    },
    {
      question: "Do you provide ongoing support and maintenance after project completion?",
      answer: "Yes, we offer comprehensive support packages including 24/7 monitoring, regular updates, performance optimization, and dedicated technical support. We believe in building long-term partnerships with our clients to ensure continued success."
    },
    {
      question: "Can you work with our existing systems and infrastructure?",
      answer: "Absolutely! We specialize in seamless integration with existing systems. Our team conducts thorough compatibility assessments and develops custom solutions that work harmoniously with your current infrastructure while minimizing disruption to your operations."
    },
    {
      question: "What makes TechFlow different from other technology agencies?",
      answer: "Our unique combination of AI expertise, data science proficiency, and business acumen sets us apart. We don't just implement technology – we become strategic partners who understand your business goals and deliver solutions that drive measurable results. Our 99% client satisfaction rate speaks to our commitment to excellence."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-700">
            Get answers to the most common questions about our services and process.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 transition-all duration-300 cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-slate-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <i className={`ri-${openFAQ === index ? 'subtract' : 'add'}-line text-2xl text-blue-600 transition-all duration-300`}></i>
                </div>
              </button>

              {openFAQ === index && (
                <div className="px-6 pb-6">
                  <div className="border-t border-slate-200 pt-4">
                    <p className="text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Still Have Questions?</h3>
            <p className="text-slate-600 mb-6">Our team is here to help you understand how our solutions can benefit your business.</p>
          <a href="tel:0702415184">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 cursor-pointer whitespace-nowrap font-semibold">
              <span className="flex items-center justify-center gap-2">
                <i className="ri-chat-1-line"></i>
                Contact Support
              </span>
            </button>
          </a>

          </div>
        </div>
      </div>
    </section>
  );
}
