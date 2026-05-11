import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  {
    name: "Semilla",
    target: "Pilotos / Gratis",
    price: "0",
    features: [
      "Búsqueda básica local",
      "Límite de 5GB almacenamiento",
      "Soporte comunitario",
      "1 Cuenta de Administrador"
    ],
    popular: false
  },
  {
    name: "Bosque",
    target: "Institucional",
    price: "Consultar",
    features: [
      "Cuentas ilimitadas para maestros",
      "Soporte técnico prioritario",
      "Personalización de marca (Logo)",
      "Gestión avanzada de currículo"
    ],
    popular: true
  },
  {
    name: "Glaciar",
    target: "Distritos / Redes",
    price: "A Medida",
    features: [
      "Soporte para múltiples sedes",
      "Analíticas avanzadas de uso",
      "Integración con plataformas externas",
      "Infraestructura dedicada"
    ],
    popular: false
  }
]

const Pricing = () => {
  return (
    <section id="pricing" className="bg-bg py-24 md:py-32 border-y border-stroke">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">

        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl font-display text-text-primary mb-6">
            Escalabilidad <span className="hero-shimmer text-accent italic">diseñada para ti</span>
          </h2>
          <p className="text-muted text-base md:text-lg max-w-xl mx-auto">
            Desde pequeñas escuelas rurales hasta grandes distritos educativos. Gulugulu crece contigo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col p-8 rounded-3xl border ${plan.popular ? 'border-transparent bg-surface/80' : 'border-stroke bg-surface/30'}`}
            >
              {plan.popular && (
                <div className="absolute inset-0 rounded-3xl accent-gradient-border pointer-events-none" />
              )}

              <div className="relative z-10">
                <span className="text-[10px] text-muted uppercase tracking-[0.2em]">{plan.target}</span>
                <h3 className="text-3xl font-display italic text-text-primary mt-2 mb-4">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-8">
                  {plan.price !== "0" && plan.price !== "Consultar" && plan.price !== "A Medida" && <span className="text-xl text-muted">$</span>}
                  <span className="text-4xl font-display text-text-primary">{plan.price}</span>
                </div>

                <ul className="flex flex-col gap-4 mb-8 flex-grow">
                  {plan.features.map(feature => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-text-primary/80">
                      <Check size={16} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => window.open('https://wa.me/your-number', '_blank')}
                  className={`w-full py-3 rounded-full text-sm font-medium transition-all duration-300 ${plan.popular
                      ? 'bg-accent text-white hover:scale-105 hover:bg-accent/90'
                      : 'border border-stroke text-text-primary hover:border-accent hover:text-accent'
                    }`}
                >
                  Solicitar Plan {plan.name}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
