import { motion } from 'framer-motion'
import resumeData from '../data/resume'

function ExperienceTimeline() {
  return (
    <section id="experience" className="mb-20">
      <div className="mb-10">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-ember-600 dark:text-ember-400">
          Career Timeline
        </p>
        <h2 className="mt-2 font-display text-3xl font-medium text-ink-900 dark:text-cream-50 md:text-4xl">
          Experience
        </h2>
      </div>

      <div className="relative space-y-8 pl-10 before:absolute before:bottom-1 before:left-3 before:top-1 before:w-px before:bg-ink-900/10 before:dark:bg-cream-100/10">
        {resumeData.experience.map((job, index) => {
          const isCurrentRole = index === 0

          return (
            <motion.article
              key={`${job.role}-${job.duration}`}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="relative rounded-2xl border border-ink-900/10 bg-white/60 p-6 shadow-sm transition-colors duration-300 dark:border-cream-100/10 dark:bg-ink-800/60"
            >
              <span className="absolute -left-10 top-6 flex h-7 w-7 items-center justify-center rounded-full border border-ember-500/50 bg-cream-50 font-display text-xs font-medium text-ember-600 dark:bg-ink-900 dark:text-ember-400">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-display text-xl font-medium text-ink-900 dark:text-cream-50">
                  {job.role}
                </h3>
                {isCurrentRole && (
                  <span className="rounded-full border border-ember-500/40 bg-ember-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-ember-600 dark:text-ember-400">
                    Current Role
                  </span>
                )}
              </div>

              <p className="mt-1 text-sm text-ink-600 dark:text-cream-100/70">
                {job.company} - {job.client}
              </p>
              <p className="text-sm text-ink-400 dark:text-cream-100/50">
                {job.location} | {job.duration}
              </p>

              {job.highlights ? (
                <ul className="mt-4 space-y-2 text-sm text-ink-700 dark:text-cream-100/80">
                  {job.highlights.map((highlight) => (
                    <li key={highlight} className="leading-relaxed">
                      - {highlight}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="mt-4 space-y-4">
                  {job.tracks.map((track) => (
                    <div
                      key={track.name}
                      className="rounded-xl border border-ink-900/10 bg-cream-100/60 p-4 dark:border-cream-100/10 dark:bg-ink-900/40"
                    >
                      <h4 className="text-sm font-semibold uppercase tracking-wide text-ember-600 dark:text-ember-400">
                        {track.name}
                      </h4>
                      <ul className="mt-2 space-y-2 text-sm text-ink-700 dark:text-cream-100/80">
                        {track.highlights.map((highlight) => (
                          <li key={highlight} className="leading-relaxed">
                            - {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}

export default ExperienceTimeline
