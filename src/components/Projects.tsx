export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-xs font-mono tracking-widest uppercase text-zinc-400 mb-10">
        Projects
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder cards — replace with real projects */}
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="border border-dashed border-zinc-200 rounded-2xl p-6 flex flex-col gap-3 bg-zinc-50/50"
          >
            <div className="w-8 h-8 rounded-lg bg-zinc-200 animate-pulse" />
            <div className="space-y-2">
              <div className="h-4 w-3/4 bg-zinc-200 rounded animate-pulse" />
              <div className="h-3 w-full bg-zinc-100 rounded animate-pulse" />
              <div className="h-3 w-5/6 bg-zinc-100 rounded animate-pulse" />
            </div>
            <div className="flex gap-2 mt-2">
              <div className="h-5 w-12 bg-zinc-200 rounded-full animate-pulse" />
              <div className="h-5 w-14 bg-zinc-200 rounded-full animate-pulse" />
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-sm text-zinc-400 mt-8">
        Projects coming soon.
      </p>
    </section>
  );
}
