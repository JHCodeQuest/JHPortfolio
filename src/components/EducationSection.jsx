const education = [
  {
    icon: '\u{1F393}',
    title: "Bachelor's Degree \u2014 Computer Science",
    institution: 'Bridgwater & Taunton College via The Open University',
    date: '2017 \u2014 2018',
  },
  {
    icon: '\u{1F4DC}',
    title: 'HND \u2014 Computing & Systems Development',
    institution: 'Bridgwater & Taunton College',
    date: '2015 \u2014 2017',
  },
]

export default function EducationSection() {
  return (
    <section className="px-4 sm:px-8 py-24 relative z-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16">
          <p className="inline-flex items-center gap-2 font-[var(--font-mono)] text-sm text-[var(--color-accent)] uppercase tracking-[0.1em] mb-4 before:content-['//'] before:opacity-50">
            Academic Background
          </p>
          <h2 className="font-[var(--font-display)] text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.02em]">
            Education
          </h2>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
          {education.map((edu) => (
            <div
              key={edu.title}
              className="bg-gradient-to-br from-[var(--color-bg-card)] to-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-2xl p-8 flex items-center gap-4 transition-all duration-300 hover:border-[var(--color-accent)] hover:-translate-y-0.5"
            >
              <div className="w-[60px] h-[60px] bg-gradient-to-br from-[#0078d4] to-[#00bcf2] rounded-xl flex items-center justify-center text-2xl shrink-0">
                {edu.icon}
              </div>
              <div>
                <h3 className="text-base mb-1">{edu.title}</h3>
                <span className="text-sm text-[var(--color-text-muted)] block">{edu.institution}</span>
                <span className="text-xs text-[var(--color-text-muted)] opacity-70">{edu.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
