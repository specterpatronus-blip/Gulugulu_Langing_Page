import { motion } from 'framer-motion'
import { Zap, Shield, Layout, Globe } from 'lucide-react'
import { cn } from '../lib/utils'

const Highlight = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => (
  <span className={cn("relative inline-block whitespace-nowrap", className)}>
    <span className="relative z-10">{children}</span>
    <motion.span
      initial={{ width: 0 }}
      whileInView={{ width: "100%" }}
      transition={{ duration: 0.8, delay: delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="absolute bottom-1 left-0 h-[35%] bg-accent/20 -z-0 rounded-sm"
    />
  </span>
)

const pros = [
  {
    icon: <Globe size={24} className="text-accent" />,
    title: "Internet Local",
    desc: "Toda la potencia de una biblioteca universal, sin la necesidad de una conexión externa."
  },
  {
    icon: <Shield size={24} className="text-accent" />,
    title: "Seguridad Institucional",
    desc: "Control total sobre el contenido. Tu información, tus reglas, cero riesgos externos."
  },
  {
    icon: <Zap size={24} className="text-accent" />,
    title: "Latencia Cero",
    desc: "Acceso instantáneo a videos y archivos pesados. Se acabó el esperar a que cargue."
  },
  {
    icon: <Layout size={24} className="text-accent" />,
    title: "Personalización Total",
    desc: "Adapta la biblioteca al currículo de tu escuela. Información curada y relevante."
  }
]

const WhatIsGulugulu = () => {
  return (
    <section id="what-is" className="bg-bg py-24 md:py-32 relative overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.25)_0,transparent_70%)]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">

        {/* Intro Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Concepto Revolucionario</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display text-text-primary mb-8">
              ¿Qué es <span className="hero-shimmer text-accent italic">Gulu</span><span className="italic">gulu?</span>
            </h2>
            <p className="text-muted text-lg md:text-xl leading-relaxed mb-6">
              Gulugulu es mucho más que un software; es un <span className="hero-shimmer text-accent italic">Buscador Local </span> diseñado para transformar la educación.
            </p>
            <p className="text-muted text-base md:text-lg leading-relaxed">
              Es un ecosistema que permite a cualquier institución educativa acceder al <span className="text-text-primary font-medium">conocimiento universal</span> de forma Offline. Imagina tener la velocidad y seguridad de una red privada con la inmensidad de información de la web, totalmente <span className="hero-shimmer text-accent italic">bajo tu control </span>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Visual Placeholder for Platform Screenshot */}
            <div className="rounded-[40px] overflow-hidden border border-stroke bg-surface/30 backdrop-blur-md shadow-2xl relative">
              <div className="absolute inset-0 accent-gradient opacity-5 group-hover:opacity-10 transition-opacity duration-500" />
              <div className="relative w-full">
                <video
                  src="/static/images/gulugulu_presentacion.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full block"
                />
              </div>

              {/* Floating UI Elements */}

            </div>
          </motion.div>
        </div>

        {/* Benefits/Pros Grid */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-5xl font-display text-text-primary mb-6">
            ¿Por qué <span className="italic">elegirnos?</span>
          </h3>
          <p className="text-muted text-base max-w-2xl mx-auto">
            Hemos resuelto los mayores obstáculos tecnológicos de la educación moderna en un solo lugar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pros.map((pro, i) => (
            <motion.div
              key={pro.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-[32px] bg-surface/20 border border-stroke hover:bg-surface/40 hover:border-accent/30 transition-all duration-500 cursor-default group"
            >
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-500">
                {pro.icon}
              </div>
              <h4 className="text-lg font-medium text-text-primary mb-3 group-hover:text-accent transition-colors">{pro.title}</h4>
              <p className="text-sm text-muted leading-relaxed">{pro.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Closing Conversion Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-32 p-12 md:p-20 rounded-[50px] bg-surface border border-stroke relative overflow-hidden"
        >
          <div className="absolute inset-0 accent-gradient opacity-5" />
          <div className="relative z-10 max-w-3xl">
            <h3 className="text-3xl md:text-5xl font-display text-text-primary mb-8 leading-tight">
              Lo que tu institución <span className="italic">estaba buscando</span>
            </h3>
            <p className="text-muted text-lg mb-10">
              No es solo conectividad; es <span className="text-text-primary font-semibold">autonomía educativa</span>. Con Gulugulu, le das a tus estudiantes la <span className="text-text-primary font-medium italic">libertad de investigar</span> sin miedo al error, sin distracciones y con la <span className="hero-shimmer text-accent italic">informacion personalizada </span> siempre a su alcance.
            </p>
            <button
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 rounded-full bg-text-primary text-bg font-medium hover:scale-105 transition-transform"
            >
              Descubrir los Planes
            </button>
          </div>

          {/* Decorative Gulu in background */}
          <div className="absolute bottom-0 right-0 w-64 h-64 opacity-10 pointer-events-none translate-x-12 translate-y-12">
            <img src="/static/images/icono.png" alt="Gulu BG" className="w-full h-full object-contain rotate-12" />
          </div>
        </motion.div>

      </div>
    </section >
  )
}

export default WhatIsGulugulu
