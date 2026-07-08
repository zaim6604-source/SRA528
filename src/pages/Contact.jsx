import { useState } from 'react';
import { faqs } from '../data/jobs';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Contact Form - Warda International%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0AEmail: ${encodeURIComponent(form.email)}%0AMessage: ${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/923038799996?text=${text}`, '_blank');
  };

  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  return (
    <div className="animate-fade-in">
      {/* HEADER */}
      <section className="bg-gradient-to-br from-ink to-ink/95 px-6 py-14 md:py-18 text-white">
        <div className="max-w-4xl mx-auto">
          <span className="text-primary font-bold text-sm tracking-widest uppercase">Contact Us</span>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-2 mb-3">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-white/60 max-w-2xl">
            Have a question or ready to apply? Reach out to us — we&apos;re here to help.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT: Contact Info + Form */}
        <div>
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <a
              href="https://wa.me/923038799996"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-all group"
            >
              <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-3 group-hover:scale-110 transition-transform">
                <i className="fab fa-whatsapp text-xl" />
              </div>
              <h3 className="font-bold text-ink text-sm">WhatsApp</h3>
              <p className="text-ink/50 text-sm">0303-8799996</p>
            </a>
            <a
              href="tel:0945822507"
              className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-all group"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
                <i className="fas fa-phone text-xl" />
              </div>
              <h3 className="font-bold text-ink text-sm">Phone</h3>
              <p className="text-ink/50 text-sm">0945-822507</p>
            </a>
            <a
              href="mailto:info@wardaintl.pk"
              className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-all group"
            >
              <div className="w-11 h-11 rounded-lg bg-secondary/20 flex items-center justify-center text-ink mb-3 group-hover:scale-110 transition-transform">
                <i className="fas fa-envelope text-xl" />
              </div>
              <h3 className="font-bold text-ink text-sm">Email</h3>
              <p className="text-ink/50 text-sm">info@wardaintl.pk</p>
            </a>
            <div className="bg-white rounded-xl shadow-md p-5">
              <div className="w-11 h-11 rounded-lg bg-ink/5 flex items-center justify-center text-ink mb-3">
                <i className="fas fa-location-dot text-xl" />
              </div>
              <h3 className="font-bold text-ink text-sm">Office</h3>
              <p className="text-ink/50 text-sm">Birmingham Plaza</p>
              <p className="text-ink/50 text-sm">Timergara, Lower Dir</p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="font-bold text-ink text-lg mb-4">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-ink/10 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none text-sm"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-ink/10 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none text-sm"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email (optional)"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-ink/10 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none text-sm"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-ink/10 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none text-sm resize-none"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-cta text-ink font-bold py-3.5 rounded-xl hover:brightness-110 transition-all shadow-lg"
              >
                <i className="fab fa-whatsapp" /> Send via WhatsApp
              </button>
            </form>
          </div>
        </div>

        {/* RIGHT: Map + FAQ */}
        <div className="space-y-8">
          {/* Map */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-5 pb-3">
              <h3 className="font-bold text-ink text-lg flex items-center gap-2">
                <i className="fas fa-map-location-dot text-primary" /> Our Location
              </h3>
              <p className="text-ink/50 text-sm">Birmingham Plaza, Rest House Road, Timergara</p>
            </div>
            <iframe
              title="Office Location"
              src="https://www.google.com/maps?q=Birmingham+Plaza+Rest+House+Road+Timergara+Lower+Dir&output=embed"
              width="100%"
              height="260"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block"
            />
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="font-bold text-ink text-lg mb-4 flex items-center gap-2">
              <i className="fas fa-circle-question text-primary" /> Frequently Asked Questions
            </h3>
            <div className="space-y-2">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-ink/5 rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full flex items-center justify-between px-4 py-3 text-left text-sm font-semibold text-ink hover:bg-ink/5 transition-all"
                  >
                    <span>{faq.q}</span>
                    <i className={`fas fa-chevron-down text-xs text-ink/30 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-4 pb-3 text-ink/60 text-sm leading-relaxed animate-fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}