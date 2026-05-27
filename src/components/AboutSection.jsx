export default function AboutSection() {
  return (
    <section id="about" className="px-4 sm:px-8 py-24 relative z-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16">
          <p className="text-center inline-flex items-center gap-2 font-[var(--font-mono)] text-sm text-[var(--color-accent)] uppercase tracking-[0.1em] mb-4 w-full justify-center before:content-['//'] before:opacity-50">
            About Me
          </p>
          <h2 className="text-center font-[var(--font-display)] text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.02em]">
            Building Toward Automation
          </h2>
        </div>

        <div className="flex justify-center mb-12">
          <div className="relative w-[160px] h-[160px]">
            <div className="absolute -inset-[10px] border-2 border-dashed border-[var(--color-border-accent)] rounded-full animate-[spin_20s_linear_infinite]" />
            <img
              src="Me.jpg"
              alt="Joseph Hassan"
              className="w-[160px] h-[160px] rounded-full object-cover border-[3px] border-[var(--color-accent)] shadow-[0_0_40px_var(--color-accent-glow)]"
            />
          </div>
        </div>

        <div className="max-w-[700px] mx-auto text-center space-y-6">
          <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
            I started building enterprise applications with C#/.NET and Dynamics 365 at Somerset Council,
            where I learned what it means to build systems people actually rely on. Since then I've worked
            across Power Platform, Azure, and Python — always moving toward automation and tooling
            that makes work faster and less repetitive.
          </p>
          <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
            Right now I'm focused on becoming an Automation Developer — combining my enterprise
            background with Python to build workflow tooling, data pipelines, and smart scripts
            that solve real problems.
          </p>
        </div>
      </div>
    </section>
  )
}
