import useReveal from '../hooks/useReveal';
import { FaStar, FaQuoteRight } from 'react-icons/fa';

const TESTIMONIALS = [
  {
    name: 'Fatima Bibi',
    dest: 'UAE',
    role: 'Hospitality Staff',
    quote: 'I was nervous about travelling abroad, but Rimsha Travels made everything smooth. They handled my visa, ticketing, and even pre-departure briefing. Highly recommended!',
    rating: 5,
    img: '/images/testimonial-1.jpg',
  },
  {
    name: 'Usman Khan',
    dest: 'Qatar',
    role: 'Driver',
    quote: 'Rimsha Travels helped me find a great job in Doha. Their HR consultancy team guided me through every step — from document processing to job placement. Truly professional.',
    rating: 5,
    img: '/images/testimonial-2.jpg',
  },
  {
    name: 'Ayesha Mahmood',
    dest: 'Malaysia',
    role: 'Tourist',
    quote: 'We booked our family holiday to Malaysia through Rimsha Travels and it was absolutely flawless. The team took care of flights, hotel, and even suggested the best places to visit.',
    rating: 5,
    img: '/images/testimonial-3.jpg',
  },
];

export default function Testimonials() {
  useReveal('.te-reveal');

  return (
    <section id="testimonials" className="py-[clamp(60px,10vw,100px)] px-5" style={{ background: '#FFF6E0' }}>
      <div className="max-w-6xl mx-auto">
        <div className="te-reveal reveal text-center mb-12">
          <span className="section-pill">HAPPY CLIENTS</span>
          <h2 className="font-display font-extrabold mt-4 mb-3" style={{ fontSize: 'clamp(28px,5vw,42px)', color: '#2A1A00' }}>
            What Our Clients Say
          </h2>
          <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed" style={{ color: '#6B5B3E' }}>
            Real stories from travellers and job seekers we have helped.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className="te-reveal reveal rounded-2xl p-6 md:p-7 flex flex-col"
              style={{
                background: '#fff',
                border: '1px solid rgba(244, 161, 0, 0.08)',
                boxShadow: '0 4px 20px rgba(244, 161, 0, 0.06)',
                transitionDelay: `${i * 0.12}s`,
                marginTop: i === 1 ? '24px' : i === 2 ? '12px' : '0',
              }}
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <FaStar key={j} size={14} style={{ color: '#F4A100' }} />
                ))}
              </div>
              <div className="flex-1">
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#4B5563' }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3 pt-3 border-t" style={{ borderColor: 'rgba(244, 161, 0, 0.08)' }}>
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
                <div>
                  <div className="font-display font-bold text-sm" style={{ color: '#2A1A00' }}>{t.name}</div>
                  <div className="text-xs font-medium" style={{ color: '#D68C00' }}>{t.dest} &mdash; {t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}