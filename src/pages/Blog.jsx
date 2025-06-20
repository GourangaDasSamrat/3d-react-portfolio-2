import { blogs } from "../constants";

const BlogCard = ({ blog }) => (
  <div className="w-full bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow border border-slate-200 group overflow-hidden flex flex-col hover:-translate-y-1 hover:scale-[1.025] duration-300">
    <div className="relative">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <span className="absolute top-3 left-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-xs px-3 py-1 rounded-full shadow font-semibold">
        {blog.date}
      </span>
    </div>
    <div className="flex-1 flex flex-col justify-between p-6">
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
          {blog.title}
        </h3>
        <p className="text-slate-600 text-base mb-4 line-clamp-3">
          {blog.excerpt}
        </p>
      </div>
      <div className="flex gap-3 mt-auto">
        <a
          href={blog.links.medium}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg text-sm font-semibold shadow hover:from-blue-700 hover:to-blue-500 transition-colors text-center"
        >
          Medium
        </a>
        <a
          href={blog.links.devto}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-500 text-white rounded-lg text-sm font-semibold shadow hover:from-gray-800 hover:to-gray-600 transition-colors text-center"
        >
          Dev.to
        </a>
      </div>
    </div>
  </div>
);

const Blog = () => {
  return (
    <section className="max-container">
      <h1 className="head-text mb-2">
        My{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Blog
        </span>
      </h1>
      <div className="bg-gradient-to-r from-blue-50 to-slate-100 rounded-xl p-6 md:p-10 mb-10 shadow flex flex-col md:flex-row items-center gap-6 md:gap-12 border border-blue-100">
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-2">
            Insights, Tutorials & Stories
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Welcome to my blog! Here you'll find in-depth articles, practical
            guides, and personal stories about web development, React, and the
            latest in tech. Whether you're a beginner or a seasoned developer,
            there's something here for you. Stay curious and keep building!
          </p>
        </div>
        <div className="flex-shrink-0 hidden md:block animate-float">
          <svg
            width="90"
            height="90"
            viewBox="0 0 90 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="45" cy="45" r="45" fill="#2563EB" fillOpacity="0.1" />
            <path
              d="M30 60L60 30M60 30H35M60 30V55"
              stroke="#2563EB"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="mt-8 container mx-auto px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
      </div>
      <style>{`
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};

export default Blog;
