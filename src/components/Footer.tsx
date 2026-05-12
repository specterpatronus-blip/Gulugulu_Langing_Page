import { useEffect, useRef } from 'react'
import Hls from 'hls.js'
import { gsap } from 'gsap'
import { ArrowUpRight } from 'lucide-react'

const Footer = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)

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
    const marquee = marqueeRef.current
    if (!marquee) return

    gsap.to(marquee, {
      xPercent: -50,
      duration: 40,
      ease: "none",
      repeat: -1
    })
  }, [])

  return (
    <footer className="relative bg-bg pt-16 sm:pt-24 pb-8 sm:pb-12 overflow-hidden">
      {/* Background Video (Flipped) */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 opacity-30 scale-y-[-1]"
        />
        <div className="absolute inset-0 bg-bg/80" />
      </div>

      <div className="relative z-10 px-5 sm:px-6">
        {/* Marquee */}
        <div className="w-full overflow-hidden whitespace-nowrap mb-16 sm:mb-24 md:mb-32">
          <div ref={marqueeRef} className="inline-block text-[12vw] sm:text-[10vw] font-display italic text-text-primary/10 tracking-tighter uppercase leading-none">
            CONOCIMIENTO LOCAL • EDUCACIÓN GLOBAL • CONOCIMIENTO LOCAL • EDUCACIÓN GLOBAL • CONOCIMIENTO LOCAL • 
            CONOCIMIENTO LOCAL • EDUCACIÓN GLOBAL • CONOCIMIENTO LOCAL • EDUCACIÓN GLOBAL • CONOCIMIENTO LOCAL • 
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center mb-16 sm:mb-24 md:mb-32 px-2">
          <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-display text-text-primary mb-8 sm:mb-12 leading-tight">
            Convierte tu red local en <span className="italic">una biblioteca infinita</span>
          </h2>
          
          <a 
            href="mailto:contacto@gulugulu.edu"
            className="group relative rounded-full px-8 sm:px-10 py-4 sm:py-5 bg-surface/50 backdrop-blur-md border border-stroke transition-all duration-300 hover:scale-105 active:scale-[0.98] w-full sm:w-auto inline-flex justify-center"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute -inset-[1.5px] rounded-full accent-gradient animate-gradient-shift" />
            </div>
            <div className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
              <span className="text-sm sm:text-lg font-medium text-text-primary">Inicia tu Transformación Hoy</span>
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0" />
            </div>
          </a>
        </div>

        {/* Footer Bar */}
        <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-6 sm:gap-8 pt-8 sm:pt-12 border-t border-stroke">
          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <button onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})} className="text-[10px] sm:text-xs text-muted hover:text-text-primary transition-colors tracking-widest uppercase">Nosotros</button>
            <a href="#" className="text-[10px] sm:text-xs text-muted hover:text-text-primary transition-colors tracking-widest uppercase">Privacidad</a>
            <a href="#" className="text-[10px] sm:text-xs text-muted hover:text-text-primary transition-colors tracking-widest uppercase">Términos</a>
            <a href="#" className="text-[10px] sm:text-xs text-muted hover:text-text-primary transition-colors tracking-widest uppercase">Contacto</a>
          </div>

          {/* Status */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse shadow-[0_0_10px_rgba(137,170,204,0.5)]" />
            <span className="text-[10px] sm:text-xs text-muted uppercase tracking-[0.15em] sm:tracking-[0.2em]">Listo para implementar</span>
          </div>

          {/* Copyright */}
          <div className="text-[9px] sm:text-[10px] text-muted uppercase tracking-[0.2em] sm:tracking-[0.3em]">
            © 2026 Gulugulu. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
