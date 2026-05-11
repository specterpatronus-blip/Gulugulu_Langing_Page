import { useEffect, useRef } from 'react'
import Hls from 'hls.js'
import { gsap } from 'gsap'
import { FlipFadeText } from './ui/FlipFadeText'

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const hlsUrl = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8"

    if (Hls.isSupported()) {
      const hls = new Hls()
      hls.loadSource(hlsUrl)
      hls.attachMedia(video)
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = hlsUrl
    }
  }, [])


  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background entrance
      gsap.fromTo(".hero-bg-animate", 
        { opacity: 0, scale: 1.1, filter: "blur(20px)" },
        { opacity: 1, scale: 1, filter: "blur(0px)", duration: 2.2, ease: "power2.out" }
      )

      gsap.to(".name-reveal", {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 0.5,
        ease: "power3.out"
      })

      gsap.to(".blur-in", {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 1,
        stagger: 0.1,
        delay: 0.8,
        ease: "power3.out"
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="hero" ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 hero-bg-animate">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 opacity-60"
        />
        <div className="absolute inset-0 bg-bg/60" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <span className="blur-in block text-xs text-muted uppercase tracking-[0.3em] mb-8">
          LA REVOLUCIÓN DEL APRENDIZAJE
        </span>

        {/* Title with blue Gulu + white gulu + glow halo */}
        <div className="name-reveal relative mb-6">
          {/* Pulsing glow halo behind title */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-accent/30 blur-[80px] animate-pulse" />
          </div>
          <h1 className="relative text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight">
            <span className="hero-shimmer text-accent">Gulu</span>
            <span className="text-text-primary">gulu</span>
          </h1>
        </div>

        {/* FlipFadeText role cycling — VengeanceUI */}
        <div className="blur-in mb-6">
          <p className="text-lg md:text-xl text-muted mb-2">Un ecosistema de aprendizaje</p>
          <FlipFadeText
            words={["Seguro", "Privado", "Autónomo", "Local"]}
            interval={2200}
            letterDuration={0.5}
            staggerDelay={0.08}
            exitStaggerDelay={0.04}
            textClassName="text-2xl md:text-4xl font-display italic tracking-wide text-accent justify-center"
            className="min-h-[48px]"
          />
        </div>

        <p className="blur-in text-sm md:text-base text-muted max-w-lg mx-auto mb-12 leading-relaxed">
          El buscador privado y offline guiado por <span className="hero-shimmer text-accent font-semibold">Gulu</span> que transforma tu institución. Todo el conocimiento del mundo, bajo tu control.
        </p>

        <div className="blur-in flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => window.open('https://wa.me/your-number', '_blank')}
            className="group relative rounded-full text-sm px-7 py-3.5 transition-all duration-300 hover:scale-105 bg-accent text-white hover:bg-accent/90"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute -inset-[1.5px] rounded-full accent-gradient animate-gradient-shift" />
            </div>
            <span className="relative z-10 font-medium">Agenda una Demo</span>
          </button>

          <button
            onClick={() => scrollToSection('pricing')}
            className="group relative rounded-full text-sm px-7 py-3.5 transition-all duration-300 hover:scale-105 border-2 border-stroke bg-bg text-text-primary hover:border-transparent"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute -inset-[1.5px] rounded-full accent-gradient animate-gradient-shift" />
            </div>
            <span className="relative z-10 font-medium">Ver Planes</span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        onClick={() => scrollToSection('features')}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer group"
      >
        <span className="text-[10px] text-muted uppercase tracking-[0.2em] group-hover:text-text-primary transition-colors">Descubrelo</span>
        <div className="w-px h-10 bg-stroke relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full accent-gradient animate-scroll-down" />
        </div>
      </div>
    </section>
  )
}

export default Hero
