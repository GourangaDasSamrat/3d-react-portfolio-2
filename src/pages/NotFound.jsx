import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-slate-900 px-4">
      <h1 className="text-6xl font-bold text-blue-500 mb-4">404</h1>
      <p className="text-2xl text-white mb-8">Oops! Page not found</p>
      <p className="text-lg text-gray-300 mb-8 text-center">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        Go Back Home
      </Link>
    </section>
  );
};

export default NotFound;
