import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { experiences } from "../constants";

const Experience = () => {
  return (
    <section className="max-container">
      <Helmet>
        <title>Experience | Gouranga Das Samrat</title>
        <meta
          name="description"
          content="Professional experience and internships of Gouranga Das Samrat"
        />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="padding-t"
      >
        <h1 className="head-text">
          My <span className="text-gradient">Experience</span>
        </h1>

        <div className="mt-12 flex flex-col gap-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col sm:flex-row gap-6 bg-white/20 p-8 rounded-lg backdrop-blur-md border border-white/10"
            >
              <div className="flex-1">
                <div className="flex items-center gap-4">
                  <h3 className="text-3xl font-bold text-slate-800">
                    {experience.title}
                  </h3>
                  <span className="px-3 py-1 text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-full shadow-md">
                    {experience.type}
                  </span>
                </div>
                <p className="blue-gradient_text font-bold text-xl mt-2">
                  {experience.company}
                </p>
                <p className="text-slate-600 font-medium mt-2">
                  {experience.duration}
                </p>
                <p className="text-slate-700 mt-4 text-lg">
                  {experience.description}
                </p>
                {experience.certificateUrl && (
                  <a
                    href={experience.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 px-6 py-3 text-white font-bold bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg hover:opacity-90 transition-all hover:scale-105"
                  >
                    Verify..
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
