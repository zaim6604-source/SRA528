import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand-name">Al-Imran Brothers</div>
          <div className="footer-license">Govt. Licensed OEP — License No. 2229/PWR</div>
          <p>
            A trusted recruitment agency serving the Hangu and Kohat regions from our office
            at Qasmi Market No. 2, Thall City. We guide Pakistani workers into verified,
            rewarding employment across the Gulf and Europe.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/story">Our Story</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/guides">Country Guides</Link></li>
            <li><Link to="/process">How It Works</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4>Destinations</h4>
          <ul className="footer-links">
            <li><Link to="/guides/saudi-arabia">Saudi Arabia</Link></li>
            <li><Link to="/guides/uae">United Arab Emirates</Link></li>
            <li><Link to="/guides/qatar">Qatar</Link></li>
            <li><Link to="/guides/germany">Germany</Link></li>
            <li><Link to="/guides/poland">Poland</Link></li>
            <li><Link to="/guides">View All</Link></li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <div className="footer-contact-item">
            <i className="fas fa-phone" />
            <span>0925-535832</span>
          </div>
          <div className="footer-contact-item">
            <i className="fab fa-whatsapp" />
            <div>
              <div><a href="https://wa.me/923005967332" target="_blank" rel="noopener noreferrer">0300-5967332</a></div>
              <div><a href="https://wa.me/923394913429" target="_blank" rel="noopener noreferrer">0339-4913429</a></div>
            </div>
          </div>
          <div className="footer-contact-item">
            <i className="fas fa-envelope" />
            <a href="mailto:info@alimranbrothers.pk">info@alimranbrothers.pk</a>
          </div>
          <div className="footer-contact-item">
            <i className="fas fa-location-dot" />
            <span>Qasmi Market No. 2, Thall City, District Hangu, KPK</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Al-Imran Brothers. All rights reserved. | Govt. Licensed OEP — 2229/PWR
      </div>
    </footer>
  );
}