import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '../lib/utils'

const navLinks = [
  { name: "Inicio", id: "hero" },
  { name: "Gulu", id: "gulu" },
  { name: "Nosotros", id: "about" },
  { name: "Beneficios", id: "benefits" },
  { name: "Cómo Funciona", id: "architecture" },
  { name: "Planes", id: "pricing" }
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeTab, setActiveTab] = useState("Inicio")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
      
      // Update active tab based on scroll position
      const sections = navLinks.map(link => document.getElementById(link.id))
      const scrollPosition = window.scrollY + 200

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop
          const sectionHeight = section.offsetHeight
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveTab(navLinks[index].name)
          }
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string, name: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveTab(name)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
      <div className={cn(
        "inline-flex items-center rounded-full backdrop-blur-md border border-stroke/20 bg-surface/80 px-2 py-2 transition-all duration-300",
        scrolled && "shadow-lg shadow-black/5 border-stroke/50"
      )}>
        {/* Logo */}
        <div 
          onClick={() => scrollToSection('hero', 'Inicio')}
          className="group relative w-10 h-10 flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110 ml-2"
        >
          <img src="/static/images/icono.png" alt="Logo" className="w-8 h-8 object-contain" />
        </div>

        <div className="hidden md:block w-px h-5 bg-stroke mx-2" />

        {/* Links */}
        <div className="flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id, link.name)}
              className={cn(
                "text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-all duration-300 relative",
                activeTab === link.name ? "text-text-primary" : "text-muted hover:text-text-primary"
              )}
            >
              <span className="relative z-10">{link.name}</span>
              {activeTab === link.name && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-stroke/50 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="w-px h-5 bg-stroke mx-2" />

        {/* CTA */}
        <button className="group relative text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-all duration-300">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute -inset-[1px] rounded-full accent-gradient animate-gradient-shift" />
          </div>
          <div className="relative z-10 flex items-center gap-1.5 bg-surface rounded-full px-1.5">
            <span className="ml-2">Solicitar Demo</span>
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
