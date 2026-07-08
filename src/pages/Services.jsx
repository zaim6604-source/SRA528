import { useState } from 'react';

const services = [
  {
    icon: 'fa-briefcase',
    title: 'Overseas Job Placement',
    color: '#E0115F',
    desc: 'We connect skilled and unskilled workers with verified employers across the Gulf, Europe, and Asia. Our extensive network and industry knowledge ensure the right match for every candidate.',
  },
  {
    icon: 'fa-passport',
    title: 'Visa Processing',
    color: '#FF5C8A',
    desc: 'End-to-end visa processing support. From document preparation to submission and follow-up, our team handles the entire visa process to ensure timely approvals.',
  },
  {
    icon: 'fa-file-signature',
    title: 'Document Attestation',
    color: '#7B2D8E',
    desc: 'We manage the complete attestation of educational certificates, experience letters, and personal documents from relevant authorities including MOFA, HEC, and foreign embassies.',
  },
  {
    icon: 'fa-stethoscope',
    title: 'Medical & Trade Tests',
    color: '#B8004F',
    desc: 'Coordinated medical examinations at approved centers and trade tests to verify candidate skills. We ensure all health and competency requirements are met.',
  },
  {
    icon: 'fa-chalkboard-teacher',
    title: 'Pre-Departure Training',
    color: '#FFD700',
    desc: 'Comprehensive orientation covering cultural awareness, workplace rights, travel tips, and destination-specific guidance to prepare candidates for a smooth transition.',
  },
  {
    icon: 'fa-plane',
    title: 'Air Ticketing & Travel',
    color: '#E0115F',
    desc: 'We arrange competitive air travel, assist with airport transfers, and provide travel documentation support so candidates can focus on their journey ahead.',
  },
  {
    icon: 'fa-search-dollar',
    title: 'Employer Verification',
    color: '#FF5C8A',
    desc: 'Thorough verification of overseas employers, job offers, and employment contracts. We ensure every opportunity is legitimate and meets agreed terms.',
  },
  {
    icon: 'fa-users',
    title: 'Manpower Supply',
    color: '#7B2D8E',
    desc: 'Bulk recruitment solutions for businesses requiring skilled and unskilled workforce. We handle screening, selection, and mobilization for large-scale projects.',
  },
];

export default function Services() {
  const [flipped, setFlipped] = useState(null);

  return (
    <div className="space-y-8">
      <div className="text-center sm:text-left">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20 mb-3">
          <i className="fas fa-concierge-bell" />
          OUR SERVICES
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-ink mt-2">
          What We <span className="text-primary">Offer</span>
        </h1>
        <p className="text-ink/60 mt-2 max-w-2xl">
          Comprehensive recruitment services from application to departure.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((svc, i) => (
          <div
            key={svc.title}
            className="flip-card h-56 cursor-pointer"
            onClick={() => setFlipped(flipped === i ? null : i)}
          >
            <div className="flip-card-inner relative w-full h-full" style={{ transform: flipped === i ? 'rotateY(180deg)' : '' }}>
              {/* Front */}
              <div className="flip-card-front bg-white rounded-2xl shadow-sm border border-secondary/10 overflow-hidden">
                <div style={{ background: svc.color }} className="h-2" />
                <div className="p-5 flex flex-col items-center justify-center text-center h-[calc(100%-8px)]">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-3" style={{ background: `${svc.color}15` }}>
                    <i className={`fas ${svc.icon} text-2xl`} style={{ color: svc.color }} />
                  </div>
                  <h3 className="font-bold text-ink text-sm">{svc.title}</h3>
                  <p className="text-xs text-ink/40 mt-2">Tap to learn more</p>
                </div>
              </div>

              {/* Back */}
              <div className="flip-card-back bg-white rounded-2xl shadow-sm border border-secondary/10 overflow-hidden flex items-center justify-center p-5">
                <div className="text-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: `${svc.color}15` }}>
                    <i className={`fas ${svc.icon} text-lg`} style={{ color: svc.color }} />
                  </div>
                  <h3 className="font-bold text-ink text-sm mb-2">{svc.title}</h3>
                  <p className="text-xs text-ink/60 leading-relaxed">{svc.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}