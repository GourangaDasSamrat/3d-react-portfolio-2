import { motion } from "framer-motion";
import SEO from "../components/SEO";
import certificate1 from "/src/assets/images/certificate-1.png";

const Certifications = () => {
  const certifications = [
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
    <section className="max-container">
      <SEO title="Certifications | Gouranga Das Samrat" />

      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Certifications
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          These certifications represent my commitment to continuous learning
          and professional development in the field of web development and
          software engineering.
        </p>
      </div>

      <div className="mt-12 flex flex-wrap gap-8">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-21px)] p-4 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-shadow"
          >
            <div className="relative w-full h-48 mb-4">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">
              {cert.title}
            </h3>
            <p className="text-sm text-blue-600 mb-3">Issued: {cert.date}</p>
            <p className="text-slate-600 mb-4">{cert.description}</p>
            <a
              href={cert.verificationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors text-sm font-semibold"
            >
              Verify Certificate
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
