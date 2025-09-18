export default function LandingPage() {
  return (
    <div className="relative bg-neutral">

      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-lg 
        border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg 
        md:top-6 md:rounded-3xl">
        <div className="px-4">
          <nav className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              TindaHub
            </h1>
            <div className="hidden md:flex gap-5">
              <a href="#products" className="hover:text-primary">Products</a>
              <a href="#features" className="hover:text-primary">Features</a>
            </div>
            <div className="flex gap-3">
              <a href="/login" className="px-3 py-2 rounded-lg bg-white ring-1 ring-gray-300 shadow hover:bg-gray-50">
                Sign in
              </a>
              <a href="/login" className="px-3 py-2 rounded-lg bg-primary text-white shadow hover:bg-secondary">
                Login
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center bg-gradient-to-b from-primary/10 to-white">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Welcome to TindaHub
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover products, compare prices, and shop smarter with our all-in-one platform.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="#products" className="px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-secondary">
            Get Started
          </a>
          <a href="#features" className="px-6 py-3 rounded-lg bg-accent text-white font-semibold hover:bg-primary">
            Learn More
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
