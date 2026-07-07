import { useEffect, useRef } from 'react';

const stats = [
  { n: '19+',    l: 'Years Active'    },
  { n: '5,000+', l: 'Placements Made' },
  { n: '30+',    l: 'Countries'       },
  { n: '0056',   l: 'License / RWP'   },
];

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      ref.current?.querySelectorAll('.h-reveal').forEach((el, i) => {
        setTimeout(() => { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; }, i * 140);
      });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        .h-reveal { opacity:0; transform:translateY(28px); transition:opacity .7s ease, transform .7s ease; }
        .h-badge { display:inline-flex;align-items:center;gap:10px;background:rgba(57,255,20,.12);border:1px solid rgba(57,255,20,.35);color:#2a8a10;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:7px 18px;border-radius:999px; }
        .h-badge-dot { width:7px;height:7px;border-radius:50%;background:#39FF14;box-shadow:0 0 8px rgba(57,255,20,.5);animation:hPing 1.8s ease infinite; }
        @keyframes hPing { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.6);opacity:.4} }
        .h-stat-bar { display:grid;grid-template-columns:repeat(4,1fr);background:rgba(255,255,255,.85);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border:1px solid rgba(57,255,20,.2);border-radius:20px;box-shadow:0 4px 24px rgba(0,0,0,.06); }
        @media(max-width:640px) { .h-stat-bar{grid-template-columns:repeat(2,1fr)} }
        .h-stat { padding:22px 16px;text-align:center;border-right:1px solid rgba(0,0,0,.06); }
        .h-stat:last-child { border-right:none; }
        @media(max-width:640px){ .h-stat:nth-child(2){border-right:none} .h-stat:nth-child(3){border-right:1px solid rgba(0,0,0,.06)} }
        .h-stat-n { font-weight:900;font-size:clamp(22px,3vw,28px);color:#39FF14;text-shadow:0 0 20px rgba(57,255,20,.2); }
        .h-stat-l { font-size:12px;font-weight:500;color:#555570;margin-top:3px; }
        .h-scroll { position:absolute;bottom:110px;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:6px;color:#999;font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase; }
        .h-scroll-line { width:1px;height:40px;background:linear-gradient(to bottom,rgba(57,255,20,.5),transparent); }
        .h-ring1 { position:absolute;border-radius:50%;border:1px solid rgba(57,255,20,.12);animation:spinRing 22s linear infinite;pointer-events:none; }
        .h-ring2 { position:absolute;border-radius:50%;border:1px solid rgba(0,255,239,.08);animation:spinRing 30s linear infinite reverse;pointer-events:none; }
        .h-float-card { position:absolute;display:flex;align-items:center;gap:10px;background:rgba(255,255,255,.92);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid var(--c,rgba(57,255,20,.2));padding:12px 18px;border-radius:14px;color:#1a1a2e;font-size:13px;font-weight:600;white-space:nowrap;animation:floatY 4s ease-in-out infinite;box-shadow:0 4px 20px rgba(0,0,0,.05); }
        @media(max-width:900px) { .h-float-card{display:none!important} }
      `}</style>

      <section id="home" ref={ref} style={{
        position: 'relative', minHeight: '100vh',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden', padding: '100px 24px 40px',
      }}>
        {/* Background */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=90&auto=format&fit=crop"
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(245,245,245,.95) 0%, rgba(255,255,255,.92) 40%, rgba(220,255,220,.85) 100%)' }} />
        </div>

        {/* Rings - light variant */}
        <div className="h-ring1" style={{ width: 600, height: 600, top: '50%', left: '50%', marginLeft: -300, marginTop: -300 }} />
        <div className="h-ring2" style={{ width: 900, height: 900, top: '50%', left: '50%', marginLeft: -450, marginTop: -450 }} />

        {/* Floating badges */}
        <div className="h-float-card" style={{ top: '22%', left: '5%', animationDelay: '0s', '--c': 'rgba(57,255,20,.25)' }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: '#39FF14', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, color: '#000', fontWeight: 900 }}>🌍</div>
          <div><div style={{ fontSize: 13, fontWeight: 700 }}>Global Network</div><div style={{ fontSize: 11, opacity: .55 }}>30+ Countries</div></div>
        </div>
        <div className="h-float-card" style={{ top: '20%', right: '5%', animationDelay: '1.2s', '--c': 'rgba(0,255,239,.25)' }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: '#00FFEF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, color: '#000', fontWeight: 900 }}>✈️</div>
          <div><div style={{ fontSize: 13, fontWeight: 700 }}>Visa Support</div><div style={{ fontSize: 11, opacity: .55 }}>Fast Processing</div></div>
        </div>
        <div className="h-float-card" style={{ bottom: '28%', left: '4%', animationDelay: '2s', '--c': 'rgba(255,255,0,.25)' }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: '#FFFF00', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, color: '#000', fontWeight: 900 }}>💼</div>
          <div><div style={{ fontSize: 13, fontWeight: 700 }}>5,000+ Jobs</div><div style={{ fontSize: 11, opacity: .55 }}>Placed Successfully</div></div>
        </div>
        <div className="h-float-card" style={{ bottom: '30%', right: '4%', animationDelay: '0.7s', '--c': 'rgba(255,7,58,.25)' }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: '#FF073A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, color: '#fff', fontWeight: 900 }}>🏛️</div>
          <div><div style={{ fontSize: 13, fontWeight: 700 }}>Govt. Licensed</div><div style={{ fontSize: 11, opacity: .55 }}>License 0056/RWP</div></div>
        </div>

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 10, maxWidth: 800, width: '100%', textAlign: 'center' }}>
          <div className="h-badge h-reveal" style={{ marginBottom: 28, display: 'inline-flex' }}>
            <span className="h-badge-dot" />
            Rawalpindi's Premier Overseas Employment Agency
          </div>

          <h1 className="h-reveal" style={{
            fontWeight: 900,
            fontSize: 'clamp(38px,6.5vw,74px)',
            color: '#1a1a2e', lineHeight: 1.08, marginBottom: 20,
            transitionDelay: '.1s',
          }}>
            Connecting Talent with{' '}
            <span style={{
              background: 'linear-gradient(135deg, #39FF14 0%, #00FFEF 50%, #FFFF00 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Global Opportunities
            </span>
          </h1>

          <p className="h-reveal" style={{
            fontSize: 'clamp(15px,1.8vw,19px)', color: '#555570',
            lineHeight: 1.7, maxWidth: 620, margin: '0 auto 12px',
            transitionDelay: '.2s',
          }}>
            <strong style={{ color: '#39FF14' }}>Al-Amal Company</strong> — your trusted overseas employment partner serving Pakistan since 2005.
          </p>
          <p className="h-reveal" style={{
            fontSize: 'clamp(14px,1.6vw,17px)', color: '#777790',
            lineHeight: 1.7, maxWidth: 580, margin: '0 auto 38px',
            transitionDelay: '.28s',
          }}>
            Licensed by the Government of Pakistan. Expert recruitment, visa assistance, and career counseling connecting skilled professionals with international employers.
          </p>

          <div className="h-reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center', marginBottom: 60, transitionDelay: '.38s' }}>
            <button
              className="btn-primary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              style={{ fontSize: 16, padding: '15px 32px', borderRadius: 12 }}
            >
              Start Your Journey
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
            <button
              className="btn-outline"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              style={{ fontSize: 16, padding: '14px 32px', borderRadius: 12 }}
            >
              Explore Services
            </button>
          </div>

          {/* Stats */}
          <div className="h-stat-bar h-reveal" style={{ transitionDelay: '.5s' }}>
            {stats.map((s, i) => (
              <div key={i} className="h-stat">
                <div className="h-stat-n">{s.n}</div>
                <div className="h-stat-l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

      
      </section>
    </>
  );
}