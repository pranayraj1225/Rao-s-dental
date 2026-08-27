import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/Button";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Treatments", href: "#treatments" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        isScrolled ? "shadow-sm border-b border-brand-border/50 py-3 backdrop-blur-md bg-white/95" : "py-5"
      }`}
    >
      <div className="w-full px-4 md:px-6 lg:px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-brand-light-blue rounded-xl flex items-center justify-center text-brand-blue font-bold text-xl group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
            R
          </div>
          <span className="font-heading font-bold text-xl text-brand-navy tracking-tight">
            Rao's Dental Care
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[15px] font-medium text-brand-text hover:text-brand-blue transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:09059945342"
            className="flex items-center gap-2 text-brand-text font-medium hover:text-brand-blue transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-brand-light-blue flex items-center justify-center text-brand-blue">
              <Phone size={14} />
            </div>
            <span className="text-[15px]">090599 45342</span>
          </a>
          <Button href="#contact">Book an Appointment</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-brand-navy"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-brand-border shadow-lg py-4 px-5 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-lg font-medium text-brand-navy py-2 border-b border-brand-light-blue/50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button href="#contact" className="mt-4 w-full" onClick={() => setIsMobileMenuOpen(false)}>
            Book Appointment
          </Button>
        </div>
      )}
    </header>
  );
}
