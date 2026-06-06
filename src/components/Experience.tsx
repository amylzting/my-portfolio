const experience = [
  {
    company: "JP Morgan",
    role: "Full-Stack Software Engineer",
    period: "2023 — Present",
    location: "Singapore",
    bullets: [
      "Build and maintain enterprise web applications as part of a cross-functional engineering team.",
      "Designed a prompt engineering system to help developers navigate and understand large codebases, adopted across the team.",
      "Collaborate across frontend and backend layers to deliver end-to-end features.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-xs font-mono tracking-widest uppercase text-zinc-400 mb-10">
        Experience
      </h2>
      <div className="space-y-10">
        {experience.map((job) => (
          <div
            key={job.company}
            className="grid md:grid-cols-[200px_1fr] gap-6 border-b border-zinc-100 pb-10 last:border-0 last:pb-0"
          >
            <div>
              <p className="text-sm text-zinc-400 font-mono">{job.period}</p>
              <p className="text-sm text-zinc-400 mt-1">{job.location}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-zinc-900">{job.role}</h3>
              <p className="text-zinc-500 text-sm mb-4">{job.company}</p>
              <ul className="space-y-2">
                {job.bullets.map((bullet, i) => (
                  <li key={i} className="text-zinc-600 text-sm leading-relaxed flex gap-2">
                    <span className="text-zinc-300 mt-1">—</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
