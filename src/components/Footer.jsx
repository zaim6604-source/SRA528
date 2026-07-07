const serviceLinks = [
  'Overseas Employment',
  'Visa Processing',
  'Recruitment Solutions',
  'Employer Services',
];

const phones = ['051-4853259', '0333-3664912', '0347-0111494', '0337-9204202', '0332-5356206'];

const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const quickLinks = [
  { l: 'Home',     id: 'home'     },
  { l: 'About',    id: 'about'    },
  { l: 'Services', id: 'services' },
  { l: 'Contact',  id: 'contact'  },
];

export default function Footer() {
  return (
    <>
      <style>{`
        .ft { background:#F5F5F5; border-top:1px solid #e8e8f0; }
        .ft-top { background:linear-gradient(135deg,#39FF14,#00FFEF); }
        .ft-top-inner { max-width:1200px;margin:0 auto;padding:48px 24px;display:grid;grid-template-columns:1fr auto;align-items:center;gap:24px; }
        @media(max-width:640px){ .ft-top-inner{grid-template-columns:1fr;text-align:center} }
        .ft-top-title { font-weight:900;font-size:clamp(20px,2.5vw,26px);color:#000;margin-bottom:6px; }
        .ft-top-sub { font-size:14px;color:rgba(0,0,0,.55);font-weight:500; }
        .ft-top-btn { display:inline-flex;align-items:center;gap:8px;background:#000;color:#39FF14;font-weight:800;font-size:14px;padding:13px 26px;border-radius:12px;border:none;cursor:pointer;white-space:nowrap;transition:transform .2s,box-shadow .2s; }
        .ft-top-btn:hover { transform:translateY(-2px);box-shadow:0 8px 24px rgba(0,0,0,.2); }
        .ft-body { max-width:1200px;margin:0 auto;padding:56px 24px;display:grid;grid-template-columns:1.6fr 1fr 1fr 1.3fr;gap:40px; }
        @media(max-width:900px){ .ft-body{grid-template-columns:1fr 1fr;gap:32px} }
        @media(max-width:560px){ .ft-body{grid-template-columns:1fr} }
        .ft-col-title { font-size:11px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:#999;margin-bottom:20px;display:flex;align-items:center;gap:8px; }
        .ft-col-title::before { content:'';width:20px;height:2px;border-radius:99px;background:#39FF14; }
        .ft-link { display:block;color:#777;font-size:14px;margin-bottom:10px;cursor:pointer;background:none;border:none;text-align:left;padding:0;transition:color .2s; }
        .ft-link:hover { color:#39FF14; }
        .ft-phone-link { display:block;color:#777;font-size:13px;margin-bottom:7px;text-decoration:none;transition:color .2s; }
        .ft-phone-link:hover { color:#39FF14; }
        .ft-addr { font-size:13px;line-height:1.8;color:#777; }
        .ft-logo { display:flex;align-items:center;gap:12px;margin-bottom:20px; }
        .ft-logo-icon { width:44px;height:44px;border-radius:12px;background:#39FF14;display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 4px 14px rgba(57,255,20,.25); }
        .ft-logo-name { font-weight:900;font-size:16px;color:#1a1a2e;line-height:1.2; }
        .ft-logo-sub  { font-size:11px;font-weight:600;color:#00FFEF;letter-spacing:.06em; }
        .ft-tagline { font-size:14px;color:#777;line-height:1.8;margin-bottom:16px; }
        .ft-badge { display:inline-flex;align-items:center;gap:8px;background:rgba(57,255,20,.08);border:1px solid rgba(57,255,20,.2);border-radius:10px;padding:10px 14px;margin-bottom:20px; }
        .ft-soc { display:flex;gap:10px; }
        .ft-soc-btn { width:38px;height:38px;border-radius:10px;border:1px solid #ddd;display:flex;align-items:center;justify-content:center;text-decoration:none;transition:all .2s;background:#fff; }
        .ft-soc-btn:hover { border-color:#39FF14;transform:translateY(-2px);box-shadow:0 4px 12px rgba(57,255,20,.12); }
        .ft-bottom { border-top:1px solid #e0e0f0;padding:20px 24px; }
        .ft-bottom-inner { max-width:1200px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px; }
        .ft-bottom-copy { font-size:13px;color:#999; }
      `}</style>

      <footer className="ft">

        {/* CTA strip */}
        <div className="ft-top">
          <div className="ft-top-inner">
            <div>
              <div className="ft-top-title">Ready to Work Abroad?</div>
              <div className="ft-top-sub">Contact Al-Amal Company today — your global career starts here.</div>
            </div>
            <button className="ft-top-btn" onClick={() => go('contact')}>
              Get In Touch
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>

        {/* Main body */}
        <div className="ft-body">

          {/* Brand */}
          <div>
            <div className="ft-logo">
              <div className="ft-logo-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
              </div>
              <div>
                <div className="ft-logo-name">Al-Amal Company</div>
                <div className="ft-logo-sub">License 0056 / RWP</div>
              </div>
            </div>
            <p className="ft-tagline">
              Pakistan's trusted overseas employment agency connecting skilled professionals with global opportunities since 2005.
            </p>
            <div className="ft-badge">
              <span style={{fontSize:15}}>🏛️</span>
              <span style={{fontSize:13,fontWeight:600,color:'#39FF14'}}>Govt. Licensed · License No. 0056 / RWP</span>
            </div>
            <div className="ft-soc">
              <a href="https://www.facebook.com/alamalco/" target="_blank" rel="noopener noreferrer" className="ft-soc-btn" aria-label="Facebook">
                <svg width="16" height="16" fill="#39FF14" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://wa.me/923333664912" target="_blank" rel="noopener noreferrer" className="ft-soc-btn" aria-label="WhatsApp">
                <svg width="16" height="16" fill="#00FFEF" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              </a>
              <a href="tel:0514853259" className="ft-soc-btn" aria-label="Phone">
                <svg width="16" height="16" fill="none" stroke="#39FF14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.06 2.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v2z"/></svg>
              </a>
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
            {serviceLinks.map(s => (
              <button key={s} className="ft-link" onClick={() => go('services')}>{s}</button>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div className="ft-col-title">Contact Info</div>
            <p className="ft-addr" style={{marginBottom:18}}>
              H-132, D Block, Satellite Town<br/>
              6th Road, Near Total Petrol Pump<br/>
              Rawalpindi, Punjab, Pakistan
            </p>
            <div style={{marginBottom:6,fontSize:12,fontWeight:700,letterSpacing:'.06em',textTransform:'uppercase',color:'#999'}}>Phones</div>
            {phones.map(p => (
              <a key={p} href={`tel:${p.replace(/-/g,'')}`} className="ft-phone-link">{p}</a>
            ))}
            <div style={{marginTop:14}}>
              <a href="https://www.facebook.com/alamalco/" target="_blank" rel="noopener noreferrer" className="ft-phone-link" style={{display:'flex',alignItems:'center',gap:6}}>
                <svg width="13" height="13" fill="#39FF14" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                alamalco
              </a>
            </div>
            <div style={{marginTop:14,fontSize:12,color:'#999'}}>
              Mon–Sat: 9:00 AM – 6:00 PM
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="ft-bottom">
          <div className="ft-bottom-inner">
            <span className="ft-bottom-copy">
              © {new Date().getFullYear()} Al-Amal Company. All rights reserved. License No. 0056 / RWP
            </span>
            <span className="ft-bottom-copy">Rawalpindi, Punjab, Pakistan</span>
          </div>
        </div>
      </footer>
    </>
  );
}