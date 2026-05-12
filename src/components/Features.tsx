import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

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
    // Only enable parallax pinning on desktop (md+)
    const mm = gsap.matchMedia()

    mm.add("(min-width: 768px)", () => {
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
    })

    // Mobile: no pinning, simpler layout
    mm.add("(max-width: 767px)", () => {
      // No-op — just let it flow naturally
    })

    return () => mm.revert()
  }, [])

  return (
    <section ref={sectionRef} id="features" className="relative md:min-h-[300vh] bg-bg overflow-hidden">
      {/* Pinned Center Header — pinned on desktop, static on mobile */}
      <div ref={contentRef} className="md:absolute md:inset-0 md:w-full md:h-screen flex flex-col items-center justify-center z-0 pointer-events-none py-20 md:py-0">
        <div className="w-full max-w-4xl px-5 sm:px-6 text-center pointer-events-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-[7rem] text-text-primary mb-6 sm:mb-8 flex flex-wrap justify-center items-center gap-x-3 sm:gap-x-4 md:gap-x-6">
            <span className="font-body font-medium tracking-tight">Aprender</span>
            <span className="font-display italic font-light tracking-wide md:-mt-4 text-accent hero-shimmer">sin límites</span>
          </h2>
          <div className="flex flex-col items-center gap-6">
            <p className="text-muted text-xs sm:text-sm md:text-base max-w-md mx-auto leading-relaxed px-2">
              No dependas de la infraestructura externa. Gulugulu lleva la biblioteca más grande del mundo directamente a tu salón de clases.
            </p>
          </div>
        </div>
      </div>

      {/* Parallax Gallery — Desktop: 2 columns parallax | Mobile: horizontal scroll */}
      {/* Desktop layout */}
      <div className="hidden md:block max-w-[1400px] mx-auto px-6 h-full relative z-10 pt-[100vh] pb-[20vh] pointer-events-none">
        <div className="grid grid-cols-2 gap-12 md:gap-40 h-full pointer-events-auto">
          {/* Left Column */}
          <div ref={leftColRef} className="flex flex-col items-center gap-32 md:gap-64 mt-[15vh]">
            {explorationItems.filter((_, i) => i % 2 === 0).map((item) => (
              <div
                key={item.id}
                className="group relative aspect-square max-w-[320px] bg-surface rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-105 cursor-pointer"
                style={{ transform: `rotate(${item.rotation})` }}
              >
                <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-100 transition-all duration-500" loading="lazy" />
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
                <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-100 transition-all duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-bg/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-sm font-display italic text-text-primary tracking-wide">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile layout — horizontal scroll gallery */}
      <div className="md:hidden px-5 pb-16 pt-4 relative z-10">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-5 px-5 scrollbar-hide">
          {explorationItems.map((item) => (
            <div
              key={item.id}
              className="group relative flex-shrink-0 w-[72vw] aspect-[4/5] bg-surface rounded-2xl overflow-hidden shadow-xl snap-center"
            >
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
              {/* Always-visible label on mobile */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 z-10">
                <span className="text-sm font-display italic text-white tracking-wide drop-shadow-md">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
        {/* Scroll hint dots */}
        <div className="flex justify-center gap-1.5 mt-3">
          {explorationItems.map((item) => (
            <div key={item.id} className="w-1.5 h-1.5 rounded-full bg-stroke" />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
