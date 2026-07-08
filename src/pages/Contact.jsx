import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const faqs = [
  {
    q: 'What documents do I need to apply for a Gulf job?',
    a: 'You typically need your CNIC, passport-sized photographs, educational certificates, and a valid passport. Our team will guide you through the complete list based on your destination country and job type.',
  },
  {
    q: 'How long does the recruitment process take?',
    a: 'Processing times vary by country and job type, but typically range from 2 to 8 weeks. We keep you updated at every stage and work to expedite your application.',
  },
  {
    q: 'Are there any hidden fees?',
    a: 'No. We believe in complete transparency. All fees are communicated upfront, and you will receive a detailed breakdown before any payment. No hidden charges, ever.',
  },
  {
    q: 'Which Gulf countries do you recruit for?',
    a: 'We currently recruit for Saudi Arabia, UAE, Qatar, Oman, and Kuwait, covering industries like agriculture, construction, logistics, and hospitality.',
  },
  {
    q: 'How do I know the job is genuine?',
    a: 'We personally verify every employer and job offer. We are a government-licensed agency (License OP&HRD/4951/PWR/2023) and maintain direct relationships with reputable overseas employers.',
  },
  {
    q: 'Can I visit your office?',
    a: 'Absolutely! Visit us at Adda Bazar, Sherpao, Charsadda, 24530, KPK. Our team is available Sunday to Thursday, 9 AM to 5 PM.',
  },
];

export default function Contact() {
  const revealRef = useScrollReveal();
  const faqRef = useScrollReveal();
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [openIdx, setOpenIdx] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hello Visa Master Overseas! I'm ${form.name || 'a candidate'}. ${form.message || 'I would like to know about overseas job opportunities.'}`;
    window.open(`https://wa.me/923459090790?text=${encodeURIComponent(text)}`, '_blank');
  };

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="page-fade">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#FF1654] to-[#D60046] pt-12 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 text-white rounded-full text-xs font-semibold mb-4 backdrop-blur-sm">
            <i className="fas fa-address-card" />
            Contact Us
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
            Get In Touch With Us
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto">
            Visit our office, give us a call, or send a message. We&apos;re here to help.
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="py-8 sm:py-12 bg-[#FFF3E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={revealRef} className="reveal grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-orange-100">
              <h3 className="text-lg sm:text-xl font-bold font-[Poppins] text-[#152935] mb-5">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#152935]/70 mb-1.5">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. Muhammad Ali"
                    className="w-full px-4 py-3 rounded-xl border border-orange-200 focus:border-[#FF1654] focus:ring-2 focus:ring-[#FF1654]/20 outline-none transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#152935]/70 mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="e.g. 03XX-XXXXXXX"
                    className="w-full px-4 py-3 rounded-xl border border-orange-200 focus:border-[#FF1654] focus:ring-2 focus:ring-[#FF1654]/20 outline-none transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#152935]/70 mb-1.5">Your Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your interest..."
                    className="w-full px-4 py-3 rounded-xl border border-orange-200 focus:border-[#FF1654] focus:ring-2 focus:ring-[#FF1654]/20 outline-none transition-all text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#70C1B3] rounded-full hover:bg-[#5db8a8] hover:shadow-lg transition-all"
                >
                  <i className="fab fa-whatsapp" />
                  Send via WhatsApp
                </button>
              </form>
              <p className="text-xs text-[#152935]/40 text-center mt-3">
                Or email us at{' '}
                <a href="mailto:sawerapvt@gmail.com" className="text-[#247BA0] hover:underline">
                  sawerapvt@gmail.com
                </a>
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-5">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-orange-100">
                <h3 className="text-lg sm:text-xl font-bold font-[Poppins] text-[#152935] mb-5">
                  Visit Us
                </h3>
                <div className="space-y-4">
                  <a
                    href="https://www.google.com/maps?q=34.27061066250478,71.70204654417859"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 no-underline group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#FFF3E0] flex items-center justify-center text-[#FF1654] flex-shrink-0">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#152935] group-hover:text-[#FF1654] transition-colors">
                        Adda Bazar, Sherpao
                      </div>
                      <div className="text-xs text-[#152935]/50">
                        24530, Charsadda,<br />KPK, Pakistan
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/923459090790"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 no-underline group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-600 flex-shrink-0">
                      <i className="fab fa-whatsapp" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#152935] group-hover:text-green-600 transition-colors">
                        0345-9090790
                      </div>
                      <div className="text-xs text-[#152935]/50">WhatsApp</div>
                    </div>
                  </a>

                  <a
                    href="https://www.facebook.com/saweratravel/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 no-underline group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#247BA0] flex-shrink-0">
                      <i className="fab fa-facebook-f" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#152935] group-hover:text-[#247BA0] transition-colors">
                        Facebook Page
                      </div>
                      <div className="text-xs text-[#152935]/50">@saweratravel</div>
                    </div>
                  </a>

                  <a
                    href="mailto:sawerapvt@gmail.com"
                    className="flex items-center gap-3 no-underline group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#FFF3E0] flex items-center justify-center text-[#FF1654] flex-shrink-0">
                      <i className="fas fa-envelope" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#152935] group-hover:text-[#FF1654] transition-colors">
                        sawerapvt@gmail.com
                      </div>
                      <div className="text-xs text-[#152935]/50">Email</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-md border border-orange-100 h-56 sm:h-64">
                <iframe
                  title="Visa Master Overseas Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5000!2d71.70204654417859!3d34.27061066250478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDE2JzE0LjIiTiA3McKwNDInMDcuNCJF!5e1!3m2!1sen!2s!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF1654]/10 text-[#FF1654] rounded-full text-xs font-semibold mb-4">
              <i className="fas fa-question-circle" />
              FAQs
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#152935] mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-[#152935]/60 max-w-xl mx-auto">
              Everything you need to know before applying.
            </p>
          </div>

          <div ref={faqRef} className="reveal space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl border border-orange-100 bg-white overflow-hidden hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex items-center justify-between px-5 sm:px-6 py-4 text-left no-underline text-[#152935] hover:bg-[#FFF3E0]/50 transition-colors"
                >
                  <span className="text-sm sm:text-base font-semibold pr-4">{faq.q}</span>
                  <i
                    className={`fas fa-chevron-down text-sm text-[#FF1654] transition-transform duration-300 flex-shrink-0 ${
                      openIdx === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div className={`faq-answer ${openIdx === i ? 'open' : ''}`}>
                  <div>
                    <div className="px-5 sm:px-6 pb-4 text-sm text-[#152935]/60 leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}