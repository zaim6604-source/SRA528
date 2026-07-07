import useReveal from '../hooks/useReveal';
import { FaPlane, FaSuitcase, FaPassport, FaBriefcase, FaHotel, FaUsers, FaFileAlt, FaShieldAlt } from 'react-icons/fa';

const SERVICES = [
  { icon: FaPlane, title: 'Air Ticketing', desc: 'Domestic & International flight bookings at the best rates.', color: '#F4A100' },
  { icon: FaSuitcase, title: 'Tour Packages & Holidays', desc: 'Curated holiday packages for leisure and group travel.', color: '#FFC93C' },
  { icon: FaPassport, title: 'Visit & Tourist Visa', desc: 'Hassle-free visa assistance for popular destinations.', color: '#E0144C' },
  { icon: FaBriefcase, title: 'Work Visa & Overseas Placement', desc: 'End-to-end work visa processing and job placement abroad.', color: '#06A77D' },
  { icon: FaHotel, title: 'Hotel & Hajj/Umrah Booking', desc: 'Hotel reservations and complete Hajj/Umrah packages.', color: '#D68C00' },
  { icon: FaUsers, title: 'HR Consultancy & Manpower', desc: 'Skilled manpower recruitment and HR consultancy services.', color: '#F4A100' },
  { icon: FaFileAlt, title: 'Document Attestation', desc: 'Professional document attestation and legalization services.', color: '#E0144C' },
  { icon: FaShieldAlt, title: 'Travel Insurance & Support', desc: 'Comprehensive travel insurance and 24/7 support.', color: '#06A77D' },
];

export default function Services() {
  useReveal('.svc-reveal');

  return (
    <section id="services" className="py-[clamp(60px,10vw,100px)] px-5" style={{ background: '#FFF6E0' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 svc-reveal reveal">
          <span className="section-pill">WHAT WE DO</span>
          <h2 className="font-display font-extrabold mt-4 mb-3" style={{ fontSize: 'clamp(28px,5vw,42px)', color: '#2A1A00' }}>
            Our Services
          </h2>
          <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed" style={{ color: '#6B5B3E' }}>
            Comprehensive travel, tourism, and HR solutions under one roof.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className="svc-reveal reveal rounded-2xl p-6 md:p-7 text-white transition-all duration-300 hover:scale-[1.03]"
              style={{ background: s.color }}
            >
              <s.icon size={28} className="mb-4 opacity-90" />
              <h3 className="font-display font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-sm leading-relaxed opacity-85">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}