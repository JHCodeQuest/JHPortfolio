export default function AboutSection() {
  return (
    <section id="about" className="px-4 sm:px-8 py-24 relative z-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16">
          <p className="text-center inline-flex items-center gap-2 font-[var(--font-mono)] text-sm text-[var(--color-accent)] uppercase tracking-[0.1em] mb-4 w-full justify-center before:content-['//'] before:opacity-50">
            My Story
          </p>
          <h2 className="text-center font-[var(--font-display)] text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.02em]">
            The Comeback Story
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
            I studied Computer Science and earned my BSc (2:1), then spent four years building
            real software — first as a Software Developer at Somerset Council, then as a Power
            Platform Developer, and later as a Dynamics 365 developer at Origin. I've shipped
            ASP.NET applications, built SQL-backed systems, and integrated Azure services into
            production environments. I know what it means to deliver enterprise software.
          </p>
          <p>
            Then I was made redundant. Like a lot of people in tech recently, I found myself
            applying for anything that would pay the bills. I took a warehouse role at Alpine F1
            — stock management, inventory systems, fast-paced operations. I even built a Python
            tool there using photo recognition to speed up stock identification, because I can't
            help solving problems with code.
          </p>
          <p>
            From there I moved into domiciliary care — supporting people in their homes,
            building patience, empathy, and the kind of communication skills you don't learn
            in an office. That background is now my biggest advantage: I know how to listen
            to what people actually need.
          </p>
          <p>
            Now I'm an Automation Developer. I combine my enterprise experience with Python to build workflow tooling, data pipelines, and smart scripts that eliminate repetitive work. The end goal? Tools that make people's jobs easier — because I've been in those jobs, and I know what actually helps.
          </p>
        </div>
      </div>
    </section>
  )
}
