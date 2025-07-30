
'use client';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="text-3xl font-bold text-blue-500" style={{fontFamily: 'var(--font-pacifico)'}}>
                DataFlow Solutions
              </span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Empowering businesses with AI-driven solutions and data-driven strategies for sustainable growth and digital transformation.
            </p>
            <div className="flex gap-4">
              <button className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <i className="ri-linkedin-fill text-white"></i>
              </button>
              <button className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <i className="ri-twitter-fill text-white"></i>
              </button>
              <button className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 transition-colors cursor-pointer">
                <i className="ri-github-fill text-white"></i>
              </button>
              <button className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors cursor-pointer">
                <i className="ri-youtube-fill text-white"></i>
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('services')} className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer">
                  AI Automation
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer">
                  Digital Marketing
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer">
                  Data Analysis
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer">
                  IT Solutions
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer">
                  Frontend Development
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('about')} className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('team')} className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer">
                  Our Team
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('projects')} className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer">
                  Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('blog')} className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer">
                  Blog
                </button>
              </li>
              <li>
                <button className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer">
                  Careers
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact</h3>
            <ul className="space-y-3">
              <li className="text-slate-400">
                <i className="ri-mail-line mr-2 text-blue-400"></i>
                simontheanalyst0@gmail.com
              </li>
              <li className="text-slate-400">
                <i className="ri-phone-line mr-2 text-blue-400"></i>
                +254 702 415 184
              </li>
              <li className="text-slate-400">
                <i className="ri-map-pin-line mr-2 text-blue-400"></i>
                
              </li>
            </ul>
            <button
              onClick={() => scrollToSection('contact')}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap font-semibold"
            >
              Get in Touch
            </button>
          </div>
        </div>

        <div className="border-t border-slate-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-sm">
              2024 DataFlow Solutions. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <button className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer">
                Privacy Policy
              </button>
              <button className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer">
                Terms of Service
              </button>
              <button className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
