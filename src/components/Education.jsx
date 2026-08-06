import { motion } from 'framer-motion'
import resumeData from '../data/resume'

function Education() {
  return (
    <section id="education" className="mb-20">
      <div className="mb-10">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-ember-600 dark:text-ember-400">
          Academics
        </p>
        <h2 className="mt-2 font-display text-3xl font-medium text-ink-900 dark:text-cream-50 md:text-4xl">
          Education
        </h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {resumeData.education.map((item, index) => (
          <motion.div
            key={item.school}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            className="rounded-2xl border border-ink-900/10 bg-white/60 p-6 dark:border-cream-100/10 dark:bg-ink-800/60"
          >
            <h3 className="font-display text-lg font-medium leading-snug text-ink-900 dark:text-cream-50">
              {item.degree}
            </h3>
            <p className="mt-1 text-sm text-ink-600 dark:text-cream-100/70">{item.school}</p>
            <p className="mt-1 text-sm text-ink-400 dark:text-cream-100/50">{item.duration}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Education
