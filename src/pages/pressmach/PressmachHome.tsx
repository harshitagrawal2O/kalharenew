import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronDown,
  Zap,
  Target,
  Settings2,
  Award,
} from "lucide-react";

function usePingPongVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let rafId = 0;
    let rate = 1;
    let cancelled = false;

    const playForward = () => {
      el.playbackRate = rate;
      el.play().catch(() => {});
    };

    const playReverse = () => {
      el.pause();
      let last = performance.now();
      const step = (now: number) => {
        if (cancelled) return;
        const dt = (now - last) / 1000;
        last = now;
        el.currentTime = Math.max(0, el.currentTime - dt * rate);
        if (el.currentTime <= 0.03) {
          el.currentTime = 0;
          playForward();
        } else {
          rafId = requestAnimationFrame(step);
        }
      };
      rafId = requestAnimationFrame(step);
    };

    const handleLoadedMetadata = () => {
      if (el.duration && isFinite(el.duration)) {
        // Stretch one forward pass to take exactly 1 second longer.
        rate = el.duration / (el.duration + 1);
      }
      playForward();
    };

    const handleEnded = () => playReverse();

    el.addEventListener("loadedmetadata", handleLoadedMetadata);
    el.addEventListener("ended", handleEnded);
    if (el.readyState >= 1) handleLoadedMetadata();

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      el.removeEventListener("loadedmetadata", handleLoadedMetadata);
      el.removeEventListener("ended", handleEnded);
    };
  }, []);

  return ref;
}

const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: {
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
  },
};

const machines = [
  {
    id: "g30",
    model: "G-30",
    tagline: "Compact Precision",
    desc: "Entry-level Die-Sinking EDM. Designed for small workshops demanding industrial-grade accuracy in a compact footprint.",
    image: "/images/pressmach/g30-green.jpeg",
    specs: [
      { label: "Table", value: "300 × 200mm" },
      { label: "Z-Travel", value: "200mm" },
      { label: "Accuracy", value: "±0.005mm" },
    ],
  },
  {
    id: "g45",
    model: "G-45",
    tagline: "Mid-Range Versatility",
    desc: "The most versatile machine in the lineup. Handles a wide range of tooling and mould work with consistent surface finish.",
    image: "/images/pressmach/g45-yellow.jpeg",
    specs: [
      { label: "Table", value: "450 × 300mm" },
      { label: "Z-Travel", value: "300mm" },
      { label: "Accuracy", value: "±0.003mm" },
    ],
  },
  {
    id: "g60",
    model: "G-60",
    tagline: "Flagship Performance",
    desc: "Full-scale semi-CNC EDM. Built for high-throughput production environments that demand repeatability and surface quality.",
    image: "/images/pressmach/g60-studio.jpeg",
    specs: [
      { label: "Table", value: "600 × 400mm" },
      { label: "Z-Travel", value: "400mm" },
      { label: "Accuracy", value: "±0.002mm" },
    ],
  },
];

const stats = [
  { value: "±0.002mm", label: "Peak Accuracy" },
  { value: "3", label: "Machine Series" },
  { value: "Semi-CNC", label: "Control Type" },
  { value: "Bangalore", label: "Manufactured In" },
];

export default function PressmachHome() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroVideoRef = usePingPongVideo();
  const insightVideoRef = usePingPongVideo();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* â”€â”€ HERO VIDEO â”€â”€ */}
      <section
        ref={heroRef}
        className="relative h-screen overflow-hidden bg-ink"
      >
        <motion.div style={{ scale: heroScale }} className="absolute inset-0">
          <video
            ref={heroVideoRef}
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/pressmach-exploded.mp4" type="video/mp4" />
          </video>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/30 to-ink" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,175,55,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.6) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-gold/70 text-xs tracking-[0.5em] uppercase font-body mb-8"
          >
            PRESSMACH MACHINE TOOLS · BANGALORE
          </motion.p>

          <div className="overflow-hidden mb-3">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                delay: 0.7,
                duration: 1,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
              className="font-heading font-bold text-white leading-[0.9]"
              style={{ fontSize: "clamp(2.25rem, 8vw, 8rem)" }}
            >
              Precision
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-3">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                delay: 0.85,
                duration: 1,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
              className="font-heading font-bold italic text-gold leading-[0.9]"
              style={{ fontSize: "clamp(2.25rem, 8vw, 8rem)" }}
            >
              Engineered.
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-3">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                delay: 1.0,
                duration: 1,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
              className="font-heading font-bold text-white/80 leading-[0.9]"
              style={{ fontSize: "clamp(2.25rem, 8vw, 8rem)" }}
            >
              Built for
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                delay: 1.12,
                duration: 1,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
              className="font-heading font-bold text-white/80 leading-[0.9]"
              style={{ fontSize: "clamp(1.5rem, 8vw, 8rem)" }}
            >
              Manufacturing.
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="text-white/40 font-body font-light text-base md:text-lg max-w-2xl mt-8 leading-relaxed"
          >
            Die-Sinking EDM machines built in Bangalore. Engineered for Indian
            manufacturing conditions — accuracy, uptime, and total cost of
            ownership.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.5,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
            className="flex flex-wrap gap-4 justify-center mt-10"
          >
            <Link
              to="/pressmach/machines"
              className="flex items-center gap-3 bg-gold text-ink text-xs font-body font-semibold tracking-widest uppercase px-8 py-4 hover:bg-white transition-all duration-300"
            >
              Explore Machines <ArrowRight size={14} />
            </Link>
            <Link
              to="/pressmach/custom"
              className="flex items-center gap-3 border border-white/25 text-white text-xs font-body font-medium tracking-widest uppercase px-8 py-4 hover:border-gold hover:text-gold transition-all duration-400"
            >
              Custom Machine
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          >
            <ChevronDown size={20} className="text-white/30" />
          </motion.div>
        </motion.div>
      </section>

      {/* â”€â”€ STATS STRIP â”€â”€ */}
      <section className="bg-ink border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                }}
                className="py-8 md:py-12 px-6 md:px-10 text-center"
              >
                <p className="font-heading font-bold text-gold text-3xl md:text-4xl mb-1">
                  {s.value}
                </p>
                <p className="text-white/35 font-body text-xs tracking-widest uppercase">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ MACHINE LINEUP â”€â”€ */}
      <section className="py-24 md:py-36 bg-ink">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="mb-16">
            <p className="text-gold/60 text-xs tracking-[0.4em] uppercase font-body mb-5">
              The Lineup
            </p>
            <h2
              className="font-heading font-bold text-white leading-[0.92] max-w-2xl"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              Three Machines. One Standard.
            </h2>
            <div className="w-16 h-px bg-gold mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {machines.map((m, i) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.15,
                  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                }}
                className="group relative bg-white/3 border border-white/6 overflow-hidden hover:border-gold/30 transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={m.image}
                    alt={m.model}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                </div>
                <div className="p-8">
                  <p className="text-gold/60 font-body text-xs tracking-[0.3em] uppercase mb-2">
                    {m.tagline}
                  </p>
                  <h3 className="font-heading font-bold text-white text-3xl mb-3">
                    {m.model}
                  </h3>
                  <div className="w-8 h-px bg-gold mb-4" />
                  <p className="text-white/45 font-body font-light text-sm leading-relaxed mb-6">
                    {m.desc}
                  </p>
                  <div className="space-y-2 mb-8">
                    {m.specs.map((s) => (
                      <div
                        key={s.label}
                        className="flex justify-between text-xs font-body border-b border-white/5 pb-2"
                      >
                        <span className="text-white/35 tracking-wider uppercase">
                          {s.label}
                        </span>
                        <span className="text-gold/80 font-medium">
                          {s.value}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/pressmach/machines"
                    className="flex items-center gap-2 text-white/50 hover:text-gold text-xs font-body tracking-widest uppercase transition-colors duration-300 group/link"
                  >
                    <span className="border-b border-white/20 group-hover/link:border-gold pb-0.5 transition-all duration-300">
                      Explore
                    </span>
                    <ArrowRight
                      size={12}
                      className="group-hover/link:translate-x-1 transition-transform duration-300"
                    />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ ABOUT EDITORIAL â”€â”€ */}
      <section className="py-24 md:py-36 bg-white/[0.02] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
              className="aspect-[4/5] overflow-hidden"
            >
              <img
                src="/images/pressmach/factory-floor.jpeg"
                alt="Pressmach factory"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-ink/10" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
              className="absolute -bottom-6 -right-6 bg-gold p-8 hidden md:block"
            >
              <p className="font-heading font-bold text-ink text-3xl leading-none">
                EDM
              </p>
              <p className="text-ink/60 font-body text-xs tracking-widest uppercase mt-1">
                Die Sinking
                <br />
                Specialists
              </p>
            </motion.div>
          </div>

          <div>
            <motion.p
              {...fadeUp}
              className="text-gold/60 text-xs tracking-[0.4em] uppercase font-body mb-6"
            >
              The Pressmach Way
            </motion.p>
            <motion.h2
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="font-heading font-bold italic text-white leading-[0.9] mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Built Different.
            </motion.h2>
            <motion.h2
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.15 }}
              className="font-heading font-bold text-white/80 leading-[0.9] mb-8"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Built Precisely.
            </motion.h2>
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
              className="w-16 h-px bg-gold mb-8"
            />
            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.25 }}
              className="text-white/50 font-body font-light text-lg leading-relaxed mb-6"
            >
              Pressmach machines are designed for Indian manufacturing
              conditions. Every component — from the Stepper and servo Z-axis
              to the dielectric system — is engineered for reliability in
              continuous production environments.
            </motion.p>
            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.3 }}
              className="text-white/35 font-body font-light text-base leading-relaxed mb-10"
            >
              We don't import and rebadge. Every Pressmach machine is built at
              our Bangalore facility, tested, and calibrated before dispatch.
              Your application engineer is here, not on another continent.
            </motion.p>
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.4 }}
            >
              <Link
                to="/pressmach/about"
                className="flex items-center gap-3 text-gold font-body font-medium text-sm tracking-wider uppercase group w-fit"
              >
                <span className="border-b border-gold pb-0.5 group-hover:border-white/60 group-hover:text-white/60 transition-all duration-300">
                  Our Story
                </span>
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-2 transition-transform duration-300"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* â”€â”€ CAPABILITIES â”€â”€ */}
      <section className="py-20 bg-ink border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <p className="text-gold/60 text-xs tracking-[0.4em] uppercase font-body mb-4">
              Why Pressmach
            </p>
            <h2
              className="font-heading font-bold text-white"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Built for the Production Floor.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
            {[
              {
                icon: <Target size={22} />,
                title: "Micron Accuracy",
                desc: "±0.002mm repeatability across full servo travel range",
              },
              {
                icon: <Zap size={22} />,
                title: "Adaptive Power",
                desc: "Generator technology that responds to material and geometry changes",
              },
              {
                icon: <Settings2 size={22} />,
                title: "Semi-CNC Control",
                desc: "Precision Z-axis servo with digital depth control and memory",
              },
              {
                icon: <Award size={22} />,
                title: "Indian Support",
                desc: "Local engineers, local spares, fast turnaround on service calls",
              },
            ].map((c, i) => (
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
                className="bg-white/3 border border-white/6 p-8 hover:border-gold/25 hover:bg-white/5 transition-all duration-400"
              >
                <div className="text-gold mb-5">{c.icon}</div>
                <h3 className="font-body font-semibold text-white text-base mb-3">
                  {c.title}
                </h3>
                <p className="text-white/40 font-body font-light text-sm leading-relaxed">
                  {c.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ VIDEO SECTION â”€â”€ */}
      <section className="relative h-[70vh] overflow-hidden">
        <video
          ref={insightVideoRef}
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/pressmach-exploded.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-ink/65" />
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold/60 text-xs tracking-[0.4em] uppercase font-body mb-6"
          >
            Engineering Insight
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
            className="font-heading font-bold text-white leading-tight max-w-3xl"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            Every part designed with purpose. Every tolerance held with
            precision.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-10"
          >
            <Link
              to="/pressmach/custom"
              className="inline-flex items-center gap-3 border border-gold/40 text-gold text-xs font-body font-medium tracking-widest uppercase px-8 py-4 hover:bg-gold hover:text-ink transition-all duration-300"
            >
              Configure Your Machine <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* â”€â”€ CUSTOM CTA â”€â”€ */}
      <section className="py-20 bg-ink border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.p
              {...fadeUp}
              className="text-gold/60 text-xs tracking-[0.4em] uppercase font-body mb-5"
            >
              Custom Machines
            </motion.p>
            <motion.h2
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="font-heading font-bold text-white leading-tight mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Standard doesn't fit your process? We build to spec.
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
              className="text-white/40 font-body font-light text-base leading-relaxed mb-8"
            >
              Special table dimensions, dielectric variants, modified servo
              systems, or custom control interfaces — our engineering team
              builds to your exact manufacturing requirements.
            </motion.p>
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/pressmach/custom"
                className="inline-flex items-center gap-3 bg-gold text-ink text-xs font-body font-semibold tracking-widest uppercase px-8 py-4 hover:bg-white transition-all duration-300"
              >
                Configure Machine <ArrowRight size={14} />
              </Link>
              <Link
                to="/pressmach/contact"
                className="inline-flex items-center gap-3 border border-white/20 text-white/70 text-xs font-body tracking-widest uppercase px-8 py-4 hover:border-gold hover:text-gold transition-all duration-300"
              >
                Speak to Engineering
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
            className="aspect-[4/3] overflow-hidden"
          >
            <img
              src="/images/pressmach/control-panel.jpeg"
              alt="Machine control"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
