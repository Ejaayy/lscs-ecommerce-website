export default function LandingPage() {
  return (
    <div className="relative bg-neutral">

    {/* Hero Section */}
    <section className="pt-44 pb-20 text-center bg-gradient-to-b from-primary/10 to-white">
      {/* Tagline */}
      <p className="text-sm uppercase tracking-wider text-secondary mb-4">
        Smarter Shopping, Simplified
      </p>

      {/* Main Heading */}
      <h2 className="text-5xl font-extrabold mb-6">
        <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
          Welcome to
        </span>{" "}
        <span className="text-[#5a3724]">
          TindaHub
        </span>
      </h2>

      {/* Subtext */}
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
        Discover products, compare prices, and shop smarter with our all-in-one platform.
      </p>

      {/* Primary Actions */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <a
          href="#get-started"
          className="px-8 py-3 rounded-xl bg-primary text-white font-semibold shadow-md hover:bg-secondary transition"
        >
          Get Started
        </a>
        <a
          href="#ProductsPage"
          className="px-8 py-3 rounded-xl bg-accent text-white font-semibold shadow-md hover:bg-primary transition"
        >
          Explore Store
        </a>
      </div>

      {/* Secondary Actions */}
      <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-600">
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
    </section>

      {/* Features Section */}
      <section id="features" className="py-16 max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-3">
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
      </section>
    </div>
  );
}
