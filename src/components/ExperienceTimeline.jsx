import { motion } from 'framer-motion'
import { Bot, Database, ShieldCheck, Truck } from 'lucide-react'
import resumeData from '../data/resume'

const iconByIndex = [Truck, Database, Bot, ShieldCheck]

function ExperienceTimeline() {
  return (
    <section id="experience" className="mb-10">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.2em] text-automation-cyan">Career Timeline</p>
        <h2 className="mt-2 text-3xl font-semibold text-white">Experience</h2>
      </div>

      <div className="relative space-y-6 pl-8 before:absolute before:bottom-0 before:left-2 before:top-0 before:w-px before:bg-gradient-to-b before:from-automation-cyan/70 before:to-white/10">
        {resumeData.experience.map((job, index) => {
          const Icon = iconByIndex[index % iconByIndex.length]
          const isLeadLululemon = index === 0

          return (
            <motion.article
              key={`${job.role}-${job.duration}`}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="relative rounded-xl border border-white/10 bg-white/5 p-5"
            >
              <span className="absolute -left-[2.1rem] top-6 flex h-7 w-7 items-center justify-center rounded-full border border-automation-cyan/60 bg-automation-slate shadow-[0_0_14px_rgba(14,165,233,0.3)]">
                <Icon className="h-4 w-4 text-automation-cyan" />
              </span>

              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-xl font-semibold text-white">{job.role}</h3>
                {isLeadLululemon && (
                  <span className="rounded-full border border-automation-cyan/40 bg-automation-cyan/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-automation-cyan">
                    Lululemon Highlight
                  </span>
                )}
              </div>

              <p className="mt-1 text-sm text-slate-300">
                {job.company} - {job.client}
              </p>
              <p className="text-sm text-slate-400">
                {job.location} | {job.duration}
              </p>

              {job.highlights ? (
                <ul className="mt-4 space-y-2 text-sm text-slate-200">
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
                      className="rounded-lg border border-white/10 bg-automation-slate/40 p-4"
                    >
                      <h4 className="text-sm font-semibold uppercase tracking-wide text-automation-cyan">
                        {track.name}
                      </h4>
                      <ul className="mt-2 space-y-2 text-sm text-slate-200">
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
