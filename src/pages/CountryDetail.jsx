import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import countries from '../data/countries';

export default function CountryDetail() {
  const { slug } = useParams();
  const country = countries.find((c) => c.slug === slug);
  const [imgError, setImgError] = useState(false);

  if (!country) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <i className="fas fa-globe text-3xl text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-ink mb-2">Country Not Found</h2>
        <p className="text-ink/50 mb-6">This destination is not in our current roster.</p>
        <Link to="/countries" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-highlight transition-colors">
          <i className="fas fa-arrow-left" /> Back to Countries
        </Link>
      </div>
    );
  }

  const whatsappText = encodeURIComponent(
    `Hello A.R. Recruiting Agency! I am interested in applying for opportunities in ${country.name}. Please guide me on the process.`
  );

  return (
    <div className="space-y-8">
      {/* Back link */}
      <Link to="/countries" className="inline-flex items-center gap-2 text-sm font-medium text-ink/50 hover:text-primary transition-colors">
        <i className="fas fa-arrow-left" /> All Countries
      </Link>

      {/* Hero with image */}
      <div className="bg-white rounded-2xl shadow-sm border border-secondary/10 overflow-hidden">
        {!imgError ? (
          <img
            src={country.image}
            alt={`Recruitment in ${country.name}`}
            className="w-full h-48 sm:h-56 object-cover"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-48 sm:h-56 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
            <span className="text-6xl">{country.flag}</span>
          </div>
        )}
        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{country.flag}</span>
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-ink">{country.name}</h1>
              <p className="text-ink/50 text-sm mt-1">Recruitment opportunities in {country.name}</p>
            </div>
          </div>
          <p className="text-ink/65 text-sm sm:text-base leading-relaxed">{country.description}</p>
        </div>
      </div>

      {/* Roles */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-secondary/10">
        <h2 className="text-xl font-bold text-ink mb-4 flex items-center gap-2">
          <i className="fas fa-briefcase text-primary" />
          Available Roles
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {country.roles.map((role) => (
            <div key={role} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-background/50 border border-secondary/10">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <i className="fas fa-check text-primary text-sm" />
              </div>
              <span className="text-sm font-medium text-ink">{role}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Requirements */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-secondary/10">
        <h2 className="text-xl font-bold text-ink mb-4 flex items-center gap-2">
          <i className="fas fa-clipboard-list text-primary" />
          Requirements
        </h2>
        <ul className="space-y-3">
          {country.requirements.map((req, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-ink/65">
              <i className="fas fa-circle text-[6px] text-primary mt-1.5" />
              {req}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-secondary/10 text-center">
        <h2 className="text-xl font-bold text-ink mb-2">Ready to Apply for {country.name}?</h2>
        <p className="text-ink/60 text-sm mb-5">
          Send us a message on WhatsApp and our team will guide you through the process.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={`https://wa.me/923367261436?text=${whatsappText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold bg-[#25D366] text-white hover:bg-[#20bd5a] transition-all shadow-lg"
          >
            <i className="fab fa-whatsapp text-lg" />
            Apply via WhatsApp
          </a>
          <a
            href="https://wa.me/923367261436"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold border-2 border-cta text-cta hover:bg-cta hover:text-white transition-all"
          >
            <i className="fab fa-whatsapp" />
            WhatsApp Inquiry
          </a>
        </div>
      </div>
    </div>
  );
}