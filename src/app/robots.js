export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: "https://www.resumehelperai.com/sitemap.xml",
    host: "https://www.resumehelperai.com",
  };
}
