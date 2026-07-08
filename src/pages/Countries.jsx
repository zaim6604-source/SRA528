import { Link } from 'react-router-dom';
import countries from '../data/countries';

const landmarkEmojis = [
  '🕋', '🏗️', '🏜️', '🏙️', '🏢', '🏰', '🏭', '🏛️', '🏝️',
];

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
        {countries.map((c, i) => (
          <Link
            key={c.slug}
            to={`/countries/${c.slug}`}
            className="bg-white rounded-2xl shadow-sm border border-secondary/10 overflow-hidden hover:shadow-md hover:border-primary/30 transition-all group"
          >
            {/* Landmark image area */}
            <div className="h-36 bg-gradient-to-br from-background to-primary/5 flex items-center justify-center relative overflow-hidden">
              <span className="text-6xl opacity-80 group-hover:scale-110 transition-transform duration-500">
                {landmarkEmojis[i % landmarkEmojis.length]}
              </span>
              <span className="absolute top-3 right-3 text-3xl">{c.flag}</span>
            </div>
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