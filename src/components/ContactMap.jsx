import { useState } from 'react';
import useReveal from '../hooks/useReveal';
import { FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const WA = '923455487713';
const WA_TEXT = encodeURIComponent('Hi Rimsha Travels! I am interested in your services. Please provide details.');

export default function ContactMap() {
  useReveal('.cn-reveal');
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(`Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nMessage: ${form.message}`);
    window.open(`https://wa.me/${WA}?text=${text}`, '_blank');
  };

  const handleChange = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  return (
    <section id="contact" className="py-[clamp(60px,10vw,100px)] px-5 relative overflow-hidden" style={{ background: '#FFF6E0' }}>
      <div className="max-w-6xl mx-auto">
        <div className="cn-reveal reveal text-center mb-12">
          <span className="section-pill">GET IN TOUCH</span>
          <h2 className="font-display font-extrabold mt-4 mb-3" style={{ fontSize: 'clamp(28px,5vw,42px)', color: '#2A1A00' }}>
            Contact <span style={{ color: '#F4A100' }}>Rimsha Travels</span>
          </h2>
          <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed" style={{ color: '#6B5B3E' }}>
            Visit our Rawalpindi office or reach out via WhatsApp, phone, or the form below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {/* Form */}
          <div className="cn-reveal reveal-l">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" placeholder="Your Name *" required value={form.name} onChange={handleChange('name')}
                className="w-full px-4 py-3.5 rounded-xl text-sm border-none outline-none"
                style={{ background: '#fff', color: '#2A1A00', border: '1px solid rgba(244, 161, 0, 0.1)' }} />
              <input type="tel" placeholder="Phone Number *" required value={form.phone} onChange={handleChange('phone')}
                className="w-full px-4 py-3.5 rounded-xl text-sm border-none outline-none"
                style={{ background: '#fff', color: '#2A1A00', border: '1px solid rgba(244, 161, 0, 0.1)' }} />
              <input type="email" placeholder="Email" value={form.email} onChange={handleChange('email')}
                className="w-full px-4 py-3.5 rounded-xl text-sm border-none outline-none"
                style={{ background: '#fff', color: '#2A1A00', border: '1px solid rgba(244, 161, 0, 0.1)' }} />
              <textarea placeholder="Your Message" rows={4} value={form.message} onChange={handleChange('message')}
                className="w-full px-4 py-3.5 rounded-xl text-sm border-none outline-none resize-none"
                style={{ background: '#fff', color: '#2A1A00', border: '1px solid rgba(244, 161, 0, 0.1)' }} />
              <button type="submit" className="btn-primary !w-full !justify-center" style={{ background: '#06A77D', boxShadow: '0 4px 20px rgba(6,167,125,0.35)' }}>
                <FaPaperPlane size={14} /> Send via WhatsApp
              </button>
              <a href="mailto:info@rimshatravels.pk" className="block text-center text-xs mt-3" style={{ color: '#6B5B3E' }}>
                Or email: info@rimshatravels.pk
              </a>
            </form>
          </div>

          {/* Contact Info + Map */}
          <div className="cn-reveal reveal-r">
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-4 p-4 rounded-xl" style={{ background: '#fff', border: '1px solid rgba(244, 161, 0, 0.1)' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#06A77D' }}>
                  <FaPhone size={16} color="#fff" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#06A77D' }}>Phone / WhatsApp</div>
                  <div className="text-sm font-medium" style={{ color: '#2A1A00' }}>0345-5487713</div>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl" style={{ background: '#fff', border: '1px solid rgba(244, 161, 0, 0.1)' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#F4A100' }}>
                  <FaMapMarkerAlt size={16} color="#fff" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#F4A100' }}>Address</div>
                  <div className="text-sm font-medium" style={{ color: '#2A1A00' }}>
                    Office No. LG-11, Mid City Shopping Mall,<br />
                    29-8 Murree Road, B-Block,<br />
                    Satellite Town, Rawalpindi, 46000
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl" style={{ background: '#fff', border: '1px solid rgba(244, 161, 0, 0.1)' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#E0144C' }}>
                  <FaEnvelope size={16} color="#fff" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#E0144C' }}>Email</div>
                  <div className="text-sm font-medium" style={{ color: '#2A1A00' }}>info@rimshatravels.pk</div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                title="Rimsha Travels Location"
                src="https://www.google.com/maps?q=Mid+City+Shopping+Mall+Murree+Road+Satellite+Town+Rawalpindi&hl=en&z=16&output=embed"
                width="100%" height="280" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}