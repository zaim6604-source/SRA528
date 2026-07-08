import { useState } from 'react';
import useInView from '../hooks/useInView';

const faqs = [
  {
    q: 'What documents do I need to apply for overseas jobs?',
    a: 'You typically need your CNIC, passport (valid for at least 6 months), educational certificates, experience letters, and passport-sized photographs. Additional documents may be required depending on the country and job role.',
  },
  {
    q: 'How long does the recruitment process take?',
    a: 'The process usually takes 4–8 weeks from registration to departure, depending on the destination country, visa processing times, and document attestation requirements. We keep you updated at every stage.',
  },
  {
    q: 'Is Namir Brothers Recruiting Agency government-licensed?',
    a: 'Yes, we are fully licensed by the Government of Pakistan under license number 2256/MLK. Our office is located at Office No. 05, Ground Floor, Bacha Plaza, New Road, Mingora, Swat, KPK.',
  },
  {
    q: 'What countries do you recruit for?',
    a: 'We recruit for Saudi Arabia, UAE, Qatar, Oman (Muscat), Germany, Romania, Greece, Croatia (Dubrovnik), and Malaysia (KL). We are continuously expanding our network of trusted employers across the Gulf and Europe.',
  },
  {
    q: 'What types of jobs do you offer?',
    a: 'We offer both skilled and unskilled positions including construction workers, drivers, nurses, electricians, welders, hotel staff, factory workers, security personnel, and more. Contact us with your profile for a personalized match.',
  },
  {
    q: 'How much does your service cost?',
    a: 'Our fees are transparent and competitive. We provide a complete breakdown of all charges before you begin the process. There are no hidden costs. Contact us for a detailed quotation based on your desired destination and job role.',
  },
  {
    q: 'Do you provide pre-departure training?',
    a: 'Yes, we provide comprehensive pre-departure orientation covering cultural awareness, workplace rights, travel tips, and what to expect in your destination country. This ensures you are well-prepared for your new role.',
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);
  const [ref, inView] = useInView({ threshold: 0.05 });

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="pill-badge bg-primary/10 text-primary border border-primary/20">
            <i className="fas fa-question-circle mr-1.5" />
            FAQS
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-ink text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-ink/60 max-w-2xl mx-auto mb-12">
          Answers to common questions about our recruitment process.
        </p>

        <div
          ref={ref}
          className={`space-y-3 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-secondary/20 rounded-xl overflow-hidden bg-white shadow-sm"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-background/30"
              >
                <span className="font-semibold text-ink text-sm sm:text-base">
                  {faq.q}
                </span>
                <i
                  className={`fas fa-chevron-down text-primary shrink-0 transition-transform duration-300 ${
                    openIdx === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIdx === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-5 pb-4 text-ink/65 text-sm sm:text-base leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}