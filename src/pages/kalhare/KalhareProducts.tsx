import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.8, ease: EASE },
};

const categories = [
  {
    id: "power", num: "01", label: "Category 01", title: "Power Transformers",
    description: "The backbone of industrial and commercial power systems. Engineered for continuous-duty operation under demanding load cycles. Single-phase and three-phase, from 0.5 KVA to 2000 KVA.",
    image: "/images/kalhare/hero.jpeg",
    products: [
      { name: "Step-Up Transformers", spec: "Voltage stepping for generators, UPS, and distribution networks." },
      { name: "Step-Down Transformers", spec: "Safe voltage reduction for industrial machinery and equipment." },
      { name: "Single Phase Transformers", spec: "0.5 KVA – 500 KVA. Residential, commercial, and light industrial use." },
      { name: "Three Phase Transformers", spec: "5 KVA – 2000 KVA. Heavy industrial and infrastructure applications." },
      { name: "High Voltage Transformers", spec: "Up to 11 KV. Substation and distribution applications." },
    ],
  },
  {
    id: "application", num: "02", label: "Category 02", title: "Application Specific",
    description: "Purpose-built transformers designed around specific power conversion requirements. Engineered for the duty cycle, not just the rating.",
    image: "/images/kalhare/transformer-side.jpeg",
    products: [
      { name: "Battery Charger Transformers", spec: "Optimised for controlled rectifier and charger circuits." },
      { name: "Inverter Transformers", spec: "Low-loss cores for solar and UPS inverter systems." },
      { name: "Input Transformers", spec: "Isolation and conditioning for sensitive electronic equipment." },
      { name: "Output Transformers", spec: "Load-matched output for amplifiers and power converters." },
    ],
  },
  {
    id: "electronics", num: "03", label: "Category 03", title: "Electronics Grade",
    description: "High-precision, low-leakage transformers for demanding electronics applications where standard units fall short on parasitic management.",
    image: "/images/kalhare/small-3phase.jpeg",
    products: [
      { name: "Pulse Transformers", spec: "Fast rise-time, low droop for switching and trigger circuits." },
      { name: "PCB Mount Transformers", spec: "Compact profiles for direct board integration." },
    ],
  },
  {
    id: "magnetics", num: "04", label: "Category 04", title: "Magnetic Components",
    description: "Precision wound inductors, chokes, and reactors for filtering, energy storage, and power factor correction.",
    image: "/images/kalhare/small-3phase-2.jpeg",
    products: [
      { name: "Inductors", spec: "Energy storage and filtering for power electronics." },
      { name: "Chokes", spec: "EMI/RFI suppression for motor drives and inverters." },
      { name: "Reactors", spec: "Line and load reactors for harmonic mitigation." },
    ],
  },
];

export default function KalhareProducts() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>

      {/* HERO */}
      <section className="relative h-[60vh] overflow-hidden">
        <img src="/images/kalhare/terminals.jpeg" alt="Transformer products" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-b from-navy-950/60 via-navy-950/65 to-navy-950" />
        <div className="absolute inset-0 bg-linear-to-r from-navy-950/80 to-transparent" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 max-w-7xl mx-auto pt-20">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.7, ease: EASE }} className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-gold" />
            <p className="text-gold/70 text-xs tracking-[0.5em] uppercase font-body">Product Range</p>
          </motion.div>
          <div className="overflow-hidden mb-3">
            <motion.h1 initial={{ y: "100%", filter: "blur(6px)" }} animate={{ y: 0, filter: "blur(0px)" }} transition={{ delay: 0.5, duration: 1, ease: EASE }} className="font-heading font-bold text-white leading-[0.9]" style={{ fontSize: "clamp(2.25rem, 6vw, 6rem)" }}>Transformer</motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1 initial={{ y: "100%", filter: "blur(6px)" }} animate={{ y: 0, filter: "blur(0px)" }} transition={{ delay: 0.65, duration: 1, ease: EASE }} className="font-heading font-bold italic text-gold leading-[0.9]" style={{ fontSize: "clamp(2.25rem, 6vw, 6rem)" }}>Solutions.</motion.h1>
          </div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="text-white/35 font-body font-light text-base max-w-xl mt-6">
            14 product types across 4 engineering categories. Every unit manufactured in-house at our Bangalore facility.
          </motion.p>
        </div>
      </section>

      {/* CATEGORY STRIPS */}
      {categories.map((cat, ci) => (
        <section key={cat.id} className={`py-24 md:py-32 border-t border-gold/8 ${ci % 2 === 0 ? "bg-navy-950" : "bg-white/2"}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="relative mb-14 overflow-hidden">
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: EASE }} className="absolute -top-4 right-0 font-heading font-bold text-white/2.5 leading-none select-none pointer-events-none" style={{ fontSize: "clamp(8rem, 18vw, 18rem)" }}>
                {cat.num}
              </motion.div>
              <motion.p {...fadeUp} className="relative text-gold/60 text-xs tracking-[0.4em] uppercase font-body mb-4">{cat.label}</motion.p>
              <motion.h2 {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="relative font-heading font-bold text-white leading-[0.9]" style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}>{cat.title}</motion.h2>
            </div>
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${ci % 2 !== 0 ? "lg:[&>*:first-child]:order-last" : ""}`}>
              <motion.div initial={{ opacity: 0, scale: 0.96, x: ci % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, scale: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.9, ease: EASE }}>
                <div className="relative aspect-4/3 overflow-hidden group">
                  <img src={cat.image} alt={cat.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-linear-to-t from-navy-950/60 to-transparent" />
                </div>
              </motion.div>
              <div>
                <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="text-white/40 font-body font-light text-base leading-relaxed mb-8">{cat.description}</motion.p>
                <div>
                  {cat.products.map((p, pi) => (
                    <motion.div key={p.name} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: pi * 0.08, ease: EASE }} className="group flex gap-5 py-5 border-b border-gold/8 hover:border-gold/30 transition-all duration-300 cursor-default">
                      <div className="w-px bg-gold/20 group-hover:bg-gold shrink-0 transition-all duration-300 self-stretch" />
                      <div>
                        <p className="font-body font-semibold text-white text-sm group-hover:text-gold transition-colors duration-300">{p.name}</p>
                        <p className="text-white/35 font-body font-light text-xs mt-1 leading-relaxed">{p.spec}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.4 }} className="mt-8">
                  <Link to="/kalhare/custom" className="flex items-center gap-3 text-gold font-body font-medium text-sm tracking-wider uppercase group w-fit">
                    <span className="border-b border-gold pb-0.5 group-hover:border-white/50 group-hover:text-white/50 transition-all duration-300">Request This Type</span>
                    <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 bg-gold">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.p {...fadeUp} className="text-ink/40 text-xs tracking-[0.4em] uppercase font-body mb-6">Don't see your specification?</motion.p>
          <motion.h2 {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="font-heading font-bold text-ink leading-tight mb-8" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            We manufacture fully custom transformer and chokes for your exact requirements.
          </motion.h2>
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}>
            <Link to="/kalhare/custom" className="inline-flex items-center gap-3 bg-ink text-white text-sm font-body font-semibold tracking-widest uppercase px-8 py-4 hover:bg-navy-950 transition-colors duration-300">
              Build Custom Transformer <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

    </motion.div>
  );
}