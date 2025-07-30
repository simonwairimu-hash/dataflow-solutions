
'use client';

import Link from 'next/link';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'E-commerce AI Automation',
      category: 'AI Automation',
      description: 'Implemented intelligent inventory management and customer service automation for a major retailer, resulting in 40% efficiency improvement.',
      image: 'https://readdy.ai/api/search-image?query=modern%20e-commerce%20dashboard%20with%20AI%20analytics%2C%20automated%20inventory%20management%20system%2C%20professional%20business%20interface%2C%20clean%20data%20visualization%2C%20corporate%20blue%20and%20gray%20color%20scheme&width=400&height=300&seq=project-1&orientation=landscape',
      tags: ['AI', 'Automation', 'E-commerce'],
      results: '+40% Efficiency'
    },
    {
      title: 'Healthcare Data Analytics',
      category: 'Data Analysis',
      description: 'Developed predictive analytics platform for patient care optimization, improving treatment outcomes by 25%.',
      image: 'https://readdy.ai/api/search-image?query=healthcare%20data%20analytics%20dashboard%2C%20medical%20charts%20and%20patient%20data%20visualization%2C%20professional%20healthcare%20technology%20interface%2C%20clean%20modern%20design%2C%20blue%20and%20white%20medical%20theme&width=400&height=300&seq=project-2&orientation=landscape',
      tags: ['Healthcare', 'Analytics', 'Prediction'],
      results: '+25% Outcomes'
    },
    {
      title: 'Financial Risk Assessment',
      category: 'Machine Learning',
      description: 'Built ML models for real-time fraud detection and risk assessment, reducing false positives by 60%.',
      image: 'https://readdy.ai/api/search-image?query=financial%20risk%20assessment%20dashboard%2C%20fraud%20detection%20analytics%2C%20banking%20security%20interface%2C%20professional%20financial%20technology%2C%20dark%20blue%20and%20gray%20corporate%20design&width=400&height=300&seq=project-3&orientation=landscape',
      tags: ['Finance', 'ML', 'Security'],
      results: '-60% False Positives'
    },
    {
      title: 'Manufacturing Process Optimization',
      category: 'IoT & AI',
      description: 'Integrated IoT sensors with AI analytics to optimize production lines, achieving 30% cost reduction.',
      image: 'https://readdy.ai/api/search-image?query=smart%20manufacturing%20dashboard%2C%20IoT%20sensors%20data%20visualization%2C%20industrial%20process%20optimization%20interface%2C%20professional%20factory%20analytics%2C%20blue%20and%20steel%20gray%20industrial%20theme&width=400&height=300&seq=project-4&orientation=landscape',
      tags: ['IoT', 'Manufacturing', 'Optimization'],
      results: '-30% Costs'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Success Stories
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            Discover how we've helped businesses across industries achieve remarkable results through innovative technology solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover object-top"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {project.category}
                </div>
                <div className="absolute bottom-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {project.results}
                </div>
              </div>

              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">{project.title}</h3>

                <p className="text-slate-600 mb-6 leading-relaxed">{project.description}</p>

                <div className="flex items-center justify-between">
                  <Link
                    href="/case-studies"
                    className="text-blue-600 hover:text-blue-700 font-semibold transition-colors cursor-pointer whitespace-nowrap"
                  >
                    View Case Study
                    <i className="ri-arrow-right-line ml-2"></i>
                  </Link>

                  <Link
                    href="/case-studies"
                    className="flex items-center gap-2 text-slate-500 hover:text-slate-700 transition-colors cursor-pointer"
                  >
                    <i className="ri-eye-line"></i>
                    <span className="text-sm">Learn More</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/case-studies"
            className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer whitespace-nowrap font-semibold inline-block"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
