import fs from "fs";
import path from "path";
import { blogPosts } from "../src/data/blogPosts";

const BASE_URL = "https://aktherhosen.com";

const staticRoutes = [
  { url: "/", lastmod: "2024-05-20", changefreq: "monthly", priority: "1.0" },
  {
    url: "/projects",
    lastmod: "2024-05-20",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    url: "/blogs",
    lastmod: "2024-05-20",
    changefreq: "weekly",
    priority: "0.8",
  },
];

const dynamicRoutes = blogPosts.map((post) => ({
  url: `/blog/${post.slug}`,
  lastmod: post.date,
  changefreq: "monthly",
  priority: "0.7",
}));

const allRoutes = [...staticRoutes, ...dynamicRoutes];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (route) => `  <url>
    <loc>${BASE_URL}${route.url}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

const sitemapPath = path.resolve(process.cwd(), "public/sitemap.xml");
fs.writeFileSync(sitemapPath, sitemap);

console.log("Sitemap generated successfully at:", sitemapPath);
