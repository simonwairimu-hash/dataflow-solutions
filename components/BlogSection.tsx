
'use client';

export default function BlogSection() {
  const posts = [
    {
      title: 'The Future of AI in Business Automation',
      excerpt: 'Discover how artificial intelligence is revolutionizing business processes and what it means for your organization\'s future growth and efficiency.',
      author: 'Sarah Chen',
      date: 'March 15, 2024',
      readTime: '5 min read',
      image: 'https://readdy.ai/api/search-image?query=AI%20automation%20in%20modern%20office%2C%20robotic%20process%20automation%2C%20futuristic%20business%20technology%2C%20artificial%20intelligence%20in%20workplace%2C%20digital%20transformation%20concept%2C%20professional%20tech%20environment&width=400&height=250&seq=blog-1&orientation=landscape',
      tags: ['AI', 'Automation', 'Business']
    },
    {
      title: 'Data-Driven Marketing Strategies That Actually Work',
      excerpt: 'Learn proven data analytics techniques that top companies use to maximize their marketing ROI and build lasting customer relationships.',
      author: 'Michael Rodriguez',
      date: 'March 10, 2024',
      readTime: '7 min read',
      image: 'https://readdy.ai/api/search-image?query=data%20analytics%20dashboard%20for%20marketing%20campaigns%2C%20charts%20and%20graphs%20showing%20marketing%20performance%2C%20digital%20marketing%20metrics%2C%20business%20intelligence%20visualization%2C%20professional%20marketing%20analysis&width=400&height=250&seq=blog-2&orientation=landscape',
      tags: ['Marketing', 'Data Analysis', 'Strategy']
    }
  ];

  return (
    <section id="blog" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Latest Insights
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, insights, and best practices in technology and digital transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4 hover:text-blue-600 transition-colors cursor-pointer">
                  {post.title}
                </h3>

                <p className="text-slate-600 mb-6 leading-relaxed">{post.excerpt}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 text-sm">{post.author}</div>
                      <div className="text-slate-500 text-xs">{post.date}</div>
                    </div>
                  </div>

                  <div className="text-slate-500 text-sm flex items-center gap-1">
                    <i className="ri-time-line"></i>
                    {post.readTime}
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-200">
                  <button className="text-blue-600 hover:text-blue-700 font-semibold transition-colors cursor-pointer whitespace-nowrap">
                    Read More
                    <i className="ri-arrow-right-line ml-2"></i>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer whitespace-nowrap font-semibold">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
}
