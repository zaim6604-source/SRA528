import { Link } from 'react-router-dom';
import services from '../data/services';

export default function Services() {
  return (
    <div className="space-y-8">
      <div className="text-center sm:text-left">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20 mb-3">
          <i className="fas fa-concierge-bell" />
          OUR SERVICES
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-ink mt-2">
          What We Offer
        </h1>
        <p className="text-ink/60 mt-2 max-w-2xl">
          Comprehensive recruitment and support services tailored to your overseas employment journey.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {services.map((svc) => (
          <div
            key={svc.id}
            className="bg-white rounded-xl overflow-hidden shadow-sm border border-secondary/10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
          >
            {/* Colored top bar */}
            <div className={`h-2 bg-gradient-to-r ${svc.color}`} />

            <div className="p-5">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                <i className={`fas ${svc.icon} text-primary group-hover:text-white transition-colors text-lg`} />
              </div>
              <h3 className="font-bold text-ink text-base mb-2">{svc.title}</h3>
              <p className="text-ink/60 text-sm leading-relaxed">{svc.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-secondary/10 text-center">
        <h2 className="text-xl font-bold text-ink mb-2">Need a Specific Service?</h2>
        <p className="text-ink/60 text-sm mb-5">
          Get in touch with our team for personalized guidance.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="tel:+920514410484"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-cta text-white hover:bg-cta/90 transition-all shadow-md"
          >
            <i className="fas fa-phone-alt" />
            Call 051-4410484
          </a>
          <Link
            to="/apply"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all"
          >
            <i className="fas fa-paper-plane" />
            Submit Enquiry
          </Link>
        </div>
      </div>
    </div>
  );
}