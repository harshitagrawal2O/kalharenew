import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Wrench,
  Cpu,
  Gauge,
  Users,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: {
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
  },
};

const milestones = [
  {
    year: "2000s",
    event:
      "Founded in Bangalore. First G-30 Die-Sinking EDM manufactured and delivered to a local tool room.",
  },
  {
    year: "2010s",
    event:
      "Expanded the lineup with the G-45 mid-range machine. Installed 50+ units across Karnataka.",
  },
  {
    year: "2015s",
    event:
      "Launched the G-60(i) flagship series with semi-CNC servo control. Addressed India's growing precision tooling demand.",
  },
  {
    year: "2020s",
    event:
      "AWESOME-1500 large-format variant introduced. Custom machine program launched for OEM integrators.",
  },
];

const capabilities = [
  {
    icon: <Cpu size={20} />,
    title: "Semi-CNC Servo",
    desc: "Digital Z-axis control with servo drive. Depth memory, auto retract, and programmable cycles.",
  },
  {
    icon: <Gauge size={20} />,
    title: "Adaptive Generator",
    desc: "Onboard pulse generator automatically optimises discharge parameters for material and finish requirements.",
  },
  {
    icon: <Wrench size={20} />,
    title: "Dielectric System",
    desc: "Integrated flush and filter system. Compatible with EDM oil and deionised water dielectric.",
  },
  {
    icon: <Users size={20} />,
    title: "Local Support",
    desc: "Factory-trained service engineers based in Bangalore. Spares inventory maintained on-site.",
  },
];

export default function PressmachAbout() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* â”€â”€ HERO â”€â”€ */}
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src="/images/pressmach/g60-studio.jpeg"
          alt="Pressmach G60"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/50 to-ink" />
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 pt-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gold/60 text-xs tracking-[0.4em] uppercase font-body mb-6"
          >
            About Pressmach
          </motion.p>
          <div className="overflow-hidden mb-3">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
              className="font-heading font-bold text-white leading-[0.9]"
              style={{ fontSize: "clamp(2.25rem, 6vw, 5.5rem)" }}
            >
              Precision
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-3">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                delay: 0.58,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
              className="font-heading font-bold text-white leading-[0.9]"
              style={{ fontSize: "clamp(2.25rem, 6vw, 5.5rem)" }}
            >
              Without
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                delay: 0.7,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
              className="font-heading font-bold italic text-gold leading-[0.9]"
              style={{ fontSize: "clamp(2.25rem, 6vw, 5.5rem)" }}
            >
              Compromise.
            </motion.h1>
          </div>
        </div>
      </section>

      {/* â”€â”€ WHO WE ARE â”€â”€ */}
      <section className="py-24 md:py-36 bg-ink">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.p
              {...fadeUp}
              className="text-gold/60 text-xs tracking-[0.4em] uppercase font-body mb-6"
            >
              Who We Are
            </motion.p>
            <motion.h2
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="font-heading font-bold text-white leading-[0.92] mb-8"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              India's EDM Machine Builder. Designed Here. Built Here.
            </motion.h2>
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.15 }}
              className="w-16 h-px bg-gold mb-8"
            />
            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
              className="text-white/50 font-body font-light text-lg leading-relaxed mb-6"
            >
              Pressmach Machine Tools is a division of Kalhare Group — a
              Bangalore-based engineering group with a track record built over
              three decades of precision manufacturing. We build Die-Sinking EDM
              machines for Indian tool rooms, mould makers, and precision
              component manufacturers.
            </motion.p>
            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.25 }}
              className="text-white/35 font-body font-light text-base leading-relaxed mb-8"
            >
              Our machines are not imports with Indian badges. The mechanical
              structure, servo systems, generator electronics, and dielectric
              units are all designed and assembled at our Kachohalli facility.
              This means faster support, immediate spares, and an engineering
              team you can actually call.
            </motion.p>
            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.3 }}
              className="text-white/35 font-body font-light text-base leading-relaxed"
            >
              We serve tool rooms, MSME manufacturers, automotive component
              suppliers, and defence sub-contractors across India — customers
              who need micron-level accuracy without the overhead of imported
              machine support.
            </motion.p>
          </div>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
              className="aspect-[3/4] overflow-hidden"
            >
              <img
                src="/images/pressmach/g60-black.jpeg"
                alt="G60 machine"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
              className="absolute -bottom-6 -left-6 bg-gold p-8 hidden md:block"
            >
              <p className="font-heading font-bold text-ink text-3xl">EDM</p>
              <p className="text-ink/60 font-body text-xs tracking-widest uppercase mt-1">
                Die Sinking
                <br />
                Specialists
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* â”€â”€ CAPABILITIES â”€â”€ */}
      <section className="py-24 bg-white/[0.02] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="mb-14">
            <p className="text-gold/60 text-xs tracking-[0.4em] uppercase font-body mb-5">
              Engineering
            </p>
            <h2
              className="font-heading font-bold text-white leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              What Every Pressmach Machine Contains.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            {capabilities.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                }}
                className="bg-white/[0.03] border border-white/6 p-8 md:p-10 hover:border-gold/20 transition-all duration-400"
              >
                <div className="text-gold mb-5">{c.icon}</div>
                <h3 className="font-heading font-bold text-white text-xl mb-3">
                  {c.title}
                </h3>
                <div className="w-8 h-px bg-gold mb-4" />
                <p className="text-white/40 font-body font-light text-sm leading-relaxed">
                  {c.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ TIMELINE â”€â”€ */}
      <section className="py-24 bg-ink border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-gold/60 text-xs tracking-[0.4em] uppercase font-body mb-4">
              Our Journey
            </p>
            <h2
              className="font-heading font-bold text-white"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Engineering Heritage
            </h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold/10 hidden md:block" />
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1] as [
                      number,
                      number,
                      number,
                      number,
                    ],
                  }}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${i % 2 !== 0 ? "md:[&>*:first-child]:order-last" : ""}`}
                >
                  <div
                    className={`${i % 2 === 0 ? "md:text-right md:pr-20" : "md:pl-20"}`}
                  >
                    <p className="font-heading text-gold font-bold text-4xl mb-3">
                      {m.year}
                    </p>
                    <p className="text-white/50 font-body font-light text-sm leading-relaxed">
                      {m.event}
                    </p>
                  </div>
                  <div
                    className={`hidden md:block ${i % 2 === 0 ? "md:pl-20" : "md:pr-20"}`}
                  >
                    <div className="w-3 h-3 bg-gold absolute left-1/2 -translate-x-1/2 top-2" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* â”€â”€ FACTORY IMAGE â”€â”€ */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/pressmach/factory-floor.jpeg"
          alt="Pressmach factory"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/60" />
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
          >
            <p className="text-gold/60 text-xs tracking-[0.5em] uppercase font-body mb-6">
              Made in Bangalore
            </p>
            <h2
              className="font-heading font-bold italic text-white leading-tight max-w-3xl"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
            >
              "Every machine leaves our floor calibrated, tested, and ready to
              erase metal."
            </h2>
          </motion.div>
        </div>
      </section>

      {/* â”€â”€ STANDARDS â”€â”€ */}
      <section className="py-24 bg-ink border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
            className="aspect-square overflow-hidden"
          >
            <img
              src="/images/pressmach/control-panel.jpeg"
              alt="CNC control panel"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div>
            <motion.p
              {...fadeUp}
              className="text-gold/60 text-xs tracking-[0.4em] uppercase font-body mb-6"
            >
              Build Standards
            </motion.p>
            <motion.h2
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="font-heading font-bold text-white leading-tight mb-8"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Every Machine. Every Time.
            </motion.h2>
            <div className="space-y-4">
              {[
                "Pre-dispatch accuracy verification on granite surface plate",
                "Full electrical safety test to BIS standards",
                "Dielectric system pressure and flow test",
                "Servo calibration and Z-axis repeatability check",
                "Complete machine documentation and wiring diagrams",
                "1-year on-site warranty with local support",
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-start gap-4 py-3 border-b border-white/5"
                >
                  <CheckCircle
                    size={15}
                    className="text-gold flex-shrink-0 mt-0.5"
                  />
                  <p className="text-white/50 font-body text-sm">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* â”€â”€ CTA â”€â”€ */}
      <section className="py-20 bg-gold">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.p
            {...fadeUp}
            className="text-ink/50 text-xs tracking-[0.4em] uppercase font-body mb-6"
          >
            Ready to Begin?
          </motion.p>
          <motion.h2
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="font-heading font-bold text-ink leading-tight mb-8"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            See the machine. Then decide.
          </motion.h2>
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link
              to="/pressmach/machines"
              className="inline-flex items-center gap-2 bg-ink text-white text-sm font-body font-semibold tracking-widest uppercase px-8 py-4 hover:bg-ink/80 transition-colors duration-300"
            >
              View Machines <ArrowRight size={16} />
            </Link>
            <Link
              to="/pressmach/contact"
              className="inline-flex items-center gap-2 border border-ink/30 text-ink text-sm font-body font-medium tracking-widest uppercase px-8 py-4 hover:bg-ink/10 transition-all duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
