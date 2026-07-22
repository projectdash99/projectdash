import { Menu, ChevronDown, Share, Download, PanelRightOpen } from "lucide-react";
import { useEffect } from "react";

export default function Header({ activeModel, setActiveModel, modelDropdownOpen, setModelDropdownOpen, setMobileDrawerOpen, setRightPanelOpen }: any) {
  const models = ["Gemini", "DeepSeek", "Claude", "GPT", "Grok"];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && modelDropdownOpen) {
        setModelDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modelDropdownOpen, setModelDropdownOpen]);

  return (
    <header className="flex items-center gap-3 px-6 py-3.5 relative">
      <button aria-label="Open menu" className="min-[769px]:hidden text-text-secondary w-[44px] h-[44px] flex items-center justify-center -ml-2" onClick={() => setMobileDrawerOpen(true)}>
        <Menu size={20} strokeWidth={1.4} />
      </button>

      <div className="relative">
        <button 
          onClick={(e) => { e.stopPropagation(); setModelDropdownOpen(!modelDropdownOpen); }}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-border text-[13px] font-medium text-text-primary bg-surface hover:bg-accent-light transition-colors"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
          <span>{activeModel}</span>
          <ChevronDown size={14} strokeWidth={1.6} />
        </button>

        {modelDropdownOpen && (
          <>
            <div 
              className="fixed inset-0 bg-black/20 z-10 min-[769px]:hidden" 
              onClick={() => setModelDropdownOpen(false)} 
            />
            <div className="absolute top-full mt-2 left-0 w-40 bg-surface border border-border rounded-btn p-1.5 flex flex-col gap-0.5 shadow-[0_12px_32px_rgba(0,0,0,0.08)] z-20 max-[768px]:fixed max-[768px]:bottom-0 max-[768px]:top-auto max-[768px]:left-0 max-[768px]:w-full max-[768px]:rounded-t-[20px] max-[768px]:rounded-b-none max-[768px]:p-5 max-[768px]:shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
            {models.map(m => (
              <button 
                key={m} 
                className="px-3 py-2 rounded-[10px] text-[13px] text-left text-text-secondary hover:bg-accent-light hover:text-text-primary max-[768px]:text-[15px] max-[768px]:py-3.5"
                onClick={() => { setActiveModel(m); setModelDropdownOpen(false); }}
              >
                {m}
              </button>
            ))}
          </div>
          </>
        )}
      </div>

      <div className="ml-auto flex items-center gap-1">
        <button aria-label="Share" className="w-8 h-8 max-[768px]:w-[44px] max-[768px]:h-[44px] rounded-full flex items-center justify-center text-text-secondary hover:bg-accent-light transition-colors">
          <Share size={16} strokeWidth={1.3} />
        </button>
        <button aria-label="Download" className="w-8 h-8 max-[768px]:w-[44px] max-[768px]:h-[44px] rounded-full flex items-center justify-center text-text-secondary hover:bg-accent-light transition-colors">
          <Download size={16} strokeWidth={1.3} />
        </button>
        <button aria-label="Toggle details panel" className="w-8 h-8 max-[768px]:w-[44px] max-[768px]:h-[44px] rounded-full flex items-center justify-center text-text-secondary hover:bg-accent-light transition-colors" onClick={() => setRightPanelOpen((prev: boolean) => !prev)}>
          <PanelRightOpen size={16} strokeWidth={1.4} />
        </button>
      </div>
    </header>
  );
}
