import fs from "fs";
import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

// Define your website routes
const routes = [
  "/",
  "/about",
  "/experience",
  "/projects",
  "/certifications",
  "/contact",
];

// Create a stream to write to
const stream = new SitemapStream({
  hostname: "https://gouranga.qzz.io",
});

// Return a promise that resolves with your XML string
const generateSitemap = async () => {
  try {
    // Add each route to the sitemap with metadata
    const routeObjects = routes.map((route) => ({
      url: route,
      changefreq: "weekly",
      priority: route === "/" ? 1.0 : 0.8,
      lastmod: new Date().toISOString().split("T")[0], // YYYY-MM-DD format
    }));

    // Create a readable stream of the route objects
    const stream = new SitemapStream({
      hostname: "https://gouranga.qzz.io",
    });

    // Generate sitemap XML
    const data = await streamToPromise(
      Readable.from(routeObjects).pipe(stream)
    ).then((data) => data.toString());

    // Ensure the public directory exists
    const publicDir = "./public";
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    // Write the sitemap file
    fs.writeFileSync("./public/sitemap.xml", data);
    console.log("✅ Sitemap generated successfully!");
  } catch (error) {
    console.error("❌ Error generating sitemap:", error);
    process.exit(1); // Exit with error code to indicate build failure
  }
};

// Execute the sitemap generation
generateSitemap();
