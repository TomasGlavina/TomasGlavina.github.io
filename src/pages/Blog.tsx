import SectionTitle, { SectionTitleClose } from "@/components/Title";
import { posts } from "@/content/blog/posts";
import { Link, useNavigate } from "react-router-dom";

export default function Blog({ onOpen }: { onOpen?: () => void }) {
  const navigate = useNavigate();
  const handleOpen = onOpen ?? (() => navigate("/blog"));
  const latestPosts = posts.slice(0, 3);

  return (
    <section id="blog" className="tile scroll-mt-24">
      <SectionTitle emoji="📝" onOpen={handleOpen}>
        blog
      </SectionTitle>
      <div className="content">
        <ul className="space-y-3 text-sm">
          {latestPosts.map((post) => (
            <li
              key={post.slug}
              className="rounded-md border border-ctp-overlay0 bg-ctp-surface0 px-3 py-2"
            >
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-ctp-text">{post.title}</span>
                  <span className="text-ctp-subtext1">{post.date}</span>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-ctp-surface2 px-2 py-0.5 text-[11px] tracking-wide text-ctp-text"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
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
  return (
    <div className="p-4">
      <SectionTitleClose emoji="📝" onClose={onClose}>
        blog
      </SectionTitleClose>
      <div className="content">
        <ul className="space-y-3 text-sm">
          {posts.map((post) => (
            <li
              key={post.slug}
              className="rounded-md border border-ctp-overlay0 bg-ctp-surface0 px-3 py-2"
            >
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-ctp-text">{post.title}</span>
                  <span className="text-ctp-subtext1">{post.date}</span>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-ctp-surface2 px-2 py-0.5 text-[11px] tracking-wide text-ctp-text"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
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
