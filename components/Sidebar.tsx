import { Plus, PanelLeftClose, Search, MessageSquare, LayoutGrid, Library, FileText, Settings, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function Sidebar({ collapsed, setCollapsed, mobileDrawerOpen, setMobileDrawerOpen }: any) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  
  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/20 z-40 min-[861px]:hidden transition-opacity duration-200 ${mobileDrawerOpen ? "opacity-100 pointer-events-auto backdrop-blur-[2px]" : "opacity-0 pointer-events-none"}`} 
        onClick={() => setMobileDrawerOpen(false)} 
      />
      <aside className={`
        bg-surface border-r border-border flex flex-col overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1)]
        max-[860px]:fixed max-[860px]:top-0 max-[860px]:left-0 max-[860px]:bottom-0 max-[860px]:w-[280px] max-[860px]:z-50 max-[860px]:shadow-[20px_0_60px_rgba(0,0,0,0.15)]
        ${mobileDrawerOpen ? "max-[860px]:translate-x-0" : "max-[860px]:-translate-x-full"}
      `}>
        <div className={`p-4 pt-5 pb-3 flex ${collapsed ? 'flex-col-reverse justify-center items-center gap-2.5' : 'flex-col'}`}>
          {!collapsed && (
            <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
              <span className="brand-orb w-5 h-5 rounded-full shrink-0"></span>
              <span className="font-semibold text-[15px] tracking-[-0.01em]">ProjectDash</span>
            </div>
          )}
          
          <div className={`flex ${collapsed ? 'flex-col-reverse' : 'gap-2 mb-2.5'}`}>
            <button className={`flex items-center justify-center gap-1.5 p-2.5 rounded-btn bg-text-primary text-bg text-[13px] font-medium hover:scale-[0.98] active:scale-95 transition-all ${collapsed ? '' : 'flex-1'}`}>
              <Plus size={16} strokeWidth={1.6} />
              {!collapsed && <span>New chat</span>}
            </button>
            <button 
              onClick={() => setCollapsed(!collapsed)} 
              className={`flex items-center justify-center w-9 h-9 rounded-btn border border-border text-text-secondary hover:bg-accent-light hover:text-text-primary active:scale-95 transition-all duration-300 max-[860px]:hidden ${collapsed ? 'rotate-180' : ''}`}
            >
              <PanelLeftClose size={16} strokeWidth={1.4} />
            </button>
          </div>

          <div className={`flex items-center gap-2 px-3 py-2 rounded-input border border-border text-text-muted transition-colors focus-within:border-accent/40 focus-within:ring-1 focus-within:ring-accent/20 ${collapsed ? 'justify-center border-none bg-transparent' : ''}`}>
            <Search size={14} strokeWidth={1.4} />
            {!collapsed && <input type="text" placeholder="Search chats" className="flex-1 min-w-0 text-[13px] text-text-primary bg-transparent outline-none placeholder:text-text-muted" />}
          </div>
        </div>

        <nav className="flex flex-col gap-0.5 px-4 pb-4 border-b border-border">
          <a className={`group flex items-center gap-2.5 px-2 py-2 rounded-btn text-[13.5px] font-medium transition-colors cursor-pointer text-accent bg-accent-light ${collapsed ? 'justify-center' : ''}`}>
            <MessageSquare size={16} strokeWidth={1.3} className="group-hover:scale-110 transition-transform" />
            {!collapsed && <span>Chats</span>}
          </a>
          <a className={`group flex items-center gap-2.5 px-2 py-2 rounded-btn text-[13.5px] text-text-secondary hover:bg-accent-light hover:text-text-primary transition-colors cursor-pointer ${collapsed ? 'justify-center' : ''}`}>
            <LayoutGrid size={16} strokeWidth={1.3} className="group-hover:scale-110 transition-transform" />
            {!collapsed && <span>Explore Models</span>}
          </a>
          <a className={`group flex items-center gap-2.5 px-2 py-2 rounded-btn text-[13.5px] text-text-secondary hover:bg-accent-light hover:text-text-primary transition-colors cursor-pointer ${collapsed ? 'justify-center' : ''}`}>
            <Library size={16} strokeWidth={1.3} className="group-hover:scale-110 transition-transform" />
            {!collapsed && <span>Library</span>}
          </a>
          <a className={`group flex items-center gap-2.5 px-2 py-2 rounded-btn text-[13.5px] text-text-secondary hover:bg-accent-light hover:text-text-primary transition-colors cursor-pointer ${collapsed ? 'justify-center' : ''}`}>
            <FileText size={16} strokeWidth={1.3} className="group-hover:scale-110 transition-transform" />
            {!collapsed && <span>Files</span>}
          </a>
          <a className={`group flex items-center gap-2.5 px-2 py-2 rounded-btn text-[13.5px] text-text-secondary hover:bg-accent-light hover:text-text-primary transition-colors cursor-pointer ${collapsed ? 'justify-center' : ''}`}>
            <Settings size={16} strokeWidth={1.3} className="group-hover:scale-110 transition-transform" />
            {!collapsed && <span>Settings</span>}
          </a>
        </nav>

        <div className={`flex-1 overflow-y-auto px-4 py-3 ${collapsed ? 'hidden' : 'block'}`}>
          <div className="mb-4">
            <p className="text-[11px] uppercase tracking-[0.05em] text-text-muted mb-1.5 ml-1">Today</p>
            <a className="block px-2 py-1.5 rounded-btn text-[13px] text-text-primary bg-accent-light truncate transition-colors cursor-pointer mb-0.5">Chatbot architecture ideas</a>
            <a className="block px-2 py-1.5 rounded-btn text-[13px] text-text-secondary hover:bg-accent-light hover:text-text-primary truncate transition-colors cursor-pointer">Landing page copy draft</a>
          </div>
          <div className="mb-4">
            <p className="text-[11px] uppercase tracking-[0.05em] text-text-muted mb-1.5 ml-1">Yesterday</p>
            <a className="block px-2 py-1.5 rounded-btn text-[13px] text-text-secondary hover:bg-accent-light hover:text-text-primary truncate transition-colors cursor-pointer mb-0.5">Supabase schema questions</a>
          </div>
          <div className="mb-4">
            <p className="text-[11px] uppercase tracking-[0.05em] text-text-muted mb-1.5 ml-1">Last 7 Days</p>
            <a className="block px-2 py-1.5 rounded-btn text-[13px] text-text-secondary hover:bg-accent-light hover:text-text-primary truncate transition-colors cursor-pointer mb-0.5">Model routing logic</a>
            <a className="block px-2 py-1.5 rounded-btn text-[13px] text-text-secondary hover:bg-accent-light hover:text-text-primary truncate transition-colors cursor-pointer">Deployment checklist</a>
          </div>
        </div>

        <div className={`p-4 border-t border-border flex items-center justify-between ${collapsed ? 'justify-center flex-col gap-2' : ''}`}>
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-accent-light text-accent flex items-center justify-center text-xs font-semibold shrink-0">A</span>
            {!collapsed && (
              <div className="flex flex-col">
                <span className="text-[12.5px] font-medium">Aman</span>
                <span className="text-[11px] text-text-muted">Free plan</span>
              </div>
            )}
          </div>
          <button 
            className="w-7 h-7 flex items-center justify-center rounded-full text-text-secondary hover:bg-accent-light hover:text-text-primary active:scale-90 transition-all duration-300 shrink-0" 
            onClick={toggleTheme}
          >
            {mounted && (theme === "dark" ? (
              <Sun size={16} strokeWidth={1.3} className="animate-in spin-in-90 fade-in zoom-in" />
            ) : (
              <Moon size={16} strokeWidth={1.3} className="animate-in spin-in-90 fade-in zoom-in" />
            ))}
          </button>
        </div>
      </aside>
    </>
  );
}
