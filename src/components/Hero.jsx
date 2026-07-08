import useInView from '../hooks/useInView';

export default function Hero() {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section id="hero" className="relative bg-gradient-to-br from-background via-white to-secondary/10 pt-8 pb-16 lg:pb-24 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Left content */}
          <div className="order-2 lg:order-1">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="pill-badge bg-primary/10 text-primary border border-primary/20 text-xs">
                <i className="fas fa-shield-alt mr-1.5" />
                Govt. Licensed — 2165/RWP
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink leading-[1.1] mb-5">
              Rawalpindi's Reliable Partner for a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Future Abroad
              </span>
            </h1>

            <p className="text-lg text-ink/70 max-w-xl mb-8 leading-relaxed">
              Janyal Recruiting Agency links workers to trusted Gulf and European employers — licensed, honest, complete.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="https://wa.me/923015509434"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-bold bg-cta text-ink hover:bg-cta/90 transition-all shadow-lg shadow-cta/25 hover:shadow-xl hover:shadow-cta/30 hover:-translate-y-0.5"
              >
                <i className="fab fa-whatsapp text-lg" />
                Apply Now
              </a>
              <a
                href="https://wa.me/923015509434"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all"
              >
                <i className="fab fa-whatsapp text-lg" />
                WhatsApp
              </a>
            </div>

            {/* Stat chips */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: 'fa-briefcase', label: '5000+ Placed' },
                { icon: 'fa-building', label: '200+ Employers' },
                { icon: 'fa-globe', label: '9 Countries' },
                { icon: 'fa-star', label: '15+ Years' },
              ].map((chip) => (
                <span
                  key={chip.label}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white shadow-sm border border-secondary/20 text-sm font-medium text-ink/70"
                >
                  <i className={`fas ${chip.icon} text-primary`} />
                  {chip.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-secondary/30 aspect-[4/3]">
                <img
                  src="https://picsum.photos/seed/janyal-hero/800/600"
                  alt="Professional recruitment consultation"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<div class="flex items-center justify-center h-full bg-gradient-to-br from-primary/10 to-accent/10 p-8"><div class="text-center"><i class="fas fa-handshake text-6xl text-primary mb-4"></i><p class="text-ink/60 font-medium">Janyal Recruiting Agency</p></div></div>`;
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}