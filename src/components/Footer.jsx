import resumeData from '../data/resume'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ink-900/10 py-8 dark:border-night-border/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-ink-400 dark:text-night-text/50 sm:flex-row">
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
    </footer>
  )
}

export default Footer
