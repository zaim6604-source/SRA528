import FadeUp from './FadeUp';
import SafeImage from './SafeImage';

const testimonials = [
  {
    name: 'Arsalan Khan',
    role: 'Construction Worker · Saudi Arabia',
    quote: 'Sareer Agency handled everything from my visa to my flight. I landed in Riyadh with a job ready — no stress, no delays.',
    rating: 5, seed: 0,
  },
  {
    name: 'Fazal Rehman',
    role: 'Hotel Staff · Dubai, UAE',
    quote: 'As someone from Batkhela, I was nervous about working abroad. They guided me through every step. Forever grateful.',
    rating: 5, seed: 1,
  },
  {
    name: 'Muhammad Zubair',
    role: 'Factory Worker · Malaysia',
    quote: 'The job in Kuala Lumpur changed my family\'s life. Clean process, honest people. I recommend Sareer to everyone.',
    rating: 5, seed: 2,
  },
  {
    name: 'Saeed Ahmad',
    role: 'Driver · Doha, Qatar',
    quote: 'I tried other agents before — Sareer is different. They don\'t make false promises. What they say, they deliver.',
    rating: 4, seed: 3,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="pill-badge bg-primary text-white mb-4 mx-auto" style={{ width: 'fit-content' }}>
            <i className="fas fa-star" />
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink text-center leading-tight">
            What Our Workers Say
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {testimonials.map((t, i) => (
            <FadeUp key={t.name} delay={i * 100}>
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-primary">
                    <SafeImage
                      src={`/images/testimonial-${t.seed}.jpg`}
                      alt={t.name}
                      className="w-full h-full object-cover"
                      fallbackType="testimonial"
                      fallbackSeed={t.seed}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-extrabold text-ink text-sm truncate">{t.name}</div>
                    <div className="text-xs text-ink/50 truncate">{t.role}</div>
                  </div>
                </div>
                <p className="text-ink/70 text-sm leading-relaxed italic flex-1">"{t.quote}"</p>
                <div className="flex gap-1 mt-3">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <i
                      key={idx}
                      className={`fas fa-star text-xs ${idx < t.rating ? 'star-mint' : 'text-gray-200'}`}
                    />
                  ))}
                </div>
                {/* Avatar overlap */}
                {i === 0 && (
                  <div className="avatar-overlap mt-4 pt-3 border-t border-gray-100">
                    {[0, 1, 2].map((s) => (
                      <div key={s} className="w-8 h-8 rounded-full overflow-hidden">
                        <SafeImage
                          src={`/images/testimonial-${s}.jpg`}
                          alt=""
                          className="w-full h-full object-cover"
                          fallbackType="testimonial"
                          fallbackSeed={s}
                        />
                      </div>
                    ))}
                    <div className="w-8 h-8 rounded-full bg-primary text-white text-[10px] font-extrabold flex items-center justify-center">+12</div>
                  </div>
                )}
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
