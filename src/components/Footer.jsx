import { Link } from 'react-router-dom';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Jobs', to: '/jobs' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

const destinations = [
  'Saudi Arabia', 'UAE', 'Qatar', 'Oman', 'Kuwait', 'Bahrain',
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#D4005A' }}>
      {/* Wavy divider */}
      <div className="wavy-divider">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,40 C240,0 480,60 720,40 C960,20 1200,60 1440,40 L1440,60 L0,60 Z" fill="#FF206E" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold shadow-md" style={{ backgroundColor: '#41EAD4' }}>
                S
              </div>
              <span className="font-bold text-lg text-white">Sufyan Recruiting Agency</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#FBFF12' }}>
              Govt. Licensed OEP — License No. 2237/RWP
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#FBFF12' }}>
              Supplying skilled manpower to the Gulf countries on a contract basis since 2003.
            </p>
            <div className="flex gap-3 pt-1">
              <a
                href="https://www.facebook.com/waqarriaz132/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                href="https://wa.me/923458649342"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold mb-4" style={{ color: '#41EAD4' }}>Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm transition-colors duration-200 hover:text-white"
                    style={{ color: '#FBFF12' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-sm font-bold mb-4" style={{ color: '#41EAD4' }}>Gulf Destinations</h4>
            <ul className="space-y-2.5">
              {destinations.map((d) => (
                <li key={d}>
                  <span className="text-sm" style={{ color: '#FBFF12' }}>{d}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold mb-4" style={{ color: '#41EAD4' }}>Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:0514861137" className="flex items-center gap-2 text-sm transition-colors hover:text-white" style={{ color: '#FBFF12' }}>
                  <i className="fa-solid fa-phone text-xs" style={{ color: '#41EAD4' }} />
                  051-4861137
                </a>
              </li>
              <li>
                <a href="https://wa.me/923458649342" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm transition-colors hover:text-white" style={{ color: '#FBFF12' }}>
                  <i className="fab fa-whatsapp text-xs" style={{ color: '#41EAD4' }} />
                  0345-8649342
                </a>
              </li>
              <li>
                <a href="https://wa.me/923135340453" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm transition-colors hover:text-white" style={{ color: '#FBFF12' }}>
                  <i className="fab fa-whatsapp text-xs" style={{ color: '#41EAD4' }} />
                  0313-5340453
                </a>
              </li>
              <li>
                <a href="mailto:info.sufyanagency@gmail.com" className="flex items-center gap-2 text-sm transition-colors hover:text-white" style={{ color: '#FBFF12' }}>
                  <i className="fa-solid fa-envelope text-xs" style={{ color: '#41EAD4' }} />
                  info.sufyanagency@gmail.com
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-sm" style={{ color: '#FBFF12' }}>
                  <i className="fa-solid fa-location-dot text-xs mt-1" style={{ color: '#41EAD4' }} />
                  Office 20, 2nd Floor, Zaki Centre, I-8 Markaz, Islamabad, ICT
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t text-center" style={{ borderColor: '#FF206E60' }}>
          <p className="text-xs sm:text-sm" style={{ color: '#FBFF12' }}>
            &copy; {new Date().getFullYear()} Sufyan Recruiting Agency — License No. 2237/RWP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}