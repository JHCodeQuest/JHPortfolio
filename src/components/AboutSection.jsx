const cards = [
  {
    icon: '\u{1F331}',
    title: 'Where I Started',
    description: 'Building enterprise applications with C#/.NET, SQL, and Dynamics 365 at Somerset Council. That foundation taught me how to build robust, production-grade systems that people rely on every day.',
  },
  {
    icon: '\u26A1',
    title: "What I'm Becoming",
    description: 'An Automation Developer who combines enterprise experience with Python to build workflow tooling, scripts, and data-driven solutions — automation that\u2019s built to last, not just to work once.',
  },
  {
    icon: '\u{1F3AF}',
    title: "Where I'm Headed",
    description: 'Deeper into Python automation, workflow orchestration, and tooling that eliminates repetitive work. My enterprise background gives me a unique edge: I build automation that fits into real systems.',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="px-4 sm:px-8 py-24 relative z-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16">
          <p className="inline-flex items-center gap-2 font-[var(--font-mono)] text-sm text-[var(--color-accent)] uppercase tracking-[0.1em] mb-4 before:content-['//'] before:opacity-50">
            My Path
          </p>
          <h2 className="font-[var(--font-display)] text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.02em]">
            From Enterprise Dev to Automation
          </h2>
        </div>

        <div className="flex justify-center mb-12">
          <div className="relative w-[180px] h-[180px]">
            <div className="absolute -inset-[10px] border-2 border-dashed border-[var(--color-border-accent)] rounded-full animate-[spin_20s_linear_infinite]" />
            <img
              src="Me.jpg"
              alt="Joseph Hassan"
              className="w-[180px] h-[180px] rounded-full object-cover border-[3px] border-[var(--color-accent)] shadow-[0_0_40px_var(--color-accent-glow)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_80px_var(--color-accent-glow)]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group bg-[var(--color-bg-glass)] backdrop-blur-[10px] border border-[var(--color-border)] rounded-2xl p-8 transition-all duration-300 hover:border-[var(--color-border-accent)] hover:-translate-y-1.5 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-tertiary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="w-12 h-12 bg-[var(--color-accent-subtle)] rounded-xl flex items-center justify-center text-2xl mb-4">
                {card.icon}
              </div>
              <h3 className="font-[var(--font-display)] text-xl mb-2">{card.title}</h3>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
