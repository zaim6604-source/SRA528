import { useState } from 'react';
import useInView from '../hooks/useInView';

const faqs = [
  {
    q: 'Is Al-Awab International government licensed?',
    a: 'Yes, absolutely. Al-Awab International is a fully government-licensed Overseas Employment Promoter (OEP) under License No. 2261/RWP. We operate in full compliance with Pakistani overseas employment regulations.',
  },
  {
    q: 'Which countries do you recruit for?',
    a: 'We recruit for a wide range of countries including Saudi Arabia, UAE, Qatar, Oman, Malaysia, Germany, Poland, Romania, and Greece. We are continuously expanding our network of trusted employers across new destinations.',
  },
  {
    q: 'Where is your office located?',
    a: 'Our office is located at Flat No. 5, B-343, Tingo Market, Commercial Centre, Satellite Town, Rawalpindi, Punjab. We warmly welcome walk-in inquiries during business hours.',
  },
  {
    q: 'What documents are required to apply?',
    a: 'Typically you will need a valid passport (minimum 6 months validity), educational certificates, professional experience letters, CNIC, and passport-sized photographs. We will guide you through the complete document checklist after your initial consultation.',
  },
  {
    q: 'How long does visa processing take?',
    a: 'Processing times vary by country and job category, but typically range from 2 to 8 weeks. We keep you updated throughout the process and work to ensure timely processing.',
  },
  {
    q: 'Are there any registration fees?',
    a: 'We believe in complete transparency. Any applicable fees are clearly communicated upfront, with no hidden charges. We encourage you to visit our office at Tingo Market, Satellite Town, Rawalpindi for a detailed consultation on fees and the complete process.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [ref, visible] = useInView(0.1);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  const borderColors = ['#006D77', '#E29578', '#83C5BE', '#003844', '#FFDD00', '#006D77'];

  return (
    <section id="faqs" className="relative">
      {/* Wavy divider */}
      <div className="wavy-divider">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,40 C240,0 480,60 720,40 C960,20 1200,60 1440,40 L1440,60 L0,60 Z" fill="#E29578" />
        </svg>
      </div>

      <div style={{ backgroundColor: '#E29578' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          {/* Pill Badge */}
          <div className="flex justify-center mb-4">
            <span className="pill-5 px-5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider">
              FAQS
            </span>
          </div>

          <p className="text-center text-base sm:text-lg mb-10 max-w-2xl mx-auto" style={{ color: '#003844' }}>
            Quick answers to common questions.
          </p>

          <div ref={ref} className="space-y-3 sm:space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`fade-up ${visible ? 'visible' : ''} fade-up-delay-${(i % 3) + 1} rounded-xl overflow-hidden shadow-sm transition-all duration-300`}
                style={{
                  backgroundColor: 'white',
                  borderLeft: `4px solid ${borderColors[i]}`,
                }}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left cursor-pointer"
                  style={{ backgroundColor: 'transparent', border: 'none' }}
                >
                  <span className="text-sm sm:text-base font-semibold pr-4" style={{ color: '#003844' }}>
                    {faq.q}
                  </span>
                  <i
                    className={`fa-solid fa-chevron-down text-sm transition-transform duration-300 shrink-0 ${openIndex === i ? 'rotate-180' : ''}`}
                    style={{ color: '#006D77' }}
                  />
                </button>
                <div className={`accordion-content ${openIndex === i ? 'open' : ''}`}>
                  <div>
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0">
                      <p className="text-sm sm:text-base leading-relaxed m-0" style={{ color: '#00505A' }}>
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}