import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/', icon: 'fa-house' },
  { label: 'About', path: '/about', icon: 'fa-circle-info' },
  { label: 'Services', path: '/services', icon: 'fa-briefcase' },
  { label: 'Countries', path: '/countries', icon: 'fa-globe' },
  { label: 'Contact', path: '/contact', icon: 'fa-envelope' },
];

export default function SplitLayout() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen((prev) => {
      if (!prev) document.body.classList.add('drawer-open');
      else document.body.classList.remove('drawer-open');
      return !prev;
    });
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    document.body.classList.remove('drawer-open');
  };

  return (
    <div className="flex h-screen bg-ink overflow-hidden">
      {/* ===== DESKTOP LEFT PANE ===== */}
      <aside className="hidden lg:flex lg:flex-col lg:w-72 xl:w-80 bg-ink text-white flex-shrink-0 overflow-y-auto">
        {/* Brand */}
        <div className="px-6 pt-8 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white text-lg font-bold shadow-lg shadow-primary/30">
              M
            </div>
            <div>
              <h1 className="text-lg font-extrabold leading-tight">
                Mahail <span className="text-primary">Overseas</span>
              </h1>
              <p className="text-[10px] text-white/50 font-medium tracking-wider uppercase">
                Employment Promoters
              </p>
            </div>
          </div>
          <span className="inline-block text-[10px] font-bold bg-primary/20 text-primary px-2.5 py-0.5 rounded-full tracking-wider">
            Lic. (Add when available)
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-primary/15 text-primary shadow-sm'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`
              }
            >
              <i className={`fas ${item.icon} w-5 text-center text-base`} />
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* WhatsApp CTA */}
        <div className="px-4 py-4">
          <a
            href="https://wa.me/923005866833"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-cta text-ink font-bold py-3 rounded-xl text-sm hover:brightness-110 transition-all shadow-lg shadow-cta/20"
          >
            <i className="fab fa-whatsapp text-lg" />
            Chat on WhatsApp
          </a>
        </div>

        {/* Contact block */}
        <div className="px-6 pb-6 pt-2 border-t border-white/10 text-xs text-white/40 space-y-2">
          <p className="flex items-start gap-2">
            <i className="fas fa-map-marker-alt text-primary mt-0.5" />
            <span>
              Office #08, 2nd Floor, Shan Plaza,<br />
              Sikanderpura Chowk, near Shawal Hotel,<br />
              Hashtnagri, Peshawar, 25000, KPK
            </span>
          </p>
          <a
            href="https://wa.me/923005866833"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/50 hover:text-cta transition-colors"
          >
            <i className="fab fa-whatsapp text-green-400" />
            0300-5866833
          </a>
          <a
            href="mailto:info@mahailoverseas.pk"
            className="flex items-center gap-2 text-white/50 hover:text-cta transition-colors"
          >
            <i className="fas fa-envelope" />
            info@mahailoverseas.pk
          </a>
        </div>
      </aside>

      {/* ===== MOBILE TOP BAR ===== */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-ink text-white flex items-center justify-between px-4 py-3 border-b border-white/10">
        <button onClick={toggleDrawer} className="text-xl p-1" aria-label="Toggle menu">
          <i className={`fas ${drawerOpen ? 'fa-times' : 'fa-bars'}`} />
        </button>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center text-white text-xs font-bold">
            M
          </div>
          <span className="text-sm font-bold">
            Mahail <span className="text-primary">Overseas</span>
          </span>
        </div>
        <a
          href="https://wa.me/923005866833"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cta text-xl"
        >
          <i className="fab fa-whatsapp" />
        </a>
      </div>

      {/* ===== MOBILE DRAWER OVERLAY ===== */}
      {drawerOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          onClick={closeDrawer}
        />
      )}

      {/* ===== MOBILE DRAWER ===== */}
      <div
        className={`lg:hidden fixed top-0 left-0 z-50 h-full w-72 bg-ink text-white transform transition-transform duration-300 ease-in-out ${
          drawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="pt-4 pb-4 px-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white text-sm font-bold">
              M
            </div>
            <div>
              <p className="text-sm font-bold leading-tight">
                Mahail <span className="text-primary">Overseas</span>
              </p>
              <p className="text-[9px] text-white/40 uppercase tracking-wider">Employment Promoters</p>
            </div>
          </div>
          <button onClick={closeDrawer} className="text-white/60 text-lg p-1">
            <i className="fas fa-times" />
          </button>
        </div>

        <nav className="px-3 py-3 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              onClick={closeDrawer}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-primary/15 text-primary'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`
              }
            >
              <i className={`fas ${item.icon} w-5 text-center text-base`} />
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 px-4 pb-6 pt-4 border-t border-white/10">
          <a
            href="https://wa.me/923005866833"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-cta text-ink font-bold py-3 rounded-xl text-sm hover:brightness-110 transition-all"
          >
            <i className="fab fa-whatsapp text-lg" />
            Chat on WhatsApp
          </a>
          <p className="text-[10px] text-white/30 text-center mt-3">
            Office #08, 2nd Floor, Shan Plaza, Hashtnagri, Peshawar
          </p>
        </div>
      </div>

      {/* ===== RIGHT CONTENT PANE ===== */}
      <main className="flex-1 overflow-y-auto right-pane bg-background pt-[60px] lg:pt-0">
        <div className="page-enter min-h-screen">
          <Outlet />
        </div>
      </main>
    </div>
  );
}