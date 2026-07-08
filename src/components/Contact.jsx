import { useState } from 'react';
import useInView from '../hooks/useInView';

const initialForm = { name: '', phone: '', email: '', destination: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [ref, inView] = useInView({ threshold: 0.1 });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `*Namir Brothers Recruitment Inquiry*%0A%0A` +
      `Name: ${form.name}%0A` +
      `Phone: ${form.phone}%0A` +
      `Email: ${form.email}%0A` +
      `Destination: ${form.destination}%0A` +
      `Message: ${form.message}`
    );
    window.open(`https://wa.me/923435644441?text=${text}`, '_blank');
    setForm(initialForm);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-background/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="pill-badge bg-primary/10 text-primary border border-primary/20">
            <i className="fas fa-envelope mr-1.5" />
            CONTACT US
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-ink text-center mb-12">
          Get In Touch
        </h2>

        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-10 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Contact Form */}
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-secondary/10">
            <h3 className="text-xl font-bold text-ink mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-ink/70 mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-secondary/20 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink/70 mb-1.5">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-secondary/20 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="03XX-XXXXXXX"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-ink/70 mb-1.5">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-secondary/20 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink/70 mb-1.5">Destination</label>
                  <select
                    name="destination"
                    value={form.destination}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-secondary/20 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  >
                    <option value="">Select a country</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="UAE">UAE</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Oman">Oman</option>
                    <option value="Germany">Germany</option>
                    <option value="Romania">Romania</option>
                    <option value="Greece">Greece</option>
                    <option value="Croatia">Croatia</option>
                    <option value="Malaysia">Malaysia</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-ink/70 mb-1.5">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-secondary/20 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  placeholder="Tell us about your skills and preferred job..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-base font-bold bg-cta text-white hover:bg-cta/90 transition-all shadow-lg hover:shadow-xl"
              >
                <i className="fab fa-whatsapp" />
                Send via WhatsApp
              </button>
              <p className="text-xs text-ink/40 text-center">
                By submitting, you agree to share your details via WhatsApp.
              </p>
            </form>
          </div>

          {/* Contact Info + Map */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-secondary/10">
              <h3 className="text-xl font-bold text-ink mb-5">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <i className="fas fa-map-marker-alt text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-ink text-sm">Head Office</p>
                    <p className="text-ink/60 text-sm">
                      Office No. 05, Ground Floor, Bacha Plaza,<br />
                      New Road, Mingora, Swat, KPK
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <i className="fas fa-phone text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-ink text-sm">Phone</p>
                    <a href="tel:0946-711291" className="text-ink/60 text-sm hover:text-primary transition-colors">
                      0946-711291
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <i className="fab fa-whatsapp text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-ink text-sm">WhatsApp</p>
                    <a
                      href="https://wa.me/923435644441"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink/60 text-sm hover:text-primary transition-colors"
                    >
                      0343-5644441
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <i className="fas fa-envelope text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-ink text-sm">Email</p>
                    <a
                      href="mailto:namiroep@yahoo.com"
                      className="text-ink/60 text-sm hover:text-primary transition-colors"
                    >
                      namiroep@yahoo.com
                    </a>
                    <br />
                    <a
                      href="mailto:info@namirbrothers.pk"
                      className="text-ink/40 text-xs hover:text-primary transition-colors"
                    >
                      info@namirbrothers.pk
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <i className="fab fa-facebook-f text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-ink text-sm">Facebook</p>
                    <a
                      href="https://www.facebook.com/namir4805/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink/60 text-sm hover:text-primary transition-colors"
                    >
                      facebook.com/namir4805
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map with exact coords */}
            <div className="rounded-xl overflow-hidden shadow-lg border border-secondary/10 h-64">
              <iframe
                title="Namir Brothers Location"
                src="https://maps.google.com/maps?q=34.77396100004711,72.35717266746418&output=embed"
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
  );
}