
'use client';

export default function FeaturesSection() {
  const services = [
    {
      icon: 'ri-robot-line',
      title: 'AI Automation',
      description: 'Streamline operations with intelligent automation solutions that learn and adapt to your business processes.',
      features: ['Process Optimization', 'Workflow Automation', 'Intelligent Decision Making']
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies that maximize ROI and drive sustainable business growth.',
      features: ['SEO Optimization', 'Social Media Strategy', 'Performance Analytics']
    },
    {
      icon: 'ri-bar-chart-line',
      title: 'Data Analysis',
      description: 'Transform raw data into actionable insights that drive strategic business decisions.',
      features: ['Predictive Analytics', 'Business Intelligence', 'Custom Dashboards']
    },
    {
      icon: 'ri-server-line',
      title: 'IT Solutions',
      description: 'Comprehensive IT infrastructure and cloud solutions for modern businesses.',
      features: ['Cloud Migration', 'Security Solutions', 'Infrastructure Management']
    },
    {
      icon: 'ri-code-line',
      title: 'Frontend Development',
      description: 'Beautiful, responsive web applications built with the latest technologies and best practices.',
      features: ['React Development', 'UI/UX Design', 'Performance Optimization']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-4">
                  <i className={`${service.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-4">{service.description}</p>
              </div>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-slate-600">
                    <i className="ri-check-line text-blue-600"></i>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <a 
                  href={service.title === 'AI Automation' ? "https://github.com/simonwairimu-hash/AI-automations" : service.title === 'Digital Marketing' ? "https://github.com/simonwairimu-hash/Digital-Marketing" : service.title === 'Data Analysis' ? "https://github.com/simonwairimu-hash/POWER-BI" : service.title === 'IT Solutions' ? "https://github.com/simonwairimu-hash/IT-solutions" : service.title === 'Frontend Development' ? "https://github.com/simonwairimu-hash/Frontend-Development" : "#" }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold transition-colors cursor-pointer whitespace-nowrap"
                >
                  Learn More
                  <i className="ri-arrow-right-line ml-2"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
