import { useState } from 'react';
import useInView from '../hooks/useInView';

const galleryImages = [
  { src: '/images/meeting.jpg', alt: 'Team meeting' },
  { src: '/images/handshake.jpg', alt: 'Professional handshake' },
  { src: '/images/workspace.jpg', alt: 'Modern office workspace' },
  { src: '/images/gallery-4.jpg', alt: 'Office environment' },
];

export default function Gallery() {
  const [ref, inView] = useInView();
  const [errs, setErrs] = useState({});

  return (
    <>
      <style>{`
        .ga-section{background:#FFF0F0;padding:80px 24px}
        .ga-inner{max-width:1200px;margin:0 auto}
        .ga-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
        @media(max-width:768px){.ga-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:480px){.ga-grid{grid-template-columns:1fr}}
        .ga-item{border-radius:16px;overflow:hidden;position:relative;cursor:pointer;height:240px}
        .ga-item img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .5s}
        .ga-item:hover img{transform:scale(1.08)}
      `}</style>

      <section className="ga-section" ref={ref}>
        <div className="ga-inner">
          <div style={{ textAlign: 'center', marginBottom: 40 }} className={`reveal${inView ? ' show' : ''}`}>
            <div className="pill-badge">
              <span className="pill-dot" />
              Gallery
            </div>
            <h2 style={{ fontFamily: '"Plus Jakarta Sans",sans-serif', fontWeight: 900, fontSize: 'clamp(24px,3vw,36px)', color: '#2E0507', marginBottom: 8 }}>
              Our <span style={{ color: '#D90429' }}>Workspace</span>
            </h2>
          </div>
          <div className="ga-grid">
            {galleryImages.map((img, i) => (
              <div key={i} className={`ga-item reveal${inView ? ' show' : ''}`} style={{ transitionDelay: `${i * 0.1}s` }}>
                <img
                  src={errs[i] ? '/images/fallback.svg' : img.src}
                  alt={img.alt}
                  loading="lazy"
                  onError={() => setErrs(p => ({ ...p, [i]: true }))}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}