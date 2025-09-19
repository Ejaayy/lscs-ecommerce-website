export default function Footer() {
  return (
    <footer className="bg-secondary text-neutral py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-accent mb-2">TindaHub</h3>
          <p className="text-sm text-neutral/80">
            Smarter shopping, simplified. Discover products, compare prices, and shop smarter.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-accent mb-2">Quick Links</h4>
          <ul className="space-y-1 text-neutral/80">
            <li><a href="#features" className="hover:text-customgold transition-colors">Features</a></li>
            <li><a href="#reviews" className="hover:text-customgold transition-colors">Reviews</a></li>
            <li><a href="#faq" className="hover:text-customgold transition-colors">FAQ</a></li>
            <li><a href="#contact" className="hover:text-customgold transition-colors">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-accent mb-2">Contact Us</h4>
          <p className="text-neutral/80 text-sm">Email: support@tindahub.com</p>
          <p className="text-neutral/80 text-sm">Phone: +63 912 345 6789</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-neutral/30 pt-4 text-center text-sm text-neutral/70">
        &copy; {new Date().getFullYear()} TindaHub. All rights reserved.
      </div>
    </footer>
  );
}
