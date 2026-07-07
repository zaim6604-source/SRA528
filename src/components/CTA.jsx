import useInView from '../hooks/useInView';

export default function CTA() {
  const [ref, inView] = useInView();

  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-r from-[#E0115F] to-[#7B2D8E]" />
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, white 0%, transparent 50%), radial-gradient(circle at 80% 50%, white 0%, transparent 50%)' }} />
      <div ref={ref} className={`relative z-10 container-pad text-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white font-heading mb-4 leading-tight">
          Whether You're Hiring or Heading Abroad —{' '}
          <span className="text-[#FFD700]">Let's Build the Bridge.</span>
        </h2>
        <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
          Connect with us today and start your journey with Bridge Global Resource.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/923212188000?text=Hello%20Bridge%20Global%20Resource%2C%20I%20want%20to%20hire%20manpower."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FFD700] text-[#2E0A1C] font-bold text-base px-10 py-4 rounded-full hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 active:scale-95 inline-flex items-center gap-2"
          >
            <i className="fas fa-users" /> Hire Manpower
          </a>
          <a
            href="https://wa.me/923212188000"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-bold text-base px-10 py-4 rounded-full hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 active:scale-95 inline-flex items-center gap-2 border border-white/40"
          >
            <i className="fab fa-whatsapp" /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}