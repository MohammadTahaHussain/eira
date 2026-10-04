export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: "/api/" }],
    sitemap: "https://www.eira.com.pk/sitemap.xml",
  };
}
