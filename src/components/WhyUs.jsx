import useInView from '../hooks/useInView';

const features = [
  {
    icon: 'fas fa-brain',
    title: 'Deep HR Experience',
    desc: 'Over a decade of hands-on HR consulting across multiple industries — we bring real-world expertise, not textbook theory.',
    color: '#D90429',
  },
  {
    icon: 'fas fa-shield-halved',
    title: 'Confidential & Compliant',
    desc: 'Every engagement is handled with the utmost confidentiality and full compliance with Pakistani labor laws and regulations.',
    color: '#EF233C',
  },
  {
    icon: 'fas fa-wand-magic-sparkles',
    title: 'Tailored Solutions',
    desc: 'No cookie-cutter approaches. We design HR strategies and solutions that fit your specific business size, culture, and goals.',
    color: '#FF6B6B',
  },
  {
    icon: 'fas fa-user-gear',
    title: 'Dedicated Consultant',
    desc: 'You get a dedicated HR consultant who knows your business, understands your challenges, and is always available when you need them.',
    color: '#FFD60A',
  },
];

export default function WhyUs() {
  const [ref, inView] = useInView();

  return (
    <>
      <style>{`
        .wu-section{background:#FFF0F0;padding:96px 24px}
        .wu-inner{max-width:1200px;margin:0 auto}
        .wu-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px}
        @media(max-width:1024px){.wu-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:560px){.wu-grid{grid-template-columns:1fr;max-width:400px;margin:0 auto}}
        .wu-card{background:#fff;border-radius:20px;padding:32px 24px;border:1px solid rgba(217,4,41,.06);transition:transform .3s,box-shadow .3s,border-color .3s}
        .wu-card:hover{transform:translateY(-6px);border-color:var(--wc,rgba(217,4,41,.2));box-shadow:0 20px 48px rgba(217,4,41,.06)}
        .wu-icon{width:52px;height:52px;border-radius:14px;display:flex;align-items:center;justify-content:center;margin-bottom:20px;font-size:22px}
        .wu-title{font-family:"Plus Jakarta Sans",sans-serif;font-weight:800;font-size:17px;color:#2E0507;margin-bottom:10px}
        .wu-desc{font-size:14px;line-height:1.7;color:#6B2025}
      `}</style>

      <section className="wu-section" ref={ref}>
        <div className="wu-inner">
          <div style={{ textAlign: 'center', marginBottom: 56 }} className={`reveal${inView ? ' show' : ''}`}>
            <div className="pill-badge">
              <span className="pill-dot" />
              Why Blue Real Eye
            </div>
            <h2 style={{ fontFamily: '"Plus Jakarta Sans",sans-serif', fontWeight: 900, fontSize: 'clamp(30px,4vw,46px)', color: '#2E0507', marginBottom: 16 }}>
              Why Choose <span style={{ color: '#D90429' }}>Us</span>
            </h2>
            <p style={{ color: '#6B2025', fontSize: 16, maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
              What sets Blue Real Eye apart as your HR partner in Rawalpindi.
            </p>
          </div>

          <div className="wu-grid">
            {features.map((f, i) => (
              <div
                key={i}
                className={`wu-card reveal${inView ? ' show' : ''}`}
                style={{ '--wc': f.color, transitionDelay: `${i * 0.1}s` }}
              >
                <div className="wu-icon" style={{ background: `${f.color}0d`, color: f.color }}>
                  <i className={f.icon} />
                </div>
                <div className="wu-title">{f.title}</div>
                <div className="wu-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}