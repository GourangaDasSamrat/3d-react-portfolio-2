const fs = require("fs");
const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

// Define your website routes
const routes = ["/", "/about", "/projects", "/contact"];

// Create a stream to write to
const stream = new SitemapStream({
  hostname: "https://gouranga-das.netlify.app",
});

// Return a promise that resolves with your XML string
const sitemap = async () => {
  try {
    // Add each route to the sitemap
    const routeObjects = routes.map((route) => ({
      url: route,
      changefreq: "weekly",
      priority: route === "/" ? 1.0 : 0.8,
    }));

    // Create a readable stream and pipe it to the sitemap stream
    const data = await streamToPromise(
      Readable.from(routeObjects).pipe(stream)
    );

    // Write the result to a file
    fs.writeFileSync("./public/sitemap.xml", data.toString());
    console.log("Sitemap generated successfully!");
  } catch (error) {
    console.error("Error generating sitemap:", error);
  }
};

sitemap();
