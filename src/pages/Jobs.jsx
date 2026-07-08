import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { jobs, categoryLabels } from '../data/jobs';

const FALLBACK_IMG = 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop';

export default function Jobs() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [imgErrors, setImgErrors] = useState({});

  const filtered = useMemo(() => {
    return jobs.filter((job) => {
      const matchSearch =
        search === '' ||
        job.role.toLowerCase().includes(search.toLowerCase()) ||
        job.country.toLowerCase().includes(search.toLowerCase());
      const matchFilter = filter === 'all' || job.category === filter;
      return matchSearch && matchFilter;
    });
  }, [search, filter]);

  return (
    <div className="animate-fade-in">
      {/* HEADER */}
      <section className="bg-gradient-to-br from-ink to-ink/95 px-6 py-14 md:py-18 text-white">
        <div className="max-w-6xl mx-auto">
          <span className="text-primary font-bold text-sm tracking-widest uppercase">Jobs Portal</span>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-2 mb-3">
            Find Your <span className="text-primary">Dream Job</span>
          </h1>
          <p className="text-white/60 max-w-2xl">
            Browse through our verified openings across the Gulf, Europe, and beyond. Filter by region, search by role or country.
          </p>
        </div>
      </section>

      {/* SEARCH & FILTERS */}
      <section className="sticky top-16 z-30 bg-background/95 backdrop-blur-sm border-b border-ink/5 px-6 py-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-3">
          {/* Search */}
          <div className="relative flex-1">
            <i className="fas fa-search absolute left-3.5 top-1/2 -translate-y-1/2 text-ink/30 text-sm" />
            <input
              type="text"
              placeholder="Search by role or country..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-ink/10 bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none text-sm"
            />
          </div>

          {/* Filter chips */}
          <div className="flex gap-1.5">
            {['all', ...Object.keys(categoryLabels)].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  filter === cat
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white text-ink/60 border border-ink/10 hover:border-primary/30'
                }`}
              >
                {cat === 'all' ? 'All' : categoryLabels[cat]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* JOB CARDS */}
      <section className="px-6 py-8 max-w-6xl mx-auto">
        {filtered.length === 0 ? (
          <div className="text-center py-12">
            <i className="fas fa-search text-4xl text-ink/20 mb-3" />
            <p className="text-ink/50 text-lg">No jobs match your search. Try different keywords.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((job) => (
              <Link
                key={job.id}
                to={`/jobs/${job.id}`}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden group"
              >
                <div className="h-40 relative overflow-hidden">
                  <img
                    src={imgErrors[job.id] ? FALLBACK_IMG : job.img}
                    alt={job.country}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={() => setImgErrors((prev) => ({ ...prev, [job.id]: true }))}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <span className="text-2xl block">{job.flag}</span>
                    <span className="text-white font-bold text-sm">{job.country}</span>
                  </div>
                  <span className="absolute top-3 right-3 bg-cta text-ink text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    {job.tag}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-ink text-sm">{job.role}</h3>
                  <p className="text-ink/50 text-xs mt-1 line-clamp-2">{job.tagline}</p>
                  <div className="mt-3 flex items-center gap-1 text-accent text-xs font-semibold group-hover:gap-2 transition-all">
                    <i className="fas fa-eye" /> View & Apply
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        <p className="text-center text-ink/30 text-xs mt-8">
          Showing {filtered.length} of {jobs.length} positions
        </p>
      </section>
    </div>
  );
}