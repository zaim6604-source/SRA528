import { useState } from 'react'
import useInView from '../hooks/useInView'

const services = [
  { icon: 'fa-briefcase', title: 'Overseas Job Placement', desc: 'Connecting candidates with verified employers across multiple countries, matching skills to the right opportunities.', details: 'We maintain a vast network of verified employers across the Middle East and Europe. Our team carefully matches your qualifications and experience with legitimate job openings, ensuring a smooth placement process from application to offer letter.', color: 'bg-primary' },
  { icon: 'fa-passport', title: 'Visa Processing', desc: 'End-to-end visa application support, from document preparation to submission and follow-up.', details: 'Our visa experts handle the entire application process — from document collection and form filling to embassy submission and follow-up. We stay updated on visa policies across all our destination countries to ensure timely processing.', color: 'bg-secondary' },
  { icon: 'fa-file-alt', title: 'Document Attestation', desc: 'Complete attestation and legalization of certificates and documents through relevant departments.', details: 'We coordinate the entire attestation chain — from educational board verification to MOFA attestation and embassy legalization. This ensures your documents are recognized and accepted by employers and immigration authorities abroad.', color: 'bg-deep' },
  { icon: 'fa-stethoscope', title: 'Medical & Trade Tests', desc: 'Coordination of mandatory medical exams and trade tests at authorized centers.', details: 'We schedule and coordinate medical examinations at government-approved centers and arrange trade tests to verify your skills. These are essential steps to meet destination country requirements and employer expectations.', color: 'bg-cta' },
  { icon: 'fa-chalkboard-teacher', title: 'Pre-Departure Orientation', desc: 'Orientation sessions on cultural awareness, contract terms, worker rights, and practical tips.', details: 'Our orientation program prepares you for life abroad — covering cultural norms, labor laws, contract terms, financial management, emergency contacts, and practical tips for a smooth transition to your new workplace.', color: 'bg-accent' },
  { icon: 'fa-plane', title: 'Air Ticketing & Travel', desc: 'Flight bookings, airport transfers, and travel documentation assistance.', details: 'We arrange competitive flight bookings, provide airport transfer guidance, and ensure all travel documentation is in order. Our team coordinates departure schedules to make your journey hassle-free.', color: 'bg-primary' },
  { icon: 'fa-search', title: 'Employer Verification', desc: 'Thorough verification of employers and job offers to ensure legitimate, safe employment.', details: 'Every employer and job offer in our network undergoes rigorous verification. We check company registration, past track record, contract terms, and working conditions to ensure you are going to a safe and legitimate workplace.', color: 'bg-secondary' },
  { icon: 'fa-hard-hat', title: 'Manpower Supply', desc: 'Skilled and unskilled manpower supply for construction, hospitality, manufacturing, and more.', details: 'We supply skilled and unskilled manpower across multiple sectors including construction, hospitality, manufacturing, logistics, healthcare, and IT. Our rigorous screening ensures only qualified candidates are recommended.', color: 'bg-deep' },
]

function AnimateOnView({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView({ threshold: 0.1 })
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

export default function Services() {
  const [modal, setModal] = useState(null)

  return (
    <div className="max-w-5xl mx-auto">
      <AnimateOnView>
        <div className="mb-8">
          <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-3">OUR SERVICES</span>
          <h1 className="text-2xl md:text-4xl font-extrabold text-primary">What We Offer</h1>
          <p className="text-ink/60 mt-2 text-sm md:text-base">Complete overseas employment services under one roof</p>
        </div>
      </AnimateOnView>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s, i) => (
          <AnimateOnView key={s.title} delay={i * 60}>
            <button
              onClick={() => setModal(s)}
              className="w-full text-left bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all group"
            >
              <div className={`h-2 ${s.color}`} />
              <div className="p-5">
                <div className={`w-12 h-12 rounded-xl ${s.color.replace('bg-', 'bg-')}/10 flex items-center justify-center mb-4`}>
                  <i className={`fas ${s.icon} text-primary text-lg`} />
                </div>
                <h3 className="font-bold text-ink text-base mb-2">{s.title}</h3>
                <p className="text-ink/60 text-sm leading-relaxed">{s.desc}</p>
                <span className="inline-flex items-center gap-1 text-xs text-secondary font-semibold mt-3 group-hover:gap-2 transition-all">
                  Read More <i className="fas fa-arrow-right text-xs" />
                </span>
              </div>
            </button>
          </AnimateOnView>
        ))}
      </div>

      {/* Service Detail Modal */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setModal(null)}>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 md:p-8 animate-fade-in" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setModal(null)} className="absolute top-4 right-4 text-ink/40 hover:text-cta transition-colors">
              <i className="fas fa-times text-xl" />
            </button>
            <div className={`w-14 h-14 rounded-xl ${modal.color.replace('bg-', 'bg-')}/10 flex items-center justify-center mb-4`}>
              <i className={`fas ${modal.icon} text-primary text-2xl`} />
            </div>
            <h2 className="text-xl font-bold text-ink mb-3">{modal.title}</h2>
            <p className="text-ink/70 text-sm leading-relaxed">{modal.details}</p>
            <div className="mt-6 flex gap-3">
              <a href="https://wa.me/923092144443" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-cta text-white font-bold px-5 py-2.5 rounded-xl text-sm hover:opacity-90 transition-all shadow-md">
                <i className="fab fa-whatsapp" /> Inquire Now
              </a>
              <button onClick={() => setModal(null)}
                className="inline-flex items-center gap-2 border border-primary/20 text-ink font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-primary/5 transition-all">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}