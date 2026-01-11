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
  ["name", "tomas glavina"],
  ["role", "software engineer"],
  ["location", "tampere, finland"],
  ["langs", "go, java, typescript, bash"],
  ["version", "29.1.2"],
  ["shell", "zsh"],
];

export default function Neofetch() {
  return (
    <section id="neofetch" className="tile scroll-mt-24">
      <SectionTitle emoji="">neofetch</SectionTitle>
      <div className="content grid grid-cols-1 gap-3 md:grid-cols-[auto,1fr] font-mono text-xs">
        <pre className="text-ctp-green leading-tight">{LOGO.join("\n")}</pre>
        <div className="space-y-1">
          {INFO.map(([label, value]) => (
            <div key={label} className="flex gap-2">
              <span className="text-ctp-green">{label}</span>
              <span className="text-ctp-subtext0">: {value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
