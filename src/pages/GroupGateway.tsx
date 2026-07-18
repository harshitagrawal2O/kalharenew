import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useTransform, useSpring, useInView, animate } from "framer-motion";
import { ArrowRight, ChevronDown, BadgeCheck, Settings, Globe2, Factory } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Scoped palette — deliberately not touching the shared Tailwind theme tokens,
// since those are tuned for the Kalhare/Pressmach sub-sites.
const GOLD = "#C89B3C";
const CARD = "#1A1C1E";
const OFFWHITE = "#F8F8F8";
const GRAY = "#B5B5B5";

const SECTION_PADDING = "py-24 md:py-[140px]";

const divisions = [
  {
    id: "kalhare",
    label: "Division I",
    name: "Kalhare Enterprises",
    tagline: "Premium Transformer Manufacturing",
    description: "Precision-engineered transformers for industrial and infrastructure applications — IS/IEC certified, built in Bangalore.",
    image: "/images/kalhare/hero.jpeg",
    href: "/kalhare",
  },
  {
    id: "pressmach",
    label: "Division II",
    name: "Pressmach Machine Tools",
    tagline: "Precision EDM Solutions",
    description: "Advanced EDM machine tools engineered for maximum productivity, accuracy, and uptime in every production run.",
    image: "/images/pressmach/g60-studio.jpeg",
    href: "/pressmach",
  },
];

const badges = [
  { icon: BadgeCheck, label: "ISO Certified" },
  { icon: Settings, label: "30+ Years Experience" },
  { icon: Globe2, label: "Export Ready" },
  { icon: Factory, label: "Manufacturing Excellence" },
];

const stats = [
  { value: 35, suffix: "+", label: "Years of Excellence" },
  { value: 5000, suffix: "+", label: "Transformers Delivered" },
  { value: 20, suffix: "+", label: "Industries Served" },
  { value: 100, suffix: "%", label: "IS/IEC Certified" },
];

const timeline = [
  { year: "1989", label: "Company Founded" },
  { year: "2003", label: "Manufacturing Expansion" },
  { year: "2014", label: "Machine Tools Division" },
  { year: "2025", label: "Global Engineering Solutions" },
];

function BlurWord({ word, delay }: { word: string; delay: number }) {
  return (
    <motion.span
      className="inline-block"
      initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.85, delay, ease: EASE }}
    >
      {word}
    </motion.span>
  );
}

function MagneticCTA({ href, children, onClick }: { href: string; children: ReactNode; onClick?: () => void }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useSpring(0, { stiffness: 200, damping: 20 });
  const y = useSpring(0, { stiffness: 200, damping: 20 });

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.35);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.35);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x, y, borderColor: `${GOLD}80`, color: GOLD }}
      className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl border px-8 py-4 text-xs font-body font-bold tracking-[0.2em] uppercase transition-colors duration-300"
    >
      <span
        className="absolute inset-0 -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"
        style={{ background: GOLD }}
      />
      <span className="relative flex items-center gap-3 group-hover:text-[#111315] transition-colors duration-300">
        {children}
      </span>
    </motion.a>
  );
}

function Particles() {
  const dots = [
    { x: 10, y: 25 }, { x: 20, y: 65 }, { x: 30, y: 40 },
    { x: 40, y: 80 }, { x: 55, y: 20 }, { x: 65, y: 55 },
    { x: 75, y: 35 }, { x: 85, y: 70 },
  ];
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {dots.map((d, i) => (
        <motion.div
          key={i}
          className="absolute w-0.5 h-0.5 rounded-full"
          style={{ left: `${d.x}%`, top: `${d.y}%`, background: `${GOLD}4D` }}
          animate={{ y: [0, -16, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 4 + (i % 3), delay: i * 0.5, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: EASE,
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

function TopBar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(17,19,21,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? `1px solid ${GOLD}1F` : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center">
          <img
            src="/images/kalhare-logo.jpeg"
            alt="Kalhare Groups"
            className="h-7 md:h-8 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
        </Link>
        <a
          href="mailto:kalhare@gmail.com"
          style={{ background: GOLD, color: "#111315" }}
          className="hidden sm:inline-flex items-center gap-2 rounded-lg text-xs font-body font-bold tracking-[0.15em] uppercase px-5 py-2.5 hover:bg-[#F8F8F8] transition-colors duration-300"
        >
          Contact Us
        </a>
      </div>
    </header>
  );
}

function DivisionCard({ division, index, showBorder }: { division: (typeof divisions)[0]; index: number; showBorder: boolean }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotX = useTransform(my, [-0.5, 0.5], ["2deg", "-2deg"]);
  const rotY = useTransform(mx, [-0.5, 0.5], ["-2deg", "2deg"]);

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.9, delay: index * 0.15, ease: EASE }}
      className="relative h-[460px] md:h-[560px] overflow-hidden rounded-2xl cursor-none group border-[3px] transition-colors duration-500"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{ perspective: 1000, borderColor: hovered ? GOLD : `${GOLD}4D` }}
    >
      <Link to={division.href} className="block h-full">
        <motion.div
          className="absolute inset-0 h-full"
          style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${division.image})` }}
            animate={{ scale: hovered ? 1.04 : 1.0 }}
            transition={{ duration: 0.9, ease: EASE }}
          />
          {/* Restrained overlay — ~45% flat, image stays legible */}
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
            <p style={{ color: `${GOLD}CC` }} className="text-[10px] tracking-[0.45em] uppercase mb-4 font-body">
              {division.label}
            </p>

            {/* Glass panel */}
            <div
              className="rounded-2xl p-6 md:p-7 border"
              style={{
                background: "rgba(20,20,20,0.55)",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              <h2 className="font-heading font-bold text-xl md:text-2xl leading-tight mb-2" style={{ color: OFFWHITE }}>
                {division.name}
              </h2>
              <p style={{ color: `${GOLD}CC` }} className="text-xs tracking-[0.25em] uppercase mb-3 font-body font-medium">
                {division.tagline}
              </p>
              <p style={{ color: GRAY }} className="text-sm font-body font-light leading-relaxed mb-5 max-w-sm">
                {division.description}
              </p>
              <motion.div
                className="flex items-center gap-3"
                animate={{ x: hovered ? 6 : 0 }}
                transition={{ duration: 0.3, ease: EASE }}
              >
                <span style={{ color: OFFWHITE }} className="text-sm font-body font-medium tracking-[0.2em] uppercase">
                  Explore Division
                </span>
                <ArrowRight size={14} style={{ color: GOLD }} />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Running gold border */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.rect
            x="0.75" y="0.75" width="98.5" height="98.5"
            rx="2"
            fill="none"
            stroke={GOLD}
            strokeWidth="0.8"
            pathLength={1}
            strokeDasharray="0.28 0.72"
            animate={showBorder
              ? { strokeDashoffset: [0, -1], opacity: 1 }
              : { opacity: 0, strokeDashoffset: 0 }
            }
            transition={showBorder
              ? {
                  strokeDashoffset: { duration: 0.65, repeat: Infinity, ease: "linear" },
                  opacity: { duration: 0.2 },
                }
              : { opacity: { duration: 0.2 } }
            }
          />
        </svg>
      </Link>
    </motion.div>
  );
}

export default function GroupGateway() {
  const [activeBorder, setActiveBorder] = useState<null | 0 | 1>(null);
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  const smoothX = useSpring(glowX, { stiffness: 60, damping: 20 });
  const smoothY = useSpring(glowY, { stiffness: 60, damping: 20 });

  return (
    <motion.div
      className="min-h-screen cursor-none"
      style={{ background: "#111315" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <TopBar />

      {/* ── HERO ── */}
      <section
        className="relative min-h-[92vh] flex flex-col items-center justify-center px-6 text-center pt-32 pb-20 overflow-hidden"
        onMouseMove={(e) => { glowX.set(e.clientX); glowY.set(e.clientY); }}
      >
        <div className="absolute inset-0 pointer-events-none blueprint-grid" style={{ opacity: 0.6 }} />
        <Particles />

        <motion.div
          className="absolute pointer-events-none rounded-full"
          style={{
            x: smoothX, y: smoothY,
            translateX: "-50%", translateY: "-50%",
            width: 500, height: 500,
            background: `radial-gradient(circle, ${GOLD}12 0%, transparent 70%)`,
          }}
        />

        <motion.div
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
          className="relative z-10 w-16 h-px mb-8"
          style={{ background: GOLD }}
        />

        <h1
          className="relative z-10 font-heading font-bold leading-[1.05] mb-6 flex flex-wrap justify-center gap-x-[0.22em]"
          style={{ fontSize: "clamp(2.5rem, 6.5vw, 5rem)", color: OFFWHITE }}
        >
          <BlurWord word="Engineering" delay={0.5} />
          <BlurWord word="Excellence" delay={0.68} />
        </h1>

        <h2
          className="relative z-10 font-heading italic font-medium mb-10"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", color: GOLD }}
        >
          <BlurWord word="Built for Industry" delay={0.85} />
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: EASE }}
          className="relative z-10 font-body font-light max-w-xl leading-relaxed mb-12"
          style={{ fontSize: 18, color: GRAY }}
        >
          A diversified engineering group delivering world-class transformers and precision machine tools.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.15, ease: EASE }}
          className="relative z-10"
        >
          <MagneticCTA href="#divisions" onClick={() => { setActiveBorder(0); setTimeout(() => setActiveBorder(1), 2000); setTimeout(() => setActiveBorder(null), 4000); }}>
            Explore Divisions <ArrowRight size={12} />
          </MagneticCTA>
        </motion.div>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown size={18} style={{ color: `${GRAY}80` }} />
        </motion.div>
      </section>

      {/* ── BADGES ── */}
      <div className="relative z-10 border-y" style={{ borderColor: `${GOLD}1A`, background: "rgba(255,255,255,0.015)" }}>
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {badges.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
              className="flex flex-col items-center gap-3 text-center"
            >
              <Icon size={22} strokeWidth={1.5} style={{ color: GOLD }} />
              <p style={{ color: GRAY }} className="text-[11px] font-body tracking-[0.2em] uppercase">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── DIVISION CARDS ── */}
      <section id="divisions" className={SECTION_PADDING}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            className="text-center mb-16"
          >
            <p style={{ color: `${GOLD}99` }} className="text-xs tracking-[0.4em] uppercase font-body mb-4">Our Divisions</p>
            <h2 className="font-heading font-bold" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", color: OFFWHITE }}>
              Two Disciplines. One Standard.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {divisions.map((d, i) => (
              <DivisionCard key={d.id} division={d} index={i} showBorder={activeBorder === i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className={`relative ${SECTION_PADDING} overflow-hidden`}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/pressmach/factory-floor.jpeg)" }}
        />
        <div className="absolute inset-0" style={{ background: "rgba(17,19,21,0.88)" }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
                className="rounded-2xl p-8 md:p-10 text-center border"
                style={{
                  background: "rgba(20,20,20,0.55)",
                  backdropFilter: "blur(18px)",
                  WebkitBackdropFilter: "blur(18px)",
                  borderColor: "rgba(255,255,255,0.08)",
                }}
              >
                <p className="font-heading font-bold text-3xl md:text-4xl mb-2" style={{ color: GOLD }}>
                  <CountUp value={s.value} suffix={s.suffix} />
                </p>
                <p style={{ color: GRAY }} className="text-xs font-body tracking-widest uppercase">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className={SECTION_PADDING}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            className="text-center mb-20"
          >
            <p style={{ color: `${GOLD}99` }} className="text-xs tracking-[0.4em] uppercase font-body mb-4">Our Journey</p>
            <h2 className="font-heading font-bold" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", color: OFFWHITE }}>
              Decades in the Making.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 sm:gap-6">
            {timeline.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: EASE }}
                className="relative text-center px-4"
              >
                <div className="hidden sm:block absolute top-[9px] left-0 right-0 h-px" style={{ background: `${GOLD}30` }} />
                <div className="relative flex sm:flex-col items-center gap-4 sm:gap-4">
                  <span
                    className="w-[9px] h-[9px] rounded-full shrink-0 z-10"
                    style={{ background: GOLD, boxShadow: `0 0 0 4px ${CARD}` }}
                  />
                  <div className="text-left sm:text-center">
                    <p className="font-heading font-bold text-2xl mb-1" style={{ color: OFFWHITE }}>{t.year}</p>
                    <p style={{ color: GRAY }} className="text-xs font-body tracking-wider uppercase">{t.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER META ── */}
      <div className="border-t py-10 text-center" style={{ borderColor: `${GOLD}14` }}>
        <p style={{ color: `${GRAY}80` }} className="text-[10px] font-body tracking-[0.4em] uppercase">
          Kachohalli &middot; Bangalore &middot; India
        </p>
      </div>
    </motion.div>
  );
}
