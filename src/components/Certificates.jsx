import { motion } from 'framer-motion'
import resumeData from '../data/resume'

function Certificates() {
  return (
    <section id="certificates" className="scroll-mt-24 mb-16">
      <div className="mb-10">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-ember-600 dark:text-ember-400">
          Credentials
        </p>
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
            <div className="flex items-center gap-2">
              <span className="font-display text-sm text-ember-600 dark:text-ember-400">
                {String(index + 1).padStart(2, '0')}
              </span>
              {cert.isNew && (
                <span className="rounded-full border border-ember-500/40 bg-ember-500/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-ember-600 dark:text-ember-400">
                  New
                </span>
              )}
            </div>
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
