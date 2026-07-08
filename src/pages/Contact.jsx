import { useState } from 'react';
import FadeIn from '../components/FadeIn';

const faqs = [
  {
    q: 'Is Sufyan Recruiting Agency government licensed?',
    a: 'Yes, absolutely. Sufyan Recruiting Agency is a fully government-licensed Overseas Employment Promoter (OEP) under License No. 2237/RWP. We operate in full compliance with Pakistani overseas employment regulations.',
  },
  {
    q: 'Which Gulf countries do you recruit for?',
    a: 'We currently recruit for Saudi Arabia, UAE, Qatar, Oman, Kuwait, and Bahrain. Our network of trusted employers across the Gulf continues to grow as we identify new, verified opportunities.',
  },
  {
    q: 'Where is your office located?',
    a: 'Our office is located at Office 20, 2nd Floor, Zaki Centre, I-8 Markaz, Islamabad, ICT. We warmly welcome walk-in inquiries during business hours.',
  },
  {
    q: 'What documents do I need to apply?',
    a: 'You typically need a valid passport (minimum 6 months validity), educational certificates, professional experience letters, CNIC, and passport-sized photographs. Requirements vary by country and position — contact us for a personalized checklist.',
  },
  {
    q: 'How long does the Gulf visa process take?',
    a: 'Processing times vary by country and job category, but Gulf countries typically take 2 to 6 weeks. We keep you updated throughout and work to expedite every step.',
  },
  {
    q: 'What are your fees?',
    a: 'Our fees are transparent and communicated upfront. There are no hidden charges. Visit our office in I-8 Markaz, Islamabad for a detailed fee breakdown based on your desired destination and position.',
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
      `Contact Form - Sufyan Recruiting Agency%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email || 'N/A'}%0AJob Category: ${form.category || 'Not specified'}%0AMessage: ${form.message || 'N/A'}`
    );
    window.open(`https://wa.me/923458649342?text=${text}`, '_blank');
  };

  return (
    <div>
      {/* Hero */}
      <section className="pt-24 pb-16 md:pb-20" style={{ backgroundColor: '#FF206E' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#FBFF12' }}>
              <i className="fa-solid fa-phone" />
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">Contact Us</h1>
            <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Have questions? Ready to apply? Reach out to our team and we&rsquo;ll respond promptly.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
          {/* Form */}
          <FadeIn>
            <div>
              <h3 className="text-xl font-bold mb-6" style={{ color: '#1A1423' }}>Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold mb-1.5" style={{ color: '#1A1423' }}>
                      Your Name <span style={{ color: '#FF206E' }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Full name"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all duration-200"
                      style={{ borderColor: '#FF206E20', color: '#1A1423' }}
                      onFocus={(e) => e.target.style.borderColor = '#FF206E'}
                      onBlur={(e) => e.target.style.borderColor = '#FF206E20'}
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold mb-1.5" style={{ color: '#1A1423' }}>
                      Phone Number <span style={{ color: '#FF206E' }}>*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="03XX-XXXXXXX"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all duration-200"
                      style={{ borderColor: '#FF206E20', color: '#1A1423' }}
                      onFocus={(e) => e.target.style.borderColor = '#FF206E'}
                      onBlur={(e) => e.target.style.borderColor = '#FF206E20'}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold mb-1.5" style={{ color: '#1A1423' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all duration-200"
                    style={{ borderColor: '#FF206E20', color: '#1A1423' }}
                    onFocus={(e) => e.target.style.borderColor = '#FF206E'}
                    onBlur={(e) => e.target.style.borderColor = '#FF206E20'}
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold mb-1.5" style={{ color: '#1A1423' }}>
                    Job Category
                  </label>
                  <select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all duration-200"
                    style={{ borderColor: '#FF206E20', color: '#1A1423' }}
                    onFocus={(e) => e.target.style.borderColor = '#FF206E'}
                    onBlur={(e) => e.target.style.borderColor = '#FF206E20'}
                  >
                    <option value="">Select category</option>
                    {jobCategories.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold mb-1.5" style={{ color: '#1A1423' }}>
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your background and preferred destination..."
                    className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all duration-200 resize-none"
                    style={{ borderColor: '#FF206E20', color: '#1A1423' }}
                    onFocus={(e) => e.target.style.borderColor = '#FF206E'}
                    onBlur={(e) => e.target.style.borderColor = '#FF206E20'}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full text-base font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                  style={{ backgroundColor: '#41EAD4', color: '#1A1423', border: 'none' }}
                >
                  <i className="fab fa-whatsapp" />
                  Send via WhatsApp
                </button>
              </form>
              <p className="text-center sm:text-left mt-4 text-sm" style={{ color: '#4A3F55' }}>
                Or email: <a href="mailto:info.sufyanagency@gmail.com" style={{ color: '#FF206E' }}>info.sufyanagency@gmail.com</a>
              </p>
            </div>
          </FadeIn>

          {/* Info */}
          <div className="space-y-4">
            <FadeIn delay={1}>
              <div className="bg-white rounded-2xl p-5 shadow-sm border" style={{ borderColor: '#FF206E10' }}>
                <h4 className="font-bold text-sm mb-2 flex items-center gap-2" style={{ color: '#1A1423' }}>
                  <i className="fa-solid fa-phone" style={{ color: '#FF206E' }} /> Phone
                </h4>
                <p className="text-sm">
                  <a href="tel:0514861137" style={{ color: '#4A3F55' }}>051-4861137</a>
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={2}>
              <div className="bg-white rounded-2xl p-5 shadow-sm border" style={{ borderColor: '#FF206E10' }}>
                <h4 className="font-bold text-sm mb-2 flex items-center gap-2" style={{ color: '#1A1423' }}>
                  <i className="fab fa-whatsapp" style={{ color: '#41EAD4' }} /> WhatsApp
                </h4>
                <p>
                  <a href="https://wa.me/923458649342" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold" style={{ color: '#41EAD4' }}>0345-8649342 (Primary)</a>
                </p>
                <p className="mt-1">
                  <a href="https://wa.me/923135340453" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold" style={{ color: '#41EAD4' }}>0313-5340453</a>
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={3}>
              <div className="bg-white rounded-2xl p-5 shadow-sm border" style={{ borderColor: '#FF206E10' }}>
                <h4 className="font-bold text-sm mb-2 flex items-center gap-2" style={{ color: '#1A1423' }}>
                  <i className="fab fa-facebook" style={{ color: '#FF206E' }} /> Facebook
                </h4>
                <a
                  href="https://www.facebook.com/waqarriaz132/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm"
                  style={{ color: '#4A3F55' }}
                >
                  Sufyan Recruiting Agency on Facebook
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={4}>
              <div className="bg-white rounded-2xl p-5 shadow-sm border" style={{ borderColor: '#FF206E10' }}>
                <h4 className="font-bold text-sm mb-2 flex items-center gap-2" style={{ color: '#1A1423' }}>
                  <i className="fa-solid fa-envelope" style={{ color: '#FF206E' }} /> Email
                </h4>
                <p className="text-sm">
                  <a href="mailto:info.sufyanagency@gmail.com" style={{ color: '#4A3F55' }}>info.sufyanagency@gmail.com</a>
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={5}>
              <div className="bg-white rounded-2xl p-5 shadow-sm border" style={{ borderColor: '#FF206E10' }}>
                <h4 className="font-bold text-sm mb-2 flex items-center gap-2" style={{ color: '#1A1423' }}>
                  <i className="fa-solid fa-location-dot" style={{ color: '#FF206E' }} /> Address
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: '#4A3F55' }}>
                  Office 20, 2nd Floor, Zaki Centre, I-8 Markaz, Islamabad, ICT
                </p>
              </div>
            </FadeIn>

            {/* Map */}
            <FadeIn delay={6}>
              <div className="rounded-2xl overflow-hidden shadow-sm border" style={{ borderColor: '#FF206E10' }}>
                <iframe
                  title="Sufyan Recruiting Agency Location"
                  src="https://www.google.com/maps?q=33.66778308637911,73.0751330558214&hl=en&z=15&output=embed"
                  width="100%"
                  height="280"
                  style={{ border: 0, display: 'block' }}
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
      <section className="py-16 md:py-20" style={{ backgroundColor: '#FFF8E0' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide mb-4" style={{ backgroundColor: '#FF206E10', color: '#FF206E' }}>
              <i className="fa-solid fa-circle-question" />
              FAQs
            </span>
            <h2 className="text-3xl font-bold mb-2" style={{ color: '#1A1423' }}>Frequently Asked Questions</h2>
            <p className="text-base mb-10" style={{ color: '#4A3F55' }}>Quick answers to common questions.</p>
          </FadeIn>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={Math.min(i + 1, 4)}>
                <div className="bg-white rounded-xl overflow-hidden shadow-sm transition-all duration-300" style={{ borderLeft: '4px solid #FF206E' }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left cursor-pointer"
                    style={{ backgroundColor: 'transparent', border: 'none' }}
                  >
                    <span className="text-sm sm:text-base font-semibold pr-4" style={{ color: '#1A1423' }}>
                      {faq.q}
                    </span>
                    <i
                      className={`fa-solid fa-chevron-down text-sm transition-transform duration-300 shrink-0 ${openFaq === i ? 'rotate-180' : ''}`}
                      style={{ color: '#FF206E' }}
                    />
                  </button>
                  <div className={`accordion-content ${openFaq === i ? 'open' : ''}`}>
                    <div>
                      <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0">
                        <p className="text-sm leading-relaxed m-0" style={{ color: '#4A3F55' }}>
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}