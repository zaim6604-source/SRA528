import { useState } from 'react';
import useInView from '../hooks/useInView';

const faqs = [
  {
    q: 'What staff categories do you offer?',
    a: 'We provide maids, nannies/helpers, drivers, cooks (local & continental), patient care attendants, elder care caregivers, domestic couples, and all-round house help.',
  },
  {
    q: 'How do you screen and verify your staff?',
    a: 'Every candidate undergoes identity verification, background checks, and reference validation. We ensure they are trained and experienced before placement.',
  },
  {
    q: 'Do you offer a replacement guarantee?',
    a: 'Yes! If a staff member does not meet your expectations within the trial period, we provide a replacement at no extra cost — giving you complete peace of mind.',
  },
  {
    q: 'What is the difference between live-in and live-out?',
    a: 'Live-in staff reside at your home, ideal for round-the-clock support. Live-out staff work on a daily schedule and return to their own residence. We offer both options.',
  },
  {
    q: 'Which areas do you serve?',
    a: 'We primarily serve Islamabad, including F-sector, E-sector, G-sector, and surrounding areas. Contact us to confirm availability for your location.',
  },
  {
    q: 'What are your fees?',
    a: 'Our fees are competitive and transparent — no hidden charges. Contact us for a customized quote based on the staff type, duration, and arrangement you need.',
  },
];

export default function MAFHHFAQ() {
  const [open, setOpen] = useState(null);
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section id="faqs" className="py-20 md:py-28" style={{ background: 'var(--color-background)' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="text-center mb-14">
          <div className="pill-badge justify-center mx-auto w-fit">
            <span className="pill-dot" />
            FAQS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: 'var(--dark-text)' }}>
            Frequently Asked <span style={{ color: 'var(--color-primary)' }}>Questions</span>
          </h2>
        </div>

        <div className={`space-y-3 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {faqs.map((faq, i) => (
            <div key={i}
              className="rounded-2xl border overflow-hidden transition-all"
              style={{
                background: '#fff',
                borderColor: open === i ? 'var(--color-primary)' : 'rgba(0,0,0,.06)',
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left font-bold text-sm"
                style={{ color: 'var(--dark-text)' }}
              >
                <span>{faq.q}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="shrink-0 ml-3 transition-transform duration-300"
                  style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)', color: 'var(--color-primary)' }}
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </button>
              <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: open === i ? '300px' : '0' }}>
                <div className="px-6 pb-4 text-sm leading-relaxed" style={{ color: 'var(--subtle-text)' }}>
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}