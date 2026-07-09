import { useState } from 'react'
import useInView from '../hooks/useInView'

const allJobs = [
  { id: 1, title: 'Construction Worker', country: 'Saudi Arabia', flag: '🇸🇦', salary: 'SAR 1,500 – 2,500', type: 'Full-time', category: 'Construction', requirements: ['Minimum 2 years experience', 'Physically fit', 'Valid passport'] },
  { id: 2, title: 'Heavy Driver', country: 'UAE', flag: '🇦🇪', salary: 'AED 2,000 – 3,500', type: 'Full-time', category: 'Driver', requirements: ['Valid driving license', '3+ years experience', 'Route knowledge'] },
  { id: 3, title: 'Technician (HVAC)', country: 'Qatar', flag: '🇶🇦', salary: 'QAR 2,500 – 4,000', type: 'Full-time', category: 'Technician', requirements: ['Technical certification', '3+ years experience', 'English proficiency'] },
  { id: 4, title: 'Hospitality Staff', country: 'Oman', flag: '🇴🇲', salary: 'OMR 300 – 500', type: 'Full-time', category: 'Hospitality', requirements: ['Hospitality experience', 'Good communication', 'Presentable'] },
  { id: 5, title: 'Healthcare Nurse', country: 'Germany', flag: '🇩🇪', salary: '€2,500 – 3,500', type: 'Full-time', category: 'Healthcare', requirements: ['Nursing degree', 'Language certification', 'Valid license'] },
  { id: 6, title: 'Factory Worker', country: 'Italy', flag: '🇮🇹', salary: '€1,500 – 2,200', type: 'Full-time', category: 'Manufacturing', requirements: ['Previous factory experience', 'Physically fit', 'Basic English'] },
  { id: 7, title: 'Manufacturing Operator', country: 'Poland', flag: '🇵🇱', salary: '€1,800 – 2,500', type: 'Full-time', category: 'Manufacturing', requirements: ['Technical background', 'Team player', 'Willing to work shifts'] },
  { id: 8, title: 'Security Guard', country: 'Qatar', flag: '🇶🇦', salary: 'QAR 1,800 – 2,800', type: 'Full-time', category: 'Security', requirements: ['Security certification', 'Physically fit', 'Clear record'] },
  { id: 9, title: 'Construction Foreman', country: 'Saudi Arabia', flag: '🇸🇦', salary: 'SAR 3,000 – 4,500', type: 'Full-time', category: 'Construction', requirements: ['5+ years experience', 'Team management', 'Technical knowledge'] },
  { id: 10, title: 'IT Specialist', country: 'Germany', flag: '🇩🇪', salary: '€3,500 – 5,000', type: 'Full-time', category: 'IT', requirements: ['Degree in CS/IT', '3+ years experience', 'German/English'] },
  { id: 11, title: 'Agriculture Worker', country: 'Greece', flag: '🇬🇷', salary: '€1,200 – 1,800', type: 'Seasonal', category: 'Agriculture', requirements: ['Agricultural experience', 'Physically fit', 'Willing to relocate'] },
  { id: 12, title: 'Logistics Coordinator', country: 'Romania', flag: '🇷🇴', salary: '€1,800 – 2,800', type: 'Full-time', category: 'Logistics', requirements: ['Logistics experience', 'Computer skills', 'English proficiency'] },
  { id: 13, title: 'Chef / Cook', country: 'UAE', flag: '🇦🇪', salary: 'AED 2,500 – 4,500', type: 'Full-time', category: 'Hospitality', requirements: ['Culinary training', '2+ years experience', 'Food safety knowledge'] },
  { id: 14, title: 'Electrical Engineer', country: 'Oman', flag: '🇴🇲', salary: 'OMR 600 – 1,000', type: 'Full-time', category: 'Engineering', requirements: ['Engineering degree', '5+ years experience', 'Professional certification'] },
  { id: 15, title: 'Shipping Crew', country: 'Greece', flag: '🇬🇷', salary: '€1,500 – 2,500', type: 'Contract', category: 'Logistics', requirements: ['STCW certification', 'Sea experience', 'Medical fitness'] },
]

const categories = [...new Set(allJobs.map((j) => j.category))]

function AnimateOnView({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView({ threshold: 0.05 })
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

export default function Jobs() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = allJobs.filter((job) => {
    const matchSearch = job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.country.toLowerCase().includes(search.toLowerCase())
    const matchCategory = activeCategory === 'All' || job.category === activeCategory
    return matchSearch && matchCategory
  })

  return (
    <div className="max-w-6xl mx-auto">
      <AnimateOnView>
        <div className="mb-8">
          <span className="inline-block bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full mb-3">OPEN POSITIONS</span>
          <h1 className="text-2xl md:text-4xl font-extrabold text-primary">Browse Jobs</h1>
          <p className="text-ink/60 mt-2 text-sm md:text-base">Find your next opportunity abroad</p>
        </div>
      </AnimateOnView>

      {/* Search & Filters */}
      <AnimateOnView delay={50}>
        <div className="bg-white rounded-2xl shadow-md p-4 md:p-6 border border-primary/10 mb-6 space-y-4">
          <div className="relative">
            <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-ink/30" />
            <input
              type="text"
              placeholder="Search jobs or countries..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-primary/20 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none bg-[#E6F3FB] text-ink transition-all text-sm"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory('All')}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeCategory === 'All'
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-primary/10 text-primary hover:bg-primary/20'
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-primary/10 text-primary hover:bg-primary/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </AnimateOnView>

      {/* Job Listings */}
      <div className="space-y-4">
        {filtered.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl shadow-md border border-primary/10">
            <i className="fas fa-search text-3xl text-ink/20 mb-3" />
            <p className="text-ink/60 text-sm">No jobs match your criteria. Try adjusting your filters.</p>
          </div>
        ) : (
          filtered.map((job, i) => (
            <AnimateOnView key={job.id} delay={i * 40}>
              <div className="bg-white rounded-2xl shadow-md p-4 md:p-6 border border-primary/10 hover:shadow-lg transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl hidden sm:block">{job.flag}</div>
                    <div>
                      <h3 className="font-bold text-ink text-base">{job.title}</h3>
                      <p className="text-sm text-ink/60 flex items-center gap-2 mt-0.5">
                        <span>{job.flag} {job.country}</span>
                        <span className="text-ink/20">|</span>
                        <span className="text-primary font-medium">{job.salary}</span>
                        <span className="text-ink/20">|</span>
                        <span className="text-xs bg-accent/20 text-accent-ink font-medium px-2 py-0.5 rounded-full">{job.type}</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={`https://wa.me/923092144443?text=*Application for ${job.title} - ${job.country}*%0A%0A_I am interested in the ${job.title} position in ${job.country}._`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-cta text-white font-bold px-5 py-2.5 rounded-xl text-sm hover:opacity-90 transition-all shadow-md shadow-cta/20 inline-flex items-center gap-2"
                    >
                      <i className="fab fa-whatsapp" /> Quick Apply
                    </a>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {job.requirements.map((req) => (
                    <span key={req} className="text-xs bg-[#E6F3FB] text-ink/60 px-2 py-1 rounded-lg">
                      {req}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateOnView>
          ))
        )}
      </div>
    </div>
  )
}