export default function Marquee() {
  return (
    <>
      <style>{`
        .mq-wrap{background:#D90429;overflow:hidden;padding:10px 0;position:relative;z-index:1}
        .mq-track{display:flex;white-space:nowrap;animation:marquee 30s linear infinite;width:max-content}
        .mq-track:hover{animation-play-state:paused}
        .mq-item{display:inline-flex;align-items:center;gap:12px;padding:0 24px;color:#fff;font-size:13px;font-weight:600;letter-spacing:.02em;font-family:"Inter",sans-serif}
        .mq-dot{width:5px;height:5px;border-radius:50%;background:#FF6B6B;flex-shrink:0}
        @keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
      `}</style>
      <div className="mq-wrap" style={{ marginTop: 76 }}>
        <div className="mq-track">
          {[...Array(2)].map((_, idx) => (
            <div key={idx} style={{ display: 'flex' }}>
              <span className="mq-item"><span className="mq-dot" /> HR Consulting</span>
              <span className="mq-item"><span className="mq-dot" style={{ background: '#FFD60A' }} /> Employee & Labor Relations</span>
              <span className="mq-item"><span className="mq-dot" /> Recruitment</span>
              <span className="mq-item"><span className="mq-dot" style={{ background: '#FFD60A' }} /> Payroll</span>
              <span className="mq-item"><span className="mq-dot" /> Policy & Compliance</span>
              <span className="mq-item"><span className="mq-dot" style={{ background: '#FFD60A' }} /> Training</span>
              <span className="mq-item"><span className="mq-dot" /> Westridge, Rawalpindi</span>
              <span className="mq-item"><span className="mq-dot" style={{ background: '#FFD60A' }} /> Free Consultation</span>
              <span className="mq-item" style={{ color: '#FFD60A' }}>◆</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}