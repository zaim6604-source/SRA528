import FadeUp from './FadeUp';
import SafeImage from './SafeImage';

export default function Hero() {
  return (
    <section id="home" className="relative bg-background pt-8 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute top-10 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            <FadeUp>
              <div className="inline-flex items-center gap-2 bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4 shadow-sm">
                <i className="fas fa-certificate" />
                GOVERNMENT LICENSED · 2218/MLK
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-ink leading-[1.1] mt-4">
                From{' '}
                <span className="text-primary">Batkhela</span> to{' '}
                <span className="text-primary">Jobs Abroad</span>
              </h1>
              <p className="text-base sm:text-lg text-ink/70 mt-5 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Sareer Recruiting Agency places workers from Malakand Division with trusted
                employers across the Gulf, Europe, and Asia — licensed, local, and reliable.
              </p>
            </FadeUp>

            <FadeUp delay={150}>
              <div className="flex flex-wrap items-center gap-3 mt-7 justify-center lg:justify-start">
                <a
                  href="https://wa.me/923459454665"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-cta text-white font-extrabold px-7 py-3.5 rounded-full text-base hover:brightness-110 transition-all shadow-lg"
                >
                  <i className="fas fa-paper-plane" />
                  Apply Now
                </a>
                <a
                  href="https://wa.me/923459454665"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-primary text-primary font-bold px-7 py-3.5 rounded-full text-base hover:bg-primary hover:text-white transition-all"
                >
                  <i className="fab fa-whatsapp" />
                  WhatsApp
                </a>
              </div>
            </FadeUp>

            <FadeUp delay={300}>
              <div className="flex flex-wrap gap-3 mt-8 justify-center lg:justify-start">
                {[
                  { icon: 'fa-briefcase', label: '1,500+ Placed' },
                  { icon: 'fa-flag', label: '9 Countries' },
                  { icon: 'fa-star', label: '4.8 Rating' },
                  { icon: 'fa-calendar', label: '10+ Years' },
                ].map((s) => (
                  <span
                    key={s.label}
                    className="inline-flex items-center gap-1.5 bg-white text-ink text-xs font-bold px-3.5 py-2 rounded-full shadow-sm border border-gray-100"
                  >
                    <i className={`fas ${s.icon} text-primary`} />
                    {s.label}
                  </span>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Right — hero arc-panel image */}
          <FadeUp delay={100}>
            <div className="relative shrink-0">
              <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 relative">
                <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border-4 border-white" style={{ borderRadius: '40% 60% 40% 60% / 40% 40% 60% 60%' }}>
                  <SafeImage
                    src="/images/hero.jpg"
                    alt="Sareer Recruiting Agency — Global Recruitment"
                    className="w-full h-full object-cover"
                    fallbackType="hero"
                  />
                </div>
                <div className="absolute -top-2 -right-2 bg-cta text-white font-extrabold text-xs px-3 py-1.5 rounded-full shadow-lg rotate-6">
                  <i className="fas fa-check-circle" /> Apply Now
                </div>
                <div className="absolute -bottom-1 -left-3 bg-white text-ink text-xs font-bold px-3 py-2 rounded-full shadow-md border border-gray-100">
                  <i className="fas fa-certificate text-primary" /> 2218/MLK
                </div>
                <div className="absolute top-6 -right-6 w-4 h-4 bg-accent rounded-full animate-pulse" />
                <div className="absolute bottom-12 -right-8 w-3 h-3 bg-cta rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
