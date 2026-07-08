import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>
        The page you are looking for doesn&rsquo;t exist or has been moved. Let us
        help you find your way back.
      </p>
      <Link to="/" className="btn btn-primary">
        <i className="fas fa-arrow-left" /> Back to Home
      </Link>
    </div>
  );
}