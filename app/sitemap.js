import { PRODUCTS, productUrl } from "../lib/products";

const BASE = "https://eiraforklifts.com.pk";

export default function sitemap() {
  const staticRoutes = [
    { url: `${BASE}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/specifications`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/industries`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
  const productRoutes = PRODUCTS.map((p) => ({
    url: `${BASE}${productUrl(p.slug)}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));
  return [...staticRoutes, ...productRoutes];
}
