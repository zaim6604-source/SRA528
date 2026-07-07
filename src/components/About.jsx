import { useEffect, useRef } from 'react';
import { Building2, MapPin, Tag, Route } from 'lucide-react';

const infoCards = [
  {
    Icon: Building2,
    label: 'Agency Name',
    value: 'Al-Amal Company',
    neColor: '#39FF14',
    neBg: 'rgba(57,255,20,.06)',
    neBorder: 'rgba(57,255,20,.2)',
  },
  {
    Icon: Tag,
    label: 'Category',
    value: 'Recruiting Agency / Overseas Employment',
    neColor: '#00FFEF',
    neBg: 'rgba(0,255,239,.06)',
    neBorder: 'rgba(0,255,239,.2)',
  },
  {
    Icon: Route,
    label: 'License',
    value: '0056 / RWP',
    neColor: '#FFFF00',
    neBg: 'rgba(255,255,0,.06)',
    neBorder: 'rgba(255,255,0,.2)',
  },
  {
    Icon: MapPin,
    label: 'Headquarters',
    value: 'Rawalpindi, Punjab',
    neColor: '#FF073A',
    neBg: 'rgba(255,7,58,.06)',
    neBorder: 'rgba(255,7,58,.2)',
  },
];

const values = [
  { emoji: '🛡️', title: 'Integrity & Trust',  desc: 'Transparent, honest service for every candidate and employer we serve.' },
  { emoji: '🌍', title: 'Global Reach',        desc: 'Placement network spanning 30+ countries across the Gulf, Europe & Asia.' },
  { emoji: '⚡', title: 'Swift Processing',    desc: 'Streamlined documentation and visa handling to save your valuable time.' },
  { emoji: '👥', title: 'Expert Team',         desc: 'Decades of combined experience in international recruitment & immigration.' },
];

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); }),
      { threshold: 0.12 }
    );
    ref.current?.querySelectorAll('.reveal,.reveal-l,.reveal-r').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .ab-section { background:#fff; padding:96px 24px; }
        .ab-inner { max-width:1200px; margin:0 auto; }
        .ab-header { text-align:center; margin-bottom:64px; }
        .ab-info-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:20px; margin-bottom:72px; }
        @media(max-width:900px){ .ab-info-grid{grid-template-columns:repeat(2,1fr)} }
        @media(max-width:480px){ .ab-info-grid{grid-template-columns:1fr} }
        .ab-info-card { background:#fff; border-radius:20px; padding:28px 24px; border:1.5px solid #e8e8f0; transition:transform .3s,box-shadow .3s,border-color .3s; }
        .ab-info-card:hover { transform:translateY(-6px); border-color: var(--nc, #39FF14); box-shadow:0 20px 48px rgba(0,0,0,.06); }
        .ab-info-icon { width:48px; height:48px; border-radius:14px; display:flex; align-items:center; justify-content:center; margin-bottom:16px; }
        .ab-info-label { font-size:11px; font-weight:700; letter-spacing:.1em; text-transform:uppercase; color:#999; margin-bottom:8px; }
        .ab-info-value { font-weight:900; font-size:17px; color: var(--nc, #39FF14); line-height:1.3; }
        .ab-grid { display:grid; grid-template-columns:1fr 1fr; gap:64px; align-items:center; margin-bottom:72px; }
        @media(max-width:900px){ .ab-grid{grid-template-columns:1fr; gap:48px} }
        .ab-img-wrap { position:relative; }
        .ab-img { width:100%; height:460px; object-fit:cover; border-radius:24px; display:block; border:1px solid #e8e8f0; box-shadow:0 4px 20px rgba(0,0,0,.04); }
        .ab-img-badge { position:absolute; background:#fff; border:1px solid rgba(57,255,20,.2); border-radius:16px; padding:14px 20px; box-shadow:0 8px 32px rgba(0,0,0,.06); }
        .ab-badge-n { font-weight:900; font-size:26px; color:#39FF14; line-height:1; }
        .ab-badge-l { font-size:12px; color:#555570; font-weight:600; margin-top:3px; }
        .ab-title { font-weight:900; font-size:clamp(26px,3.2vw,38px); color:#1a1a2e; margin-bottom:16px; }
        .ab-body  { font-size:15px; line-height:1.8; color:#555570; margin-bottom:14px; }
        .ab-addr-row { display:flex; align-items:flex-start; gap:12px; padding:14px 18px; background:#fff; border:1px solid #e8e8f0; border-radius:14px; margin-bottom:12px; }
        .ab-addr-icon { width:38px; height:38px; border-radius:10px; background:rgba(57,255,20,.1); display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        .ab-addr-label { font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:.08em; color:#999; margin-bottom:3px; }
        .ab-addr-value { font-size:14px; font-weight:600; color:#555570; line-height:1.5; }
        .ab-values { display:grid; grid-template-columns:repeat(4,1fr); gap:20px; }
        @media(max-width:900px){ .ab-values{grid-template-columns:repeat(2,1fr)} }
        @media(max-width:480px){ .ab-values{grid-template-columns:1fr} }
        .ab-val-card { background:#fff; border-radius:18px; padding:28px 24px; border:1px solid #e8e8f0; transition:transform .3s,box-shadow .3s,border-color .3s; }
        .ab-val-card:hover { transform:translateY(-5px); border-color:rgba(57,255,20,.2); box-shadow:0 16px 48px rgba(0,0,0,.06); }
        .ab-val-icon { font-size:28px; margin-bottom:14px; display:block; }
        .ab-val-title { font-weight:700; font-size:15px; color:#1a1a2e; margin-bottom:8px; }
        .ab-val-desc  { font-size:14px; color:#777; line-height:1.65; }
      `}</style>

      <section id="about" className="ab-section" ref={ref}>
        <div className="ab-inner">

          {/* Header */}
          <div className="ab-header reveal">
            <div className="neon-chip">
              <span className="neon-dot" />
              About Us
            </div>
            <h2 style={{ fontWeight: 900, fontSize: 'clamp(30px,4vw,46px)', color: '#1a1a2e', marginBottom: 16 }}>
              About{' '}
              <span className="grad-text">Al-Amal Company</span>
            </h2>
            <p style={{ color: '#777', fontSize: 16, maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
              A government-licensed recruiting and overseas employment agency based in Rawalpindi, dedicated to connecting
              Pakistani talent with international career opportunities since 2005.
            </p>
          </div>

          {/* Info cards */}
          <div className="ab-info-grid reveal" style={{ marginBottom: 72 }}>
            {infoCards.map(({ Icon, label, value, neColor, neBg, neBorder }, i) => (
              <div key={i} className="ab-info-card" style={{ '--nc': neColor, borderColor: neBorder }}>
                <div className="ab-info-icon" style={{ background: neBg, border: `1.5px solid ${neBorder}` }}>
                  <Icon size={22} color={neColor} strokeWidth={2} />
                </div>
                <div className="ab-info-label">{label}</div>
                <div className="ab-info-value" style={{ color: neColor }}>{value}</div>
              </div>
            ))}
          </div>

          {/* Two column */}
          <div className="ab-grid" style={{ marginBottom: 72 }}>
            {/* Image */}
            <div className="ab-img-wrap reveal-l">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=90&auto=format&fit=crop"
                alt="Al-Amal Company office"
                className="ab-img"
              />
              <div className="ab-img-badge float" style={{ top: -20, right: -20 }}>
                <div className="ab-badge-n">30+</div>
                <div className="ab-badge-l">Countries</div>
              </div>
              <div className="ab-img-badge float" style={{ bottom: -20, left: -20, animationDelay: '2s' }}>
                <div className="ab-badge-n">5K+</div>
                <div className="ab-badge-l">Placements</div>
              </div>
            </div>

            {/* Text */}
            <div className="reveal-r">
              <div className="neon-chip" style={{ marginBottom: 18, borderColor: 'rgba(0,255,239,.25)', color: '#00FFEF' }}>
                <span className="neon-dot" style={{ background: '#00FFEF' }} />
                Rawalpindi, Punjab — Pakistan
              </div>
              <h3 className="ab-title">
                Trusted Partner for<br />
                <span style={{ color: '#39FF14' }}>Overseas Employment</span>
              </h3>
              <p className="ab-body">
                Al-Amal Company is a government-licensed overseas employment promoter operating from Satellite Town, Rawalpindi.
                We specialize in placing skilled Pakistani professionals in international markets across the Gulf,
                Europe, and Asia-Pacific.
              </p>
              <p className="ab-body">
                From initial counseling and documentation to visa processing and pre-departure guidance — we provide
                comprehensive support to ensure your global career journey starts on the right foot.
              </p>

              {/* Address detail */}
              <div style={{ marginTop: 28 }}>
                <div className="ab-addr-row">
                  <div className="ab-addr-icon">
                    <MapPin size={18} color="#39FF14" />
                  </div>
                  <div>
                    <div className="ab-addr-label">Office Address</div>
                    <div className="ab-addr-value">H-132, D Block, Satellite Town<br />6th Road, Near Total Petrol Pump, Rawalpindi, Punjab</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="ab-values">
            {values.map((v, i) => (
              <div key={i} className="ab-val-card reveal" style={{ transitionDelay: `${i * .1}s` }}>
                <span className="ab-val-icon">{v.emoji}</span>
                <div className="ab-val-title">{v.title}</div>
                <div className="ab-val-desc">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}