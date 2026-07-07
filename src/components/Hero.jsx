import { useState } from 'react';
import useReveal from '../hooks/useReveal';
import { FaWhatsapp, FaPlane, FaGlobeAsia, FaUserTie } from 'react-icons/fa';

const WA = '923455487713';

export default function Hero() {
  useReveal('.hero-reveal');
  const [heroErr, setHeroErr] = useState(false);
  const [officeErr, setOfficeErr] = useState(false);

  return (
    <section id="hero" className="pt-32 md:pt-40 pb-16 md:pb-20 px-5 relative overflow-hidden" style={{ background: '#FFF6E0' }}>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2" style={{ background: '#F4A100' }} />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10 translate-y-1/2 -translate-x-1/2" style={{ background: '#E0144C' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[140px] md:auto-rows-[180px]">
          {/* Headline Tile */}
          <div className="col-span-2 row-span-2 rounded-2xl p-5 md:p-8 flex flex-col justify-center hero-reveal reveal" style={{ background: 'linear-gradient(135deg, #F4A100 0%, #FFC93C 100%)' }}>
            <span className="text-white/80 text-xs font-semibold uppercase tracking-widest mb-2">Rimsha Travels</span>
            <h1 className="font-display font-extrabold text-white leading-tight mb-3" style={{ fontSize: 'clamp(24px, 4vw, 44px)' }}>
              Your Journeys and Careers,<br />Expertly Arranged
            </h1>
            <p className="text-white/90 text-sm md:text-base max-w-lg leading-relaxed">
              Rimsha Travels handles tickets, tours, and visas — and connects skilled workers to opportunities abroad, all under one licensed roof.
            </p>
          </div>

          {/* Hero Image */}
          <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden relative hero-reveal reveal-l">
            {!heroErr ? (
              <img src="/images/hero.jpg" alt="Travel" className="w-full h-full object-cover" onError={() => setHeroErr(true)} />
            ) : (
              <div className="w-full h-full flex items-center justify-center" style={{ background: '#FFC93C' }}>
                <FaPlane size={48} className="text-white/60" />
              </div>
            )}
          </div>

          {/* CTA Tile */}
          <div className="col-span-1 row-span-1 rounded-2xl flex flex-col items-center justify-center hero-reveal reveal cursor-pointer transition-transform hover:scale-[1.02]" style={{ background: '#06A77D' }}>
            <a href={`https://wa.me/${WA}`} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center w-full h-full no-underline text-white">
              <FaWhatsapp size={28} className="mb-1" />
              <span className="font-display font-bold text-sm">Chat Now</span>
              <span className="text-[10px] text-white/70">0345-5487713</span>
            </a>
          </div>

          {/* Badge Tile */}
          <div className="col-span-1 row-span-1 rounded-2xl flex items-center justify-center gap-2 hero-reveal reveal-r" style={{ background: '#E0144C' }}>
            <div className="text-center text-white">
              <div className="flex items-center justify-center gap-2 mb-1">
                <FaGlobeAsia size={16} />
                <FaUserTie size={16} />
              </div>
              <span className="font-display font-bold text-xs md:text-sm">Travel &bull; Tourism &bull; HR</span>
            </div>
          </div>

          {/* Office Image */}
          <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden relative hero-reveal reveal">
            {!officeErr ? (
              <img src="/images/office.jpg" alt="Office" className="w-full h-full object-cover" onError={() => setOfficeErr(true)} />
            ) : (
              <div className="w-full h-full flex items-center justify-center" style={{ background: '#FFF6E0' }}>
                <span className="text-xs text-[#D68C00]">Office</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}