export default function CTA() {
  return (
    <section className="relative py-16 lg:py-20 bg-gradient-to-r from-primary via-highlight to-accent overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
          Ready to Start Your Journey?
        </h2>
        <p className="text-white/85 text-lg max-w-2xl mx-auto mb-8">
          Take the first step toward a better future abroad. Our team is ready to help you every step of the way.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/923015509434"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl text-base font-bold bg-cta text-ink hover:bg-cta/90 transition-all shadow-lg shadow-black/20 hover:shadow-xl hover:-translate-y-0.5"
          >
            <i className="fab fa-whatsapp text-lg" />
            Apply Now on WhatsApp
          </a>
          <a
            href="tel:0515566780"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl text-base font-semibold bg-white/20 text-white border border-white/30 hover:bg-white/30 transition-all backdrop-blur-sm"
          >
            <i className="fas fa-phone text-lg" />
            Call 051-5566780
          </a>
        </div>
      </div>
    </section>
  );
}