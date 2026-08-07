import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import resumeData from '../data/resume'

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ink-900/10 py-10 dark:border-night-border/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6">
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll back to the top of the page"
          whileHover={{ y: -4 }}
          animate={{ y: [0, -8, 0] }}
          transition={{ y: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' } }}
          className="flex flex-col items-center gap-1.5 text-xs font-medium uppercase tracking-[0.2em] text-ink-500 transition-colors duration-200 hover:text-ember-600 dark:text-night-text/60 dark:hover:text-ember-400"
        >
          <ArrowUp className="h-5 w-5" />
          Take me Home
        </motion.button>

        <div className="flex w-full flex-col items-center justify-between gap-3 text-sm text-ink-400 dark:text-night-text/50 sm:flex-row">
          <p>
            © {year} {resumeData.name}
          </p>
          <a
            href={`mailto:${resumeData.contact.email}`}
            className="transition-colors duration-200 hover:text-ember-600 dark:hover:text-ember-400"
          >
            {resumeData.contact.email}
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
