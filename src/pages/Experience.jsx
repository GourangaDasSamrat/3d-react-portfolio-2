import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { experiences } from '../constants';

const Experience = () => {
  return (
    <section className='max-container'>
      <Helmet>
        <title>Experience | Gouranga Das Samrat</title>
        <meta name="description" content="Professional experience and internships of Gouranga Das Samrat" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='pt-20'
      >
        <h1 className='head-text'>
          My <span className='text-gradient'>Experience</span>
        </h1>

        <div className='mt-12 flex flex-col gap-8'>
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className='flex flex-col sm:flex-row gap-6 bg-white/10 p-6 rounded-lg backdrop-blur-sm'
            >
              <div className='flex-1'>
                <h3 className='text-2xl font-semibold text-white'>
                  {experience.title}
                </h3>
                <p className='text-gradient font-medium mt-1'>
                  {experience.company}
                </p>
                <p className='text-white/70 mt-1'>
                  {experience.duration}
                </p>
                <p className='text-white/70 mt-4'>
                  {experience.description}
                </p>
                {experience.certificateUrl && (
                  <a
                    href={experience.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='inline-block mt-4 px-6 py-3 text-white font-semibold bg-gradient-to-r from-purple-500 to-blue-500 rounded-full hover:opacity-90 transition-opacity'
                  >
                    View Certificate
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