const skills = [
  'Python', 'Automation & Scripting', 'Workflow Tooling',
  'C#', '.NET (ASP.NET)', 'SQL', 'REST APIs',
  'Azure', 'Azure Logic Apps', 'Dynamics 365 F&O',
  'Power Platform', 'SSRS Reports',
  'Data Analysis', 'git', 'GitHub',
  'Agile / Scrum', 'Debugging & Production Support',
  'System Design',
]

export default function SkillsSection() {
  return (
    <section id="skills" className="px-4 sm:px-8 py-24 relative z-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16">
          <p className="inline-flex items-center gap-2 font-[var(--font-mono)] text-sm text-[var(--color-accent)] uppercase tracking-[0.1em] mb-4 before:content-['//'] before:opacity-50">
            Engineering Toolkit
          </p>
          <h2 className="font-[var(--font-display)] text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.02em]">
            Skills & Technologies
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">
          <div>
            <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
              I started in enterprise C#/.NET and I'm building toward Python automation
              development. My skills span both worlds — production-grade backend
              engineering and the automation tooling that makes work faster, smarter,
              and less repetitive.
            </p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              Every tool here is something I've used to solve a real problem,
              and a foundation I'm actively expanding.
            </p>
          </div>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-center text-sm font-medium transition-all duration-150 hover:border-[var(--color-accent)] hover:bg-[var(--color-accent-subtle)] hover:-translate-y-0.5 cursor-default"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
