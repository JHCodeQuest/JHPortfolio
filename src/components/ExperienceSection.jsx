const experiences = [
  {
    title: 'Domiciliary Carer',
    company: 'Cotswold Carers \u2014 On Site',
    date: 'May 2026 - Present',
    description: [
      'Supporting individuals in their homes with day-to-day care and wellbeing.',
      'Assisting with personal care, companionship, and maintaining independence.',
      'Building trust with service users through patience, empathy, and professionalism.',
      'Following care plans and safeguarding procedures while adapting to individual needs.',
      'Developing strong communication and time-management skills in a fast-paced care environment.',
    ],
  },
  {
    title: 'Self-Employed Software Developer',
    company: 'Remote',
    date: 'Sep 2024 - Present',
    description: [
      'Design and build software tools and automation scripts using Python.',
      'Develop custom web applications and data-driven solutions for personal and client projects.',
      'Build automation workflows to improve efficiency in repetitive processes.',
      'Work independently across full lifecycle: design, development, testing, and deployment.',
      'Strengthening backend engineering skills with focus on APIs, data handling, and system design.',
    ],
  },
  {
    title: 'Stores Operative',
    company: 'Alpine F1 Team \u2014 Enstone',
    date: 'Jul 2025 - Mar 2026',
    description: [
      'Managed inventory systems supporting multiple departments during race operations.',
      'Ensured accurate stock traceability and real-time availability of critical equipment.',
      'Worked in high-pressure operational environment requiring precision and reliability.',
      'Supported fast-paced logistical workflows with strong attention to detail.',
    ],
  },
  {
    title: 'Junior AX Developer',
    company: 'Origin Enterprises Plc \u2014 Cheltenham',
    date: 'Jul 2024 - Sep 2024',
    description: [
      'Developed and modified data entities and forms within Microsoft Dynamics 365 Finance & Operations.',
      'Built and maintained SSRS reports for business reporting and analytics.',
      'Worked with structured enterprise data models and backend logic.',
      'Supported system updates and deployment activities in production environments.',
    ],
  },
  {
    title: 'Software Developer / Power Platform Developer',
    company: 'Somerset Council \u2014 Taunton',
    date: 'Mar 2020 - Apr 2024',
    description: [
      'Developed and maintained internal ASP.NET applications supporting business workflows.',
      'Designed SQL-backed systems for data capture, reporting, and operational processes.',
      'Built secure social care portal used by external professionals.',
      'Developed COVID-19 tracking systems supporting frontline services.',
      'Integrated Azure services and Logic Apps into enterprise systems.',
      'Worked in Agile-style delivery teams with stakeholders across departments.',
      'Supported debugging, maintenance, and production deployments.',
    ],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="px-4 sm:px-8 py-24 relative z-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16">
          <p className="inline-flex items-center gap-2 font-[var(--font-mono)] text-sm text-[var(--color-accent)] uppercase tracking-[0.1em] mb-4 before:content-['//'] before:opacity-50">
            Growth Path
          </p>
          <h2 className="font-[var(--font-display)] text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.02em]">
            Building Toward Better
          </h2>
        </div>

        <div className="relative pl-12 before:absolute before:left-[7px] before:top-0 before:bottom-0 before:w-[2px] before:bg-gradient-to-b before:from-[var(--color-accent)] before:to-[var(--color-tertiary)] before:to-transparent">
          {experiences.map((exp) => (
            <div key={`${exp.title}-${exp.date}`} className="relative pb-16 last:pb-0 before:absolute before:left-[-41px] before:top-[6px] before:w-[10px] before:h-[10px] before:bg-[var(--color-accent)] before:rounded-full before:shadow-[0_0_20px_var(--color-accent-glow)]">
              <div className="flex flex-wrap justify-between items-start gap-4 mb-3">
                <div>
                  <h3 className="font-[var(--font-display)] text-xl font-bold">{exp.title}</h3>
                  <span className="text-[var(--color-accent)] font-medium">{exp.company}</span>
                </div>
                <span className="font-[var(--font-mono)] text-xs text-[var(--color-text-muted)] bg-[var(--color-bg-card)] px-3 py-1.5 rounded-md whitespace-nowrap">{exp.date}</span>
              </div>
              <ul className="text-sm text-[var(--color-text-secondary)] space-y-2">
                {exp.description.map((d) => (
                  <li key={d} className="pl-2">{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
