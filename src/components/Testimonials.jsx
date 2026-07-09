import { useState } from 'react';
import FadeUp from './FadeUp';
import SafeImage from './SafeImage';

const testimonials = [
  {
    name: 'Muhammad Riaz',
    role: 'Construction Worker · Riyadh, Saudi Arabia',
    quote: 'New Geo Pak handled everything from my visa to my flight. I landed in Riyadh with a job ready — no stress, no delays. Highly recommended for anyone in Multan looking for Gulf jobs.',
    rating: 5,
  },
  {
    name: 'Saima Parveen',
    role: 'Hotel Staff · Dubai, UAE',
    quote: 'As a woman from Multan, I was nervous about working abroad. They guided me through every step with respect and care. Forever grateful to the New Geo Pak team.',
    rating: 5,
  },
  {
    name: 'Usman Ghani',
    role: 'Factory Worker · Warsaw, Poland',
    quote: 'The Poland factory job changed my family\'s life. Clean process, honest people, no hidden charges. I recommend New Geo Pak to everyone in South Punjab.',
    rating: 5,
  },
  {
    name: 'Khalid Mehmood',
    role: 'Driver · Doha, Qatar',
    quote: 'I tried other agents before — New Geo Pak is different. They don\'t make false promises. What they say, they deliver. The team at Kutchery Road is professional and transparent.',
    rating: 4,
  },
];

export default function Testimonials() {
  const [popup, setPopup] = useState(null);

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className='flex flex-col justify-center items-center'>
          <div className="pill-badge bg-primary text-white mb-4 mx-auto" style={{ width: 'fit-content' }}>
            <i className="fas fa-star" />
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink text-center leading-tight">
            What Our Workers Say
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {testimonials.map((t, i) => (
            <FadeUp key={t.name} delay={i * 100}>
              <div
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setPopup(t)}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden shrink-0">
                    <SafeImage
                      src={`/images/testimonial-${i}.jpg`}
                      alt={t.name}
                      className="w-full h-full object-cover"
                      fallbackType="testimonial"
                      fallbackSeed={i}
                    />
                  </div>
                  <div>
                    <div className="font-extrabold text-ink text-sm">{t.name}</div>
                    <div className="text-xs text-ink/50">{t.role}</div>
                  </div>
                </div>
                <p className="text-ink/70 text-sm leading-relaxed italic">"{t.quote}"</p>
                <div className="flex gap-1 mt-3">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <i
                      key={idx}
                      className={`fas fa-star text-xs ${idx < t.rating ? 'star-yellow' : 'text-gray-200'}`}
                    />
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>

      {/* Testimonial Popup */}
      {popup && (
        <div className="modal-backdrop" onClick={() => setPopup(null)}>
          <div className="modal-content p-6 sm:p-8 max-w-md" onClick={(e) => e.stopPropagation()}>
            <div className="text-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 shadow-lg">
                <SafeImage
                  src={`/images/testimonial-${testimonials.indexOf(popup)}.jpg`}
                  alt={popup.name}
                  className="w-full h-full object-cover"
                  fallbackType="testimonial"
                  fallbackSeed={testimonials.indexOf(popup)}
                />
              </div>
              <h3 className="text-lg font-extrabold text-ink">{popup.name}</h3>
              <p className="text-xs text-ink/50">{popup.role}</p>
              <div className="flex justify-center gap-1 mt-2">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <i
                    key={idx}
                    className={`fas fa-star text-sm ${idx < popup.rating ? 'star-yellow' : 'text-gray-200'}`}
                  />
                ))}
              </div>
              <p className="text-ink/70 text-sm leading-relaxed italic mt-4">"{popup.quote}"</p>
              <button
                onClick={() => setPopup(null)}
                className="mt-6 text-sm font-bold text-primary hover:underline"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}