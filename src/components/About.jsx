import useInView from '../hooks/useInView';

export default function About() {
  const [ref, inView] = useInView();

  return (
    <>
      <style>{`
        .ab-section{background:#fff;padding:96px 24px;position:relative}
        .ab-inner{max-width:1200px;margin:0 auto}
        .ab-grid{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center}
        @media(max-width:900px){.ab-grid{grid-template-columns:1fr;gap:48px}}
        .ab-img{width:100%;height:460px;object-fit:cover;border-radius:24px;display:block;box-shadow:0 8px 32px rgba(217,4,41,.1)}
        .ab-img-badge{position:absolute;background:#fff;border:1px solid rgba(217,4,41,.12);border-radius:16px;padding:14px 20px;box-shadow:0 8px 32px rgba(0,0,0,.06)}
        .ab-badge-n{font-family:"Plus Jakarta Sans",sans-serif;font-weight:900;font-size:26px;color:#D90429;line-height:1}
        .ab-badge-l{font-size:12px;color:#6B2025;font-weight:600;margin-top:3px}
        .ab-title{font-family:"Plus Jakarta Sans",sans-serif;font-weight:900;font-size:clamp(26px,3.2vw,38px);color:#2E0507;margin-bottom:16px}
        .ab-body{font-size:15px;line-height:1.8;color:#6B2025;margin-bottom:14px}
        .ab-chip{display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:600;padding:6px 14px;border-radius:999px;background:#FFF0F0;color:#D90429;border:1px solid rgba(217,4,41,.12)}
      `}</style>

      <section id="about" className="ab-section" ref={ref}>
        <div className="ab-inner">
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 64 }} className={`reveal${inView ? ' show' : ''}`}>
            <div className="pill-badge">
              <span className="pill-dot" />
              Who We Are
            </div>
            <h2 style={{ fontFamily: '"Plus Jakarta Sans",sans-serif', fontWeight: 900, fontSize: 'clamp(30px,4vw,46px)', color: '#2E0507', marginBottom: 16 }}>
              About <span style={{ color: '#D90429' }}>Blue Real Eye</span>
            </h2>
            <p style={{ color: '#6B2025', fontSize: 16, maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
              Your trusted HR partner based in Westridge, Rawalpindi — serving businesses and professionals with expert human resources solutions.
            </p>
          </div>

          {/* Two column */}
          <div className="ab-grid">
            {/* Image */}
            <div className={`img-zoom-wrap reveal-l${inView ? ' show' : ''}`} style={{ borderRadius: 24, position: 'relative' }}>
              <img
                src="/images/about.jpg"
                alt="Blue Real Eye office"
                className="ab-img"
                onError={(e) => { e.target.src = '/images/fallback.svg'; }}
                loading="lazy"
              />
              <div className="ab-img-badge float" style={{ top: -20, right: -20 }}>
                <div className="ab-badge-n">10+</div>
                <div className="ab-badge-l">Years Experience</div>
              </div>
              <div className="ab-img-badge float" style={{ bottom: -20, left: -20, animationDelay: '2s' }}>
                <div className="ab-badge-n">200+</div>
                <div className="ab-badge-l">Clients Served</div>
              </div>
            </div>

            {/* Text */}
            <div className={`reveal-r${inView ? ' show' : ''}`}>
              <h3 className="ab-title">
                Experienced HR Consultant for<br />
                <span style={{ color: '#D90429' }}>Rawalpindi's Businesses</span>
              </h3>
              <p className="ab-body">
                <strong>Blue Real Eye</strong> is an HR consultant experienced in human resources, employee and labor relations. We partner with businesses and professionals in Rawalpindi to build stronger workplaces, navigate complex employment regulations, and achieve organizational success.
              </p>
              <p className="ab-body">
                Based in Westridge, Rawalpindi, we offer comprehensive HR consulting services — from recruitment and staffing to policy development, compliance, and training. Our approach is practical, confidential, and results-driven.
              </p>

              {/* Trust chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 24 }}>
                <span className="ab-chip"><i className="fas fa-shield-halved" style={{ fontSize: 11 }} /> Experienced</span>
                <span className="ab-chip"><i className="fas fa-lock" style={{ fontSize: 11 }} /> Confidential</span>
                <span className="ab-chip"><i className="fas fa-bullseye" style={{ fontSize: 11 }} /> Results-Driven</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}