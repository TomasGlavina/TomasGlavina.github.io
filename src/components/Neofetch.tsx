import SectionTitle from "@/components/Title";

const LOGO = [
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
  "~                           ~",
  "~   _________  _______      ~",
  "~  /________/\\/______\\/\\     ~",
  "~  \\__.::.__\\/\\::::__\\/__   ~",
  "~     \\::\\ \\   \\:\\ /____/\\  ~",
  "~      \\::\\ \\   \\:\\\\_  _\\/  ~",
  "~       \\::\\ \\   \\:\\_\\ \\ \\  ~",
  "~        \\__\\/    \\_____\\/  ~",
  "~                           ~",
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
];

const INFO = [
  ["Host", "Tomas Glavina"],
  ["Role", "Software Engineer"],
  ["Location", "Tampere, Finland"],
  ["Langs", "Java, Typescript, Python, Go, Bash"],
  ["Uptime", "30 years"],
  ["Version", "30.1.2"],
  ["Shell", "Bash 5.3.0"],
];

const GRUVBOX_PALETTE = [
  [
    "#282828",
    "#cc241d",
    "#98971a",
    "#d79921",
    "#458588",
    "#b16286",
    "#689d6a",
    "#a89984",
  ],
  [
    "#928374",
    "#fb4934",
    "#b8bb26",
    "#fabd2f",
    "#83a598",
    "#d3869b",
    "#8ec07c",
    "#ebdbb2",
  ],
];

export default function Neofetch() {
  return (
    <section id="neofetch" className="tile scroll-mt-24">
      <SectionTitle emoji="">neofetch</SectionTitle>
      <div className="content grid grid-cols-1 gap-3 md:grid-cols-[auto,1fr] font-mono text-xs">
        <pre className="text-ctp-green leading-tight">{LOGO.join("\n")}</pre>
        <div className="space-y-1">
        <div className="flex flex-col">
          <span className="text-ctp-green">tomasglavina@linux</span>
          <span className="text-ctp-subtext0">--------------------------</span>
        </div>
          {INFO.map(([label, value]) => (
            <div key={label} className="flex gap-2">
              <span className="text-ctp-green">{label}</span>
              <span className="text-ctp-subtext0">: {value}</span>
            </div>
          ))}
          <div
            className="pt-2"
            aria-label="Gruvbox terminal color palette"
            title="Gruvbox color palette"
          >
            {GRUVBOX_PALETTE.map((row, rowIndex) => (
              <div key={rowIndex} className="flex">
                {row.map((hex) => (
                  <span
                    key={hex}
                    className="h-3 w-3 md:h-4 md:w-4"
                    style={{ backgroundColor: hex }}
                    title={hex}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
