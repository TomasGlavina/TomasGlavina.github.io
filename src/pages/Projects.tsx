import SectionTitle, { SectionTitleClose } from "@/components/Title.tsx";

const projects = [
  {
    name: "sorting-visualizer",
    description: "algorithms in the browser.",
    size: "4.0k",
    updated: "sep 26",
  },
  {
    name: "cli-dotfiles",
    description: "linux + tmux + nvim workflow.",
    size: "8.0k",
    updated: "aug 12",
  },
  // …add more
];

export default function ProjectsList({ onOpen }: { onOpen?: () => void }) {
  const preview = projects.slice(0, 3);
  return (
    <section id="projects" className="tile scroll-mt-24">
      <SectionTitle emoji="" onOpen={onOpen}>
        ll projects
      </SectionTitle>
      <div className="content">
        <ul className="space-y-2 text-xs font-mono">
          {preview.map((project) => (
            <li
              key={project.name}
              className="rounded-md border border-ctp-overlay0 bg-ctp-surface0 px-3 py-2"
            >
              <div className="grid grid-cols-[auto,auto,auto,auto,auto,1fr] gap-2">
                <span className="text-ctp-subtext1">drwxr-xr-x</span>
                <span className="text-ctp-subtext0">tomas</span>
                <span className="text-ctp-subtext0">dev</span>
                <span className="text-ctp-subtext1">{project.size}</span>
                <span className="text-ctp-subtext1">{project.updated}</span>
                <span className="text-ctp-blue">{project.name}</span>
              </div>
              <p className="mt-1 text-[11px] text-ctp-subtext0">
                // {project.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ProjectsModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="p-4">
      <SectionTitleClose emoji="📂" onClose={onClose}>
        ll projects
      </SectionTitleClose>
      <div className="content">
        <ul className="space-y-3 text-xs font-mono">
          {projects.map((project) => (
            <li
              key={project.name}
              className="rounded-md border border-ctp-overlay0 bg-ctp-surface0 px-3 py-2"
            >
              <div className="grid grid-cols-[auto,auto,auto,auto,auto,1fr] gap-2">
                <span className="text-ctp-subtext1">drwxr-xr-x</span>
                <span className="text-ctp-subtext0">tomas</span>
                <span className="text-ctp-subtext0">dev</span>
                <span className="text-ctp-subtext1">{project.size}</span>
                <span className="text-ctp-subtext1">{project.updated}</span>
                <span className="text-ctp-blue">{project.name}</span>
              </div>
              <p className="mt-1 text-[11px] text-ctp-subtext0">
                // {project.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
