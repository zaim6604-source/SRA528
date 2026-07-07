export default function Stats() {
  return (
    <>
      <style>{`
        .st-section{background:#D90429;padding:48px 24px}
        .st-inner{max-width:1000px;margin:0 auto}
        .st-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:0}
        @media(max-width:640px){.st-grid{grid-template-columns:repeat(2,1fr);gap:20px}}
        .st-item{text-align:center;padding:0 16px}
        .st-item:not(:last-child){border-right:1px solid rgba(255,255,255,.2)}
        @media(max-width:640px){.st-item:nth-child(2){border-right:none}.st-item:nth-child(3){border-right:1px solid rgba(255,255,255,.2)}}
        .st-num{font-family:"Plus Jakarta Sans",sans-serif;font-weight:900;font-size:clamp(28px,3.5vw,40px);color:#FFD60A;line-height:1;margin-bottom:4px}
        .st-label{font-size:13px;font-weight:600;color:rgba(255,255,255,.9);letter-spacing:.02em}
      `}</style>
      <div className="st-section">
        <div className="st-inner">
          <div className="st-grid">
            <div className="st-item">
              <div className="st-num">200+</div>
              <div className="st-label">Clients Advised</div>
            </div>
            <div className="st-item">
              <div className="st-num">15+</div>
              <div className="st-label">Industries Served</div>
            </div>
            <div className="st-item">
              <div className="st-num">10+</div>
              <div className="st-label">Years HR Experience</div>
            </div>
            <div className="st-item">
              <div className="st-num">100%</div>
              <div className="st-label">Confidential</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}