import type { MetadataRoute } from "next";
import { products, collections } from "@/data";

const SITE_URL = "https://peno.in";

const staticRoutes = [
  { path: "", priority: 1.0, changefreq: "daily" as const },
  { path: "/shop", priority: 0.9, changefreq: "daily" as const },
  { path: "/collections", priority: 0.9, changefreq: "daily" as const },
  { path: "/corporate-gifting", priority: 0.95, changefreq: "weekly" as const },
  { path: "/about", priority: 0.7, changefreq: "monthly" as const },
  { path: "/contact", priority: 0.8, changefreq: "monthly" as const },
  { path: "/faq", priority: 0.6, changefreq: "monthly" as const },
  { path: "/privacy", priority: 0.4, changefreq: "yearly" as const },
  { path: "/terms", priority: 0.4, changefreq: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changefreq,
    priority: route.priority,
    alternates: {
      languages: {
        "en-IN": `${SITE_URL}${route.path}`,
        "en": `${SITE_URL}${route.path}`,
      },
    },
  }));

  const collectionRoutes = collections.map((collection) => ({
    url: `${SITE_URL}/collections/${collection.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
    alternates: {
      languages: {
        "en-IN": `${SITE_URL}/collections/${collection.slug}`,
        "en": `${SITE_URL}/collections/${collection.slug}`,
      },
    },
  }));

  const productRoutes = products.map((product) => ({
    url: `${SITE_URL}/shop/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
    alternates: {
      languages: {
        "en-IN": `${SITE_URL}/shop/${product.slug}`,
        "en": `${SITE_URL}/shop/${product.slug}`,
      },
    },
  }));

  return [...routes, ...collectionRoutes, ...productRoutes];
}
