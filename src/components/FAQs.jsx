import { useState } from 'react';
import FadeUp from './FadeUp';

const faqs = [
  { q: "What documents do I need to apply?", a: "You'll need your CNIC, passport (valid for at least 2 years), educational certificates, experience letters (if any), and passport-sized photographs. We'll guide you through the complete list." },
  { q: "How long does the visa process take?", a: "Processing times vary by country. Gulf countries typically take 2-6 weeks, while European destinations may take 2-4 months. We keep you updated at every stage." },
  { q: "Do you charge any fees?", a: "Our service charges are transparent and communicated upfront. We do not charge any hidden fees. Payment is made in installments as services are delivered." },
  { q: "Which countries do you recruit for?", a: "We currently recruit for Saudi Arabia, UAE, Qatar, Oman, Germany, Romania, Greece, Croatia, and Malaysia. We're expanding to new destinations regularly." },
  { q: "Can I visit your office?", a: "Absolutely! Our office is at Bahadur Khan Plaza, Batkhela, Malakand. We're open Monday to Saturday, 9 AM to 6 PM." },
  { q: "What if I already have a job offer?", a: "We can help with visa processing, documentation, and travel arrangements even if you already have an employer. Contact us to discuss your situation." },
];

export default function FAQs() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faqs" className="py-16 md:py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="pill-badge bg-primary text-white mb-4 mx-auto" style={{ width: 'fit-content' }}>
            <i className="fas fa-question-circle" />
            FAQs
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink text-center leading-tight mb-8">
            Frequently Asked Questions
          </h2>
        </FadeUp>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FadeUp key={i} delay={i * 50}>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <span className="text-sm font-bold text-ink">{faq.q}</span>
                  <i className={`fas fa-chevron-down text-xs text-ink/30 transition-transform ${open === i ? 'rotate-180' : ''}`} />
                </button>
                <div className={`accordion-content ${open === i ? 'open' : ''}`}>
                  <div>
                    <div className="px-5 pb-4 text-sm text-ink/60 leading-relaxed">{faq.a}</div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
