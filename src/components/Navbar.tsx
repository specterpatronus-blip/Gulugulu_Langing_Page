import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
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
  const [mobileOpen, setMobileOpen] = useState(false)

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
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const scrollToSection = (id: string, name: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveTab(name)
      setMobileOpen(false)
    }
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
        {/* ── Desktop Pill Nav ── */}
        <div className={cn(
          "hidden md:inline-flex items-center rounded-full backdrop-blur-md border border-stroke/20 bg-surface/80 px-2 py-2 transition-all duration-300",
          scrolled && "shadow-lg shadow-black/5 border-stroke/50"
        )}>
          {/* Logo */}
          <div 
            onClick={() => scrollToSection('hero', 'Inicio')}
            className="group relative w-10 h-10 flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110 ml-2"
          >
            <img src="/static/images/icono.png" alt="Logo" className="w-8 h-8 object-contain" />
          </div>

          <div className="w-px h-5 bg-stroke mx-2" />

          {/* Links */}
          <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id, link.name)}
                className={cn(
                  "text-sm rounded-full px-4 py-2 transition-all duration-300 relative",
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
          <button className="group relative text-sm rounded-full px-4 py-2 transition-all duration-300">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute -inset-[1px] rounded-full accent-gradient animate-gradient-shift" />
            </div>
            <div className="relative z-10 flex items-center gap-1.5 bg-surface rounded-full px-1.5">
              <span className="ml-2">Solicitar Demo</span>
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </button>
        </div>

        {/* ── Mobile Top Bar ── */}
        <div className={cn(
          "md:hidden flex items-center justify-between w-full rounded-2xl backdrop-blur-md border border-stroke/20 bg-surface/80 px-4 py-3 transition-all duration-300",
          scrolled && "shadow-lg shadow-black/5 border-stroke/50"
        )}>
          <div 
            onClick={() => scrollToSection('hero', 'Inicio')}
            className="flex items-center gap-2.5 cursor-pointer"
          >
            <img src="/static/images/icono.png" alt="Logo" className="w-7 h-7 object-contain" />
            <span className="text-sm font-logo font-bold text-text-primary tracking-tight">Gulugulu</span>
          </div>

          <button 
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-surface/60 border border-stroke/30 text-text-primary active:scale-95 transition-transform"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-[72px] left-4 right-4 z-50 md:hidden rounded-2xl bg-surface/95 backdrop-blur-xl border border-stroke/30 shadow-2xl shadow-black/10 overflow-hidden"
            >
              <div className="flex flex-col p-4 gap-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    onClick={() => scrollToSection(link.id, link.name)}
                    className={cn(
                      "flex items-center gap-3 text-left text-base rounded-xl px-4 py-3 transition-all duration-200 active:scale-[0.98]",
                      activeTab === link.name
                        ? "bg-accent/10 text-accent font-medium"
                        : "text-muted hover:text-text-primary hover:bg-surface/60"
                    )}
                  >
                    {activeTab === link.name && (
                      <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    )}
                    <span>{link.name}</span>
                  </motion.button>
                ))}

                <div className="h-px bg-stroke/30 my-2" />

                <motion.button
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.3 }}
                  onClick={() => { window.open('https://wa.me/your-number', '_blank'); setMobileOpen(false) }}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-accent text-white text-sm font-medium active:scale-[0.98] transition-transform"
                >
                  <span>Solicitar Demo</span>
                  <ArrowUpRight size={16} />
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
