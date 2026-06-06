"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto"
    >
      <p className="text-sm font-mono text-zinc-500 mb-4 tracking-widest uppercase">
        Hello, I&apos;m
      </p>
      <h1 className="text-5xl sm:text-7xl font-bold text-zinc-900 tracking-tight leading-none mb-4">
        Amy Lim
      </h1>
      <h2 className="text-2xl sm:text-3xl font-light text-zinc-500 mb-6">
        Full-Stack Engineer
      </h2>
      <p className="max-w-xl text-zinc-600 text-lg leading-relaxed mb-10">
        I build modern web products and explore how AI can make teams work smarter.
        Currently at JP Morgan.
      </p>
      <div className="flex flex-wrap gap-4">
        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="px-6 py-3 bg-zinc-900 text-white text-sm font-medium rounded-full hover:bg-zinc-700 transition-colors"
        >
          View my work
        </a>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="px-6 py-3 border border-zinc-300 text-zinc-700 text-sm font-medium rounded-full hover:border-zinc-500 hover:text-zinc-900 transition-colors"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
