import { ArrowDownToLine, Mail, MapPin, MoveDown, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import resumeData from '../data/resume'

const lines = [
  { number: '01', text: `Hello, I'm ${resumeData.name.split(' ')[0]}.` },
  { number: '02', text: 'I lead programs' },
  { number: '03', text: 'for supply chain systems.' },
]

const contactChips = [
  { icon: Mail, label: resumeData.contact.email, href: `mailto:${resumeData.contact.email}` },
  { icon: Phone, label: resumeData.contact.phone, href: `tel:${resumeData.contact.phone.replace(/[^+\d]/g, '')}` },
  { icon: MapPin, label: resumeData.contact.location, href: null },
]

function HeroSection() {
  return (
    <section className="mb-20 pt-6 md:pt-14">
      <div className="space-y-1 md:space-y-2">
        {lines.map((line, index) => (
          <motion.div
            key={line.number}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.12, ease: 'easeOut' }}
            className="flex items-baseline gap-3 md:gap-5"
          >
            <span className="font-display text-sm font-medium text-ember-600 dark:text-ember-400 md:text-base">
              {line.number}
            </span>
            <h1 className="font-display text-3xl font-medium leading-[1.1] tracking-tight text-ink-900 dark:text-cream-50 sm:text-5xl md:text-6xl">
              {line.text}
            </h1>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-600 dark:text-cream-100/75"
      >
        {resumeData.summary}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-9 flex flex-wrap items-center gap-4"
      >
        <a
          href="/SUBHAM-ROY-RESUME.pdf"
          className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-6 py-3 text-sm font-medium text-cream-50 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-ember-600 dark:bg-cream-50 dark:text-ink-900 dark:hover:bg-ember-400"
        >
          <ArrowDownToLine className="h-4 w-4" />
          Download Resume
        </a>
        <a
          href="#experience"
          className="inline-flex items-center gap-2 rounded-full border border-ink-900/15 px-6 py-3 text-sm font-medium text-ink-900 transition-colors duration-200 hover:border-ember-500 hover:text-ember-600 dark:border-cream-100/20 dark:text-cream-50 dark:hover:border-ember-400 dark:hover:text-ember-400"
        >
          <MoveDown className="h-4 w-4" />
          See my journey
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.58 }}
        className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-500 dark:text-cream-100/60"
      >
        {contactChips.map((chip) => {
          const Icon = chip.icon
          const content = (
            <>
              <Icon className="h-3.5 w-3.5 text-ember-600 dark:text-ember-400" />
              {chip.label}
            </>
          )
          return chip.href ? (
            <a
              key={chip.label}
              href={chip.href}
              className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-ember-600 dark:hover:text-ember-400"
            >
              {content}
            </a>
          ) : (
            <span key={chip.label} className="inline-flex items-center gap-1.5">
              {content}
            </span>
          )
        })}
      </motion.div>
    </section>
  )
}

export default HeroSection
