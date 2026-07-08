import { useRef } from 'react';
import SectionWrapper from './SectionWrapper';

const services = [
  { icon: 'fa-briefcase', title: 'Overseas Job Placement', desc: 'Connecting skilled workers with top international employers.', color: 'bg-primary' },
  { icon: 'fa-passport', title: 'Visa Processing', desc: 'End-to-end visa application and documentation support.', color: 'bg-secondary' },
  { icon: 'fa-file-signature', title: 'Document Attestation', desc: 'Professional attestation and verification of credentials.', color: 'bg-accent' },
  { icon: 'fa-stethoscope', title: 'Medical & Trade Tests', desc: 'Coordination of medical exams and trade skill assessments.', color: 'bg-cta' },
  { icon: 'fa-plane-departure', title: 'Pre-Departure Orientation', desc: 'Comprehensive briefings before you travel.', color: 'bg-highlight' },
  { icon: 'fa-ticket-alt', title: 'Air Ticketing & Travel', desc: 'Affordable flight bookings and travel coordination.', color: 'bg-primary' },
  { icon: 'fa-shield-check', title: 'Employer Verification', desc: 'Thorough vetting of overseas employers and contracts.', color: 'bg-secondary' },
  { icon: 'fa-hard-hat', title: 'Manpower Supply', desc: 'Skilled and unskilled manpower for global industries.', color: 'bg-accent' },
];

export default function Services() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 340, behavior: 'smooth' });
    }
  };

  return (
    <SectionWrapper id="services" badge="OUR SERVICES" badgeColor="accent">
      <h2 className="text-3xl md:text-4xl font-extrabold text-ink font-heading mb-2">
        What We Offer
      </h2>
      <p className="text-ink/60 mb-10 max-w-2xl">
        Comprehensive recruitment services tailored to your international career goals.
      </p>

      <div className="relative">
        <button
          onClick={() => scroll(-1)}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all hidden md:flex"
          aria-label="Previous"
        >
          <i className="fas fa-chevron-left" />
        </button>
        <button
          onClick={() => scroll(1)}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all hidden md:flex"
          aria-label="Next"
        >
          <i className="fas fa-chevron-right" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4"
        >
          {services.map((svc) => (
            <div
              key={svc.title}
              className={`flex-shrink-0 w-[280px] md:w-[300px] snap-start rounded-2xl p-6 ${svc.color} text-white hover:brightness-110 transition-all duration-300 shadow-xl`}
            >
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center text-2xl mb-5">
                <i className={`fas ${svc.icon}`} />
              </div>
              <h3 className="text-xl font-bold mb-2">{svc.title}</h3>
              <p className="text-white/80 text-sm leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}