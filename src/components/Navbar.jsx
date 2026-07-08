import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { label: 'Home', path: '/' },
  { label: 'Jobs', path: '/jobs' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = (path) => pathname === path;

  const closeDrawer = () => setOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 no-underline">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-[#FF1654] to-[#D60046] flex items-center justify-center text-white font-bold text-sm sm:text-base font-[Poppins] shadow-md">
              VM
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold font-[Poppins] text-[#152935] leading-tight">Visa Master</span>
              <span className="text-[10px] sm:text-xs font-medium text-[#FF1654] tracking-wide leading-tight">Overseas</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                className={`px-3 xl:px-4 py-2 text-sm font-medium rounded-lg transition-colors no-underline ${
                  isActive(l.path)
                    ? 'text-[#FF1654] bg-[#FF1654]/10'
                    : 'text-[#152935]/80 hover:text-[#FF1654] hover:bg-red-50'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Right */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/saweratravel/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center w-9 h-9 rounded-full text-[#247BA0] hover:bg-blue-50 transition-colors no-underline"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f text-lg" />
            </a>
            {/* WhatsApp badge */}
            <a
              href="https://wa.me/923459090790"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-green-700 bg-green-50 border border-green-200 rounded-full hover:bg-green-100 transition-colors no-underline"
            >
              <i className="fab fa-whatsapp" />
              <span className="hidden md:inline">0345-9090790</span>
            </a>
            <Link
              to="/jobs"
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 text-sm font-bold text-white bg-[#FF1654] rounded-full hover:bg-[#D60046] hover:shadow-lg hover:shadow-[#FF1654]/30 transition-all no-underline"
            >
              <i className="fas fa-search text-xs" />
              Find Jobs
            </Link>
            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden ml-1 p-2 rounded-lg text-[#152935] hover:bg-red-50 transition-colors"
              aria-label="Toggle menu"
            >
              <i className={`fas ${open ? 'fa-times' : 'fa-bars'} text-lg`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-orange-100 bg-white/98 backdrop-blur-md">
          <div className="px-4 py-3 space-y-1">
            {links.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                onClick={closeDrawer}
                className={`block px-3 py-2.5 text-sm font-medium rounded-lg transition-colors no-underline ${
                  isActive(l.path)
                    ? 'text-[#FF1654] bg-[#FF1654]/10'
                    : 'text-[#152935]/80 hover:text-[#FF1654] hover:bg-red-50'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <hr className="my-2 border-orange-100" />
            <a
              href="https://www.facebook.com/saweratravel/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeDrawer}
              className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-[#247BA0] hover:bg-blue-50 rounded-lg transition-colors no-underline"
            >
              <i className="fab fa-facebook-f" />
              Facebook
            </a>
            <a
              href="https://wa.me/923459090790"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeDrawer}
              className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-green-700 hover:bg-green-50 rounded-lg transition-colors no-underline"
            >
              <i className="fab fa-whatsapp" />
              WhatsApp 0345-9090790
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}