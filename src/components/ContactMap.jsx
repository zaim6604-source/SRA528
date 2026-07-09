import { useState } from 'react'
import { COMPANY } from '../data/siteData'
import ScrollReveal from './ScrollReveal'

export default function ContactMap() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [toast, setToast] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = encodeURIComponent(
      `Hello ${COMPANY.name}! I am ${form.name} (${form.phone}). ${form.message}`
    )
    window.open(`${COMPANY.whatsappLink}?text=${text}`, '_blank', 'noopener')
    setToast(true)
    setTimeout(() => setToast(false), 3000)
  }

  return (
    <section id="contact" className="py-16 lg:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold text-xs px-4 py-1.5 rounded-full">
              <i className="fas fa-address-card" />
              Contact Us
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-ink mt-4 mb-3">
              Get In Touch
            </h2>
            <p className="text-ink/60 max-w-2xl mx-auto">
              Visit our office at Royal Arcade Plaza, Mingora or reach out through any channel below.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <ScrollReveal delay={100}>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-primary/5">
              <h3 className="text-xl font-bold text-ink mb-6 flex items-center gap-2">
                <i className="fas fa-paper-plane text-primary" />
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-ink/70 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g., Muhammad Khan"
                    className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-background text-ink placeholder:text-ink/30 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-ink/70 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="e.g., 0345-XXXXXXX"
                    className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-background text-ink placeholder:text-ink/30 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-ink/70 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-background text-ink placeholder:text-ink/30 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-cta text-white py-3.5 rounded-full font-bold text-base hover:brightness-110 transition-all shadow-lg shadow-cta/30 flex items-center justify-center gap-2"
                >
                  <i className="fab fa-whatsapp" />
                  Send via WhatsApp
                </button>
              </form>
              <p className="text-xs text-ink/40 text-center mt-4">
                <i className="fas fa-shield-alt mr-1" />
                Your information is kept confidential. Messages sent via WhatsApp.
              </p>
              <div className="mt-4 pt-4 border-t border-primary/10">
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-xs text-ink/50 hover:text-primary transition-colors flex items-center justify-center gap-1"
                >
                  <i className="fas fa-envelope" />
                  {COMPANY.email}
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Info + Map */}
          <ScrollReveal delay={200}>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-primary/5">
                <h3 className="text-xl font-bold text-ink mb-4">Visit or Call Us</h3>
                <div className="space-y-4">
                  <a
                    href={COMPANY.office.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 p-3 rounded-xl bg-background hover:bg-primary/5 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <i className="fas fa-location-dot" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-ink">Office Address</div>
                      <div className="text-sm text-ink/60">{COMPANY.office.address}</div>
                    </div>
                  </a>

                  <a
                    href={`tel:${COMPANY.office.phone1.replace(/-/g, '')}`}
                    className="flex items-start gap-3 p-3 rounded-xl bg-background hover:bg-primary/5 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                      <i className="fas fa-phone" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-ink">Phone</div>
                      <div className="text-sm text-ink/60">{COMPANY.office.phoneLabel}</div>
                    </div>
                  </a>

                  <a
                    href={COMPANY.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 p-3 rounded-xl bg-background hover:bg-primary/5 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                      <i className="fab fa-whatsapp" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-ink">WhatsApp</div>
                      <div className="text-sm text-ink/60">{COMPANY.whatsapp}</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Google Maps */}
              <div className="rounded-2xl overflow-hidden shadow-lg border border-primary/5">
                <iframe
                  title="Royal Arcade Plaza Mingora Location"
                  src={COMPANY.office.mapEmbed}
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
                <div className="bg-white p-3 text-center">
                  <a
                    href={COMPANY.office.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-primary hover:underline"
                  >
                    <i className="fas fa-map-pin mr-1" />
                    Open in Google Maps
                  </a>
                </div>
              </div>

              <a
                href={COMPANY.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-cta text-white py-4 rounded-full font-bold text-center hover:brightness-110 transition-all shadow-lg shadow-cta/30"
              >
                <i className="fab fa-whatsapp mr-2" />
                Quick Apply &mdash; Start Now
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-24 right-6 z-50 bg-green-600 text-white px-6 py-3 rounded-xl shadow-xl text-sm font-semibold animate-fade-up">
          <i className="fab fa-whatsapp mr-2" />
          Opening WhatsApp...
        </div>
      )}
    </section>
  )
}