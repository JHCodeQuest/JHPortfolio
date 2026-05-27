const projects = [
  {
    icon: '\u{1F5F3}\uFE0F',
    title: 'Civic Lens',
    type: 'Web Application / Data Analysis',
    description: 'UK politics analysis and prediction platform using polling data and public datasets.',
    features: [
      'Election trend tracking with interactive visualisations',
      'Constituency prediction engine using polling data',
      'Open-source architecture with live deployment',
    ],
    tags: ['React', 'TypeScript', 'GitHub Pages', 'Data Analysis'],
    github: 'https://github.com/JHCodeQuest/civic-lens',
    link: 'https://jhcodequest.github.io/civic-lens/',
  },
  {
    icon: '\u2699\uFE0F',
    title: 'Automation Dashboard',
    type: 'Python / FastAPI',
    description: 'Internal-style workflow dashboard for automation experiments and Power Platform integrations.',
    features: [
      'Built with Python and FastAPI for lightweight backend',
      'SQLite-based data storage for experiment tracking',
      'Dashboard interface for monitoring automation workflows',
    ],
    tags: ['Python', 'FastAPI', 'SQLite', 'Automation'],
    github: 'https://github.com/JHCodeQuest/automation-dashboard',
  },
  {
    icon: '\u{1F4CA}',
    title: 'Gaming / Data Projects',
    type: 'APIs & Analytics',
    description: 'Smaller experimental projects around APIs, statistics, and gaming analytics \u2014 exploring data pipelines and statistical models.',
    features: [
      'API integrations for live game data and statistics',
      'Experimental analytics pipelines and visualisations',
      'Python-based statistical modelling and automation',
    ],
    tags: ['Python', 'APIs', 'Data Analysis', 'Statistics'],
    github: 'https://github.com/JHCodeQuest',
  },
  {
    icon: '\u{1F9E0}',
    title: 'Entropy Wordle Bot',
    type: 'Python / AI Algorithm',
    description: 'A high-performance, information-theory-based Wordle solver that uses Shannon Entropy to find the mathematically optimal guess.',
    features: [
      "Fetches official NYT Wordle and solves it 'blind'",
      'Dynamic strategy: Entropy \u2192 Win-Probability targeting',
      'Self-learning dictionary that improves over time',
    ],
    tags: ['Python', 'Algorithms', 'Information Theory', 'Automation'],
    github: 'https://github.com/JHCodeQuest/pyWordles',
  },
  {
    icon: '\u{1F326}\uFE0F',
    title: 'Weather App',
    type: 'Web Application',
    description: 'A responsive weather application with real-time data and geolocation support.',
    features: [
      'Responsive UI built with HTML/CSS',
      'Location-based search using geolocation API',
      'Mock data implementation for rapid prototyping',
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'API'],
    github: 'https://github.com/JHCodeQuest/weather-application',
  },
  {
    icon: '\u{1F4DA}',
    title: 'SmartCLI Journal',
    type: 'CLI Tool',
    description: 'Command-line interface for tracking journal entries with powerful organization features.',
    features: [
      'Built with Python for quick journaling',
      'Customizable categories and tags',
      'Search functionality across entries',
    ],
    tags: ['Python', 'CLI', 'File I/O'],
    github: 'https://github.com/JHCodeQuest/smartcli-journal',
  },
  {
    icon: '\u{1F3AE}',
    title: 'Neon Breakout',
    type: 'Game Development',
    description: 'A fully playable brick breaker game with neon aesthetics built using Phaser3.',
    features: [
      'Engaging gameplay mechanics',
      'Built with Phaser3 game framework',
      'Published on itch.io',
    ],
    tags: ['JavaScript', 'Phaser3', 'Game Dev'],
    link: 'https://notbovvered.itch.io/neon-breakout',
  },
  {
    icon: '\u{1F40D}',
    title: 'pySnake',
    type: 'Python Game',
    description: 'A modern take on the classic Snake game built with Python and Pygame, featuring smooth controls and increasing difficulty.',
    features: [
      'Classic gameplay with modern visuals',
      'Score tracking and high scores',
      'Built with Pygame library',
    ],
    tags: ['Python', 'Pygame', 'Game Dev'],
    comingSoon: true,
  },
  {
    icon: '\u{1F3B0}',
    title: 'Gambling Prediction ML',
    type: 'Machine Learning',
    description: 'A machine learning project exploring pattern recognition and probability analysis in gambling scenarios.',
    features: [
      'Data analysis and visualization',
      'Predictive modeling with Python',
      'Statistical probability calculations',
    ],
    tags: ['Python', 'Machine Learning', 'Data Science'],
    comingSoon: true,
  },
  {
    icon: '\u{1F4E6}',
    title: 'Stock Inquiry Assistant',
    type: 'AI / Computer Vision',
    description: 'A smart inventory identification tool that uses AI and computer vision to help store operatives identify items by photo and locate stock positions.',
    features: [
      'AI-powered image recognition with PyTorch (ResNet-50)',
      'OCR text extraction using EasyOCR',
      'Inventory lookup with location & stock quantity',
    ],
    tags: ['Python', 'PyTorch', 'Computer Vision', 'OCR'],
    comingSoon: true,
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="px-4 sm:px-8 py-24 relative z-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16">
          <p className="inline-flex items-center gap-2 font-[var(--font-mono)] text-sm text-[var(--color-accent)] uppercase tracking-[0.1em] mb-4 before:content-['//'] before:opacity-50">
            Full Archive
          </p>
          <h2 className="font-[var(--font-display)] text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.02em]">
            Every Project, a Step Forward
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(380px,1fr))] gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl overflow-hidden transition-all duration-300 hover:border-[var(--color-border-accent)] hover:-translate-y-2 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] ${project.comingSoon ? 'opacity-85 hover:opacity-100' : ''}`}
            >
              {project.comingSoon && (
                <span className="absolute top-4 right-4 bg-gradient-to-r from-[var(--color-tertiary)] to-[#ec4899] text-white text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider z-10">
                  Coming Soon
                </span>
              )}
              <div className="p-8 flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[var(--color-accent-subtle)] to-[rgba(168,85,247,0.1)] rounded-xl flex items-center justify-center text-2xl shrink-0">
                  {project.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="font-[var(--font-display)] text-xl mb-1">{project.title}</h3>
                  <span className="font-[var(--font-mono)] text-xs text-[var(--color-accent)]">{project.type}</span>
                </div>
              </div>
              <div className="px-8 pb-4">
                <p className="text-sm text-[var(--color-text-secondary)] mb-4 leading-relaxed">{project.description}</p>
                <ul className="space-y-1.5 mb-4">
                  {project.features.map((f) => (
                    <li key={f} className="text-sm text-[var(--color-text-secondary)] pl-5 relative before:content-['\u2192'] before:absolute before:left-0 before:text-[var(--color-accent)]">{f}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 px-8 pb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-[var(--color-bg-elevated)] border border-[var(--color-border)] px-3 py-1 rounded-md text-xs text-[var(--color-text-secondary)]">{tag}</span>
                ))}
              </div>
              {!project.comingSoon && (
                <div className="flex gap-4 px-8 py-4 border-t border-[var(--color-border)]">
                  {project.github && (
                    <a href={project.github} target="_blank" className="text-sm text-[var(--color-text-secondary)] no-underline font-medium flex items-center gap-1 hover:text-[var(--color-accent)] transition-all duration-150">
                      🔗 GitHub
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" className="text-sm text-[var(--color-text-secondary)] no-underline font-medium flex items-center gap-1 hover:text-[var(--color-accent)] transition-all duration-150">
                      🎮 Play Game
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
