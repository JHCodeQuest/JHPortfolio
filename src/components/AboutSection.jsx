export default function AboutSection() {
  return (
    <section id="about" className="px-4 sm:px-8 py-24 relative z-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16">
          <p className="text-center inline-flex items-center gap-2 font-[var(--font-mono)] text-sm text-[var(--color-accent)] uppercase tracking-[0.1em] mb-4 w-full justify-center before:content-['//'] before:opacity-50">
            My Story
          </p>
          <h2 className="text-center font-[var(--font-display)] text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.02em]">
            A Different Path Into Tech
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

        <div className="max-w-[720px] mx-auto space-y-6 text-[var(--color-text-secondary)] text-lg leading-relaxed">
          <p>
            I didn't take the typical route into tech. Before I was writing code, I was working in
            care — supporting people in their homes, building patience, empathy, and the kind of
            communication skills that most developers never learn. That background is still my
            biggest advantage: I know how to listen to what people actually need.
          </p>
          <p>
            I taught myself to code by building things that mattered to me. Python scripts,
            automation tools, web apps — each project taught me more than any tutorial could.
            I learned by solving real problems, making mistakes, and shipping anyway.
          </p>
          <p>
            Along the way I picked up enterprise experience too — building ASP.NET applications
            for Somerset Council, working with Dynamics 365 at Origin, and even building a
            Python stock-identification tool at Alpine F1. That mix of self-taught creativity
            and enterprise discipline is what makes my approach different.
          </p>
          <p>
            Now I'm focused on becoming an Automation Developer. I combine my enterprise
            background with Python to build workflow tooling, data pipelines, and smart
            scripts that eliminate repetitive work. The end goal? Tools that make people's
            jobs easier — because I've been in those jobs, and I know what actually helps.
          </p>
        </div>
      </div>
    </section>
  )
}
