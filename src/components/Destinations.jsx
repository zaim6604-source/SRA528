import { useState } from 'react';
import useReveal from '../hooks/useReveal';
import { FaPlane, FaSuitcase, FaBriefcase, FaMapMarkerAlt } from 'react-icons/fa';

const DESTINATIONS = [
  { name: 'Saudi Arabia', img: '/images/saudi.jpg', tags: ['Umrah', 'Work'], type: 'mixed' },
  { name: 'UAE', img: '/images/uae.jpg', tags: ['Tourism', 'Hospitality Jobs'], type: 'mixed' },
  { name: 'Qatar', img: '/images/qatar.jpg', tags: ['Work'], type: 'work' },
  { name: 'Turkey (Istanbul)', img: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600&q=80', tags: ['Tourism'], type: 'tourism' },
  { name: 'Malaysia (KL)', img: '/images/malaysia.jpg', tags: ['Tourism', 'Work'], type: 'mixed' },
  { name: 'Italy', img: 'https://images.unsplash.com/photo-1525874684015-58379d421a52?w=600&q=80', tags: ['Tourism'], type: 'tourism' },
  { name: 'Greece', img: '/images/greece.jpg', tags: ['Tourism'], type: 'tourism' },
  { name: 'Germany', img: '/images/germany.jpg', tags: ['Work'], type: 'work' },
  { name: 'Azerbaijan (Baku)', img: 'https://images.unsplash.com/photo-1580651315530-69c8e0026377?w=600&q=80', tags: ['Tourism'], type: 'tourism' },
  { name: 'Kuwait', img: '/images/kuwait.jpg', tags: ['Work'], type: 'work' },
  { name: 'Oman', img: '/images/oman.jpg', tags: ['Tourism', 'Work'], type: 'mixed' },
  { name: 'Romania', img: '/images/romania.jpg', tags: ['Work'], type: 'work' },
];

const TAG_COLORS = {
  Tourism: { bg: 'rgba(244, 161, 0, 0.15)', color: '#D68C00' },
  Work: { bg: 'rgba(6, 167, 125, 0.15)', color: '#06A77D' },
  Umrah: { bg: 'rgba(224, 20, 76, 0.15)', color: '#E0144C' },
};

export default function Destinations() {
  useReveal('.dest-reveal');
  const [imgErrors, setImgErrors] = useState({});

  const handleImgError = (name) => {
    setImgErrors((prev) => ({ ...prev, [name]: true }));
  };

  return (
    <section id="destinations" className="py-[clamp(60px,10vw,100px)] px-5" style={{ background: '#FFF6E0' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 dest-reveal reveal">
          <span className="section-pill">WHERE WE TAKE YOU</span>
          <h2 className="font-display font-extrabold mt-4 mb-3" style={{ fontSize: 'clamp(28px,5vw,42px)', color: '#2A1A00' }}>
            Our Destinations
          </h2>
          <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed" style={{ color: '#6B5B3E' }}>
            Tourism hotspots and work destinations across the globe.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {DESTINATIONS.map((d, i) => (
            <div
              key={i}
              className="dest-reveal reveal rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{ background: '#fff', border: '1px solid rgba(244, 161, 0, 0.08)' }}
            >
              <div className="relative h-44 overflow-hidden">
                {!imgErrors[d.name] ? (
                  <img
                    src={d.img}
                    alt={d.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={() => handleImgError(d.name)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center" style={{ background: '#FFC93C' }}>
                    <FaPlane size={32} className="text-white/50" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white">
                  <FaMapMarkerAlt size={12} />
                  <span className="font-display font-bold text-sm">{d.name}</span>
                </div>
              </div>
              <div className="p-3.5 flex flex-wrap gap-1.5">
                {d.tags.map((tag) => {
                  const tc = TAG_COLORS[tag] || { bg: 'rgba(244, 161, 0, 0.1)', color: '#D68C00' };
                  return (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
                      style={{ background: tc.bg, color: tc.color }}
                    >
                      {tag === 'Tourism' && <FaSuitcase size={9} className="inline mr-1" />}
                      {tag === 'Work' && <FaBriefcase size={9} className="inline mr-1" />}
                      {tag === 'Umrah' && <FaPlane size={9} className="inline mr-1" />}
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}