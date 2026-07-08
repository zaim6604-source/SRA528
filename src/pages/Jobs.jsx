import { useState } from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import { jobs, categories, trades } from '../data/jobs';

export default function Jobs() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeTrade, setActiveTrade] = useState('All');

  const filtered = jobs.filter((job) => {
    if (activeCategory !== 'All' && job.category !== activeCategory) return false;
    if (activeTrade !== 'All' && job.trade !== activeTrade) return false;
    if (search) {
      const q = search.toLowerCase();
      return (
        job.role.toLowerCase().includes(q) ||
        job.country.toLowerCase().includes(q) ||
        job.trade.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="pt-24 pb-16 md:pb-20" style={{ backgroundColor: '#FF206E' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#FBFF12' }}>
              <i className="fa-solid fa-briefcase" />
              Job Portal
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">Gulf Job Openings</h1>
            <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Browse current opportunities across Saudi Arabia, UAE, Qatar, Oman, Kuwait, and Bahrain.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ===== FILTERS ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-6">
          {/* Search */}
          <div className="relative mb-4">
            <i className="fa-solid fa-search absolute left-4 top-1/2 -translate-y-1/2 text-sm" style={{ color: '#4A3F55' }} />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by role, country, or trade..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border-2 text-sm outline-none transition-all duration-200"
              style={{ borderColor: '#FF206E20', color: '#1A1423' }}
              onFocus={(e) => e.target.style.borderColor = '#FF206E'}
              onBlur={(e) => e.target.style.borderColor = '#FF206E20'}
            />
          </div>

          {/* Category chips */}
          <div className="flex flex-wrap gap-2 mb-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="filter-chip px-4 py-1.5 rounded-full text-xs font-semibold cursor-pointer border transition-all duration-200"
                style={{
                  backgroundColor: activeCategory === cat ? '#FF206E' : 'transparent',
                  color: activeCategory === cat ? 'white' : '#4A3F55',
                  borderColor: activeCategory === cat ? '#FF206E' : '#FF206E30',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Trade chips */}
          <div className="flex flex-wrap gap-2">
            {trades.map((trade) => (
              <button
                key={trade}
                onClick={() => setActiveTrade(trade)}
                className="filter-chip px-4 py-1.5 rounded-full text-xs font-semibold cursor-pointer border transition-all duration-200"
                style={{
                  backgroundColor: activeTrade === trade ? '#41EAD4' : 'transparent',
                  color: activeTrade === trade ? '#1A1423' : '#4A3F55',
                  borderColor: activeTrade === trade ? '#41EAD4' : '#41EAD430',
                }}
              >
                {trade}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RESULTS ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm font-medium" style={{ color: '#4A3F55' }}>
            Showing <span className="font-bold" style={{ color: '#FF206E' }}>{filtered.length}</span> opening{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#FF206E10' }}>
              <i className="fa-solid fa-search text-2xl" style={{ color: '#FF206E' }} />
            </div>
            <h3 className="text-lg font-bold mb-2" style={{ color: '#1A1423' }}>No openings found</h3>
            <p className="text-sm" style={{ color: '#4A3F55' }}>Try adjusting your search or filter criteria.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filtered.map((job, i) => (
              <FadeIn key={job.id} delay={Math.min(i + 1, 4)}>
                <Link to={`/jobs/${job.id}`} className="job-card block bg-white rounded-2xl overflow-hidden shadow-sm border border-[#FF206E10] hover:shadow-lg group">
                  <div className="h-40 overflow-hidden">
                    <img
                      src={job.image}
                      alt={job.country}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-lg">{job.flag}</span>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ backgroundColor: '#41EAD420', color: '#1A1423' }}>
                        {job.country}
                      </span>
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ backgroundColor: '#FF206E10', color: '#FF206E' }}>
                        {job.trade}
                      </span>
                    </div>
                    <h3 className="text-base font-bold mt-2 mb-1" style={{ color: '#1A1423' }}>{job.role}</h3>
                    <p className="text-xs" style={{ color: '#4A3F55' }}>
                      {job.openings} openings &bull; {job.salary}
                    </p>
                    <div className="mt-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 hover:gap-3" style={{ backgroundColor: '#41EAD4', color: '#1A1423' }}>
                      View &amp; Apply <i className="fa-solid fa-arrow-right text-[10px]" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}