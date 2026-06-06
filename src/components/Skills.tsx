const skills = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  Backend: ["Node.js", "Python", "REST APIs", "SQL"],
  "AI & Tooling": ["Prompt Engineering", "LLM Integration", "Workflow Automation"],
  Tools: ["Git", "GitHub", "Docker", "VS Code", "Jira"],
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-xs font-mono tracking-widest uppercase text-zinc-400 mb-10">
        Skills
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-sm font-semibold text-zinc-800 mb-4">{category}</h3>
            <ul className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <li
                  key={skill}
                  className="text-xs px-3 py-1.5 bg-zinc-100 text-zinc-700 rounded-full hover:bg-zinc-200 transition-colors"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
