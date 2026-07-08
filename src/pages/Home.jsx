import { Link } from 'react-router-dom';
import { jobs } from '../data/jobs';

const stats = [
  { value: '500+', label: 'Workers Placed' },
  { value: '9', label: 'Countries' },
  { value: '98%', label: 'Success Rate' },
  { value: '8+', label: 'Years Experience' },
];

const featuredJobs = jobs.slice(0, 4);

export default function Home() {
  return (
    <div className="animate-fade-in">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-highlight to-ink px-6 py-20 md:py-28 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-accent blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-secondary blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/15 text-secondary font-bold text-xs px-4 py-1.5 rounded-full mb-4 backdrop-blur-sm">
            OEP License No. 2214/MLK
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Find the Job. Pick the Country.<br />
            <span className="text-secondary">We Handle the Rest.</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
            Warda International connects skilled Pakistani workers with top employers across the Gulf, Europe, and Asia.
            Government-licensed, trusted, and results-driven.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/jobs"
              className="inline-flex items-center gap-2 bg-cta text-ink font-bold px-7 py-3.5 rounded-xl hover:brightness-110 transition-all shadow-lg text-lg"
            >
              <i className="fas fa-briefcase" /> Browse Jobs
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/20 transition-all border border-white/20 text-lg"
            >
              <i className="fas fa-phone" /> Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <section className="bg-ink px-6 py-8">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-primary">{stat.value}</div>
              <div className="text-white/50 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED OPENINGS */}
      <section className="px-6 py-16 md:py-20 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-extrabold text-ink mb-2">
            Featured <span className="text-primary">Openings</span>
          </h2>
          <p className="text-ink/60">Hand-picked opportunities from our trusted partners</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredJobs.map((job) => (
            <Link
              key={job.id}
              to={`/jobs/${job.id}`}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-5 group"
            >
              <span className="text-3xl block mb-2">{job.flag}</span>
              <span className="inline-block bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                {job.tag}
              </span>
              <h3 className="font-bold text-ink mt-2 text-sm">{job.role}</h3>
              <p className="text-ink/50 text-xs mt-1">{job.country}</p>
              <div className="mt-3 flex items-center gap-1 text-accent text-xs font-semibold group-hover:gap-2 transition-all">
                View Details <i className="fas fa-arrow-right text-[10px]" />
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/jobs"
            className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-xl hover:brightness-110 transition-all shadow-lg"
          >
            View All Jobs <i className="fas fa-arrow-right" />
          </Link>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-gradient-to-r from-accent to-accent/80 px-6 py-14">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-ink mb-3">
            Ready to Start Your International Career?
          </h2>
          <p className="text-ink/70 mb-6">
            Take the first step toward a better future. Apply now and let Warda International guide you.
          </p>
          <a
            href="https://wa.me/923038799996?text=Hi%20Warda%20International!%20I%20am%20interested%20in%20overseas%20employment%20opportunities."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-ink text-white font-bold px-7 py-3.5 rounded-xl hover:brightness-150 transition-all shadow-lg"
          >
            <i className="fab fa-whatsapp" /> Apply on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}