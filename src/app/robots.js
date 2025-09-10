export default function robots() {
  const baseUrl = "https://felix-erik-cms-grupparbete.vercel.app";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/global/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}