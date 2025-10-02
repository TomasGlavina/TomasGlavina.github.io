const link = "px-4 py-2 rounded-md text-lg font-medium transition-colors";
const idle = "text-ctp-subtext0 hover:bg-ctp-surface0 hover:text-ctp-text";

function smoothScroll(e: React.MouseEvent<HTMLAnchorElement>) {
  const href = (e.currentTarget.getAttribute("href") || "").trim();
  if (href.startsWith("#")) {
    e.preventDefault();
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", href);
  }
}

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 h-16 bg-ctp-mantle/80 backdrop-blur ">
      <div className="mx-auto max-w-[90rem] px-6">
        <div className="h-16 flex items-center justify-between">
          <a
            href="#home"
            onClick={smoothScroll}
            className="text-xl font-semibold text-ctp-text"
          >
            Tomas Glavina
          </a>

          <div className="flex">
            <a
              href="#about"
              onClick={smoothScroll}
              className={`${link} ${idle}`}
            >
              About
            </a>
            <a
              href="#projects"
              onClick={smoothScroll}
              className={`${link} ${idle}`}
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={smoothScroll}
              className={`${link} ${idle}`}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
