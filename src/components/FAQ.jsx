import { useState } from 'react';
import useInView from '../hooks/useInView';

const faqs = [
  {
    q: 'What HR services does Blue Real Eye offer?',
    a: 'We provide a full range of HR services including HR consulting, employee and labor relations, recruitment and staffing, payroll and benefits management, HR policy and compliance, training and development, performance management, and outsourced HR (HR-as-a-Service).',
  },
  {
    q: 'How can Blue Real Eye help with employee and labor relations?',
    a: 'We offer expert guidance on employee relations issues, labor law compliance, conflict resolution, workplace mediation, disciplinary procedures, and grievance handling. Our team ensures your workplace remains compliant with Pakistani labor regulations while fostering positive employee relations.',
  },
  {
    q: 'What industries do you serve?',
    a: 'We serve a wide range of industries including IT, manufacturing, retail, healthcare, finance, hospitality, and more. Our HR solutions are tailored to the specific needs and regulations of each industry.',
  },
  {
    q: 'How do HR consulting engagements work?',
    a: 'We start with a free initial consultation to understand your needs, followed by an HR audit and assessment. Based on our findings, we design a customized solution and work with you through implementation. We offer both project-based and ongoing retainer engagements to suit your requirements.',
  },
  {
    q: 'What is the typical timeline for HR projects?',
    a: 'Timelines vary depending on the scope of work. A typical HR policy development project takes 2–4 weeks, while larger organizational development initiatives may take 2–3 months. We provide clear timelines during the initial consultation.',
  },
  {
    q: 'Is there a fee for the initial consultation?',
    a: 'No, the initial consultation is completely free. We use this session to understand your HR needs and discuss how we can help before any engagement begins.',
  },
];

export default function FAQ() {
  const [ref, inView] = useInView();
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (i) => setOpenIdx(openIdx === i ? null : i);

  return (
    <>
      <style>{`
        .faq-section{background:#FFF0F0;padding:96px 24px}
        .faq-inner{max-width:800px;margin:0 auto}
        .faq-item{background:#fff;border-radius:16px;border:1px solid rgba(217,4,41,.06);margin-bottom:12px;overflow:hidden;transition:box-shadow .25s}
        .faq-item:hover{box-shadow:0 4px 20px rgba(217,4,41,.04)}
        .faq-question{width:100%;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:20px 24px;background:none;border:none;cursor:pointer;text-align:left;font-family:"Plus Jakarta Sans",sans-serif;font-weight:700;font-size:15px;color:#2E0507;transition:color .2s}
        .faq-question:hover{color:#D90429}
        .faq-arrow{width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#FFF0F0;flex-shrink:0;transition:transform .3s,background .3s;font-size:11px;color:#D90429}
        .faq-arrow.open{transform:rotate(180deg);background:#D90429;color:#fff}
        .faq-answer{padding:0 24px 20px;font-size:14px;line-height:1.75;color:#6B2025}
      `}</style>

      <section id="faqs" className="faq-section" ref={ref}>
        <div className="faq-inner">
          <div style={{ textAlign: 'center', marginBottom: 48 }} className={`reveal${inView ? ' show' : ''}`}>
            <div className="pill-badge">
              <span className="pill-dot" />
              FAQs
            </div>
            <h2 style={{ fontFamily: '"Plus Jakarta Sans",sans-serif', fontWeight: 900, fontSize: 'clamp(28px,3.5vw,42px)', color: '#2E0507', marginBottom: 14 }}>
              Frequently Asked <span style={{ color: '#D90429' }}>Questions</span>
            </h2>
            <p style={{ color: '#6B2025', fontSize: 15, maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
              Everything you need to know about working with Blue Real Eye.
            </p>
          </div>

          <div>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`faq-item reveal${inView ? ' show' : ''}`}
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <button className="faq-question" onClick={() => toggle(i)}>
                  <span>{faq.q}</span>
                  <span className={`faq-arrow ${openIdx === i ? 'open' : ''}`}>
                    <i className="fa-solid fa-chevron-down" />
                  </span>
                </button>
                <div style={{
                  maxHeight: openIdx === i ? 300 : 0,
                  overflow: 'hidden',
                  transition: 'max-height .35s ease',
                }}>
                  <div className="faq-answer">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}