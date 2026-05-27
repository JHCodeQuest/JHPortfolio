export default function LearningJourneySection() {
  return (
    <section id="learning" className="px-4 sm:px-8 py-24 relative z-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16">
          <p className="text-center inline-flex items-center gap-2 font-[var(--font-mono)] text-sm text-[var(--color-accent)] uppercase tracking-[0.1em] mb-4 w-full justify-center before:content-['//'] before:opacity-50">
            Learning Journey
          </p>
          <h2 className="text-center font-[var(--font-display)] text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.02em]">
            What I'm Building Toward
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
          <div className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-8 transition-all duration-300 hover:border-[var(--color-border-accent)]">
            <div className="w-12 h-12 bg-[var(--color-accent-subtle)] rounded-xl flex items-center justify-center text-2xl mb-4">📖</div>
            <h3 className="font-[var(--font-display)] text-xl mb-3">Currently Learning</h3>
            <ul className="space-y-2">
              <li className="text-[var(--color-text-secondary)] pl-5 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--color-accent)]">
                Python automation and scripting patterns
              </li>
              <li className="text-[var(--color-text-secondary)] pl-5 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--color-accent)]">
                FastAPI for building lightweight backends
              </li>
              <li className="text-[var(--color-text-secondary)] pl-5 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--color-accent)]">
                Data pipelines and API integration
              </li>
              <li className="text-[var(--color-text-secondary)] pl-5 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--color-accent)]">
                Cloud-native deployment and CI/CD
              </li>
            </ul>
          </div>

          <div className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-8 transition-all duration-300 hover:border-[var(--color-border-accent)]">
            <div className="w-12 h-12 bg-[var(--color-accent-subtle)] rounded-xl flex items-center justify-center text-2xl mb-4">🔨</div>
            <h3 className="font-[var(--font-display)] text-xl mb-3">Building Next</h3>
            <ul className="space-y-2">
              <li className="text-[var(--color-text-secondary)] pl-5 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--color-accent)]">
                Automation Dashboard with Python + FastAPI
              </li>
              <li className="text-[var(--color-text-secondary)] pl-5 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--color-accent)]">
                Workflow automation tools for real-world use
              </li>
              <li className="text-[var(--color-text-secondary)] pl-5 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--color-accent)]">
                Open-source contributions to automation projects
              </li>
              <li className="text-[var(--color-text-secondary)] pl-5 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--color-accent)]">
                Expanding into data engineering and ETL tooling
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
