import { useState } from 'react';
import { Link } from 'react-router-dom';
import { countries } from '../data/countries';

const cardColors = ['#FF206E', '#41EAD4', '#D4005A', '#FBFF12', '#1A1423', '#FF206E', '#41EAD4', '#D4005A', '#FBFF12'];
const FALLBACK_IMG = 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop';

export default function Countries() {
  const [imgErrors, setImgErrors] = useState({});

  return (
    <div className="animate-fade-in">
      {/* HEADER */}
      <section className="px-6 py-16 md:py-20 bg-ink text-white">
        <div className="max-w-4xl mx-auto">
          <span className="text-primary font-bold text-sm tracking-widest uppercase">Destinations</span>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-2 mb-4">
            Countries We <span className="text-primary">Serve</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            Explore opportunities across the Middle East, Europe, and Asia. Click a country to see available roles and requirements.
          </p>
        </div>
      </section>

      {/* COUNTRY CARDS */}
      <section className="px-6 py-16 md:py-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((country, idx) => (
            <Link
              key={country.slug}
              to={`/countries/${country.slug}`}
              className="group rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={imgErrors[country.slug] ? FALLBACK_IMG : country.img}
                  alt={`${country.name} landmark`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={() => setImgErrors((prev) => ({ ...prev, [country.slug]: true }))}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="text-3xl block mb-1">{country.flag}</span>
                  <h3 className="text-white font-bold text-xl">{country.name}</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-ink/50 text-xs uppercase tracking-wider font-semibold mb-1">In-Demand Roles</p>
                <p className="text-ink/70 text-sm">{country.roles.slice(0, 3).join(', ')}{country.roles.length > 3 ? ' & more' : ''}</p>
                <div className="mt-3 flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                  View Details <i className="fas fa-arrow-right text-xs" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* COUNTRY CHIPS */}
      <section className="px-6 py-8 pb-16 bg-white">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-3">
          {countries.map((c, i) => (
            <Link
              key={c.slug}
              to={`/countries/${c.slug}`}
              className="px-4 py-2 rounded-full text-sm font-semibold shadow-md text-white hover:brightness-110 transition-all"
              style={{ backgroundColor: cardColors[i % cardColors.length] }}
            >
              {c.flag} {c.name}
            </Link>
          ))}
        </div>
      </section>

      <footer className="bg-ink text-white/50 px-6 py-6 text-center text-xs">
        &copy; {new Date().getFullYear()} Mahail Overseas Employment Promoters
      </footer>
    </div>
  );
}