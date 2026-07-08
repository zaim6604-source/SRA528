import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Countries', href: '#countries' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-18">
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-2.5">
          <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary text-white font-extrabold text-sm">
            AB
          </span>
          <div className={`leading-tight transition-colors ${scrolled ? 'text-ink' : 'text-ink'}`}>
            <p className="font-bold text-sm">Abu Bakar Bilal</p>
            <p className="text-[11px] font-semibold opacity-70">Travel International</p>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                scrolled
                  ? 'text-ink/70 hover:text-primary hover:bg-primary/5'
                  : 'text-ink/70 hover:text-primary hover:bg-primary/5'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/923064712919"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 inline-flex items-center gap-2 bg-cta text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-teal-600 transition-colors shadow-lg"
          >
            <i className="fa-brands fa-whatsapp" />
            Apply Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'text-ink' : 'text-ink'
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <i className={`fas ${open ? 'fa-xmark' : 'fa-bars'} text-xl`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-primary/10 px-4 py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-ink/70 hover:text-primary hover:bg-primary/5 font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/923064712919"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-cta text-white font-semibold px-5 py-3 rounded-full mt-3 hover:bg-teal-600 transition-colors"
          >
            <i className="fa-brands fa-whatsapp" />
            Apply Now
          </a>
        </div>
      </div>
    </nav>
  )
}