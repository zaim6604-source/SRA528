import { useState } from "react";

function ImgWithFallback({ src, alt, className }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className={`${className} bg-gradient-to-br from-primary/40 to-accent/40 flex items-center justify-center`}>
        <i className="fas fa-wrench text-white/50 text-5xl"></i>
      </div>
    );
  }
  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} />;
}

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row min-h-[85vh]">
      <div className="w-full md:w-1/2 bg-primary text-white flex flex-col justify-center px-6 sm:px-10 lg:px-16 xl:px-20 py-16 md:py-0">
        <div className="max-w-xl">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/15 text-cta border border-white/20 mb-6">
            <i className="fas fa-badge-check mr-1.5"></i>
            Trade Testing Center — Mardan
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-5">
            Prove Your Trade.{" "}
            <span className="text-cta">Pass with Confidence.</span>
          </h2>

          <p className="text-base sm:text-lg text-white/80 mb-8 leading-relaxed max-w-lg">
            Bukhari Trade Test Center certifies skilled workers in Mardan — professional trade
            testing that employers abroad trust.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/923005719948"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cta text-ink px-7 py-3.5 rounded-lg text-base font-bold hover:bg-cta/90 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              <i className="fas fa-paper-plane"></i>
              Book a Test
            </a>
            <a
              href="https://wa.me/923005719948"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white/40 text-white px-7 py-3.5 rounded-lg text-base font-semibold hover:bg-white/10 transition-all inline-flex items-center gap-2"
            >
              <i className="fab fa-whatsapp"></i>
              WhatsApp Us
            </a>
          </div>

          <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-white/15">
            <div className="flex items-center gap-2">
              <i className="fas fa-users text-cta"></i>
              <span className="text-sm text-white/70">10,000+ Tested</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-toolbox text-cta"></i>
              <span className="text-sm text-white/70">20+ Trades</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-certificate text-cta"></i>
              <span className="text-sm text-white/70">Certified</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 relative min-h-[40vh] md:min-h-[85vh] overflow-hidden">
        <ImgWithFallback
          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80"
          alt="Workshop trade testing at Bukhari Center"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 md:bg-gradient-to-r md:from-primary/30 md:to-transparent"></div>
        <div className="absolute top-6 right-6 bg-white/95 text-primary font-heading font-bold px-4 py-2 rounded-lg shadow-lg text-sm">
          <i className="fas fa-certificate text-cta mr-1.5"></i>
          Trade Tested
        </div>
        <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-3">
          <div className="bg-white/90 backdrop-blur-sm text-ink px-4 py-2.5 rounded-lg shadow-lg text-sm font-semibold flex items-center gap-2">
            <i className="fas fa-wrench text-primary"></i>
            Practical Skill Assessment
          </div>
          <div className="bg-white/90 backdrop-blur-sm text-ink px-4 py-2.5 rounded-lg shadow-lg text-sm font-semibold flex items-center gap-2">
            <i className="fas fa-location-dot text-primary"></i>
            Mardan, KPK
          </div>
        </div>
      </div>
    </section>
  );
}