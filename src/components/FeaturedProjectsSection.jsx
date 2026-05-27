const featured = [
  {
    icon: '\u{1F5F3}\uFE0F',
    title: 'Civic Lens',
    description: 'UK politics analysis and prediction platform using polling data and public datasets. Tracks election trends and predicts constituency outcomes.',
    tags: ['React', 'TypeScript', 'GitHub Pages'],
    github: 'https://github.com/JHCodeQuest/civic-lens',
    link: 'https://jhcodequest.github.io/civic-lens/',
  },
  {
    icon: '\u2699\uFE0F',
    title: 'Automation Dashboard',
    description: 'Internal-style workflow dashboard for automation experiments and Power Platform integrations.',
    tags: ['Python', 'FastAPI', 'SQLite'],
    github: 'https://github.com/JHCodeQuest/automation-dashboard',
  },
  {
    icon: '\u{1F9E0}',
    title: 'Entropy Wordle Bot',
    description: 'Information-theory-based Wordle solver using Shannon Entropy to choose optimal guesses.',
    tags: ['Python', 'Algorithms'],
    github: 'https://github.com/JHCodeQuest/pyWordles',
  },
  {
    icon: '\u{1F4E6}',
    title: 'Stock Inquiry Assistant',
    description: 'AI-powered inventory identification and lookup using computer vision and OCR.',
    tags: ['Python', 'Computer Vision'],
    github: 'https://github.com/JHCodeQuest/stock-inquiry-assistant',
  },
  {
    icon: '\u{1F3AE}',
    title: 'Neon Breakout',
    description: 'A neon-styled brick breaker built with Phaser3 — playable demo and source available.',
    tags: ['JavaScript', 'Game Dev'],
    link: 'https://notbovvered.itch.io/neon-breakout',
  },
]

export default function FeaturedProjectsSection() {
  return (
    <section className="px-4 sm:px-8 py-28 relative z-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16">
          <p className="inline-flex items-center gap-2 font-[var(--font-mono)] text-sm text-[var(--color-accent)] uppercase tracking-[0.1em] mb-4 before:content-['//'] before:opacity-50">
            Milestones
          </p>
          <h2 className="font-[var(--font-display)] text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.02em]">
            What I've Built So Far
          </h2>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
          {featured.map((p) => (
            <div
              key={p.title}
              className="bg-gradient-to-b from-[rgba(255,255,255,0.02)] to-[rgba(255,255,255,0.01)] border border-[var(--color-border)] rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--color-border-accent)] hover:shadow-[0_0_20px_var(--color-accent-glow)]"
            >
              <div>
                <div className="flex gap-4 items-center mb-4">
                  <div className="w-14 h-14 rounded-xl bg-[var(--color-bg-elevated)] flex items-center justify-center text-2xl shrink-0">
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="font-[var(--font-display)] text-lg">{p.title}</h3>
                    <div className="text-sm text-[var(--color-text-secondary)]">
                      {p.tags.join(' \u2022 ')}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] mb-4 leading-relaxed">{p.description}</p>
              </div>
              <div className="flex gap-4 mt-auto">
                {p.github && (
                  <a href={p.github} target="_blank" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-transparent text-[var(--color-text-primary)] border border-[var(--color-border)] font-semibold text-sm rounded-xl no-underline hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent-subtle)] transition-all duration-150">
                    View Code
                  </a>
                )}
                {p.link && (
                  <a href={p.link} target="_blank" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[var(--color-accent)] text-[var(--color-bg-deep)] font-semibold text-sm rounded-xl no-underline hover:glow-sm transition-all duration-150">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
