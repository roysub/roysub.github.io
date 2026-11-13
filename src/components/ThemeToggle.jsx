import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../context/useTheme'

function ThemeToggle() {
  const { theme, toggleTheme, useAutomaticTheme, isAutomatic } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div className="flex shrink-0 items-center gap-2">
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        aria-pressed={isDark}
        className="relative flex h-9 w-16 items-center rounded-full border border-ink-900/15 bg-cream-100 px-1 transition-colors duration-300 dark:border-night-border/50 dark:bg-night-surface"
      >
        <Sun className="pointer-events-none absolute left-1.5 h-4 w-4 text-ember-500 opacity-90" />
        <Moon className="pointer-events-none absolute right-1.5 h-4 w-4 text-ember-600/60 dark:text-ember-400/80" />
        <motion.span
          layout
          animate={{ x: isDark ? 28 : 0 }}
          transition={{ type: 'spring', stiffness: 500, damping: 32 }}
          className="z-10 flex h-7 w-7 items-center justify-center rounded-full bg-ink-900 shadow-sm dark:bg-night-text"
        >
          {isDark ? (
            <Moon className="h-3.5 w-3.5 text-ink-900" />
          ) : (
            <Sun className="h-3.5 w-3.5 text-ember-500" />
          )}
        </motion.span>
      </button>
      <button
        type="button"
        onClick={useAutomaticTheme}
        aria-label="Use automatic theme: light from 6 a.m. to 6 p.m., dark otherwise"
        aria-pressed={isAutomatic}
        title="Light from 6 a.m. to 6 p.m.; dark otherwise"
        className={`rounded-full border px-2.5 py-1.5 text-xs font-medium transition-colors ${
          isAutomatic
            ? 'border-ember-500/50 text-ember-700 dark:border-ember-400/50 dark:text-ember-300'
            : 'border-ink-900/15 text-ink-500 hover:text-ink-900 dark:border-night-border/50 dark:text-night-text/60 dark:hover:text-night-text'
        }`}
      >
        Auto
      </button>
    </div>
  )
}

export default ThemeToggle
