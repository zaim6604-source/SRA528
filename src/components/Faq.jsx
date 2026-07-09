import { useState } from 'react'
import { FAQS, COMPANY } from '../data/siteData'
import ScrollReveal from './ScrollReveal'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold text-xs px-4 py-1.5 rounded-full">
              <i className="fas fa-question-circle" />
              FAQs
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-ink mt-4 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-ink/60 max-w-2xl mx-auto">
              Everything you need to know about working with {COMPANY.shortName} Recruiting Agency.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 50}>
              <div className={`rounded-xl border ${openIndex === i ? 'border-primary/30 bg-primary/[0.02]' : 'border-primary/10 bg-background'} transition-all`}>
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between p-4 text-left"
                  aria-expanded={openIndex === i}
                >
                  <span className="font-semibold text-sm sm:text-base text-ink pr-4">{faq.q}</span>
                  <i
                    className={`fas fa-chevron-down text-primary shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="px-4 pb-4 text-sm text-ink/60 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}