import SectionTitle from "@/components/Title";
import meInca from "../assets/me-draw.jpg";
import { Button } from "@/components/ui/button";

export default function Home({ onOpenAbout }: { onOpenAbout?: () => void }) {
  return (
    <section id="home" className="scroll-mt-24">
      <SectionTitle emoji="◝(ᵔᗜᵔ)◜">hola</SectionTitle>
      {/* Left: text */}
      <div className="content flex flex-col md:flex-row items-center md:items-start gap-4">
        <div className="">
          <img
            src={meInca}
            alt="Me and Inca"
            className="h-40 w-40 rounded-full object-cover ring-4 ring-ctp-mauve md:h-48 md:w-48"
          />
        </div>
        <div className="flex-1 ">
          <h2 className="mt-1 font-semibold text-3xl md:text-5xl">
            i am <span className="text-ctp-mauve">tomás</span>
          </h2>
          <h3 className="text-xl ">software engineer</h3>
          <p className="mt-4 text-ctp-subtext0">
            if it runs in a terminal, i’ll probably love it — from tmux sessions
            to backend servers. i build systems that work hard behind the
            scenes, and sometimes obsess over the pixels up front too.
          </p>
          <a href="/cv.pdf" download="Tomas_Glavina_CV.pdf">
            <Button className="bg-ctp-mauve text-lg my-4 text-slate-800 hover:text-ctp-text">
              Get my CV!
            </Button>
          </a>
          <Button
            type="button"
            onClick={() => {
              console.log("Home: Read more clicked");
              onOpenAbout?.();
              console.log(onOpenAbout);
            }}
            className="bg-ctp-mauve text-lg my-4 text-slate-800 hover:text-ctp-text lg:ml-4"
          >
            Read more about me
          </Button>
        </div>
      </div>
    </section>
  );
}
