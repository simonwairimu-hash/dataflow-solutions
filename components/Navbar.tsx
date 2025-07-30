
'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button onClick={() => scrollToSection('home')} className="cursor-pointer">
              <span className="text-2xl font-bold text-blue-600" style={{fontFamily: 'var(--font-pacifico)'}}>
                DataFlow Solutions
              </span>
            </button>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('team')}
                className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
              >
                Contact Us
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-blue-600 p-2 cursor-pointer"
            >
              <i className={`ri-${isOpen ? 'close' : 'menu'}-line text-xl`}></i>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-slate-200">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              <button
                onClick={() => scrollToSection('home')}
                className="block text-slate-700 hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors cursor-pointer w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block text-slate-700 hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors cursor-pointer w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block text-slate-700 hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors cursor-pointer w-full text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="block text-slate-700 hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors cursor-pointer w-full text-left"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('team')}
                className="block text-slate-700 hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors cursor-pointer w-full text-left"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block bg-blue-600 text-white px-3 py-2 text-base font-medium hover:bg-blue-700 transition-colors cursor-pointer w-full text-left rounded-lg mt-2 whitespace-nowrap"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
