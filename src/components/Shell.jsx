import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function Shell() {
  return (
    <div className="min-h-screen bg-background font-sans text-ink">
      <Sidebar />
      {/* Main content area - offset for desktop sidebar */}
      <main className="lg:ml-64 min-h-screen p-4 md:p-6 lg:p-8">
        <div className="max-w-6xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}