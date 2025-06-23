import { motion } from "framer-motion";
import SEO from "../components/SEO";
import certificate1 from "/src/assets/images/certificate-1.webp";

const Certifications = () => {
  const certifications = [
    {
      title: "Front End Development Libraries",
      image: certificate1,
      date: "23 June 2025",
      description:
        "This certification showcases my expertise in front-end development libraries such as React, Redux, and Bootstrap. It highlights my ability to build dynamic and responsive user interfaces, manage application state, and create visually appealing web applications.",
      verificationLink:
        "https://freecodecamp.org/certification/GpurangaDasSamrat/front-end-development-libraries",
    },
    {
      title: "Responsive Web Design Certification",
      image: certificate1,
      date: "22 June 2025",
      description:
        "This certification demonstrates my proficiency in creating responsive and accessible web designs using HTML, CSS, and JavaScript. It covers topics such as Flexbox, Grid, and media queries to ensure websites are optimized for various devices.",
      verificationLink:
        "https://freecodecamp.org/certification/GpurangaDasSamrat/responsive-web-design",
    },
  ];

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
        className="mt-12 flex flex-wrap gap-8"
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
            className="w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-21px)] p-4 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-shadow"
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
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1.8 + index * 0.2 }}
            >
              Verify Certificate
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Certifications;
