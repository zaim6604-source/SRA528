import { Link } from 'react-router-dom';

const quickLinks = [
  { label: 'Overview', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Destinations', to: '/destinations' },
  { label: 'Process', to: '/process' },
  { label: 'Apply', to: '/apply' },
];

const services = [
  'Overseas Job Placement',
  'Visa Processing',
  'Document Attestation',
  'Medical & Trade Tests',
  'Pre-Departure Orientation',
  'Air Ticketing & Travel',
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-white font-extrabold text-lg">
                F
              </div>
              <span className="font-bold text-lg text-white">
                Fejar<span className="text-secondary">.</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Rawalpindi's dependable desk for overseas careers. Licensed, honest, and committed to your success.
            </p>
            <div className="flex gap-3">
              <a
                href="tel:+920514410484"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-cta hover:text-white transition-all"
                aria-label="Phone"
              >
                <i className="fas fa-phone" />
              </a>
              <a
                href="mailto:info@fejarenterprises.pk"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-cta hover:text-white transition-all"
                aria-label="Email"
              >
                <i className="fas fa-envelope" />
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
                  <Link
                    to={link.to}
                    className="text-white/50 text-sm hover:text-secondary transition-colors flex items-center gap-2"
                  >
                    <i className="fas fa-chevron-right text-xs text-secondary" />
                    {link.label}
                  </Link>
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
                  <span className="text-white/50 text-sm flex items-center gap-2">
                    <i className="fas fa-circle text-[6px] text-secondary" />
                    {svc}
                  </span>
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
                <span className="text-white/50 text-sm">
                  Flat No. 7, 1st Floor, Al-Mustafa Plaza,<br />
                  6th Road, Murree Road, Rawalpindi
                </span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-phone text-secondary" />
                <a href="tel:0514410484" className="text-white/50 text-sm hover:text-secondary transition-colors">
                  051-4410484
                </a>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-envelope text-secondary" />
                <a
                  href="mailto:info@fejarenterprises.pk"
                  className="text-white/50 text-sm hover:text-secondary transition-colors"
                >
                  info@fejarenterprises.pk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Fejar Enterprises — License 2207/RWP. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            <i className="fas fa-map-pin mr-1" />
            Al-Mustafa Plaza, 6th Road, Rawalpindi
          </p>
        </div>
      </div>
    </footer>
  );
}