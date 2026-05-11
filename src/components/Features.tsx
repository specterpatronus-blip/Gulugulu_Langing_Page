import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const explorationItems = [
  { id: 1, title: "Búsqueda Veloz", image: "/static/images/shot1.png", rotation: "-8deg" },
  { id: 2, title: "Wiki Offline", image: "/static/images/shot2.png", rotation: "6deg" },
  { id: 3, title: "Sin Anuncios", image: "/static/images/shot3.png", rotation: "-4deg" },
  { id: 4, title: "100% Privado", image: "/static/images/shot4.png", rotation: "9deg" },
  { id: 5, title: "Cero Latencia", image: "/static/images/shot5.png", rotation: "-7deg" },
  { id: 6, title: "Multidispositivo", image: "/static/images/shot6.jpeg", rotation: "5deg" }
]

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const leftColRef = useRef<HTMLDivElement>(null)
  const rightColRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pinning the center content
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: contentRef.current,
        pinSpacing: false
      })

      // Parallax for columns
      gsap.to(leftColRef.current, {
        y: -1000,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      })

      gsap.to(rightColRef.current, {
        y: -1500,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="features" className="relative min-h-[300vh] bg-bg overflow-hidden">
      {/* Pinned Center Header */}
      <div ref={contentRef} className="absolute inset-0 w-full h-screen flex flex-col items-center justify-center z-0 pointer-events-none">
        <div className="w-full max-w-4xl px-6 text-center pointer-events-auto">
          <h2 className="text-5xl md:text-7xl lg:text-[7rem] text-text-primary mb-8 flex flex-wrap justify-center items-center gap-x-4 md:gap-x-6">
            <span className="font-body font-medium tracking-tight">Aprender</span>
            <span className="font-display italic font-light tracking-wide md:-mt-4 text-accent hero-shimmer">sin límites</span>
          </h2>
          <div className="flex flex-col items-center gap-6">
            <p className="text-muted text-sm md:text-base max-w-md mx-auto leading-relaxed">
              No dependas de la infraestructura externa. Gulugulu lleva la biblioteca más grande del mundo directamente a tu salón de clases.
            </p>

          </div>
        </div>
      </div>

      {/* Parallax Gallery */}
      <div className="max-w-[1400px] mx-auto px-6 h-full relative z-10 pt-[100vh] pb-[20vh] pointer-events-none">
        <div className="grid grid-cols-2 gap-12 md:gap-40 h-full pointer-events-auto">
          {/* Left Column */}
          <div ref={leftColRef} className="flex flex-col items-center gap-32 md:gap-64 mt-[15vh]">
            {explorationItems.filter((_, i) => i % 2 === 0).map((item) => (
              <div
                key={item.id}
                className="group relative aspect-square max-w-[320px] bg-surface rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-105 cursor-pointer"
                style={{ transform: `rotate(${item.rotation})` }}
              >
                <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-100 transition-all duration-500" />
                <div className="absolute inset-0 bg-bg/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-sm font-display italic text-text-primary tracking-wide">{item.title}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div ref={rightColRef} className="flex flex-col items-center gap-32 md:gap-64">
            {explorationItems.filter((_, i) => i % 2 !== 0).map((item) => (
              <div
                key={item.id}
                className="group relative aspect-square max-w-[320px] bg-surface rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-105 cursor-pointer"
                style={{ transform: `rotate(${item.rotation})` }}
              >
                <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-100 transition-all duration-500" />
                <div className="absolute inset-0 bg-bg/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-sm font-display italic text-text-primary tracking-wide">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
