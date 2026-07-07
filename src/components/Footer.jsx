import { FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope, FaArrowUp, FaHeart } from 'react-icons/fa';

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Contact', href: '#contact' },
];

const SERVICES = [
  'Air Ticketing',
  'Tour Packages',
  'Visa Services',
  'HR Consultancy',
  'Overseas Placement',
  'Hajj/Umrah Booking',
];

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden" style={{ background: '#D68C00' }}>
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-5 bg-white -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 py-[clamp(48px,8vw,72px)]">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                <span className="font-display font-extrabold text-white text-sm">RT</span>
              </div>
              <div>
                <div className="font-display font-extrabold text-base text-white">Rimsha Travels</div>
                <div className="text-[10px] font-semibold text-white/60 uppercase tracking-wider">Travel &bull; Tourism &bull; HR</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/60 mb-4">
              Your trusted partner for travel, tourism, visas, and overseas employment. Based in Rawalpindi, serving clients worldwide.
            </p>
            <a
              href={`https://wa.me/923455487713`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-white/10 rounded-lg px-4 py-2 no-underline transition-colors hover:bg-white/20"
            >
              <FaWhatsapp size={16} /> 0345-5487713
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-5">Quick Links</h4>
            <div className="flex flex-col gap-2.5">
              {NAV_LINKS.map((l) => (
                <button
                  key={l.label}
                  onClick={() => scrollTo(l.href)}
                  className="bg-none border-none cursor-pointer text-left text-sm text-white/60 hover:text-white transition-colors p-0"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-5">Services</h4>
            <div className="flex flex-col gap-2.5">
              {SERVICES.map((s) => (
                <span key={s} className="text-sm text-white/60">{s}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-5">Contact</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3 text-sm text-white/60">
                <FaMapMarkerAlt size={14} className="mt-0.5 flex-shrink-0 text-white/40" />
                <span>Office No. LG-11, Mid City Mall, 29-8 Murree Road, Satellite Town, Rawalpindi</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/60">
                <FaPhone size={14} className="flex-shrink-0 text-white/40" />
                <span>0345-5487713</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/60">
                <FaEnvelope size={14} className="flex-shrink-0 text-white/40" />
                <span>info@rimshatravels.pk</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-6" />

        {/* Bottom */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Rimsha Travels, Tourism &amp; Human Resource Consultant &mdash; All rights reserved
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-white/30 flex items-center gap-1">
              Made with <FaHeart size={10} className="text-red-400" /> in Rawalpindi
            </span>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center cursor-pointer transition-colors hover:bg-white/20"
            >
              <FaArrowUp size={13} className="text-white/60" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}