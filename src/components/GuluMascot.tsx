import { motion } from 'framer-motion'
import { Search, Heart, Sparkles, Shield } from 'lucide-react'

const traits = [
  {
    icon: <Search size={20} />,
    title: "Curioso",
    desc: "Gulu no da órdenes, invita a descubrir mundos nuevos."
  },
  {
    icon: <Heart size={20} />,
    title: "Amigable",
    desc: "Un puente emocional que reduce la ansiedad tecnológica."
  },
  {
    icon: <Sparkles size={20} />,
    title: "Tranquilo",
    desc: "Fomenta la calma cognitiva con una presencia suave."
  },
  {
    icon: <Shield size={20} />,
    title: "Protector",
    desc: "Simboliza un espacio seguro para el aprendizaje libre."
  }
]

const GuluMascot = () => {
  return (
    <section id="gulu" className="relative bg-bg py-16 sm:py-24 md:py-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[10%] left-[5%] w-40 sm:w-64 h-40 sm:h-64 bg-accent/40 rounded-full blur-[80px] sm:blur-[100px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[5%] w-56 sm:w-96 h-56 sm:h-96 bg-blue-400/30 rounded-full blur-[100px] sm:blur-[120px]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="relative flex justify-center order-1 lg:order-none"
          >
            {/* Main Gulu Card */}
            <div className="relative w-full max-w-sm sm:max-w-md aspect-square bg-surface/40 backdrop-blur-xl border border-stroke rounded-[36px] sm:rounded-[60px] flex items-center justify-center overflow-hidden group shadow-2xl">
              <div className="absolute inset-0 accent-gradient opacity-10 group-hover:opacity-20 transition-opacity duration-700" />

              {/* Gulu Video — 1:1 crop centered on the 16:9 source */}
              <div className="relative z-10 w-full h-full">
                <video
                  src="/static/images/gulu_saluda.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>

              {/* Floating Labels */}

            </div>

            {/* Floating Stat Badges */}
            <div className="absolute inset-0 pointer-events-none">



            </div>
          </motion.div>

          {/* Content Side */}
          <div className="flex flex-col order-2 lg:order-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-8 h-px bg-stroke" />
                <span className="text-[10px] sm:text-xs text-muted uppercase tracking-[0.2em] sm:tracking-[0.3em]">El Corazón de Gulugulu</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-display text-text-primary mb-6 sm:mb-8">
                Conoce a <span className="bold italic hero-shimmer text-accent">Gulu</span>
              </h2>
              <p className="text-muted text-sm sm:text-lg leading-relaxed mb-8 sm:mb-12">
                Gulu no es solo una mascota; es un pingüino explorador que transforma la tecnología fría en una experiencia cálida, segura y llena de curiosidad. Él es el puente emocional que acompaña a cada estudiante en su viaje por el conocimiento.
              </p>
            </motion.div>

            {/* Traits Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              {traits.map((trait, i) => (
                <motion.div
                  key={trait.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col p-4 sm:p-6 bg-surface/20 border border-stroke rounded-2xl sm:rounded-3xl hover:border-accent/50 transition-colors group"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                    {trait.icon}
                  </div>
                  <h4 className="text-sm sm:text-lg font-medium text-text-primary mb-1">{trait.title}</h4>
                  <p className="text-[10px] sm:text-xs text-muted leading-relaxed">{trait.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Philosophy Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 sm:mt-32 p-8 sm:p-12 rounded-[28px] sm:rounded-[40px] bg-surface border border-stroke relative overflow-hidden text-center"
        >
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '10px 10px' }} />
          <h3 className="text-xl sm:text-2xl md:text-4xl font-display italic text-text-primary max-w-2xl mx-auto leading-tight">
            "En Gulugulu, aprender debería sentirse como explorar, no como depender."
          </h3>
          <p className="text-xs sm:text-sm text-muted mt-4 sm:mt-6 uppercase tracking-widest">— Gulu, Tu Compañero de Aprendizaje</p>
        </motion.div>
      </div>
    </section>
  )
}

export default GuluMascot
