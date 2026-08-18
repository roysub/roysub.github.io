import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ExperienceTimeline from './components/ExperienceTimeline'
import TechnicalSkills from './components/TechnicalSkills'
import Education from './components/Education'
import Certificates from './components/Certificates'
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-cream-50 transition-colors duration-300 dark:bg-night">
      <Navbar />
      <HeroSection />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-12 sm:px-6">
        <ExperienceTimeline />
        <TechnicalSkills />
        <Education />
        <Certificates />
      </main>
      <Footer />
    </div>
  )
}

export default App
