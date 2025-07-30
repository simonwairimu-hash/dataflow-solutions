
'use client';

export default function AboutSection() {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            About DataFlow Solutions
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              At DataFlow Solutions, we believe in the transformative power of technology to revolutionize businesses. 
              Founded by industry veterans with decades of experience in AI, data science, and digital innovation, 
              we specialize in creating intelligent solutions that don't just solve today's problems but anticipate 
              tomorrow's opportunities. Our mission is to bridge the gap between cutting-edge technology and 
              practical business applications, ensuring every client achieves measurable growth through data-driven 
              strategies and AI-powered automation. What sets us apart is our holistic approach – we don't just 
              implement technology; we become your strategic partner in digital transformation.
            </p>
              {/*
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-slate-50 rounded-xl border border-slate-200">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-slate-600">Projects Completed</div>
              </div>

              <div className="text-center p-6 bg-slate-50 rounded-xl border border-slate-200">
                <div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
                <div className="text-slate-600">Years Experience</div>
              </div>
            </div>
              */}
          </div>

          <div className="relative">
            <img
              src="https://readdy.ai/api/search-image?query=modern%20tech%20office%20with%20glass%20walls%2C%20professional%20team%20members%20collaborating%2C%20AI%20technology%20displays%2C%20data%20analytics%20screens%2C%20clean%20minimalist%20workspace%20design%2C%20natural%20lighting%2C%20contemporary%20furniture%2C%20navy%20blue%20and%20gray%20color%20palette%2C%20innovation%20hub%20atmosphere&width=600&height=500&seq=about-image&orientation=portrait"
              alt="DataFlow Solutions Office Environment"
              className="w-full h-96 object-cover object-top rounded-2xl shadow-xl"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>

            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <i className="ri-lightbulb-line text-white text-xl"></i>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Innovation First</div>
                  <div className="text-sm text-slate-600">Cutting-edge solutions for modern challenges</div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-200">
                <button 
                  onClick={scrollToServices}
                  className="text-blue-600 hover:text-blue-700 font-semibold transition-colors cursor-pointer whitespace-nowrap"
                >
                  Learn More<i className="ri-arrow-right-line ml-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
