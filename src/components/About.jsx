import { useState } from 'react';
import useReveal from '../hooks/useReveal';
import { FaPlane, FaUserTie, FaStar, FaCheckCircle, FaMapMarkerAlt } from 'react-icons/fa';

const TABS = [
  {
    id: 'travel',
    label: 'Travel & Tourism',
    icon: FaPlane,
    content: (
      <div className="space-y-3">
        <p className="text-sm leading-relaxed" style={{ color: '#6B5B3E' }}>
          At Rimsha Travels, we specialize in making your travel dreams a reality. From air ticketing and tour packages to visa processing and hotel bookings, our experienced team ensures every journey is seamless and memorable.
        </p>
        <p className="text-sm leading-relaxed" style={{ color: '#6B5B3E' }}>
          Whether you are travelling for leisure, business, or pilgrimage, we provide end-to-end travel solutions tailored to your needs.
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          {['Air Ticketing', 'Tour Packages', 'Visa Services', 'Hotel Booking', 'Hajj/Umrah'].map((chip) => (
            <span key={chip} className="chip text-[10px]">{chip}</span>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'hr',
    label: 'HR Consultancy',
    icon: FaUserTie,
    content: (
      <div className="space-y-3">
        <p className="text-sm leading-relaxed" style={{ color: '#6B5B3E' }}>
          Our HR consultancy division connects skilled Pakistani workers with reputable employers abroad. We handle the entire recruitment cycle — from candidate sourcing and screening to visa processing and pre-departure orientation.
        </p>
        <p className="text-sm leading-relaxed" style={{ color: '#6B5B3E' }}>
          We partner with businesses across the Middle East, Europe, and Asia to supply qualified manpower in construction, hospitality, healthcare, and more.
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          {['Manpower Supply', 'Overseas Placement', 'Screening & Selection', 'Pre-Departure'].map((chip) => (
            <span key={chip} className="chip text-[10px]">{chip}</span>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'why',
    label: 'Why Rimsha',
    icon: FaStar,
    content: (
      <div className="space-y-3">
        {[
          'Licensed travel & HR consultancy based in Rawalpindi',
          'Experienced team with deep industry knowledge',
          'Personalized service — we treat every client like family',
          'Transparent pricing with no hidden charges',
          'End-to-end support from enquiry to departure',
        ].map((point, i) => (
          <div key={i} className="flex items-start gap-3">
            <FaCheckCircle size={16} className="mt-0.5 flex-shrink-0" style={{ color: '#06A77D' }} />
            <span className="text-sm" style={{ color: '#6B5B3E' }}>{point}</span>
          </div>
        ))}
      </div>
    ),
  },
];

export default function About() {
  useReveal('.abt-reveal');
  const [active, setActive] = useState('travel');

  return (
    <section id="about" className="py-[clamp(60px,10vw,100px)] px-5" style={{ background: '#FFF6E0' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 abt-reveal reveal">
          <span className="section-pill">WHO WE ARE</span>
          <h2 className="font-display font-extrabold mt-4 mb-3" style={{ fontSize: 'clamp(28px,5vw,42px)', color: '#2A1A00' }}>
            About Rimsha Travels
          </h2>
          <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed" style={{ color: '#6B5B3E' }}>
            Your trusted travel and HR consultancy partner in Satellite Town, Rawalpindi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="abt-reveal reveal-l rounded-2xl overflow-hidden">
            <img
              src="/images/about-office.jpg"
              alt="Rimsha Travels Office"
              className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>

          <div className="abt-reveal reveal-r">
            <div className="flex gap-2 mb-6 flex-wrap">
              {TABS.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActive(tab.id)}
                    className={`tab-btn flex items-center gap-2 ${active === tab.id ? 'active' : ''}`}
                  >
                    <Icon size={14} />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <div className="p-5 md:p-6 rounded-2xl" style={{ background: '#FFFEFA', border: '1px solid rgba(244, 161, 0, 0.1)' }}>
              {TABS.find((t) => t.id === active)?.content}
            </div>

            <div className="mt-4 flex items-center gap-2 text-sm" style={{ color: '#6B5B3E' }}>
              <FaMapMarkerAlt size={14} style={{ color: '#E0144C' }} />
              <span>Office No. LG-11, Mid City Shopping Mall, 29-8 Murree Road, B-Block, Satellite Town, Rawalpindi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}