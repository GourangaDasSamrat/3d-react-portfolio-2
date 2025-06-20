import {
  car,
  contact,
  css,
  estate,
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
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";
import { meta, shopify, starbucks, tesla } from "../assets/images";

// Import blog images
import blog3 from "../assets/blog-img/01-06-2025.webp";
import blog4 from "../assets/blog-img/08-06-2025.webp";
import blog5 from "../assets/blog-img/15-06-2025.webp";
import blog1 from "../assets/blog-img/22-05-2025.webp";
import blog2 from "../assets/blog-img/25-05-2025.webp";

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

export const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#accbe1",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#fbc3bc",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#b7e4c7",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#a2d2ff",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
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
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "iPhone 15 pro Official 3D website clone",
    description:
      "iPhone 15 pro 3D website clone using react js and tailwind css.",
    link: "https://iphone-15-pro-3d-website-clone.vercel.app/",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "3D React Portfolio ",
    description:
      "A  personal portfolio website showcasing my web development skills, projects, and experience with a modern, responsive design.",
    link: "https://gourangadas.netlify.app/",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Google Gemini Clone",
    description:
      "A fully functional Google Gemini 2.0 flash clone using HTML CSS JavaScript and Google Ai Studio free api key.",
    link: "https://geminiclonebygouranga.netlify.app/",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Simple Python Compiler",
    description:
      "It is a simple and responsive web-based tool where you can write and run Python code right in your browser. ",
    link: "https://simplepythoncompiler.netlify.app/",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Live Code Editor",
    description:
      "A responsive live web based code editor using codemirror library.",
    link: "https://livecodeeditorbygouranga.netlify.app/",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "Daraz Clone",
    description:
      "Frontend clone of daraz official website using HTML CSS JavaScript bootstrap 5 and jQuery.",
    link: "https://darazclonebygouranga.netlify.app/",
  },
];

export const blogs = [
  {
    title: "Building Scalable React Applications: Best Practices",
    excerpt:
      "Discover the essential practices and patterns for creating maintainable, performant React applications at scale.",
    image: blog1,
    date: "May 22, 2025",
    links: {
      medium:
        "https://medium.com/@yourusername/building-scalable-react-applications",
      devto: "https://dev.to/yourusername/building-scalable-react-applications",
    },
  },
  {
    title: "The Future of Web Development with AI",
    excerpt:
      "Exploring how artificial intelligence is transforming the landscape of web development and what it means for developers.",
    image: blog2,
    date: "May 25, 2025",
    links: {
      medium: "https://medium.com/@yourusername/future-of-web-development-ai",
      devto: "https://dev.to/yourusername/future-of-web-development-ai",
    },
  },
  {
    title: "Mastering 3D Animations in React",
    excerpt:
      "A comprehensive guide to implementing stunning 3D animations in React applications using Three.js and React Three Fiber.",
    image: blog3,
    date: "June 1, 2025",
    links: {
      medium: "https://medium.com/@yourusername/mastering-3d-animations-react",
      devto: "https://dev.to/yourusername/mastering-3d-animations-react",
    },
  },
  {
    title: "Modern State Management in React",
    excerpt:
      "Comparing different state management solutions in React and when to use each one effectively.",
    image: blog4,
    date: "June 8, 2025",
    links: {
      medium: "https://medium.com/@yourusername/modern-state-management-react",
      devto: "https://dev.to/yourusername/modern-state-management-react",
    },
  },
  {
    title: "Building a Portfolio that Stands Out",
    excerpt:
      "Tips and strategies for creating a developer portfolio that catches the attention of potential employers.",
    image: blog5,
    date: "June 15, 2025",
    links: {
      medium: "https://medium.com/@yourusername/portfolio-that-stands-out",
      devto: "https://dev.to/yourusername/portfolio-that-stands-out",
    },
  },
];
