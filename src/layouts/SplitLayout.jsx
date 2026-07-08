import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import QuickApply from '../components/QuickApply';

const navItems = [
  { to: '/', icon: 'fa-home', label: 'Home' },
  { to: '/about', icon: 'fa-info-circle', label: 'About' },
  { to: '/services', icon: 'fa-concierge-bell', label: 'Services' },
  { to: '/countries', icon: 'fa-globe-asia', label: 'Countries' },
  { to: '/contact', icon: 'fa-paper-plane', label: 'Contact' },
];

function SidebarContent({ close }) {
  return (
    <div className="px-5 py-6 flex flex-col flex-1">
      {/* Logo */}
      <NavLink to="/" onClick={close} className="flex items-center gap-2.5 mb-1">
        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-extrabold text-xl shadow-md">
          AR
        </div>
        <div>
          <span className="font-bold text-lg text-white">
            A.R.<span className="text-accent">.</span>
          </span>
          <span className="block text-[10px] text-white/50 font-medium tracking-wider uppercase">
            Recruiting Agency
          </span>
        </div>
      </NavLink>

      {/* License badge */}
      <div className="mb-6">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-white/10 text-white/80 border border-white/10">
          <i className="fas fa-check-circle text-[9px] text-accent" />
          License 2303/SKT
        </span>
      </div>

      {/* Navigation */}
      <nav className="space-y-1 mb-6">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            onClick={close}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                isActive
                  ? 'bg-primary/20 text-white shadow-sm'
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
      <a
        href="https://wa.me/923367261436"
        target="_blank"
        rel="noopener noreferrer"
        onClick={close}
        className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold bg-[#25D366] text-white hover:bg-[#20bd5a] transition-all shadow-md mb-8"
      >
        <i className="fab fa-whatsapp text-lg" />
        WhatsApp Now
      </a>

      {/* Contact block */}
      <div className="space-y-2.5 text-xs text-white/50">
        <p className="flex items-start gap-2.5">
          <i className="fas fa-map-marker-alt text-secondary mt-0.5 w-3.5 text-center" />
          <span>Cantonment Board, Plaza #2, Jamia Masjid Road, near General Hospital, Cantt Board, Sialkot Cantt, Sialkot, Punjab</span>
        </p>
        <p className="flex items-center gap-2.5">
          <i className="fas fa-phone text-secondary w-3.5 text-center" />
          <a href="tel:03367261436" className="hover:text-white transition-colors">0336-7261436</a>
        </p>
        <p className="flex items-center gap-2.5">
          <i className="fab fa-whatsapp text-secondary w-3.5 text-center" />
          <a href="https://wa.me/923367261436" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">0336-7261436</a>
        </p>
      </div>
    </div>
  );
}

export default function SplitLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const close = () => setMobileOpen(false);

  return (
    <div className="min-h-screen bg-background/30 flex">
      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/60 z-40 lg:hidden" onClick={close} />
      )}

      {/* Mobile drawer */}
      <aside className={`fixed top-0 left-0 z-50 h-full w-64 bg-ink shadow-2xl border-r border-white/5 overflow-y-auto flex flex-col transition-transform duration-300 ease-in-out lg:hidden ${
        mobileOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex justify-end p-3">
          <button onClick={close} className="w-8 h-8 flex items-center justify-center rounded-lg text-white/50 hover:bg-white/5" aria-label="Close">
            <i className="fas fa-times" />
          </button>
        </div>
        <SidebarContent close={close} />
      </aside>

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:shrink-0 lg:bg-ink lg:min-h-screen lg:border-r lg:border-white/5">
        <div className="sticky top-0 flex flex-col flex-1">
          <SidebarContent close={() => {}} />
        </div>
      </aside>

      {/* Right content pane */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Mobile top bar */}
        <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-secondary/10 shadow-sm lg:hidden">
          <div className="flex items-center justify-between h-14 px-4">
            <button
              onClick={() => setMobileOpen(true)}
              className="w-10 h-10 flex items-center justify-center rounded-lg text-ink hover:bg-primary/5 transition-colors"
              aria-label="Open menu"
            >
              <i className="fas fa-bars text-xl" />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center text-white font-extrabold text-xs">AR</div>
              <span className="font-bold text-sm text-ink">A.R.<span className="text-primary">.</span></span>
            </div>
            <a
              href="https://wa.me/923367261436"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-[#25D366] flex items-center justify-center text-white"
              aria-label="WhatsApp"
            >
              <i className="fab fa-whatsapp" />
            </a>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 xl:p-10">
          <div className="max-w-5xl mx-auto page-enter">
            <Outlet />
          </div>
        </main>
        <QuickApply />
      </div>
    </div>
  );
}