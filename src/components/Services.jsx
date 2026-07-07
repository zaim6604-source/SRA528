import { useEffect, useRef } from 'react';
import { Globe2, FileText, GraduationCap } from 'lucide-react';

const services = [
  {
    Icon: Globe2,
    color: '#39FF14',
    bg: 'rgba(57,255,20,.08)',
    labelBg: '#39FF14',
    title: 'Overseas Employment',
    sub: 'Global Job Placements',
    desc: 'Connect with top employers in the Gulf, Europe & Asia. We match your skills with the right international opportunity and manage the entire placement process.',
    features: [
      'Gulf Region (UAE, KSA, Qatar, Kuwait)',
      'Europe & Malaysia Placements',
      'Pre-departure Orientation',
      'Post-arrival Support',
    ],
    img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=85&auto=format&fit=crop',
  },
  {
    Icon: FileText,
    color: '#00FFEF',
    bg: 'rgba(0,255,239,.08)',
    labelBg: '#00FFEF',
    title: 'Visa Processing',
    sub: 'Hassle-free Documentation',
    desc: 'Our expert team handles all visa documentation, embassy submissions, and status tracking with speed and accuracy, ensuring a smooth and stress-free process.',
    features: [
      'Work Visa Applications',
      'Document Authentication',
      'Embassy Coordination',
      'Real-time Status Updates',
    ],
    img: 'https://images.unsplash.com/photo-1532635241-17e820acc59f?w=600&q=85&auto=format&fit=crop',
  },
  {
    Icon: GraduationCap,
    color: '#FFFF00',
    bg: 'rgba(255,255,0,.08)',
    labelBg: '#FFFF00',
    title: 'Recruitment Solutions',
    sub: 'End-to-end Talent Sourcing',
    desc: 'Full-cycle recruitment from sourcing and screening to skills testing and final deployment — only the best reach employers through our rigorous process.',
    features: [
      'Candidate Screening & Testing',
      'Trade Skills Verification',
      'Background Checks',
      'Interview Coordination',
    ],
    img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=85&auto=format&fit=crop',
  },
];

const destinations = [
  { code: 'gb', name: 'United Kingdom', color: 'rgba(57,255,20,.12)' },
  { code: 'de', name: 'Germany',        color: 'rgba(0,255,239,.12)' },
  { code: 'fr', name: 'France',         color: 'rgba(255,255,0,.12)' },
  { code: 'it', name: 'Italy',          color: 'rgba(255,7,58,.12)' },
  { code: 'es', name: 'Spain',          color: 'rgba(57,255,20,.12)' },
  { code: 'my', name: 'Malaysia',       color: 'rgba(0,255,239,.12)' },
];

export default function Services() {
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
        .sv-section { background:#F5F5F5; padding:96px 24px; }
        .sv-inner { max-width:1200px; margin:0 auto; }
        .sv-title { font-weight:900; font-size:clamp(30px,4vw,46px); color:#1a1a2e; margin-bottom:16px; }
        .sv-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; margin-bottom:64px; }
        @media(max-width:1024px){ .sv-grid{grid-template-columns:1fr 1fr} }
        @media(max-width:680px) { .sv-grid{grid-template-columns:1fr} }
        .sv-card { border:1px solid #e8e8f0; border-radius:24px; overflow:hidden; background:#fff; transition:transform .3s,box-shadow .3s,border-color .3s; display:flex; flex-direction:column; }
        .sv-card:hover { transform:translateY(-7px); box-shadow:0 24px 64px rgba(0,0,0,.06); }
        .sv-card-img-wrap { position:relative; }
        .sv-card-img { width:100%; height:200px; object-fit:cover; display:block; }
        .sv-card-body { padding:28px; flex:1; display:flex; flex-direction:column; }
        .sv-card-icon { width:48px; height:48px; border-radius:14px; display:flex; align-items:center; justify-content:center; margin-bottom:16px; }
        .sv-card-sub { font-size:11px; font-weight:700; letter-spacing:.08em; text-transform:uppercase; margin-bottom:6px; }
        .sv-card-title { font-weight:900; font-size:20px; color:#1a1a2e; margin-bottom:10px; }
        .sv-card-desc { font-size:14px; color:#777; line-height:1.75; margin-bottom:18px; flex:1; }
        .sv-feat { display:flex; align-items:flex-start; gap:8px; font-size:13px; color:#555570; margin-bottom:8px; }
        .sv-feat-dot { width:18px; height:18px; border-radius:5px; display:flex; align-items:center; justify-content:center; flex-shrink:0; margin-top:1px; }
        .sv-enquire { display:inline-flex; align-items:center; gap:6px; padding:10px 20px; border-radius:10px; font-size:13px; font-weight:700; border:1.5px solid; cursor:pointer; background:transparent; transition:all .25s; margin-top:8px; }
        .sv-enquire:hover { transform:translateY(-1px); box-shadow:0 0 12px; }
        .sv-dest { background:linear-gradient(135deg,#F5F5F5 0%,#fff 100%); border:1px solid rgba(57,255,20,.2); border-radius:24px; padding:56px 40px; }
        @media(max-width:640px){ .sv-dest{padding:40px 24px} }
        .sv-dest-title { font-weight:900; font-size:clamp(22px,3vw,32px); color:#1a1a2e; text-align:center; margin-bottom:8px; }
        .sv-dest-sub { text-align:center; color:#777; font-size:14px; margin-bottom:40px; }
        .sv-dest-grid { display:grid; grid-template-columns:repeat(6,1fr); gap:16px; }
        @media(max-width:900px){ .sv-dest-grid{grid-template-columns:repeat(3,1fr)} }
        @media(max-width:480px){ .sv-dest-grid{grid-template-columns:repeat(2,1fr)} }
        .sv-dest-item { text-align:center; border:1px solid #e8e8f0; border-radius:16px; padding:20px 12px; transition:all .25s; cursor:default; background:#fff; }
        .sv-dest-item:hover { transform:translateY(-4px); }
        .sv-dest-flag { width:56px; height:37px; border-radius:6px; object-fit:cover; margin:0 auto 10px; display:block; box-shadow:0 2px 8px rgba(0,0,0,.06); }
        .sv-dest-name { font-size:13px; font-weight:600; color:#555570; }
      `}</style>

      <section id="services" className="sv-section" ref={ref}>
        <div className="sv-inner">

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 60 }} className="reveal">
            <div className="neon-chip" style={{ borderColor: 'rgba(0,255,239,.25)', color: '#00FFEF' }}>
              <span className="neon-dot" style={{ background: '#00FFEF' }} />
              What We Offer
            </div>
            <h2 className="sv-title">
              Our Core{' '}
              <span className="grad-text">Services</span>
            </h2>
            <p style={{ color: '#777', fontSize: 16, maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
              From sourcing to deployment — we cover every aspect of international employment with precision and care.
            </p>
          </div>

          {/* Service Cards */}
          <div className="sv-grid">
            {services.map((s, i) => (
              <div
                key={i}
                className="sv-card reveal"
                style={{ transitionDelay: `${i * .12}s`, '--hover-color': s.color }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = s.color + '40'; e.currentTarget.style.boxShadow = `0 0 30px ${s.color}10`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#e8e8f0'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                {/* Image */}
                <div className="sv-card-img-wrap">
                  <img src={s.img} alt={s.title} className="sv-card-img" />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(0,0,0,.5),transparent)' }} />
                </div>

                <div className="sv-card-body">
                  {/* Icon */}
                  <div className="sv-card-icon" style={{ background: s.bg, border: `1.5px solid ${s.color}25` }}>
                    <s.Icon size={22} color={s.labelBg} strokeWidth={2} />
                  </div>

                  <div className="sv-card-sub" style={{ color: s.color }}>{s.sub}</div>
                  <div className="sv-card-title">{s.title}</div>
                  <div className="sv-card-desc">{s.desc}</div>

                  <div style={{ marginBottom: 16 }}>
                    {s.features.map((f, j) => (
                      <div key={j} className="sv-feat">
                        <div className="sv-feat-dot" style={{ background: s.bg }}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
                        </div>
                        {f}
                      </div>
                    ))}
                  </div>

                  <button
                    className="sv-enquire"
                    style={{ color: s.color, borderColor: `${s.color}40` }}
                    onMouseEnter={e => { e.currentTarget.style.background = s.bg; e.currentTarget.style.boxShadow = `0 0 15px ${s.color}20`; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.boxShadow = 'none'; }}
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Enquire Now
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Destinations strip */}
          <div className="sv-dest reveal">
            <div className="sv-dest-title">Key Destination Countries</div>
            <div className="sv-dest-sub">Verified placements across these and many more countries</div>
            <div className="sv-dest-grid">
              {destinations.map((d, i) => (
                <div
                  key={i}
                  className="sv-dest-item"
                  onMouseEnter={e => { e.currentTarget.style.background = d.color; e.currentTarget.style.borderColor = d.color.replace('.12', '.3') || 'transparent'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = '#e8e8f0'; }}
                >
                  <img className="sv-dest-flag" src={`https://flagcdn.com/w80/${d.code}.png`} alt={d.name} />
                  <div className="sv-dest-name">{d.name}</div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: 40 }}>
              <button
                className="btn-primary"
                style={{ fontSize: 15, padding: '14px 32px', borderRadius: 12 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Apply for Overseas Employment
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}