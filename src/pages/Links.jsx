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
  ];

  return (
    <section className="max-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full flex flex-col items-center justify-center py-12 px-4"
      >
        <div className="w-32 h-32 rounded-full overflow-hidden mb-6 ring-4 ring-blue-500 shadow-lg">
          <img
            src="https://i.postimg.cc/xTdHQfhr/me-photoaidcom-cropped.png"
            alt="Gouranga Das"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-3xl font-bold text-center mb-4">Connect with Me</h1>

        <p className="text-grey-800  text-center max-w-lg mb-8">
          Hi! I'm Gouranga Das Samrat, a passionate developer from Khulna, sharing my
          work and ideas online. Let's connect and build something amazing
          together!
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-4xl">
          {socialLinks.map((link) => (
            <motion.a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-4 bg-black/30 backdrop-blur-sm rounded-lg hover:bg-blue-500/20 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className={`${link.icon} text-2xl`}></i>
              <span className="text-sm">{link.platform}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Links;
