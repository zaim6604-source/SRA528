import { useState } from 'react'
import { NAV_LINKS, COMPANY } from '../data/siteData'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-extrabold text-sm shadow-md">
              SR
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-sm text-ink">{COMPANY.name}</span>
              <span className="block text-[10px] text-primary font-semibold tracking-wider uppercase">License {COMPANY.license}</span>
            </div>
            <div className="sm:hidden">
              <span className="font-bold text-sm text-ink">{COMPANY.shortName}</span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-3 py-2 text-sm font-medium text-ink/70 hover:text-primary transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href={COMPANY.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-cta text-white px-4 py-2 rounded-full text-sm font-bold hover:brightness-110 transition-all shadow-lg shadow-cta/30 animate-pulse-soft"
            >
              <i className="fab fa-whatsapp" />
              Apply Now
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded-lg text-ink/70 hover:text-primary hover:bg-primary/5 transition-colors"
              aria-label="Toggle menu"
            >
              <i className={`fas ${open ? 'fa-times' : 'fa-bars'} text-xl`} />
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden pb-4 border-t border-primary/10 pt-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-ink/70 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={COMPANY.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:hidden flex items-center gap-2 bg-cta text-white px-4 py-2.5 rounded-full text-sm font-bold hover:brightness-110 transition-all mt-2"
              >
                <i className="fab fa-whatsapp" />
                Apply Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}