import { motion } from 'framer-motion'
import { Bot } from 'lucide-react'

const links = [
  { label: 'Experience', href: '#experience' },
  { label: 'Automation Projects', href: '#automation-projects' },
  { label: 'Technical Skills', href: '#technical-skills' },
]

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="sticky top-0 z-20 border-b border-automation-cyan/30 bg-automation-slate/95 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 text-sm font-semibold tracking-wide">
          <Bot className="h-4 w-4 text-automation-cyan" />
          <span className="text-white">Subham Roy</span>
        </a>
        <ul className="flex items-center gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-slate-300 transition-colors duration-200 hover:text-automation-cyan"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  )
}

export default Navbar
