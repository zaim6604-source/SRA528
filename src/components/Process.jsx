import useInView from '../hooks/useInView';

const steps = [
  { num: '01', title: 'Consultation & Assessment', desc: 'We start with a deep conversation to understand your HR needs, challenges, and goals.' },
  { num: '02', title: 'HR Audit & Planning', desc: 'A thorough review of your current HR practices, policies, and compliance — followed by a strategic plan.' },
  { num: '03', title: 'Solution Design', desc: 'We design tailored HR solutions — from recruitment frameworks to policy handbooks and training programs.' },
  { num: '04', title: 'Implementation', desc: 'Our team works alongside yours to implement solutions smoothly, with minimal disruption.' },
  { num: '05', title: 'Ongoing Support & Review', desc: 'Continuous support, periodic reviews, and adjustments to ensure your HR practices remain effective.' },
];

export default function Process() {
  const [ref, inView] = useInView();

  return (
    <>
      <style>{`
        .pr-section{padding:96px 24px;position:relative;overflow:hidden}
        .pr-inner{max-width:1200px;margin:0 auto;position:relative;z-index:10}
        .pr-steps{display:grid;grid-template-columns:repeat(5,1fr);gap:0;position:relative;align-items:start}
        @media(max-width:1024px){.pr-steps{grid-template-columns:repeat(3,1fr);gap:16px}}
        @media(max-width:640px){.pr-steps{grid-template-columns:1fr;max-width:400px;margin:0 auto}}
        .pr-step{text-align:center;padding:32px 16px;position:relative}
        .pr-chevron{display:flex;align-items:center;position:absolute;right:-12px;top:50%;transform:translateY(-50%);color:#FFD60A;font-size:20px;opacity:.9;z-index:5}
        @media(max-width:1024px){.pr-chevron{display:none}}
        .pr-step-num{width:52px;height:52px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:"Plus Jakarta Sans",sans-serif;font-weight:900;font-size:20px;margin:0 auto 16px;box-shadow:0 4px 16px rgba(0,0,0,.15)}
        .pr-step-title{font-family:"Plus Jakarta Sans",sans-serif;font-weight:800;font-size:15px;margin-bottom:8px;color:#fff}
        .pr-step-desc{font-size:13px;line-height:1.6;color:rgba(255,255,255,.85)}
      `}</style>

      <section id="process" className="pr-section" ref={ref}>
        {/* Diagonal background */}
        <div className="section-diagonal" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(135deg, #D90429 0%, #EF233C 100%)',
            transform: 'skewY(-2deg)',
            transformOrigin: 'top left',
            width: '100%', height: '120%', top: '-10%',
          }} />
        </div>

        {/* Wavy divider bottom */}
        <div className="wave-divider" style={{ position: 'absolute', bottom: -1, left: 0, right: 0, zIndex: 5 }}>
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ width: '100%', height: '50px' }}>
            <path d="M0,30 C360,0 720,60 1440,20 L1440,60 L0,60 Z" fill="#FFF0F0" />
          </svg>
        </div>

        <div className="pr-inner">
          <div style={{ textAlign: 'center', marginBottom: 48 }} className={`reveal${inView ? ' show' : ''}`}>
            <div className="pill-badge" style={{ margin: '0 auto 18px', background: 'rgba(255,255,255,.15)', borderColor: 'rgba(255,255,255,.3)', color: '#fff' }}>
              <span className="pill-dot" style={{ background: '#FFD60A' }} /> How It Works
            </div>
            <h2 style={{ fontFamily: '"Plus Jakarta Sans",sans-serif', fontWeight: 900, fontSize: 'clamp(28px,3.5vw,42px)', color: '#fff', marginBottom: 14 }}>
              Our <span style={{ color: '#FFD60A' }}>Process</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,.8)', fontSize: 15, maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
              A structured, proven approach to delivering HR solutions that make a real difference.
            </p>
          </div>

          <div className="pr-steps">
            {steps.map((p, i) => (
              <div key={i} className={`pr-step reveal${inView ? ' show' : ''}`} style={{ transitionDelay: `${i * 0.1}s` }}>
                {i < steps.length - 1 && (
                  <div className="pr-chevron"><i className="fa-solid fa-chevron-right"></i></div>
                )}
                <div className="pr-step-num" style={{
                  background: i % 2 === 0 ? '#FFD60A' : '#fff',
                  color: i % 2 === 0 ? '#2E0507' : '#D90429',
                }}>
                  {p.num}
                </div>
                <div className="pr-step-title">{p.title}</div>
                <div className="pr-step-desc">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}