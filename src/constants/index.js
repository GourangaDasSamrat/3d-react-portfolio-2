import {
  c,
  contact,
  cpp,
  docker,
  express,
  github,
  githubActions,
  go,
  javascript,
  linkedin,
  mongodb,
  mysql,
  nextjs,
  nodejs,
  python,
  redux,
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
    name: "python",
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
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: mysql,
    name: "My Sql",
    type: "Frontend",
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
    liveUrl: "https://pdf-hero.gouranga.qzz.io/",
    sourceCode: "https://github.com/GourangaDasSamrat/PDF-Merger-React.git",
  },
  {
    name: "3D Island Portfolio",
    description:
      "An interactive 3D island portfolio that showcases your work in a unique and engaging way, built with React and Three.js.And a blog section for sharing insights and updates.",
    image: p2,
    liveUrl: "https://gouranga.qzz.io/",
    sourceCode: "https://github.com/GourangaDasSamrat/3d-react-portfolio-2.git",
  },
  {
    name: "Advanced Weather App",
    description:
      "An advanced weather application that provides real-time weather updates, forecasts, and location-based services, built with React and OpenWeatherMap API.",
    image: p3,
    liveUrl: "https://ecosky.gouranga.qzz.io/",
    sourceCode: "https://github.com/GourangaDasSamrat/React-Weather-App.git",
  },
  {
    name: "Python Compiler",
    description:
      "A web-based Python compiler that allows users to write, run, and test Python code directly in the browser, built with CodeMirror.",
    image: p4,
    liveUrl: "https://simplepythoncompiler.netlify.app/",
    sourceCode:
      "https://github.com/GourangaDasSamrat/SimPle-Python-Compiler.git",
  },
  {
    name: "Google Gemini Clone",
    description:
      "A clone of Google Gemini, a modern AI Assistant, built with Google Ai Studio Free Api for natural language processing.",
    image: p5,
    liveUrl: "https://geminiclonebygouranga.netlify.app/",
    sourceCode: "https://github.com/GourangaDasSamrat/Gemini-Clone.git",
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

