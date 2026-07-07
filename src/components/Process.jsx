import useReveal from '../hooks/useReveal';
import { FaComments, FaFileAlt, FaStethoscope, FaFileSignature, FaPlaneDeparture } from 'react-icons/fa';

const STEPS = [
  { num: 1, title: 'Enquire & Consult', desc: 'Contact us via WhatsApp or visit our Rawalpindi office for a free consultation.', icon: FaComments },
  { num: 2, title: 'Choose Package/Job', desc: 'Select your tour package or desired job role and destination.', icon: FaFileAlt },
  { num: 3, title: 'Documents & Visa', desc: 'Submit your documents. We handle attestation, application, and visa processing.', icon: FaFileSignature },
  { num: 4, title: 'Booking/Confirmation', desc: 'Receive your confirmed bookings, tickets, or job offer.', icon: FaPlaneDeparture },
  { num: 5, title: 'Travel & Support', desc: 'Pre-departure briefing, travel arrangements, and ongoing support.', icon: FaStethoscope },
];

export default function Process() {
  useReveal('.pr-reveal');

  return (
    <section id="process" className="py-[clamp(60px,10vw,100px)] px-5 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #F4A100 0%, #E0144C 100%)' }}>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="pr-reveal reveal text-center mb-12">
          <span className="section-pill" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>
            HOW IT WORKS
          </span>
          <h2 className="font-display font-extrabold mt-4 mb-3" style={{ fontSize: 'clamp(28px,5vw,42px)', color: '#fff' }}>
            Our Process
          </h2>
          <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed text-white/80">
            Simple steps from enquiry to departure.
          </p>
        </div>

        {/* Desktop winding path */}
        <div className="hidden md:grid grid-cols-5 gap-4">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.num} className="pr-reveal reveal flex flex-col items-center text-center" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 relative z-10" style={{ background: 'rgba(255,255,255,0.2)', border: '2px solid rgba(255,255,255,0.4)' }}>
                  <Icon size={24} className="text-white" />
                </div>
                <div className="text-xs font-bold text-white/70 mb-2 tracking-wider">STEP {s.num}</div>
                <h3 className="font-display font-bold text-sm text-white mb-2">{s.title}</h3>
                <p className="text-xs leading-relaxed text-white/70">{s.desc}</p>
                {i < STEPS.length - 1 && (
                  <div className="w-full h-0.5 mt-4" style={{ background: 'rgba(255,255,255,0.2)' }} />
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile stacked */}
        <div className="md:hidden flex flex-col gap-4">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.num} className="pr-reveal reveal flex items-start gap-4" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ background: 'rgba(255,255,255,0.2)', border: '2px solid rgba(255,255,255,0.4)' }}>
                  <Icon size={18} className="text-white" />
                </div>
                <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 16, padding: '14px 16px', flex: 1 }}>
                  <div className="text-[10px] font-bold text-white/60 mb-1 tracking-wider">STEP {s.num}</div>
                  <h3 className="font-display font-bold text-base text-white mb-1">{s.title}</h3>
                  <p className="text-xs leading-relaxed text-white/70">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}