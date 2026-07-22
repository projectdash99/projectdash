export default function EmptyState({ onQuickAction }: any) {
  const actions = ["Research", "Write", "Code", "Analyze", "Summarize"];

  return (
    <section className="flex-1 flex flex-col items-center justify-center text-center p-6 gap-1.5 pb-20">
      <div className="orb w-24 h-24 rounded-full mb-4.5"></div>
      <h1 className="font-serif font-semibold text-3xl md:text-4xl m-0 tracking-normal">Good morning, Aman</h1>
      <p className="text-text-secondary text-[15px] mt-1 mb-7">How can I help today?</p>
      
      <div className="flex gap-2.5 flex-wrap justify-center max-w-[600px] max-[768px]:grid max-[768px]:grid-cols-2">
        {actions.map(action => (
          <button 
            key={action}
            onClick={() => onQuickAction(action)}
            className="px-4 py-2.5 rounded-card border border-border text-[13.5px] text-text-secondary bg-surface transition-all duration-200 ease-out hover:border-accent hover:text-accent hover:bg-accent-light hover:-translate-y-0.5 active:scale-[0.97]"
          >
            {action}
          </button>
        ))}
      </div>
    </section>
  );
}
