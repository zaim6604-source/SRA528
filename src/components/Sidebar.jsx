import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', icon: 'fa-chart-pie', label: 'Overview' },
  { to: '/services', icon: 'fa-briefcase', label: 'Services' },
  { to: '/destinations', icon: 'fa-globe-asia', label: 'Destinations' },
  { to: '/process', icon: 'fa-route', label: 'Process' },
  { to: '/apply', icon: 'fa-file-alt', label: 'Apply Now' },
];

export default function Sidebar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const sidebarContent = (
    <div className="h-full flex flex-col">
      {/* Logo */}
      <div className="p-5 border-b border-white/10">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-primary font-extrabold text-lg shadow-lg">
            T
          </div>
          <div>
            <div className="text-white font-bold text-sm leading-tight">Touchi</div>
            <div className="text-accent text-[10px] font-semibold tracking-wider">INTERNATIONAL</div>
          </div>
        </NavLink>
        <div className="mt-3 inline-block bg-cta/20 text-cta text-[10px] font-bold px-2.5 py-1 rounded-full border border-cta/30">
          2238/RWP
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto sidebar-scroll">
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === '/'}
            onClick={() => setDrawerOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                isActive
                  ? 'bg-cta text-white shadow-lg shadow-cta/30'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`
            }
          >
            <i className={`fas ${l.icon} w-5 text-center`} />
            {l.label}
          </NavLink>
        ))}
      </nav>

      {/* WhatsApp CTA */}
      <div className="p-4 border-t border-white/10 space-y-3">
        <a
          href="https://wa.me/923333312207"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-green-500/20 hover:bg-green-500/30 text-green-300 px-4 py-3 rounded-xl text-sm font-semibold transition-all"
        >
          <i className="fab fa-whatsapp text-lg" />
          <span>0333-3312207</span>
        </a>
        <a
          href="https://wa.me/923367319997"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-green-500/10 hover:bg-green-500/20 text-green-300/80 px-4 py-2.5 rounded-xl text-xs font-medium transition-all"
        >
          <i className="fab fa-whatsapp text-base" />
          <span>0336-7319997</span>
        </a>
        <div className="text-white/40 text-[11px] px-1 leading-relaxed">
          Office #6, 1st Floor, Rehman Plaza, I-10/4, Islamabad
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile hamburger */}
      <button
        onClick={() => setDrawerOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 w-10 h-10 rounded-xl bg-white shadow-lg flex items-center justify-center text-primary"
        aria-label="Menu"
      >
        <i className="fas fa-bars" />
      </button>

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-64 bg-primary flex-col z-40">
        {sidebarContent}
      </aside>

      {/* Mobile drawer overlay */}
      {drawerOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-black/50" onClick={() => setDrawerOpen(false)} />
          <div className="relative w-72 bg-primary h-full shadow-2xl animate-slide-in">
            <button
              onClick={() => setDrawerOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white"
            >
              <i className="fas fa-times" />
            </button>
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
}