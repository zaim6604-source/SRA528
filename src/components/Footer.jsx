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
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white text-sm">
                <i className="fas fa-globe-asia" />
              </div>
              <div>
                <div className="text-sm font-extrabold leading-tight">NEW GEO PAK</div>
                <div className="text-[10px] font-semibold text-accent -mt-0.5">OVERSEAS EMPLOYMENT</div>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-white/70">
              Government-licensed overseas recruitment agency serving South Punjab since 2017.
              License <strong className="text-white">2317/MTN</strong>.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="https://wa.me/923008638517" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center hover:bg-white/30 transition-colors">
                <i className="fab fa-whatsapp text-sm" />
              </a>
              <a href="tel:0614583813" className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center hover:bg-white/30 transition-colors">
                <i className="fas fa-phone text-sm" />
              </a>
              <a href="mailto:info@newgeopak.pk" className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center hover:bg-white/30 transition-colors">
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
                { label: 'Jobs', href: '#jobs' },
                { label: 'Countries', href: '#countries' },
                { label: 'Process', href: '#process' },
                { label: 'Contact', href: '#contact' },
                { label: 'FAQs', href: '#faqs' },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-xs text-white/70 hover:text-white transition-colors">
                    <i className="fas fa-chevron-right text-[8px] mr-2 text-accent" />
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
                <i className="fas fa-map-marker-alt text-accent mt-0.5" />
                <span>21-Hajvery Arcade, Kutchery Road,<br />Multan, Punjab</span>
              </li>
              <li>
                <a href="tel:0614583813" className="flex items-center gap-2 text-xs text-white/70 hover:text-white">
                  <i className="fas fa-phone text-accent" />
                  061-4583813
                </a>
              </li>
              <li>
                <a href="https://wa.me/923008638517" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-white/70 hover:text-white">
                  <i className="fab fa-whatsapp text-accent" />
                  0300-8638517
                </a>
              </li>
              <li>
                <a href="mailto:info@newgeopak.pk" className="flex items-center gap-2 text-xs text-white/70 hover:text-white">
                  <i className="fas fa-envelope text-accent" />
                  info@newgeopak.pk
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
              href="https://wa.me/923008638517"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cta text-ink font-extrabold px-5 py-3 rounded-full text-sm hover:brightness-110 transition-all shadow-lg"
            >
              <i className="fab fa-whatsapp text-base" />
              Quick Apply
            </a>
            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs text-white/50">
                <i className="fas fa-certificate text-accent" />
                License 2317/MTN
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[11px] text-white/50">
            &copy; {year} New Geo Pak Overseas Employment Promoters. All rights reserved.
          </p>
          <p className="text-[11px] text-white/50">
            <i className="fas fa-map-pin" /> Kutchery Road, Multan
          </p>
        </div>
      </div>
    </footer>
  );
}