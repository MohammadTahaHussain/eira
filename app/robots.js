export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: "/api/" }],
    sitemap: "https://eiraforklifts.com.pk/sitemap.xml",
  };
}
