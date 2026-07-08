import SERVICES from '../data/services'

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section pill */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-5 py-2 rounded-full">
            <i className="fas fa-briefcase" />
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink mt-4 mb-3">
            What We Offer
          </h2>
          <p className="text-ink/60 max-w-xl mx-auto">
            End-to-end travel and recruitment services tailored to get you working abroad — fast.
          </p>
        </div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {SERVICES.map((svc) => (
            <div key={svc.id} className="break-inside-avoid">
              <div
                className={`bg-gradient-to-br ${svc.color} text-white rounded-2xl p-6 sm:p-7 h-full transition-transform hover:-translate-y-1 hover:shadow-xl`}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl mb-5 text-xl">
                  <i className={`fas ${svc.icon}`} />
                </div>
                <h3 className="text-lg font-bold mb-3">{svc.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{svc.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight banner */}
        <div className="mt-10 bg-gradient-to-r from-primary to-cta rounded-2xl p-6 sm:p-8 text-white text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <i className="fas fa-star text-accent" />
            Trusted Service
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-2">
            Overseas Recruitment & Travel Services
          </h3>
          <p className="text-white/85 max-w-2xl mx-auto mb-4">
            From job placement to air ticketing, we handle everything for your journey abroad. Licensed and reliable.
          </p>
          <a
            href="https://wa.me/923064712919"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-primary font-bold px-6 py-3 rounded-full hover:bg-accent hover:text-ink transition-colors"
          >
            <i className="fa-brands fa-whatsapp" />
            Start Your Application
          </a>
        </div>
      </div>
    </section>
  )
}