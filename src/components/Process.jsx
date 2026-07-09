import { PROCESS_STEPS } from '../data/siteData'
import ScrollReveal from './ScrollReveal'

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden">
      <div className="wavy-divider -mb-1">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="text-background fill-current">
          <path d="M0,30 C360,60 720,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>

      <div className="relative bg-gradient-to-br from-primary via-secondary to-cta py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 bg-white/20 text-white font-bold text-xs px-4 py-1.5 rounded-full backdrop-blur">
                <i className="fas fa-arrow-right" />
                How It Works
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-white mt-4 mb-3">
                Your Journey in <span className="text-accent">5 Simple Steps</span>
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                From registration to departure — we guide you through every stage.
              </p>
            </div>
          </ScrollReveal>

          <div className="relative">
            <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-white/20 rounded-full" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
              {PROCESS_STEPS.map((step, i) => {
                const isEven = i % 2 === 0
                return (
                  <ScrollReveal key={step.step} delay={i * 100}>
                    <div className={`relative flex flex-col items-center text-center ${isEven ? 'lg:mt-0' : 'lg:mt-12'}`}>
                      <div className="w-16 h-16 rounded-full bg-white text-primary flex items-center justify-center text-2xl font-extrabold shadow-xl mb-4 relative z-10 ring-4 ring-white/30">
                        {step.step}
                      </div>
                      <div className="bg-white/10 backdrop-blur rounded-2xl p-5 border border-white/20 w-full">
                        <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white text-lg mb-3 mx-auto">
                          <i className={`fas ${step.icon}`} />
                        </div>
                        <h3 className="text-white font-bold text-base mb-1">{step.title}</h3>
                        <p className="text-white/70 text-xs leading-relaxed">{step.desc}</p>
                      </div>
                      {i < PROCESS_STEPS.length - 1 && (
                        <div className="hidden lg:flex absolute -right-4 top-8 text-white/40 text-xl">
                          <i className="fas fa-chevron-right" />
                        </div>
                      )}
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="wavy-divider -mt-1 rotate-180">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="text-background fill-current">
          <path d="M0,30 C360,60 720,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  )
}