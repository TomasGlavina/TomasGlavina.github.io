// src/App.tsx
import "./index.css";

import Skills from "./pages/Skills.tsx";
import Home from "./pages/Home";
import Projects, { ProjectsModal } from "./pages/Projects";
import About from "./pages/About";
import Contact, { ContactModal } from "./pages/Contact";
import { useState } from "react";
import Blog, { BlogModal } from "./pages/Blog.tsx";
import Interests from "./components/Interests.tsx";
import BlogIndex from "./pages/BlogIndex";
import BlogPost from "./pages/BlogPost";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<BlogIndex />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
    </Routes>
  );
}

function HomePage() {
  const [activeModal, setActiveModal] = useState<
    "about" | "projects" | "blog" | "contact" | null
  >(null);

  function closeModal() {
    setActiveModal(null);
  }

  return (
    <div className="min-h-screen w-full bg-ctp-mantle text-ctp-text">
      <main className="mx-auto py-32 max-w-[96rem] px-6 md:px-10 ">
        <div className="grid items-stretch gap-4 grid-cols-1 lg:grid-cols-12 lg:auto-rows-[5rem] lg:grid-flow-dense">
          <div className="col-span-1 lg:col-span-7 lg:row-span-3">
            <Home onOpenAbout={() => setActiveModal("about")} />
          </div>

          <div className="col-span-1 lg:col-span-5 lg:row-span-3">
            <Projects onOpen={() => setActiveModal("projects")} />
          </div>

          <div className="col-span-1 lg:col-span-2 lg:row-span-2">
            <Contact onOpen={() => setActiveModal("contact")} />
          </div>

          <div className="col-span-1 lg:col-span-6 lg:row-span-4">
            <Skills />
          </div>

          <div className="col-span-1 lg:col-span-4 lg:row-span-4">
            <Blog onOpen={() => setActiveModal("blog")} />
          </div>
          <div className="col-span-1 lg:col-span-2 lg:row-span-2">
            <Interests />
          </div>

          {activeModal && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-ctp-crust/80 p-4"
              onClick={(e) => {
                if (e.target === e.currentTarget) closeModal();
              }}
            >
              <div className="relative w-full max-w-4xl">
                {/* Window with persistent border that scrolls inside */}
                <div className="rounded-lg border border-ctp-overlay0 bg-ctp-mantle shadow-xl overflow-hidden">
                  {/* This is the scroll area; the border stays visible while content scrolls */}
                  <div className="max-h-[80vh] overflow-y-auto break-words">
                    {activeModal === "about" && (
                      <About onClose={closeModal} />
                    )}
                    {activeModal === "projects" && (
                      <ProjectsModal onClose={closeModal} />
                    )}
                    {activeModal === "blog" && (
                      <BlogModal onClose={closeModal} />
                    )}
                    {activeModal === "contact" && (
                      <ContactModal onClose={closeModal} />
                    )}
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
