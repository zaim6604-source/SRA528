import { useState, useCallback } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/story', label: 'Our Story' },
  { to: '/services', label: 'Services' },
  { to: '/guides', label: 'Country Guides' },
  { to: '/process', label: 'How It Works' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  useState(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <NavLink to="/" className="navbar-brand" onClick={closeDrawer}>
            <span className="navbar-brand-name">Al-Imran Brothers</span>
            <span className="navbar-brand-license">Govt. Licensed OEP — 2229/PWR</span>
          </NavLink>

          <button
            className="navbar-toggle"
            onClick={() => setDrawerOpen(!drawerOpen)}
            aria-label="Toggle navigation"
          >
            <i className={`fas ${drawerOpen ? 'fa-times' : 'fa-bars'}`} />
          </button>

          <ul className={`navbar-links ${drawerOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) => isActive ? 'active' : ''}
                  onClick={closeDrawer}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div
        className={`navbar-drawer-overlay ${drawerOpen ? 'open' : ''}`}
        onClick={closeDrawer}
      />
    </>
  );
}