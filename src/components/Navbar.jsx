import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Award, Briefcase, Cpu, GraduationCap } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const links = [
  { label: 'Experience', href: '#experience', icon: Briefcase },
  { label: 'Skills', href: '#technical-skills', icon: Cpu },
  { label: 'Education', href: '#education', icon: GraduationCap },
  { label: 'Certificates', href: '#certificates', icon: Award },
]

const EASTERN_TZ = 'America/New_York'

function formatClock(date, timeZone) {
  return new Intl.DateTimeFormat('en-US', {
    timeZone,
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).format(date)
}

function easternAbbrev(date) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: EASTERN_TZ,
    timeZoneName: 'short',
  }).formatToParts(date)
  return parts.find((part) => part.type === 'timeZoneName')?.value ?? 'ET'
}

/** Offset from UTC in minutes for a given IANA timezone at `date`. */
function offsetMinutes(date, timeZone) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(date)

  const get = (type) => parts.find((part) => part.type === type)?.value
  const asUtc = Date.UTC(
    Number(get('year')),
    Number(get('month')) - 1,
    Number(get('day')),
    Number(get('hour')),
    Number(get('minute')),
    Number(get('second')),
  )
  return (asUtc - date.getTime()) / 60000
}

function describeOffset(visitorAheadOfEasternMinutes) {
  const hours = Math.round(visitorAheadOfEasternMinutes / 60)
  if (hours === 0) return 'Same timezone as me'
  if (hours > 0) return `${hours}h ahead of me`
  return `${Math.abs(hours)}h behind me`
}

function TimezoneCompare() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 30_000)
    return () => window.clearInterval(id)
  }, [])

  const easternLabel = easternAbbrev(now)
  const easternTime = formatClock(now, EASTERN_TZ)
  const localTime = formatClock(now, undefined)

  const visitorOffset = -now.getTimezoneOffset()
  const easternOffset = offsetMinutes(now, EASTERN_TZ)
  const relation = describeOffset(visitorOffset - easternOffset)

  return (
    <a
      href="#"
      aria-label={`My time ${easternLabel} ${easternTime}. Your local time ${localTime}. ${relation}.`}
      className="group flex min-w-0 flex-col gap-0.5 no-underline"
    >
      <span className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ember-600 dark:text-ember-400">
          My time · {easternLabel}
        </span>
        <span className="font-display text-base font-medium tracking-tight text-ink-900 dark:text-night-text sm:text-lg">
          {easternTime}
        </span>
      </span>
      <span className="flex flex-wrap items-baseline gap-x-1.5 text-xs text-ink-500 dark:text-night-text/55">
        <span>Your local</span>
        <span className="font-medium text-ink-700 dark:text-night-text/80">{localTime}</span>
        <span className="text-ember-600/90 dark:text-ember-400/90">· {relation}</span>
      </span>
    </a>
  )
}

const BASE_SIZE = 40
const PEAK_SCALE = 1.55
const MAGNIFY_RADIUS = 110

function DockIcon({ mouseX, label, href, icon: Icon }) {
  const ref = useRef(null)
  const [hovered, setHovered] = useState(false)

  const distance = useTransform(mouseX, (value) => {
    const bounds = ref.current?.getBoundingClientRect()
    if (!bounds) return MAGNIFY_RADIUS
    return value - (bounds.left + bounds.width / 2)
  })

  const scaleTarget = useTransform(distance, [-MAGNIFY_RADIUS, 0, MAGNIFY_RADIUS], [1, PEAK_SCALE, 1])
  const scale = useSpring(scaleTarget, { mass: 0.15, stiffness: 300, damping: 20 })

  return (
    <li className="relative z-10 flex flex-col items-center overflow-visible">
      <a
        ref={ref}
        href={href}
        aria-label={label}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        style={{ height: BASE_SIZE, width: BASE_SIZE }}
        className="flex items-center justify-center"
      >
        <motion.span
          style={{ scale }}
          className="flex h-full w-full items-center justify-center rounded-full text-ink-600 transition-colors duration-200 hover:text-ember-600 dark:text-night-text/70 dark:hover:text-ember-400"
        >
          <Icon className="h-5 w-5" />
        </motion.span>
      </a>
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, y: -4, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.92 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="pointer-events-none absolute top-full z-20 mt-2 whitespace-nowrap rounded-md bg-ink-900 px-2.5 py-1 text-xs font-medium text-cream-50 shadow-lg dark:bg-night-surface dark:text-night-text"
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </li>
  )
}

function DockNav() {
  const mouseX = useMotionValue(Infinity)

  return (
    <ul
      onMouseMove={(event) => mouseX.set(event.clientX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="hidden items-end gap-5 sm:flex"
    >
      {links.map((link) => (
        <DockIcon key={link.href} mouseX={mouseX} {...link} />
      ))}
    </ul>
  )
}

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-30 border-b border-ink-900/10 bg-cream-50/90 backdrop-blur-sm dark:border-night-border/40 dark:bg-night/90"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3.5">
        <TimezoneCompare />
        <div className="flex shrink-0 items-center gap-8">
          <DockNav />
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
