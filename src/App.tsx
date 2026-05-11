import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatIsGulugulu from './components/WhatIsGulugulu'
import Architecture from './components/Architecture'
import Benefits from './components/Benefits'
import Features from './components/Features'
import Pricing from './components/Pricing'
import About from './components/About'
import GuluMascot from './components/GuluMascot'
import Footer from './components/Footer'

function App() {
  return (
    <main className="relative min-h-screen bg-bg text-text-primary">
      <Navbar />
      <Hero />
      <WhatIsGulugulu />
      <Features />
      <GuluMascot />
      <About />
      <Architecture />
      <Benefits />
      <Pricing />
      <Footer />
    </main>
  )
}

export default App

