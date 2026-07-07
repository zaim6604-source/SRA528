import { useState, useEffect } from 'react';
import useInView from '../hooks/useInView';

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Expertise', id: 'expertise' },
  { label: 'Process', id: 'process' },
  { label: 'FAQs', id: 'faqs' },
  { label: 'Contact', id: 'contact' },
];

const socials = [
  { icon: 'fab fa-facebook-f', url: 'https://www.facebook.com/Bluerealeye', label: 'Facebook' },
  { icon: 'fab fa-instagram', url: 'https://www.instagram.com/bluerealeye', label: 'Instagram' },
  { icon: 'fab fa-youtube', url: 'https://www.youtube.com/@bluerealeyeinfo', label: 'YouTube' },
  { icon: 'fab fa-tiktok', url: 'https://www.tiktok.com/@Bluerealeyepak', label: 'TikTok' },
];

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const fn = () => {
      setSolid(window.scrollY > 50);
      const ids = navLinks.map(l => l.id);
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 150) { setActive(ids[i]); break; }
      }
    };
    window.addEventListener('scroll', fn, { passive: true });
    fn();
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <style>{`
        .nb-wrap{position:fixed;top:0;left:0;right:0;z-index:9999;transition:background .35s,box-shadow .35s,backdrop-filter .35s}
        .nb-wrap.solid{background:rgba(255,255,255,.93);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);box-shadow:0 1px 0 rgba(217,4,41,.08),0 4px 24px rgba(217,4,41,.06)}
        .nb-inner{max-width:1200px;margin:0 auto;padding:0 24px;display:flex;align-items:center;justify-content:space-between;transition:height .3s}
        .nb-links{display:flex;align-items:center;gap:2px}
        .nb-btn{background:none;border:none;cursor:pointer;font-weight:600;font-size:13px;padding:7px 12px;border-radius:8px;transition:all .2s;position:relative;font-family:"Inter",sans-serif}
        .nb-btn::after{content:'';position:absolute;bottom:2px;left:50%;transform:translateX(-50%);width:0;height:2px;border-radius:99px;background:#D90429;transition:width .25s}
        .nb-btn.on::after{width:calc(100% - 18px)}
        .nb-cta{display:inline-flex;align-items:center;gap:8px;background:#FFD60A;color:#2E0507;font-weight:800;font-size:13px;padding:9px 18px;border-radius:10px;border:none;cursor:pointer;box-shadow:0 4px 16px rgba(255,214,10,.35);transition:transform .25s,box-shadow .25s;margin-left:6px;font-family:"Plus Jakarta Sans",sans-serif;text-decoration:none;white-space:nowrap}
        .nb-cta:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(255,214,10,.5)}
        .nb-social{display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:50%;color:#6B2025;transition:all .2s;font-size:14px;margin-left:2px}
        .nb-social:hover{background:rgba(217,4,41,.08);color:#D90429}
        .hbg{background:none;border:none;cursor:pointer;padding:8px;display:none}
        .hbg-bar{display:block;height:2px;border-radius:2px;transition:all .25s}
        .mob-menu{background:#fff;overflow:hidden;transition:max-height .35s ease,box-shadow .35s;border-bottom:1px solid rgba(217,4,41,.1)}
        @media(max-width:900px){
          .nb-links,.nb-social{display:none!important}
          .hbg{display:block!important}
        }
      `}</style>

      <nav className={`nb-wrap${solid ? ' solid' : ''}`}>
        <div className="nb-inner" style={{ height: solid ? 64 : 76 }}>
          {/* Logo */}
          <button onClick={() => go('home')} style={{ display: 'flex', alignItems: 'center', gap: 11, background: 'none', border: 'none', cursor: 'pointer' }}>
            <div style={{
              width: 40, height: 40, borderRadius: 10,
              background: 'linear-gradient(135deg, #D90429, #EF233C)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0, boxShadow: '0 4px 12px rgba(217,4,41,.3)',
            }}>
              <i className="fas fa-eye" style={{ color: '#fff', fontSize: 16 }} />
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontWeight: 800, fontSize: 17, fontFamily: '"Plus Jakarta Sans",sans-serif', color: solid ? '#2E0507' : '#2E0507', lineHeight: 1.1 }}>
                Blue Real Eye
              </div>
              <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: '.06em', color: '#D90429', marginTop: 1 }}>
                HR Consultants, Rawalpindi
              </div>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="nb-links">
            {navLinks.map(l => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className={`nb-btn ${active === l.id ? 'on' : ''}`}
                style={{ color: active === l.id ? '#D90429' : '#6B2025' }}
              >
                {l.label}
              </button>
            ))}
            {socials.map(s => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="nb-social"
                aria-label={s.label}
              >
                <i className={s.icon} />
              </a>
            ))}
            <a
              href="https://wa.me/923115700584"
              target="_blank"
              rel="noopener noreferrer"
              className="nb-cta"
            >
              <i className="fab fa-whatsapp" />
              Get Started
            </a>
          </div>

          {/* Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <button className="hbg" onClick={() => setOpen(!open)} aria-label="Menu">
              <span className="hbg-bar" style={{ width: 24, background: '#2E0507', transform: open ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
              <span className="hbg-bar" style={{ width: open ? 0 : 18, background: '#D90429', margin: '5px 0', opacity: open ? 0 : 1 }} />
              <span className="hbg-bar" style={{ width: 24, background: '#2E0507', transform: open ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div className="mob-menu" style={{ maxHeight: open ? 500 : 0, boxShadow: open ? '0 8px 30px rgba(0,0,0,.08)' : 'none', borderTop: open ? '1px solid rgba(217,4,41,.1)' : 'none' }}>
          <div style={{ padding: '12px 20px 20px', display: 'flex', flexDirection: 'column', gap: 3 }}>
            {navLinks.map(l => (
              <button key={l.id} onClick={() => go(l.id)} style={{
                background: active === l.id ? 'rgba(217,4,41,.06)' : 'none',
                border: 'none', cursor: 'pointer', textAlign: 'left', padding: '11px 16px',
                borderRadius: 8, fontWeight: 600, fontSize: 14,
                color: active === l.id ? '#D90429' : '#6B2025', transition: 'background .2s',
                fontFamily: '"Inter",sans-serif',
              }}>{l.label}</button>
            ))}
            <div style={{ display: 'flex', gap: 8, padding: '8px 4px', marginTop: 4 }}>
              {socials.map(s => (
                <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"
                  style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(217,4,41,.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6B2025', fontSize: 15 }}>
                  <i className={s.icon} />
                </a>
              ))}
            </div>
            <a href="https://wa.me/923115700584" target="_blank" rel="noopener noreferrer"
              className="nb-cta" style={{ marginTop: 8, justifyContent: 'center', borderRadius: 10, fontSize: 14, textDecoration: 'none', display: 'flex' }}>
              <i className="fab fa-whatsapp" /> Get Started
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}