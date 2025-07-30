export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <i className="ri-briefcase-line text-6xl text-blue-600 mb-4"></i>
          </div>
          
          <h1 className="text-4xl font-bold text-slate-900 mb-6">
            Career Opportunities
          </h1>
          
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          
          <div className="bg-slate-50 p-12 rounded-2xl border border-slate-200 max-w-2xl mx-auto">
            <div className="mb-6">
              <i className="ri-information-line text-4xl text-slate-600 mb-4"></i>
            </div>
            
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">
              Currently No Positions Open
            </h2>
            
            <p className="text-slate-600 mb-8 leading-relaxed">
              We appreciate your interest in joining DataFlow Solutions. While we don't have any open positions at the moment, we're always looking for talented individuals to join our team.
            </p>
            
            <div className="space-y-4">
              <p className="text-slate-700 font-medium">Stay Connected:</p>
              <div className="flex justify-center gap-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
                  <i className="ri-linkedin-fill mr-2"></i>
                  Follow on LinkedIn
                </button>
                <button className="border-2 border-slate-600 text-slate-800 px-6 py-3 rounded-lg hover:bg-slate-600 hover:text-white transition-colors cursor-pointer whitespace-nowrap">
                  <i className="ri-mail-line mr-2"></i>
                  Get Notified
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <p className="text-slate-600">
              Have questions about future opportunities? 
              <br />
              <span className="text-blue-600 font-medium">careers@dataflowsolutions.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}