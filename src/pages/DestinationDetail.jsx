import { useParams, Link } from 'react-router-dom';
import destinations from '../data/destinations';

export default function DestinationDetail() {
  const { slug } = useParams();
  const dest = destinations.find((d) => d.slug === slug);

  if (!dest) {
    return (
      <div className="text-center py-20">
        <i className="fas fa-map-marked-alt text-5xl text-ink/20 mb-4" />
        <h2 className="text-2xl font-bold text-ink mb-2">Destination Not Found</h2>
        <p className="text-ink/50 mb-6">The destination you're looking for doesn't exist.</p>
        <Link
          to="/destinations"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-primary text-white hover:bg-highlight transition-all"
        >
          <i className="fas fa-arrow-left" />
          View All Destinations
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Back link */}
      <Link
        to="/destinations"
        className="inline-flex items-center gap-2 text-sm font-medium text-ink/50 hover:text-primary transition-colors"
      >
        <i className="fas fa-arrow-left" />
        Back to Destinations
      </Link>

      {/* Hero section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-ink to-primary h-56 sm:h-72 flex items-end">
        <img
          src={dest.image}
          alt={dest.name}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        <div className="relative z-10 p-8 sm:p-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white flex items-center gap-3">
            <span>{dest.flag}</span>
            {dest.name}
          </h1>
        </div>
      </div>

      {/* Description */}
      <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-secondary/10">
        <h2 className="text-lg font-bold text-ink mb-3">About {dest.name}</h2>
        <p className="text-ink/70 leading-relaxed">{dest.description}</p>
      </div>

      {/* Roles */}
      <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-secondary/10">
        <h2 className="text-lg font-bold text-ink mb-4 flex items-center gap-2">
          <i className="fas fa-briefcase text-primary" />
          Available Roles
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {dest.roles.map((role) => (
            <div
              key={role}
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-background border border-secondary/10"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <i className="fas fa-user-check text-primary text-sm" />
              </div>
              <span className="text-sm font-medium text-ink">{role}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Requirements */}
      <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-secondary/10">
        <h2 className="text-lg font-bold text-ink mb-4 flex items-center gap-2">
          <i className="fas fa-clipboard-check text-primary" />
          Requirements
        </h2>
        <ul className="space-y-3">
          {dest.requirements.map((req) => (
            <li key={req} className="flex items-start gap-3">
              <i className="fas fa-check-circle text-primary mt-0.5 shrink-0" />
              <span className="text-ink/70 text-sm">{req}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Call to action */}
      <div className="bg-gradient-to-r from-cta to-primary rounded-xl p-6 sm:p-8 text-center text-white">
        <h2 className="text-xl sm:text-2xl font-bold mb-2">
          Interested in {dest.name}?
        </h2>
        <p className="text-white/85 text-sm mb-6">
          Call us now to apply for positions in {dest.name}. Our team will guide you through the process.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:+920514410484"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-bold bg-accent text-ink hover:bg-accent/90 transition-all shadow-lg"
          >
            <i className="fas fa-phone-alt" />
            Call to Apply — 051-4410484
          </a>
          <Link
            to="/apply"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-semibold bg-white/20 text-white border border-white/30 hover:bg-white/30 transition-all"
          >
            <i className="fas fa-paper-plane" />
            Submit Application
          </Link>
        </div>
      </div>
    </div>
  );
}