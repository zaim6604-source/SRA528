import { useState } from 'react';
import { faqs } from '../data/countries';

const jobCategories = [
  'Construction & Labor',
  'Hospitality & Catering',
  'Healthcare & Caregiving',
  'Manufacturing & Factory',
  'Logistics & Transport',
  'IT & Engineering',
  'Agriculture & Farming',
  'Security & Facilities',
  'Other',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', category: '', message: '' });
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hello Mahail Overseas Employment Promoters! I am interested in overseas employment.%0A%0A--- Application Details ---%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0AEmail: ${encodeURIComponent(form.email)}%0AJob Category: ${encodeURIComponent(form.category)}%0AMessage: ${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/923005866833?text=${text}`, '_blank');
  };

  return (
    <div className="animate-fade-in">
      {/* HEADER */}
      <section className="px-6 py-16 md:py-20 bg-ink text-white">
        <div className="max-w-4xl mx-auto">
          <span className="text-primary font-bold text-sm tracking-widest uppercase">Get in Touch</span>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-2 mb-4">
            Let's Start Your <span className="text-primary">Journey</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            Drop us a message, visit our office in Peshawar, or reach out on WhatsApp. We're here to help.
          </p>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="px-6 py-16 md:py-20 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* LEFT: Contact form */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-ink mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl border border-ink/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-ink mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="03XX-XXXXXXX"
                    className="w-full px-4 py-3 rounded-xl border border-ink/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-ink mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-ink/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-ink mb-1">Job Category</label>
                <select
                  name="category"
                  required
                  value={form.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-ink/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                >
                  <option value="">Select a category</option>
                  {jobCategories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-ink mb-1">Message</label>
                <textarea
                  name="message"
                  rows="3"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your background and goals..."
                  className="w-full px-4 py-3 rounded-xl border border-ink/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3.5 rounded-xl font-bold text-lg hover:brightness-110 transition-all shadow-lg shadow-primary/30"
              >
                <i className="fab fa-whatsapp mr-2" />Submit via WhatsApp
              </button>
            </form>

            <p className="text-center text-xs text-ink/40 mt-4">
              By submitting, you agree to be contacted regarding your inquiry. Email us at{' '}
              <a href="mailto:info@mahailoverseas.pk" className="text-primary hover:underline">info@mahailoverseas.pk</a>
            </p>

            {/* Contact info */}
            <div className="mt-8 space-y-3 pt-6 border-t border-ink/10">
              <a
                href="https://wa.me/923005866833"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-ink/70 hover:text-primary transition-colors"
              >
                <span className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <i className="fab fa-whatsapp" />
                </span>
                <span className="font-medium">0300-5866833</span>
              </a>
              <div className="flex items-start gap-3 text-ink/70">
                <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                  <i className="fas fa-map-marker-alt" />
                </span>
                <span className="font-medium text-sm">
                  Office #08, 2nd Floor, Shan Plaza, Sikanderpura Chowk,<br />
                  near Shawal Hotel, Hashtnagri, Peshawar, 25000, KPK
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Map */}
          <div className="rounded-2xl overflow-hidden shadow-xl h-[400px] md:h-auto">
            <iframe
              title="Mahail Overseas location"
              src="https://www.google.com/maps?q=Shan+Plaza+Sikanderpura+Chowk+Hashtnagri+Peshawar&hl=en&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-primary font-bold text-sm tracking-widest uppercase">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink mt-2">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-background rounded-xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-ink hover:text-primary transition-colors"
                >
                  <span className="text-sm md:text-base pr-4">{faq.q}</span>
                  <i className={`fas fa-chevron-down text-xs text-primary transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-sm text-ink/60 animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-14 text-center bg-ink text-white">
        <h2 className="text-2xl font-bold mb-3">Still Have Questions?</h2>
        <p className="text-white/60 mb-6">We're just a WhatsApp message away.</p>
        <a
          href="https://wa.me/923005866833"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-cta text-ink font-bold px-6 py-3 rounded-xl hover:brightness-110 transition-all"
        >
          <i className="fab fa-whatsapp" /> Chat Now
        </a>
      </section>

      <footer className="bg-ink/80 text-white/50 px-6 py-6 text-center text-xs border-t border-white/10">
        &copy; {new Date().getFullYear()} Mahail Overseas Employment Promoters — Office #08, 2nd Floor, Shan Plaza, Hashtnagri, Peshawar
      </footer>
    </div>
  );
}