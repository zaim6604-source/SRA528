import useInView from '../hooks/useInView';

const testimonials = [
  {
    quote: 'Bridge Global Resource helped us find skilled construction workers from Pakistan within weeks. Their screening process is thorough and the candidates were well-prepared.',
    name: 'Ahmed Al-Rashid',
    role: 'HR Director, Saudi Construction Co.',
    stars: 5,
  },
  {
    quote: 'I was struggling to find a nursing job abroad until I contacted Bridge Global Resource. They handled everything — from credential attestation to visa processing. Highly recommended!',
    name: 'Fatima Khan',
    role: 'Registered Nurse, Germany',
    stars: 5,
  },
  {
    quote: 'We\'ve been working with Bridge Global for over two years now. Their manpower supply is consistent, reliable, and cost-effective. A true partner in our growth.',
    name: 'James Mitchell',
    role: 'Operations Manager, UAE Hospitality Group',
    stars: 5,
  },
  {
    quote: 'The pre-departure orientation was incredibly helpful. I felt confident and prepared when I landed in Poland. Thank you Bridge Global for this life-changing opportunity!',
    name: 'Usman Ali',
    role: 'Factory Worker, Poland',
    stars: 5,
  },
];

export default function Testimonials() {
  const [ref, inView] = useInView();

  return (
    <section className="section-pad bg-white">
      <div className="container-pad" ref={ref}>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-[#E0115F]/10 text-[#E0115F] mb-4">
            <i className="fas fa-star text-xs"></i>
            SUCCESS STORIES
          </div>
          <h2 className="section-heading">
            What Our{' '}
            <span className="text-[#E0115F]">Clients Say</span>
          </h2>
        </div>

        <div className={`grid md:grid-cols-2 gap-6 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#FFF0F4] rounded-2xl p-6 md:p-8 border border-[#E0115F]/5 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.stars)].map((_, j) => (
                  <i key={j} className="fas fa-star text-[#FFD700] text-sm"></i>
                ))}
              </div>
              {/* Quote */}
              <p className="text-[#2E0A1C]/80 text-sm md:text-base leading-relaxed mb-5 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#E0115F] flex items-center justify-center text-white font-bold text-sm">
                  {t.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <div className="font-heading font-bold text-sm text-[#2E0A1C]">{t.name}</div>
                  <div className="text-xs text-[#2E0A1C]/60">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}