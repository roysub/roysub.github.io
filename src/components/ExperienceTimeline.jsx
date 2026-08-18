import { motion } from 'framer-motion'
import resumeData from '../data/resume'

/** Renders highlight text with **keyword** segments as bold. */
function HighlightText({ text }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={index} className="font-semibold text-ink-900 dark:text-night-text">
              {part.slice(2, -2)}
            </strong>
          )
        }
        return <span key={index}>{part}</span>
      })}
    </>
  )
}

function ExperienceTimeline() {
  return (
    <section id="experience" className="pt-20 mb-20">
      <div className="mb-10">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-ember-600 dark:text-ember-400">
          Career Timeline
        </p>
        <h2 className="mt-2 font-display text-3xl font-medium text-ink-900 dark:text-night-text md:text-4xl">
          Experience
        </h2>
      </div>

      <div className="relative space-y-8 pl-8 before:absolute before:bottom-1 before:left-3 before:top-1 before:w-px before:bg-ink-900/10 before:dark:bg-night-border/40 sm:pl-10">
        {resumeData.experience.map((job, index) => {
          const isCurrentRole = index === 0

          return (
            <motion.article
              key={`${job.role}-${job.duration}`}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="relative rounded-2xl border border-ink-900/10 bg-white/60 p-5 shadow-sm transition-colors duration-300 dark:border-night-border/40 dark:bg-night-surface/60 sm:p-6"
            >
              <span className="absolute -left-8 top-6 flex h-7 w-7 items-center justify-center rounded-full border border-ember-500/50 bg-cream-50 font-display text-xs font-medium text-ember-600 dark:bg-night dark:text-ember-400 sm:-left-10">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-display text-xl font-medium text-ink-900 dark:text-night-text">
                  {job.role}
                </h3>
                {isCurrentRole && (
                  <span className="rounded-full border border-ember-500/40 bg-ember-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-ember-600 dark:text-ember-400">
                    Current Role
                  </span>
                )}
              </div>

              <p className="mt-1 text-sm text-ink-600 dark:text-night-text/70">
                {job.company} - {job.client}
              </p>
              <p className="text-sm text-ink-400 dark:text-night-text/50">
                {job.location} | {job.duration}
              </p>

              {job.highlights ? (
                <div className="mt-4 rounded-xl border border-ember-500/25 bg-cream-100/70 p-3.5 dark:border-ember-400/20 dark:bg-night-raised/60 sm:p-4">
                  <ul className="list-disc space-y-2 pl-4 text-sm text-ink-700 marker:text-ember-600 dark:text-night-text/80 dark:marker:text-ember-400 sm:pl-5">
                    {job.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="leading-relaxed pl-1">
                        <HighlightText text={highlight} />
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="mt-4 space-y-4">
                  {job.tracks.map((track) => (
                    <div
                      key={track.name}
                      className="rounded-xl border border-ember-500/25 bg-cream-100/70 p-3.5 dark:border-ember-400/20 dark:bg-night-raised/60 sm:p-4"
                    >
                      <h4 className="text-sm font-semibold uppercase tracking-wide text-ember-600 dark:text-ember-400">
                        {track.name}
                      </h4>
                      <ul className="mt-2 list-disc space-y-2 pl-4 text-sm text-ink-700 marker:text-ember-600 dark:text-night-text/80 dark:marker:text-ember-400 sm:pl-5">
                        {track.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="leading-relaxed pl-1">
                            <HighlightText text={highlight} />
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
