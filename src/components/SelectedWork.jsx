import { motion } from 'framer-motion'
import resumeData from '../data/resume'

const workItems = resumeData.experience.flatMap((job) =>
  job.highlights
    ? [
        {
          title: job.role,
          meta: `${job.company} - ${job.client} · ${job.duration}`,
          points: job.highlights.slice(0, 3),
        },
      ]
    : job.tracks.map((track) => ({
        title: track.name,
        meta: `${job.company} - ${job.client} · ${job.duration}`,
        points: track.highlights.slice(0, 3),
      })),
)

function SelectedWork() {
  return (
    <section id="selected-work" className="mb-20">
      <div className="mb-10">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-ember-600 dark:text-ember-400">
          Case Highlights
        </p>
        <h2 className="mt-2 font-display text-3xl font-medium text-ink-900 dark:text-night-text md:text-4xl">
          Selected Work
        </h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {workItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            className="group rounded-2xl border border-ink-900/10 bg-white/60 p-6 transition-colors duration-300 hover:border-ember-500/50 dark:border-night-border/40 dark:bg-night-surface/60"
          >
            <span className="font-display text-sm text-ember-600 dark:text-ember-400">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-3 font-display text-xl font-medium leading-snug text-ink-900 dark:text-night-text">
              {item.title}
            </h3>
            <p className="mt-1 text-xs uppercase tracking-wide text-ink-400 dark:text-night-text/50">
              {item.meta}
            </p>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-600 dark:text-night-text/75">
              {item.points.map((point) => (
                <li key={point}>- {point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default SelectedWork
