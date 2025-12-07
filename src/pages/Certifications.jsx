import { motion } from "framer-motion";
import SEO from "../components/SEO";
// Certificate images
const certificate1 = "https://i.postimg.cc/BZFGTnjf/certificate-1.webp";
const certificate2 = "https://i.postimg.cc/7YyrmrzG/certificate-2.webp";
const certificate3 = "https://i.postimg.cc/5NqdrK5P/certificate-3.webp";
const certificate4 = "https://i.postimg.cc/DzNtG9Fz/certificate-4.webp";
const certificate5 = "https://i.postimg.cc/1zXkf9kT/certificate-5.webp";
const certificate6 = "https://i.postimg.cc/W3Jxw5bw/certificate-6.webp";
const certificate7 = "https://i.postimg.cc/gjFQS3xF/certificate-7.webp";
const certificate8 = "https://i.postimg.cc/5yBGZjzH/certificate-8.webp";
const certificate9 = "https://i.postimg.cc/QN1RBYzX/certificate-9.webp";
const certificate10 = "https://i.postimg.cc/fTKb0Wmx/157789995.jpg";
const certificate11 = "https://i.postimg.cc/jqkL35BY/157918431.jpg";
const certificate12 = "https://i.postimg.cc/j58Kb64n/158527861.jpg";
const certificate13 =
  "https://i.postimg.cc/wjxnbXHC/Coursera-V91494-RUZT2-G-page-0001.jpg";
const certificate14 = "https://i.postimg.cc/Z5fDHVcg/certificate-page-0001.jpg";
const certificate15 = "https://i.postimg.cc/nr8nP7HN/certificate-page-0001.jpg";
const certificate16 = "https://i.postimg.cc/8kZKrJbB/158935261.jpg";
const certificate17 =
  "https://i.postimg.cc/qvMSsDY1/UC-5bf9a3a8-bbd4-45d9-a632-51204a6073ca.jpg";
const certificate18 =
  "https://udemy-certificate.s3.amazonaws.com/image/UC-fd60d87e-053a-4a61-a904-c1e3c23808c6.jpg";
const certificate19 = 
  "https://i.postimg.cc/DyDFBX2X/166352363.jpg"

const Certifications = () => {
  const certifications = [
    {
      title: "The Complete Google Slides Masterclass - Master Google Slide",
      image: certificate19,
      date: "07 December 2025",
      org: "Udemy",
      description:
        "Successfully completed a comprehensive masterclass focusing on advanced features and best practices for Google Slides. The course covered everything from foundational design principles and template creation to mastering complex animations and collaboration tools, resulting in the ability to create highly polished, professional, and engaging presentations.",
      verificationLink: "https://www.udemy.com/certificate/UC-ad3903c8-384d-4fec-a1d0-c27509606903/",
    },
    {
      title: "TailwindCSS from A to Z: Master TailwindCSS Quickly",
      image: certificate18,
      date: "03 OCtober 2025",
      org: "Udemy",
      description:
        "Comprehensive course covering TailwindCSS fundamentals to advanced concepts, focusing on rapid UI development and responsive design using utility-first principles.",
      verificationLink: "http://ude.my/UC-fd60d87e-053a-4a61-a904-c1e3c23808c6",
    },
    {
      title: "Master Web & Mobile Design: Figma, UI/UX Essentials, +More",
      image: certificate17,
      date: "03 OCtober 2025",
      org: "Udemy",
      description:
        "Hands-on training in web and mobile design using Figma, covering core UI/UX principles, wireframing, prototyping, and design workflows for real-world applications.",
      verificationLink: "http://ude.my/UC-5bf9a3a8-bbd4-45d9-a632-51204a6073ca",
    },
    {
      title: "Git and GitHub MasterClass: Git Workflow, Commands",
      image: certificate16,
      date: "12 September 2025",
      org: "Udemy",
      description:
        "Successfully completed an in-depth course on Git and GitHub, gaining hands-on experience with version control, branching, merging, pull requests, and collaborative workflows essential for modern software development.",
      verificationLink:
        "https://www.udemy.com/certificate/UC-0519c2ee-99b8-42ca-a3e8-bd10a87eac0a/",
    },
    {
      title: "Effective Presentations",
      image: certificate15,
      date: "10 September 2025",
      org: "HP Life",
      description:
        "Successfully completed a course focused on developing impactful presentation skills, including structuring content, designing visuals, and delivering with confidence to effectively engage and influence an audience.",
      verificationLink:
        "https://www.life-global.org/certificate/16258744-909c-436c-8d2a-76c0ea9dba71",
    },
    {
      title: "Effective Leadership",
      image: certificate14,
      date: "09 September 2025",
      org: "HP Life",
      description:
        "Successfully completed a course on effective leadership skills, learning how to inspire teams, communicate clearly, make strategic decisions, and develop key qualities for successful leadership in professional environments.",
      verificationLink:
        "https://www.life-global.org/certificate/0e0b848e-871a-403c-9da6-41e57dfa24a4",
    },
    {
      title: "Getting Started with Microsoft Excel",
      image: certificate13,
      date: "09 September 2025",
      org: "Coursera",
      description:
        "Successfully completed foundational training in Microsoft Excel, covering data entry, formatting, formulas, charts, and essential spreadsheet skills to manage and analyze data effectively.",
      verificationLink:
        "https://www.coursera.org/account/accomplishments/records/V91494RUZT2G",
    },
    {
      title: "Figma for User Interface and User Experience UIUX Design",
      image: certificate12,
      date: "08 September 2025",
      org: "Udemy",
      description:
        "Successfully completed a comprehensive course on designing user-friendly interfaces with Figma. Gained skills in wireframing, prototyping, and building design systems while applying core UI/UX principles to create modern digital experiences.",
      verificationLink:
        "https://www.udemy.com/certificate/UC-231d910a-7c34-4a5f-a46a-6c7e91f6c643/",
    },
    {
      title: "Master JavaScript, HTML, and CSS with 30 Projects in 30 Days",
      image: certificate11,
      date: "01 September 2025",
      org: "Udemy",
      description:
        "Successfully completed the Master JavaScript, HTML, and CSS with 30 Projects in 30 Days course on Udemy. Built 30 hands-on projects covering responsive design, DOM manipulation, form validation, interactive UI components, and real-world web applications using HTML, CSS, and JavaScript.",
      verificationLink:
        "https://www.udemy.com/certificate/UC-91c219fe-afe6-4b69-b4f3-1eeb4b420f4a/",
    },
    {
      title: "Master Node.js: From Beginner to Full-Stack Developer",
      image: certificate10,
      date: "30 August 2025",
      org: "Udemy",
      description:
        "Successfully completed the Master Node.js: From Beginner to Full-Stack Developer course on Udemy, gaining hands-on experience in building scalable back-end applications, RESTful APIs, and full-stack projects using Node.js, Express, and modern JavaScript frameworks.",
      verificationLink:
        "https://www.udemy.com/certificate/UC-d9f0406e-cdc8-46b0-85fc-a0a2bb61f797/",
    },
    {
      title: "Problem Solving(Intermediate)",
      image: certificate9,
      date: "06 July 2025",
      org: "HackerRank",
      description:
        "This certification demonstrates my intermediate problem-solving skills, including algorithm design, data structures, and advanced coding techniques. It validates my ability to tackle complex programming challenges effectively.",
      verificationLink: "https://www.hackerrank.com/certificates/9e649f914d96",
    },
    {
      title: "Problem Solving(Basic) ",
      image: certificate8,
      date: "06 July 2025",
      org: "HackerRank",
      description:
        "This certification demonstrates my foundational problem-solving skills, including algorithmic thinking, data structures, and basic coding techniques. It validates my ability to approach and solve programming challenges effectively.",
      verificationLink: "https://www.hackerrank.com/certificates/a88d61f3f72a",
    },
    {
      title: "React(Basic) ",
      image: certificate7,
      date: "06 July 2025",
      org: "HackerRank",
      description:
        "This certification validates my foundational knowledge of React, including component-based architecture, state management, and basic hooks. It demonstrates my ability to build interactive user interfaces using React.",
      verificationLink: "https://www.hackerrank.com/certificates/e98e9c1a71cb",
    },
    {
      title: "JavaScript(Intermediate)",
      image: certificate6,
      date: "05 July 2025",
      org: "HackerRank",
      description:
        "This certification demonstrates my intermediate knowledge of JavaScript, including advanced concepts such as asynchronous programming, closures, and higher-order functions. It validates my ability to write more complex scripts and understand advanced programming techniques.",
      verificationLink: "https://www.hackerrank.com/certificates/45f92a73ed85",
    },
    {
      title: "JavaScript(Basic) ",
      image: certificate5,
      date: "05 July 2025",
      org: "HackerRank",
      description:
        "This certification demonstrates my foundational knowledge of JavaScript, including syntax, data types, control structures, and basic algorithms. It validates my ability to write simple scripts and understand core programming concepts.",
      verificationLink: "https://www.hackerrank.com/certificates/1dc151e8da65",
    },
    {
      title: "CSS(Basic) ",
      image: certificate4,
      date: "04 July 2025",
      org: "HackerRank",
      description:
        "This certification validates my foundational knowledge of CSS, including styling techniques, layout design, and responsive web design principles. It demonstrates my ability to create visually appealing and user-friendly web pages.",
      verificationLink: "https://www.hackerrank.com/certificates/0e3142b3e0d8",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      image: certificate3,
      date: "28 June 2025",
      org: "freeCodeCamp",
      description:
        "This certification demonstrates my proficiency in JavaScript programming, covering fundamental concepts such as algorithms, data structures, and problem-solving techniques. It showcases my ability to write efficient and optimized code for various applications.",
      verificationLink:
        "https://freecodecamp.org/certification/GpurangaDasSamrat/javascript-algorithms-and-data-structures-v8 ",
    },
    {
      title: "Front End Development Libraries",
      image: certificate2,
      date: "23 June 2025",
      org: "freeCodeCamp",
      description:
        "This certification showcases my expertise in front-end development libraries such as React, Redux, and Bootstrap. It highlights my ability to build dynamic and responsive user interfaces, manage application state, and create visually appealing web applications.",
      verificationLink:
        "https://freecodecamp.org/certification/GpurangaDasSamrat/front-end-development-libraries",
    },
    {
      title: "Responsive Web Design Certification",
      image: certificate1,
      date: "22 June 2025",
      org: "freeCodeCamp",
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
