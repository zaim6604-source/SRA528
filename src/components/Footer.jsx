import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#152935] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF1654] to-[#D60046] flex items-center justify-center text-white font-bold text-sm font-[Plus+Jakarta+Sans]">
                AA
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold font-[Plus+Jakarta+Sans] text-white leading-tight">Al-Atique</span>
                <span className="text-[10px] font-medium text-[#FFD400] tracking-wide leading-tight">Recruiting Agency</span>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Licensed overseas employment agency — License <strong className="text-white/80">2220/PWR</strong>. Stories of work, written across borders.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FFD400] mb-4 font-[Plus+Jakarta+Sans]">
              Navigate
            </h4>
            <div className="space-y-2.5">
              <Link to="/" className="block text-sm text-white/60 hover:text-[#70C1B3] transition-colors no-underline">Home</Link>
              <Link to="/story" className="block text-sm text-white/60 hover:text-[#70C1B3] transition-colors no-underline">Our Story</Link>
              <Link to="/services" className="block text-sm text-white/60 hover:text-[#70C1B3] transition-colors no-underline">Services</Link>
              <Link to="/guides" className="block text-sm text-white/60 hover:text-[#70C1B3] transition-colors no-underline">Country Guides</Link>
              <Link to="/contact" className="block text-sm text-white/60 hover:text-[#70C1B3] transition-colors no-underline">Contact</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FFD400] mb-4 font-[Plus+Jakarta+Sans]">
              Get in Touch
            </h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/923005668365"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-white/60 hover:text-[#70C1B3] transition-colors no-underline"
              >
                <i className="fab fa-whatsapp w-4 text-center text-[#70C1B3]" />
                <span>0300-5668365</span>
              </a>
              <a
                href="tel:0925510726"
                className="flex items-center gap-2.5 text-sm text-white/60 hover:text-[#70C1B3] transition-colors no-underline"
              >
                <i className="fas fa-phone w-4 text-center text-[#70C1B3]" />
                <span>0925-510726</span>
              </a>
              <a
                href="mailto:info@alatique.pk"
                className="flex items-center gap-2.5 text-sm text-white/60 hover:text-[#70C1B3] transition-colors no-underline"
              >
                <i className="fas fa-envelope w-4 text-center text-[#70C1B3]" />
                <span>info@alatique.pk</span>
              </a>
              <div className="flex items-start gap-2.5 text-sm text-white/60">
                <i className="fas fa-map-marker-alt w-4 text-center text-[#70C1B3] mt-0.5" />
                <span>Qasmi Market, Tehsil Thall, Distt Hangu, KPK</span>
              </div>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-white/60 hover:text-[#70C1B3] transition-colors no-underline"
              >
                <i className="fab fa-facebook w-4 text-center text-[#70C1B3]" />
                <span>Follow on Facebook</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {year} Al-Atique Recruiting Agency. All rights reserved. License 2220/PWR.
          </p>
          <p className="text-xs text-white/30">
            Qasmi Market, Thall, Hangu — KPK, Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
}