import { Link } from 'react-router-dom';

const destinations = ['Saudi Arabia', 'UAE', 'Qatar', 'Kuwait', 'Oman', 'Germany', 'Poland', 'South Korea', 'Turkey'];

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#FFD500] text-xl"><i className="fa-solid fa-flag-checkered"></i></span>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-white text-lg font-[Poppins]">PAMI</span>
                <span className="text-[#FF4D4D] text-xs font-semibold -mt-1">OVERSEAS EMPLOYMENT PROMOTERS</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Full speed ahead to your career abroad. Based in Bannu, KPK — trusted overseas recruitment for opportunities worldwide.
            </p>
            <span className="inline-block bg-[#E10600]/20 text-[#FF4D4D] text-xs font-bold px-3 py-1.5 rounded-full">
              <i className="fa-solid fa-certificate mr-1"></i>Bannu, KPK
            </span>
          </div>

          <div>
            <h4 className="font-bold text-[#FFD500] text-sm uppercase tracking-wider mb-4 font-[Poppins]">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', path: '/' },
                { label: 'Services', path: '/services' },
                { label: 'Destinations', path: '/destinations' },
                { label: 'Journey', path: '/journey' },
                { label: 'Contact', path: '/contact' },
              ].map(link => (
                <li key={link.label}>
                  <Link to={link.path} className="text-white/60 hover:text-[#FFD500] text-sm transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#FFD500] text-sm uppercase tracking-wider mb-4 font-[Poppins]">Destinations</h4>
            <ul className="space-y-1.5">
              {destinations.map(d => (
                <li key={d} className="text-white/60 text-sm">
                  <i className="fa-solid fa-location-dot text-[#E10600] mr-2 text-xs"></i>{d}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#FFD500] text-sm uppercase tracking-wider mb-4 font-[Poppins]">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <i className="fa-brands fa-whatsapp text-[#FFD500] mt-0.5"></i>
                <a href="https://wa.me/923339742773" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD500] transition-colors">0333-9742773</a>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <i className="fa-solid fa-location-dot text-[#E10600] mt-0.5"></i>
                <span>XIQ5+866, Bannu, KPK</span>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <i className="fa-solid fa-envelope text-[#FF4D4D] mt-0.5"></i>
                <span>info@pamioverseas.pk</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/40 text-xs">&copy; {new Date().getFullYear()} PAMI Overseas Employment Promoters. All rights reserved.</p>
          <p className="text-white/40 text-xs">Bannu, KPK — Full Speed Ahead to Your Career Abroad</p>
        </div>
      </div>
    </footer>
  );
}