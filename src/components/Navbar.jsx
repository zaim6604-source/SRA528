import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Destinations', path: '/destinations' },
  { label: 'Journey', path: '/journey' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = (path) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <span className="text-[#E10600] text-2xl"><i className="fa-solid fa-flag-checkered"></i></span>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-[#141414] text-sm lg:text-base font-[Poppins]">PAMI</span>
              <span className="text-[10px] text-[#E10600] font-semibold -mt-0.5">OVERSEAS</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <Link key={link.path} to={link.path}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive(link.path)
                    ? 'text-[#E10600] bg-[#E10600]/5'
                    : 'text-[#141414]/70 hover:text-[#E10600] hover:bg-[#E10600]/5'
                }`}>
                {link.label}
              </Link>
            ))}
            <a href="https://wa.me/923339742773" target="_blank" rel="noopener noreferrer"
              className="ml-3 bg-[#FFD500] text-[#141414] font-bold text-sm px-5 py-2.5 rounded-full hover:bg-[#E10600] hover:text-white transition-all shadow-md">
              <i className="fa-brands fa-whatsapp mr-1.5"></i>Apply Now
            </a>
          </div>

          <button className={`lg:hidden flex flex-col gap-1.5 p-2 ${open ? 'hamburger-open' : ''}`}
            onClick={() => setOpen(!open)} aria-label="Menu">
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>

      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 py-4 space-y-1 bg-white/95 backdrop-blur-md border-t border-gray-200">
          {NAV_LINKS.map(link => (
            <Link key={link.path} to={link.path} onClick={() => setOpen(false)}
              className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                isActive(link.path) ? 'text-[#E10600] bg-[#E10600]/5' : 'text-[#141414]/70 hover:text-[#E10600]'
              }`}>
              {link.label}
            </Link>
          ))}
          <a href="https://wa.me/923339742773" target="_blank" rel="noopener noreferrer"
            className="block mt-3 bg-[#FFD500] text-[#141414] text-center font-bold px-5 py-3 rounded-full hover:bg-[#E10600] hover:text-white transition-all">
            <i className="fa-brands fa-whatsapp mr-1.5"></i>Apply Now
          </a>
        </div>
      </div>
    </nav>
  );
}