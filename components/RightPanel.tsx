import { X } from "lucide-react";

export default function RightPanel({ open, setOpen, setInput }: any) {
  if (!open) return null;

  return (
    <aside className={`
      bg-surface border-l border-border flex flex-col overflow-hidden transition-all duration-300
      max-[1024px]:fixed max-[1024px]:top-0 max-[1024px]:right-0 max-[1024px]:bottom-0 max-[1024px]:w-[320px] max-[768px]:w-full max-[1024px]:z-50 max-[1024px]:shadow-[-20px_0_60px_rgba(0,0,0,0.15)]
      ${open ? "max-[1024px]:translate-x-0" : "max-[1024px]:translate-x-full"}
    `}>
      <div className="flex justify-between items-center px-4 py-4 border-b border-border text-[13.5px] font-medium">
        <span>Details</span>
        <button onClick={() => setOpen(false)} className="text-text-muted hover:text-text-primary transition-colors">
          <X size={16} strokeWidth={1.6} />
        </button>
      </div>
      <div className="flex gap-1 px-3.5 py-2.5 border-b border-border overflow-x-auto no-scrollbar">
        <button className="px-3 py-1.5 rounded-btn text-[12.5px] bg-accent-light text-accent shrink-0">Sources</button>
        <button className="px-3 py-1.5 rounded-btn text-[12.5px] text-text-secondary hover:bg-bg shrink-0">Files</button>
        <button className="px-3 py-1.5 rounded-btn text-[12.5px] text-text-secondary hover:bg-bg shrink-0">Artifacts</button>
      </div>
      <div className="p-4 flex flex-col gap-2">
        <p className="text-[11px] uppercase tracking-[0.05em] text-text-muted mb-1">Ask next</p>
        <button onClick={() => setInput("What indexes should I add to the messages table?")} className="text-left p-3 rounded-input border border-border text-[13px] text-text-secondary leading-[1.4] transition-colors hover:border-accent hover:text-text-primary">
          What indexes should I add to the messages table?
        </button>
        <button onClick={() => setInput("How do I handle streaming errors gracefully?")} className="text-left p-3 rounded-input border border-border text-[13px] text-text-secondary leading-[1.4] transition-colors hover:border-accent hover:text-text-primary">
          How do I handle streaming errors gracefully?
        </button>
      </div>
    </aside>
  );
}
