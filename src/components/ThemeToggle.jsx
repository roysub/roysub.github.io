import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      className="relative flex h-9 w-16 items-center rounded-full border border-ink-900/15 bg-cream-100 px-1 transition-colors duration-300 dark:border-night-border/50 dark:bg-night-surface"
    >
      <Sun className="pointer-events-none absolute left-1.5 h-4 w-4 text-ember-500 opacity-90" />
      <Moon className="pointer-events-none absolute right-1.5 h-4 w-4 text-cream-100/70" />
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 32 }}
        className="z-10 flex h-7 w-7 items-center justify-center rounded-full bg-ink-900 shadow-sm dark:bg-night-text"
        style={{ marginLeft: isDark ? '28px' : '0px' }}
      >
        {isDark ? (
          <Moon className="h-3.5 w-3.5 text-ink-900" />
        ) : (
          <Sun className="h-3.5 w-3.5 text-ember-500" />
        )}
      </motion.span>
    </button>
  )
}

export default ThemeToggle
