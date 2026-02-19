// src/App.tsx
import "./index.css";

import Skills from "./pages/Skills.tsx";
import AboutMeTile from "./pages/Home";
import Projects, { ProjectsModal } from "./pages/Projects";
import About from "./pages/About";
import Contact, { ContactModal } from "./pages/Contact";
import { useState } from "react";
import Blog, { BlogModal } from "./pages/Blog.tsx";
import Interests from "./components/Interests.tsx";
import BlogIndex from "./pages/BlogIndex";
import BlogPost from "./pages/BlogPost";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Neofetch from "./components/Neofetch";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </>
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
    <div className="h-dvh w-full p-[8px] pt-[calc(2.25rem+8px)] text-ctp-text">
      <main className="h-full w-full">
        <div className="grid h-full items-stretch gap-[8px] grid-cols-1 lg:grid-cols-9 lg:grid-rows-[repeat(11,minmax(0,1fr))] lg:grid-flow-dense">
          <div className="col-span-1 lg:col-span-4 lg:row-span-3">
            <Neofetch />
            
          </div>

          <div className="col-span-1 lg:col-span-5 lg:row-span-3">
            <AboutMeTile onOpenAbout={() => setActiveModal("about")} />
          </div>

          <div className="col-span-1 lg:col-span-4 lg:row-span-4">
            <Projects onOpen={() => setActiveModal("projects")} />
          </div>

          <div className="col-span-1 lg:col-span-5 lg:row-span-4">
            <Skills />
          </div>

          <div className="col-span-1 lg:col-span-4 lg:row-span-4">
            <Blog onOpen={() => setActiveModal("blog")} />
          </div>
          
          <div className="col-span-1 lg:col-span-3 lg:row-span-4">
            <Interests />
          </div>

          <div className="col-span-1 lg:col-span-2 lg:row-span-4">
            <Contact onOpen={() => setActiveModal("contact")} />
          </div>
          
          {activeModal && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-ctp-crust/80 p-4 animate-in fade-in duration-150"
              onClick={(e) => {
                if (e.target === e.currentTarget) closeModal();
              }}
            >
              <div className="relative w-full max-w-4xl animate-in fade-in zoom-in-95 slide-in-from-top-2 duration-200">
                {/* Window with persistent border that scrolls inside */}
                <div className="rounded-[4px] border border-ctp-overlay0 bg-ctp-mantle overflow-hidden">
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
