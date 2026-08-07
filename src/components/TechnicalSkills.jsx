import { motion } from 'framer-motion'
import resumeData from '../data/resume'

const groups = [
  { key: 'programManagement', label: 'Program & Project Management' },
  { key: 'supplyChain', label: 'Supply Chain & WMS' },
  { key: 'dataAndProgramming', label: 'Data & Programming' },
  { key: 'toolsAndAI', label: 'Tools & AI' },
]

function TechnicalSkills() {
  return (
    <section id="technical-skills" className="mb-16">
      <div className="mb-10">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-ember-600 dark:text-ember-400">
          Toolkit
        </p>
        <h2 className="mt-2 font-display text-3xl font-medium text-ink-900 dark:text-night-text md:text-4xl">
          Technical Skills
        </h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map((group, index) => (
          <motion.div
            key={group.key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            className="rounded-2xl border border-ink-900/10 bg-white/60 p-6 dark:border-night-border/40 dark:bg-night-surface/60"
          >
            <h3 className="font-display text-lg font-medium text-ink-900 dark:text-night-text">
              {group.label}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {resumeData.skills[group.key].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-ink-900/10 bg-cream-100/70 px-3 py-1 text-xs font-medium text-ink-700 dark:border-night-border/40 dark:bg-night/50 dark:text-night-text/80"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default TechnicalSkills
