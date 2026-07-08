import { Link } from 'react-router-dom';

export default function Footer() {
  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'Jobs', path: '/jobs' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const destinations = [
    'Saudi Arabia', 'UAE', 'Qatar', 'Oman', 'Kuwait',
    'Germany', 'Poland', 'Romania', 'Greece', 'Malaysia',
  ];

  return (
    <footer className="bg-highlight text-white">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-extrabold font-heading mb-2">
              Rolla <span className="text-accent">Corporation</span>
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Govt. Licensed OEP — License No. 2266/LHR<br />
              Lahore, Punjab, Pakistan
            </p>
            <span className="inline-block bg-accent/20 text-accent text-xs font-bold px-3 py-1 rounded-full">
              OEP 2266/LHR
            </span>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-accent mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-lg font-bold text-accent mb-4">Destinations</h4>
            <ul className="space-y-2">
              {destinations.map((d) => (
                <li key={d} className="text-white/70 text-sm">{d}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-accent mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/923008477507"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-accent transition-colors text-sm"
                >
                  <i className="fab fa-whatsapp text-green-400" />
                  0300-8477507
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/70 text-sm">
                <i className="fas fa-map-marker-alt text-accent mt-1" />
                <span>
                  Office No. 5, 1st Floor, Davis Heights,<br />
                  38-Davis Road, Lahore, Punjab
                </span>
              </li>
              <li>
                <a
                  href="mailto:info@rollacorp.pk"
                  className="flex items-center gap-2 text-white/70 hover:text-accent transition-colors text-sm"
                >
                  <i className="fas fa-envelope" />
                  info@rollacorp.pk
                </a>
              </li>
              <li>
                <a
                  href="tel:042363003089"
                  className="flex items-center gap-2 text-white/70 hover:text-accent transition-colors text-sm"
                >
                  <i className="fas fa-phone" />
                  042-36300308-9
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-xs">
            &copy; {new Date().getFullYear()} Rolla Corporation. All rights reserved.
          </p>
          <p className="text-white/50 text-xs">
            Govt. Licensed OEP — License No. 2266/LHR | Davis Road, Lahore
          </p>
        </div>
      </div>
    </footer>
  );
}