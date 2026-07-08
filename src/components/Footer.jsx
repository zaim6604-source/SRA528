const QUICK_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Countries', href: '#countries' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

const SERVICES_LIST = [
  'Overseas Job Placement',
  'Visa Processing',
  'Air Ticketing & Travel',
  'Document Attestation',
  'Medical & Trade Tests',
  'Pre-Departure Orientation',
]

export default function Footer() {
  return (
    <footer className="bg-highlight text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-18">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/20 text-white font-extrabold text-lg">
                AB
              </span>
              <div>
                <p className="font-bold text-base leading-tight">Abu Bakar Bilal</p>
                <p className="font-bold text-sm leading-tight text-white/70">Travel International</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Licensed travel and recruitment agency providing fast, reliable overseas employment and travel services. Based in Pakhi More, Vehari.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/923064712919"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="WhatsApp"
              >
                <i className="fa-brands fa-whatsapp" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-base mb-4 text-white/90">Quick Links</h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 text-sm hover:text-white transition-colors flex items-center gap-2"
                  >
                    <i className="fas fa-chevron-right text-[10px] text-primary" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-base mb-4 text-white/90">Our Services</h4>
            <ul className="space-y-2.5">
              {SERVICES_LIST.map((svc) => (
                <li key={svc}>
                  <span className="text-white/60 text-sm flex items-center gap-2">
                    <i className="fas fa-circle text-[6px] text-primary" />
                    {svc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-base mb-4 text-white/90">Contact Info</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex gap-2.5">
                <i className="fas fa-location-dot text-primary mt-1 shrink-0" />
                <span>
                  Flat #01, Pakhi More
                  <br />
                  Dhahdi Complex, Vehari
                  <br />
                  Punjab
                </span>
              </li>
              <li className="flex gap-2.5">
                <i className="fas fa-phone text-primary mt-1 shrink-0" />
                <a href="tel:0673380519" className="hover:text-white transition-colors">
                  067-3380519
                </a>
              </li>
              <li className="flex gap-2.5">
                <i className="fa-brands fa-whatsapp text-primary mt-1 shrink-0" />
                <a
                  href="https://wa.me/923064712919"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  0306-4712919
                </a>
              </li>
              <li className="flex gap-2.5">
                <i className="fas fa-envelope text-primary mt-1 shrink-0" />
                <a
                  href="mailto:info@abubakarbilal.pk"
                  className="hover:text-white transition-colors"
                >
                  info@abubakarbilal.pk
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} Abu Bakar Bilal Travel International. License 2224/MTN. All rights reserved.
          </p>
          <a
            href="https://wa.me/923064712919"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cta text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-teal-600 transition-colors shadow-lg"
          >
            <i className="fa-brands fa-whatsapp" />
            Quick Apply
          </a>
        </div>
      </div>
    </footer>
  )
}