import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16 bg-background">
      {/* Sunburst background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="w-[800px] h-[800px] md:w-[1100px] md:h-[1100px] rounded-full animate-sunburst"
          style={{
            background: `conic-gradient(
              #006BA6 0deg 15deg, #0496FF 15deg 30deg, #FFBC42 30deg 45deg,
              #006BA6 45deg 60deg, #0496FF 60deg 75deg, #FFBC42 75deg 90deg,
              #006BA6 90deg 105deg, #0496FF 105deg 120deg, #FFBC42 120deg 135deg,
              #006BA6 135deg 150deg, #0496FF 150deg 165deg, #FFBC42 165deg 180deg,
              #006BA6 180deg 195deg, #0496FF 195deg 210deg, #FFBC42 210deg 225deg,
              #006BA6 225deg 240deg, #0496FF 240deg 255deg, #FFBC42 255deg 270deg,
              #006BA6 270deg 285deg, #0496FF 285deg 300deg, #FFBC42 300deg 315deg,
              #006BA6 315deg 330deg, #0496FF 330deg 345deg, #FFBC42 345deg 360deg
            )`,
          }}
        />
      </div>

      <div className="absolute top-20 left-10 text-accent text-2xl animate-float opacity-40"><i className="fas fa-star" /></div>
      <div className="absolute top-40 right-20 text-cta text-xl animate-float opacity-30" style={{ animationDelay: '1s' }}><i className="fas fa-sparkle" /></div>
      <div className="absolute bottom-32 left-1/4 text-primary text-3xl animate-float opacity-30" style={{ animationDelay: '0.5s' }}><i className="fas fa-star" /></div>
      <div className="absolute top-1/3 left-1/3 text-secondary text-lg animate-float opacity-25" style={{ animationDelay: '1.5s' }}><i className="fas fa-sparkle" /></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider bg-accent text-white mb-5">
              Govt. Licensed OEP 2266/LHR
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-ink leading-tight mb-4 font-heading">
              Find the Job. Pick the Country.
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-secondary to-primary"> We Handle the Rest.</span>
            </h1>
            <p className="text-lg md:text-xl text-ink/70 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              From Davis Road, Lahore to the world — we connect Pakistan's skilled workforce with
              life-changing careers across the globe. <strong className="text-primary">Your future starts here.</strong>
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                to="/jobs"
                className="bg-cta text-white px-8 py-3.5 rounded-full text-lg font-bold hover:brightness-110 transition-all shadow-xl shadow-cta/40 animate-pulse-glow"
              >
                Apply Now
              </Link>
              <a
                href="https://wa.me/923008477507"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-secondary text-secondary px-8 py-3.5 rounded-full text-lg font-bold hover:bg-secondary hover:text-white transition-all"
              >
                <i className="fab fa-whatsapp mr-2" />WhatsApp Us
              </a>
            </div>
          </div>

          <div className="flex-1 w-full max-w-md lg:max-w-none">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/30 to-cta/30 rounded-2xl transform rotate-3 scale-105" />
              <img
                src={imgError ? '/images/about-office.jpg' : '/images/hero-team.jpg'}
                alt="Professional team at Rolla Corporation"
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
                onError={() => setImgError(true)}
                loading="lazy"
              />
              <span className="absolute -top-3 -right-3 bg-accent text-ink text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                2266/LHR
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}