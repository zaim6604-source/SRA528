import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Jobs', path: '/jobs' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-accent/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-extrabold text-primary tracking-tight font-heading">
            Rolla <span className="text-accent">Corporation</span>
          </span>
          <span className="hidden sm:inline-flex text-[10px] font-bold bg-accent text-white px-2 py-0.5 rounded-full tracking-wider">
            2266/LHR
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                isActive(link.path)
                  ? 'text-cta bg-cta/5'
                  : 'text-ink/80 hover:text-accent hover:bg-accent/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/jobs"
            className="ml-3 bg-cta text-white px-5 py-2.5 rounded-full text-sm font-bold hover:brightness-110 transition-all shadow-lg shadow-cta/30"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-ink text-2xl p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <i className={`fas ${open ? 'fa-times' : 'fa-bars'}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-accent/10 px-4 pb-5 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`block px-3 py-2.5 text-sm font-medium transition-colors rounded-lg ${
                isActive(link.path)
                  ? 'text-cta bg-cta/5'
                  : 'text-ink/80 hover:text-accent'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/jobs"
            onClick={() => setOpen(false)}
            className="mt-2 block text-center bg-cta text-white px-5 py-2.5 rounded-full text-sm font-bold"
          >
            Apply Now
          </Link>
        </div>
      )}
    </nav>
  );
}