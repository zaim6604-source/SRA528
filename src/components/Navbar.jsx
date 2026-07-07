import { useState, useEffect } from 'react';
import { Building2 } from 'lucide-react';

const links = [
  { label: 'Home',     id: 'home'     },
  { label: 'About',    id: 'about'    },
  { label: 'Services', id: 'services' },
  { label: 'Contact',  id: 'contact'  },
];

export default function Navbar() {
  const [solid,  setSolid]  = useState(false);
  const [open,   setOpen]   = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const fn = () => {
      setSolid(window.scrollY > 50);
      const ids = ['home','about','services','contact'];
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 130) { setActive(ids[i]); break; }
      }
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = (id) => { setOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); };

  return (
    <>
      <style>{`
        .nb-wrap { position:fixed;top:0;left:0;right:0;z-index:9999;transition:background .35s,box-shadow .35s,backdrop-filter .35s; }
        .nb-wrap.solid { background:rgba(255,255,255,.92);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);box-shadow:0 1px 0 rgba(57,255,20,.12),0 4px 24px rgba(57,255,20,.08); }
        .nb-inner { max-width:1200px;margin:0 auto;padding:0 24px;display:flex;align-items:center;justify-content:space-between;transition:height .3s; }
        .nb-logo-name { font-weight:800;font-size:17px;line-height:1.1;transition:color .3s; }
        .nb-logo-sub  { font-size:10px;font-weight:600;letter-spacing:.07em;margin-top:2px;transition:color .3s; }
        .nb-badge { font-size:10px;font-weight:800;letter-spacing:.05em;padding:3px 9px;border-radius:99px;display:inline-flex;align-items:center;transition:all .3s; }
        .nb-links { display:flex;align-items:center;gap:4px; }
        .nb-btn   { background:none;border:none;cursor:pointer;font-weight:600;font-size:14px;padding:8px 14px;border-radius:10px;transition:all .2s;position:relative; }
        .nb-btn::after { content:'';position:absolute;bottom:4px;left:50%;transform:translateX(-50%);width:0;height:2px;border-radius:99px;background:#39FF14;transition:width .25s;box-shadow:0 0 6px #39FF14; }
        .nb-btn.on::after { width:calc(100% - 20px); }
        .nb-cta { display:inline-flex;align-items:center;gap:8px;background:#39FF14;color:#000;font-weight:800;font-size:14px;padding:10px 22px;border-radius:10px;border:none;cursor:pointer;box-shadow:0 4px 16px rgba(57,255,20,.35);transition:transform .25s,box-shadow .25s;margin-left:6px; }
        .nb-cta.outline { background:transparent;border:2px solid rgba(57,255,20,.5);color:#39FF14;box-shadow:none; }
        .nb-cta:hover { transform:translateY(-2px);box-shadow:0 8px 24px rgba(57,255,20,.5); }
        .nb-cta.outline:hover { background:rgba(57,255,20,.1);border-color:#39FF14; }
        .hbg { background:none;border:none;cursor:pointer;padding:8px;display:none; }
        .hbg-bar { display:block;height:2px;border-radius:2px;transition:all .25s; }
        .mob-menu { background:#fff;overflow:hidden;transition:max-height .35s ease,box-shadow .35s;border-bottom:1px solid rgba(57,255,20,.15); }
        @media(max-width:768px){
          .nb-links{display:none!important}
          .hbg{display:block!important}
        }
      `}</style>

      <nav className={`nb-wrap${solid ? ' solid' : ''}`}>
        <div className="nb-inner" style={{ height: solid ? 64 : 76 }}>

          {/* Logo */}
          <button onClick={() => go('home')} style={{display:'flex',alignItems:'center',gap:11,background:'none',border:'none',cursor:'pointer'}}>
            <div style={{width:42,height:42,borderRadius:12,background:'#39FF14',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 4px 14px rgba(57,255,20,.4)',flexShrink:0}}>
              <Building2 size={19} color="#000" strokeWidth={2.2} />
            </div>
            <div style={{textAlign:'left'}}>
              <div className="nb-logo-name" style={{color: solid ? '#1a1a2e' : '#1a1a2e'}}>Al-Amal Company</div>
              <div className="nb-logo-sub" style={{color: solid ? '#39FF14' : '#39FF14'}}>License 0056 / RWP</div>
            </div>
            <span
              className="nb-badge"
              style={solid
                ? {background:'rgba(57,255,20,.12)',color:'#1a1a2e',border:'1px solid rgba(57,255,20,.3)'}
                : {background:'rgba(57,255,20,.12)',color:'#1a1a2e',border:'1px solid rgba(57,255,20,.3)'}
              }
            >
              0056 / RWP
            </span>
          </button>

          {/* Desktop nav */}
          <div className="nb-links">
            {links.map(l => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className={`nb-btn ${active===l.id?'on':''}`}
                style={{
                  color: solid
                    ? (active===l.id ? '#39FF14' : '#555570')
                    : (active===l.id ? '#39FF14' : '#555570'),
                  background: solid && active===l.id ? 'rgba(57,255,20,.08)' : 'transparent',
                }}
              >
                {l.label}
              </button>
            ))}
            <button className={`nb-cta ${solid ? '' : ''}`} onClick={() => go('contact')}>
              Contact Us
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>

          {/* Hamburger */}
          <button className="hbg" onClick={() => setOpen(!open)} aria-label="Menu">
            <span className="hbg-bar" style={{width:24,background:'#1a1a2e',transform:open?'rotate(45deg) translate(5px,5px)':'none'}}/>
            <span className="hbg-bar" style={{width:open?0:18,background:'#39FF14',margin:'5px 0',opacity:open?0:1}}/>
            <span className="hbg-bar" style={{width:24,background:'#1a1a2e',transform:open?'rotate(-45deg) translate(5px,-5px)':'none'}}/>
          </button>
        </div>

        {/* Mobile dropdown */}
        <div className="mob-menu" style={{maxHeight:open?360:0,boxShadow:open?'0 8px 30px rgba(0,0,0,.08)':'none',borderTop:open?'1px solid rgba(57,255,20,.15)':'none'}}>
          <div style={{padding:'12px 20px 20px',display:'flex',flexDirection:'column',gap:4}}>
            {links.map(l => (
              <button key={l.id} onClick={() => go(l.id)} style={{
                background:active===l.id?'rgba(57,255,20,.1)':'none',border:'none',cursor:'pointer',
                textAlign:'left',padding:'12px 16px',borderRadius:10,
                fontWeight:600,fontSize:15,
                color:active===l.id?'#39FF14':'#555570',transition:'background .2s',
              }}>{l.label}</button>
            ))}
            <button onClick={() => go('contact')} className="nb-cta" style={{marginTop:8,justifyContent:'center',borderRadius:10,fontSize:15,background:'#39FF14',color:'#000'}}>
              Contact Us
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}