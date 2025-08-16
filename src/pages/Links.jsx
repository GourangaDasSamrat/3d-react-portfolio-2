import { motion } from "framer-motion";

const Links = () => {
  const socialLinks = [
    {
      platform: "Facebook",
      url: "https://www.facebook.com/gourangadassamrat/",
      icon: "fab fa-facebook",
    },
    {
      platform: "Twitter",
      url: "https://x.com/Gouranga_Khulna/",
      icon: "fab fa-twitter",
    },
    {
      platform: "BlueSky",
      url: "https://bsky.app/profile/gouranga-khulna.bsky.social",
      icon: "fa-brands fa-bluesky",
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/gouranga.das.khulna/",
      icon: "fab fa-instagram",
    },
    {
      platform: "TikTok",
      url: "https://www.tiktok.com/@gourangadassamrat/",
      icon: "fab fa-tiktok",
    },
    {
      platform: "Threads",
      url: "https://www.threads.com/@gouranga.das.khulna/",
      icon: "fa-brands fa-threads",
    },
    {
      platform: "YouTube",
      url: "https://www.youtube.com/@GourangaDasSamrat",
      icon: "fab fa-youtube",
    },
    {
      platform: "GitHub",
      url: "https://github.com/GourangaDasSamrat/",
      icon: "fab fa-github",
    },
    {
      platform: "CodePen",
      url: "https://codepen.io/Gouranga-Das-Samrat/",
      icon: "fab fa-codepen",
    },
    {
      platform: "LeetCode",
      url: "https://leetcode.com/u/gourangadassamrat/",
      icon: "fa-solid fa-code",
    },
    {
      platform: "HackerRank",
      url: "https://www.hackerrank.com/profile/gouranga_das_kh1",
      icon: "fa-brands fa-hackerrank",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/gouranga-das-samrat/",
      icon: "fab fa-linkedin",
    },
    {
      platform: "Medium",
      url: "https://medium.com/@gouranga.das.khulna/",
      icon: "fab fa-medium",
    },
    {
      platform: "DEV",
      url: "https://dev.to/gouranga-das-khulna/",
      icon: "fab fa-dev",
    },
    {
      platform: "Blogger",
      url: "https://gourangadassamrat.blogspot.com/",
      icon: "fab fa-blogger",
    },
    {
      platform: "Discord Server",
      url: "https://discord.gg/ByjVd6KZdV",
      icon: "fab fa-discord",
    },
    {
      platform: "Gmail",
      url: "mailto:gouranga.das.khulna@gmail.com",
      icon: "fa-solid fa-envelope",
    },
  ];

  return (
    <section className="max-container">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full flex flex-col items-center justify-center py-12 px-4"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            type: "spring",
            stiffness: 120,
          }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px #3b82f6" }}
          className="w-32 h-32 rounded-full overflow-hidden mb-6 ring-4 ring-blue-500 shadow-lg"
        >
          <img
            src="https://i.postimg.cc/xTdHQfhr/me-photoaidcom-cropped.png"
            alt="Gouranga Das"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-3xl font-bold text-center mb-4"
        >
          Connect with Me
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-800  text-center max-w-lg mb-8"
        >
          I am a passionate Frontend Web Developer skilled in HTML, CSS,
          JavaScript, Bootstrap, Tailwind CSS and React. My focus is on building
          user-centric, responsive, and visually stunning websites. With a
          strong background in web design and development, I am dedicated to
          delivering high-quality digital experiences.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { staggerChildren: 0.08, delayChildren: 0.5 },
            },
          }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-4xl"
        >
          {socialLinks.map((link, idx) => {
            // Brand colors for each platform
            const brandColors = {
              Facebook: "#1877F3",
              Twitter: "#1DA1F2",
              BlueSky: "#0085FF",
              Instagram: "#E4405F",
              TikTok: "#010101",
              Threads: "#000000",
              YouTube: "#FF0000",
              GitHub: "#333",
              CodePen: "#000",
              LeetCode: "#FFA116",
              HackerRank: "green",
              LinkedIn: "#0077B5",
              Medium: "black",
              DEV: "#0A0A0A",
              Blogger: "#FF8000",
              "Discord Server": "#5865F2",
              Gmail: "#D14836",
            };
            return (
              <motion.a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-4 bg-black/30 backdrop-blur-sm rounded-lg hover:bg-blue-500/20 transition-colors"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{
                  scale: 1.08,
                  backgroundColor: "rgba(59,130,246,0.15)",
                  boxShadow: "0 4px 24px #3b82f6",
                }}
                whileTap={{ scale: 0.97 }}
              >
                <i
                  className={link.icon + " text-2xl"}
                  style={{ color: brandColors[link.platform] || "#333" }}
                ></i>
                <span className="text-sm">{link.platform}</span>
              </motion.a>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Links;
