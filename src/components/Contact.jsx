import { useEffect, useRef } from 'react';
import { MapPin, Phone, ExternalLink, Clock, Mail } from 'lucide-react';

const LAT = 33.642120925508515;
const LNG = 73.07372511349284;

const info = [
  {
    Icon: MapPin,
    color: '#39FF14',
    bg: 'rgba(57,255,20,.08)',
    label: 'Office Address',
    lines: [
      'H-132, D Block, Satellite Town',
      '6th Road, Near Total Petrol Pump',
      'Rawalpindi, Punjab, Pakistan',
    ],
  },
  {
    Icon: Phone,
    color: '#00FFEF',
    bg: 'rgba(0,255,239,.08)',
    label: 'Phone Numbers',
    lines: ['051-4853259', '0333-3664912', '0347-0111494', '0337-9204202', '0332-5356206'],
  },
  {
    Icon: Mail,
    color: '#FFFF00',
    bg: 'rgba(255,255,0,.08)',
    label: 'Email',
    lines: ['alamalcompany@yahoo.com'],
  },
  {
    Icon: Clock,
    color: '#FF073A',
    bg: 'rgba(255,7,58,.08)',
    label: 'Office Hours',
    lines: ['Mon – Sat: 9:00 AM – 6:00 PM', 'Sunday: By Appointment'],
  },
];

export default function Contact() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (e) => e.forEach(en => { if (en.isIntersecting) en.target.classList.add('show'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal,.reveal-l,.reveal-r').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .ct-section { background:#fff; padding:96px 24px; }
        .ct-inner { max-width:1200px; margin:0 auto; }
        .ct-title { font-weight:900; font-size:clamp(30px,4vw,46px); color:#1a1a2e; margin-bottom:16px; }
        .ct-layout { display:grid; grid-template-columns:1fr 1fr; gap:40px; align-items:start; }
        @media(max-width:900px){ .ct-layout{grid-template-columns:1fr} }
        .ct-company-card { background:linear-gradient(135deg,#39FF14,#00FFEF); border-radius:20px; padding:28px; margin-bottom:20px; display:flex; align-items:center; gap:16px; }
        .ct-company-logo { width:56px;height:56px;border-radius:14px;background:rgba(0,0,0,.15);border:2px solid rgba(0,0,0,.1);display:flex;align-items:center;justify-content:center;font-weight:900;font-size:22px;color:#000;flex-shrink:0; }
        .ct-company-name { font-weight:900; font-size:20px; color:#000; }
        .ct-company-sub  { font-size:13px; color:rgba(0,0,0,.5); margin-top:3px; font-weight:600; }
        .ct-info-grid { display:grid; grid-template-columns:1fr 1fr; gap:14px; margin-bottom:20px; }
        @media(max-width:480px){ .ct-info-grid{grid-template-columns:1fr} }
        .ct-info-card { background:#fff; border:1px solid #e8e8f0; border-radius:16px; padding:20px; transition:border-color .25s,box-shadow .25s,transform .25s; }
        .ct-info-card:hover { border-color: var(--hc, #39FF14); box-shadow:0 8px 24px rgba(0,0,0,.04); transform:translateY(-2px); }
        .ct-info-icon { width:38px;height:38px;border-radius:10px;display:flex;align-items:center;justify-content:center;margin-bottom:12px;flex-shrink:0; }
        .ct-info-label { font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;margin-bottom:8px; }
        .ct-info-line  { font-size:13px;color:#555570;line-height:1.65; }
        .ct-fb-btn { display:inline-flex;align-items:center;gap:8px;padding:11px 20px;border-radius:12px;font-size:13px;font-weight:700;text-decoration:none;transition:transform .2s,box-shadow .2s;background:rgba(57,255,20,.08);border:1px solid rgba(57,255,20,.25);color:#39FF14; }
        .ct-fb-btn:hover { transform:translateY(-2px); box-shadow:0 8px 20px rgba(57,255,20,.15); }
        .ct-map { border-radius:20px;overflow:hidden;border:1px solid #e8e8f0;box-shadow:0 4px 24px rgba(0,0,0,.04);position:relative; }
        .ct-map-badge { position:absolute;top:14px;left:14px;z-index:10;background:rgba(255,255,255,.95);backdrop-filter:blur(8px);padding:8px 14px;border-radius:10px;font-size:13px;font-weight:600;color:#1a1a2e;display:flex;align-items:center;gap:6px;box-shadow:0 2px 12px rgba(0,0,0,.06);border:1px solid rgba(57,255,20,.15); }
      `}</style>

      <section id="contact" className="ct-section" ref={ref}>
        <div className="ct-inner">

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 60 }} className="reveal">
            <div className="neon-chip" style={{ borderColor: 'rgba(255,7,58,.25)', color: '#FF073A' }}>
              <span className="neon-dot" style={{ background: '#FF073A' }} />
              Get In Touch
            </div>
            <h2 className="ct-title">
              Contact{' '}
              <span className="grad-text">Al-Amal Company</span>
            </h2>
            <p style={{ color: '#777', fontSize: 16, maxWidth: 540, margin: '0 auto', lineHeight: 1.7 }}>
              Visit our Rawalpindi office or reach out by phone, email, or Facebook. Our team is ready to guide you through
              every step of your overseas employment journey.
            </p>
          </div>

          <div className="ct-layout">

            {/* Left: Info */}
            <div className="reveal-l">
              {/* Company badge */}
              <div className="ct-company-card">
                <div className="ct-company-logo">A</div>
                <div>
                  <div className="ct-company-name">Al-Amal Company</div>
                  <div className="ct-company-sub">License: 0056 / RWP · Est. 2005</div>
                </div>
              </div>

              {/* Info grid */}
              <div className="ct-info-grid">
                {info.map(({ Icon, color, bg, label, lines }, i) => (
                  <div key={i} className="ct-info-card" style={{ '--hc': color }}>
                    <div className="ct-info-icon" style={{ background: bg }}>
                      <Icon size={18} color={color} strokeWidth={2} />
                    </div>
                    <div className="ct-info-label" style={{ color }}>{label}</div>
                    {lines.map((l, j) => (
                      <div key={j} className="ct-info-line" style={j === 0 && label === 'Email' ? { color: '#FFFF00', fontWeight: 600 } : {}}>{l}</div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Facebook CTA */}
              <a
                href="https://www.facebook.com/alamalco/"
                target="_blank"
                rel="noopener noreferrer"
                className="ct-fb-btn"
              >
                <svg width="16" height="16" fill="#39FF14" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Follow Al-Amal Company on Facebook
              </a>
            </div>

            {/* Right: Map */}
            <div className="reveal-r" style={{ transitionDelay: '.15s' }}>
              <div className="ct-map">
                <div className="ct-map-badge">
                  <MapPin size={14} color="#39FF14" />
                  Satellite Town, Rawalpindi
                </div>
                <iframe
                  title="Al-Amal Company Location"
                  src={`https://maps.google.com/maps?q=${LAT},${LNG}&z=16&output=embed`}
                  width="100%"
                  height="520"
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