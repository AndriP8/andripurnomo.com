import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    cover: z.object({
      resource: z.string(),
      owner: z.string(),
      ownerLink: z.string(),
      alt: z.string(),
    }),
    timeToRead: z.number(),
    createdAt: z.string(),
    updatedAt: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
  }),
});

export const collections = { blog };
