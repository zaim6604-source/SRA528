import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const navItems = [
  { to: '/', icon: 'fa-chart-pie', label: 'Overview' },
  { to: '/services', icon: 'fa-concierge-bell', label: 'Services' },
  { to: '/destinations', icon: 'fa-globe-asia', label: 'Destinations' },
  { to: '/process', icon: 'fa-arrow-right', label: 'Process' },
  { to: '/apply', icon: 'fa-paper-plane', label: 'Apply' },
];

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="min-h-screen bg-background/30">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-72 bg-white shadow-xl border-r border-secondary/10 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between px-5 h-16 border-b border-secondary/10">
          <NavLink to="/" onClick={closeSidebar} className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-white font-extrabold text-lg">
              F
            </div>
            <div>
              <span className="font-bold text-base text-ink">
                Fejar<span className="text-primary">.</span>
              </span>
              <span className="block text-[10px] text-ink/40 font-medium tracking-wide uppercase">
                Enterprises
              </span>
            </div>
          </NavLink>
          <button
            onClick={closeSidebar}
            className="lg:hidden w-8 h-8 flex items-center justify-center rounded-lg text-ink/50 hover:bg-primary/5 transition-colors"
            aria-label="Close sidebar"
          >
            <i className="fas fa-times" />
          </button>
        </div>

        {/* License badge */}
        <div className="px-5 pt-4 pb-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20">
            <i className="fas fa-check-circle text-[10px]" />
            License 2207/RWP
          </span>
        </div>

        {/* Navigation */}
        <nav className="px-3 py-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={closeSidebar}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-primary/10 text-primary shadow-sm'
                    : 'text-ink/60 hover:text-ink hover:bg-primary/5'
                }`
              }
            >
              <i className={`fas ${item.icon} w-5 text-center text-base`} />
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Call Now CTA */}
        <div className="px-3 mt-2">
          <a
            href="tel:+920514410484"
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-bold bg-cta text-white hover:bg-cta/90 transition-all shadow-md hover:shadow-lg"
          >
            <i className="fas fa-phone-alt" />
            Call Now
          </a>
        </div>

        {/* Sidebar footer contact */}
        <div className="absolute bottom-0 left-0 right-0 px-5 py-4 border-t border-secondary/10">
          <div className="text-xs text-ink/50 space-y-1.5">
            <p className="flex items-center gap-2">
              <i className="fas fa-map-marker-alt text-secondary w-3.5 text-center" />
              <span>Al-Mustafa Plaza, 6th Road, Rawalpindi</span>
            </p>
            <p className="flex items-center gap-2">
              <i className="fas fa-phone text-secondary w-3.5 text-center" />
              <a href="tel:0514410484" className="hover:text-primary transition-colors">
                051-4410484
              </a>
            </p>
          </div>
        </div>
      </aside>

      {/* Main content area */}
      <div className="lg:pl-72 min-h-screen flex flex-col">
        {/* Top strip */}
        <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-secondary/10 shadow-sm">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6">
            {/* Mobile hamburger */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg text-ink hover:bg-primary/5 transition-colors"
              aria-label="Open sidebar"
            >
              <i className="fas fa-bars text-xl" />
            </button>

            {/* Right side top strip */}
            <div className="flex items-center gap-3 ml-auto">
              <a
                href="tel:+920514410484"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-cta text-white hover:bg-cta/90 transition-all shadow-sm"
              >
                <i className="fas fa-phone-alt" />
                <span>051-4410484</span>
              </a>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto animate-fade-up">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}