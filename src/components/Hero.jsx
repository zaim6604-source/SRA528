import { useEffect, useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      ref.current?.querySelectorAll('.h-reveal').forEach((el, i) => {
        setTimeout(() => { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; }, i * 130);
      });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        .h-reveal{opacity:0;transform:translateY(28px);transition:opacity .7s ease,transform .7s ease}
        .h-float-card{position:absolute;display:flex;align-items:center;gap:8px;background:rgba(255,255,255,.92);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid var(--c,rgba(217,4,41,.2));padding:8px 14px;border-radius:12px;color:#2E0507;font-size:12px;font-weight:600;white-space:nowrap;animation:floatY 4s ease-in-out infinite;box-shadow:0 4px 20px rgba(0,0,0,.05);pointer-events:none}
        .h-ring{position:absolute;border-radius:50%;border:1px solid rgba(217,4,41,.08);animation:spinRing 25s linear infinite;pointer-events:none}
        @media(max-width:900px){.h-float-card{display:none!important}}
        @keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
        @keyframes spinRing{to{transform:rotate(360deg)}}
      `}</style>

      <section id="home" ref={ref} style={{
        position: 'relative', minHeight: '100vh',
        display: 'flex', flexDirection: 'column',
        overflow: 'hidden', padding: '120px 24px 60px',
      }}>
        {/* Background */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(135deg, #FFF0F0 0%, #FFE4E4 30%, #FFF0F0 60%, #FFF5F5 100%)',
          }} />
          {/* Lens/eye geometric motif */}
          <div style={{
            position: 'absolute', top: '10%', right: '5%', width: 400, height: 400,
            borderRadius: '50%', border: '2px solid rgba(217,4,41,.06)', opacity: 0.6,
          }} />
          <div style={{
            position: 'absolute', top: '15%', right: '8%', width: 300, height: 300,
            borderRadius: '50%', border: '1px solid rgba(239,35,60,.05)', opacity: 0.5,
          }} />
          <div style={{
            position: 'absolute', top: '20%', right: '12%', width: 200, height: 200,
            borderRadius: '50%', border: '2px solid rgba(217,4,41,.04)', opacity: 0.4,
          }} />
          {/* Lens crosshair */}
          <div style={{
            position: 'absolute', top: '22%', right: '18%',
            display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.15,
          }}>
            <div style={{ position: 'absolute', width: 2, height: 60, background: '#D90429' }} />
            <div style={{ position: 'absolute', width: 60, height: 2, background: '#D90429' }} />
          </div>
        </div>

        <div className="h-ring" style={{ width: 500, height: 500, top: '60%', left: '-5%' }} />
        <div className="h-ring" style={{ width: 350, height: 350, top: '20%', left: '15%', animationDirection: 'reverse', animationDuration: '20s' }} />

        {/* Floating stat chips */}
        <div className="h-float-card" style={{ top: '28%', right: '6%', '--c': 'rgba(217,4,41,.2)' }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: '#D90429', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, color: '#fff', fontWeight: 700 }}>200+</div>
          <div><div style={{ fontSize: 11, fontWeight: 700 }}>Clients</div><div style={{ fontSize: 10, opacity: .55 }}>Advised</div></div>
        </div>
        <div className="h-float-card" style={{ top: '65%', right: '3%', animationDelay: '1.5s', '--c': 'rgba(255,214,10,.3)' }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: '#FFD60A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, color: '#2E0507', fontWeight: 700 }}>15+</div>
          <div><div style={{ fontSize: 11, fontWeight: 700 }}>Industries</div><div style={{ fontSize: 10, opacity: .55 }}>Served</div></div>
        </div>
        <div className="h-float-card" style={{ top: '45%', left: '4%', animationDelay: '0.8s', '--c': 'rgba(255,107,107,.25)' }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: '#FF6B6B', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, color: '#fff', fontWeight: 700 }}>
            <i className="fas fa-shield-halved" style={{ fontSize: 11 }} />
          </div>
          <div><div style={{ fontSize: 11, fontWeight: 700 }}>100%</div><div style={{ fontSize: 10, opacity: .55 }}>Confidential</div></div>
        </div>

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 10, maxWidth: 1200, width: '100%', margin: '0 auto', flex: 1, display: 'flex', alignItems: 'center', gap: 60 }}>
          {/* Left */}
          <div style={{ flex: '1 1 55%', maxWidth: 650 }}>
            <div className="h-reveal pill-badge" style={{ marginBottom: 24 }}>
              <span className="pill-dot" />
              Your HR Partner
            </div>

            <h1 className="h-reveal" style={{
              fontFamily: '"Plus Jakarta Sans",sans-serif',
              fontWeight: 900, fontSize: 'clamp(34px,5.5vw,62px)',
              color: '#2E0507', lineHeight: 1.08, marginBottom: 18,
              transitionDelay: '.1s',
            }}>
              A Clear Eye on{' '}
              <span style={{ color: '#D90429' }}>Your People</span>
              <br />and Your Workplace
            </h1>

            <p className="h-reveal" style={{
              fontSize: 'clamp(15px,1.6vw,18px)', color: '#6B2025',
              lineHeight: 1.7, maxWidth: 560, marginBottom: 14,
              transitionDelay: '.2s',
            }}>
              <strong style={{ color: '#D90429' }}>Blue Real Eye</strong> brings expert HR consulting, employee and labor relations, and staffing support to Rawalpindi's businesses — and helps professionals grow.
            </p>

            <div className="h-reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 30, transitionDelay: '.32s' }}>
              <a
                href="https://wa.me/923115700584"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ fontSize: 15, padding: '15px 30px', borderRadius: 12, textDecoration: 'none', display: 'inline-flex' }}
              >
                <i className="fab fa-whatsapp" />
                Get Started
              </a>
              <a
                href="https://wa.me/923115700584"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ fontSize: 15, padding: '14px 30px', borderRadius: 12, textDecoration: 'none', display: 'inline-flex' }}
              >
                <i className="fab fa-whatsapp" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Coral accent line */}
            <div className="h-reveal" style={{ marginTop: 40, display: 'flex', alignItems: 'center', gap: 12, transitionDelay: '.42s' }}>
              <div style={{ width: 40, height: 3, borderRadius: 99, background: '#EF233C' }} />
              <span style={{ fontSize: 12, color: '#6B2025', fontWeight: 600, letterSpacing: '.05em', textTransform: 'uppercase' }}>
                Al Noor Market, Ashiana Chowk, Westridge III, Rawalpindi
              </span>
            </div>
          </div>

          {/* Right - Hero image */}
          <div className="h-reveal" style={{ flex: '1 1 45%', maxWidth: 520, transitionDelay: '.2s', position: 'relative' }}>
            <div className="img-zoom-wrap" style={{
              borderRadius: 20,
              boxShadow: '0 20px 60px rgba(217,4,41,.15), 0 8px 24px rgba(0,0,0,.06)',
              position: 'relative',
            }}>
              <img
                src="/images/hero-team.jpg"
                alt="Blue Real Eye HR team in consultation"
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 20, aspectRatio: '4/3', objectFit: 'cover' }}
                loading="eager"
                onError={(e) => { e.target.src = '/images/fallback.svg'; }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}