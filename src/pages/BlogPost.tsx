import { Link, useParams } from "react-router-dom";
import { posts } from "@/content/blog/posts";

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((entry) => entry.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen w-full bg-ctp-mantle text-ctp-text">
        <main className="mt-9 w-full px-1 pb-6">
          <p className="text-sm text-ctp-subtext0">Post not found.</p>
          <div className="mt-4 flex gap-3 text-xs font-semibold tracking-wide">
            <Link to="/" className="text-ctp-green hover:text-ctp-text">
              home
            </Link>
            <Link
              to="/blog"
              className="text-ctp-green hover:text-ctp-text"
            >
              all posts
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const PostComponent = post.Component;

  return (
    <div className="min-h-screen w-full bg-ctp-mantle text-ctp-text">
      <main className="mt-9 w-full px-1 pb-3">
        <header className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-wide">
            <Link to="/" className="text-ctp-green hover:text-ctp-text">
              home
            </Link>
            <Link
              to="/blog"
              className="text-ctp-green hover:text-ctp-text"
            >
              all posts
            </Link>
          </div>
          <span className="text-xs text-ctp-subtext1">{post.date}</span>
        </header>

        <article className="rounded-md border border-ctp-overlay0 bg-ctp-base p-6">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-ctp-surface2 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-ctp-text"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 prose prose-sm md:prose-base max-w-none font-mono prose-headings:text-ctp-text prose-p:text-ctp-subtext0 prose-li:text-ctp-subtext0 prose-strong:text-ctp-text prose-code:text-ctp-text prose-code:bg-ctp-surface0 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-a:text-ctp-green prose-a:underline prose-a:underline-offset-4">
            <PostComponent />
          </div>
        </article>
      </main>
    </div>
  );
}
