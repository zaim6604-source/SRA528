import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import LazyImage from '../components/LazyImage';

export default function Home() {
  return (
    <div className="page-transition">
      {/* Magazine-Cover Hero */}
      <section className="hero">
        <div className="hero-bg">
          <img src="/src/assets/images/hero.jpg" alt="Global opportunities" />
        </div>
        <div className="hero-overlay" />
        <div className="container hero-content">
          <FadeIn>
            <span className="hero-kicker">
              <i className="fas fa-shield-halved" style={{ marginRight: 8 }} />
              Govt. Licensed OEP — 2229/PWR
            </span>
          </FadeIn>
          <FadeIn delay={1}>
            <h1>A Brotherhood That Turns Applications into Departures</h1>
          </FadeIn>
          <FadeIn delay={2}>
            <p>
              Al-Imran Brothers guides Hangu&rsquo;s workers into trusted Gulf and European
              jobs — licensed, honest, and thorough.
            </p>
          </FadeIn>
          <FadeIn delay={3}>
            <div className="hero-buttons">
              <a
                href="https://wa.me/923005967332"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <i className="fas fa-paper-plane" /> Apply Now
              </a>
              <a
                href="https://wa.me/923005967332"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ borderColor: 'rgba(255,255,255,0.6)', color: 'white' }}
              >
                <i className="fab fa-whatsapp" /> WhatsApp Us
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stat Line */}
      <section className="stat-line">
        <div className="stat-grid">
          {[
            { value: '500+', label: 'Workers Placed' },
            { value: '9', label: 'Countries' },
            { value: '8+', label: 'Years Experience' },
            { value: '2229/PWR', label: 'Licensed OEP' },
          ].map((s, i) => (
            <FadeIn key={s.label} delay={i + 1}>
              <div className="stat-item">
                <div className="stat-number">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Featured Articles */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <span className="tag">Featured Articles</span>
            <h2 className="section-title">Explore Al-Imran Brothers</h2>
            <p className="section-subtitle">
              Discover our story, the services we offer, and the countries we connect you to.
            </p>
          </FadeIn>

          <div className="featured-grid">
            <FadeIn delay={1}>
              <div className="featured-card">
                <div className="featured-card-image">
                  <LazyImage src="/src/assets/images/office.jpg" alt="Our Story" />
                </div>
                <div className="featured-card-body">
                  <div className="featured-card-tag">About</div>
                  <h3>Our Story</h3>
                  <p>
                    From Qasmi Market, Thall to the world — the Al-Imran Brothers story of
                    trust, family values, and licensed recruitment.
                  </p>
                  <Link to="/story" className="featured-card-link">
                    Read Article <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={2}>
              <div className="featured-card">
                <div className="featured-card-image">
                  <LazyImage src="/src/assets/images/uae.jpg" alt="Our Services" />
                </div>
                <div className="featured-card-body">
                  <div className="featured-card-tag">Services</div>
                  <h3>What We Offer</h3>
                  <p>
                    From visa processing to pre-departure orientation — comprehensive
                    recruitment services under one roof.
                  </p>
                  <Link to="/services" className="featured-card-link">
                    View Services <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={3}>
              <div className="featured-card">
                <div className="featured-card-image">
                  <LazyImage src="/src/assets/images/saudi.jpg" alt="Country Guides" />
                </div>
                <div className="featured-card-body">
                  <div className="featured-card-tag">Guides</div>
                  <h3>Country Guides</h3>
                  <p>
                    Detailed guides to working in Saudi Arabia, UAE, Qatar, Germany, and
                    more — with in-demand roles and requirements.
                  </p>
                  <Link to="/guides" className="featured-card-link">
                    Explore Destinations <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}