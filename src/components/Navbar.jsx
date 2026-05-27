import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#about', label: 'Story' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#learning', label: 'Learning' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('menu-open', isMenuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [isMenuOpen])

  const toggleMenu = () => setIsMenuOpen((v) => !v)
  const closeMenu = () => setIsMenuOpen(false)

  const handleLinkClick = (e, targetId) => {
    e.preventDefault()
    closeMenu()
    setTimeout(() => {
      document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 bg-[rgba(5,5,8,0.8)] backdrop-blur-[20px] border-b border-[var(--color-border)]">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <a href="#" className="font-[var(--font-display)] text-2xl font-extrabold text-[var(--color-accent)] no-underline tracking-tight glow-sm hover:glow-md transition-shadow duration-150">
            JH
          </a>
          <ul className="hidden md:flex gap-8 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-[var(--color-text-secondary)] no-underline text-sm font-medium px-4 py-2 rounded-lg hover:text-[var(--color-accent)] hover:bg-[var(--color-accent-subtle)] transition-all duration-150">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button className="md:hidden bg-none border-none cursor-pointer p-2.5 z-[1002]" onClick={toggleMenu}>
            <div className={`flex flex-col justify-between w-6 h-[18px] ${isMenuOpen ? 'open' : ''}`}>
              <span className={`block w-full h-[2px] bg-[var(--color-text-primary)] rounded-sm transition-all duration-150 ${isMenuOpen ? 'translate-y-[8px] rotate-45 bg-[var(--color-accent)]' : ''}`} />
              <span className={`block w-full h-[2px] bg-[var(--color-text-primary)] rounded-sm transition-all duration-150 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-full h-[2px] bg-[var(--color-text-primary)] rounded-sm transition-all duration-150 ${isMenuOpen ? '-translate-y-[8px] -rotate-45 bg-[var(--color-accent)]' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 bg-black/80 backdrop-blur-[8px] z-40 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={closeMenu} />
      <div className={`fixed top-0 right-0 w-full max-w-[320px] h-screen bg-[var(--color-bg-elevated)] z-40 px-4 sm:px-8 pt-24 border-l border-[var(--color-border-accent)] transition-transform duration-[400ms] ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <ul className="flex flex-col gap-2 list-none">
          {navLinks.map((link, i) => (
            <li
              key={link.href}
              className={`transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'}`}
              style={{ transitionDelay: isMenuOpen ? `${0.1 + i * 0.05}s` : '0s' }}
            >
              <a
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="block px-4 py-3 text-[var(--color-text-secondary)] no-underline text-lg font-medium rounded-xl hover:text-[var(--color-accent)] hover:bg-[var(--color-accent-subtle)] transition-all duration-150"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
