import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="animate-fade-in px-6 py-20 flex items-center justify-center min-h-[calc(100vh-60px)]">
      <div className="text-center max-w-md">
        <span className="text-7xl block mb-4">🚀</span>
        <h1 className="text-5xl font-extrabold text-ink mb-2">404</h1>
        <p className="text-xl font-semibold text-ink mb-2">Page Not Found</p>
        <p className="text-ink/60 mb-8">
          Looks like this page drifted off course. Let's get you back on track.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-xl hover:brightness-110 transition-all shadow-lg"
          >
            <i className="fas fa-house" /> Back to Home
          </Link>
          <Link
            to="/countries"
            className="inline-flex items-center gap-2 bg-cta text-ink font-bold px-6 py-3 rounded-xl hover:brightness-110 transition-all"
          >
            <i className="fas fa-globe" /> Explore Countries
          </Link>
        </div>
      </div>
    </div>
  );
}