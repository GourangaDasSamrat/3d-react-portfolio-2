import { motion } from "framer-motion";
import { SEO } from "../components";
import { blogs } from "../constants";

const BlogCard = ({ blog, index }) => (
  <motion.div
    className="w-full bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow border border-slate-200 group overflow-hidden flex flex-col"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.5,
      delay: index * 0.2,
    }}
    whileHover={{
      y: -10,
      scale: 1.02,
      transition: { duration: 0.2 },
    }}
  >
    <motion.div className="relative">
      <motion.img
        src={blog.image}
        alt={blog.title}
        className="w-full h-52 object-cover"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="absolute top-3 left-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-xs px-3 py-1 rounded-full shadow font-semibold"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
      >
        {blog.date}
      </motion.span>
    </motion.div>
    <motion.div
      className="flex-1 flex flex-col justify-between p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
    >
      <div>
        <motion.h3
          className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
        >
          {blog.title}
        </motion.h3>
        <motion.p
          className="text-slate-600 text-base mb-4 line-clamp-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
        >
          {blog.excerpt}
        </motion.p>
      </div>
      <motion.div
        className="flex gap-3 mt-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
      >
        <motion.a
          href={blog.links.medium}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg text-sm font-semibold shadow hover:from-blue-700 hover:to-blue-500 transition-colors text-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className="fab fa-medium"></i>
          <span> </span>
          Medium
        </motion.a>
        <motion.a
          href={blog.links.devto}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-500 text-white rounded-lg text-sm font-semibold shadow hover:from-gray-800 hover:to-gray-600 transition-colors text-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className="fab fa-dev"></i>
          <span> </span>
          Dev.to
        </motion.a>
      </motion.div>
    </motion.div>
  </motion.div>
);

const Blog = () => {
  return (
    <motion.section
      className="max-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SEO
        title="Blog | Gouranga Das Samrat"
        description="Read Gouranga Das Samrat's various blog about programming and ui/ux design."
        name="Gouranga Das Samrat"
        type="profile"
      />
      <motion.h1
        className="head-text mb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        My{" "}
        <motion.span
          className="blue-gradient_text font-semibold drop-shadow"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Blog
        </motion.span>{" "}
        Posts
      </motion.h1>

      <motion.p
        className="text-slate-500 mt-2 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Welcome to my blog section. Here, I share my thoughts, experiences, and
        insights about web development, programming, and technology. Feel free
        to explore and learn something new!
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {blogs.map((blog, index) => (
          <BlogCard key={blog.title} blog={blog} index={index} />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Blog;
