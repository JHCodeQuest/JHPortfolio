const skills = [
  'Power Platform',
  'Power Automate',
  'Python',
  'React',
  'Git / GitHub',
  'APIs',
  'SQL',
]

export default function SkillsSection() {
  return (
    <section id="skills" className="px-4 sm:px-8 py-24 relative z-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16">
          <p className="text-center inline-flex items-center gap-2 font-[var(--font-mono)] text-sm text-[var(--color-accent)] uppercase tracking-[0.1em] mb-4 w-full justify-center before:content-['//'] before:opacity-50">
            Skills
          </p>
          <h2 className="text-center font-[var(--font-display)] text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.02em]">
            Tools & Technologies
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-[800px] mx-auto">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-xl px-6 py-4 text-base font-medium transition-all duration-150 hover:border-[var(--color-accent)] hover:bg-[var(--color-accent-subtle)] hover:-translate-y-0.5 cursor-default"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
