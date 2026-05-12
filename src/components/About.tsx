import { motion } from 'framer-motion'
import { GraduationCap, Users, ShieldCheck, Globe, Code2, FileText, Sparkles, Terminal, BookOpen, Heart } from 'lucide-react'

/* ─── Co-creators with personalized iconography ─── */
const founders = [
  {
    name: "Luis Moreno",
    role: "Arquitectura & Desarrollo",
    u: "Universidad de Cundinamarca",
    contribution: "Desarrollador principal",
    description: "Construyó el motor de búsqueda offline, la arquitectura Flask y el sistema de indexación RAM que hace posible Gulugulu.",
    primaryIcon: Code2,
    secondaryIcon: Terminal,
    color: "#3B82F6",          // blue
    gradient: "from-blue-500/20 via-blue-600/10 to-transparent",
    borderGlow: "hover:border-blue-500/60",
    tags: ["Backend", "Flask", "SQLite", "Python"]
  },
  {
    name: "Leydi Martinez",
    role: "Documentación & Análisis",
    u: "Universidad de Cundinamarca",
    contribution: "Arquitecta del conocimiento",
    description: "Estructuró toda la documentación técnica y garantizó que el proyecto pudiera comunicarse con claridad ante la academia y los usuarios.",
    primaryIcon: FileText,
    secondaryIcon: BookOpen,
    color: "#8B5CF6",          // violet
    gradient: "from-violet-500/20 via-violet-600/10 to-transparent",
    borderGlow: "hover:border-violet-500/60",
    tags: ["Docs", "UML", "Análisis", "QA"]
  },
  {
    name: "Duban Tuso",
    role: "Soporte & Creatividad",
    u: "Universidad de Cundinamarca",
    contribution: "Comodín del equipo ✨",
    description: "El pegamento humano del proyecto: desde apoyo emocional en las noches más largas hasta contribuciones de desarrollo cuando el equipo más lo necesitaba.",
    primaryIcon: Sparkles,
    secondaryIcon: Heart,
    color: "#10B981",          // emerald
    gradient: "from-emerald-500/20 via-emerald-600/10 to-transparent",
    borderGlow: "hover:border-emerald-500/60",
    tags: ["Apoyo", "Testing", "Ideas", "Team spirit"]
  }
]

const About = () => {
  return (
    <section id="about" className="bg-bg py-16 sm:py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
        {/* Story Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-start mb-20 sm:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-[10px] sm:text-xs text-muted uppercase tracking-[0.2em] sm:tracking-[0.3em]">Nuestra Historia</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-display text-text-primary mb-6 sm:mb-8">
              De un problema real a una <span className="italic">solución global</span>
            </h2>
            <p className="text-muted text-sm sm:text-lg leading-relaxed mb-4 sm:mb-6">
              Todo comenzó en las aulas de la <span className="text-text-primary font-medium">Universidad de Cundinamarca</span>. Como estudiantes de Ingeniería de Sistemas, no podíamos ignorar una realidad crítica: la brecha digital en las zonas rurales de nuestro país.
            </p>
            <p className="text-muted text-sm sm:text-lg leading-relaxed">
              Mientras el mundo avanza hacia la hiper-conectividad, miles de niños en escuelas rurales se quedan atrás por la falta de internet. Gulugulu nació para decir que el conocimiento no debe ser un privilegio de quienes tienen una conexión WiFi, sino un derecho de todos.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/5 rounded-full blur-3xl -z-10" />
            
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              {/* Column 1 */}
              <div className="flex flex-col gap-3 sm:gap-4 md:gap-6">
                {/* Image 1 */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-square border border-stroke shadow-sm group">
                  <div className="absolute inset-0 bg-accent/10 mix-blend-multiply z-10 transition-opacity duration-500 group-hover:opacity-0" />
                  <img 
                    src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800" 
                    alt="Educación Rural" 
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                
                {/* Glass Card */}
                <div className="relative bg-surface/80 backdrop-blur-xl border border-stroke p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                   <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-emerald-500"></span>
                      </span>
                      <span className="text-[9px] sm:text-[10px] uppercase tracking-widest font-bold text-text-primary">Hecho en Colombia</span>
                   </div>
                   <p className="text-[10px] sm:text-xs text-muted leading-relaxed">Desarrollado con orgullo por estudiantes de ingeniería para el futuro de la educación.</p>
                </div>
              </div>

              {/* Column 2 - Offset */}
              <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 pt-8 sm:pt-12 md:pt-16">
                {/* Glass Stat Card */}
                <div className="relative bg-surface/80 backdrop-blur-xl border border-stroke p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center items-center text-center">
                   <GraduationCap className="text-accent mb-2 sm:mb-3" size={24} />
                   <span className="text-xl sm:text-2xl font-display text-text-primary block mb-1">100%</span>
                   <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-muted">Offline</span>
                </div>

                {/* Image 2 */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-square border border-stroke shadow-sm group">
                  <div className="absolute inset-0 bg-accent/10 mix-blend-multiply z-10 transition-opacity duration-500 group-hover:opacity-0" />
                  <img 
                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800" 
                    alt="Inclusión Digital" 
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* The Evolution */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mb-20 sm:mb-32">
          {[
            {
              icon: <Globe className="text-accent" size={24} />,
              title: "Origen Rural",
              desc: "Nacimos para eliminar la diferencia educativa entre instituciones privadas y rurales, llevando la información donde no llega el cable."
            },
            {
              icon: <ShieldCheck className="text-accent" size={24} />,
              title: "Privacidad Radical",
              desc: "Evolucionamos para servir a cualquier organización. La información de tu escuela es tuya, privada y nunca se comparte con terceros."
            },
            {
              icon: <Users className="text-accent" size={24} />,
              title: "Propósito Real",
              desc: "No vendemos cuentos. Gulugulu es una herramienta técnica nacida de una necesidad social genuina y validada por la academia."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-surface/20 border border-stroke hover:bg-surface/40 transition-colors"
            >
              <div className="mb-4 sm:mb-6">{item.icon}</div>
              <h3 className="text-lg sm:text-xl font-display italic text-text-primary mb-3 sm:mb-4">{item.title}</h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* ─── Team Grid — Icon-based abstract portraits ─── */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-3 sm:mb-4">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-[10px] sm:text-xs text-muted uppercase tracking-[0.2em] sm:tracking-[0.3em]">Co-creadores</span>
            <div className="w-8 h-px bg-stroke" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display text-text-primary">
            El equipo <span className="italic">detrás de la pantalla</span>
          </h2>
          <p className="text-muted mt-3 sm:mt-4 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed px-2">
            Tres ingenieros, una misión. Cada uno con su rol único, todos con el mismo propósito.
          </p>
        </div>

        {/* Mobile: horizontal scroll cards | Desktop: grid */}
        {/* Desktop Grid */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
          {founders.map((person, idx) => {
            const PrimaryIcon = person.primaryIcon
            const SecondaryIcon = person.secondaryIcon
            return (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                viewport={{ once: true }}
                className={`group relative rounded-3xl border border-stroke bg-surface/10 backdrop-blur-sm overflow-hidden transition-all duration-500 ${person.borderGlow} hover:bg-surface/30`}
              >
                {/* Gradient background glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${person.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Icon portrait area */}
                <div className="relative pt-10 pb-6 px-8 flex flex-col items-center">
                  {/* Outer ring */}
                  <div
                    className="relative w-28 h-28 rounded-full flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110"
                    style={{
                      background: `radial-gradient(circle at 35% 35%, ${person.color}30, ${person.color}08)`,
                      boxShadow: `0 0 0 1px ${person.color}30, 0 0 40px ${person.color}15`
                    }}
                  >
                    {/* Secondary icon — orbiting decoration */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0"
                    >
                      <div
                        className="absolute -top-1 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full flex items-center justify-center"
                        style={{ background: `${person.color}20`, border: `1px solid ${person.color}40` }}
                      >
                        <SecondaryIcon size={13} style={{ color: person.color }} />
                      </div>
                    </motion.div>

                    {/* Primary icon — center */}
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${person.color}25, ${person.color}10)`,
                        border: `1px solid ${person.color}35`
                      }}
                    >
                      <PrimaryIcon size={30} style={{ color: person.color }} strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Name & role */}
                  <h4 className="text-xl font-semibold text-text-primary mb-1 transition-colors">
                    {person.name}
                  </h4>
                  <p className="text-xs uppercase tracking-widest mb-1" style={{ color: person.color }}>
                    {person.role}
                  </p>
                  <p className="text-[10px] text-muted/50 uppercase tracking-tighter mb-4">
                    {person.u}
                  </p>

                  {/* Contribution badge */}
                  <div
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold mb-5"
                    style={{
                      background: `${person.color}15`,
                      border: `1px solid ${person.color}30`,
                      color: person.color
                    }}
                  >
                    <PrimaryIcon size={10} />
                    {person.contribution}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-muted leading-relaxed text-center mb-6">
                    {person.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap justify-center gap-2">
                    {person.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full"
                        style={{
                          background: `${person.color}10`,
                          border: `1px solid ${person.color}20`,
                          color: `${person.color}cc`
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom divider with color accent */}
                <div
                  className="h-0.5 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${person.color}, transparent)` }}
                />
              </motion.div>
            )
          })}
        </div>

        {/* Mobile: Vertical stack with compact cards */}
        <div className="flex flex-col gap-4 sm:hidden">
          {founders.map((person, idx) => {
            const PrimaryIcon = person.primaryIcon
            return (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`group relative rounded-2xl border border-stroke bg-surface/10 overflow-hidden transition-all duration-500 ${person.borderGlow}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${person.gradient} opacity-40`} />
                
                <div className="relative p-5 flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${person.color}25, ${person.color}10)`,
                      border: `1px solid ${person.color}35`
                    }}
                  >
                    <PrimaryIcon size={24} style={{ color: person.color }} strokeWidth={1.5} />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base font-semibold text-text-primary">{person.name}</h4>
                    <p className="text-[10px] uppercase tracking-widest mb-2" style={{ color: person.color }}>{person.role}</p>
                    <p className="text-xs text-muted leading-relaxed mb-3">{person.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {person.tags.map(tag => (
                        <span
                          key={tag}
                          className="text-[8px] uppercase tracking-wider px-1.5 py-0.5 rounded-full"
                          style={{
                            background: `${person.color}10`,
                            border: `1px solid ${person.color}20`,
                            color: `${person.color}cc`
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About
