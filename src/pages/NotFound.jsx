import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
        <i className="fas fa-map-signs text-4xl text-primary" />
      </div>
      <h1 className="text-6xl sm:text-7xl font-extrabold text-ink mb-2">404</h1>
      <h2 className="text-xl sm:text-2xl font-bold text-ink mb-3">Page Not Found</h2>
      <p className="text-ink/50 max-w-md mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-bold bg-primary text-white hover:bg-highlight transition-all shadow-lg"
      >
        <i className="fas fa-home" />
        Back to Home
      </Link>
    </div>
  );
}