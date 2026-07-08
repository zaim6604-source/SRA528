import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { jobs } from '../data/jobs';

const FALLBACK_IMG = 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop';

export default function JobDetail() {
  const { id } = useParams();
  const job = jobs.find((j) => j.id === id);
  const [imgError, setImgError] = useState(false);

  if (!job) {
    return (
      <div className="animate-fade-in px-6 py-20 text-center">
        <span className="text-5xl block mb-4">🔍</span>
        <h2 className="text-2xl font-bold text-ink mb-2">Job Not Found</h2>
        <p className="text-ink/60 mb-6">This position is no longer available or the link is incorrect.</p>
        <Link to="/jobs" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-xl hover:brightness-110 transition-all">
          <i className="fas fa-arrow-left" /> Back to Jobs
        </Link>
      </div>
    );
  }

  const whatsappText = `Hi Warda International! I am interested in the ${encodeURIComponent(job.role)} position in ${encodeURIComponent(job.country)}. I would like to apply.`;

  return (
    <div className="animate-fade-in">
      {/* HERO IMAGE */}
      <div className="relative h-56 md:h-72 overflow-hidden">
        <img
          src={imgError ? FALLBACK_IMG : job.img}
          alt={job.country}
          className="w-full h-full object-cover"
          onError={() => setImgError(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent" />
        <div className="absolute bottom-6 left-6 md:left-10">
          <Link to="/jobs" className="text-white/60 hover:text-accent text-sm mb-2 inline-block">
            <i className="fas fa-arrow-left mr-1" /> Back to Jobs
          </Link>
          <h1 className="text-2xl md:text-4xl font-extrabold text-white">{job.role}</h1>
          <p className="text-white/70 text-lg">
            {job.flag} {job.country} · <span className="text-cta font-semibold">{job.tag}</span>
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* MAIN CONTENT */}
        <div className="lg:col-span-2 space-y-8">
          {/* Description */}
          <section>
            <h2 className="text-xl font-bold text-ink mb-3">About This Role</h2>
            <p className="text-ink/70 leading-relaxed">{job.description}</p>
          </section>

          {/* Requirements */}
          <section>
            <h2 className="text-xl font-bold text-ink mb-3 flex items-center gap-2">
              <i className="fas fa-clipboard-check text-primary" /> Requirements
            </h2>
            <ul className="space-y-2">
              {job.requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-2.5 text-ink/70">
                  <i className="fas fa-check-circle text-accent mt-1 text-sm" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Documents */}
          <section>
            <h2 className="text-xl font-bold text-ink mb-3 flex items-center gap-2">
              <i className="fas fa-file-alt text-primary" /> Required Documents
            </h2>
            <ul className="space-y-2">
              {job.documents.map((doc, i) => (
                <li key={i} className="flex items-start gap-2.5 text-ink/70">
                  <i className="fas fa-file text-secondary mt-1 text-sm" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* SIDEBAR */}
        <div className="space-y-5">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="font-bold text-ink text-sm mb-4">Quick Overview</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-ink/50">Country</span>
                <span className="font-semibold">{job.flag} {job.country}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-ink/50">Region</span>
                <span className="font-semibold text-primary">{job.tag}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-ink/50">Role</span>
                <span className="font-semibold text-right">{job.role}</span>
              </div>
            </div>
          </div>

          <a
            href={`https://wa.me/923038799996?text=${whatsappText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-cta text-ink font-bold py-3.5 rounded-xl hover:brightness-110 transition-all shadow-lg text-lg"
          >
            <i className="fab fa-whatsapp" /> Apply Now
          </a>

          <div className="bg-ink/5 rounded-xl p-4 text-xs text-ink/50 leading-relaxed">
            <p className="font-semibold text-ink mb-1">Need Help?</p>
            <p>Call us at <strong className="text-ink">0945-822507</strong> or visit our office in Timergara.</p>
            <p className="mt-1">Office No. 10, Birmingham Plaza, Rest House Road, Timergara, Lower Dir.</p>
          </div>
        </div>
      </div>
    </div>
  );
}