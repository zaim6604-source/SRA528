import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Countries', href: '#countries' },
  { label: 'Process', href: '#process' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-glass shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full bg-[#E0115F] flex items-center justify-center text-white text-sm font-bold shadow-rose-glow group-hover:shadow-lg transition-shadow">
              <i className="fas fa-bridge text-xs"></i>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-heading font-bold text-base md:text-lg text-[#2E0A1C]">Bridge Global</span>
              <span className="font-heading text-[10px] md:text-xs font-semibold text-[#E0115F] -mt-0.5">Resource</span>
            </div>
            <span className="hidden sm:inline-flex ml-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#E0115F] text-white">Islamabad</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-[#2E0A1C]/80 hover:text-[#E0115F] rounded-lg hover:bg-[#E0115F]/5 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/923212188000"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-[#7B2D8E] hover:bg-[#9B3DAE] text-white font-semibold px-4 py-2 rounded-full text-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
            >
              <i className="fab fa-whatsapp"></i>
              <span>Get Started</span>
            </a>
            <a
              href="https://facebook.com/bridgeglobalresource"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[#FFF0F4] text-[#E0115F] hover:bg-[#E0115F] hover:text-white transition-all duration-200"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            {/* Hamburger */}
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg text-[#2E0A1C] hover:bg-[#E0115F]/5 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <i className={`fas fa-${mobileOpen ? 'times' : 'bars'} text-lg`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-glass border-t border-[#E0115F]/10 px-4 py-3 space-y-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMobile}
              className="block px-4 py-2.5 text-sm font-medium text-[#2E0A1C]/80 hover:text-[#E0115F] hover:bg-[#E0115F]/5 rounded-lg transition-all"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/923212188000"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobile}
            className="flex items-center gap-2 mt-2 bg-[#7B2D8E] text-white font-semibold px-4 py-2.5 rounded-full text-sm transition-all hover:bg-[#9B3DAE]"
          >
            <i className="fab fa-whatsapp"></i>
            Get Started on WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}