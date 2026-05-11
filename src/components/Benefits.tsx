import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const benefits = [
  {
    title: "Encuentra Cualquier Cosa en Segundos",
    description: "Escribe una palabra y Gulugulu busca en toda la biblioteca al instante. No importa si el archivo se llama diferente — el sistema entiende lo que buscas y muestra lo más relevante primero.",
    metric: "Búsqueda Inteligente",
    image: "/static/images/shot2.png"
  },
  {
    title: "El Sistema Entiende a los Estudiantes",
    description: "Si un estudiante busca \"mates\", Gulugulu también encuentra archivos de álgebra, geometría y aritmética. El buscador conoce el vocabulario escolar y lo interpreta correctamente.",
    metric: "Búsqueda Natural",
    image: "/static/images/shot3.png"
  },
  {
    title: "Materiales Organizados por Materia y Grado",
    description: "Cada archivo está etiquetado con su grado, materia y el maestro que lo subió. Filtrar por curso o por tema tarda menos de un segundo, sin necesidad de navegar carpetas.",
    metric: "Orden Total",
    image: "/static/images/shot4.png"
  },
  {
    title: "Sugerencias Mientras Escribes",
    description: "Desde la primera letra, el buscador sugiere títulos de archivos disponibles. Los estudiantes encuentran lo que necesitan sin terminar de escribir — igual que en Google.",
    metric: "Velocidad Máxima",
    image: "/static/images/shot5.png"
  }
]

const Benefits = () => {
  return (
    <section id="benefits" className="bg-bg py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Propuesta de Valor</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display text-text-primary mb-6">
              Beneficios para <span className="italic text-accent hero-shimmer">todos</span>
            </h2>
            <p className="text-muted text-base md:text-lg max-w-md">
              Gulugulu está diseñado para aportar valor a cada miembro de tu comunidad educativa.
            </p>
          </div>
        </motion.div>

        {/* Entries */}
        <div className="flex flex-col gap-4">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col sm:flex-row items-center gap-6 p-4 bg-surface/30 hover:bg-surface border border-stroke rounded-[40px] sm:rounded-full transition-all duration-500 cursor-pointer"
            >
              <div className="w-full sm:w-20 h-24 sm:h-20 rounded-full overflow-hidden flex-shrink-0">
                <img src={benefit.image} alt={benefit.title} className="w-full h-full object-cover transition-all duration-500 scale-110 group-hover:scale-100 opacity-100" />
              </div>
              
              <div className="flex-grow flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-4 w-full">
                <div className="flex flex-col">
                  <h3 className="text-lg md:text-xl font-medium text-text-primary group-hover:translate-x-2 transition-transform duration-500">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted mt-1 max-w-md group-hover:translate-x-2 transition-transform duration-500 delay-75">
                    {benefit.description}
                  </p>
                </div>
                
                <div className="flex items-center gap-6 text-xs text-muted mt-2 sm:mt-0">
                  <div className="flex items-center gap-1.5 text-text-primary">
                    <CheckCircle2 size={14} className="text-accent mt-0.5 flex-shrink-0" />
                    <span className="font-medium text-accent">{benefit.metric}</span>
                  </div>
                </div>
              </div>

              <div className="hidden sm:flex w-12 h-12 items-center justify-center rounded-full bg-stroke/30 text-text-primary group-hover:bg-accent group-hover:text-white transition-all duration-500 mr-2 flex-shrink-0">
                <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
