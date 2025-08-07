import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { imageConfig } from "@/lib/imageConfig";
import { WhatsAppButton } from "./WhatsAppButton";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full backdrop-blur-sm shadow-sm z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95' : 'bg-white/95'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src={imageConfig.logo} 
                alt="ADIL LARI TECHNICAL SERVICES Logo" 
                className="h-10 w-auto"
              />
              <span className="ml-3 text-lg font-bold text-gray-900">ADIL LARI TECHNICAL</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`transition-colors ${
                      location === item.href
                        ? 'text-primary'
                        : 'text-gray-600 hover:text-primary'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <a 
                  href="https://wa.me/971547965012" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                >
                  <i className="fab fa-whatsapp mr-2"></i>WhatsApp
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-primary"
              >
                <i className="fas fa-bars text-xl"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 ${
                    location === item.href
                      ? 'text-primary'
                      : 'text-gray-600'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a 
                href="https://wa.me/971547965012" 
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-accent"
              >
                <i className="fab fa-whatsapp mr-2"></i>WhatsApp Us
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <img 
                  src={imageConfig.logo} 
                  alt="ADIL LARI TECHNICAL SERVICES Logo" 
                  className="h-8 w-auto mr-3"
                />
                <span className="text-lg font-bold">ADIL LARI TECHNICAL SERVICES</span>
              </div>
              <p className="text-gray-400 mb-4">
                Your trusted partner for professional technical services in Dubai and UAE. Quality, reliability, and excellence in every project.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://wa.me/971547965012" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a 
                  href="mailto:adillari274502@gmail.com" 
                  className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <i className="fas fa-envelope"></i>
                </a>
                <a 
                  href="tel:+971547965012" 
                  className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors"
                >
                  <i className="fas fa-phone"></i>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/services" className="hover:text-white transition-colors">Cleaning Services</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Painting & Wall Work</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Plaster Work</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Plumbing & Sanitary</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p><i className="fas fa-map-marker-alt mr-2"></i>Deira, Al Khabeesi, UAE</p>
                <p><i className="fab fa-whatsapp mr-2"></i>+971 54 796 5012</p>
                <p><i className="fas fa-envelope mr-2"></i>adillari274502@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ADIL LARI TECHNICAL SERVICES. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
}
