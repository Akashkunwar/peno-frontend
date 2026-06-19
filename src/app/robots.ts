import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/cart", "/api/*", "/_next/*", "/404"],
    },
    sitemap: "https://peno.in/sitemap.xml",
    host: "https://peno.in",
  };
}
