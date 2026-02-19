import SectionTitle, { SectionTitleClose } from "@/components/Title.tsx";
import { posts } from "@/content/blog/posts";
import { Link } from "react-router-dom";

const projectPosts = posts.filter((post) => post.tags.includes("project"));
const repoSizeBySlug: Record<string, string> = {
  "project-dronora-architecture": "6.1k",
  "project-devops-todo-app": "4.9k",
  "project-linux-dotfiles": "8.0k",
};

export default function ProjectsList({ onOpen }: { onOpen?: () => void }) {
  const preview = projectPosts.slice(0, 3);
  return (
    <section id="projects" className="tile scroll-mt-24">
      <SectionTitle emoji="" onOpen={onOpen}>
        ll projects
      </SectionTitle>
      <div className="content">
        <ul className="space-y-2 text-xs font-mono">
          {preview.map((project) => (
            <li
              key={project.slug}
              className="rounded-md border border-ctp-overlay0 bg-ctp-surface0 px-3 py-2"
            >
              <div className="grid grid-cols-[auto,auto,auto,auto,auto,1fr] gap-2">
                <span className="text-ctp-subtext1">-rw-r--r--</span>
                <span className="text-ctp-subtext0">tomas</span>
                <span className="text-ctp-subtext0">dev</span>
                <span className="text-ctp-subtext1">
                  {repoSizeBySlug[project.slug] ?? "5.0k"}
                </span>
                <span className="text-ctp-subtext1">{project.date}</span>
                <Link
                  to={`/blog/${project.slug}`}
                  className="text-ctp-blue hover:text-ctp-text"
                >
                  {project.slug}.mdx
                </Link>
              </div>
              <p className="mt-1 text-[0.6875rem] text-ctp-subtext0">
                // {project.title}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ProjectsModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="p-4">
      <SectionTitleClose emoji="📂" onClose={onClose}>
        ll projects
      </SectionTitleClose>
      <div className="content">
        <ul className="space-y-3 text-xs font-mono">
          {projectPosts.map((project) => (
            <li
              key={project.slug}
              className="rounded-md border border-ctp-overlay0 bg-ctp-surface0 px-3 py-2"
            >
              <div className="grid grid-cols-[auto,auto,auto,auto,auto,1fr] gap-2">
                <span className="text-ctp-subtext1">-rw-r--r--</span>
                <span className="text-ctp-subtext0">tomas</span>
                <span className="text-ctp-subtext0">dev</span>
                <span className="text-ctp-subtext1">
                  {repoSizeBySlug[project.slug] ?? "5.0k"}
                </span>
                <span className="text-ctp-subtext1">{project.date}</span>
                <Link
                  to={`/blog/${project.slug}`}
                  className="text-ctp-blue hover:text-ctp-text"
                >
                  {project.slug}.mdx
                </Link>
              </div>
              <p className="mt-1 text-[0.6875rem] text-ctp-subtext0">
                // {project.title}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
