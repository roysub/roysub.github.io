import { motion } from 'framer-motion'
import resumeData from '../data/resume'

function Education() {
  return (
    <section id="education" className="mb-20">
      <div className="mb-10">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-ember-600 dark:text-ember-400">
          Academics
        </p>
        <h2 className="mt-2 font-display text-3xl font-medium text-ink-900 dark:text-night-text md:text-4xl">
          Education
        </h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {resumeData.education.map((item, index) => (
          <motion.div
            key={item.degree}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="rounded-2xl border border-ink-900/10 bg-white/60 p-6 dark:border-night-border/40 dark:bg-night-surface/60"
          >
            <h3 className="font-display text-lg font-medium leading-snug text-ink-900 dark:text-night-text">
              {item.degree}
            </h3>
            <p className="mt-1 text-sm text-ink-600 dark:text-night-text/70">{item.school}</p>
            <p className="mt-1 text-sm text-ink-400 dark:text-night-text/50">{item.duration}</p>
            {item.inProgress && (
              <span className="mt-3 inline-flex rounded-full border border-ember-500/40 bg-ember-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-ember-600 dark:text-ember-400">
                In Progress
              </span>
            )}
          </motion.div>
        ))}
      </div>

      <div className="mt-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-ember-600 dark:text-ember-400">
          Volunteership
        </p>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {resumeData.volunteership.map((item, index) => (
            <motion.div
              key={`${item.role}-${item.duration}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-2xl border border-ink-900/10 bg-white/60 p-6 dark:border-night-border/40 dark:bg-night-surface/60"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-medium text-ink-900 dark:text-night-text">
                  {item.role}
                </h3>
                <p className="text-sm text-ink-400 dark:text-night-text/50">{item.duration}</p>
              </div>
              <p className="mt-1 text-sm text-ink-600 dark:text-night-text/70">{item.organization}</p>
              {item.highlights.length > 0 && (
                <div className="mt-4 rounded-xl border border-ember-500/25 bg-cream-100/70 p-4 dark:border-ember-400/20 dark:bg-night-raised/60">
                  <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink-700 marker:text-ember-600 dark:text-night-text/80 dark:marker:text-ember-400">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="pl-1">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
