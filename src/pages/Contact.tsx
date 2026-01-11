import SectionTitle, { SectionTitleClose } from "@/components/Title";

export default function Contact({ onOpen }: { onOpen?: () => void }) {
  return (
    <section id="contact" className="tile scroll-mt-24">
      <SectionTitle emoji="" onOpen={onOpen}>
        cat contact.json
      </SectionTitle>
      <div className="content">
        <div className="font-mono text-xs text-ctp-subtext0">
          <div>{"{"}</div>
          <div className="pl-2 py-2">
            <span className="text-ctp-green">"email"</span>:{" "}
            <a
              href="mailto:tomaslglavina@gmail.com"
              className="text-ctp-text hover:text-ctp-green"
            >
              "tomaslglavina@gmail.com"
            </a>
            ,
          </div>
          <div className="pl-2 pb-2">
            <span className="text-ctp-green">"github"</span>:{" "}
            <a
              href="https://github.com/tomasglavina"
              className="text-ctp-text hover:text-ctp-green"
            >
              "github.com/tomasglavina"
            </a>
            ,
          </div>
          <div className="pl-2 pb-2">
            <span className="text-ctp-green">"linkedin"</span>:{" "}
            <a
              href="https://www.linkedin.com/in/tomasglavina/"
              className="text-ctp-text hover:text-ctp-green"
            >
              "linkedin.com/in/tomasglavina"
            </a>
            ,
          </div>
          <div className="pl-2 pb-2">
            <span className="text-ctp-green">"city"</span>: "tampere, finland",
          </div>
          <div>{"}"}</div>
        </div>
      </div>
    </section>
  );
}

export function ContactModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="p-4">
      <SectionTitleClose emoji="✉️" onClose={onClose}>
        cat contact.json
      </SectionTitleClose>
      <div className="content">
        <form
          className="space-y-4"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-xs tracking-wide">
              name
            </label>
            <input
              id="name"
              type="text"
              className="rounded-md border border-ctp-overlay0 bg-ctp-surface0 px-3 py-2 text-ctp-text placeholder:text-ctp-overlay1 focus:outline-none focus:ring-2 focus:ring-ctp-green/50"
              placeholder="your name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-xs tracking-wide">
              email
            </label>
            <input
              id="email"
              type="email"
              className="rounded-md border border-ctp-overlay0 bg-ctp-surface0 px-3 py-2 text-ctp-text placeholder:text-ctp-overlay1 focus:outline-none focus:ring-2 focus:ring-ctp-green/50"
              placeholder="you@example.com"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-xs tracking-wide">
              message
            </label>
            <textarea
              id="message"
              rows={5}
              className="rounded-md border border-ctp-overlay0 bg-ctp-surface0 px-3 py-2 text-ctp-text placeholder:text-ctp-overlay1 focus:outline-none focus:ring-2 focus:ring-ctp-green/50"
              placeholder="say hi..."
            />
          </div>
          <button
            type="submit"
            className="rounded-md bg-ctp-green px-4 py-2 text-sm font-semibold tracking-wide text-ctp-crust hover:bg-ctp-green/90"
          >
            send
          </button>
        </form>
      </div>
    </div>
  );
}
