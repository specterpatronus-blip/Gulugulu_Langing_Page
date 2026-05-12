import { motion } from 'framer-motion'
import { cn } from '../lib/utils'

const features = [
  {
    title: "Funciona Sin Internet",
    category: "01 — Independencia",
    image: "/static/images/fondo.webp",
    gridClass: "md:col-span-7 md:row-span-2 aspect-[3/4] md:aspect-auto",
    description: "Tu colegio tiene su propio buscador. No necesita internet, no depende de nadie. Si hay luz y un computador, Gulugulu funciona."
  },
  {
    title: "Resultados Instantáneos",
    category: "02 — Velocidad",
    image: "/static/images/shot1.png",
    gridClass: "md:col-span-5 aspect-[16/9]",
    description: "Los estudiantes encuentran lo que buscan en menos de un segundo. Sin esperas, sin pantallas de carga, sin distracciones."
  },
  {
    title: "Todo Organizado",
    category: "03 — Organización",
    image: "/static/images/shot3.png",
    gridClass: "md:col-span-5 aspect-[16/9]",
    description: "Cada recurso tiene su grado, materia y maestro asignado. Buscar por tema o por curso es tan fácil como en Google, pero con tu propio contenido."
  },
  {
    title: "Control para Maestros",
    category: "04 — Gestión",
    image: "/static/images/dashboard.png",
    gridClass: "md:col-span-12 aspect-[21/9] sm:aspect-[21/7]",
    description: "Los docentes suben materiales, organizan la biblioteca y gestionan accesos desde un panel sencillo. Sin conocimientos técnicos requeridos."
  }
]

const Architecture = () => {
  return (
    <section id="architecture" className="bg-bg py-16 sm:py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 mb-10 sm:mb-16 md:mb-24"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-[10px] sm:text-xs text-muted uppercase tracking-[0.2em] sm:tracking-[0.3em]">Cómo Funciona</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-display text-text-primary mb-4 sm:mb-6">
              Tu biblioteca, <span className="italic text-accent hero-shimmer">bajo tu control</span>
            </h2>
            <p className="text-muted text-sm sm:text-base md:text-lg max-w-md">
              Gulugulu le da a tu institución su propio motor de búsqueda. Sin internet, sin costos de suscripción, sin depender de nadie más.
            </p>
          </div>


        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-5 md:gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className={cn(
                "group relative bg-surface border border-stroke rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer",
                feature.gridClass
              )}
            >
              {/* Halftone Overlay */}
              <div
                className="absolute inset-0 z-10 opacity-20 pointer-events-none mix-blend-multiply"
                style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '4px 4px' }}
              />

              <img
                src={feature.image}
                alt={feature.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-100"
                loading="lazy"
              />

              {/* Hover Content — show on tap (mobile) or hover (desktop) */}
              <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 active:opacity-100 transition-all duration-500 bg-bg/80 backdrop-blur-md flex flex-col items-center justify-center p-6 sm:p-8 text-center">
                <span className="text-xs sm:text-sm text-text-primary max-w-sm mb-4">
                  {feature.description}
                </span>
                <div className="relative p-[1.5px] rounded-full overflow-hidden">
                  <div className="absolute inset-0 accent-gradient animate-gradient-shift" />
                  <div className="relative bg-bg px-5 sm:px-6 py-2.5 sm:py-3 rounded-full">
                    <span className="text-xs sm:text-sm font-medium text-text-primary whitespace-nowrap">
                      Más Info
                    </span>
                  </div>
                </div>
              </div>

              {/* Permanent bottom gradient so labels are always readable */}
              <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-28 z-10 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

              {/* Bottom Label — always visible */}
              <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-6 z-20 flex flex-col gap-0.5 sm:gap-1">
                <span className="text-[9px] sm:text-[10px] text-white/60 uppercase tracking-[0.15em] sm:tracking-[0.2em]">{feature.category}</span>
                <span className="text-base sm:text-xl md:text-2xl font-display italic text-white drop-shadow-md">{feature.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Architecture
