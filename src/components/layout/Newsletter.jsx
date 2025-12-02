const Newsletter = () => {
    return (
      <section className="py-20 px-6 bg-linear-to-b from-orange-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-linear-to-br from-orange-500 to-orange-600 rounded-3xl shadow-xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-5xl font-extrabold mb-4">
                Get Fresh Recipes from ChefAI
              </h2>
              <p className="text-md text-orange-100 mb-8">
                Join thousands of food lovers receiving weekly recipes and cooking
                tips
              </p>
  
              <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/30 shadow-lg bg-white"
                />
                <button className="bg-white text-neutral-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg transform hover:scale-105">
                  Subscribe Now
                </button>
              </div>
  
              <p className="text-sm text-orange-100 mt-6">
                No spam, unsubscribe anytime. We respect your privacy.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Newsletter;