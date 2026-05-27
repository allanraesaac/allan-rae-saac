import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

export interface PostData {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  contentHtml?: string;
  [key: string]: any;
}

/**
 * Get sorted posts data from a specific directory inside `content/`
 * @param folder e.g., 'blog' or 'projects'
 */
export function getSortedPostsData(folder: string): PostData[] {
  const folderPath = path.join(contentDirectory, folder);
  if (!fs.existsSync(folderPath)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(folderPath);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      // Remove ".md" from file name to get id
      const slug = fileName.replace(/\.md$/, '');

      // Read markdown file as string
      const fullPath = path.join(folderPath, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the slug
      return {
        slug,
        ...(matterResult.data as { title: string; date: string; excerpt?: string }),
      };
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

/**
 * Get all slugs for a specific directory
 */
export function getAllPostSlugs(folder: string) {
  const folderPath = path.join(contentDirectory, folder);
  if (!fs.existsSync(folderPath)) {
    return [];
  }
  const fileNames = fs.readdirSync(folderPath);

  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      return {
        slug: fileName.replace(/\.md$/, ''),
      };
    });
}

/**
 * Get full post data including HTML content
 */
export async function getPostData(folder: string, slug: string): Promise<PostData> {
  const fullPath = path.join(contentDirectory, folder, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the slug and contentHtml
  return {
    slug,
    contentHtml,
    ...(matterResult.data as { title: string; date: string }),
  };
}
