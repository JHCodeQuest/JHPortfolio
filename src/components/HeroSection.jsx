export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center relative z-10 px-4 sm:px-8 pt-32 pb-16">
      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-accent-subtle)] border border-[var(--color-border-accent)] rounded-full font-[var(--font-mono)] text-sm text-[var(--color-accent)] mb-8 animate-[fadeInUp_0.8s_ease_forwards]">
            <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full animate-pulse" />
            C# / .NET → Python Automation
          </div>
          <h1 className="font-[var(--font-display)] text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.05] tracking-[-0.03em] mb-8 animate-[fadeInUp_0.8s_ease_0.1s_forwards]">
            <span className="block">Hi, I'm</span>
            <span className="block text-[var(--color-accent)] relative">
              Joseph Hassan
              <span className="absolute bottom-[0.1em] left-0 right-0 h-[0.15em] bg-[var(--color-accent)] opacity-30 -skew-x-[12deg]" />
            </span>
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-[500px] mb-16 animate-[fadeInUp_0.8s_ease_0.2s_forwards]">
            From C#/.NET enterprise systems to Python automation. I build
            workflow tooling, scripts, and data-driven solutions that eliminate
            repetitive work. My enterprise background means I build automation
            that's robust, maintainable, and production-ready.
          </p>
          <div className="flex gap-4 flex-wrap animate-[fadeInUp_0.8s_ease_0.3s_forwards]">
            <a href="https://github.com/JHCodeQuest" target="_blank" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[var(--color-accent)] text-[var(--color-bg-deep)] font-semibold rounded-xl no-underline hover:-translate-y-0.5 hover:glow-md transition-all duration-150">
              Explore My Journey →
            </a>
            <a href="JoeCV_Developer.pdf" download className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-transparent text-[var(--color-text-primary)] border border-[var(--color-border)] font-semibold rounded-xl no-underline hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent-subtle)] transition-all duration-150">
              📄 Download CV
            </a>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-transparent text-[var(--color-text-primary)] border border-[var(--color-border)] font-semibold rounded-xl no-underline hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent-subtle)] transition-all duration-150">
              Let's Connect
            </a>
          </div>
        </div>

        <div className="relative animate-[fadeInUp_0.8s_ease_0.4s_forwards]">
          <div className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl overflow-hidden shadow-[0_0_0_1px_var(--color-border-accent),0_25px_50px_-12px_rgba(0,0,0,0.5),0_0_20px_var(--color-accent-glow)]">
            <div className="flex items-center gap-2 px-4 py-3 bg-[var(--color-bg-elevated)] border-b border-[var(--color-border)]">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28ca41]" />
              <span className="flex-1 text-center font-[var(--font-mono)] text-xs text-[var(--color-text-muted)]">
                joseph@portfolio ~
              </span>
            </div>
            <div className="p-6 sm:p-8 font-[var(--font-mono)] text-sm leading-[1.8]">
              <div className="mb-2">
                <span className="text-[var(--color-accent)]">$ </span>
                <span className="text-[var(--color-text-primary)]">cat trajectory.md</span>
              </div>
              <div className="mb-2 text-[var(--color-text-secondary)] pl-4">
                Enterprise C#/.NET →<br />
                Python Automation Developer.<br />
                Building tools that eliminate repetitive work.
              </div>
              <div className="mb-2">
                <span className="text-[var(--color-accent)]">$ </span>
                <span className="text-[var(--color-text-primary)]">./current-focus.sh</span>
              </div>
              <div className="mb-2 text-[var(--color-text-secondary)] pl-4">
                Python • Automation • Scripting<br />
                Building toward Automation Developer.
              </div>
              <div className="mb-2">
                <span className="text-[var(--color-accent)]">$ </span>
                <span className="text-[var(--color-text-primary)]">cat next-chapter.txt</span>
              </div>
              <div className="mb-2 text-[var(--color-text-secondary)] pl-4">
                Workflow automation, smart tooling,<br />
                and systems that make people's jobs easier.
              </div>
              <div className="mb-2">
                <span className="text-[var(--color-accent)]">$ </span>
                <span className="text-[var(--color-text-primary)]">./start-collaboration.sh</span>
                <span className="inline-block w-2 h-4 bg-[var(--color-accent)] ml-1 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
