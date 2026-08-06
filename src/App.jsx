import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ExperienceTimeline from './components/ExperienceTimeline'
import SelectedWork from './components/SelectedWork'
import TechnicalSkills from './components/TechnicalSkills'
import Education from './components/Education'
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-cream-50 transition-colors duration-300 dark:bg-ink-900">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-12">
        <HeroSection />
        <ExperienceTimeline />
        <SelectedWork />
        <TechnicalSkills />
        <Education />
      </main>
      <Footer />
    </div>
  )
}

export default App
