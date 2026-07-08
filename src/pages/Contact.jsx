import { useState } from 'react';
import FadeIn from '../components/FadeIn';

const faqs = [
  {
    q: 'What is OEP License 2229/PWR?',
    a: 'This is the official Government of Pakistan Overseas Employment Promoter license held by Al-Imran Brothers. It authorizes us to legally recruit and place Pakistani workers for overseas employment. You can verify our license with the Bureau of Immigration (OEP wing).',
  },
  {
    q: 'Which countries do you recruit for?',
    a: 'We currently recruit for Saudi Arabia, UAE, Qatar, Oman, Kuwait, Germany, Poland, Romania, and Greece. Our network continues to expand as we identify new, verified opportunities for our workers.',
  },
  {
    q: 'Where is your office located?',
    a: 'Our office is at Qasmi Market No. 2, Thall City, District Hangu, Khyber Pakhtunkhwa. We serve workers from Hangu, Kohat, and surrounding areas. You can visit us in person during business hours.',
  },
  {
    q: 'What documents do I need to apply?',
    a: 'You typically need a valid passport (minimum 6 months validity), educational certificates, professional experience letters, and a CV. Requirements vary by country and position — contact us for a personalized checklist.',
  },
  {
    q: 'How long does the process take?',
    a: 'Processing times vary by destination. Gulf countries typically take 2–6 weeks, while European countries may take 1–3 months. Our team keeps you updated throughout and works to expedite every step.',
  },
  {
    q: 'What are your fees?',
    a: 'Our fees are transparent and communicated upfront. There are no hidden charges. Contact us for a detailed fee breakdown based on your desired destination and position. We believe in honest, ethical pricing.',
  },
];

const jobCategories = [
  'Construction Worker',
  'Driver',
  'Hospitality Staff',
  'Nurse / Medical',
  'Skilled Trade',
  'Factory Worker',
  'Security Staff',
  'IT Professional',
  'General Labour',
  'Other',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', category: '', message: '' });
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Contact Form - Al-Imran Brothers%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email || 'N/A'}%0AJob Category: ${form.category || 'Not specified'}%0AMessage: ${form.message || 'N/A'}`
    );
    window.open(`https://wa.me/923005967332?text=${text}`, '_blank');
  };

  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="contact-hero">
        <div className="container">
          <FadeIn>
            <span className="tag" style={{ background: 'rgba(255,255,255,0.15)', color: 'var(--color-accent)' }}>
              <i className="fas fa-phone" style={{ marginRight: 8 }} />
              Get in Touch
            </span>
            <h1>Contact Us</h1>
            <p>
              Have questions? Ready to apply? Reach out to our team and we&rsquo;ll respond
              promptly.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Layout */}
      <section className="section">
        <div className="container contact-layout">
          {/* Form */}
          <FadeIn>
            <div className="contact-form">
              <h3>Send Us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Your Name *</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Full name" required />
                </div>
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="03XX-XXXXXXX" required />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="email@example.com" />
                </div>
                <div className="form-group">
                  <label>Job Category</label>
                  <select name="category" value={form.category} onChange={handleChange}>
                    <option value="">Select category</option>
                    {jobCategories.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label>Your Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your background and preferred destination..." />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  <i className="fab fa-whatsapp" /> Send via WhatsApp
                </button>
              </form>
              <p style={{ textAlign: 'center', marginTop: 16, fontSize: '0.85rem', color: 'var(--color-text-light)' }}>
                Or email: <a href="mailto:info@alimranbrothers.pk">info@alimranbrothers.pk</a>
              </p>
            </div>
          </FadeIn>

          {/* Info */}
          <div className="contact-info">
            <FadeIn delay={1}>
              <div className="contact-info-card">
                <h4><i className="fas fa-phone" /> Phone</h4>
                <p><a href="tel:0925535832">0925-535832</a></p>
              </div>
            </FadeIn>

            <FadeIn delay={2}>
              <div className="contact-info-card">
                <h4><i className="fab fa-whatsapp" /> WhatsApp</h4>
                <p>
                  <a href="https://wa.me/923005967332" target="_blank" rel="noopener noreferrer">0300-5967332</a><br />
                  <a href="https://wa.me/923394913429" target="_blank" rel="noopener noreferrer">0339-4913429</a>
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={3}>
              <div className="contact-info-card">
                <h4><i className="fas fa-location-dot" /> Address</h4>
                <p>Qasmi Market No. 2, Thall City, District Hangu, Khyber Pakhtunkhwa</p>
              </div>
            </FadeIn>

            {/* Map */}
            <FadeIn delay={4}>
              <div className="map-container">
                <iframe
                  title="Al-Imran Brothers Location"
                  src="https://www.google.com/maps?q=Qasmi+Market+Thall+City+Hangu&hl=en&z=15&output=embed"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="faq-section">
        <FadeIn>
          <h2>Frequently Asked Questions</h2>
        </FadeIn>
        <div>
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={Math.min(i + 1, 4)}>
              <div className="faq-item">
                <button
                  className={`faq-question ${openFaq === i ? 'open' : ''}`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {faq.q}
                  <i className={`fas fa-chevron-down ${openFaq === i ? 'open' : ''}`} />
                </button>
                <div className={`faq-answer ${openFaq === i ? 'open' : ''}`}>
                  <p>{faq.a}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}