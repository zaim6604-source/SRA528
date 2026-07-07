const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Services', href: '#services' },
  { label: 'Countries', href: '#countries' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact Us', href: '#contact' },
];

const services = [
  { label: 'Overseas Manpower Recruitment', href: '#services' },
  { label: 'International Labor Supply', href: '#services' },
  { label: 'Foreign Recruiter Support', href: '#services' },
  { label: 'Visa Processing', href: '#services' },
  { label: 'Document Attestation', href: '#services' },
  { label: 'Pre-Departure Orientation', href: '#services' },
];

const destinations = [
  { label: 'Saudi Arabia', href: '#countries' },
  { label: 'UAE', href: '#countries' },
  { label: 'Qatar', href: '#countries' },
  { label: 'Kuwait', href: '#countries' },
  { label: 'Germany', href: '#countries' },
  { label: 'Poland', href: '#countries' },
  { label: 'Romania', href: '#countries' },
  { label: 'Malaysia', href: '#countries' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#B8004F] text-white">
      {/* Top Wave SVG */}
      <div className="w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 60L60 51.3C120 43 240 26 360 22.7C480 19 600 29 720 34.3C840 40 960 40 1080 34.3C1200 29 1320 17 1380 11.3L1440 6V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V60Z"
            fill="#FFF0F4"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div>
            <a href="#home" className="flex items-center gap-2 mb-5 group">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white text-sm font-bold group-hover:scale-105 transition-transform">
                <i className="fas fa-bridge"></i>
              </div>
              <div>
                <p className="font-heading font-bold text-base text-white leading-tight">Bridge Global</p>
                <p className="text-[#FFD700] text-xs font-semibold">Resource</p>
              </div>
            </a>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Bridging Pakistani talent with the world's employers — competent, reliable manpower supply to the international labor market.
            </p>
            <div className="space-y-2.5 text-sm text-white/70">
              <div className="flex items-start gap-2">
                <i className="fas fa-map-marker-alt text-[#FFD700] mt-1 flex-shrink-0"></i>
                <div>
                  <p className="text-white/80">3 Street 36, MPCHS E-11/3, Islamabad, 44000</p>
                  <p className="text-white/60 text-xs mt-1">1 Paris Arcade, above UBL, E-11/3 Markaz, Islamabad</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-phone-alt text-[#FFD700] flex-shrink-0"></i>
                <a href="tel:0518468276" className="hover:text-white transition-colors">051-8468276</a>
              </div>
              <div className="flex items-center gap-2">
                <i className="fab fa-whatsapp text-[#FFD700] flex-shrink-0"></i>
                <a href="https://wa.me/923212188000" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">0321-2188000</a>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-envelope text-[#FFD700] flex-shrink-0"></i>
                <a href="mailto:Bridgeglobalresource@gmail.com" className="hover:text-white transition-colors break-all">Bridgeglobalresource@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white text-base mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/60 hover:text-[#FFD700] text-sm transition-colors duration-200 flex items-center gap-1.5 group">
                    <i className="fas fa-chevron-right text-xs opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200"></i>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-white text-base mb-5">Our Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="text-white/60 hover:text-[#FFD700] text-sm transition-colors duration-200 flex items-center gap-1.5 group">
                    <i className="fas fa-chevron-right text-xs opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200"></i>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-heading font-bold text-white text-base mb-5">Destinations</h4>
            <ul className="space-y-2.5 mb-7">
              {destinations.map((d) => (
                <li key={d.label}>
                  <a href={d.href} className="text-white/60 hover:text-[#FFD700] text-sm transition-colors duration-200 flex items-center gap-1.5 group">
                    <i className="fas fa-chevron-right text-xs opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200"></i>
                    {d.label}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="font-heading font-bold text-white text-sm mb-3">Follow Us</h4>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://facebook.com/bridgeglobalresource"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 bg-white/10 hover:bg-[#E0115F] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-md"
              >
                <i className="fab fa-facebook-f text-white text-sm"></i>
              </a>
              <a
                href="https://wa.me/923212188000"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 bg-white/10 hover:bg-[#25D366] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-md"
              >
                <i className="fab fa-whatsapp text-white text-sm"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/40">
          <p>&copy; {year} Bridge Global Resource. All rights reserved.</p>
          <p className="flex items-center gap-1">
            E-11, Islamabad — Bridging Pakistani Talent with Global Employers
          </p>
        </div>
      </div>
    </footer>
  );
}