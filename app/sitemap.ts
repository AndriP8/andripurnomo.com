import { SITE_CONFIG } from "@lib/constants";
import { getBlogData, getBlogSlugs } from "@lib/data/blog";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_CONFIG.url;

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  // Dynamic blog pages
  const slugs = await getBlogSlugs();
  const blogPages: MetadataRoute.Sitemap = await Promise.all(
    slugs.map(async (slug) => {
      const blog = await getBlogData(slug);
      return {
        url: `${baseUrl}/blog/${slug}`,
        lastModified: blog?.updatedAt
          ? new Date(blog.updatedAt)
          : blog?.createdAt
          ? new Date(blog.createdAt)
          : new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      };
    }),
  );

  return [...staticPages, ...blogPages];
}
