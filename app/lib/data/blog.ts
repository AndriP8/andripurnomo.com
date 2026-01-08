import { readdir, readFile } from "fs/promises";
import { join } from "path";
import { VFile } from "vfile";
import { matter } from "vfile-matter";

const contentDirectory = join(process.cwd(), "content", "blogs");

interface BlogFrontmatter {
  title: string;
  cover: {
    resource: string;
    owner: string;
    ownerLink: string;
    alt: string;
  };
  timeToRead: number;
  createdAt: string;
  updatedAt?: string;
}

export interface BlogData {
  slug: string;
  title: string;
  cover: BlogFrontmatter["cover"];
  timeToRead: number;
  createdAt: string;
  updatedAt?: string;
  content: string;
}

export async function getBlogData(slug: string): Promise<BlogData | null> {
  try {
    const filePath = join(contentDirectory, slug, "index.mdx");
    const fileContent = await readFile(filePath, "utf-8");

    const file = new VFile({ value: fileContent, path: filePath });
    matter(file, { strip: true });

    const frontmatter = file.data.matter as BlogFrontmatter;

    return {
      slug,
      title: frontmatter.title,
      cover: frontmatter.cover,
      timeToRead: frontmatter.timeToRead,
      createdAt: frontmatter.createdAt,
      updatedAt: frontmatter.updatedAt,
      content: String(file.value),
    };
  } catch (error) {
    console.error(`Error reading blog ${slug}:`, error);
    return null;
  }
}

export async function getBlogs(numBlogs?: number): Promise<BlogData[]> {
  try {
    const slugs = await getBlogSlugs();
    const blogs = await Promise.all(slugs.map((slug) => getBlogData(slug)));

    const validBlogs = blogs.filter((blog): blog is BlogData => blog !== null);

    const sortedBlogs = validBlogs.sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

    if (numBlogs) {
      return sortedBlogs.slice(0, numBlogs);
    }

    return sortedBlogs;
  } catch (error) {
    console.error("Error getting blogs:", error);
    return [];
  }
}

export async function getBlogSlugs(): Promise<string[]> {
  try {
    const entries = await readdir(contentDirectory, { withFileTypes: true });
    return entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name);
  } catch (error) {
    console.error("Error getting blog slugs:", error);
    return [];
  }
}
