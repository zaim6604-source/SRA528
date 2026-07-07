import useInView from '../hooks/useInView';
import { useState } from 'react';

export default function Hero() {
  const [heroRef, heroInView] = useInView();
  const [imgError, setImgError] = useState(false);

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-6 pb-16 md:pb-24 overflow-hidden">
      {/* Background rose field */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFF0F4] via-[#FFE0E8] to-[#FFD0DC] -z-10" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-[#E0115F]/5 -z-10" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-[#FF5C8A]/5 -z-10" />

      {/* Geometric bridge/globe motif */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-[#E0115F]/10 rounded-full -z-10" />
      <div className="absolute top-1/3 right-1/3 w-20 h-20 border-2 border-[#FFD700]/20 rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full" ref={heroRef}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className={`space-y-6 transition-all duration-700 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-[#E0115F]/10 text-[#E0115F]">
              <i className="fas fa-bridge text-xs"></i>
              Your Bridge to Global Employment
            </div>

            {/* Gold accent line */}
            <div className="w-16 h-1 bg-[#FFD700] rounded-full"></div>

            {/* Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-[#2E0A1C]">
              Bridging Pakistani Talent with the World's{' '}
              <span className="text-[#E0115F]">Employers</span>
            </h1>

            {/* Subhead */}
            <p className="text-base md:text-lg text-[#2E0A1C]/70 max-w-xl leading-relaxed">
              Bridge Global Resource supplies competent, reliable manpower to the international labor market — and helps Pakistani workers reach trusted jobs abroad.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://wa.me/923212188000?text=Hello%20Bridge%20Global%20Resource%2C%20I%20want%20to%20hire%20manpower%20for%20my%20company."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#7B2D8E] hover:bg-[#9B3DAE] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
              >
                <i className="fas fa-building"></i>
                Hire Manpower
              </a>
              <a
                href="https://wa.me/923212188000?text=Hello%20Bridge%20Global%20Resource%2C%20I%20am%20looking%20for%20a%20job%20abroad."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-[#E0115F] text-[#E0115F] hover:bg-[#E0115F] hover:text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <i className="fas fa-plane"></i>
                Find Work Abroad
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative flex justify-center">
            <div className={`relative transition-all duration-700 delay-200 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/50 img-hover-zoom w-full max-w-md mx-auto">
                {imgError ? (
                  <div className="w-full aspect-[4/3] bg-[#E0115F]/10 flex items-center justify-center">
                    <div className="text-center">
                      <i className="fas fa-image text-4xl text-[#E0115F]/40 mb-2"></i>
                      <p className="text-sm text-[#E0115F]/60">Image unavailable</p>
                    </div>
                  </div>
                ) : (
                  <img
                    src="/images/hero.jpg"
                    alt="Bridge Global Resource Team"
                    className="w-full aspect-[4/3] object-cover"
                    onError={() => setImgError(true)}
                    loading="eager"
                  />
                )}
              </div>

              {/* Floating stat chips */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg px-4 py-2.5 border border-[#E0115F]/10 animate-float">
                <div className="flex items-center gap-2">
                  <i className="fas fa-users text-[#E0115F]"></i>
                  <span className="text-sm font-semibold text-[#2E0A1C]">5000+ Deployed</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-4 py-2.5 border border-[#FFD700]/20 animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2">
                  <i className="fas fa-globe-asia text-[#FFD700]"></i>
                  <span className="text-sm font-semibold text-[#2E0A1C]">12+ Countries</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}