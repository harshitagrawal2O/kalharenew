import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, Maximize2 } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

type Machine = {
  id: string;
  model: string;
  series: string;
  tagline: string;
  heroImage: string;
  gallery: string[];
  description: string;
  highlights: string[];
  specs: { label: string; value: string }[];
  applications: string[];
};

const machines: Machine[] = [
  {
    id: "g30",
    model: "G-30(i)",
    series: "Compact Series",
    tagline: "Precision in a compact frame.",
    heroImage: "/images/pressmach/g30-green.jpeg",
    gallery: ["/images/pressmach/g30-green.jpeg", "/images/pressmach/g30-red.jpeg", "/images/pressmach/g30-green2.jpeg"],
    description: "The G-30(i) is Pressmach's entry-level Die-Sinking EDM — designed for small tool rooms, training centres, and workshops transitioning from manual to EDM-based toolmaking. It offers industrial-grade accuracy in the most compact footprint in our lineup.",
    highlights: [
      "Servo Z-axis with digital depth control",
      "Integrated flush system with flow regulation",
      "Compact footprint — suits limited floor space",
      "Easy operator interface, minimal training required",
      "Compatible with most EDM oils",
    ],
    specs: [
      { label: "Table Size (X × Y)", value: "300 × 200 mm" },
      { label: "Z-Axis Travel", value: "200 mm" },
      { label: "Max Electrode Weight", value: "15 kg" },
      { label: "Work Tank Capacity (L × W × H)", value: "500 × 380 × 300 mm" },
      { label: "Max Workpiece Weight", value: "200 kg" },
      { label: "Positional Accuracy", value: "±0.005 mm" },
      { label: "Surface Finish (Ra)", value: "0.4 µm" },
      { label: "Machine Weight", value: "~450 kg" },
      { label: "Power Supply", value: "3-Phase, 415V AC" },
    ],
    applications: ["Small tool rooms", "Training and vocational centres", "Punch and die work", "Small cavity machining", "Prototype tooling"],
  },
  {
    id: "g45",
    model: "G-45(i)",
    series: "Mid-Range Series",
    tagline: "The most versatile machine in the lineup.",
    heroImage: "/images/pressmach/g45-yellow.jpeg",
    gallery: ["/images/pressmach/g45-yellow.jpeg", "/images/pressmach/cnc-semi.jpeg", "/images/pressmach/control-panel.jpeg"],
    description: "The G-45(i) targets the broad middle of the precision tooling market — medium-complexity moulds, punch-die work, and production cavity sinking. It combines a larger work envelope with the same servo Z-axis accuracy as the G-60, making it the natural choice for shops that outgrew the G-30.",
    highlights: [
      "Servo Z-axis with programmable cycle memory",
      "Larger work tank for mid-size moulds and blocks",
      "Improved dielectric flow control for better finish consistency",
      "Optional X/Y digital readout",
      "Enhanced generator for harder materials",
    ],
    specs: [
      { label: "Table Size (X × Y)", value: "450 × 300 mm" },
      { label: "Z-Axis Travel", value: "300 mm" },
      { label: "Max Electrode Weight", value: "30 kg" },
      { label: "Work Tank Capacity (L × W × H)", value: "700 × 500 × 400 mm" },
      { label: "Max Workpiece Weight", value: "400 kg" },
      { label: "Positional Accuracy", value: "±0.003 mm" },
      { label: "Surface Finish (Ra)", value: "0.2 µm" },
      { label: "Machine Weight", value: "~850 kg" },
      { label: "Power Supply", value: "3-Phase, 415V AC" },
    ],
    applications: ["Medium mould making", "Precision punch-die sets", "Production cavity sinking", "Automotive components", "Plastic injection mould tooling"],
  },
  {
    id: "g60",
    model: "G-60(i)",
    series: "Flagship Series",
    tagline: "Full-scale. Full-precision. Built for production.",
    heroImage: "/images/pressmach/g60-studio.jpeg",
    gallery: ["/images/pressmach/g60-studio.jpeg", "/images/pressmach/g60-yellow.jpeg", "/images/pressmach/g60-black.jpeg"],
    description: "The G-60(i) is Pressmach's flagship machine — built for production tool rooms, die-casting mould makers, and precision component manufacturers who demand the highest surface quality, the tightest tolerances, and consistent repeatability across high run volumes. The G-60(i) is the benchmark against which we measure everything else we build.",
    highlights: [
      "Full semi-CNC servo with cycle programming and memory",
      "Advanced generator with micro-pulse capability",
      "Superior dielectric flushing for complex deep cavities",
      "Heavy-duty cast iron structure for vibration damping",
      "Optional orbital motion for improved surface finish",
    ],
    specs: [
      { label: "Table Size (X × Y)", value: "600 × 400 mm" },
      { label: "Z-Axis Travel", value: "400 mm" },
      { label: "Max Electrode Weight", value: "60 kg" },
      { label: "Work Tank Capacity (L × W × H)", value: "900 × 650 × 500 mm" },
      { label: "Max Workpiece Weight", value: "800 kg" },
      { label: "Positional Accuracy", value: "±0.002 mm" },
      { label: "Surface Finish (Ra)", value: "0.1 µm" },
      { label: "Machine Weight", value: "~1,500 kg" },
      { label: "Power Supply", value: "3-Phase, 415V AC" },
    ],
    applications: ["Die-casting mould tooling", "Aerospace and defence components", "High-volume production tool rooms", "Deep cavity complex moulds", "Medical device tooling"],
  },
  {
    id: "awesome",
    model: "AWESOME-1500",
    series: "Large Format",
    tagline: "When the job simply won't fit anything else.",
    heroImage: "/images/pressmach/awesome-1500.jpeg",
    gallery: ["/images/pressmach/awesome-1500.jpeg", "/images/pressmach/factory-floor.jpeg"],
    description: "The AWESOME-1500 is Pressmach's large-format EDM — built for oversized moulds, die blocks, and components that exceed the working envelope of standard machines. It retains the same servo-driven precision architecture as the G-60(i) but in a significantly larger structural frame.",
    highlights: [
      "Extra-large work tank for jumbo moulds and die blocks",
      "Full semi-CNC servo system",
      "Heavy-duty overhead ram structure",
      "Optional multiple electrode holders",
      "High-power generator for rapid material removal",
    ],
    specs: [
      { label: "Table Size (X × Y)", value: "1,500 × 900 mm" },
      { label: "Z-Axis Travel", value: "600 mm" },
      { label: "Max Electrode Weight", value: "150 kg" },
      { label: "Work Tank Capacity (L × W × H)", value: "1,700 × 1,100 × 700 mm" },
      { label: "Max Workpiece Weight", value: "3,000 kg" },
      { label: "Positional Accuracy", value: "±0.003 mm" },
      { label: "Surface Finish (Ra)", value: "0.2 µm" },
      { label: "Machine Weight", value: "~5,000 kg" },
      { label: "Power Supply", value: "3-Phase, 415V AC" },
    ],
    applications: ["Large injection mould blocks", "Heavy stamping dies", "Forging die tooling", "Large automotive tooling", "Custom structural component machining"],
  },
];

function MachineCard({ m, index }: { m: Machine; index: number }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [specsOpen, setSpecsOpen] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <section className={`py-24 md:py-36 border-t border-white/5 ${isEven ? "bg-ink" : "bg-white/[0.02]"}`}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Section label */}
        <motion.div {...fadeUp} className="mb-16">
          <span className="text-white/20 font-body text-xs tracking-[0.4em] uppercase">
            {String(index + 1).padStart(2, "0")} / {String(machines.length).padStart(2, "0")}
          </span>
          <span className="text-white/10 mx-3">—</span>
          <span className="text-gold/50 font-body text-xs tracking-[0.3em] uppercase">{m.series}</span>
        </motion.div>

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${!isEven ? "lg:[&>*:first-child]:order-last" : ""}`}>

          {/* Images */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: isEven ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="relative aspect-[4/3] overflow-hidden bg-white/3"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedImage}
                  src={m.gallery[selectedImage]}
                  alt={m.model}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
              <div className="absolute top-4 right-4 bg-ink/60 backdrop-blur-sm p-2">
                <Maximize2 size={14} className="text-white/40" />
              </div>
            </motion.div>
            {m.gallery.length > 1 && (
              <div className="flex gap-2 mt-3">
                {m.gallery.map((img, gi) => (
                  <button
                    key={gi}
                    onClick={() => setSelectedImage(gi)}
                    className={`flex-1 aspect-[3/2] overflow-hidden border-b-2 transition-all duration-300 ${gi === selectedImage ? "border-gold" : "border-transparent opacity-50 hover:opacity-75"}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Content */}
          <div>
            <motion.p {...fadeUp} className="text-gold/50 font-body text-xs tracking-[0.4em] uppercase mb-4">{m.series}</motion.p>
            <motion.h2
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="font-heading font-bold text-white leading-none mb-2"
              style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}
            >
              {m.model}
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.15 }}
              className="font-heading italic text-white/40 text-lg mb-6"
            >
              {m.tagline}
            </motion.p>
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.18 }} className="w-16 h-px bg-gold mb-7" />
            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
              className="text-white/45 font-body font-light text-base leading-relaxed mb-8"
            >
              {m.description}
            </motion.p>

            {/* Highlights */}
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.25 }} className="mb-8">
              <p className="text-white/25 font-body text-xs tracking-[0.3em] uppercase mb-4">Key Features</p>
              <div className="space-y-2">
                {m.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-gold rounded-full mt-2 flex-shrink-0" />
                    <p className="text-white/50 font-body text-sm leading-relaxed">{h}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Applications */}
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }} className="mb-8">
              <p className="text-white/25 font-body text-xs tracking-[0.3em] uppercase mb-3">Applications</p>
              <div className="flex flex-wrap gap-2">
                {m.applications.map((a) => (
                  <span key={a} className="text-xs font-body text-white/40 border border-white/10 px-3 py-1.5 hover:border-gold/30 hover:text-gold/60 transition-all duration-300">
                    {a}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Specs accordion */}
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.35 }}>
              <button
                onClick={() => setSpecsOpen(!specsOpen)}
                className="w-full flex items-center justify-between border border-white/10 px-5 py-4 text-left hover:border-gold/30 transition-all duration-300"
              >
                <span className="text-white/60 font-body text-xs tracking-[0.3em] uppercase">Technical Specifications</span>
                <motion.div animate={{ rotate: specsOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown size={16} className="text-white/30" />
                </motion.div>
              </button>
              <AnimatePresence>
                {specsOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                    className="overflow-hidden border-x border-b border-white/10"
                  >
                    <div className="p-5">
                      {m.specs.map((s, si) => (
                        <div key={s.label} className={`flex justify-between py-3 text-sm font-body ${si < m.specs.length - 1 ? "border-b border-white/5" : ""}`}>
                          <span className="text-white/30">{s.label}</span>
                          <span className="text-gold/70 font-medium">{s.value}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* CTA */}
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.4 }} className="mt-8 flex gap-4">
              <Link
                to="/pressmach/custom"
                className="flex items-center gap-2 bg-gold text-ink text-xs font-body font-semibold tracking-widest uppercase px-6 py-3.5 hover:bg-white transition-all duration-300"
              >
                Request Quote <ArrowRight size={12} />
              </Link>
              <Link
                to="/pressmach/contact"
                className="flex items-center gap-2 border border-white/15 text-white/50 text-xs font-body tracking-widest uppercase px-6 py-3.5 hover:border-gold/30 hover:text-gold transition-all duration-300"
              >
                Speak to Us
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PressmachMachines() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>

      {/* â”€â”€ HERO â”€â”€ */}
      <section className="relative h-[60vh] overflow-hidden">
        <img src="/images/pressmach/g60-studio.jpeg" alt="Pressmach machines" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/55 to-ink" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(rgba(212,175,55,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.6) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 pt-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gold/60 text-xs tracking-[0.4em] uppercase font-body mb-6"
          >
            The Lineup
          </motion.p>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="font-heading font-bold text-white leading-[0.9]"
              style={{ fontSize: "clamp(2rem, 6vw, 5.5rem)" }}
            >
              Machine Tools
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-white/40 font-body font-light text-base max-w-xl mt-5 leading-relaxed"
          >
            Four Die-Sinking EDM machines. Three series. One engineering philosophy.
          </motion.p>
        </div>
      </section>

      {/* â”€â”€ MACHINES â”€â”€ */}
      {machines.map((m, i) => <MachineCard key={m.id} m={m} index={i} />)}

      {/* â”€â”€ CUSTOM CTA â”€â”€ */}
      <section className="py-20 bg-gold">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.p {...fadeUp} className="text-ink/40 text-xs tracking-[0.4em] uppercase font-body mb-6">Custom Build</motion.p>
          <motion.h2
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="font-heading font-bold text-ink leading-tight mb-8"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            Need a non-standard machine? We build to your specification.
          </motion.h2>
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}>
            <Link
              to="/pressmach/custom"
              className="inline-flex items-center gap-3 bg-ink text-white text-sm font-body font-semibold tracking-widest uppercase px-8 py-4 hover:bg-ink/80 transition-colors duration-300"
            >
              Configure Custom Machine <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

    </motion.div>
  );
}
