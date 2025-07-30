
'use client';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Manager',
      company: 'InnovateTech',
      content: 'DataFlow transformed our operations completely. Their AI automation solutions reduced our processing time by 60% and significantly improved our customer satisfaction scores.',
      rating: 5,
      avatar: 'SJ'
    },
   
  ];

  return (
    <section id="testimonials" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about working with TechFlow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-700 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-600"
            >
              <div className="mb-6">
                <div className="flex text-blue-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill"></i>
                  ))}
                </div>
                
                <div className="text-blue-400 text-4xl mb-4">
                  <i className="ri-double-quotes-l"></i>
                </div>
                
                <p className="text-slate-200 leading-relaxed text-lg">
                  {testimonial.content}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-slate-400 text-sm">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 cursor-pointer whitespace-nowrap font-semibold">
            <span className="flex items-center justify-center gap-2">
              <i className="ri-chat-1-line"></i>
              Share Your Story
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
