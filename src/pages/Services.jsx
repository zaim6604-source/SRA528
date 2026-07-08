import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import { services } from '../data/countries';

const iconMap = [
  'fa-briefcase',
  'fa-passport',
  'fa-file-contract',
  'fa-stethoscope',
  'fa-graduation-cap',
  'fa-plane',
  'fa-shield-halved',
  'fa-users',
];

export default function Services() {
  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="services-hero">
        <div className="container">
          <FadeIn>
            <span className="tag" style={{ background: 'rgba(255,255,255,0.15)', color: 'var(--color-accent)' }}>
              <i className="fas fa-concierge-bell" style={{ marginRight: 8 }} />
              Our Services
            </span>
            <h1>Comprehensive Recruitment Solutions</h1>
            <p>
              From initial consultation to departure day — every service designed to make your
              overseas employment journey smooth, safe, and successful.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services List */}
      <section className="section">
        <div className="container">
          <div className="services-list">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={Math.min(i + 1, 4)}>
                <div className="service-article">
                  <div
                    className="service-accent"
                    style={{ backgroundColor: service.accent }}
                  >
                    <i className={`fas ${iconMap[i]}`} />
                  </div>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--color-primary)', textAlign: 'center' }}>
        <div className="container">
          <FadeIn>
            <h2 style={{ color: 'white', fontSize: '1.8rem', marginBottom: 16 }}>
              Ready to Get Started?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>
              Contact us today and let our team guide you through every step of the process.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="https://wa.me/923005967332"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <i className="fab fa-whatsapp" /> Apply via WhatsApp
              </a>
              <Link to="/contact" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.6)', color: 'white' }}>
                <i className="fas fa-paper-plane" /> Contact Form
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}