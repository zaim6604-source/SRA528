import { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';

const WA = '923455487713';
const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between h-16 md:h-20">
        <a href="#hero" className="flex items-center gap-2 no-underline">
          <div className="w-9 h-9 rounded-lg bg-[#F4A100] flex items-center justify-center text-white font-extrabold text-sm font-display">
            RT
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-display font-extrabold text-sm md:text-base" style={{ color: '#2A1A00' }}>
              Rimsha Travels
            </span>
            <span className="text-[10px] md:text-[11px] font-medium tracking-tight" style={{ color: '#D68C00' }}>
              Travel &bull; Tourism &bull; HR
            </span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-[#F4A100]/10"
              style={{ color: '#2A1A00' }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${WA}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !py-2.5 !px-5 !text-sm ml-2"
          >
            <FaWhatsapp size={16} /> Enquire
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-lg"
          style={{ color: '#2A1A00' }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-[#F4A100]/10 px-5 pb-5 pt-3">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm font-medium"
              style={{ color: '#2A1A00' }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${WA}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !w-full !justify-center mt-3 !text-sm"
            onClick={() => setOpen(false)}
          >
            <FaWhatsapp size={16} /> Enquire on WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}