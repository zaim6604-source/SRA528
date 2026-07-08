import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Our Story', path: '/story' },
  { label: 'Services', path: '/services' },
  { label: 'Country Guides', path: '/guides' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#FFF3E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 no-underline">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF1654] to-[#D60046] flex items-center justify-center text-white font-bold text-sm font-[Plus+Jakarta+Sans] shadow-md">
              AA
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold font-[Plus+Jakarta+Sans] text-[#152935] leading-tight">Al-Atique</span>
              <span className="text-[10px] sm:text-xs font-medium text-[#FF1654] tracking-wide leading-tight">Recruiting Agency</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                className={`px-3 xl:px-4 py-2 text-sm font-medium rounded-lg transition-colors no-underline ${
                  location.pathname === l.path
                    ? 'text-[#FF1654] bg-[#FF1654]/5'
                    : 'text-[#152935]/70 hover:text-[#FF1654] hover:bg-[#FF1654]/5'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Right */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="https://wa.me/923005668365"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#247BA0] bg-[#247BA0]/10 border border-[#247BA0]/20 rounded-full hover:bg-[#247BA0]/20 transition-colors no-underline"
            >
              <i className="fab fa-whatsapp" />
              <span className="hidden md:inline">0300-5668365</span>
            </a>
            <a
              href="https://wa.me/923005668365?text=Hello%20Al-Atique%2C%20I%20would%20like%20to%20apply%20for%20a%20job."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 text-sm font-bold text-white bg-[#70C1B3] rounded-full hover:bg-[#5daa9d] hover:shadow-lg hover:shadow-[#70C1B3]/30 transition-all no-underline"
            >
              <i className="fas fa-paper-plane text-xs" />
              Apply Now
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden ml-1 p-2 rounded-lg text-[#152935] hover:bg-[#FFF3E0] transition-colors"
              aria-label="Toggle menu"
            >
              <i className={`fas ${open ? 'fa-times' : 'fa-bars'} text-lg`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden border-t border-[#FFF3E0] bg-white/98 backdrop-blur-md">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2.5 text-sm font-medium rounded-lg transition-colors no-underline ${
                  location.pathname === l.path
                    ? 'text-[#FF1654] bg-[#FF1654]/5'
                    : 'text-[#152935]/70 hover:text-[#FF1654] hover:bg-[#FF1654]/5'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <hr className="my-2 border-[#FFF3E0]" />
            <a
              href="https://wa.me/923005668365"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-[#247BA0] hover:bg-[#247BA0]/5 rounded-lg transition-colors no-underline"
              onClick={() => setOpen(false)}
            >
              <i className="fab fa-whatsapp w-5 text-center" />
              WhatsApp 0300-5668365
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-[#247BA0] hover:bg-[#247BA0]/5 rounded-lg transition-colors no-underline"
              onClick={() => setOpen(false)}
            >
              <i className="fab fa-facebook w-5 text-center" />
              Facebook
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}