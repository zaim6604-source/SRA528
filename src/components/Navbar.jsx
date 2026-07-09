import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Jobs', href: '#jobs' },
    { label: 'Countries', href: '#countries' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleClick = (href) => {
    setActive(href);
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          <a href="#home" onClick={() => setActive('#home')} className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold">
              <i className="fas fa-globe-asia" />
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-extrabold leading-tight text-ink">NEW GEO PAK</div>
              <div className="text-[10px] font-semibold text-primary -mt-0.5">OVERSEAS EMPLOYMENT</div>
            </div>
            <div className="sm:hidden text-xs font-bold leading-tight text-ink">
              <div>GEO PAK</div>
              <div className="text-[10px] text-primary">OVERSEAS</div>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-1 text-xs font-semibold text-primary bg-background px-3 py-1 rounded-full">
            <i className="fas fa-certificate" />
            License 2317/MTN
          </div>

          <div className="hidden lg:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => handleClick(l.href)}
                className={`text-sm font-semibold transition-colors relative pb-1 ${
                  active === l.href
                    ? 'text-primary'
                    : 'text-ink hover:text-primary'
                }`}
              >
                {l.label}
                {active === l.href && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-primary rounded-full" />
                )}
              </a>
            ))}
          </div>

          <a
            href="https://wa.me/923008638517"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-cta text-ink font-extrabold px-4 py-2 rounded-full text-sm hover:brightness-110 transition-all shadow-md"
          >
            <i className="fas fa-paper-plane" />
            <span className="hidden sm:inline">Apply Now</span>
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden ml-2 text-ink text-xl p-1"
            aria-label="Toggle menu"
          >
            <i className={`fas ${open ? 'fa-times' : 'fa-bars'}`} />
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-4 pt-2 border-t border-gray-100">
            <div className="flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => handleClick(l.href)}
                  className={`text-sm font-semibold transition-colors ${
                    active === l.href ? 'text-primary' : 'text-ink hover:text-primary'
                  }`}
                >
                  {l.label}
                </a>
              ))}
              <div className="text-xs font-semibold text-primary bg-background px-3 py-1 rounded-full self-start">
                <i className="fas fa-certificate" /> License 2317/MTN
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}