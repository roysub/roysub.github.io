import { motion } from 'framer-motion'
import resumeData from '../data/resume'

function Certificates() {
  return (
    <section id="certificates" className="mb-16">
      <div className="mb-10">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-ember-600 dark:text-ember-400">
          Credentials
        </p>
        <h2 className="mt-2 font-display text-3xl font-medium text-ink-900 dark:text-night-text md:text-4xl">
          Certificates
        </h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {resumeData.certificates.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="rounded-2xl border border-ink-900/10 bg-white/60 p-6 dark:border-night-border/40 dark:bg-night-surface/60"
          >
            <span className="font-display text-sm text-ember-600 dark:text-ember-400">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-2 font-display text-lg font-medium leading-snug text-ink-900 dark:text-night-text">
              {cert.title}
            </h3>
            <p className="mt-1 text-sm text-ink-600 dark:text-night-text/70">{cert.issuer}</p>
            <p className="mt-1 text-sm text-ink-400 dark:text-night-text/50">
              Issued {cert.issued}
              {cert.expires ? ` · Expires ${cert.expires}` : ''}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Certificates
