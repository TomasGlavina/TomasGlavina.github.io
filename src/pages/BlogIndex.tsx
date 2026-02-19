import { useState } from "react";
import { Link } from "react-router-dom";
import { posts } from "@/content/blog/posts";

export default function BlogIndex() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const tags = Array.from(
    posts.reduce((set, post) => {
      post.tags.forEach((tag) => set.add(tag));
      return set;
    }, new Set<string>())
  ).sort((a, b) => a.localeCompare(b));

  const filteredPosts = activeTag
    ? posts.filter((post) => post.tags.includes(activeTag))
    : posts;

  return (
    <div className="min-h-screen w-full bg-ctp-mantle text-ctp-text">
      <main className="mt-9 w-full px-1 pb-3">
        <header className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold">ll blog</h1>
            <p className="mt-2 text-sm text-ctp-subtext0">
              notes, experiments, and tiny writeups.
            </p>
          </div>
          <div className="flex items-center gap-3 text-xs font-semibold tracking-wide">
            <Link
              to="/"
              className="text-ctp-green hover:text-ctp-text"
            >
              home
            </Link>
          </div>
        </header>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveTag(null)}
            className={`rounded-full border px-3 py-1 text-xs font-semibold tracking-wide transition-colors ${
              activeTag === null
                ? "border-ctp-green bg-ctp-green text-ctp-crust"
                : "border-ctp-overlay0 text-ctp-subtext0 hover:border-ctp-green hover:text-ctp-text"
            }`}
          >
            all
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={`rounded-full border px-3 py-1 text-xs font-semibold tracking-wide transition-colors ${
                activeTag === tag
                  ? "border-ctp-green bg-ctp-green text-ctp-crust"
                  : "border-ctp-overlay0 text-ctp-subtext0 hover:border-ctp-green hover:text-ctp-text"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <ul className="mt-6 space-y-4">
          {filteredPosts.map((post) => (
            <li
              key={post.slug}
              className="rounded-md border border-ctp-overlay0 bg-ctp-base p-4"
            >
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h2 className="text-lg font-semibold text-ctp-text">
                    {post.title}
                  </h2>
                  <span className="text-xs text-ctp-subtext1">
                    {post.date}
                  </span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-ctp-surface2 px-2.5 py-1 text-[0.6875rem] font-semibold tracking-wide text-ctp-text"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
