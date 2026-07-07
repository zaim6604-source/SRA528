import useInView from '../hooks/useInView';

const services = [
  {
    icon: 'fas fa-handshake',
    title: 'HR Consulting',
    desc: 'Strategic HR guidance for businesses of all sizes — from startup HR setup to organizational transformation.',
    bg: '#D90429',
  },
  {
    icon: 'fas fa-scale-balanced',
    title: 'Employee & Labor Relations',
    desc: 'Expert navigation of employee relations, labor law compliance, conflict resolution, and workplace mediation.',
    bg: '#EF233C',
  },
  {
    icon: 'fas fa-user-plus',
    title: 'Recruitment & Staffing',
    desc: 'End-to-end talent acquisition — sourcing, screening, interviewing, and onboarding the right candidates.',
    bg: '#FF6B6B',
  },
  {
    icon: 'fas fa-coins',
    title: 'Payroll & Benefits Management',
    desc: 'Accurate payroll processing, benefits administration, compensation planning, and payroll compliance.',
    bg: '#FFD60A',
  },
  {
    icon: 'fas fa-file-contract',
    title: 'HR Policy & Compliance',
    desc: 'Development of HR policies, employee handbooks, and compliance frameworks aligned with local labor laws.',
    bg: '#BF0225',
  },
  {
    icon: 'fas fa-chalkboard-user',
    title: 'Training & Development',
    desc: 'Customized training programs for leadership development, communication skills, compliance, and team building.',
    bg: '#D90429',
  },
  {
    icon: 'fas fa-chart-line',
    title: 'Performance Management',
    desc: 'Design and implementation of performance appraisal systems, KPIs, feedback processes, and improvement plans.',
    bg: '#EF233C',
  },
  {
    icon: 'fas fa-building',
    title: 'Outsourced HR (HR-as-a-Service)',
    desc: 'Comprehensive outsourced HR support for businesses without an in-house HR department — flexible and scalable.',
    bg: '#FF6B6B',
  },
];

export default function Services() {
  const [ref, inView] = useInView();

  return (
    <>
      <style>{`
        .sv-section{background:#FFF0F0;padding:96px 24px}
        .sv-inner{max-width:1200px;margin:0 auto}
        .sv-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
        @media(max-width:1024px){.sv-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:640px){.sv-grid{grid-template-columns:1fr;max-width:400px;margin:0 auto}}
        .sv-card{border-radius:24px;padding:32px 28px;transition:transform .3s,box-shadow .3s;display:flex;flex-direction:column}
        .sv-card:hover{transform:translateY(-6px);box-shadow:0 20px 48px rgba(0,0,0,.12)}
        .sv-card-icon{width:48px;height:48px;border-radius:14px;display:flex;align-items:center;justify-content:center;margin-bottom:18px;background:rgba(255,255,255,.25);font-size:22px;color:#fff}
        .sv-card-title{font-family:"Plus Jakarta Sans",sans-serif;font-weight:800;font-size:18px;color:#fff;margin-bottom:10px}
        .sv-card-desc{font-size:14px;line-height:1.7;color:rgba(255,255,255,.85);flex:1}
      `}</style>

      <section id="services" className="sv-section" ref={ref}>
        <div className="sv-inner">
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 60 }} className={`reveal${inView ? ' show' : ''}`}>
            <div className="pill-badge">
              <span className="pill-dot" />
              Our Services
            </div>
            <h2 style={{ fontFamily: '"Plus Jakarta Sans",sans-serif', fontWeight: 900, fontSize: 'clamp(30px,4vw,46px)', color: '#2E0507', marginBottom: 16 }}>
              Comprehensive <span style={{ color: '#D90429' }}>HR Solutions</span>
            </h2>
            <p style={{ color: '#6B2025', fontSize: 16, maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
              From strategic consulting to day-to-day HR management — we provide the full spectrum of human resources services.
            </p>
          </div>

          {/* Masonry-like grid */}
          <div className="sv-grid">
            {services.map((s, i) => (
              <div
                key={i}
                className={`sv-card reveal${inView ? ' show' : ''}`}
                style={{
                  background: s.bg,
                  transitionDelay: `${i * 0.08}s`,
                  gridRow: i === 3 ? 'span 1' : 'auto',
                  transform: i % 2 === 0 ? 'translateY(0)' : 'translateY(12px)',
                }}
              >
                <div className="sv-card-icon">
                  <i className={s.icon} />
                </div>
                <div className="sv-card-title">{s.title}</div>
                <div className="sv-card-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}