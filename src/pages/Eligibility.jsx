import { useState } from 'react'
import useInView from '../hooks/useInView'

const jobCategories = [
  'Construction Worker', 'Driver', 'Technician', 'Hospitality Staff',
  'Factory Worker', 'Security Guard', 'Healthcare Professional',
  'Engineer', 'IT Professional', 'Other',
]

const countries = [
  'Saudi Arabia', 'UAE', 'Qatar', 'Oman', 'Germany', 'Italy', 'Poland', 'Greece', 'Romania',
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

export default function Eligibility() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    name: '', age: '', phone: '', education: '',
    experience: '', category: '',
    countries: [], passport: 'yes',
  })

  const update = (key, val) => setForm((f) => ({ ...f, [key]: val }))
  const toggleCountry = (c) => {
    setForm((f) => ({
      ...f,
      countries: f.countries.includes(c) ? f.countries.filter((x) => x !== c) : [...f.countries, c],
    }))
  }

  const canProceed = () => {
    if (step === 1) return form.name && form.age && form.phone
    if (step === 2) return form.education
    if (step === 3) return form.experience && form.category
    if (step === 4) return form.countries.length > 0
    return true
  }

  const handleSubmit = () => {
    const text = `*Eligibility Check - S.H.Q Enterprises*%0A%0A` +
      `_Name:_ ${encodeURIComponent(form.name)}%0A` +
      `_Age:_ ${encodeURIComponent(form.age)}%0A` +
      `_Phone:_ ${encodeURIComponent(form.phone)}%0A` +
      `_Education:_ ${encodeURIComponent(form.education)}%0A` +
      `_Experience:_ ${encodeURIComponent(form.experience)}%0A` +
      `_Category:_ ${encodeURIComponent(form.category)}%0A` +
      `_Countries:_ ${encodeURIComponent(form.countries.join(', '))}%0A` +
      `_Passport:_ ${encodeURIComponent(form.passport)}`
    window.open(`https://wa.me/923092144443?text=${text}`, '_blank')
  }

  const steps = [
    { num: 1, title: 'Personal Info', icon: 'fa-user' },
    { num: 2, title: 'Education', icon: 'fa-graduation-cap' },
    { num: 3, title: 'Work Experience', icon: 'fa-briefcase' },
    { num: 4, title: 'Preferences', icon: 'fa-globe-asia' },
    { num: 5, title: 'Review', icon: 'fa-check-circle' },
  ]

  return (
    <div className="max-w-3xl mx-auto">
      <AnimateOnView>
        <div className="mb-8">
          <span className="inline-block bg-accent text-ink text-xs font-bold px-3 py-1 rounded-full mb-3">ELIGIBILITY</span>
          <h1 className="text-2xl md:text-4xl font-extrabold text-primary">Check Your Eligibility</h1>
          <p className="text-ink/60 mt-2 text-sm md:text-base">Answer a few questions and we'll help you find the right opportunity</p>
        </div>
      </AnimateOnView>

      {/* Step Progress */}
      <div className="bg-white rounded-2xl shadow-md p-4 md:p-6 border border-primary/10 mb-6">
        <div className="flex items-center justify-between">
          {steps.map((s, i) => (
            <div key={s.num} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  step > s.num
                    ? 'bg-secondary text-white'
                    : step === s.num
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-primary/10 text-ink/40'
                }`}>
                  {step > s.num ? <i className="fas fa-check" /> : s.num}
                </div>
                <span className={`text-[10px] mt-1 font-medium hidden md:block ${
                  step === s.num ? 'text-primary' : 'text-ink/40'
                }`}>{s.title}</span>
              </div>
              {i < steps.length - 1 && (
                <div className={`w-8 md:w-16 h-0.5 mx-1 md:mx-2 mt-[-1.25rem] ${
                  step > s.num ? 'bg-secondary' : 'bg-primary/10'
                }`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="bg-white rounded-2xl shadow-md p-5 md:p-8 border border-primary/10">
        {step === 1 && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-ink mb-1"><i className="fas fa-user text-primary mr-2" />Personal Information</h2>
            <div>
              <label className="block text-sm font-semibold text-ink mb-1">Full Name *</label>
              <input type="text" value={form.name} onChange={(e) => update('name', e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none bg-[#E6F3FB] text-ink transition-all" placeholder="Your full name" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-ink mb-1">Age *</label>
              <input type="number" value={form.age} onChange={(e) => update('age', e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none bg-[#E6F3FB] text-ink transition-all" placeholder="Your age" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-ink mb-1">Phone Number *</label>
              <input type="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none bg-[#E6F3FB] text-ink transition-all" placeholder="03XX-XXXXXXX" />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-ink mb-1"><i className="fas fa-graduation-cap text-primary mr-2" />Education</h2>
            <div>
              <label className="block text-sm font-semibold text-ink mb-1">Highest Education Level *</label>
              <select value={form.education} onChange={(e) => update('education', e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none bg-[#E6F3FB] text-ink transition-all">
                <option value="">Select education level</option>
                <option value="No Formal Education">No Formal Education</option>
                <option value="Primary / Middle">Primary / Middle</option>
                <option value="Matriculation">Matriculation</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Bachelor's Degree">Bachelor's Degree</option>
                <option value="Master's Degree">Master's Degree</option>
                <option value="Technical / Vocational">Technical / Vocational</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-ink mb-1">Do you have a valid passport?</label>
              <div className="flex gap-3 mt-1">
                {['yes', 'no'].map((opt) => (
                  <button key={opt}
                    onClick={() => update('passport', opt)}
                    className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      form.passport === opt
                        ? 'bg-primary text-white shadow-md'
                        : 'bg-primary/10 text-primary hover:bg-primary/20'
                    }`}
                  >
                    {opt === 'yes' ? 'Yes' : 'No'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-ink mb-1"><i className="fas fa-briefcase text-primary mr-2" />Work Experience</h2>
            <div>
              <label className="block text-sm font-semibold text-ink mb-1">Years of Experience *</label>
              <select value={form.experience} onChange={(e) => update('experience', e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none bg-[#E6F3FB] text-ink transition-all">
                <option value="">Select experience</option>
                <option value="Fresher / No Experience">Fresher / No Experience</option>
                <option value="1-2 Years">1-2 Years</option>
                <option value="3-5 Years">3-5 Years</option>
                <option value="5-10 Years">5-10 Years</option>
                <option value="10+ Years">10+ Years</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-ink mb-1">Job Category *</label>
              <select value={form.category} onChange={(e) => update('category', e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none bg-[#E6F3FB] text-ink transition-all">
                <option value="">Select category</option>
                {jobCategories.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-ink mb-1"><i className="fas fa-globe-asia text-primary mr-2" />Preferred Countries</h2>
            <p className="text-sm text-ink/60 mb-2">Select all countries you're interested in *</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {countries.map((c) => (
                <button key={c}
                  onClick={() => toggleCountry(c)}
                  className={`p-3 rounded-xl text-sm font-medium transition-all border ${
                    form.countries.includes(c)
                      ? 'bg-primary text-white border-primary shadow-md'
                      : 'bg-[#E6F3FB] text-ink/70 border-primary/10 hover:border-primary/30'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-ink mb-1"><i className="fas fa-check-circle text-primary mr-2" />Review Your Information</h2>
            <div className="bg-[#E6F3FB] rounded-xl p-4 md:p-6 space-y-3">
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div><span className="text-ink/40">Name:</span> <span className="font-medium">{form.name}</span></div>
                <div><span className="text-ink/40">Age:</span> <span className="font-medium">{form.age}</span></div>
                <div><span className="text-ink/40">Phone:</span> <span className="font-medium">{form.phone}</span></div>
                <div><span className="text-ink/40">Education:</span> <span className="font-medium">{form.education}</span></div>
                <div><span className="text-ink/40">Experience:</span> <span className="font-medium">{form.experience}</span></div>
                <div><span className="text-ink/40">Category:</span> <span className="font-medium">{form.category}</span></div>
                <div><span className="text-ink/40">Passport:</span> <span className="font-medium">{form.passport === 'yes' ? 'Yes' : 'No'}</span></div>
                <div className="col-span-2"><span className="text-ink/40">Countries:</span> <span className="font-medium">{form.countries.join(', ') || 'None selected'}</span></div>
              </div>
            </div>
            <p className="text-sm text-ink/60">By submitting, you'll be redirected to WhatsApp to send your eligibility details to our team.</p>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8 pt-6 border-t border-primary/10">
          {step > 1 ? (
            <button onClick={() => setStep(step - 1)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-primary/20 text-ink font-semibold text-sm hover:bg-primary/5 transition-all">
              <i className="fas fa-arrow-left" /> Previous
            </button>
          ) : <div />}
          {step < 5 ? (
            <button onClick={() => canProceed() && setStep(step + 1)}
              disabled={!canProceed()}
              className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                canProceed()
                  ? 'bg-primary text-white hover:opacity-90 shadow-md'
                  : 'bg-primary/30 text-white/60 cursor-not-allowed'
              }`}>
              Next <i className="fas fa-arrow-right" />
            </button>
          ) : (
            <button onClick={handleSubmit}
              className="inline-flex items-center gap-2 bg-cta text-white font-bold px-6 py-2.5 rounded-xl text-sm hover:opacity-90 transition-all shadow-md shadow-cta/20">
              <i className="fab fa-whatsapp" /> Submit via WhatsApp
            </button>
          )}
        </div>
      </div>
    </div>
  )
}