import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

const links = [
  { label: 'Experience', href: '#experience' },
  { label: 'Selected Work', href: '#selected-work' },
  { label: 'Skills', href: '#technical-skills' },
  { label: 'Education', href: '#education' },
]

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="sticky top-0 z-20 border-b border-ink-900/10 bg-cream-50/90 backdrop-blur-sm dark:border-cream-100/10 dark:bg-ink-900/90"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-lg font-semibold tracking-tight">
          Subham Roy
        </a>
        <div className="flex items-center gap-8">
          <ul className="hidden items-center gap-7 sm:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-ink-600 transition-colors duration-200 hover:text-ember-600 dark:text-cream-100/70 dark:hover:text-ember-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
