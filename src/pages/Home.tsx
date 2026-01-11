import SectionTitle from "@/components/Title";
import meInca from "../assets/me-draw.jpg";

export default function Home({ onOpenAbout }: { onOpenAbout?: () => void }) {
  return (
    <section id="home" className="tile scroll-mt-24">
      <SectionTitle emoji="">cat hola</SectionTitle>
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
            if it runs in a terminal, i’ll probably love it — from tmux sessions
            to backend servers. i build systems that work hard behind the
            scenes, and sometimes obsess over the pixels up front too.
          </p>
          <div className="flex flex-wrap gap-4 pt-4 text-sm">
            <a
              href="/cv.pdf"
              download="Tomas_Glavina_CV.pdf"
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
