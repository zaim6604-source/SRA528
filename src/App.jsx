import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import MarqueeBand from './components/MarqueeBand'
import Hero from './components/Hero'
import StatBand from './components/StatBand'
import About from './components/About'
import Services from './components/Services'
import CountryGuide from './components/CountryGuide'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import CTA from './components/CTA'
import ContactMap from './components/ContactMap'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import QuickApplyFAB from './components/QuickApplyFAB'
import { COMPANY, JOBS } from './data/siteData'
import ScrollReveal from './components/ScrollReveal'

function JobsStrip() {
  const [filter, setFilter] = useState('All')

  const countries = ['All', ...new Set(JOBS.map((j) => j.country))]
  const filtered = filter === 'All' ? JOBS : JOBS.filter((j) => j.country === filter)

  return (
    <section id="jobs" className="py-16 lg:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold text-xs px-4 py-1.5 rounded-full">
              <i className="fas fa-briefcase" />
              Open Positions
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-ink mt-4 mb-3">
              Current Job Openings
            </h2>
            <p className="text-ink/60 max-w-2xl mx-auto">
              Filter by country to find your ideal role.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter chips */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {countries.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  filter === c
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-primary/10 text-primary hover:bg-primary/20'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Jobs grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((job, i) => (
            <ScrollReveal key={`${job.title}-${job.country}`} delay={i * 50}>
              <div className="bg-white rounded-xl p-5 shadow-md border border-primary/5 hover:shadow-lg transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-ink text-sm">{job.title}</h3>
                    <p className="text-xs text-ink/50">{job.country}</p>
                  </div>
                  <span className="text-[10px] font-bold bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                    {job.type}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-secondary">{job.salary}</span>
                  <a
                    href={COMPANY.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold bg-cta text-white px-4 py-1.5 rounded-full hover:brightness-110 transition-all"
                  >
                    Apply
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function EligibilityWizard() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showResult, setShowResult] = useState(false)

  const questions = [
    { q: 'What is your age?', options: ['18-22', '22-30', '30-40', '40-45'], key: 'age' },
    { q: 'What is your education level?', options: ['Middle', 'Matric', 'Intermediate', 'Graduate', 'Diploma/Certification'], key: 'education' },
    { q: 'Do you have work experience?', options: ['No experience', '1-2 years', '3-5 years', '5+ years'], key: 'experience' },
    { q: 'Which region interests you?', options: ['Gulf (Saudi/UAE/Qatar)', 'Europe (Germany/Romania)', 'Other (Malaysia/Greece)'], key: 'region' },
  ]

  const handleAnswer = (answer) => {
    const newAnswers = { ...answers, [questions[step].key]: answer }
    setAnswers(newAnswers)
    if (step < questions.length - 1) {
      setStep(step + 1)
    } else {
      setShowResult(true)
    }
  }

  const reset = () => {
    setStep(0)
    setAnswers({})
    setShowResult(false)
  }

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold text-xs px-4 py-1.5 rounded-full">
              <i className="fas fa-wand-magic-sparkles" />
              Eligibility Wizard
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-ink mt-4 mb-3">
              Check Your Eligibility
            </h2>
            <p className="text-ink/60 max-w-xl mx-auto">
              Answer a few quick questions and we will tell you which opportunities suit you best.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-background rounded-2xl p-8 shadow-lg border border-primary/5">
            {!showResult ? (
              <div>
                {/* Progress bar */}
                <div className="flex items-center gap-2 mb-6">
                  {questions.map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 flex-1 rounded-full transition-all ${
                        i <= step ? 'bg-primary' : 'bg-primary/20'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-xs text-ink/40 mb-1 text-center">
                  Step {step + 1} of {questions.length}
                </p>

                <h3 className="text-xl font-bold text-ink text-center mb-6">
                  {questions[step].q}
                </h3>
                <div className="space-y-2">
                  {questions[step].options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleAnswer(opt)}
                      className="w-full text-left px-5 py-3 rounded-xl bg-white border border-primary/10 hover:border-primary/30 hover:bg-primary/[0.02] transition-all font-medium text-sm text-ink/80 hover:text-primary"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-500 text-3xl mx-auto mb-4">
                  <i className="fas fa-check-circle" />
                </div>
                <h3 className="text-xl font-extrabold text-ink mb-2">
                  You Are Eligible!
                </h3>
                <p className="text-ink/60 text-sm mb-2">
                  Based on your profile, we have suitable opportunities for you.
                </p>
                <div className="bg-white rounded-xl p-4 mb-6 text-left space-y-2">
                  {Object.entries(answers).map(([key, value]) => (
                    <div key={key} className="flex justify-between text-sm">
                      <span className="text-ink/50 capitalize">{key}</span>
                      <span className="font-semibold text-ink">{value}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={COMPANY.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-cta text-white px-6 py-3 rounded-full font-bold hover:brightness-110 transition-all shadow-lg"
                  >
                    <i className="fab fa-whatsapp" />
                    Apply Now
                  </a>
                  <button
                    onClick={reset}
                    className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-all"
                  >
                    <i className="fas fa-rotate" />
                    Start Over
                  </button>
                </div>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-lg shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <i className="fas fa-arrow-up" />
    </button>
  )
}

function App() {
  useEffect(() => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
    link.integrity = 'sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=='
    link.crossOrigin = 'anonymous'
    link.referrerPolicy = 'no-referrer'
    document.head.appendChild(link)
  }, [])

  return (
    <div className="min-h-screen bg-background text-ink font-sans">
      <Navbar />
      <MarqueeBand />
      <Hero />
      <StatBand />
      <About />
      <Services />
      <CountryGuide />
      <JobsStrip />
      <EligibilityWizard />
      <Process />
      <Testimonials />
      <Gallery />
      <CTA />
      <ContactMap />
      <FAQ />
      <Footer />
      <QuickApplyFAB />
      <BackToTop />
    </div>
  )
}

export default App