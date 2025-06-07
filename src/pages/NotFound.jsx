import { Link } from "react-router-dom";
import { SEO } from "../components";

const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-slate-900 px-4 py-12">
      <SEO
        title="404 - Page Not Found | Gouranga Das Samrat"
        description="Sorry, the page you are looking for does not exist."
        name="Gouranga Das Samrat"
        type="website"
      />
      <div className="w-full max-w-4xl mx-auto text-center">
        <h1 className="text-8xl font-bold text-blue-500 mb-4 animate-pulse">
          404
        </h1>
        <p className="text-3xl text-white mb-8 font-poppins">
          Oops! Page not found
        </p>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg hover:shadow-blue-500/50"
        >
          Return to Homepage
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
