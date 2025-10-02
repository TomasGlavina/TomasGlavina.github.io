// src/App.tsx
import "./index.css";

import Navbar from "./components/Navbar";
import Skills from "./pages/Skills.tsx";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SectionTitle from "./components/Title.tsx";
import { useState } from "react";
import Blog from "./pages/Blog.tsx";
import Interests from "./components/Interests.tsx";

export default function App() {
  const [aboutOpen, setAboutOpen] = useState(false);
  return (
    <div className="min-h-screen w-full bg-ctp-base text-ctp-text">
      <Navbar />
      <main className="pt-20 mx-auto max-w-[96rem] px-6 md:px-10 py-2 md:py-16">
        <div className="grid items-start gap-4 grid-cols-1 lg:grid-cols-12 auto-rows-auto">
          <div id="home" className="col-span-1 lg:col-span-8 lg:col-start-1">
            <Home onOpenAbout={() => setAboutOpen(true)} />
          </div>

          <div
            id="projects"
            className="col-span-1 lg:col-span-4 lg:col-start-9 "
          >
            <Projects />
          </div>

          <div id="contact" className="col-span-1 lg:col-span-3 lg:col-start-1">
            <Contact />
            <Interests />
          </div>
          <div id="skills" className="col-span-1 lg:col-span-6 ">
            <Skills />
          </div>

          <div className="col-span-1 lg:col-span-3">
            <Blog />
          </div>

          {aboutOpen && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
              onClick={(e) => {
                if (e.target === e.currentTarget) setAboutOpen(false);
              }}
            >
              <div className="relative w-full max-w-4xl">
                {/* Window with persistent border that scrolls inside */}
                <div className="rounded-xl bg-ctp-mantle shadow-xl overflow-hidden">
                  {/* This is the scroll area; the border stays visible while content scrolls */}
                  <div
                    className="
            h-full overflow-y-auto border border-ctp-mauve rounded-xl
            [&_section]:m-0
            [&_section]:p-0
            [&_section]:border-0
                    [&_section]:shadow-none
            [&_.min-h-screen]:min-h-5
            [&_.overflow-hidden]:overflow-visible
            break-words
          "
                  >
                    {/* Pass close handler through if your About header uses it */}
                    <About onOpenAbout={() => setAboutOpen(false)} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
