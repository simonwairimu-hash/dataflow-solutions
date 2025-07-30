
'use client';

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-slate-50 flex items-center relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20office%20environment%20with%20sleek%20technology%20devices%2C%20AI%20robots%2C%20digital%20screens%20displaying%20data%20analytics%2C%20futuristic%20workspace%20with%20clean%20minimal%20design%2C%20soft%20lighting%2C%20professional%20atmosphere%2C%20navy%20blue%20and%20gray%20color%20scheme%2C%20high-tech%20ambiance&width=1920&height=1080&seq=hero-bg&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          objectPosition: 'top'
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="w-full">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Empowering Businesses with
                <span className="text-blue-900">
                  {` `}AI & Data-Driven
                </span>
                {` `}Strategies
              </h1>
              
              <p className="text-xl text-slate-700 mb-8 leading-relaxed">
                Transform your business with cutting-edge AI automation, intelligent data analysis, and innovative digital solutions that drive real results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToContact}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer whitespace-nowrap font-semibold"
                >
                  <span className="flex items-center justify-center gap-2">
                    Explore More
                    <i className="ri-arrow-right-line"></i>
                  </span>
                </button>
                
                <button 
                  onClick={scrollToProjects}
                  className="border-2 border-slate-600 text-slate-800 px-8 py-4 rounded-lg hover:bg-slate-600 hover:text-white transition-all duration-300 cursor-pointer whitespace-nowrap font-semibold"
                >
                  View Our Work
                </button>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=professional%20team%20working%20with%20AI%20technology%2C%20data%20visualization%20on%20multiple%20screens%2C%20modern%20office%20setting%20with%20glass%20walls%2C%20people%20collaborating%20on%20digital%20projects%2C%20futuristic%20workspace%20with%20holographic%20displays%2C%20clean%20minimalist%20design%2C%20navy%20blue%20and%20gray%20lighting&width=600&height=400&seq=hero-image&orientation=landscape"
                alt="AI Technology Workspace"
                className="w-full h-96 object-cover object-top rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg border border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-slate-700">AI Systems Active</span>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg border border-slate-200">
              <div className="text-2xl font-bold text-blue-700">99%</div>
              <div className="text-xs text-slate-600">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="ri-arrow-down-line text-2xl text-slate-600"></i>
      </div>
    </section>
  );
}
