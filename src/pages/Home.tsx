import SectionTitle from "@/components/Title";
import meInca from "../assets/me-draw.jpg";

export default function AboutMeTile({ onOpenAbout }: { onOpenAbout?: () => void }) {
  const cvHref = `${import.meta.env.BASE_URL}cv.pdf?v=20260220`;

  return (
    <section id="about-me" className="tile scroll-mt-24">
      <SectionTitle emoji="">cat about me</SectionTitle>
      {/* Left: text */}
      <div className="content flex flex-col md:flex-row items-center md:items-start gap-4">
        <div className="">
          <img
            src={meInca}
            alt="Me"
            className="h-32 w-32 rounded-full object-cover object-[50%_25%] ring-2 ring-ctp-green md:h-40 md:w-40"
          />
        </div>
        <div className="flex-1 ">
          <h2 className="mt-1 font-semibold text-xl md:text-2xl">
            i am <span className="text-ctp-green">tomás</span>
          </h2>
          <h3 className="text-sm text-ctp-subtext0">software engineer</h3>
          <p className="mt-3 text-sm text-ctp-subtext0">
            i am tomás, a tampere-based software engineer currently working at
            gaddr as a fullstack developer. linux and cli workflows
            are a big part of how i think and work, from shell tooling and
            automation to day-to-day development in tmux and neovim. i build
            software mostly with typescript, react, nest.js, node.js, spring boot, and
            postgresql, with a strong focus on architecture, maintainability,
            and teamwork. outside of work, you will see me singing still chasing
            that rockstar energy, though solving bugs is just as satisfying as hitting 
            those high notes.
          </p>
          <div className="flex flex-wrap gap-4 pt-4 text-sm">
            <a
              href={cvHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ctp-green hover:text-ctp-text hover:underline underline-offset-4"
            >
              get my cv!
            </a>
            <button
              type="button"
              onClick={() => {
                onOpenAbout?.();
              }}
              className="text-ctp-green hover:text-ctp-text hover:underline underline-offset-4"
            >
              read more about me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
