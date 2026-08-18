import { useEffect, useState } from 'react'
import { ThemeContext } from './useTheme'

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light'
  const stored = window.localStorage.getItem('theme')
  if (stored === 'dark' || stored === 'light') return stored
  // First-time visitor with no saved preference: default by local time of day —
  // AM (before noon) opens in Light Mode, PM (noon or later) opens in Dark Mode.
  const isAfternoonOrEvening = new Date().getHours() >= 12
  return isAfternoonOrEvening ? 'dark' : 'light'
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    window.localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}
