import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import { processSteps } from '../data/countries';

export default function Process() {
  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="process-hero">
        <div className="container">
          <FadeIn>
            <span className="tag" style={{ background: 'rgba(255,255,255,0.15)', color: 'var(--color-accent)' }}>
              <i className="fas fa-list-ol" style={{ marginRight: 8 }} />
              Our Process
            </span>
            <h1>How It Works</h1>
            <p>
              A straightforward five-step journey from your first enquiry to your departure
              abroad. We guide you at every stage.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Steps */}
      <section style={{ background: 'var(--color-background)' }}>
        <div className="process-steps">
          {processSteps.map((step, i) => (
            <FadeIn key={step.number} delay={Math.min(i + 1, 4)}>
              <div className="process-step">
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <FadeIn>
            <h2 className="section-title">Begin Your Journey Today</h2>
            <p className="section-subtitle" style={{ margin: '0 auto 32px' }}>
              Take the first step. Contact Al-Imran Brothers and let us handle the rest.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="https://wa.me/923005967332"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <i className="fab fa-whatsapp" /> Start Now
              </a>
              <Link to="/contact" className="btn btn-outline">
                <i className="fas fa-paper-plane" /> Contact Us
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}