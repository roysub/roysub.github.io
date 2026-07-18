import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ExperienceTimeline from './components/ExperienceTimeline'

function App() {
  return (
    <div className="min-h-screen bg-automation-slate">
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-12">
        <HeroSection />

        <ExperienceTimeline />

        <section id="automation-projects" className="mb-10 rounded-xl border border-white/10 p-6">
          <h2 className="text-2xl font-semibold text-white">Automation Projects</h2>
          <p className="mt-3 text-slate-300">Section scaffold ready for API and test frameworks.</p>
        </section>

        <section id="technical-skills" className="rounded-xl border border-white/10 p-6">
          <h2 className="text-2xl font-semibold text-white">Technical Skills</h2>
          <p className="mt-3 text-slate-300">Section scaffold ready for categorized skill tags.</p>
        </section>
      </main>
    </div>
  )
}

export default App
