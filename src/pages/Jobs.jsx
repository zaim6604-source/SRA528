import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import { jobs, subcategories } from '../data/jobs';

export default function Jobs() {
  const [search, setSearch] = useState('');
  const [activeSub, setActiveSub] = useState('All');
  const revealRef = useScrollReveal();

  const filtered = useMemo(() => {
    return jobs.filter((job) => {
      const matchSub = activeSub === 'All' || job.subcategory === activeSub;
      const matchSearch = !search ||
        job.role.toLowerCase().includes(search.toLowerCase()) ||
        job.country.toLowerCase().includes(search.toLowerCase()) ||
        job.countries.some((c) => c.toLowerCase().includes(search.toLowerCase())) ||
        job.subcategory.toLowerCase().includes(search.toLowerCase());
      return matchSub && matchSearch;
    });
  }, [activeSub, search]);

  return (
    <div className="page-fade">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#FF1654] to-[#D60046] pt-12 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 text-white rounded-full text-xs font-semibold mb-4 backdrop-blur-sm">
            <i className="fas fa-briefcase" />
            Jobs Portal
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
            Find Your Dream Job in the Gulf
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto">
            Browse verified openings from trusted employers across Saudi Arabia, UAE, Qatar, Oman, and Kuwait.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-orange-100 sticky top-16 sm:top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          {/* Search */}
          <div className="relative max-w-md mx-auto mb-4">
            <i className="fas fa-search absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-[#152935]/40" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search jobs, countries, categories..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-orange-200 focus:border-[#FF1654] focus:ring-2 focus:ring-[#FF1654]/20 outline-none text-sm transition-all"
            />
          </div>

          {/* Subcategory chips */}
          <div className="flex flex-wrap justify-center gap-2">
            {subcategories.map((sub) => (
              <button
                key={sub}
                onClick={() => setActiveSub(sub)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-full border transition-all ${
                  activeSub === sub
                    ? 'bg-[#FF1654] text-white border-[#FF1654] shadow-md shadow-[#FF1654]/20'
                    : 'bg-white text-[#152935]/70 border-orange-200 hover:border-[#FF1654]/50 hover:text-[#FF1654]'
                }`}
              >
                {sub === 'All' ? 'All Openings' : sub}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-8 sm:py-12 bg-[#FFF3E0] min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-[#152935]/60">
              {filtered.length} {filtered.length === 1 ? 'job' : 'jobs'} found
            </p>
            {activeSub !== 'All' && (
              <button
                onClick={() => setActiveSub('All')}
                className="text-xs font-medium text-[#FF1654] hover:underline"
              >
                Clear filter
              </button>
            )}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <i className="fas fa-search text-4xl text-[#152935]/20 mb-4" />
              <h3 className="text-lg font-bold font-[Poppins] text-[#152935] mb-2">No jobs found</h3>
              <p className="text-sm text-[#152935]/50 mb-4">Try adjusting your search or filter.</p>
              <button
                onClick={() => { setSearch(''); setActiveSub('All'); }}
                className="text-sm font-semibold text-[#FF1654] hover:underline"
              >
                Reset all filters
              </button>
            </div>
          ) : (
            <div ref={revealRef} className="reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filtered.map((job) => (
                <Link
                  key={job.id}
                  to={`/jobs/${job.id}`}
                  className="group bg-white rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-xl border border-orange-100 hover:border-[#FF1654]/30 transition-all no-underline"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FF1654]/10 flex items-center justify-center text-[#FF1654] flex-shrink-0">
                      <i className={job.icon} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm sm:text-base font-bold font-[Poppins] text-[#152935] group-hover:text-[#FF1654] transition-colors">
                        {job.role}
                      </h3>
                      <p className="text-xs text-[#152935]/50 mt-0.5">{job.country}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {job.countries.slice(0, 3).map((c) => (
                      <span
                        key={c}
                        className="text-xs px-2 py-0.5 rounded-full bg-[#FFF3E0] text-[#152935]/70 font-medium"
                      >
                        {c}
                      </span>
                    ))}
                    {job.countries.length > 3 && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-[#FFF3E0] text-[#152935]/50">
                        +{job.countries.length - 3}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#152935]/60 line-clamp-2 leading-relaxed">{job.description}</p>
                  <div className="mt-3 pt-3 border-t border-orange-100 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#247BA0]">
                      <i className="fas fa-tag" />
                      {job.subcategory}
                    </span>
                    <span className="text-xs font-semibold text-[#70C1B3]">
                      {job.salary}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}