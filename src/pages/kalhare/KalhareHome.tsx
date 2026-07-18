import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, Zap, Award, Settings, ShieldCheck } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.8, ease: EASE },
};

const stats = [
  { value: "30+", label: "Years of Manufacturing" },
  { value: "1000+", label: "Transformers Annually" },
  { value: "500+", label: "Clients Served" },
  { value: "IS/IEC", label: "Certified Standard" },
];

const products = [
  { num: "01", name: "Power Transformers", spec: "0.5 KVA – 2000 KVA", img: "/images/kalhare/product-power-transformer.png" },
  { num: "02", name: "Application Specific", spec: "Inverter, Battery, UPS", img: "/images/kalhare/product-application-specific.png" },
  { num: "03", name: "Electronics Grade", spec: "PCB Mount, Pulse, Precision", img: "/images/kalhare/product-electronics-grade.png" },
  { num: "04", name: "Magnetic Components", spec: "Inductors, Chokes, Reactors", img: "/images/kalhare/product-magnetic-components.png" },
];

export default function KalhareHome() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.12]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>

      {/* â”€â”€ HERO â”€â”€ */}
      <section ref={heroRef} className="relative h-screen overflow-hidden bg-navy-950">
        <motion.div style={{ scale: heroScale, y: heroY }} className="absolute inset-0">
          <img src="/images/kalhare/hero.jpeg" alt="Kalhare Transformer" className="w-full h-full object-cover" />
        </motion.div>

        <div className="absolute inset-0 bg-linear-to-r from-navy-950/95 via-navy-950/70 to-navy-950/20" />
        <div className="absolute inset-0 bg-linear-to-t from-navy-950 via-transparent to-navy-950/50" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 max-w-7xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: EASE }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-px w-12 bg-gold" />
            <p className="text-gold/70 text-xs tracking-[0.5em] uppercase font-body">KALHARE ENTERPRISES · BANGALORE</p>
          </motion.div>

          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: "100%", filter: "blur(8px)" }}
              animate={{ y: 0, filter: "blur(0px)", transitionEnd: { filter: "none" } }}
              transition={{ delay: 0.6, duration: 1, ease: EASE }}
              className="font-heading font-bold text-white leading-[1.05] sm:leading-[0.95]"
              style={{ fontSize: "clamp(2.25rem, 9vw, 9rem)" }}
            >
              Engineering
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: "100%", filter: "blur(8px)" }}
              animate={{ y: 0, filter: "blur(0px)", transitionEnd: { filter: "none" } }}
              transition={{ delay: 0.75, duration: 1, ease: EASE }}
              className="font-heading font-bold italic text-gold leading-[1.05] sm:leading-[0.95]"
              style={{ fontSize: "clamp(2.25rem, 9vw, 9rem)" }}
            >
              Power.
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: "100%", filter: "blur(8px)" }}
              animate={{ y: 0, filter: "blur(0px)", transitionEnd: { filter: "none" } }}
              transition={{ delay: 0.9, duration: 1, ease: EASE }}
              className="font-heading font-bold text-white/50 leading-[1.05] sm:leading-[0.95]"
              style={{ fontSize: "clamp(2.25rem, 9vw, 9rem)" }}
            >
              Building
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-10">
            <motion.h1
              initial={{ y: "100%", filter: "blur(8px)" }}
              animate={{ y: 0, filter: "blur(0px)", transitionEnd: { filter: "none" } }}
              transition={{ delay: 1.02, duration: 1, ease: EASE }}
              className="font-heading font-bold text-white/50 leading-[1.05] sm:leading-[0.95]"
              style={{ fontSize: "clamp(2.25rem, 9vw, 9rem)" }}
            >
              Trust.
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-white/40 font-body font-light text-base md:text-lg max-w-md leading-relaxed mb-10"
          >
            IS/IEC certified transformer manufacturer. 30+ years. Single-phase to 2000 KVA. Every unit built at our Bangalore facility.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.7, ease: EASE }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/kalhare/products" className="flex items-center gap-3 bg-gold text-ink text-xs font-body font-semibold tracking-widest uppercase px-8 py-4 hover:bg-white transition-all duration-300">
              Explore Products <ArrowRight size={14} />
            </Link>
            <Link to="/kalhare/custom" className="flex items-center gap-3 border border-white/25 text-white text-xs font-body font-medium tracking-widest uppercase px-8 py-4 hover:border-gold hover:text-gold transition-all duration-300">
              Build Custom
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2.5 }}>
            <ChevronDown size={20} className="text-white/25" />
          </motion.div>
        </motion.div>
      </section>

      {/* â”€â”€ STATS â”€â”€ */}
      <section className="bg-navy-950 border-y border-gold/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gold/10">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
                className="py-10 md:py-14 px-6 md:px-10 text-center"
              >
                <p className="font-heading font-bold text-gold text-3xl md:text-4xl mb-1">{s.value}</p>
                <p className="text-white/30 font-body text-xs tracking-widest uppercase">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ WHAT WE BUILD — full-bleed editorial â”€â”€ */}
      <section className="relative h-[65vh] overflow-hidden">
        <img src="/images/kalhare/winding.jpeg" alt="Transformer winding" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-r from-navy-950 via-navy-950/80 to-navy-950/15" />
        <div className="absolute inset-0 bg-linear-to-t from-navy-950/80 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <p className="text-gold/60 text-xs tracking-[0.4em] uppercase font-body mb-5">What We Build</p>
            <h2
              className="font-heading font-bold text-white leading-tight max-w-2xl"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
            >
              Every transformer here is wound by hand, tested to standard, and shipped with our name on it.
            </h2>
            <div className="w-16 h-px bg-gold mt-8 mb-6" />
            <p className="text-white/40 font-body font-light text-base leading-relaxed max-w-lg">
              Core lamination, winding, insulation, impregnation, testing — all in-house at Kachohalli.
            </p>
          </motion.div>
        </div>
      </section>

      {/* â”€â”€ PRODUCT CATEGORIES â”€â”€ */}
      <section className="py-24 md:py-36 bg-navy-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <motion.div {...fadeUp}>
              <p className="text-gold/60 text-xs tracking-[0.4em] uppercase font-body mb-4">Product Range</p>
              <h2 className="font-heading font-bold text-white leading-[0.9]" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
                Four Categories.<br />Fourteen Products.
              </h2>
            </motion.div>
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}>
              <Link to="/kalhare/products" className="flex items-center gap-2 text-gold font-body text-sm tracking-wider uppercase group">
                <span className="border-b border-gold pb-0.5 group-hover:border-white/50 group-hover:text-white/50 transition-all duration-300">View All Products</span>
                <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            {products.map((p, i) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
                className="group relative overflow-hidden bg-white/2 border border-white/6 hover:border-gold/30 transition-all duration-500"
              >
                <div className="aspect-16/9 overflow-hidden relative">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-navy-950 via-navy-950/30 to-transparent" />
                  <div className="absolute bottom-0 right-4 font-heading font-bold text-white/4 leading-none select-none" style={{ fontSize: "clamp(5rem, 8vw, 9rem)" }}>
                    {p.num}
                  </div>
                </div>
                <div className="p-7 flex items-end justify-between">
                  <div>
                    <p className="text-gold/50 font-body text-xs tracking-[0.3em] uppercase mb-2">{p.spec}</p>
                    <h3 className="font-heading font-bold text-white text-2xl">{p.name}</h3>
                  </div>
                  <Link
                    to="/kalhare/products"
                    className="w-10 h-10 border border-white/15 flex items-center justify-center text-white/40 hover:border-gold hover:text-gold transition-all duration-300 shrink-0"
                  >
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ ABOUT EDITORIAL â”€â”€ */}
      <section className="py-24 md:py-36 bg-white/1.5 border-t border-gold/8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: EASE }}
              className="aspect-3/4 overflow-hidden"
            >
              <img src="/images/kalhare/packed-15kva.jpeg" alt="Packed transformer" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
              className="absolute -bottom-6 -right-6 border border-gold/40 bg-navy-950 p-8 hidden md:block"
            >
              <p className="font-heading font-bold text-gold text-3xl">30+</p>
              <p className="text-white/40 font-body text-xs tracking-widest uppercase mt-1">Years<br />Manufacturing</p>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2">
            <motion.p {...fadeUp} className="text-gold/60 text-xs tracking-[0.4em] uppercase font-body mb-6">The Kalhare Standard</motion.p>
            <motion.h2
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="font-heading font-bold italic text-white leading-[0.9] mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Three decades.
            </motion.h2>
            <motion.h2
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.15 }}
              className="font-heading font-bold text-white/60 leading-[0.9] mb-8"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              One standard.
            </motion.h2>
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }} className="w-16 h-px bg-gold mb-8" />
            <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.25 }} className="text-white/50 font-body font-light text-lg leading-relaxed mb-6">
              Founded in Kachohalli, Bangalore. Kalhare Enterprises has been manufacturing transformers that India's industrial sector depends on. Our name is on every unit because we stand behind what we build.
            </motion.p>
            <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }} className="text-white/30 font-body font-light text-base leading-relaxed mb-10">
              IS/IEC certified. BIS approved. Used across manufacturing, infrastructure, defence, and renewable energy.
            </motion.p>
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.4 }}>
              <Link to="/kalhare/about" className="flex items-center gap-3 text-gold font-body font-medium text-sm tracking-wider uppercase group w-fit">
                <span className="border-b border-gold pb-0.5 group-hover:border-white/50 group-hover:text-white/50 transition-all duration-300">Our Story</span>
                <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* â”€â”€ ENGINEERING PILLARS â”€â”€ */}
      <section className="py-20 bg-navy-950 border-t border-gold/8">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <p className="text-gold/50 text-xs tracking-[0.4em] uppercase font-body mb-4">Why Kalhare</p>
            <h2 className="font-heading font-bold text-white" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Built Into Every Unit.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
            {[
              { icon: <Zap size={20} />, title: "Winding Precision", desc: "Multi-layer winding with Class-H insulation. No shortcuts on core quality." },
              { icon: <ShieldCheck size={20} />, title: "IS/IEC Certified", desc: "Every transformer tested to IS 1180, IS 2026, and IEC 60076 before dispatch." },
              { icon: <Settings size={20} />, title: "Custom Built", desc: "Non-standard ratings, special enclosures, specific voltages — we build to spec." },
              { icon: <Award size={20} />, title: "Indian-Made", desc: "Designed, wound, tested, and dispatched from our Bangalore facility." },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
                className="bg-white/3 border border-white/6 p-8 hover:border-gold/25 hover:bg-white/5 transition-all duration-400 group"
              >
                <div className="text-gold mb-5 group-hover:scale-110 transition-transform duration-300">{v.icon}</div>
                <h3 className="font-body font-semibold text-white text-sm mb-3 tracking-wide">{v.title}</h3>
                <p className="text-white/35 font-body font-light text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ MANUFACTURING QUOTE â”€â”€ */}
      <section className="relative h-[55vh] overflow-hidden">
        <img src="/images/kalhare/terminals.jpeg" alt="Transformer terminals" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy-950/75" />
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <p className="text-gold/60 text-xs tracking-[0.5em] uppercase font-body mb-6">Manufacturing Philosophy</p>
            <h2 className="font-heading font-bold italic text-white leading-tight max-w-3xl" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
              "We measure twice. We wind once. We test until it passes."
            </h2>
          </motion.div>
        </div>
      </section>

      {/* â”€â”€ CUSTOM CTA â”€â”€ */}
      <section className="py-20 bg-gold">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.p {...fadeUp} className="text-ink/40 text-xs tracking-[0.4em] uppercase font-body mb-5">Custom Transformers</motion.p>
            <motion.h2
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="font-heading font-bold text-ink leading-tight mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Your specification. Our precision. Delivered.
            </motion.h2>
            <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }} className="text-ink/55 font-body font-light text-base leading-relaxed mb-8">
              Non-standard KVA ratings, special voltages, custom enclosures, dual outputs — our engineering team builds to your exact requirement and delivers a full engineering quotation within 48 hours.
            </motion.p>
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }}>
              <Link to="/kalhare/custom" className="inline-flex items-center gap-3 bg-ink text-white text-xs font-body font-semibold tracking-widest uppercase px-8 py-4 hover:bg-navy-950 transition-all duration-300">
                Configure Transformer <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE }}
            className="aspect-4/3 overflow-hidden"
          >
            <img src="/images/kalhare/custom-transformer.png" alt="Custom-built transformer" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

    </motion.div>
  );
}
