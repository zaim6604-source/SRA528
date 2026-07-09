import { COMPANY } from '../data/siteData'
import FallbackImage from './FallbackImage'
import ScrollReveal from './ScrollReveal'

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-cta/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6">
          {/* Headline tile */}
          <ScrollReveal className="lg:col-span-2 lg:row-span-2 bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-primary/5 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-ink text-xs font-bold px-3 py-1 rounded-full mb-4 w-fit">
              <i className="fas fa-badge-check text-accent" />
              License {COMPANY.license}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink leading-tight mb-4">
              A Clear Path from Swat to{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Success Abroad
              </span>
            </h1>
            <p className="text-base lg:text-lg text-ink/70 max-w-xl mb-6 leading-relaxed">
              {COMPANY.heroTagline}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={COMPANY.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-cta text-white px-6 py-3 rounded-full font-bold hover:brightness-110 transition-all shadow-lg shadow-cta/30"
              >
                <i className="fab fa-whatsapp" />
                Apply Now
              </a>
              <a
                href={COMPANY.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-all"
              >
                <i className="fab fa-whatsapp" />
                WhatsApp
              </a>
            </div>
          </ScrollReveal>

          {/* Photo tile 1 */}
          <ScrollReveal className="relative rounded-2xl overflow-hidden shadow-lg" delay={100}>
            <div className="h-52 lg:h-72">
              <FallbackImage
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&auto=format"
                alt="Workers on site"
                className="w-full h-full"
                icon="fa-users"
                bgClass="from-primary to-secondary"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur rounded-full px-3 py-1 text-xs font-bold text-ink flex items-center gap-1">
                <i className="fas fa-star text-accent" /> Trusted Since 2020
              </div>
            </div>
          </ScrollReveal>

          {/* Photo tile 2 */}
          <ScrollReveal className="relative rounded-2xl overflow-hidden shadow-lg" delay={200}>
            <div className="h-52 lg:h-72">
              <FallbackImage
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&auto=format"
                alt="Royal Arcade Plaza"
                className="w-full h-full"
                icon="fa-building"
                bgClass="from-secondary to-accent"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur rounded-full px-3 py-1 text-xs font-bold text-ink flex items-center gap-1">
                <i className="fas fa-location-dot text-primary" /> Royal Arcade, Mingora
              </div>
            </div>
          </ScrollReveal>

          {/* Stat tile */}
          <ScrollReveal className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-6 shadow-lg text-white flex flex-col justify-center items-center text-center" delay={150}>
            <div className="text-4xl font-extrabold">500+</div>
            <div className="text-sm font-medium opacity-90 mt-1">Workers Placed</div>
            <div className="w-12 h-0.5 bg-white/30 rounded-full my-3" />
            <div className="flex items-center gap-1 text-accent">
              <i className="fas fa-star" /><i className="fas fa-star" />
              <i className="fas fa-star" /><i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
          </ScrollReveal>

          {/* Badge tile */}
          <ScrollReveal className="bg-white rounded-2xl p-4 shadow-lg border border-accent/30 flex items-center justify-center gap-3" delay={250}>
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent text-xl">
              <i className="fas fa-certificate" />
            </div>
            <div className="text-left">
              <div className="text-xs text-ink/60 font-medium">Government Licensed</div>
              <div className="font-extrabold text-ink text-sm">{COMPANY.license}</div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}