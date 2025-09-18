export default function Navbar({ searchQuery, onSearchChange}) {
  return (
<header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-xl  
    border border-gray-300 bg-neutral/100 py-3 shadow-md md:top-6 md:rounded-3xl lg:max-w-screen-xl">
      <div className="px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="src/assets/weblogo.png" 
              alt="TindaHub Logo" 
              className="h-20 w-auto"
            />
          </div>

          {/* Search bar */}
          <div className="hidden md:flex flex-1 mx-6">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}

              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  onSearchChange(e.target.value);
                  const el = document.getElementById("products");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Links */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="#products"
              className="inline-block rounded-lg px-3 py-1 text-sm font-medium text-gray-700 
              transition-all duration-200 hover:bg-primary/10 hover:text-primary"
            >
              Products
            </a>
            <a
              href="#pricing"
              className="inline-block rounded-lg px-3 py-1 text-sm font-medium text-gray-700 
              transition-all duration-200 hover:bg-primary/10 hover:text-primary"
            >
              Pricing
            </a>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-end gap-3 ml-6">
            <a
              href="/login"
              className="hidden sm:inline-flex items-center justify-center rounded-xl bg-white 
              px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset 
              ring-gray-300 transition-all duration-150 hover:bg-gray-50"
            >
              Sign in
            </a>
            <a
              href="/login"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-3 py-2 
              text-sm font-semibold text-white shadow-sm transition-all duration-150 
              hover:bg-secondary focus-visible:outline focus-visible:outline-2 
              focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Login
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
