import SectionTitle, { SectionTitleClose } from "@/components/Title";
import { posts } from "@/content/blog/posts";
import { Link, useNavigate } from "react-router-dom";

export default function Blog({ onOpen }: { onOpen?: () => void }) {
  const navigate = useNavigate();
  const handleOpen = onOpen ?? (() => navigate("/blog"));
  const latestPosts = posts.slice(0, 3);
  const sizeBySlug: Record<string, string> = {
    "hello-world": "1.0k",
    "go-notes": "1.2k",
    "linux-habits": "1.1k",
  };

  return (
    <section id="blog" className="tile scroll-mt-24">
      <SectionTitle emoji="" onOpen={handleOpen}>
        ll blog
      </SectionTitle>
      <div className="content">
        <ul className="space-y-2 text-xs font-mono">
          {latestPosts.map((post) => (
            <li
              key={post.slug}
              className="rounded-md border border-ctp-overlay0 bg-ctp-surface0 px-3 py-2"
            >
              <div className="grid grid-cols-[auto,auto,auto,auto,auto,1fr] gap-2">
                <span className="text-ctp-subtext1">-rw-r--r--</span>
                <span className="text-ctp-subtext0">tomas</span>
                <span className="text-ctp-subtext0">dev</span>
                <span className="text-ctp-subtext1">
                  {sizeBySlug[post.slug] ?? "1.0k"}
                </span>
                <span className="text-ctp-subtext1">{post.date}</span>
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-ctp-green hover:text-ctp-text"
                >
                  {post.slug}.mdx
                </Link>
              </div>
            </li>
          ))}
        </ul>
        <Link
          to="/blog"
          className="mt-3 inline-flex text-sm font-semibold tracking-wide text-ctp-green hover:text-ctp-text hover:underline"
        >
          all posts →
        </Link>
      </div>
    </section>
  );
}

export function BlogModal({ onClose }: { onClose: () => void }) {
  const sizeBySlug: Record<string, string> = {
    "hello-world": "1.0k",
    "go-notes": "1.2k",
    "linux-habits": "1.1k",
  };
  return (
    <div className="p-4">
      <SectionTitleClose emoji="📝" onClose={onClose}>
        ll blog
      </SectionTitleClose>
      <div className="content">
        <ul className="space-y-3 text-xs font-mono">
          {posts.map((post) => (
            <li
              key={post.slug}
              className="rounded-md border border-ctp-overlay0 bg-ctp-surface0 px-3 py-2"
            >
              <div className="grid grid-cols-[auto,auto,auto,auto,auto,1fr] gap-2">
                <span className="text-ctp-subtext1">-rw-r--r--</span>
                <span className="text-ctp-subtext0">tomas</span>
                <span className="text-ctp-subtext0">dev</span>
                <span className="text-ctp-subtext1">
                  {sizeBySlug[post.slug] ?? "1.0k"}
                </span>
                <span className="text-ctp-subtext1">{post.date}</span>
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-ctp-green hover:text-ctp-text"
                >
                  {post.slug}.mdx
                </Link>
              </div>
            </li>
          ))}
        </ul>
        <Link
          to="/blog"
          className="mt-3 inline-flex text-sm font-semibold tracking-wide text-ctp-green hover:text-ctp-text hover:underline"
        >
          all posts →
        </Link>
      </div>
    </div>
  );
}
