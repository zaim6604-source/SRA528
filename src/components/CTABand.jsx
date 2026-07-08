import { Link } from 'react-router-dom';

export default function CTABand() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary via-secondary to-primary relative overflow-hidden">
      <div className="absolute top-6 left-10 text-white/20 text-3xl"><i className="fas fa-star" /></div>
      <div className="absolute bottom-6 right-10 text-white/20 text-2xl"><i className="fas fa-sparkle" /></div>
      <div className="absolute top-1/2 right-1/4 text-white/10 text-4xl"><i className="fas fa-star" /></div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white font-heading mb-4">
          Find the Job. Pick the Country.
        </h2>
        <p className="text-white/80 text-lg md:text-xl mb-8 max-w-xl mx-auto">
          Your international career is one conversation away. Let's make it happen.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/jobs"
            className="bg-cta text-white px-8 py-3.5 rounded-full text-lg font-bold hover:brightness-110 transition-all shadow-xl shadow-cta/40"
          >
            Apply Now
          </Link>
          <a
            href="https://wa.me/923008477507"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 backdrop-blur-sm text-white border-2 border-white px-8 py-3.5 rounded-full text-lg font-bold hover:bg-white hover:text-primary transition-all"
          >
            <i className="fab fa-whatsapp mr-2" />Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}