import { ArrowDownToLine, ChevronDown, Mail, MapPin } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import resumeData from '../data/resume'

function LinkedinIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const mapQuery = resumeData.contact.location.replace(/\s*\([^)]*\)\s*/g, '').trim()

const contactChips = [
  { icon: Mail, label: resumeData.contact.email, href: `mailto:${resumeData.contact.email}` },
  {
    icon: MapPin,
    label: resumeData.contact.location,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`,
  },
  { icon: LinkedinIcon, label: 'LinkedIn', href: resumeData.contact.linkedin },
]

function scrollToExperience() {
  document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })
}

function HeroSection() {
  const { scrollY } = useScroll()
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.92])
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0.6])

  return (
    <section id="home" className="relative flex min-h-svh flex-col justify-between">
      <motion.div
        style={{ scale: heroScale, opacity: heroOpacity }}
        className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pb-10 pt-24 sm:pb-16 sm:pt-28"
      >
        <div className="grid w-full items-center gap-6 sm:gap-10 md:grid-cols-12 lg:gap-16">
          {/* Photo column — left on desktop, top on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
            className="mx-auto flex-shrink-0 md:col-span-4 md:mx-0"
          >
            <div className="h-32 w-32 overflow-hidden rounded-2xl border border-ink-900/10 bg-cream-200 shadow-lg dark:border-night-border/40 dark:bg-night-surface sm:h-44 sm:w-44 md:h-56 md:w-56 lg:h-72 lg:w-72 lg:shadow-2xl 2xl:h-[420px] 2xl:w-[420px]">
              {/*
                Crop guide — change the second value in object-[center_X%]:
                - lower % (e.g. 15%)  → shows higher in the photo (more headroom)
                - higher % (e.g. 40%) → shows lower in the photo (less headroom, more chest)
                Horizontal: use left / center / right, or a first % (e.g. object-[45%_30%])
              */}
              <img
                src="/profile-photo.png"
                alt={resumeData.name}
                draggable={false}
                onContextMenu={(event) => event.preventDefault()}
                className="h-full w-full select-none object-cover object-[center_28%] [filter:saturate(70%)]"
              />
            </div>
          </motion.div>

          {/* Text column */}
          <div className="min-w-0 text-center md:col-span-8 md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="space-y-1 md:space-y-2"
            >
              <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink-900 dark:text-night-text sm:text-5xl lg:text-6xl 2xl:text-7xl">
                Hey there, I&apos;m{' '}
                <span className="whitespace-nowrap">
                  Subham <span className="inline-block opacity-100 [filter:saturate(45%)]">👋</span>
                </span>
              </h1>
              <h3 className="font-display text-xl font-bold leading-tight tracking-tight text-ink-900 dark:text-night-text sm:text-2xl lg:text-3xl 2xl:text-4xl">
                Building smart quality engineering
              </h3>
              <h3 className="font-display text-xl font-bold leading-tight tracking-tight text-ink-900 dark:text-night-text sm:text-2xl lg:text-3xl 2xl:text-4xl">
                for global supply chains.
              </h3>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-5 max-w-3xl text-left text-base font-normal leading-relaxed text-ink-600 dark:text-slate-300 sm:mt-8 sm:text-lg md:text-xl"
            >
              Technical Delivery Lead with 6+ years driving large-scale Greenfield and Brownfield WMS
              deployments for top retail brands. Skilled in leading global teams, optimizing ETL workflows,
              and leveraging GenAI to accelerate delivery timelines.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-9 sm:gap-4 md:justify-start"
            >
              <a
                href="/SUBHAM-ROY-RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-6 py-3 text-sm font-medium text-cream-50 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-ember-600 dark:bg-ember-500 dark:text-white dark:hover:bg-ember-400"
              >
                <ArrowDownToLine className="h-4 w-4" />
                Download Resume
              </a>
              <button
                type="button"
                onClick={scrollToExperience}
                className="inline-flex items-center gap-2 rounded-full border border-ink-900/15 px-6 py-3 text-sm font-medium text-ink-900 transition-colors duration-200 hover:border-ember-500 hover:text-ember-600 dark:border-night-border/70 dark:text-night-text dark:hover:border-ember-400 dark:hover:text-ember-400"
              >
                Learn More
                <ChevronDown className="h-4 w-4" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.42 }}
              className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-ink-500 dark:text-night-text/60 sm:mt-6 sm:gap-x-6 md:justify-start"
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
                    target={chip.href.startsWith('http') ? '_blank' : undefined}
                    rel={chip.href.startsWith('http') ? 'noopener noreferrer' : undefined}
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
          </div>
        </div>
      </motion.div>

      {/* Bottom-of-viewport scroll cue. Hidden on small screens, where the hero
          runs taller than the viewport and the "Learn More" button already serves this role. */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="hidden justify-center pb-10 sm:flex"
      >
        <motion.button
          type="button"
          onClick={scrollToExperience}
          aria-label="Scroll to experience section"
          whileHover={{ y: 4 }}
          animate={{ y: [0, 8, 0] }}
          transition={{ y: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' } }}
          className="flex flex-col items-center gap-1.5 text-xs font-medium uppercase tracking-[0.2em] text-ink-500 transition-colors duration-200 hover:text-ember-600 dark:text-night-text/60 dark:hover:text-ember-400"
        >
          See My Journey
          <ChevronDown className="h-5 w-5" />
        </motion.button>
      </motion.div>
    </section>
  )
}

export default HeroSection
