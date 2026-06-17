import {
    c,
    contact,
    cpp,
    docker,
    express,
    fastify,
    github,
    githubActions,
    go,
    javascript,
    linkedin,
    lua,
    mongodb,
    mysql,
    nestjs,
    nextjs,
    nodejs,
    postgresql,
    python,
    redis,
    redux,
    rust,
    sqlite,
    tailwindcss,
    typescript,
} from "../assets/icons";

// Import project images
import p1 from "../assets/images/project-1.webp";
import p2 from "../assets/images/project-2.webp";
import p3 from "../assets/images/project-3.webp";
import p4 from "../assets/images/project-4.webp";
import p5 from "../assets/images/project-5.webp";
import p6 from "../assets/images/project-6.webp";

export const experiences = [
  {
    title: "Campus Ambassador",
    company: "Phitron",
    type: "Part-Time",
    duration: "8th Dec 2025 - Present",
    description:
      "Building a strong student community, and organizing educational workshops and events on campus. Focused on developing leadership and communication skills while acting as a bridge between the company and the student body.",
    certificateUrl: "https://i.postimg.cc/dV63LQMR/IMG-20251208-WA0000.jpg",
  },
  {
    title: "Web Developer Intern",
    company: "Labmentix",
    type: "Internship",
    duration: "15th Sep 2025 - 14th Oct 2025",
    description:
      "Internship experience in web development, focusing on creating and maintaining web applications.",
    certificateUrl:
      "https://drive.google.com/file/d/1I-Ifd8S0Xn4pqB9j20Y-HmkoCgYOz1PS/view?usp=sharing",
  },
];

export const skills = [
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: go,
    name: "Go",
    type: "Backend and System",
  },
  {
    imageUrl: rust,
    name: "Rust",
    type: "Backend and System",
  },
  {
    imageUrl: c,
    name: "C",
    type: "Backend and System",
  },
  {
    imageUrl: cpp,
    name: "C++",
    type: "Backend and System",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Backend and Scripting",
  },
  {
    imageUrl: lua,
    name: "Lua",
    type: "Backend and Scripting",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: nestjs,
    name: "Nest.js",
    type: "Backend",
  },
  {
    imageUrl: fastify,
    name: "Fastify",
    type: "Backend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: postgresql,
    name: "PostgreSQL",
    type: "Database",
  },
  {
    imageUrl: mysql,
    name: "MySql",
    type: "Database",
  },
  {
    imageUrl: sqlite,
    name: "SqLite",
    type: "Database",
  },
  {
    imageUrl: redis,
    name: "Redis",
    type: "Database",
  },
  {
    imageUrl: docker,
    name: "Docker",
    type: "DevOps",
  },
  {
    imageUrl: githubActions,
    name: "Github Actions",
    type: "CI/CD",
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/GourangaDasSamrat/",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/gouranga-das-samrat",
  },
];

export const projects = [
  {
    name: "PDF Merger React App",
    description:
      "A React application that allows users to merge multiple PDF files into one, providing a simple and efficient way to manage PDF documents.",
    image: p1,
    liveUrl: "https://pdf-hero.gouranga.eu.org/",
    sourceCode: "https://github.com/GourangaDasSamrat/PDF-Merger-React.git",
  },
  {
    name: "3D Island Portfolio",
    description:
      "An interactive 3D island portfolio that showcases your work in a unique and engaging way, built with React and Three.js.And a blog section for sharing insights and updates.",
    image: p2,
    liveUrl: "https://gouranga.eu.org/",
    sourceCode: "https://github.com/GourangaDasSamrat/3d-react-portfolio-2.git",
  },
  {
    name: "Advanced Weather App",
    description:
      "An advanced weather application that provides real-time weather updates, forecasts, and location-based services, built with React and OpenWeatherMap API.",
    image: p3,
    liveUrl: "https://ecosky.gouranga.eu.org/",
    sourceCode: "https://github.com/GourangaDasSamrat/React-Weather-App.git",
  },
  {
    name: "JS Visualizer",
    description:
      "An open-source JavaScript runtime debugger (React 19, TypeScript, GSAP, Tailwind v4, Zustand) that animates the Call Stack, Event Loop, Task Queue, and Microtask Queue step-by-step; architected with a WASM-replaceable execution engine and full OSS documentation.",
    image: p4,
    liveUrl: "https://js-visualizer.gouranga.eu.org/",
    sourceCode: "https://github.com/GourangaDasSamrat/JS-Visualizer",
  },
  {
    name: "CLI Todo App",
    description:
      "A powerful, feature-rich command-line todo application built with Go.",
    image: p5,
    sourceCode: "https://github.com/GourangaDasSamrat/todo-cli-go/",
  },
  {
    name: "3D iPhone Website Clone",
    description:
      "A 3D clone of the iPhone website, showcasing the latest iPhone models in an interactive 3D environment, built with React and Three.js.",
    image: p6,
    liveUrl: "https://iphone-15-pro-3d-website-clone.vercel.app/",
    sourceCode:
      "https://github.com/GourangaDasSamrat/iphone-15-pro-3d-website-clone.git",
  },
];

export const certifications = [
  {
    title: "Attention Mechanism with Google Cloud",
    image: "https://i.postimg.cc/0jB85Y1X/Learn-the-Latest-Tech-Skills-Advance-Your-Career-Udacity-pages-to-jpg-0001-2.jpg",
    date: "17 June 2026",
    org: "Udacity",
    description:
      `Successfully mastered and implemented Attention Mechanisms using Google Cloud Platform (GCP) through this Udacity collaboration project. Developed practical expertise in building advanced Deep Learning models and leveraging GCP’s infrastructure for efficient training and deployment.`,
    verificationLink: "https://www.udacity.com/certificate/e/f4a23628-6a34-11f1-999a-3b78d67abab9",
  },
  {
    title: "Go(Intermediate)",
    image: "https://i.postimg.cc/xdvR8dhT/golang-intermediate-certificate-page-0001.jpg",
    date: "21 May 2026",
    org: "HackerRank",
    description:
      "Earned HackerRank's Go Intermediate certification, demonstrating proficiency in concurrent programming with goroutines, channels, interfaces, and advanced Go language features.",
    verificationLink: "https://www.hackerrank.com/certificates/ce45b37caa35",
  },
  {
    title: "CS50x: Introduction to Computer Science",
    image: "https://i.postimg.cc/xjBkgjLr/cs50x.png",
    date: "05 March 2026",
    org: "Harvard University",
    description: `Completed CS50x: Introduction to Computer Science by Harvard University — a rigorous introduction to computer science covering algorithms, data structures, memory, C, Python, SQL, web development, and software engineering fundamentals.`,
    verificationLink:
      "https://cs50.harvard.edu/certificates/2b0dbe63-7c04-43bd-97b7-2b97069f333a",
  },
  {
    title: "Software Engineer",
    image: "https://i.postimg.cc/3wrC8M5F/software-engineer-certificate-page-0001.jpg",
    date: "28 January 2026",
    org: "HackerRank",
    description: `Successfully cleared HackerRank's professional assessment for Software Engineers, confirming strong technical logic and algorithmic efficiency.`,
    verificationLink: "https://www.hackerrank.com/certificates/44ed730e1d87",
  },
  {
    title: "Master of Essential C++ Programming Beginner to Advanced",
    image: "https://i.postimg.cc/PrQj4fPn/UC-de10d064-a219-4952-9259-14f73523bbc4.jpg",
    date: "22 January 2026",
    org: "Udemy",
    description: `Completed an intensive, end-to-end program covering the full spectrum of C++ development. Mastered core syntax, Memory Management, and Object-Oriented Programming (OOP) principles. Gained hands-on experience with the Standard Template Library (STL) and advanced topics like pointers and templates to build high-performance applications.​`,
    verificationLink: "http://ude.my/UC-de10d064-a219-4952-9259-14f73523bbc4",
  },
  {
    title: "Software Engineer Intern",
    image: "https://i.postimg.cc/rwMmg2VG/software-engineer-intern-certificate-page-0001-(1).jpg",
    date: "08 December 2025",
    org: "HackerRank",
    description:
      "​Successfully completed the HackerRank assessment process to earn the Software Engineer Intern Certificate. This certification validates strong foundational skills in data structures, algorithms, and problem-solving, demonstrating readiness for a software engineering internship role.",
    verificationLink: "https://www.hackerrank.com/certificates/d9f5234dbed6",
  },
  {
    title: "The Complete Google Slides Masterclass - Master Google Slide",
    image: "https://i.postimg.cc/DyDFBX2X/166352363.jpg",
    date: "07 December 2025",
    org: "Udemy",
    description:
      "Successfully completed a comprehensive masterclass focusing on advanced features and best practices for Google Slides. The course covered everything from foundational design principles and template creation to mastering complex animations and collaboration tools, resulting in the ability to create highly polished, professional, and engaging presentations.",
    verificationLink:
      "https://www.udemy.com/certificate/UC-ad3903c8-384d-4fec-a1d0-c27509606903/",
  },
  {
    title: "TailwindCSS from A to Z: Master TailwindCSS Quickly",
    image: "https://udemy-certificate.s3.amazonaws.com/image/UC-fd60d87e-053a-4a61-a904-c1e3c23808c6.jpg",
    date: "03 OCtober 2025",
    org: "Udemy",
    description:
      "Comprehensive course covering TailwindCSS fundamentals to advanced concepts, focusing on rapid UI development and responsive design using utility-first principles.",
    verificationLink: "http://ude.my/UC-fd60d87e-053a-4a61-a904-c1e3c23808c6",
  },
  {
    title: "Master Web & Mobile Design: Figma, UI/UX Essentials, +More",
    image: "https://i.postimg.cc/qvMSsDY1/UC-5bf9a3a8-bbd4-45d9-a632-51204a6073ca.jpg",
    date: "03 OCtober 2025",
    org: "Udemy",
    description:
      "Hands-on training in web and mobile design using Figma, covering core UI/UX principles, wireframing, prototyping, and design workflows for real-world applications.",
    verificationLink: "http://ude.my/UC-5bf9a3a8-bbd4-45d9-a632-51204a6073ca",
  },
  {
    title: "Git and GitHub MasterClass: Git Workflow, Commands",
    image: "https://i.postimg.cc/8kZKrJbB/158935261.jpg",
    date: "12 September 2025",
    org: "Udemy",
    description:
      "Successfully completed an in-depth course on Git and GitHub, gaining hands-on experience with version control, branching, merging, pull requests, and collaborative workflows essential for modern software development.",
    verificationLink:
      "https://www.udemy.com/certificate/UC-0519c2ee-99b8-42ca-a3e8-bd10a87eac0a/",
  },
  {
    title: "Effective Presentations",
    image: "https://i.postimg.cc/nr8nP7HN/certificate-page-0001.jpg",
    date: "10 September 2025",
    org: "HP Life",
    description:
      "Successfully completed a course focused on developing impactful presentation skills, including structuring content, designing visuals, and delivering with confidence to effectively engage and influence an audience.",
    verificationLink:
      "https://www.life-global.org/certificate/16258744-909c-436c-8d2a-76c0ea9dba71",
  },
  {
    title: "Effective Leadership",
    image: "https://i.postimg.cc/Z5fDHVcg/certificate-page-0001.jpg",
    date: "09 September 2025",
    org: "HP Life",
    description:
      "Successfully completed a course on effective leadership skills, learning how to inspire teams, communicate clearly, make strategic decisions, and develop key qualities for successful leadership in professional environments.",
    verificationLink:
      "https://www.life-global.org/certificate/0e0b848e-871a-403c-9da6-41e57dfa24a4",
  },
  {
    title: "Getting Started with Microsoft Excel",
    image: "https://i.postimg.cc/wjxnbXHC/Coursera-V91494-RUZT2-G-page-0001.jpg",
    date: "09 September 2025",
    org: "Coursera",
    description:
      "Successfully completed foundational training in Microsoft Excel, covering data entry, formatting, formulas, charts, and essential spreadsheet skills to manage and analyze data effectively.",
    verificationLink:
      "https://www.coursera.org/account/accomplishments/records/V91494RUZT2G",
  },
  {
    title: "Figma for User Interface and User Experience UIUX Design",
    image: "https://i.postimg.cc/j58Kb64n/158527861.jpg",
    date: "08 September 2025",
    org: "Udemy",
    description:
      "Successfully completed a comprehensive course on designing user-friendly interfaces with Figma. Gained skills in wireframing, prototyping, and building design systems while applying core UI/UX principles to create modern digital experiences.",
    verificationLink:
      "https://www.udemy.com/certificate/UC-231d910a-7c34-4a5f-a46a-6c7e91f6c643/",
  },
  {
    title: "Master JavaScript, HTML, and CSS with 30 Projects in 30 Days",
    image: "https://i.postimg.cc/jqkL35BY/157918431.jpg",
    date: "01 September 2025",
    org: "Udemy",
    description:
      "Successfully completed the Master JavaScript, HTML, and CSS with 30 Projects in 30 Days course on Udemy. Built 30 hands-on projects covering responsive design, DOM manipulation, form validation, interactive UI components, and real-world web applications using HTML, CSS, and JavaScript.",
    verificationLink:
      "https://www.udemy.com/certificate/UC-91c219fe-afe6-4b69-b4f3-1eeb4b420f4a/",
  },
  {
    title: "Master Node.js: From Beginner to Full-Stack Developer",
    image: "https://i.postimg.cc/fTKb0Wmx/157789995.jpg",
    date: "30 August 2025",
    org: "Udemy",
    description:
      "Successfully completed the Master Node.js: From Beginner to Full-Stack Developer course on Udemy, gaining hands-on experience in building scalable back-end applications, RESTful APIs, and full-stack projects using Node.js, Express, and modern JavaScript frameworks.",
    verificationLink:
      "https://www.udemy.com/certificate/UC-d9f0406e-cdc8-46b0-85fc-a0a2bb61f797/",
  },
  {
    title: "Problem Solving(Intermediate)",
    image: "https://i.postimg.cc/QN1RBYzX/certificate-9.webp",
    date: "06 July 2025",
    org: "HackerRank",
    description:
      "This certification demonstrates my intermediate problem-solving skills, including algorithm design, data structures, and advanced coding techniques. It validates my ability to tackle complex programming challenges effectively.",
    verificationLink: "https://www.hackerrank.com/certificates/9e649f914d96",
  },
  {
    title: "Problem Solving(Basic) ",
    image: "https://i.postimg.cc/5yBGZjzH/certificate-8.webp",
    date: "06 July 2025",
    org: "HackerRank",
    description:
      "This certification demonstrates my foundational problem-solving skills, including algorithmic thinking, data structures, and basic coding techniques. It validates my ability to approach and solve programming challenges effectively.",
    verificationLink: "https://www.hackerrank.com/certificates/a88d61f3f72a",
  },
  {
    title: "React(Basic) ",
    image: "https://i.postimg.cc/gjFQS3xF/certificate-7.webp",
    date: "06 July 2025",
    org: "HackerRank",
    description:
      "This certification validates my foundational knowledge of React, including component-based architecture, state management, and basic hooks. It demonstrates my ability to build interactive user interfaces using React.",
    verificationLink: "https://www.hackerrank.com/certificates/e98e9c1a71cb",
  },
  {
    title: "JavaScript(Intermediate)",
    image: "https://i.postimg.cc/W3Jxw5bw/certificate-6.webp",
    date: "05 July 2025",
    org: "HackerRank",
    description:
      "This certification demonstrates my intermediate knowledge of JavaScript, including advanced concepts such as asynchronous programming, closures, and higher-order functions. It validates my ability to write more complex scripts and understand advanced programming techniques.",
    verificationLink: "https://www.hackerrank.com/certificates/45f92a73ed85",
  },
  {
    title: "JavaScript(Basic) ",
    image: "https://i.postimg.cc/1zXkf9kT/certificate-5.webp",
    date: "05 July 2025",
    org: "HackerRank",
    description:
      "This certification demonstrates my foundational knowledge of JavaScript, including syntax, data types, control structures, and basic algorithms. It validates my ability to write simple scripts and understand core programming concepts.",
    verificationLink: "https://www.hackerrank.com/certificates/1dc151e8da65",
  },
  {
    title: "CSS(Basic) ",
    image: "https://i.postimg.cc/DzNtG9Fz/certificate-4.webp",
    date: "04 July 2025",
    org: "HackerRank",
    description:
      "This certification validates my foundational knowledge of CSS, including styling techniques, layout design, and responsive web design principles. It demonstrates my ability to create visually appealing and user-friendly web pages.",
    verificationLink: "https://www.hackerrank.com/certificates/0e3142b3e0d8",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    image: "https://i.postimg.cc/5NqdrK5P/certificate-3.webp",
    date: "28 June 2025",
    org: "freeCodeCamp",
    description:
      "This certification demonstrates my proficiency in JavaScript programming, covering fundamental concepts such as algorithms, data structures, and problem-solving techniques. It showcases my ability to write efficient and optimized code for various applications.",
    verificationLink:
      "https://freecodecamp.org/certification/GpurangaDasSamrat/javascript-algorithms-and-data-structures-v8 ",
  },
  {
    title: "Front End Development Libraries",
    image: "https://i.postimg.cc/7YyrmrzG/certificate-2.webp",
    date: "23 June 2025",
    org: "freeCodeCamp",
    description:
      "This certification showcases my expertise in front-end development libraries such as React, Redux, and Bootstrap. It highlights my ability to build dynamic and responsive user interfaces, manage application state, and create visually appealing web applications.",
    verificationLink:
      "https://freecodecamp.org/certification/GpurangaDasSamrat/front-end-development-libraries",
  },
  {
    title: "Responsive Web Design Certification",
    image: "https://i.postimg.cc/BZFGTnjf/certificate-1.webp",
    date: "22 June 2025",
    org: "freeCodeCamp",
    description:
      "This certification demonstrates my proficiency in creating responsive and accessible web designs using HTML, CSS, and JavaScript. It covers topics such as Flexbox, Grid, and media queries to ensure websites are optimized for various devices.",
    verificationLink:
      "https://freecodecamp.org/certification/GpurangaDasSamrat/responsive-web-design",
  },
];
