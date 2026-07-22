import { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";

export default function ChatView({ messages, isLoading }: any) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  return (
    <section className="flex-1 flex overflow-hidden">
      <div ref={scrollRef} className="flex-1 overflow-y-auto w-full max-w-[800px] mx-auto px-6 pt-5 pb-[140px] flex flex-col gap-8 max-[860px]:px-4">
        {messages.map((msg: any) => (
          <div 
            key={msg.id} 
            className={`text-[15px] leading-relaxed ${
              msg.role === "user" 
                ? "self-end max-w-[70%] bg-accent-light text-text-primary px-4 py-3 rounded-card max-[860px]:max-w-[88%]" 
                : "self-start w-full text-text-primary"
            }`}
          >
            {msg.role === "user" ? (
              <p className="whitespace-pre-wrap">{msg.content}</p>
            ) : (
              <div className="prose prose-sm dark:prose-invert max-w-none prose-p:leading-relaxed prose-pre:bg-code-bg prose-pre:text-code-text prose-pre:rounded-[20px] prose-pre:p-4 prose-pre:font-mono prose-pre:text-[13px]">
                <ReactMarkdown>{msg.content}</ReactMarkdown>
              </div>
            )}
          </div>
        ))}

        {isLoading && messages[messages.length - 1]?.role === "user" && (
          <div className="self-start w-full text-text-primary flex gap-1 py-1.5">
            <span className="dot w-1.5 h-1.5 rounded-full bg-text-muted"></span>
            <span className="dot w-1.5 h-1.5 rounded-full bg-text-muted"></span>
            <span className="dot w-1.5 h-1.5 rounded-full bg-text-muted"></span>
          </div>
        )}
      </div>
    </section>
  );
}
