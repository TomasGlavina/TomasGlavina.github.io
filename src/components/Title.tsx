export default function SectionTitle({
  emoji,
  children,
}: {
  emoji: string;
  children: React.ReactNode;
}) {
  return (
    <h2 className="mb-4 inline-flex bg-ctp-mauve w-full shadow-md text-ctp-crust items-center gap-2 text-2xl md:text-3xl font-semibold">
      <span className="text-ctp-surface2">{emoji}</span>
      <span className="underline decoration-ctp-mauve/50 underline-offset-4">
        {children}
      </span>
    </h2>
  );
}

export function SectionTitleClose({
  emoji,
  onOpenAbout,
  children,
}: {
  emoji: string;
  onOpenAbout: () => void;
  children: React.ReactNode;
}) {
  return (
    <h2 className="mb-4 inline-flex justify-between bg-ctp-mauve w-full shadow-md text-ctp-crust items-center gap-2 text-2xl md:text-3xl font-semibold">
      <div>
        <span className="text-ctp-surface2">{emoji}</span>
        <span className="underline decoration-ctp-mauve/50 underline-offset-4">
          {children}
        </span>
      </div>
      <div>
        {" "}
        <button
          onClick={onOpenAbout}
          aria-label="Close"
          className=" font-bold hover:text-ctp-red"
        >
          ✕
        </button>
      </div>
    </h2>
  );
}
