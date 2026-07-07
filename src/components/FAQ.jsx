import { useState } from 'react';
import useReveal from '../hooks/useReveal';
import { FaChevronDown } from 'react-icons/fa';

const FAQS = [
  { q: 'What services does Rimsha Travels offer?', a: 'We offer air ticketing, tour packages, visa services, HR consultancy, overseas placement, hotel bookings, Hajj/Umrah packages, document attestation, and travel insurance.' },
  { q: 'Which countries do you arrange travel and work for?', a: 'We serve destinations across the Middle East (Saudi Arabia, UAE, Qatar, Kuwait, Oman), Europe (Germany, Romania, Greece, Italy), Asia (Turkey, Malaysia, Azerbaijan), and more.' },
  { q: 'Where is your office located?', a: 'Office No. LG-11, Mid City Shopping Mall, 29-8 Murree Road, B-Block, Satellite Town, Rawalpindi, 46000.' },
  { q: 'How can I contact Rimsha Travels?', a: 'You can reach us via WhatsApp at 0345-5487713 or email at info@rimshatravels.pk. You can also visit our office in Rawalpindi.' },
  { q: 'Do you help with visa processing?', a: 'Yes, we provide complete visa assistance for tourist, visit, and work visas. Our team handles documentation, application, and follow-up.' },
  { q: 'How long does visa processing take?', a: 'Processing times vary by country and visa type, typically ranging from 1–8 weeks. We keep you updated throughout the process.' },
  { q: 'What documents do I need for overseas placement?', a: 'You typically need your CNIC, passport, educational certificates, experience letters, and passport-sized photographs. Our team will guide you on specific requirements.' },
];

export default function FAQ() {
  useReveal('.fq-reveal');
  const [open, setOpen] = useState(null);

  return (
    <section id="faqs" className="py-[clamp(60px,10vw,100px)] px-5" style={{ background: '#FFF6E0' }}>
      <div className="max-w-3xl mx-auto">
        <div className="fq-reveal reveal text-center mb-12">
          <span className="section-pill">FAQs</span>
          <h2 className="font-display font-extrabold mt-4 mb-3" style={{ fontSize: 'clamp(28px,5vw,42px)', color: '#2A1A00' }}>
            Frequently Asked Questions
          </h2>
          <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed" style={{ color: '#6B5B3E' }}>
            Everything you need to know about our services.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div key={i} className="fq-reveal reveal rounded-2xl overflow-hidden transition-all duration-300"
              style={{ background: '#fff', boxShadow: '0 2px 12px rgba(244, 161, 0, 0.06)', border: '1px solid rgba(244, 161, 0, 0.08)', transitionDelay: `${i * 0.06}s` }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left bg-none border-none cursor-pointer"
              >
                <span className="font-display font-bold text-sm" style={{ color: '#2A1A00', flex: 1, paddingRight: 16 }}>{faq.q}</span>
                <FaChevronDown
                  size={14}
                  style={{ color: '#F4A100', flexShrink: 0, transition: 'transform 0.3s', transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
              </button>
              <div style={{ maxHeight: open === i ? 200 : 0, overflow: 'hidden', transition: 'max-height 0.35s ease' }}>
                <p className="px-5 pb-5 text-sm leading-relaxed" style={{ color: '#6B5B3E' }}>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}