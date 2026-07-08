import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#D60046] text-white">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center text-white font-bold text-sm font-[Poppins]">
                VM
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold font-[Poppins] text-white leading-tight">Visa Master</span>
                <span className="text-[10px] font-medium text-white/70 tracking-wide leading-tight">Overseas</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-4">
              Licensed overseas employment agency serving Sherpao, Charsadda, and KPK. License OP&HRD/4951/PWR/2023.
            </p>
            <div className="flex gap-2">
              <a
                href="https://wa.me/923459090790"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors no-underline"
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp" />
              </a>
              <a
                href="https://www.facebook.com/saweratravel/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors no-underline"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                href="mailto:sawerapvt@gmail.com"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors no-underline"
                aria-label="Email"
              >
                <i className="fas fa-envelope" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold font-[Poppins] mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', path: '/' },
                { label: 'Jobs Portal', path: '/jobs' },
                { label: 'About Us', path: '/about' },
                { label: 'Contact', path: '/contact' },
              ].map((l) => (
                <li key={l.path}>
                  <Link
                    to={l.path}
                    className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors no-underline"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-sm font-bold font-[Poppins] mb-4 text-white">Destinations</h4>
            <ul className="space-y-2.5">
              {['Saudi Arabia', 'UAE', 'Qatar', 'Oman', 'Kuwait'].map((d) => (
                <li key={d}>
                  <span className="text-xs sm:text-sm text-white/60">{d}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Quick Apply */}
          <div>
            <h4 className="text-sm font-bold font-[Poppins] mb-4 text-white">Contact</h4>
            <div className="space-y-3 text-xs sm:text-sm text-white/60">
              <div className="flex items-start gap-2">
                <i className="fas fa-map-marker-alt mt-0.5 text-[#FFD400]" />
                <span>
                  Adda Bazar, Sherpao<br />
                  24530, Charsadda<br />
                  KPK, Pakistan
                </span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fab fa-whatsapp text-[#FFD400]" />
                <a
                  href="https://wa.me/923459090790"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white no-underline"
                >
                  0345-9090790
                </a>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-envelope text-[#FFD400]" />
                <a href="mailto:sawerapvt@gmail.com" className="text-white/60 hover:text-white no-underline">
                  sawerapvt@gmail.com
                </a>
              </div>
            </div>
            <a
              href="https://wa.me/923459090790?text=Hello%20Visa%20Master%20Overseas!%20I%20am%20interested%20in%20overseas%20job%20opportunities."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-[#152935] bg-[#FFD400] rounded-full hover:bg-[#e6bf00] transition-all no-underline"
            >
              <i className="fas fa-paper-plane text-xs" />
              Quick Apply
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/40">
          <span>&copy; {year} Visa Master Overseas. All rights reserved.</span>
          <span>License OP&HRD/4951/PWR/2023 | Govt. Registered Overseas Employment Agency</span>
        </div>
      </div>
    </footer>
  );
}