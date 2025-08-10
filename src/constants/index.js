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
const blog1 =
  "https://miro.medium.com/v2/resize:fit:720/format:webp/0*PuSKLNWyOgB6Ujrv.png";
const blog2 =
  "https://miro.medium.com/v2/resize:fit:720/format:webp/0*x_zz-3zdmGHCPstY";
const blog3 =
  "https://miro.medium.com/v2/resize:fit:720/format:webp/0*Uy64m3J8iKh3P9F5";
const blog4 =
  "https://miro.medium.com/v2/resize:fit:720/format:webp/0*yIp8t6Sa9oQ3iMJA.jpeg";
const blog5 =
  "https://miro.medium.com/v2/resize:fit:720/format:webp/0*RHcDkqMWy6y-SXr9.png";
const blog6 =
  "https://miro.medium.com/v2/resize:fit:720/format:webp/0*VlzgT5AhlA8kaCW2";
const blog7 =
  "https://miro.medium.com/v2/resize:fit:720/format:webp/0*uzkxrVlemR-u6Rpe.png";
const blog8 =
  "https://miro.medium.com/v2/resize:fit:720/format:webp/0*jqBOuIvzJy7j5FSh.png";
const blog9 =
  "https://miro.medium.com/v2/resize:fit:720/format:webp/0*PoRd4X2_WEZLDCxa.png";
const blog10 =
  "https://miro.medium.com/v2/resize:fit:720/format:webp/0*bW9ykJaKQfmhqO-8.png";
const blog11 =
  "https://miro.medium.com/v2/resize:fit:720/format:webp/0*KzsznaX3AafLDN8J.png";
const blog12 =
  "https://miro.medium.com/v2/resize:fit:720/format:webp/0*cx81_md2J-IHkRr5.png";
const blog13 =
  "https://miro.medium.com/v2/resize:fit:640/format:webp/0*te_PkYEZfrasx2Zc.png";
const blog14 =
  "https://miro.medium.com/v2/resize:fit:640/format:webp/0*kfdUAICDJQ_V8RpP";
const blog15 =
  "https://miro.medium.com/v2/resize:fit:640/format:webp/0*8HCFUpO_QbgeVYrS.png";
const blog16 =
  "https://miro.medium.com/v2/resize:fit:640/format:webp/0*euv5zNgDN2gztFr5.png";
const blog17 =
  "https://miro.medium.com/v2/resize:fit:640/format:webp/0*HMSHhDSCxLPB3Tmz.png";
const blog18 =
  "https://miro.medium.com/v2/resize:fit:640/format:webp/0*UnPluV9D6r5kGatS.png";
const blog19 =
  "https://miro.medium.com/v2/resize:fit:640/format:webp/0*MXVvOkFJO2qgLayP.png";
const blog20 =
  "https://miro.medium.com/v2/resize:fit:640/format:webp/0*hog2gBEvoZTrIWWw.png";
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
    name: "PDF Merger React App",
    description:
      "A React application that allows users to merge multiple PDF files into one, providing a simple and efficient way to manage PDF documents.",
    image: p1,
    liveUrl: "https://pdf-hero-mauve.vercel.app/",
    sourceCode: "https://github.com/GourangaDasSamrat/PDF-Merger-React.git",
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
    title:
      "Stop Using TypeScript Types This Way — Opt for the Map Pattern Instead",
    excerpt: "Learn why the common way of defining repetitive TypeScript types can lead to clutter and maintenance headaches. This article explores the Map Pattern — a cleaner, more scalable approach that boosts type safety, reduces duplication, and keeps your codebase DRY. Perfect for developers aiming to write more maintainable TypeScript.",
    image: blog20,
    date: "August 10, 2025",
    links: {
      medium:
        "https://medium.com/@gouranga.das.khulna/stop-using-typescript-types-this-way-opt-for-the-map-pattern-instead-92472dda3b1d",
      devto:
        "https://dev.to/gouranga-das-khulna/stop-using-typescript-types-this-way-opt-for-the-map-pattern-instead-1aoi",
    },
  },
  {
    title: "Concerned About localStorage? Here’s How to Secure It",
    excerpt: "Storing sensitive data in localStorage can put your app — and users — at risk. This article explains the security pitfalls of localStorage and shows proven techniques to safeguard it, from encryption strategies to better storage alternatives. Essential reading for web developers who care about security.",
    image: blog19,
    date: "August 09, 2025",
    links: {
      medium:
        "https://medium.com/@gouranga.das.khulna/concerned-about-localstorage-heres-how-to-secure-it-d44ae68dea9a",
      devto:
        "https://dev.to/gouranga-das-khulna/concerned-about-localstorage-heres-how-to-secure-it-2plm",
    },
  },
  {
    title:
      "Connecting Redux to Your React App: A Quick Guide to React-Redux and useSelector",
    excerpt:
      "Learn how to integrate Redux into your React application using React-Redux. This quick guide covers the basics of connecting your app and accessing state with the useSelector hook.",
    image: blog18,
    date: "August 03, 2025",
    links: {
      medium:
        "https://medium.com/@gouranga.das.khulna/connecting-redux-to-your-react-app-a-quick-guide-to-react-redux-and-useselector-5e8e63ee65cd",
      devto:
        "https://dev.to/gouranga-das-khulna/connecting-redux-to-your-react-app-a-quick-guide-to-react-redux-and-useselector-1a2p",
    },
  },
  {
    title: "5 Surprising Facts About LocalStorage You Probably Didn’t Know",
    excerpt:
      "Discover five lesser-known facts about LocalStorage that can help you use it more effectively in your web projects. You might be surprised by what it can—and can't—do!",
    image: blog17,
    date: "August 02, 2025",
    links: {
      medium:
        "https://medium.com/@gouranga.das.khulna/5-surprising-facts-about-localstorage-you-probably-didnt-know-8cf1eabf2bcb",
      devto:
        "https://dev.to/gouranga-das-khulna/5-surprising-facts-about-localstorage-you-probably-didnt-know-33o0",
    },
  },
  {
    title: "Top 10 CSS Mistakes That Make Your Website Look Unprofessional",
    excerpt:
      "Discover the most common CSS mistakes that can ruin your website’s design and credibility. This post highlights the top 10 pitfalls and offers practical tips to help you create cleaner, more professional-looking layouts.",
    image: blog16,
    date: "July 27, 2025",
    links: {
      medium:
        "https://medium.com/@gouranga.das.khulna/top-10-css-mistakes-that-make-your-website-look-unprofessional-2e72ee006206",
      devto:
        "https://dev.to/gouranga-das-khulna/top-10-css-mistakes-that-make-your-website-look-unprofessional-499o",
    },
  },
  {
    title: "How to Use Framer Motion for Stunning React Animations",
    excerpt:
      "Learn how to bring your React projects to life with Framer Motion. This guide walks you through the basics and advanced techniques to create smooth, eye-catching animations with ease.",
    image: blog15,
    date: "July 26, 2025",
    links: {
      medium:
        "https://medium.com/@gouranga.das.khulna/how-to-use-framer-motion-for-stunning-react-animations-e65b49a64e90",
      devto:
        "https://dev.to/gouranga-das-khulna/how-to-use-framer-motion-for-stunning-react-animations-2idh",
    },
  },
  {
    title: "10 Must-Know React Tricks for Beginners",
    excerpt:
      "New to React? This post covers 10 essential tips and tricks that will help you write cleaner, more efficient code and boost your confidence as a beginner developer.",
    image: blog14,
    date: "July 20, 2025",
    links: {
      medium:
        "https://medium.com/@gouranga.das.khulna/10-must-know-react-tricks-for-beginners-af8b9e42f84d",
      devto:
        "https://dev.to/gouranga-das-khulna/10-must-know-react-tricks-for-beginners-38gi",
    },
  },
  {
    title: "Top 25 JavaScript Array Methods Every Developer Should Learn",
    excerpt:
      "Master JavaScript arrays with this comprehensive guide to 25 essential array methods. Whether you’re a beginner or looking to refine your skills, these techniques will streamline your development process.",
    image: blog13,
    date: "July 19, 2025",
    links: {
      medium:
        "https://medium.com/@gouranga.das.khulna/top-25-javascript-array-methods-every-developer-should-learn-2f4c2a06f776",
      devto:
        "https://dev.to/gouranga-das-khulna/top-25-javascript-array-methods-every-developer-should-learn-2jc1",
    },
  },
  {
    title:
      "Sharpen Your Front-End Skills: Quick HTML, CSS & React Interview Challenges",
    excerpt:
      "A collection of quick HTML, CSS, and React interview challenges designed to sharpen your front-end skills and prepare you for technical interviews.",
    image: blog12,
    date: "July 13, 2025",
    links: {
      medium:
        "https://medium.com/@gouranga.das.khulna/sharpen-your-front-end-skills-quick-html-css-react-interview-challenges-24629730d17c",
      devto:
        "https://dev.to/gouranga-das-khulna/sharpen-your-front-end-skills-quick-html-css-react-interview-challenges-5f2c",
    },
  },
  {
    title: "This One React Hook Streamlines Every Project I Build",
    excerpt:
      "A deep dive into a powerful React hook that simplifies state management and enhances code efficiency in every project.",
    image: blog11,
    date: "July 12, 2025",
    links: {
      medium:
        "https://medium.com/@gouranga.das.khulna/this-one-react-hook-streamlines-every-project-i-build-108af05bd18a",
      devto:
        "https://dev.to/gouranga-das-khulna/this-one-react-hook-streamlines-every-project-i-build-21hp",
    },
  },
  {
    title: "7 React Patterns That Made Me Code Smarter, Not Harder",
    excerpt:
      "A collection of seven essential React patterns that can significantly improve your coding efficiency and application architecture.",
    image: blog10,
    date: "July 06, 2025",
    links: {
      medium:
        "https://medium.com/@gouranga.das.khulna/7-react-patterns-that-made-me-code-smarter-not-harder-ee0696a94e9a",
      devto:
        "https://dev.to/gouranga-das-khulna/7-react-patterns-that-made-me-code-smarter-not-harder-4570",
    },
  },
  {
    title: "6 Essential JavaScript Concepts Every Developer Should Understand",
    excerpt:
      "A deep dive into six fundamental JavaScript concepts that every developer should master to enhance their coding skills and understanding of the language.",
    image: blog9,
    date: "July 05, 2025",
    links: {
      medium:
        "https://medium.com/@gouranga.das.khulna/6-essential-javascript-concepts-every-developer-should-understand-b93aca0b5d41",
      devto:
        "https://dev.to/gouranga-das-khulna/6-essential-javascript-concepts-every-developer-should-understand-530e",
    },
  },
  {
    title:
      "Exploring Google’s New Gemini CLI: The Ultimate Open-Source Dev Tool",
    excerpt:
      "A comprehensive guide to Google's new Gemini CLI, an open-source tool designed to enhance developer productivity and streamline workflows.",
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
    excerpt:
      "A guide to essential front-end performance optimizations that can significantly improve your web application's speed and user experience.",
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
