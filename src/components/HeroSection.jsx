import { ArrowDownToLine, FolderKanban } from 'lucide-react'
import { motion } from 'framer-motion'

function HeroSection() {
  return (
    <section className="mb-16 rounded-2xl border border-white/10 bg-white/5 px-6 py-12 md:px-10">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="text-sm uppercase tracking-[0.2em] text-automation-cyan"
      >
        Professional Portfolio
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.08 }}
        className="mt-3 text-4xl font-bold text-white md:text-6xl"
      >
        Lead QA Analyst & Automation Engineer.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.16 }}
        className="mt-5 max-w-3xl text-lg text-slate-300"
      >
        Specializing in Supply Chain WMS, Data Integrity, and AI-Driven Testing.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.24 }}
        className="mt-8 flex flex-wrap gap-4"
      >
        <a
          href="/SUBHAM-ROY-RESUME.pdf"
          className="inline-flex items-center gap-2 rounded-lg border border-automation-cyan/60 bg-automation-cyan/10 px-5 py-3 font-medium text-white shadow-[0_0_20px_rgba(14,165,233,0.28)] transition-all duration-200 hover:bg-automation-cyan/20 hover:shadow-[0_0_26px_rgba(14,165,233,0.4)]"
        >
          <ArrowDownToLine className="h-4 w-4 text-automation-cyan" />
          Download Resume
        </a>
        <a
          href="#automation-projects"
          className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-3 font-medium text-slate-100 shadow-[0_0_18px_rgba(148,163,184,0.16)] transition-all duration-200 hover:border-automation-cyan/50 hover:text-white hover:shadow-[0_0_24px_rgba(14,165,233,0.26)]"
        >
          <FolderKanban className="h-4 w-4 text-automation-cyan" />
          View Projects
        </a>
      </motion.div>
    </section>
  )
}

export default HeroSection
