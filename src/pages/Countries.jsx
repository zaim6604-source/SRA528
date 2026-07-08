import { useState } from 'react';
import { Link } from 'react-router-dom';
import countries from '../data/countries';

export default function Countries() {
  return (
    <div className="space-y-8">
      <div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20 mb-3">
          <i className="fas fa-globe-asia" />
          DESTINATIONS
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-ink mt-2">
          Countries We <span className="text-primary">Recruit For</span>
        </h1>
        <p className="text-ink/60 mt-2 max-w-2xl">
          Explore opportunities across the Gulf, Europe, and Asia.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {countries.map((c) => (
          <Link
            key={c.slug}
            to={`/countries/${c.slug}`}
            className="bg-white rounded-2xl shadow-sm border border-secondary/10 overflow-hidden hover:shadow-md hover:border-primary/30 transition-all group"
          >
            <CountryCardImage country={c} />
            <div className="p-4">
              <h3 className="font-bold text-ink text-lg group-hover:text-primary transition-colors">{c.name}</h3>
              <p className="text-xs text-ink/50 mt-1 line-clamp-2">{c.description}</p>
              <div className="flex items-center gap-2 mt-3">
                <span className="text-xs font-semibold text-primary bg-primary/5 px-2.5 py-1 rounded-full">
                  {c.roles.length} Roles
                </span>
                <span className="text-xs text-ink/40 flex items-center gap-1">
                  View Details <i className="fas fa-arrow-right text-[10px]" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function CountryCardImage({ country }) {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div className="h-36 bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
        <span className="text-6xl">{country.flag}</span>
      </div>
    );
  }

  return (
    <div className="h-36 relative overflow-hidden">
      <img
        src={country.image}
        alt={country.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
        onError={() => setImgError(true)}
      />
      <span className="absolute top-3 right-3 text-3xl drop-shadow-lg">{country.flag}</span>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
    </div>
  );
}