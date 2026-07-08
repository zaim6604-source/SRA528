import { useState } from 'react';
import SectionWrapper from './SectionWrapper';

const testimonials = [
  {
    quote: "Rolla Corporation made my dream of working in Saudi Arabia a reality. From documentation to departure, they handled everything professionally. I'm now earning 3x what I was making locally.",
    name: 'Ahmed Raza',
    role: 'Construction Supervisor',
    destination: 'Saudi Arabia',
    img: '/images/candidate1.jpg',
  },
  {
    quote: "I was nervous about moving abroad for work, but the team at Rolla Corporation guided me at every step. The pre-departure orientation was incredibly helpful. Highly recommended!",
    name: 'Bilal Khan',
    role: 'Factory Worker',
    destination: 'Poland',
    img: '/images/candidate2.jpg',
  },
  {
    quote: "Thanks to Rolla Corporation, I secured a great position in Dubai within weeks of registering. They are honest, transparent, and truly care about their candidates. A blessing for Lahore's youth.",
    name: 'Usman Ghani',
    role: 'Logistics Coordinator',
    destination: 'UAE',
    img: '/images/candidate3.jpg',
  },
];

export default function Testimonials() {
  const [imgErrors, setImgErrors] = useState({});

  return (
    <SectionWrapper id="testimonials" badge="SUCCESS STORIES" badgeColor="accent">
      <h2 className="text-3xl md:text-4xl font-extrabold text-ink font-heading mb-2">
        Real Stories, Real Impact
      </h2>
      <p className="text-ink/60 mb-10 max-w-2xl">
        Hear from the candidates we've helped place across the globe.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="relative rounded-2xl overflow-hidden shadow-xl h-[420px] group"
          >
            <img
              src={imgErrors[t.name] ? '/images/hero-team.jpg' : t.img}
              alt={t.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={() => setImgErrors((p) => ({ ...p, [t.name]: true }))}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="flex text-cta mb-3">
                {[1, 2, 3, 4, 5].map((s) => (
                  <i key={s} className="fas fa-star text-sm" />
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-4 italic">"{t.quote}"</p>
              <div className="font-bold text-base">{t.name}</div>
              <div className="text-xs text-white/70">
                {t.role} &middot; {t.destination}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}