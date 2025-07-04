import { motion } from "framer-motion";
import SEO from "../components/SEO";
import certificate1 from "/src/assets/images/certificate-1.webp";
import certificate2 from "/src/assets/images/certificate-2.webp";
import certificate3 from "/src/assets/images/certificate-3.webp";
import certificate4 from "/src/assets/images/certificate-4.webp";

const Certifications = () => {
  const certifications = [
    {
      title: "CSS(Basic) Certificate from HackerRank",
      image: certificate4,
      date: "04 July 2025",
      description:
        "This certification validates my foundational knowledge of CSS, including styling techniques, layout design, and responsive web design principles. It demonstrates my ability to create visually appealing and user-friendly web pages.",
      verificationLink: "https://www.hackerrank.com/certificates/0e3142b3e0d8",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      image: certificate3,
      date: "28 June 2025",
      description:
        "This certification demonstrates my proficiency in JavaScript programming, covering fundamental concepts such as algorithms, data structures, and problem-solving techniques. It showcases my ability to write efficient and optimized code for various applications.",
      verificationLink:
        "https://freecodecamp.org/certification/GpurangaDasSamrat/javascript-algorithms-and-data-structures-v8 ",
    },
    {
      title: "Front End Development Libraries",
      image: certificate2,
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
              Verify Certificate
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Certifications;
