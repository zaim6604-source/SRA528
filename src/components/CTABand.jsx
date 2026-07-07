import useInView from '../hooks/useInView';

export default function CTABand() {
  const [ref, inView] = useInView();

  return (
    <>
      <style>{`
        .cta-band{background:linear-gradient(135deg,#D90429 0%,#EF233C 100%);padding:64px 24px;text-align:center;position:relative;overflow:hidden}
        .cta-inner{max-width:800px;margin:0 auto;position:relative;z-index:2}
        .cta-headline{font-family:"Plus Jakarta Sans",sans-serif;font-weight:900;font-size:clamp(24px,3vw,38px);color:#fff;margin-bottom:10px}
        .cta-sub{font-size:15px;color:rgba(255,255,255,.85);margin-bottom:28px;font-family:"Inter",sans-serif}
        .cta-btn-wrap{display:flex;flex-wrap:wrap;gap:14px;justify-content:center}
        .cta-btn{display:inline-flex;align-items:center;gap:10px;padding:14px 32px;border-radius:12px;font-weight:800;font-size:15px;border:none;cursor:pointer;text-decoration:none;transition:all .25s;font-family:"Plus Jakarta Sans",sans-serif}
        .cta-btn.solid{background:#FFD60A;color:#2E0507;box-shadow:0 4px 20px rgba(255,214,10,.35)}
        .cta-btn.solid:hover{transform:translateY(-2px);box-shadow:0 8px 30px rgba(255,214,10,.5)}
        .cta-btn.outline{background:transparent;color:#fff;border:2px solid rgba(255,255,255,.4)}
        .cta-btn.outline:hover{background:rgba(255,255,255,.1);border-color:#fff;transform:translateY(-2px)}
        .cta-circle{position:absolute;border-radius:50%;background:rgba(255,255,255,.03);pointer-events:none}
      `}</style>

      <div className="cta-band" ref={ref}>
        <div className="cta-circle" style={{ width: 300, height: 300, top: '-100px', right: '-50px' }} />
        <div className="cta-circle" style={{ width: 200, height: 200, bottom: '-60px', left: '-30px' }} />
        <div className={`cta-inner reveal${inView ? ' show' : ''}`}>
          <div className="cta-headline">Ready to Strengthen Your Workplace? Let's Talk.</div>
          <div className="cta-sub">Get in touch with Blue Real Eye for a free initial consultation.</div>
          <div className="cta-btn-wrap">
            <a href="https://wa.me/923115700584" target="_blank" rel="noopener noreferrer" className="cta-btn solid">
              <i className="fab fa-whatsapp" /> Get Started
            </a>
            <a href="https://wa.me/923115700584" target="_blank" rel="noopener noreferrer" className="cta-btn outline">
              <i className="fab fa-whatsapp" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}