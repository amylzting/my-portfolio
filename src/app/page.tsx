import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="border-t border-zinc-100">
          <Experience />
        </div>
        <div className="border-t border-zinc-100">
          <Projects />
        </div>
        <div className="border-t border-zinc-100">
          <Skills />
        </div>
        <div className="border-t border-zinc-100">
          <Contact />
        </div>
      </main>
      <footer className="border-t border-zinc-100 py-8 px-6 text-center text-xs text-zinc-400 font-mono">
        © {new Date().getFullYear()} Amy Lim
      </footer>
    </>
  );
}
