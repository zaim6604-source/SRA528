import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { countries } from '../data/countries';

export default function CountryDetail() {
  const { slug } = useParams();
  const country = countries.find((c) => c.slug === slug);
  const [imgError, setImgError] = useState(false);

  if (!country) {
    return (
      <div className="animate-fade-in px-6 py-20 text-center">
        <div className="max-w-md mx-auto">
          <span className="text-6xl block mb-4">🌍</span>
          <h1 className="text-2xl font-extrabold text-ink mb-2">Country Not Found</h1>
          <p className="text-ink/60 mb-6">We don't have listings for this country yet.</p>
          <Link
            to="/countries"
            className="inline-flex items-center gap-2 bg-primary text-white font-bold px-5 py-2.5 rounded-xl hover:brightness-110 transition-all"
          >
            <i className="fas fa-arrow-left" /> Back to Countries
          </Link>
        </div>
      </div>
    );
  }

  const whatsappText = encodeURIComponent(
    `Hello Mahail Overseas! I am interested in ${country.name} jobs. Please guide me about the available roles and requirements.`
  );

  return (
    <div className="animate-fade-in">
      {/* HERO */}
      <section className={`px-6 py-16 md:py-20 bg-gradient-to-br ${country.color} text-white relative overflow-hidden`}>
        <div className="absolute top-5 right-5 text-8xl opacity-10">{country.flag}</div>
        <div className="max-w-4xl mx-auto relative z-10">
          <Link
            to="/countries"
            className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-sm mb-4 transition-colors"
          >
            <i className="fas fa-arrow-left text-xs" /> All Countries
          </Link>
          <span className="text-4xl block mb-2">{country.flag}</span>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-2">{country.name}</h1>
          <p className="text-white/80 text-xl font-medium">{country.tagline}</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 py-12 md:py-16 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* LEFT: Details */}
          <div className="lg:col-span-3 space-y-8">
            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={imgError ? 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop' : country.img}
                alt={`${country.name} landmark`}
                className="w-full h-56 object-cover"
                onError={() => setImgError(true)}
              />
            </div>

            {/* Available Roles */}
            <div>
              <h2 className="text-xl font-extrabold text-ink mb-4">
                <i className="fas fa-briefcase text-primary mr-2" />
                Available Roles
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {country.roles.map((role) => (
                  <div
                    key={role}
                    className="bg-white rounded-xl px-4 py-3 shadow-sm border border-ink/5 flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm text-ink/80">{role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div>
              <h2 className="text-xl font-extrabold text-ink mb-4">
                <i className="fas fa-clipboard-list text-primary mr-2" />
                Requirements
              </h2>
              <ul className="space-y-2">
                {country.requirements.map((req) => (
                  <li key={req} className="flex items-start gap-3 text-sm text-ink/70">
                    <i className="fas fa-circle-check text-cta mt-0.5 text-sm" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT: Sidebar */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6 space-y-5">
              <div className="text-center">
                <span className="text-4xl">{country.flag}</span>
                <h3 className="text-xl font-bold text-ink mt-2">{country.name}</h3>
                <p className="text-ink/50 text-sm">{country.roles.length} roles available</p>
              </div>

              <a
                href={`https://wa.me/923005866833?text=${whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-cta text-ink font-bold py-3.5 rounded-xl hover:brightness-110 transition-all shadow-lg"
              >
                <i className="fab fa-whatsapp text-lg" />
                Apply Now for {country.name}
              </a>

              <div className="bg-background rounded-xl p-4">
                <h4 className="font-bold text-ink text-sm mb-2">Quick Overview</h4>
                <div className="space-y-2 text-sm text-ink/60">
                  <div className="flex justify-between">
                    <span>Region</span>
                    <span className="font-medium text-ink">
                      {['Saudi Arabia', 'UAE', 'Qatar', 'Oman', 'Kuwait'].includes(country.name) ? 'Middle East' :
                       ['Germany', 'Poland', 'Romania'].includes(country.name) ? 'Europe' : 'Asia'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Available Roles</span>
                    <span className="font-medium text-ink">{country.roles.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Processing Time</span>
                    <span className="font-medium text-ink">
                      {['Germany', 'Poland', 'Romania'].includes(country.name) ? '2–4 months' : '2–6 weeks'}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-ink/40 text-center">
                Have questions? <a href="https://wa.me/923005866833" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Chat with us</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-14 bg-ink text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Ready to Work in {country.name}?</h2>
          <p className="text-white/60 mb-6">Take the first step. Apply now and our team will guide you through the entire process.</p>
          <a
            href={`https://wa.me/923005866833?text=${whatsappText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cta text-ink font-bold px-6 py-3 rounded-xl hover:brightness-110 transition-all"
          >
            <i className="fab fa-whatsapp" /> Apply via WhatsApp
          </a>
        </div>
      </section>

      <footer className="bg-ink/80 text-white/50 px-6 py-6 text-center text-xs border-t border-white/10">
        &copy; {new Date().getFullYear()} Mahail Overseas Employment Promoters
      </footer>
    </div>
  );
}