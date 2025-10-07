import {
  bootstrap,
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  mysql,
  nextjs,
  nodejs,
  react,
  redux,
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
const blog21 =
  "https://miro.medium.com/v2/resize:fit:640/format:webp/0*2ggZ8uXqoqvcEFul.jpg";
const blog22 =
  "https://miro.medium.com/v2/resize:fit:640/format:webp/0*egN0QgZuUMByHdAr.png";
const blog23 =
  "https://miro.medium.com/v2/resize:fit:640/format:webp/0*4H4CGZ-NDizFDl6N.jpeg";
const blog24 =
  "https://miro.medium.com/v2/resize:fit:640/format:webp/0*aUjMC6j72Fibh0Be.jpeg";
const blog25 =
  "https://miro.medium.com/v2/resize:fit:640/format:webp/0*awR7_g7rJ9CNgxJb.jpg";
const blog26 =
  "https://miro.medium.com/v2/resize:fit:640/format:webp/0*x3hbkEPZkeOYHjeE.png";
const blog27 =
  "https://miro.medium.com/v2/resize:fit:640/format:webp/0*i5Y4SukBwK9HMg7g.jpeg";
const blog28 =
  "https://miro.medium.com/v2/resize:fit:640/format:webp/0*ns_tB5HUYFrvQ1LM.png";
const blog29 =
  "https://miro.medium.com/v2/resize:fit:640/format:webp/0*mzSBUyY87eelHV4y.png";
const blog30 =
  "https://miro.medium.com/v2/resize:fit:640/format:webp/0*L3T1e0sFh9Pjc9L5.png";
const blog31 =
  "https://miro.medium.com/v2/resize:fit:640/format:webp/0*DeiirpYEHw2GDae6.png";
const blog32 =
  "https://miro.medium.com/v2/resize:fit:640/format:webp/0*PysxLsEke-DcRNwm.png";
const blog33 =
  "https://miro.medium.com/v2/resize:fit:640/format:webp/0*PGUikSQewMQ-fVXv.jpeg";
const blog34 =
  "https://miro.medium.com/v2/resize:fit:640/format:webp/0*sVjWLvAaleAwBI7e.png";
const blog35 =
  "https://miro.medium.com/v2/resize:fit:640/format:webp/0*-nsG2qXmEGJ1I6b7.png";
const blog36 =
  "https://miro.medium.com/v2/resize:fit:640/format:webp/0*zgHUhzdAJ4azky4T.png";
// Import project images
import p1 from "../assets/images/project-1.webp";
import p2 from "../assets/images/project-2.webp";
import p3 from "../assets/images/project-3.webp";
import p4 from "../assets/images/project-4.webp";
import p5 from "../assets/images/project-5.webp";
import p6 from "../assets/images/project-6.webp";

export const experiences = [
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
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
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
    imageUrl: bootstrap,
    name: "Bootstrap",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
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
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: mysql,
    name: "Tailwind CSS",
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
      "The Easiest Way to Test Node.js Apps with MongoDB: Without Breaking Your Production Database",
    excerpt:
      "Discover a safe and simple way to test your Node.js apps with MongoDB—without touching your production database. Clean testing, zero risk!",
    image: blog36,
    date: "October 06, 2025",
    links: {
      medium:
        "https://medium.com/@gouranga.das.khulna/the-easiest-way-to-test-node-js-apps-with-mongodb-without-breaking-your-production-database-910c1712e986",
      devto:
        "https://dev.to/gouranga-das-khulna/the-easiest-way-to-test-nodejs-apps-with-mongodb-without-breaking-your-production-database-p53",
    },
  },
  {
    title: "Creating User-Friendly Hints in HTML with Popover=Hint Magic",
    excerpt:
      "Learn how to enhance user experience with subtle, user-friendly hints in HTML using the power of the popover=hint attribute. A simple trick with big impact!",
    image: blog35,
    date: "October 05, 2025",
    links: {
      medium:
        "https://medium.com/javascript-in-plain-english/creating-user-friendly-hints-in-html-with-popover-hint-magic-2665a2497dae",
      devto:
        "https://dev.to/gouranga-das-khulna/creating-user-friendly-hints-in-html-with-popoverhint-magic-ljh",
    },
  },
  {
    title:
      "Write Elegant Animations in CSS with Dynamic and Composable Keyframes",
    excerpt:
      "Learn how to craft smooth, dynamic animations in CSS using composable keyframes. This guide explores best practices for creating elegant, reusable animations that enhance the user experience without sacrificing performance.",
    image: blog34,
    date: "September 28, 2025",
    links: {
      medium:
        "https://medium.com/@gouranga.das.khulna/write-elegant-animations-in-css-with-dynamic-and-composable-keyframes-4b8e854a04c5",
      devto:
        "https://dev.to/gouranga-das-khulna/write-elegant-animations-in-css-with-dynamic-and-composable-keyframes-4e0p",
    },
  },
  {
    title: "Slice Your Text Cleanly with These CSS Hacks",
    excerpt:
      "Discover clever CSS techniques to slice and style text with precision. This post covers innovative hacks to create clean, dynamic text effects that elevate your design without complicating the code.",
    image: blog33,
    date: "September 27, 2025",
    links: {
      medium:
        "https://medium.com/@gouranga.das.khulna/slice-your-text-cleanly-with-these-css-hacks-fd0366faef3e",
      devto:
        "https://dev.to/gouranga-das-khulna/slice-your-text-cleanly-with-these-css-hacks-212d",
    },
  },
  {
    title: "Unlock Full Control of Your CSS with Revert-Layer",
    excerpt:
      "Discover how the revert-layer keyword gives you precise control over CSS layers, making it easier to manage styles, reset overrides, and maintain cleaner code",
    image: blog32,
    date: "September 21, 2025",
    links: {
      medium:
        "https://medium.com/@gouranga.das.khulna/unlock-full-control-of-your-css-with-revert-layer-f9e11b269220",
      devto:
        "https://dev.to/gouranga-das-khulna/unlock-full-control-of-your-css-with-revert-layer-4ia4",
    },
  },
  {
    title: "ECMAScript 2025: Breaking Down the Latest JavaScript Enhancements",
    excerpt:
      "Dive into ECMAScript 2025: explore the newest JavaScript features, syntax improvements, and semantics tweaks that streamline coding, boost performance, and keep your skills future-ready.",
    image: blog31,
    date: "September 20, 2025",
    links: {
      medium:
        "https://medium.com/@gouranga.das.khulna/ecmascript-2025-breaking-down-the-latest-javascript-enhancements-383ba6874033",
      devto:
        "https://dev.to/gouranga-das-khulna/ecmascript-2025-breaking-down-the-latest-javascript-enhancements-2f8b",
    },
  },
  {
    title: "Use SVG Sprites to Make Your React App Load Faster",
    excerpt:
      "Learn how to optimize your React app’s performance by using SVG sprites. This blog explains how combining multiple icons into a single SVG file reduces HTTP requests, speeds up loading time, and keeps your codebase cleaner.",
    image: blog30,
    date: "September 14, 2025",
    links: {
      medium:
        "https://medium.com/@gouranga.das.khulna/use-svg-sprites-to-make-your-react-app-load-faster-311cec7b5156",
      devto:
        "https://dev.to/gouranga-das-khulna/use-svg-sprites-to-make-your-react-app-load-faster-319a",
    },
  },
  {
    title: "Smarter Error Handling in JavaScript: Group, Don’t Panic",
    excerpt:
      "Discover smarter ways to handle errors in JavaScript by grouping them effectively instead of reacting in panic. This blog explores structured error handling techniques to make your code more resilient and maintainable.",
    image: blog29,
    date: "September 13, 2025",
    links: {
      medium:
        "https://javascript.plainenglish.io/smarter-error-handling-in-javascript-group-dont-panic-7a11422e104b",
      devto:
        "https://dev.to/gouranga-das-khulna/smarter-error-handling-in-javascript-group-dont-panic-5c0",
    },
  },
  {
    title:
      "Forget useEffect — Signals Are the Future of Clean, Performant Code",
    excerpt:
      "Explore how signals offer a cleaner, faster alternative to useEffect in React, helping you write more maintainable and performant code.",
    image: blog28,
    date: "September 07, 2025",
    links: {
      medium:
        "https://javascript.plainenglish.io/forget-useeffect-signals-are-the-future-of-clean-performant-code-cc259b033441",
    },
  },
  {
    title: "Memoization in React 19: What Happens to useMemo and useCallback?",
    excerpt:
      "A breakdown of how React 19 changes the role of useMemo and useCallback, and what it means for optimizing your components.",
    image: blog27,
    date: "September 06, 2025",
    links: {
      medium:
        "https://javascript.plainenglish.io/memoization-in-react-19-what-happens-to-usememo-and-usecallback-f3ce99d2f36e",
    },
  },
  {
    title:
      "13 Game-Changing Performance Fixes Every Front-End Developer Should Know",
    excerpt:
      "Unlock 13 proven techniques to supercharge front-end performance—optimize load times, enhance responsiveness, and deliver a smoother user experience.",
    image: blog26,
    date: "August 31, 2025",
    links: {
      medium:
        "https://medium.com/@gouranga.das.khulna/13-game-changing-performance-fixes-every-front-end-developer-should-know-06f02572ffe4",
      devto:
        "https://dev.to/gouranga-das-khulna/13-game-changing-performance-fixes-every-front-end-developer-should-know-3gj8",
    },
  },
  {
    title:
      "Essential JavaScript Built-in Functions Every Developer Should Know",
    excerpt:
      "A handy guide to JavaScript’s most useful built-in functions, with clear examples to boost your coding efficiency and problem-solving skills.",
    image: blog25,
    date: "August 30, 2025",
    links: {
      medium:
        "https://medium.com/@gouranga.das.khulna/essential-javascript-built-in-functions-every-developer-should-know-b85d4300e7e5",
      devto:
        "https://dev.to/gouranga-das-khulna/essential-javascript-built-in-functions-every-developer-should-know-40gf",
    },
  },
  {
    title:
      "25 Challenging JavaScript Questions Every Developer Should Be Ready For",
    excerpt:
      "Test your knowledge with 25 tricky JavaScript questions covering concepts, edge cases, and best practices every developer should master.",
    image: blog24,
    date: "August 24, 2025",
    links: {
      medium:
        "https://medium.com/javascript-in-plain-english/25-challenging-javascript-questions-every-developer-should-be-ready-for-4d1ee2a47b64",
      devto:
        "https://dev.to/gouranga-das-khulna/25-challenging-javascript-questions-every-developer-should-be-ready-for-18c1",
    },
  },
  {
    title: "Scaling React: 5 Tough Lessons Learned from Real-World Projects",
    excerpt:
      "Practical insights from real-world React projects—five hard-earned lessons on scaling apps, managing performance, and avoiding common pitfalls.",
    image: blog23,
    date: "August 23, 2025",
    links: {
      medium:
        "https://medium.com/javascript-in-plain-english/scaling-react-5-tough-lessons-learned-from-real-world-projects-2aade682c490",
      devto:
        "https://dev.to/gouranga-das-khulna/scaling-react-5-tough-lessons-learned-from-real-world-projects-9k4",
    },
  },
  {
    title:
      "Controlled vs. Uncontrolled Components in React.js: What’s the Difference?",
    excerpt:
      "A clear breakdown of controlled vs. uncontrolled components in React.js, explaining how they work, their key differences, and when to use each for better form handling and state management",
    image: blog22,
    date: "August 17, 2025",
    links: {
      medium:
        "https://medium.com/@gouranga.das.khulna/controlled-vs-uncontrolled-components-in-react-js-whats-the-difference-7df4b04fbb1b",
      devto:
        "https://dev.to/gouranga-das-khulna/controlled-vs-uncontrolled-components-in-reactjs-whats-the-difference-13l7",
    },
  },
  {
    title:
      "Stop Importing React This Way — Switch to the Wrapper Pattern Instead",
    excerpt:
      "Discover why the traditional way of importing React isn’t always ideal. Learn how the Wrapper Pattern offers a cleaner, more scalable approach to structuring your components.",
    image: blog21,
    date: "August 16, 2025",
    links: {
      medium:
        "https://javascript.plainenglish.io/stop-importing-react-this-way-switch-to-the-wrapper-pattern-instead-1ee17ea0d069",
      devto:
        "https://dev.to/gouranga-das-khulna/stop-importing-react-this-way-switch-to-the-wrapper-pattern-instead-4l86",
    },
  },
  {
    title:
      "Stop Using TypeScript Types This Way — Opt for the Map Pattern Instead",
    excerpt:
      "Learn why the common way of defining repetitive TypeScript types can lead to clutter and maintenance headaches. This article explores the Map Pattern — a cleaner, more scalable approach that boosts type safety, reduces duplication, and keeps your codebase DRY. Perfect for developers aiming to write more maintainable TypeScript.",
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
    excerpt:
      "Storing sensitive data in localStorage can put your app — and users — at risk. This article explains the security pitfalls of localStorage and shows proven techniques to safeguard it, from encryption strategies to better storage alternatives. Essential reading for web developers who care about security.",
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
