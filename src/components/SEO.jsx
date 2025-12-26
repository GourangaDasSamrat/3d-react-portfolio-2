import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SEO = ({
  title = "Gouranga Das Samrat | Frontend Web Developer",
  description = "Hey there! I'm Gouranga Das Samrat, a 16-year-old passionate Frontend Web Developer from Khulna, Bangladesh. I craft beautiful and interactive web experiences using HTML, CSS, JavaScript (ES6), Bootstrap 5, and I'm diving deep into React JS and Tailwind CSS. Now featuring a mobile-friendly hamburger menu and Framer Motion for smooth, modern UI/UX transitions. I host my projects on Netlify and Vercel. Let's build something awesome together! 🚀",
  type = "website",
  keywords = "Frontend Developer, Web Developer, HTML, CSS, JavaScript, React JS, Tailwind CSS, Bootstrap 5, Portfolio, Gouranga Das Samrat, Khulna, Bangladesh, Web Design, UI/UX, Responsive Design, Netlify, Vercel, Full Stack Developer, MERN Stack",
  image = "https://i.postimg.cc/HsWDG5nx/Screenshot-from-2025-06-07-13-26-18.png", // Your website screenshot as the default OG image
  url = "https://gouranga.qzz.io/",
  locale = "en_US",
  publishedAt,
  modifiedAt = new Date().toISOString(),
  article,
}) => {
  const { pathname } = useLocation();
  const siteUrl = "https://gouranga.qzz.io/"; // Directly using your portfolio URL
  const canonicalUrl = `${siteUrl}${pathname}`;
  const imageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`;

  const ldJson = {
    "@context": "https://schema.org",
    "@type": type === "article" ? "Article" : "WebSite",
    name: title,
    description: description,
    image: imageUrl,
    url: canonicalUrl,
    author: {
      "@type": "Person",
      name: "Gouranga Das Samrat",
      url: "https://gouranga.qzz.io/",
      sameAs: [
        "https://github.com/GourangaDasSamrat",
        "https://linkedin.com/in/gouranga-das-samrat",
        "https://gouranga.qzz.io/",
        "mailto:gouranga.das.khulna@gmail.com",
        "https://leetcode.com/u/gourangadassamrat/",
        "https://codepen.io/gouranga-das-samrat",
        "https://www.reddit.com/user/Capable-Plantain8709/",
        "https://www.behance.net/gourangsamrat",
        "https://dribbble.com/gourangadassamrat",
        "https://stackoverflow.com/users/27733996/gouranga-das-samrat?tab=profile",
        "https://www.quora.com/profile/Gouranga-Das-Samrat",
        "https://www.twitch.tv/gourangadassamrat",
        "https://www.youtube.com/@GourangaDasSamrat",
        "https://medium.com/@gouranga.das.khulna",
        "https://gourangadassamrat.blogspot.com/",
        "https://discord.gg/jnZStfKW7v",
        "https://x.com/gouranga_khulna",
        "https://www.facebook.com/gourangadassamrat",
        "https://instagram.com/gouranga.das.khulna",
        "https://www.tiktok.com/@gourangadassamrat",
        "https://www.threads.net/@gouranga.das.khulna",
        "https://pinterest.com/gourangadaskhulna",
      ],
    },
    publisher: {
      "@type": "Organization",
      name: "Gouranga Das Samrat's Portfolio",
      logo: {
        "@type": "ImageObject",
        url: "https://gouranga.qzz.io/logo.webp",
      },
    },
    keywords: keywords.split(", "),
    mainEntityOfPage: {
      "@id": canonicalUrl,
    },
  };

  if (type === "article" && article) {
    ldJson.headline = article.headline || title;
    ldJson.articleBody = article.body || description;
    ldJson.datePublished = article.publishedTime || publishedAt;
    ldJson.dateModified = article.modifiedTime || modifiedAt;
    ldJson["@type"] = "Article";
  } else {
    if (publishedAt) {
      ldJson.datePublished = publishedAt;
    }
    if (modifiedAt) {
      ldJson.dateModified = modifiedAt;
    }
  }

  return (
    <Helmet>
      <html lang={locale.split("_")[0]} />
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content={
          keywords +
          ", mobile navigation, hamburger menu, framer motion, responsive UI"
        }
      />
      <meta name="author" content="Gouranga Das Samrat" />
      <meta
        name="subject"
        content="Portfolio with mobile navigation and Framer Motion UI enhancements"
      />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta
        name="googlebot"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta
        name="bingbot"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />

      <meta property="og:locale" content={locale} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Gouranga Das Samrat's Portfolio" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:secure_url" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={description} />
      {publishedAt && (
        <meta property="article:published_time" content={publishedAt} />
      )}
      {modifiedAt && (
        <meta property="article:modified_time" content={modifiedAt} />
      )}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@gouranga_khulna" />
      <meta name="twitter:creator" content="@gouranga_khulna" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={description} />

      <link
        rel="icon"
        type="image/png"
        href="/favicon/favicon-96x96.png"
        sizes="96x96"
      />
      <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />

      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="apple-mobile-web-app-title" content="Gouranga Das Samrat" />

      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />

      <meta name="theme-color" content="#000000" />

      <script type="application/ld+json">{JSON.stringify(ldJson)}</script>
    </Helmet>
  );
};

export default SEO;
