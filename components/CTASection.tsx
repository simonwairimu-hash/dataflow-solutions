
'use client';

export default function CTASection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border border-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/3 w-12 h-12 border border-white rounded-full"></div>
        <div className="absolute bottom-32 right-10 w-24 h-24 border border-white rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Join hundreds of successful companies that have already revolutionized their operations with our AI-powered solutions. 
            Let's discuss how we can accelerate your digital transformation journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={scrollToContact}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer whitespace-nowrap font-semibold"
            >
              <span className="flex items-center justify-center gap-2">
                Get Started Today
                <i className="ri-arrow-right-line"></i>
              </span>
            </button>
            <a
              href="https://wa.me/254702415184?text=Hi%2C%20I%E2%80%99d%20like%20to%20schedule%20a%20call%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="border-2 border-slate-400 text-slate-300 px-8 py-4 rounded-lg hover:bg-slate-400 hover:text-slate-900 transition-all duration-300 cursor-pointer whitespace-nowrap font-semibold">
                <span className="flex items-center justify-center gap-2">
                  <i className="ri-calendar-line"></i>
                  Schedule a Call
                </span>
              </button>
            </a>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <i className="ri-time-line text-xl"></i>
              </div>
              <div className="text-left">
                <div className="font-semibold">Quick Response</div>
                <div className="text-slate-300 text-sm">Within 24 hours</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <i className="ri-shield-check-line text-xl"></i>
              </div>
              <div className="text-left">
                <div className="font-semibold">No Commitment</div>
                <div className="text-slate-300 text-sm">Free consultation</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <i className="ri-award-line text-xl"></i>
              </div>
              <div className="text-left">
                <div className="font-semibold">Proven Results</div>
                <div className="text-slate-300 text-sm">10+ success stories</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
