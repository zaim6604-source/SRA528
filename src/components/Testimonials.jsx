import { useState } from 'react';
import useInView from '../hooks/useInView';

const testimonials = [
  {
    quote: 'Blue Real Eye transformed our HR processes completely. Their team helped us set up proper policies and compliance frameworks that we desperately needed. Highly recommended for any Rawalpindi business.',
    name: 'Ahmed Hassan',
    role: 'CEO',
    company: 'Crystal Tech Solutions',
    stars: 5,
  },
  {
    quote: 'As a growing business, we needed expert HR guidance without the cost of a full-time HR director. Blue Real Eye\'s outsourced HR service was the perfect solution — professional, responsive, and results-driven.',
    name: 'Saima Riaz',
    role: 'Managing Director',
    company: 'Al-Noor Enterprises',
    stars: 5,
  },
  {
    quote: 'The labor relations expertise at Blue Real Eye saved us from a potentially costly dispute. Their understanding of Pakistani labor law is exceptional. A true partner for any employer.',
    name: 'Usman Khalid',
    role: 'Operations Manager',
    company: 'Prime Manufacturing',
    stars: 5,
  },
  {
    quote: 'I was struggling with my career transition and Blue Real Eye\'s HR consulting helped me identify the right path. Their professional development guidance was invaluable.',
    name: 'Fatima Zafar',
    role: 'HR Professional',
    company: 'Independent Client',
    stars: 4,
  },
];

export default function Testimonials() {
  const [ref, inView] = useInView();
  const [activeIdx, setActiveIdx] = useState(0);

  const prev = () => setActiveIdx(i => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setActiveIdx(i => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <>
      <style>{`
        .test-section{background:#fff;padding:96px 24px;position:relative}
        .test-inner{max-width:1100px;margin:0 auto}
        .test-coverflow{position:relative;display:flex;align-items:center;justify-content:center;padding:40px 60px;overflow:hidden}
        .test-track{display:flex;align-items:center;gap:0;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;-ms-overflow-style:none;padding:20px 0;width:100%;justify-content:center}
        .test-track::-webkit-scrollbar{display:none}
        .test-card{flex:0 0 340px;scroll-snap-align:center;transition:all .5s ease;opacity:.45;transform:scale(.88) perspective(800px) rotateY(10deg);cursor:pointer;padding:0 8px}
        .test-card.active{opacity:1;transform:scale(1) perspective(800px) rotateY(0)}
        .test-card-inner{background:#FFF0F0;border-radius:20px;padding:32px 28px;border:1px solid rgba(217,4,41,.06);box-shadow:0 8px 32px rgba(0,0,0,.04);text-align:center;min-height:280px;display:flex;flex-direction:column;justify-content:center}
        .test-nav-btn{position:absolute;top:50%;transform:translateY(-50%);width:44px;height:44px;border-radius:50%;background:#fff;border:1px solid rgba(217,4,41,.12);display:flex;align-items:center;justify-content:center;cursor:pointer;z-index:5;transition:all .25s;box-shadow:0 2px 12px rgba(0,0,0,.06);color:#D90429;font-size:16px}
        .test-nav-btn:hover{background:#D90429;color:#fff;border-color:#D90429}
        .test-nav-btn.left{left:0}
        .test-nav-btn.right{right:0}
        @media(max-width:768px){
          .test-card{flex:0 0 280px}
          .test-coverflow{padding:20px 10px}
          .test-nav-btn{width:36px;height:36px;font-size:13px}
        }
      `}</style>

      <section id="testimonials" className="test-section" ref={ref}>
        <div className="test-inner">
          <div style={{ textAlign: 'center', marginBottom: 48 }} className={`reveal${inView ? ' show' : ''}`}>
            <div className="pill-badge">
              <span className="pill-dot" />
              Client Success
            </div>
            <h2 style={{ fontFamily: '"Plus Jakarta Sans",sans-serif', fontWeight: 900, fontSize: 'clamp(28px,3.5vw,42px)', color: '#2E0507', marginBottom: 14 }}>
              What Our <span style={{ color: '#D90429' }}>Clients Say</span>
            </h2>
            <p style={{ color: '#6B2025', fontSize: 15, maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
              Real feedback from businesses and professionals we've partnered with.
            </p>
          </div>

          <div className={`test-coverflow reveal${inView ? ' show' : ''}`}>
            <button className="test-nav-btn left" onClick={prev} aria-label="Previous">
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <div className="test-track">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className={`test-card ${i === activeIdx ? 'active' : ''}`}
                  onClick={() => setActiveIdx(i)}
                >
                  <div className="test-card-inner">
                    <div style={{ display: 'flex', gap: 3, justifyContent: 'center', marginBottom: 12 }}>
                      {[...Array(t.stars)].map((_, j) => (
                        <i key={j} className="fa-solid fa-star" style={{ color: '#FFD60A', fontSize: 15 }} />
                      ))}
                    </div>
                    <div style={{ fontSize: 'clamp(14px,1.6vw,15px)', lineHeight: 1.7, color: '#6B2025', marginBottom: 16, fontStyle: 'italic' }}>
                      &ldquo;{t.quote}&rdquo;
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 15, color: '#2E0507' }}>{t.name}</div>
                      <div style={{ fontSize: 13, color: '#6B2025', opacity: .7 }}>{t.role}, {t.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="test-nav-btn right" onClick={next} aria-label="Next">
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}