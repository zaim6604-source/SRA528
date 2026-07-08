import { useState } from 'react';
import FadeUp from './FadeUp';

export default function ContactMap() {
  const [form, setForm] = useState({ name: '', phone: '', country: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi Sareer Recruiting Agency! I'm ${form.name || 'a candidate'}. Phone: ${form.phone || 'N/A'}. Interested in: ${form.country || 'N/A'}. ${form.message ? `Message: ${form.message}` : ''}`;
    window.open(`https://wa.me/923459454665?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="pill-badge bg-primary text-white mb-6 mx-auto" style={{ width: 'fit-content' }}>
            <i className="fas fa-phone" />
            Get in Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink text-center leading-tight">
            Contact Us
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          {/* Form */}
          <FadeUp>
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
              <h3 className="text-lg font-extrabold text-ink mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-ink/60 mb-1.5">Your Name</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="e.g. Muhammad Ali" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-ink/60 mb-1.5">Phone Number</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="e.g. 0345-9454665" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-ink/60 mb-1.5">Country Interested In</label>
                  <select name="country" value={form.country} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
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
                <div>
                  <label className="block text-xs font-bold text-ink/60 mb-1.5">Message (optional)</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={3} placeholder="Any questions or specific requirements..." className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none" />
                </div>
                <button type="submit" className="w-full bg-cta text-white font-extrabold py-3.5 rounded-full text-base hover:brightness-110 transition-all shadow-lg flex items-center justify-center gap-2">
                  <i className="fab fa-whatsapp" />
                  Send via WhatsApp
                </button>
              </form>
            </div>
          </FadeUp>

          {/* Contact info + Map */}
          <FadeUp delay={150}>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
                <h3 className="text-lg font-extrabold text-ink mb-4">Contact Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shrink-0">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-ink">Address</div>
                      <div className="text-sm text-ink/60">Office No. 03, Ground Floor, Bahadur Khan Plaza, Batkhela, Malakand P Area, KPK</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shrink-0">
                      <i className="fas fa-phone" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-ink">Phone</div>
                      <a href="tel:0932410265" className="text-sm text-ink/60 hover:text-primary">0932-410265</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shrink-0">
                      <i className="fab fa-whatsapp" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-ink">WhatsApp</div>
                      <a href="https://wa.me/923459454665" target="_blank" rel="noopener noreferrer" className="text-sm text-cta font-semibold hover:underline">0345-9454665</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shrink-0">
                      <i className="fas fa-envelope" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-ink">Email</div>
                      <a href="mailto:info@sareer.pk" className="text-sm text-ink/60 hover:text-primary">info@sareer.pk</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-64">
                <iframe
                  title="Sareer Recruiting Agency Location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=71.95%2C34.60%2C72.05%2C34.70&amp;layer=mapnik&amp;marker=34.65%2C72.00"
                  width="100%"
                  height="100%"
                  style={{ border: 'none' }}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <a
                href="https://www.openstreetmap.org/search?query=Bahadur+Khan+Plaza+Batkhela+Malakand"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-xs text-ink/40 hover:text-primary"
              >
                <i className="fas fa-external-link-alt" /> Open in OpenStreetMap
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
