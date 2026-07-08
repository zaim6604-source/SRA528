import FadeUp from './FadeUp';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-highlight text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1 — Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white text-sm font-extrabold">S</div>
              <div>
                <div className="text-sm font-extrabold leading-tight">SAREER RECRUITING</div>
                <div className="text-[10px] font-semibold text-cta -mt-0.5">AGENCY</div>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-white/70">
              Government-licensed overseas recruitment agency serving Malakand Division since 2014.
              License <strong className="text-white">2218/MLK</strong>.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="https://wa.me/923459454665" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center hover:bg-white/30 transition-colors">
                <i className="fab fa-whatsapp text-sm" />
              </a>
              <a href="tel:0932410265" className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center hover:bg-white/30 transition-colors">
                <i className="fas fa-phone text-sm" />
              </a>
              <a href="mailto:info@sareer.pk" className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center hover:bg-white/30 transition-colors">
                <i className="fas fa-envelope text-sm" />
              </a>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="font-extrabold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About Us', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Countries', href: '#countries' },
                { label: 'Process', href: '#process' },
                { label: 'Contact', href: '#contact' },
                { label: 'FAQs', href: '#faqs' },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-xs text-white/70 hover:text-white transition-colors">
                    <i className="fas fa-chevron-right text-[8px] mr-2 text-cta" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <h4 className="font-extrabold text-sm mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-xs text-white/70">
                <i className="fas fa-map-marker-alt text-cta mt-0.5" />
                <span>Office No. 03, Ground Floor,<br />Bahadur Khan Plaza, Batkhela,<br />Malakand P Area, KPK</span>
              </li>
              <li>
                <a href="tel:0932410265" className="flex items-center gap-2 text-xs text-white/70 hover:text-white">
                  <i className="fas fa-phone text-cta" />
                  0932-410265
                </a>
              </li>
              <li>
                <a href="https://wa.me/923459454665" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-white/70 hover:text-white">
                  <i className="fab fa-whatsapp text-cta" />
                  0345-9454665
                </a>
              </li>
              <li>
                <a href="mailto:info@sareer.pk" className="flex items-center gap-2 text-xs text-white/70 hover:text-white">
                  <i className="fas fa-envelope text-cta" />
                  info@sareer.pk
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 — Quick Apply */}
          <div>
            <h4 className="font-extrabold text-sm mb-4">Apply Now</h4>
            <p className="text-xs text-white/70 mb-4 leading-relaxed">
              Ready to work abroad? Send us a message on WhatsApp and we'll get back to you within 24 hours.
            </p>
            <a
              href="https://wa.me/923459454665"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cta text-white font-extrabold px-5 py-3 rounded-full text-sm hover:brightness-110 transition-all shadow-lg"
            >
              <i className="fab fa-whatsapp text-base" />
              Quick Apply
            </a>
            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs text-white/50">
                <i className="fas fa-certificate text-cta" />
                License 2218/MLK
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[11px] text-white/50">
            &copy; {year} Sareer Recruiting Agency. All rights reserved.
          </p>
          <p className="text-[11px] text-white/50">
            <i className="fas fa-map-pin" /> Bahadur Khan Plaza, Batkhela
          </p>
        </div>
      </div>
    </footer>
  );
}
