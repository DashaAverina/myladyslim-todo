import fs from "fs";
import matter from "gray-matter";
import path from "path";
import yaml from "js-yaml";

const tasksDirectory = path.join(process.cwd(), "content/tasks");

export type TaskContent = {
  readonly title: string;
  readonly title_ukr: string;
  readonly description: string;
  readonly description_ukr: string;
  readonly slug: string;
  readonly image: string;
};

let taskCache: TaskContent[];

export function fetchTaskContent(): TaskContent[] {
  if (taskCache) {
    return taskCache;
  }
  // Get file names under /posts
  const fileNames = fs.readdirSync(tasksDirectory);
  const allTasksData = fileNames
    .filter((it) => it.endsWith(".mdx"))
    .map((fileName) => {
      // Read markdown file as string
      const fullPath = path.join(tasksDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents, {
        engines: {
          yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
        },
      });
      const matterData = matterResult.data as {
        title: string;
        title_ukr: string;
        description: string;
        description_ukr: string;
        slug: string;
        image: string;
      };

      const slug = fileName.replace(/\.mdx$/, "");

      // Validate slug string
      if (matterData.slug !== slug) {
        throw new Error(
          "slug field not match with the path of its content source"
        );
      }

      return matterData;
    });
  // Sort posts by date
  taskCache = allTasksData;
  return taskCache;
}
