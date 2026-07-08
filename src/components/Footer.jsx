import { Link } from 'react-router-dom';

const services = [
  'Overseas Job Placement',
  'Visa Processing',
  'Document Attestation',
  'Medical & Trade Test',
  'Pre-Departure Orientation',
  'Air Ticketing',
  'Employer Verification',
  'Manpower Supply',
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-highlight)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)] flex items-center justify-center text-[var(--color-ink)] font-bold text-xl">
                T
              </div>
              <span className="font-bold text-lg">Talab Overseas</span>
            </div>
            <p className="text-[var(--color-secondary)] text-sm leading-relaxed">
              Your trusted route from Shergarh to the world. Connecting KPK workers to
              employment opportunities across the Gulf and Europe.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://wa.me/923469358431"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center hover:bg-[var(--color-accent)] hover:text-[var(--color-ink)] transition-colors"
              >
                <i className="fab fa-whatsapp" />
              </a>
              <a
                href="mailto:info@talaboverseas.pk"
                className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center hover:bg-[var(--color-accent)] hover:text-[var(--color-ink)] transition-colors"
              >
                <i className="fas fa-envelope" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/services', label: 'Services' },
                { to: '/countries', label: 'Countries' },
                { to: '/process', label: 'Our Process' },
                { to: '/contact', label: 'Contact' },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-[var(--color-secondary)] hover:text-[var(--color-accent)] transition-colors text-sm"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-[var(--color-secondary)] hover:text-[var(--color-accent)] transition-colors text-sm"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/15 text-center text-sm text-[var(--color-secondary)]">
          <p>
            &copy; {new Date().getFullYear()} Talab Overseas Employment Promoter. All rights
            reserved.
          </p>
          <p className="mt-1">
            1st Floor, UBL Bank, Shergarh, 23200, KPK, Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
}