"use client";
import { useState, useRef, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import EmptyState from "@/components/EmptyState";
import ChatView from "@/components/ChatView";
import Composer from "@/components/Composer";
import RightPanel from "@/components/RightPanel";
import { useChat } from "ai/react";

export default function Home() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [rightPanelOpen, setRightPanelOpen] = useState(true);
  const [modelDropdownOpen, setModelDropdownOpen] = useState(false);
  const [activeModel, setActiveModel] = useState("Gemini");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024 && window.innerWidth > 768) {
        setSidebarCollapsed(true);
        setRightPanelOpen(false);
      } else if (window.innerWidth <= 768) {
        setRightPanelOpen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { messages, input, handleInputChange, handleSubmit, setInput, isLoading, append } = useChat({
    api: "/api/chat",
  });

  const onQuickAction = (text: string) => {
    append({ role: "user", content: text });
  };

  return (
    <div className={`h-screen overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] grid max-[768px]:grid-cols-1 max-[1024px]:min-[769px]:grid-cols-[72px_1fr] ${
      sidebarCollapsed 
        ? (rightPanelOpen ? "min-[1025px]:grid-cols-[72px_1fr_320px]" : "min-[1025px]:grid-cols-[72px_1fr_0px]")
        : (rightPanelOpen ? "min-[1025px]:grid-cols-[280px_1fr_320px]" : "min-[1025px]:grid-cols-[280px_1fr_0px]")
    }`}>
      
      <Sidebar 
        collapsed={sidebarCollapsed} 
        setCollapsed={setSidebarCollapsed}
        mobileDrawerOpen={mobileDrawerOpen}
        setMobileDrawerOpen={setMobileDrawerOpen}
      />

      <main className="flex flex-col relative overflow-hidden">
        <Header 
          activeModel={activeModel}
          setActiveModel={setActiveModel}
          modelDropdownOpen={modelDropdownOpen}
          setModelDropdownOpen={setModelDropdownOpen}
          setMobileDrawerOpen={setMobileDrawerOpen}
          setRightPanelOpen={setRightPanelOpen}
        />

        {messages.length === 0 ? (
          <EmptyState onQuickAction={onQuickAction} />
        ) : (
          <ChatView messages={messages} isLoading={isLoading} />
        )}

        <Composer 
          input={input}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          activeModel={activeModel}
          setModelDropdownOpen={setModelDropdownOpen}
          isLoading={isLoading}
        />
      </main>

      <RightPanel 
        open={rightPanelOpen} 
        setOpen={setRightPanelOpen} 
        setInput={setInput} 
      />

    </div>
  );
}
