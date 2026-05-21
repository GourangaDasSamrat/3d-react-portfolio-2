import { motion } from "framer-motion";
import SEO from "../components/SEO";
import { certifications } from "../constants";

const Certifications = () => {
  return (
    <motion.section
      className="max-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SEO title="Certifications | Gouranga Das Samrat" />

      <motion.h1
        className="head-text"
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
          Certifications
        </motion.span>
      </motion.h1>

      <motion.div
        className="mt-5 flex flex-col gap-3 text-slate-500"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          These certifications represent my commitment to continuous learning
          and professional development in the field of web development and
          software engineering.
        </motion.p>
      </motion.div>

      <motion.div
        className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.8 + index * 0.2,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{
              y: -10,
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
            className="w-full p-4 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-shadow flex flex-col"
          >
            <motion.div
              className="relative w-full h-48 mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1 + index * 0.2 }}
              />
              <motion.div
                className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 1.2 + index * 0.2 }}
              >
                {cert.date}
              </motion.div>
            </motion.div>

            <motion.h3
              className="text-xl font-bold mb-2 text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1.4 + index * 0.2 }}
            >
              {cert.title}
            </motion.h3>

            <motion.h4
              className="w-fit bg-gray-400 text-white text-xs px-2 py-1 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1.4 + index * 0.2 }}
            >
              Issued by: {cert.org}
            </motion.h4>

            <motion.p
              className="text-gray-600 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 1.6 + index * 0.2 }}
            >
              {cert.description}
            </motion.p>

            <motion.a
              href={cert.verificationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors mt-auto w-fit self-start text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1.8 + index * 0.2 }}
            >
              View Certificate
              <span> </span>
              <i className="fas fa-external-link"></i>
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Certifications;
