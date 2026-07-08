const quickLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Destinations', href: '#countries' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  'Overseas Job Placement',
  'Visa Processing',
  'Document Attestation',
  'Medical & Trade Tests',
  'Pre-Departure Orientation',
  'Air Ticketing & Travel',
];

const countries = [
  'Saudi Arabia', 'UAE', 'Qatar', 'Oman (Muscat)',
  'Germany', 'Romania', 'Greece', 'Croatia (Dubrovnik)', 'Malaysia (KL)',
];

export default function Footer() {
  return (
    <footer className="bg-highlight text-white">
      {/* Wavy divider */}
      <div className="wavy-divider">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path
            d="M0,30 C300,60 600,0 900,30 C1100,50 1200,30 1200,30 L1200,60 L0,60 Z"
            fill="#B8004F"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center text-white font-extrabold text-lg">
                N
              </div>
              <span className="font-bold text-lg text-white">
                Namir<span className="text-secondary">Brothers</span>
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Swat's reliable partner for overseas employment. Licensed, honest, and committed to your success.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/923435644441"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-ink transition-all"
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp" />
              </a>
              <a
                href="tel:0946-711291"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-ink transition-all"
                aria-label="Phone"
              >
                <i className="fas fa-phone" />
              </a>
              <a
                href="mailto:namiroep@yahoo.com"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-ink transition-all"
                aria-label="Email"
              >
                <i className="fas fa-envelope" />
              </a>
              <a
                href="https://www.facebook.com/namir4805/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-ink transition-all"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 text-sm hover:text-accent transition-colors flex items-center gap-2"
                  >
                    <i className="fas fa-chevron-right text-xs text-secondary" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((svc) => (
                <li key={svc}>
                  <a
                    href="#services"
                    className="text-white/70 text-sm hover:text-accent transition-colors flex items-center gap-2"
                  >
                    <i className="fas fa-circle text-[6px] text-secondary" />
                    {svc}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt text-secondary mt-0.5" />
                <span className="text-white/70 text-sm">
                  Office No. 05, Ground Floor, Bacha Plaza, New Road, Mingora, Swat, KPK
                </span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-phone text-secondary" />
                <a href="tel:0946-711291" className="text-white/70 text-sm hover:text-accent transition-colors">
                  0946-711291
                </a>
              </li>
              <li className="flex items-center gap-3">
                <i className="fab fa-whatsapp text-secondary" />
                <a
                  href="https://wa.me/923435644441"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 text-sm hover:text-accent transition-colors"
                >
                  0343-5644441
                </a>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-envelope text-secondary" />
                <a
                  href="mailto:namiroep@yahoo.com"
                  className="text-white/70 text-sm hover:text-accent transition-colors"
                >
                  namiroep@yahoo.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-xs">
            &copy; {new Date().getFullYear()} Namir Brothers Recruiting Agency — License 2256/MLK. All rights reserved.
          </p>
          <p className="text-white/50 text-xs">
            <i className="fas fa-map-pin mr-1" />
            Bacha Plaza, New Road, Mingora, Swat, KPK
          </p>
        </div>
      </div>
    </footer>
  );
}