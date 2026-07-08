import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import QuickApply from './QuickApply';

const navLinks = [
  { to: '/', label: 'Home', icon: 'fa-house' },
  { to: '/jobs', label: 'Jobs', icon: 'fa-briefcase' },
  { to: '/about', label: 'About', icon: 'fa-info-circle' },
  { to: '/contact', label: 'Contact', icon: 'fa-envelope' },
];

export default function Layout() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <div className="min-h-screen bg-background font-sans">
      <ScrollToTop />

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-ink text-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-white font-extrabold text-sm">
              WI
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-bold leading-tight">Warda International</div>
              <div className="text-[10px] text-white/50 font-medium">OEP 2214/MLK</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive ? 'bg-primary text-white' : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                <i className={`fas ${link.icon} mr-1.5`} />
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="https://wa.me/923038799996"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-cta text-ink font-bold px-4 py-2 rounded-lg text-sm hover:brightness-110 transition-all"
          >
            <i className="fab fa-whatsapp" /> WhatsApp
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setDrawerOpen(true)}
            className="md:hidden text-white/70 hover:text-white text-xl"
            aria-label="Open menu"
          >
            <i className="fas fa-bars" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-50 bg-ink/60 animate-fade-overlay md:hidden"
          onClick={closeDrawer}
        >
          <div
            className="absolute right-0 top-0 h-full w-72 bg-ink shadow-2xl animate-slide-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-5">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-white font-extrabold text-sm">
                    WI
                  </div>
                  <div className="text-white font-bold text-sm">Warda Intl.</div>
                </div>
                <button onClick={closeDrawer} className="text-white/50 hover:text-white text-lg">
                  <i className="fas fa-times" />
                </button>
              </div>

              <nav className="flex flex-col gap-1.5 mb-6">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === '/'}
                    onClick={closeDrawer}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        isActive ? 'bg-primary text-white' : 'text-white/70 hover:text-white hover:bg-white/10'
                      }`
                    }
                  >
                    <i className={`fas ${link.icon} w-5 text-center`} />
                    {link.label}
                  </NavLink>
                ))}
              </nav>

              <a
                href="https://wa.me/923038799996"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-cta text-ink font-bold py-3 rounded-xl text-sm hover:brightness-110 transition-all"
              >
                <i className="fab fa-whatsapp" /> Chat on WhatsApp
              </a>

              <div className="mt-8 text-white/30 text-xs leading-relaxed border-t border-white/10 pt-4">
                <p>Office No. 10, First Floor</p>
                <p>Birmingham Plaza, Rest House Road</p>
                <p>Timergara, Lower Dir, KPK</p>
                <p className="mt-2">Phone: 0945-822507</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MAIN CONTENT */}
      <main className="min-h-[calc(100vh-64px)]">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="bg-ink text-white">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-white font-extrabold text-sm">
                  WI
                </div>
                <div>
                  <div className="font-bold text-sm">Warda International</div>
                  <div className="text-[10px] text-white/50">OEP 2214/MLK</div>
                </div>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                Govt. Licensed Overseas Employment Promoter connecting skilled Pakistani workers with top employers worldwide.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-3 text-primary">Quick Links</h4>
              <nav className="flex flex-col gap-2">
                <Link to="/" className="text-white/50 hover:text-accent text-sm transition-all">Home</Link>
                <Link to="/jobs" className="text-white/50 hover:text-accent text-sm transition-all">Jobs Portal</Link>
                <Link to="/about" className="text-white/50 hover:text-accent text-sm transition-all">About Us</Link>
                <Link to="/contact" className="text-white/50 hover:text-accent text-sm transition-all">Contact</Link>
              </nav>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-3 text-primary">Contact</h4>
              <div className="text-white/50 text-sm leading-relaxed space-y-1">
                <p><i className="fas fa-location-dot w-4 text-accent" /> Office No. 10, First Floor</p>
                <p className="pl-4">Birmingham Plaza, Rest House Road</p>
                <p className="pl-4">Timergara, Lower Dir, KPK</p>
                <p className="mt-2"><i className="fas fa-phone w-4 text-accent" /> 0945-822507</p>
                <p><i className="fab fa-whatsapp w-4 text-accent" /> <a href="https://wa.me/923038799996" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all">0303-8799996</a></p>
                <p><i className="fas fa-envelope w-4 text-accent" /> info@wardaintl.pk</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-6 text-center text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Warda International. All rights reserved. OEP License No. 2214/MLK.
          </div>
        </div>
      </footer>

      <QuickApply />
    </div>
  );
}