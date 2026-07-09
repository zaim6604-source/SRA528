import { useState } from 'react';
import FadeUp from './FadeUp';

const jobs = [
  { title: 'Construction Worker', country: 'Saudi Arabia', salary: 'SAR 1,500', type: 'Full-time', slots: 50 },
  { title: 'Hotel Staff', country: 'UAE', salary: 'AED 1,800', type: 'Full-time', slots: 30 },
  { title: 'Security Guard', country: 'Qatar', salary: 'QAR 1,800', type: 'Full-time', slots: 20 },
  { title: 'Driver', country: 'Oman', salary: 'OMR 250', type: 'Full-time', slots: 15 },
  { title: 'Electrician', country: 'Kuwait', salary: 'KWD 200', type: 'Full-time', slots: 10 },
  { title: 'Nurse', country: 'Germany', salary: '€2,500', type: 'Full-time', slots: 25 },
  { title: 'Factory Worker', country: 'Poland', salary: '5,000 PLN', type: 'Full-time', slots: 40 },
  { title: 'Tourism Staff', country: 'Greece', salary: '€1,200', type: 'Seasonal', slots: 20 },
  { title: 'Manufacturing Worker', country: 'Malaysia', salary: 'MYR 2,500', type: 'Full-time', slots: 35 },
  { title: 'IT Specialist', country: 'Poland', salary: '7,000 PLN', type: 'Full-time', slots: 5 },
  { title: 'Plumber', country: 'Saudi Arabia', salary: 'SAR 2,000', type: 'Full-time', slots: 15 },
  { title: 'Hotel Worker', country: 'Greece', salary: '€1,000', type: 'Seasonal', slots: 25 },
  { title: 'Warehouse Staff', country: 'Poland', salary: '4,500 PLN', type: 'Full-time', slots: 30 },
  { title: 'Mechanic', country: 'Oman', salary: 'OMR 300', type: 'Full-time', slots: 8 },
  { title: 'Caregiver', country: 'Germany', salary: '€2,200', type: 'Full-time', slots: 20 },
];

const countries = ['All', 'Saudi Arabia', 'UAE', 'Qatar', 'Oman', 'Kuwait', 'Germany', 'Poland', 'Greece', 'Malaysia'];

export default function FilterableJobs() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? jobs : jobs.filter((j) => j.country === filter);

  return (
    <section id="jobs" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className='flex flex-col justify-center items-center'>
          <div className="pill-badge bg-primary text-white mb-4 mx-auto" style={{ width: 'fit-content' }}>
            <i className="fas fa-briefcase" />
            Open Positions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink text-center leading-tight">
            Current Job Openings
          </h2>
          <p className="text-ink/60 text-center mt-3 max-w-2xl mx-auto">
            Filter by country to find your ideal opportunity
          </p>
        </FadeUp>

        {/* Filter chips */}
        <FadeUp delay={100}>
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {countries.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`text-xs font-bold px-4 py-2 rounded-full transition-all ${
                  filter === c
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-background text-ink/70 hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </FadeUp>

        {/* Jobs list */}
        <div className="mt-8 space-y-3">
          {filtered.map((job, i) => (
            <FadeUp key={`${job.title}-${job.country}`} delay={i * 40}>
              <div className="bg-background rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:shadow-md transition-shadow border border-primary/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <i className="fas fa-briefcase" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-ink">{job.title}</h4>
                    <div className="text-xs text-ink/50 flex items-center gap-2 mt-0.5">
                      <span><i className="fas fa-map-marker-alt text-primary/60" /> {job.country}</span>
                      <span><i className="fas fa-clock text-primary/60" /> {job.type}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="text-right">
                    <div className="text-xs text-ink/50">Salary</div>
                    <div className="text-sm font-extrabold text-ink">{job.salary}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-ink/50">Slots</div>
                    <div className="text-sm font-extrabold text-ink">{job.slots}</div>
                  </div>
                  <a
                    href={`https://wa.me/923008638517?text=${encodeURIComponent(`Hello New Geo Pak! I'm interested in the ${job.title} position in ${job.country}. Please guide me.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-cta text-ink text-xs font-extrabold px-4 py-2.5 rounded-full hover:brightness-110 transition-all whitespace-nowrap"
                  >
                    <i className="fab fa-whatsapp mr-1" />
                    Apply
                  </a>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-ink/50 mt-8">No open positions for this country currently. Contact us for updates.</p>
        )}
      </div>
    </section>
  );
}