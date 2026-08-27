const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Treatments", href: "#treatments" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-white text-brand-navy py-16 md:py-20 border-t border-brand-border">
      <div className="w-full px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 mb-12">
          
          {/* Left: Brand */}
          <div className="flex flex-col gap-4">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-8 h-8 border-2 border-brand-navy flex items-center justify-center font-bold text-brand-navy transition-colors duration-300">
                R
              </div>
              <span className="font-heading font-bold tracking-wide text-brand-navy">
                Rao's Dental Care
              </span>
            </a>
            <p className="text-gray-500 leading-relaxed text-[15px] max-w-sm mt-2">
              Professional dental care focused on comfort, clarity and healthier smiles.
            </p>
          </div>

          {/* Middle: Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading font-bold text-brand-navy mb-2 uppercase tracking-wider text-sm">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href}
                  className="text-gray-500 hover:text-brand-navy transition-colors w-fit text-[15px]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading font-bold text-brand-navy mb-2 uppercase tracking-wider text-sm">Contact</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:09059945342" className="text-xl font-bold text-brand-navy hover:text-brand-blue-hover transition-colors">
                090599 45342
              </a>
              <p className="text-gray-500 text-[15px]">
                Quthbullapur, Hyderabad
              </p>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} Rao's Dental Care. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-brand-navy transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-navy transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
