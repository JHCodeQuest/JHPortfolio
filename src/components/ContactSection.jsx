import { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:jkhassan95@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="px-4 sm:px-8 py-24 relative z-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16">
          <p className="inline-flex items-center gap-2 font-[var(--font-mono)] text-sm text-[var(--color-accent)] uppercase tracking-[0.1em] mb-4 before:content-['//'] before:opacity-50">
            Get In Touch
          </p>
          <h2 className="font-[var(--font-display)] text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.02em]">
            Let's Work Together
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="font-[var(--font-display)] text-3xl mb-4">Open to Opportunities</h3>
            <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed">
              I'm currently looking for new opportunities and collaborations.
              Whether you have a project in mind or just want to connect,
              I'd love to hear from you!
            </p>
            <div className="flex flex-col gap-4">
              <a href="mailto:jkhassan95@gmail.com" className="flex items-center gap-4 text-[var(--color-text-secondary)] no-underline p-4 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-xl hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent-subtle)] transition-all duration-150">
                <span className="w-10 h-10 bg-[var(--color-bg-elevated)] rounded-xl flex items-center justify-center text-xl">📧</span>
                <span>jkhassan95@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/joseph-hassan-8679ba17/" target="_blank" className="flex items-center gap-4 text-[var(--color-text-secondary)] no-underline p-4 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-xl hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent-subtle)] transition-all duration-150">
                <span className="w-10 h-10 bg-[var(--color-bg-elevated)] rounded-xl flex items-center justify-center text-xl">💼</span>
                <span>LinkedIn Profile</span>
              </a>
              <a href="https://github.com/JHCodeQuest" target="_blank" className="flex items-center gap-4 text-[var(--color-text-secondary)] no-underline p-4 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-xl hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent-subtle)] transition-all duration-150">
                <span className="w-10 h-10 bg-[var(--color-bg-elevated)] rounded-xl flex items-center justify-center text-xl">🐱</span>
                <span>GitHub Profile</span>
              </a>
              <div className="flex items-center gap-4 text-[var(--color-text-secondary)] p-4 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-xl cursor-default">
                <span className="w-10 h-10 bg-[var(--color-bg-elevated)] rounded-xl flex items-center justify-center text-xl">📍</span>
                <span>Broadway, Worcestershire, UK</span>
              </div>
            </div>
          </div>

          <div className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-8">
            <div className="mb-4">
              <label className="block text-sm text-[var(--color-text-secondary)] mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full p-4 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-xl text-[var(--color-text-primary)] font-[var(--font-body)] text-base transition-all duration-150 focus:outline-none focus:border-[var(--color-accent)] focus:shadow-[0_0_0_3px_var(--color-accent-subtle)]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm text-[var(--color-text-secondary)] mb-2">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full p-4 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-xl text-[var(--color-text-primary)] font-[var(--font-body)] text-base transition-all duration-150 focus:outline-none focus:border-[var(--color-accent)] focus:shadow-[0_0_0_3px_var(--color-accent-subtle)]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm text-[var(--color-text-secondary)] mb-2">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                rows="5"
                className="w-full p-4 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-xl text-[var(--color-text-primary)] font-[var(--font-body)] text-base transition-all duration-150 focus:outline-none focus:border-[var(--color-accent)] focus:shadow-[0_0_0_3px_var(--color-accent-subtle)] resize-y min-h-[140px]"
              />
            </div>
            <button
              onClick={handleSubmit}
              className="w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[var(--color-accent)] text-[var(--color-bg-deep)] font-semibold rounded-xl no-underline hover:glow-sm transition-all duration-150 mt-4 cursor-pointer border-none"
            >
              📧 Send via Email →
            </button>
            <p className="text-xs text-[var(--color-text-muted)] text-center mt-4">
              This will open your email client with a pre-filled message
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
