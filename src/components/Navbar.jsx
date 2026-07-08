import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { label: 'Home', to: '/' },
  { label: 'Jobs', to: '/jobs' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFF8E0]/80 backdrop-blur-md border-b border-[#FF206E]/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#FF206E] flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-md">
              S
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-[15px] sm:text-[17px] leading-tight" style={{ color: '#1A1423' }}>
                Sufyan Recruiting
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium tracking-wide" style={{ color: '#FF206E' }}>
                Agency
              </span>
            </div>
          </Link>

          {/* License Pill */}
          <div className="hidden md:flex items-center">
            <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-[#FF206E]/10 text-[#FF206E] border border-[#FF206E]/30 tracking-wide">
              License 2237/RWP
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  isActive(link.to) ? 'bg-[#FF206E]/10 text-[#FF206E]' : 'text-[#4A3F55] hover:text-[#FF206E]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            to="/jobs"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: '#41EAD4' }}
          >
            <i className="fa-regular fa-briefcase text-xs" />
            Browse Jobs
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors"
            style={{ color: '#1A1423' }}
            aria-label="Toggle menu"
          >
            <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
        style={{ backgroundColor: '#FFF8E0' }}
      >
        <div className="px-4 py-3 space-y-1 border-t border-[#FF206E]/20">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                isActive(link.to) ? 'bg-[#FF206E]/10 text-[#FF206E]' : 'text-[#4A3F55]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/jobs"
            onClick={() => setMenuOpen(false)}
            className="block w-full text-center px-4 py-2.5 rounded-full text-sm font-semibold text-white shadow-md mt-2"
            style={{ backgroundColor: '#41EAD4' }}
          >
            <i className="fa-regular fa-briefcase mr-2" />
            Browse Jobs
          </Link>
        </div>
      </div>
    </nav>
  );
}