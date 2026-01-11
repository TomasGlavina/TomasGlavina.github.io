import type { ComponentType } from "react";
import HelloWorld, {
  frontmatter as helloFrontmatter,
} from "./2025-09-26-hello-world.mdx";
import GoNotes, { frontmatter as goFrontmatter } from "./2025-10-05-go-notes.mdx";
import LinuxHabits, {
  frontmatter as linuxFrontmatter,
} from "./2025-10-08-linux-habits.mdx";

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  Component: ComponentType;
};

type Frontmatter = {
  title?: string;
  date?: string;
  tags?: string[];
};

function buildPost(
  slug: string,
  Component: ComponentType,
  frontmatter: Frontmatter
): BlogPost {
  return {
    slug,
    title: frontmatter.title ?? slug,
    date: frontmatter.date ?? "",
    tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
    Component,
  };
}

export const posts: BlogPost[] = [
  buildPost("hello-world", HelloWorld, helloFrontmatter),
  buildPost("go-notes", GoNotes, goFrontmatter),
  buildPost("linux-habits", LinuxHabits, linuxFrontmatter),
].sort((a, b) => b.date.localeCompare(a.date));
