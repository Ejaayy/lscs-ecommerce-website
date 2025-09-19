export default function LandingPage() {
  return (
    <div className="relative bg-neutral">

    {/* Hero Section */}
    <section 
      className="pt-44 pb-20 text-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/src/assets/herobg.png')" }}
    >
      {/* Content */}
      <div className="relative z-10">
        {/* Tagline */}
        <p className="text-sm uppercase tracking-wider text-white drop-shadow-md mb-4">
          Smarter Shopping, Simplified
        </p>

        {/* Main Heading */}
        <h2 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
          <span className="bg-gradient-to-r from-neutral to-white bg-clip-text text-transparent drop-shadow-lg">
            Welcome to
          </span>{" "}
          <span className="text-accent drop-shadow-lg">
            TindaHub
          </span>
        </h2>
        {/* Subtext */}
        <p className="text-lg text-white max-w-2xl mx-auto mb-8 drop-shadow-md">
          Discover products, compare prices, and shop smarter with our all-in-one platform.
        </p>

        {/* Primary Actions */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <a
            href="#get-started"
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-yellow-500 to-customgold text-white 
                      font-bold shadow-xl hover:shadow-2xl hover:scale-110 hover:brightness-125
                      transform transition-all duration-300 ease-out"
          >
            Get Started
          </a>
          <a
            href="#ProductsPage"
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-customgold to-yellow-500 text-white 
                      font-bold shadow-xl hover:shadow-2xl hover:scale-110 hover:brightness-125
                      transform transition-all duration-300 ease-out"
          >
            Explore Store
          </a>
        </div>

        {/* Secondary Actions */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-white drop-shadow-sm">
          <a href="#features" className="hover:text-primary transition-colors">
            Features
          </a>
          <a href="#reviews" className="hover:text-primary transition-colors">
            Reviews
          </a>
          <a href="#faq" className="hover:text-primary transition-colors">
            FAQ
          </a>
          <a href="#support" className="hover:text-primary transition-colors">
            Support
          </a>
          <a href="#contact" className="hover:text-primary transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </section>



      {/* Features Section */}
      <section id="features" className="py-16 bg-gradient-to-b from-customgold to-neutral">
        <div className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-3">
          <div className="p-6 rounded-2xl shadow bg-white hover:shadow-lg transition hover:border-primary">
            <h3 className="text-xl font-semibold mb-2 text-primary">Fast Search</h3>
            <p className="text-gray-600">Quickly find products with our optimized search engine.</p>
          </div>
          <div className="p-6 rounded-2xl shadow bg-white hover:shadow-lg transition hover:border-secondary">
            <h3 className="text-xl font-semibold mb-2 text-secondary">Smart Cart</h3>
            <p className="text-gray-600">Save, compare, and checkout seamlessly in one place.</p>
          </div>
          <div className="p-6 rounded-2xl shadow bg-white hover:shadow-lg transition hover:border-accent">
            <h3 className="text-xl font-semibold mb-2 text-accent">Best Deals</h3>
            <p className="text-gray-600">Get personalized deals and recommendations daily.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
