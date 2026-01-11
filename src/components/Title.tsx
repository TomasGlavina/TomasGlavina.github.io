export default function SectionTitle({
  emoji,
  children,
  onOpen,
  actionLabel = "open",
}: {
  emoji: string;
  children: React.ReactNode;
  onOpen?: () => void;
  actionLabel?: string;
}) {
  return (
    <h2
      className={`mb-1 flex w-full items-center justify-between gap-2 border-b border-ctp-overlay0 px-2 py-1 text-xs font-semibold tracking-wide text-ctp-text md:text-sm${
        onOpen ? " cursor-pointer" : ""
      }`}
      onClick={onOpen}
      role={onOpen ? "button" : undefined}
      tabIndex={onOpen ? 0 : undefined}
      onKeyDown={(event) => {
        if (!onOpen) return;
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen();
        }
      }}
    >
      <span className="flex items-center gap-2">
        <span className="text-ctp-green">›</span>
        {emoji ? <span className="text-ctp-overlay2">{emoji}</span> : null}
        <span>{children}</span>
      </span>
      {onOpen && (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onOpen();
          }}
          className="text-[11px] font-semibold tracking-wide text-ctp-green hover:text-ctp-text"
        >
          {actionLabel}
        </button>
      )}
    </h2>
  );
}

export function SectionTitleClose({
  emoji,
  onClose,
  children,
}: {
  emoji: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <h2 className="mb-1 flex w-full items-center justify-between gap-2 border-b border-ctp-overlay0 px-2 py-1 text-xs font-semibold tracking-wide text-ctp-text md:text-sm">
      <span className="flex items-center gap-2">
        <span className="text-ctp-green">›</span>
        {emoji ? <span className="text-ctp-overlay2">{emoji}</span> : null}
        <span>{children}</span>
      </span>
      <button
        onClick={onClose}
        aria-label="Close"
        className="text-[11px] font-bold tracking-wide text-ctp-green hover:text-ctp-red"
      >
        close
      </button>
    </h2>
  );
}
