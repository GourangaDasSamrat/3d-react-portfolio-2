import { motion } from "framer-motion";

const Links = () => {
  const socialLinks = [
    {
      platform: "Facebook",
      url: "https://www.facebook.com/gourangadassamrat/",
      icon: "bx bxl-facebook",
    },
    {
      platform: "Twitter",
      url: "https://x.com/Gouranga_Khulna/",
      icon: "bx bxl-twitter",
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/gouranga.das.khulna/",
      icon: "bx bxl-instagram",
    },
    {
      platform: "TikTok",
      url: "https://www.tiktok.com/@gourangadassamrat/",
      icon: "bx bxl-tiktok",
    },
    {
      platform: "Threads",
      url: "https://www.threads.com/@gouranga.das.khulna/",
      icon: "bx bxl-meta",
    },
    {
      platform: "YouTube",
      url: "https://www.youtube.com/@GourangaDasSamrat",
      icon: "bx bxl-youtube",
    },
    {
      platform: "GitHub",
      url: "https://github.com/GourangaDasSamrat/",
      icon: "bx bxl-github",
    },
    {
      platform: "CodePen",
      url: "https://codepen.io/Gouranga-Das-Samrat/",
      icon: "bx bxl-codepen",
    },
    {
      platform: "LeetCode",
      url: "https://leetcode.com/u/gourangadassamrat/",
      icon: "bx bx-code-alt",
    },
    {
      platform: "HackerRank",
      url: "https://www.hackerrank.com/profile/gouranga_das_kh1",
      icon: "bx bx-code-curly",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/gouranga-das-samrat/",
      icon: "bx bxl-linkedin",
    },
    {
      platform: "Medium",
      url: "https://medium.com/@gouranga.das.khulna/",
      icon: "bx bxl-medium",
    },
    {
      platform: "DEV",
      url: "https://dev.to/gouranga-das-khulna/",
      icon: "bx bxl-dev-to",
    },
    {
      platform: "Blogger",
      url: "https://gourangadassamrat.blogspot.com/",
      icon: "bx bxl-blogger",
    },
    {
      platform: "Discord Server",
      url: "https://discord.gg/ByjVd6KZdV",
      icon: "bx bxl-discord",
    },
    {
      platform: "Gmail",
      url: "mailto:gouranga.das.khulna@gmail.com",
      icon: "bx bxl-gmail",
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
          Hi! I'm Gouranga Das Samrat, a passionate developer from Khulna,
          sharing my work and ideas online. Let's connect and build something
          amazing together!
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
                  className={`${link.icon} text-2xl`}
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
