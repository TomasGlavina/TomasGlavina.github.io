import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faJava,
  faLinux,
  faGitAlt,
  faReact,
  faJsSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faStar } from "@fortawesome/free-solid-svg-icons";

/**
 * Sidebar skills list
 * - core stack always visible
 * - other categories show their info inline when clicked
 * - all text in normal case (no caps)
 */

type Section = {
  key: string;
  title: string;
  body: string;
  icon?: IconProp;
};

const CORE_STACK = ["java", "linux", "go", "postgresql", "mysql"];

const SECTIONS: Section[] = [
  {
    key: "linux",
    title: "linux & systems",
    icon: faLinux,
    body: "bash, cli tools, package management, ssh, file systems",
  },
  {
    key: "devops",
    title: "devops & cloud",
    icon: faGitAlt,
    body: "git, docker, aws, jenkins, ci/cd",
  },
  {
    key: "backend",
    title: "backend",
    icon: faJava,
    body: "java, spring, go, node.js, express",
  },
  {
    key: "data-ml",
    title: "dbs & ai/ml",
    icon: faDatabase,
    body: "sql, postgresql, mysql, sqlite, mongodb, tensorflow, python",
  },
  {
    key: "web",
    title: "web dev",
    icon: faReact,
    body: "react, typescript, next.js, tailwind",
  },
  {
    key: "mobile",
    title: "mobile app",
    icon: faJsSquare,
    body: "flutter, android, react native",
  },
];

export default function SkillsGrid() {
  const [openKey, setOpenKey] = useState<string | null>(null);

  function toggle(key: string) {
    setOpenKey((prev) => (prev === key ? null : key));
  }

  return (
    <div className="w-full ">
      {/* core stack */}
      <div className="rounded-sm border border-ctp-surface0 backdrop-blur">
        <div className="flex items-center px-3 py-2.5">
          <span className="flex items-center">
            <FontAwesomeIcon
              icon={faStar}
              className="shrink-0 opacity-80"
              size="lg"
            />
            &nbsp;
            <h2 className="text-sm text-ctp-green font-semibold tracking-tight md:text-base">
              core stack {">>"}
            </h2>
          </span>
          <p className="ml-2 text-xs text-ctp-text md:text-sm">
            {CORE_STACK.join(", ")}
          </p>
        </div>
      </div>

      {/* other sections */}
      <nav className="rounded-sm border border-ctp-surface0 backdrop-blur divide-y divide-ctp-overlay0/70">
        {SECTIONS.map((s) => {
          const open = openKey === s.key;
          return (
            <div key={s.key}>
              <button
                id={`btn-${s.key}`}
                aria-expanded={open}
                onClick={() => toggle(s.key)}
                className="group w-full flex items-center px-3 py-2.5 text-left text-sm hover:bg-ctp-green hover:text-ctp-crust focus:outline-none focus-visible:ring-2 focus-visible:ring-ctp-green/50"
              >
                <span className="font-medium">
                  {s.icon && (
                    <FontAwesomeIcon
                      icon={s.icon}
                      className="shrink-0 opacity-80"
                      size="lg"
                    />
                  )}{" "}
                  {s.title}
                  {" >> "}
                </span>
                {open && (
                  <span className="ml-2 flex items-center gap-2 text-xs md:text-sm">
                    {s.body}
                  </span>
                )}
              </button>
            </div>
          );
        })}
      </nav>
    </div>
  );
}
