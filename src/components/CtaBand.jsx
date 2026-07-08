import useScrollReveal from '../hooks/useScrollReveal';

export default function CtaBand() {
  const revealRef = useScrollReveal();

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF3366] to-[#FF1A53]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF3366] to-[#FF6B9D]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div ref={revealRef} className="reveal">
          <i className="fas fa-paper-plane text-4xl sm:text-5xl text-[#FFCE47] mb-6" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Start Your Global Journey?
          </h2>
          <p className="text-base sm:text-lg text-white/80 mb-8 max-w-xl mx-auto">
            Take the first step toward a rewarding international career. We&apos;re here to help every step of the way.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <a
              href="https://wa.me/923456222252"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 sm:px-10 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-[#3A0A1E] bg-[#FFCE47] rounded-full hover:bg-[#ffc62e] hover:shadow-xl hover:shadow-[#FFCE47]/30 transition-all no-underline"
            >
              <i className="fas fa-paper-plane" />
              Apply Now
            </a>
            <a
              href="https://wa.me/923456222252"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white border-2 border-white/40 rounded-full hover:bg-white/10 transition-all no-underline"
            >
              <i className="fab fa-whatsapp text-lg" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}