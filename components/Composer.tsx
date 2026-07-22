import { Paperclip, Search, Sparkles, Mic, ArrowUp, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Composer({ input, handleInputChange, handleSubmit, activeModel, setModelDropdownOpen, isLoading }: any) {
  const [searchActive, setSearchActive] = useState(false);
  const [reasonActive, setReasonActive] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  }, [input]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (input.trim() && !isLoading) {
        const fakeEvent = { preventDefault: () => {} } as any;
        handleSubmit(fakeEvent);
      }
    }
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 flex justify-center px-6 py-5 bg-[linear-gradient(to_top,var(--bg)_40%,transparent)] pointer-events-none max-[860px]:px-4 max-[860px]:py-3 max-[860px]:pb-[calc(12px+env(safe-area-inset-bottom,0px))]">
      <div className="pointer-events-auto w-full max-w-[760px] flex items-center gap-2 px-3 py-2.5 rounded-composer bg-surface/85 border border-border backdrop-blur-md shadow-[0_12px_40px_rgba(0,0,0,0.06)] max-[860px]:flex-wrap max-[860px]:rounded-[20px]">
        
        <div className="flex items-center gap-2 max-[860px]:w-full max-[860px]:overflow-x-auto max-[860px]:pb-1 no-scrollbar shrink-0">
          <button className="w-8 h-8 flex items-center justify-center rounded-full text-text-secondary shrink-0 transition-colors hover:bg-accent-light">
            <Paperclip size={18} strokeWidth={1.2} />
          </button>
          
          <button 
            onClick={(e) => { e.stopPropagation(); setModelDropdownOpen((prev: any) => !prev); }}
            className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-border text-[12.5px] text-text-primary whitespace-nowrap transition-colors shrink-0 hover:bg-accent-light"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> {activeModel} <ChevronDown size={12} strokeWidth={1.6} />
          </button>

          <button 
            onClick={() => setSearchActive(!searchActive)}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-full border text-[12.5px] whitespace-nowrap transition-colors shrink-0 ${searchActive ? 'border-accent text-accent bg-accent-light' : 'border-border text-text-secondary hover:border-accent hover:text-accent hover:bg-accent-light'}`}
          >
            <Search size={12} strokeWidth={1.6} /> Search
          </button>

          <button 
            onClick={() => setReasonActive(!reasonActive)}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-full border text-[12.5px] whitespace-nowrap transition-colors shrink-0 ${reasonActive ? 'border-accent text-accent bg-accent-light' : 'border-border text-text-secondary hover:border-accent hover:text-accent hover:bg-accent-light'}`}
          >
            <Sparkles size={12} strokeWidth={1.6} /> Deeper research
          </button>
        </div>

        <textarea
          ref={textareaRef}
          value={input}
          onChange={handleInputChange}
          onKeyDown={onKeyDown}
          placeholder="Message ProjectDash…"
          rows={1}
          className="flex-1 min-w-[60px] text-[14.5px] text-text-primary px-1 py-1.5 resize-none bg-transparent max-h-[120px] overflow-y-auto border-none outline-none leading-[1.4] max-[860px]:order-[-1] max-[860px]:w-full max-[860px]:flex-none max-[860px]:mb-2 placeholder:text-text-muted"
        />

        <div className="flex items-center gap-1.5 ml-auto shrink-0">
          <button className="w-8 h-8 flex items-center justify-center rounded-full text-text-secondary shrink-0 transition-colors hover:bg-accent-light">
            <Mic size={18} strokeWidth={1.2} />
          </button>

          <button 
            onClick={handleSubmit}
            disabled={!input.trim() || isLoading}
            className="w-[34px] h-[34px] rounded-full bg-accent flex items-center justify-center shrink-0 transition-opacity hover:opacity-85 disabled:opacity-50"
          >
            <ArrowUp size={16} strokeWidth={2} color="white" />
          </button>
        </div>

      </div>
    </div>
  );
}
