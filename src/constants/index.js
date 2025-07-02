import {
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  react,
  redux,
  sass,
  tailwindcss,
  typescript,
} from "../assets/icons";

// Import blog images
import blog8 from "../assets/blog-img/01-07-2025.webp";
import blog3 from "../assets/blog-img/01-06-2025.webp";
import blog4 from "../assets/blog-img/08-06-2025.webp";
import blog5 from "../assets/blog-img/15-06-2025.webp";
import blog1 from "../assets/blog-img/22-05-2025.webp";
import blog6 from "../assets/blog-img/22-06-2025.webp";
import blog2 from "../assets/blog-img/25-05-2025.webp";
import blog7 from "../assets/blog-img/29-06-2025.webp";

// Import project images
import p1 from "../assets/images/project-1.webp";
import p2 from "../assets/images/project-2.webp";
import p3 from "../assets/images/project-3.webp";
import p4 from "../assets/images/project-4.webp";
import p5 from "../assets/images/project-5.webp";
import p6 from "../assets/images/project-6.webp";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
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
    name: "3D Portfolio",
    description:
      "A stunning 3D portfolio website showcasing your skills and projects, built with React and Three.js for an immersive user experience.Also used React Helmet for SEO optimization.",
    image: p1,
    liveUrl: "https://gourangadas.netlify.app/",
    sourceCode: "https://github.com/GourangaDasSamrat/3D-React-Portfolio.git",
  },
  {
    name: "3D Island Portfolio",
    description:
      "An interactive 3D island portfolio that showcases your work in a unique and engaging way, built with React and Three.js.And a blog section for sharing insights and updates.",
    image: p2,
    liveUrl: "https://gouranga-das.netlify.app/",
    sourceCode: "https://github.com/GourangaDasSamrat/3d-react-portfolio-2.git",
  },
  {
    name: "Advanced Weather App",
    description:
      "An advanced weather application that provides real-time weather updates, forecasts, and location-based services, built with React and OpenWeatherMap API.",
    image: p3,
    liveUrl: "https://ecosky.vercel.app/",
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

export const blogs = [
  {
    title: "Exploring Google’s New Gemini CLI: The Ultimate Open-Source Dev Tool",
    excerpt: "A comprehensive guide to Google's new Gemini CLI, an open-source tool designed to enhance developer productivity and streamline workflows.",
    image: blog8,
    date: "July 02, 2025",
    links: {
      medium:
        "https://medium.com/@gouranga.das.khulna/exploring-googles-new-gemini-cli-the-ultimate-open-source-dev-tool-19a0a5a0c6f0",
      devto:
        "https://dev.to/gouranga-das-khulna/exploring-googles-new-gemini-cli-the-ultimate-open-source-dev-tool-1bc4",
    },
  },
  {
    title: "10 Front-End Performance Fixes You Should Apply Today",
    excerpt: "A guide to essential front-end performance optimizations that can significantly improve your web application's speed and user experience.",
    image: blog7,
    date: "June 29, 2025",
    links: {
      medium:
        "https://medium.com/@gouranga.das.khulna/10-front-end-performance-fixes-you-should-apply-today-54b3ff5b5cfc",
      devto:
        "https://dev.to/gouranga-das-khulna/10-front-end-performance-fixes-you-should-apply-today-3506",
    },
  },
  {
    title:
      "Tailwind CSS v4.0: A Complete Game Changer for Modern Web Development",
    excerpt:
      "Tailwind CSS v4.0 introduces groundbreaking features that revolutionize web development, making it easier and more efficient than ever.",
    image: blog6,
    date: "June 22, 2025",
    links: {
      medium:
        "https://medium.com/@gouranga.das.khulna/tailwind-css-v4-0-a-complete-game-changer-for-modern-web-development-bdcdc2409def",
      devto:
        "https://dev.to/gouranga-das-khulna/tailwind-css-v40-a-complete-game-changer-for-modern-web-development-4hon",
    },
  },
  {
    title: "All React Concepts Explained in Just One Read",
    excerpt:
      "A comprehensive guide covering all essential React concepts in a single read, perfect for both beginners and experienced developers.",
    image: blog5,
    date: "June 15, 2025",
    links: {
      medium:
        "https://medium.com/@gouranga.das.khulna/all-react-concepts-explained-in-just-one-read-ddf1b520ad1e",
      devto:
        "https://dev.to/gouranga-das-khulna/all-react-concepts-explained-in-just-one-read-part-1-1kop",
    },
  },
  {
    title:
      "Difference Between Three.js and Babylon.js: What Actually Should You Choose?",
    excerpt:
      "A detailed comparison of Three.js and Babylon.js, helping developers choose the right 3D engine for their projects.",
    image: blog4,
    date: "June 8, 2025",
    links: {
      medium:
        "https://medium.com/@gouranga.das.khulna/difference-between-three-js-and-babylon-js-what-actually-should-you-choose-122ab1838256",
      devto:
        "https://dev.to/gouranga-das-khulna/difference-between-threejs-and-babylonjs-what-actually-should-you-choose-437g",
    },
  },
  {
    title:
      "React Native vs React JS — Key Difference, Advantages-Disadvantages, Limitations",
    excerpt:
      "A comprehensive comparison of React Native and React JS, highlighting their differences, advantages, disadvantages, and limitations.",
    image: blog3,
    date: "June 1, 2025",
    links: {
      medium:
        "https://medium.com/@gouranga.das.khulna/react-native-vs-react-js-key-difference-advantages-disadvantages-limitations-2900fdfc9466",
      devto:
        "https://dev.to/gouranga-das-khulna/react-native-vs-react-js-key-difference-advantages-disadvantages-limitations-2f96",
    },
  },
  {
    title:
      "The 10 Best New CSS Features in 2025 Already Supported in All Major Browser",
    excerpt:
      "An overview of the latest CSS features introduced in 2025 and their cross-browser support.",
    image: blog2,
    date: "May 25, 2025",
    links: {
      medium:
        "https://medium.com/@gouranga.das.khulna/the-10-best-new-css-features-in-2025-already-supported-in-all-major-browser-5150ece5c85a",
      devto:
        "https://dev.to/gouranga-das-khulna/the-10-best-new-css-features-in-2025-already-supported-in-all-major-browsers-467f",
    },
  },
  {
    title: "CSS only Click-handlers You Might not be using, but you should",
    excerpt:
      "A deep dive into CSS-only click handlers and how they can enhance user experience without JavaScript.",
    image: blog1,
    date: "May 22, 2025",
    links: {
      medium:
        "https://medium.com/@gouranga.das.khulna/css-only-click-handlers-you-might-not-be-using-but-you-should-1fd0f2a65ce6",
      devto:
        "https://dev.to/gouranga-das-khulna/css-only-click-handlers-you-might-not-be-using-but-you-should-p3e",
    },
  },
];
