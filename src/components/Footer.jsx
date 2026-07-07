const quickLinks = [
  { l: 'Home', id: 'home' },
  { l: 'About', id: 'about' },
  { l: 'Services', id: 'services' },
  { l: 'Expertise', id: 'expertise' },
  { l: 'Process', id: 'process' },
  { l: 'FAQs', id: 'faqs' },
  { l: 'Contact', id: 'contact' },
];

const services = [
  'HR Consulting',
  'Employee & Labor Relations',
  'Recruitment & Staffing',
  'Payroll & Benefits',
  'HR Policy & Compliance',
  'Training & Development',
  'Performance Management',
  'Outsourced HR',
];

const socials = [
  { icon: 'fab fa-facebook-f', url: 'https://www.facebook.com/Bluerealeye', label: 'Facebook' },
  { icon: 'fab fa-instagram', url: 'https://www.instagram.com/bluerealeye', label: 'Instagram' },
  { icon: 'fab fa-youtube', url: 'https://www.youtube.com/@bluerealeyeinfo', label: 'YouTube' },
  { icon: 'fab fa-tiktok', url: 'https://www.tiktok.com/@Bluerealeyepak', label: 'TikTok' },
];

const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function Footer() {
  return (
    <>
      <style>{`
        .ft{background:#BF0225;color:#fff}
        .ft-body{max-width:1200px;margin:0 auto;padding:56px 24px;display:grid;grid-template-columns:1.6fr 1fr 1fr 1.3fr;gap:40px}
        @media(max-width:900px){.ft-body{grid-template-columns:1fr 1fr;gap:32px}}
        @media(max-width:560px){.ft-body{grid-template-columns:1fr}}
        .ft-col-title{font-size:11px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:#FF6B6B;margin-bottom:20px;display:flex;align-items:center;gap:8px}
        .ft-col-title::before{content:'';width:20px;height:2px;border-radius:99px;background:#FFD60A}
        .ft-link{display:block;color:rgba(255,255,255,.7);font-size:13px;margin-bottom:8px;cursor:pointer;background:none;border:none;text-align:left;padding:0;transition:color .2s;font-family:"Inter",sans-serif}
        .ft-link:hover{color:#FFD60A}
        .ft-addr{font-size:13px;line-height:1.8;color:rgba(255,255,255,.7);margin-bottom:16px}
        .ft-logo-name{font-family:"Plus Jakarta Sans",sans-serif;font-weight:900;font-size:18px;color:#fff;line-height:1.2;margin-bottom:2px}
        .ft-logo-sub{font-size:11px;font-weight:600;color:#FF6B6B;letter-spacing:.06em}
        .ft-tagline{font-size:13px;color:rgba(255,255,255,.7);line-height:1.8;margin-bottom:20px}
        .ft-phone{display:flex;align-items:center;gap:8px;color:rgba(255,255,255,.7);font-size:13px;text-decoration:none;margin-bottom:6px;transition:color .2s}
        .ft-phone:hover{color:#FFD60A}
        .ft-soc{display:flex;gap:10px;margin-top:16px}
        .ft-soc-btn{width:38px;height:38px;border-radius:10px;background:rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;text-decoration:none;transition:all .2s;color:rgba(255,255,255,.7);font-size:15px}
        .ft-soc-btn:hover{background:#FFD60A;color:#2E0507;transform:translateY(-2px)}
        .ft-bottom{border-top:1px solid rgba(255,255,255,.1);padding:20px 24px}
        .ft-bottom-inner{max-width:1200px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px}
        .ft-bottom-copy{font-size:12px;color:rgba(255,255,255,.5)}
      `}</style>

      <footer className="ft">
        {/* Main body */}
        <div className="ft-body">
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{
                width: 44, height: 44, borderRadius: 10,
                background: 'linear-gradient(135deg, #FFD60A, #FF6B6B)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, boxShadow: '0 4px 12px rgba(255,214,10,.3)',
              }}>
                <i className="fas fa-eye" style={{ color: '#2E0507', fontSize: 18 }} />
              </div>
              <div>
                <div className="ft-logo-name">Blue Real Eye</div>
                <div className="ft-logo-sub">HR Consultants, Rawalpindi</div>
              </div>
            </div>
            <p className="ft-tagline">
              Your trusted HR partner in Westridge, Rawalpindi — providing expert HR consulting, employee and labor relations, and staffing solutions for businesses and professionals.
            </p>
            <div className="ft-soc">
              {socials.map(s => (
                <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="ft-soc-btn" aria-label={s.label}>
                  <i className={s.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div className="ft-col-title">Quick Links</div>
            {quickLinks.map(({ l, id }) => (
              <button key={id} className="ft-link" onClick={() => go(id)}>{l}</button>
            ))}
          </div>

          {/* Services */}
          <div>
            <div className="ft-col-title">Our Services</div>
            {services.map(s => (
              <button key={s} className="ft-link" onClick={() => go('services')}>{s}</button>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div className="ft-col-title">Contact Info</div>
            <p className="ft-addr">
              Al Noor Market, Ashiana Chowk<br />
              Westridge III, Allahabad<br />
              Rawalpindi, 46000
            </p>
            <a href="https://wa.me/923115700584" target="_blank" rel="noopener noreferrer" className="ft-phone">
              <i className="fab fa-whatsapp" style={{ color: '#FFD60A', fontSize: 14 }} /> 0311-5700584
            </a>
            <a href="mailto:Bluerealeyepak@gmail.com" className="ft-phone">
              <i className="far fa-envelope" style={{ color: '#FF6B6B', fontSize: 12 }} /> Bluerealeyepak@gmail.com
            </a>
            <div style={{ marginTop: 16, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {socials.map(s => (
                <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: 12, color: 'rgba(255,255,255,.6)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4, transition: 'color .2s' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#FFD60A'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,.6)'; }}>
                  <i className={s.icon} style={{ fontSize: 11 }} /> {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="ft-bottom">
          <div className="ft-bottom-inner">
            <span className="ft-bottom-copy">
              &copy; {new Date().getFullYear()} Blue Real Eye. All rights reserved.
            </span>
            <span className="ft-bottom-copy">Westridge, Rawalpindi, Pakistan</span>
          </div>
        </div>
      </footer>
    </>
  );
}