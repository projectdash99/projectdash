import { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";

export default function ChatView({ messages, isLoading }: any) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  return (
    <section className="flex-1 flex overflow-hidden">
      <div ref={scrollRef} className="flex-1 overflow-y-auto w-full max-w-[800px] mx-auto px-6 pt-5 pb-[140px] flex flex-col gap-8 max-[768px]:px-4 relative before:absolute before:top-0 before:left-0 before:right-0 before:h-6 before:bg-gradient-to-b before:from-bg before:to-transparent before:z-10 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-12 after:bg-gradient-to-t after:from-bg after:to-transparent after:z-10">
        {messages.map((msg: any) => (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            key={msg.id} 
            className={`text-[15px] leading-relaxed ${
              msg.role === "user" 
                ? "self-end max-w-[70%] bg-accent-light text-text-primary px-4 py-3 rounded-card max-[768px]:max-w-[88%]" 
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
          </motion.div>
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
