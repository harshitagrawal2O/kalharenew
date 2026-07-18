import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: EASE },
};

const certifications = [
  "IS 1180 — Distribution Transformers",
  "IS 2026 — Power Transformers",
  "IEC 60076 — International Standard",
  "BIS Certified Manufacturing",
  "ISO Quality Management System",
  "CE Marked Products Available",
];

const milestones = [
  { year: "1990s", event: "Founded in Kachohalli Industrial Area, Bangalore. First workshop, first winding machine." },
  { year: "2000s", event: "Expanded to three-phase transformer range. Capacity grows to 5 KVA – 500 KVA." },
  { year: "2010s", event: "BIS certification obtained. 1,000+ transformers dispatched annually. IS/IEC compliant." },
  { year: "2020s", event: "Expanded to high-voltage range up to 2000 KVA. Custom configurator launched." },
];

export default function KalhareAbout() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>

      {/* â”€â”€ HERO â”€â”€ */}
      <section className="relative h-[75vh] overflow-hidden">
        <img src="/images/kalhare/hero.jpeg" alt="Kalhare manufacturing" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-b from-navy-950/80 via-navy-950/60 to-navy-950" />
        <div className="absolute inset-0 bg-linear-to-r from-navy-950/70 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 max-w-7xl mx-auto pt-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: EASE }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-px w-12 bg-gold" />
            <p className="text-gold/70 text-xs tracking-[0.5em] uppercase font-body">About Us</p>
          </motion.div>
          <div className="overflow-hidden mb-3">
            <motion.h1
              initial={{ y: "100%", filter: "blur(6px)" }}
              animate={{ y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.5, duration: 1, ease: EASE }}
              className="font-heading font-bold text-white leading-[0.9]"
              style={{ fontSize: "clamp(2.25rem, 6vw, 6rem)" }}
            >
              Three
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-3">
            <motion.h1
              initial={{ y: "100%", filter: "blur(6px)" }}
              animate={{ y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.6, duration: 1, ease: EASE }}
              className="font-heading font-bold text-white leading-[0.9]"
              style={{ fontSize: "clamp(2.25rem, 6vw, 6rem)" }}
            >
              Decades of
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-3">
            <motion.h1
              initial={{ y: "100%", filter: "blur(6px)" }}
              animate={{ y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.72, duration: 1, ease: EASE }}
              className="font-heading font-bold italic text-gold leading-[0.9]"
              style={{ fontSize: "clamp(2.25rem, 6vw, 6rem)" }}
            >
              Engineering
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%", filter: "blur(6px)" }}
              animate={{ y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.84, duration: 1, ease: EASE }}
              className="font-heading font-bold italic text-gold leading-[0.9]"
              style={{ fontSize: "clamp(2.25rem, 6vw, 6rem)" }}
            >
              Excellence.
            </motion.h1>
          </div>
        </div>
      </section>

      {/* â”€â”€ WHO WE ARE â”€â”€ */}
      <section className="py-24 md:py-36 bg-navy-950">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.p {...fadeUp} className="text-gold/60 text-xs tracking-[0.4em] uppercase font-body mb-6">Who We Are</motion.p>
            <motion.h2
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="font-heading font-bold text-white leading-[0.92] mb-8"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              A Transformer Company Built on Integrity and Precision.
            </motion.h2>
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }} className="w-16 h-px bg-gold mb-8" />
            <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }} className="text-white/50 font-body font-light text-lg leading-relaxed mb-6">
              Kalhare Enterprises was established with a single mission: to manufacture transformers that engineers and operators could trust without reservation. Located in the heart of Bangalore's Kachohalli Industrial Area, we have grown from a small workshop to a full-scale precision manufacturing facility.
            </motion.p>
            <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.25 }} className="text-white/35 font-body font-light text-base leading-relaxed mb-8">
              Our range spans single-phase and three-phase transformers, inductors, chokes, and custom specialty units — all manufactured with the same attention to winding precision, core quality, and insulation integrity.
            </motion.p>
            <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }} className="text-white/35 font-body font-light text-base leading-relaxed">
              Serving clients across Karnataka, Tamil Nadu, Maharashtra, and international markets — delivering transformers that reflect the very best of Indian engineering capability.
            </motion.p>
          </div>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: EASE }}
              className="aspect-3/4 overflow-hidden"
            >
              <img src="/images/kalhare/transformer-side.jpeg" alt="Three phase transformer" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
              className="absolute -bottom-6 -left-6 border border-gold/40 bg-navy-950 p-8 hidden md:block"
            >
              <p className="font-heading text-gold font-bold text-3xl">IS/IEC</p>
              <p className="text-white/40 font-body text-xs tracking-widest uppercase mt-1">Certified<br />Manufacturing</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* â”€â”€ LARGE QUOTE â”€â”€ */}
      <section className="py-20 bg-white/1.5 border-t border-gold/8">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE }}
            className="text-center"
          >
            <div className="font-heading text-gold/15 text-8xl leading-none mb-4 select-none">"</div>
            <p
              className="font-heading font-bold italic text-white/80 leading-tight"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)" }}
            >
              Thirty years of building India's industrial backbone, one transformer at a time.
            </p>
            <div className="w-12 h-px bg-gold mx-auto mt-8" />
          </motion.div>
        </div>
      </section>

      {/* â”€â”€ TIMELINE â”€â”€ */}
      <section className="py-24 bg-navy-950 border-t border-gold/8">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="mb-16">
            <p className="text-gold/60 text-xs tracking-[0.4em] uppercase font-body mb-4">Our Journey</p>
            <h2 className="font-heading font-bold text-white leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Engineering Heritage
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold/10 hidden md:block" />
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.8, ease: EASE }}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${i % 2 !== 0 ? "md:[&>*:first-child]:order-last" : ""}`}
                >
                  <div className={`${i % 2 === 0 ? "md:text-right md:pr-20" : "md:pl-20"}`}>
                    <p className="font-heading text-gold font-bold text-4xl mb-3">{m.year}</p>
                    <div className="w-8 h-px bg-gold/40 mb-3 inline-block" />
                    <p className="text-white/45 font-body font-light text-sm leading-relaxed">{m.event}</p>
                  </div>
                  <div className={`hidden md:block ${i % 2 === 0 ? "md:pl-20" : "md:pr-20"}`}>
                    <div className="w-3 h-3 bg-gold absolute left-1/2 -translate-x-1/2 top-3" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* â”€â”€ CERTIFICATIONS â”€â”€ */}
      <section className="py-24 bg-white/1.5 border-t border-gold/8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <motion.p {...fadeUp} className="text-gold/60 text-xs tracking-[0.4em] uppercase font-body mb-6">Quality Assurance</motion.p>
              <motion.h2
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.1 }}
                className="font-heading font-bold text-white leading-tight mb-8"
                style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
              >
                Standards We Build Every Transformer Against.
              </motion.h2>
              <div className="space-y-3">
                {certifications.map((c, i) => (
                  <motion.div
                    key={c}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
                    className="flex items-center gap-4 py-3 border-b border-gold/10 group hover:border-gold/30 transition-colors duration-300"
                  >
                    <CheckCircle size={15} className="text-gold shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-white/50 group-hover:text-white/75 font-body text-sm transition-colors duration-300">{c}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: EASE }}
              className="aspect-square overflow-hidden"
            >
              <img src="/images/kalhare/packed-15kva.jpeg" alt="Certified transformer" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* â”€â”€ CTA â”€â”€ */}
      <section className="py-20 bg-gold">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.p {...fadeUp} className="text-ink/40 text-xs tracking-[0.4em] uppercase font-body mb-6">Ready to Begin?</motion.p>
          <motion.h2
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="font-heading font-bold text-ink leading-tight mb-8"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            Let's engineer your next transformer together.
          </motion.h2>
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }} className="flex flex-wrap gap-4 justify-center">
            <Link to="/kalhare/custom" className="inline-flex items-center gap-2 bg-ink text-white text-sm font-body font-semibold tracking-widest uppercase px-8 py-4 hover:bg-navy-950 transition-colors duration-300">
              Configure Transformer <ArrowRight size={16} />
            </Link>
            <Link to="/kalhare/contact" className="inline-flex items-center gap-2 border border-ink/30 text-ink text-sm font-body font-medium tracking-widest uppercase px-8 py-4 hover:bg-ink/10 transition-all duration-300">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

    </motion.div>
  );
}
