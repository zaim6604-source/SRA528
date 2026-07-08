import { Link } from 'react-router-dom';
import destinations from '../data/destinations';

export default function Destinations() {
  return (
    <div className="space-y-8">
      <div className="text-center sm:text-left">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20 mb-3">
          <i className="fas fa-globe-asia" />
          DESTINATIONS
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-ink mt-2">
          Countries We Serve
        </h1>
        <p className="text-ink/60 mt-2 max-w-2xl">
          We connect workers with reputable employers across the Gulf, Europe, and Asia.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {destinations.map((dest) => (
          <Link
            key={dest.slug}
            to={`/destinations/${dest.slug}`}
            className="group bg-white rounded-xl overflow-hidden shadow-sm border border-secondary/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="relative h-44 overflow-hidden">
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `<div class="flex items-center justify-center h-full bg-gradient-to-br from-primary/10 to-accent/10"><span class="text-5xl">${dest.flag}</span></div>`;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4">
                <h3 className="text-white font-bold text-lg flex items-center gap-2">
                  <span>{dest.flag}</span>
                  {dest.name}
                </h3>
              </div>
            </div>
            <div className="p-4">
              <div className="flex flex-wrap gap-1.5 mb-2">
                {dest.roles.slice(0, 3).map((role) => (
                  <span
                    key={role}
                    className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-background text-primary border border-secondary/20"
                  >
                    {role}
                  </span>
                ))}
                {dest.roles.length > 3 && (
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-ink/5 text-ink/50 border border-ink/10">
                    +{dest.roles.length - 3} more
                  </span>
                )}
              </div>
              <p className="text-xs text-ink/50 flex items-center gap-1">
                <i className="fas fa-arrow-right text-primary" />
                View details & requirements
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}