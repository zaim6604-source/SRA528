import { useState } from 'react';
import useInView from '../hooks/useInView';

const LAT = 33.61438252407208;
const LNG = 73.00398272698568;

export default function Contact() {
  const [ref, inView] = useInView();
  const [formType, setFormType] = useState('business');
  const [form, setForm] = useState({ name: '', phone: '', email: '', company: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `*Blue Real Eye Inquiry*\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n${formType === 'business' ? 'Company: ' : 'Interest: '}${form.company}\nMessage: ${form.message}`;
    window.open(`https://wa.me/923115700584?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <>
      <style>{`
        .ct-section{background:#fff;padding:96px 24px}
        .ct-inner{max-width:1200px;margin:0 auto}
        .ct-layout{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:start}
        @media(max-width:900px){.ct-layout{grid-template-columns:1fr}}
        .ct-form-card{background:#FFF0F0;border-radius:20px;padding:32px;border:1px solid rgba(217,4,41,.06)}
        .ct-toggle{display:flex;background:#fff;border-radius:12px;padding:4px;margin-bottom:24px;border:1px solid rgba(217,4,41,.08)}
        .ct-toggle-btn{flex:1;padding:10px 16px;border-radius:10px;border:none;cursor:pointer;font-weight:700;font-size:13px;font-family:"Plus Jakarta Sans",sans-serif;transition:all .2s}
        .ct-toggle-btn.active{background:#D90429;color:#fff;box-shadow:0 4px 12px rgba(217,4,41,.2)}
        .ct-toggle-btn:not(.active){background:transparent;color:#6B2025}
        .ct-field{margin-bottom:16px}
        .ct-field label{display:block;font-size:12px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:#6B2025;margin-bottom:6px}
        .ct-field input,.ct-field textarea{width:100%;padding:12px 16px;border-radius:10px;border:1px solid rgba(217,4,41,.1);background:#fff;font-size:14px;font-family:"Inter",sans-serif;color:#2E0507;transition:border-color .2s,box-shadow .2s;outline:none}
        .ct-field input:focus,.ct-field textarea:focus{border-color:#D90429;box-shadow:0 0 0 3px rgba(217,4,41,.08)}
        .ct-field textarea{resize:vertical;min-height:80px}
        .ct-submit{width:100%;display:flex;align-items:center;justify-content:center;gap:10px;padding:14px;border-radius:12px;border:none;background:#FFD60A;color:#2E0507;font-weight:800;font-size:15px;font-family:"Plus Jakarta Sans",sans-serif;cursor:pointer;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 16px rgba(255,214,10,.3)}
        .ct-submit:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(255,214,10,.4)}
        .ct-fallback{display:flex;gap:12px;margin-top:14px;flex-wrap:wrap}
        .ct-fallback a{font-size:13px;font-weight:600;color:#D90429;text-decoration:none;display:flex;align-items:center;gap:6px;padding:8px 14px;border-radius:10px;background:rgba(217,4,41,.06);transition:background .2s}
        .ct-fallback a:hover{background:rgba(217,4,41,.12)}
        .ct-info-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:20px}
        @media(max-width:480px){.ct-info-grid{grid-template-columns:1fr}}
        .ct-info-card{background:#FFF0F0;border:1px solid rgba(217,4,41,.06);border-radius:16px;padding:20px;transition:border-color .25s,transform .25s}
        .ct-info-card:hover{border-color:rgba(217,4,41,.15);transform:translateY(-2px)}
        .ct-info-icon{width:38px;height:38px;border-radius:10px;display:flex;align-items:center;justify-content:center;margin-bottom:12px;background:rgba(217,4,41,.08);color:#D90429;font-size:16px}
        .ct-info-label{font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#D90429;margin-bottom:8px}
        .ct-info-line{font-size:13px;color:#6B2025;line-height:1.65}
        .ct-map{border-radius:20px;overflow:hidden;border:1px solid rgba(217,4,41,.06);box-shadow:0 4px 24px rgba(0,0,0,.04);position:relative}
        .ct-map-badge{position:absolute;top:14px;left:14px;z-index:10;background:rgba(255,255,255,.95);backdrop-filter:blur(8px);padding:8px 14px;border-radius:10px;font-size:13px;font-weight:600;color:#2E0507;display:flex;align-items:center;gap:6px;box-shadow:0 2px 12px rgba(0,0,0,.06);border:1px solid rgba(217,4,41,.1)}
      `}</style>

      <section id="contact" className="ct-section" ref={ref}>
        <div className="ct-inner">
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 60 }} className={`reveal${inView ? ' show' : ''}`}>
            <div className="pill-badge">
              <span className="pill-dot" />
              Get in Touch
            </div>
            <h2 style={{ fontFamily: '"Plus Jakarta Sans",sans-serif', fontWeight: 900, fontSize: 'clamp(30px,4vw,46px)', color: '#2E0507', marginBottom: 16 }}>
              Contact <span style={{ color: '#D90429' }}>Us</span>
            </h2>
            <p style={{ color: '#6B2025', fontSize: 16, maxWidth: 540, margin: '0 auto', lineHeight: 1.7 }}>
              Ready to strengthen your HR practices? Reach out and let's start the conversation.
            </p>
          </div>

          <div className="ct-layout">
            {/* Left: Form */}
            <div className={`reveal-l${inView ? ' show' : ''}`}>
              <div className="ct-form-card">
                {/* Toggle */}
                <div className="ct-toggle">
                  <button
                    className={`ct-toggle-btn ${formType === 'business' ? 'active' : ''}`}
                    onClick={() => setFormType('business')}
                  >
                    <i className="fas fa-building" style={{ marginRight: 6 }} /> I'm a Business
                  </button>
                  <button
                    className={`ct-toggle-btn ${formType === 'professional' ? 'active' : ''}`}
                    onClick={() => setFormType('professional')}
                  >
                    <i className="fas fa-user" style={{ marginRight: 6 }} /> I'm a Professional
                  </button>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="ct-field">
                    <label>Name</label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Your full name" required />
                  </div>
                  <div className="ct-field">
                    <label>Phone</label>
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="03XX-XXXXXXX" required />
                  </div>
                  <div className="ct-field">
                    <label>Email</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
                  </div>
                  <div className="ct-field">
                    <label>{formType === 'business' ? 'Company / Role' : 'Interest Area'}</label>
                    <input name="company" value={form.company} onChange={handleChange} placeholder={formType === 'business' ? 'Company name' : 'e.g., HR Consulting, Career Growth'} />
                  </div>
                  <div className="ct-field">
                    <label>Message</label>
                    <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your HR needs..." />
                  </div>
                  <button type="submit" className="ct-submit">
                    <i className="fab fa-whatsapp" /> Send via WhatsApp
                  </button>
                </form>

                <div className="ct-fallback">
                  <a href="https://wa.me/923115700584" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-whatsapp" /> WhatsApp Direct
                  </a>
                  <a href="mailto:Bluerealeyepak@gmail.com">
                    <i className="far fa-envelope" /> Bluerealeyepak@gmail.com
                  </a>
                  <a href="mailto:info@bluerealeye.pk" style={{ opacity: 0.7 }}>
                    <i className="far fa-envelope" /> info@bluerealeye.pk
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Info + Map */}
            <div className={`reveal-r${inView ? ' show' : ''}`} style={{ transitionDelay: '.15s' }}>
              {/* Info grid */}
              <div className="ct-info-grid">
                <div className="ct-info-card">
                  <div className="ct-info-icon"><i className="fab fa-whatsapp" /></div>
                  <div className="ct-info-label">WhatsApp</div>
                  <div className="ct-info-line">
                    <a href="https://wa.me/923115700584" target="_blank" rel="noopener noreferrer" style={{ color: '#D90429', fontWeight: 600, textDecoration: 'none' }}>
                      0311-5700584
                    </a>
                  </div>
                </div>
                <div className="ct-info-card">
                  <div className="ct-info-icon"><i className="far fa-envelope" /></div>
                  <div className="ct-info-label">Email</div>
                  <div className="ct-info-line">
                    <a href="mailto:Bluerealeyepak@gmail.com" style={{ color: '#D90429', fontWeight: 600, textDecoration: 'none' }}>
                      Bluerealeyepak@gmail.com
                    </a>
                  </div>
                </div>
                <div className="ct-info-card" style={{ gridColumn: 'span 2' }}>
                  <div className="ct-info-icon"><i className="fas fa-location-dot" /></div>
                  <div className="ct-info-label">Address</div>
                  <div className="ct-info-line">
                    Al Noor Market, Ashiana Chowk,<br />Westridge III, Allahabad,<br />Rawalpindi, 46000
                  </div>
                </div>
              </div>

              {/* Social quick links */}
              <div style={{ display: 'flex', gap: 10, marginBottom: 20, flexWrap: 'wrap' }}>
                {[
                  { icon: 'fab fa-facebook-f', url: 'https://www.facebook.com/Bluerealeye', color: '#1877F2' },
                  { icon: 'fab fa-instagram', url: 'https://www.instagram.com/bluerealeye', color: '#E4405F' },
                  { icon: 'fab fa-youtube', url: 'https://www.youtube.com/@bluerealeyeinfo', color: '#FF0000' },
                  { icon: 'fab fa-tiktok', url: 'https://www.tiktok.com/@Bluerealeyepak', color: '#000' },
                ].map((s, i) => (
                  <a key={i} href={s.url} target="_blank" rel="noopener noreferrer"
                    style={{ width: 40, height: 40, borderRadius: 10, background: `${s.color}0d`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: s.color, fontSize: 16, textDecoration: 'none', transition: 'transform .2s' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'none'; }}>
                    <i className={s.icon} />
                  </a>
                ))}
              </div>

              {/* Map */}
              <div className="ct-map">
                <div className="ct-map-badge">
                  <i className="fas fa-location-dot" style={{ color: '#D90429', fontSize: 12 }} />
                  Westridge III, Rawalpindi
                </div>
                <iframe
                  title="Blue Real Eye Location"
                  src={`https://maps.google.com/maps?q=${LAT},${LNG}&z=16&output=embed`}
                  width="100%"
                  height="480"
                  style={{ display: 'block', border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}