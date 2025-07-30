'use client';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce AI Automation',
      client: 'RetailMax Corporation',
      industry: 'E-commerce',
      challenge: 'Manual inventory management and customer service were causing delays and inefficiencies',
      solution: 'Implemented AI-powered inventory management system with automated customer service chatbots',
      results: ['40% increase in operational efficiency', '60% reduction in response time', '25% cost savings'],
      image: 'https://readdy.ai/api/search-image?query=modern%20e-commerce%20dashboard%20with%20AI%20analytics%2C%20automated%20inventory%20management%20system%2C%20professional%20business%20interface%2C%20clean%20data%20visualization%2C%20corporate%20blue%20and%20gray%20color%20scheme&width=600&height=400&seq=case-1&orientation=landscape',
      tags: ['AI', 'Automation', 'E-commerce']
    },
    {
      id: 2,
      title: 'Healthcare Data Analytics',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      challenge: 'Difficulty in predicting patient outcomes and optimizing treatment plans',
      solution: 'Developed predictive analytics platform using machine learning for patient care optimization',
      results: ['25% improvement in treatment outcomes', '30% reduction in readmission rates', '50% faster diagnosis'],
      image: 'https://readdy.ai/api/search-image?query=healthcare%20data%20analytics%20dashboard%2C%20medical%20charts%20and%20patient%20data%20visualization%2C%20professional%20healthcare%20technology%20interface%2C%20clean%20modern%20design%2C%20blue%20and%20white%20medical%20theme&width=600&height=400&seq=case-2&orientation=landscape',
      tags: ['Healthcare', 'Analytics', 'ML']
    },
    {
      id: 3,
      title: 'Financial Risk Assessment',
      client: 'SecureBank Financial',
      industry: 'Finance',
      challenge: 'High false positive rates in fraud detection leading to customer frustration',
      solution: 'Built advanced ML models for real-time fraud detection with improved accuracy',
      results: ['60% reduction in false positives', '80% faster detection time', '35% increase in accuracy'],
      image: 'https://readdy.ai/api/search-image?query=financial%20risk%20assessment%20dashboard%2C%20fraud%20detection%20analytics%2C%20banking%20security%20interface%2C%20professional%20financial%20technology%2C%20dark%20blue%20and%20gray%20corporate%20design&width=600&height=400&seq=case-3&orientation=landscape',
      tags: ['Finance', 'ML', 'Security']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-slate-900 mb-6">
              Case Studies
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Explore detailed case studies showcasing how we've helped businesses achieve remarkable results through innovative technology solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-80 object-cover object-top rounded-2xl shadow-lg"
                />
              </div>

              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="text-blue-600 font-semibold mb-2">{study.industry}</div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">{study.title}</h2>
                  <div className="text-slate-600 mb-6">Client: {study.client}</div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Challenge</h3>
                    <p className="text-slate-600">{study.challenge}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Solution</h3>
                    <p className="text-slate-600">{study.solution}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">Results</h3>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center text-slate-600">
                          <i className="ri-check-line text-green-500 mr-2"></i>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap font-semibold">
                    <span className="flex items-center gap-2">
                      <i className="ri-download-line"></i>
                      Download Full Case Study
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <div className="bg-slate-50 p-12 rounded-2xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Create Your Success Story?</h3>
            <p className="text-slate-700 mb-6">Let's discuss how we can help transform your business with innovative solutions.</p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap font-semibold">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}