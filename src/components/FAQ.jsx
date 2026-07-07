import { useState } from 'react';
import useInView from '../hooks/useInView';

const faqs = [
  { q: 'What services does Bridge Global Resource offer?', a: 'We offer overseas manpower recruitment, international labor supply, foreign recruiter support, visa processing, document attestation, medical & trade test coordination, pre-departure orientation, and air ticketing & travel support.' },
  { q: 'How does the foreign recruiter demand process work?', a: 'Foreign recruiters submit their manpower requirements to us. We source, screen, and process candidates — handling documentation, visas, medical tests, and deployment. Simply contact us via WhatsApp or the form on our website.' },
  { q: 'Which countries do you deploy workers to?', a: 'We deploy to Saudi Arabia, UAE, Qatar, Kuwait, Oman, Germany, Poland, Romania, Malaysia, and other countries based on demand.' },
  { q: 'What documents are required for overseas employment?', a: 'Typically: valid passport, educational certificates, professional experience letters, CNIC, passport-sized photographs, and any relevant trade test or medical certificates. We guide you through the complete list.' },
  { q: 'What is the typical timeline from application to deployment?', a: 'Timelines vary by country and role. On average, the process takes 4-8 weeks from initial screening to departure, depending on visa processing and document attestation requirements.' },
  { q: 'Is there a consultation fee?', a: 'Your initial consultation is completely free. We believe in transparent communication and will provide a clear breakdown of any applicable fees before proceeding.' },
];

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <div className={`border rounded-2xl mb-3 overflow-hidden transition-all duration-300 ${isOpen ? 'border-[#E0115F]/30 bg-[#E0115F]/[0.02]' : 'border-gray-200 hover:border-[#E0115F]/20 bg-white'}`}>
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center px-6 py-5 text-base font-semibold text-left cursor-pointer transition-colors hover:text-[#E0115F]"
        aria-expanded={isOpen}
      >
        <span className="pr-4">{faq.q}</span>
        <i className={`fas fa-chevron-down text-sm text-gray-400 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-[#E0115F]' : ''}`} />
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? '300px' : '0', padding: isOpen ? '0 24px 20px' : '0 24px' }}
      >
        <p className="text-[#2E0A1C]/60 text-sm leading-relaxed">{faq.a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [ref, inView] = useInView();

  return (
    <section id="faqs" className="section-pad" style={{ background: '#FFF0F4' }}>
      <div className="container-pad">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-[#E0115F]/10 text-[#E0115F] mb-4">
            <i className="fas fa-question-circle text-xs"></i>
            FAQS
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-[#2E0A1C]">
            Frequently Asked{' '}
            <span className="text-[#E0115F]">Questions</span>
          </h2>
          <p className="text-[#2E0A1C]/60 text-lg mt-3 max-w-2xl mx-auto">
            Everything you need to know about working with us.
          </p>
        </div>
        <div ref={ref} className={`max-w-2xl mx-auto transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} isOpen={openIndex === i} onClick={() => setOpenIndex(openIndex === i ? null : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}