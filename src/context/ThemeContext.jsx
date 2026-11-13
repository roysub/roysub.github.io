import { useEffect, useState } from 'react'
import { ThemeContext } from './useTheme'
import { getAutomaticTheme } from './themeSchedule'

function getInitialPreference() {
  if (typeof window === 'undefined') return 'auto'
  const stored = window.localStorage.getItem('theme')
  return stored === 'dark' || stored === 'light' ? stored : 'auto'
}

export function ThemeProvider({ children }) {
  const [preference, setPreference] = useState(getInitialPreference)
  const [now, setNow] = useState(() => new Date())
  const theme = preference === 'auto' ? getAutomaticTheme(now) : preference

  useEffect(() => {
    if (preference !== 'auto') return undefined

    const id = window.setInterval(() => setNow(new Date()), 60_000)
    return () => window.clearInterval(id)
  }, [preference])

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const toggleTheme = () => {
    const nextPreference = theme === 'dark' ? 'light' : 'dark'
    window.localStorage.setItem('theme', nextPreference)
    setPreference(nextPreference)
  }

  const useAutomaticTheme = () => {
    window.localStorage.setItem('theme', 'auto')
    setPreference('auto')
    setNow(new Date())
  }

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, useAutomaticTheme, isAutomatic: preference === 'auto' }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
