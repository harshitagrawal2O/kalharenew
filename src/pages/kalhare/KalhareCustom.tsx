import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const steps = ["Transformer Type", "Application Details", "Specifications", "Review & Submit"];

const transformerTypes = [
  { id: "step-up", label: "Step-Up Transformer", desc: "Increase voltage for distribution or generation output." },
  { id: "step-down", label: "Step-Down Transformer", desc: "Reduce voltage for equipment and machinery input." },
  { id: "isolation", label: "Isolation Transformer", desc: "Electrically decouple input and output for safety." },
  { id: "auto", label: "Auto Transformer", desc: "Variable or fixed ratio, single winding economy." },
  { id: "toroidal", label: "Toroidal Transformer", desc: "Low leakage, compact form factor for sensitive electronics." },
  { id: "inverter", label: "Inverter / Solar Transformer", desc: "Low loss, DC-AC inversion for solar and UPS systems." },
  { id: "charger", label: "Battery Charger Transformer", desc: "Optimised for rectifier and charger duty." },
  { id: "other", label: "Other / Not Sure", desc: "Describe your requirement and our engineers will advise." },
];

const phaseOptions = [
  { id: "single", label: "Single Phase" },
  { id: "three", label: "Three Phase" },
];

const mountingOptions = [
  { id: "floor", label: "Floor Mount" },
  { id: "wall", label: "Wall Mount" },
  { id: "rack", label: "Rack Mount / Panel" },
  { id: "pcb", label: "PCB Mount" },
];

interface FormData {
  type: string;
  phase: string;
  kva: string;
  primaryV: string;
  secondaryV: string;
  frequency: string;
  mounting: string;
  application: string;
  cooling: string;
  enclosure: string;
  qty: string;
  timeline: string;
  certReq: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  notes: string;
}

const initialForm: FormData = {
  type: "", phase: "", kva: "", primaryV: "", secondaryV: "", frequency: "50",
  mounting: "", application: "", cooling: "", enclosure: "",
  qty: "1", timeline: "", certReq: "",
  name: "", company: "", email: "", phone: "", notes: "",
};

export default function KalhareCustom() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const set = (k: keyof FormData, v: string) => setForm(f => ({ ...f, [k]: v }));
  const next = () => setStep(s => Math.min(s + 1, steps.length - 1));
  const prev = () => setStep(s => Math.max(s - 1, 0));

  const inputCls = "w-full bg-white/5 border border-white/10 text-white placeholder-white/25 font-body text-sm px-4 py-3 focus:outline-none focus:border-gold/50 transition-colors duration-300";
  const labelCls = "text-white/40 font-body text-xs tracking-[0.3em] uppercase mb-2 block";

  if (submitted) {
    return (
      <div className="min-h-screen bg-navy-950 flex items-center justify-center px-6">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, ease: EASE }} className="max-w-lg w-full text-center">
          <div className="w-16 h-16 border border-gold/40 flex items-center justify-center mx-auto mb-8">
            <CheckCircle size={28} className="text-gold" />
          </div>
          <h2 className="font-heading font-bold text-white text-3xl mb-4">Enquiry Submitted</h2>
          <p className="text-white/40 font-body font-light text-base leading-relaxed mb-10">
            Thank you. Our engineering team will review your requirements and respond within 24 hours.
          </p>
          <Link to="/kalhare" className="inline-flex items-center gap-2 bg-gold text-ink text-sm font-body font-semibold tracking-widest uppercase px-8 py-4">
            Back to Kalhare
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      {/* HERO */}
      <section className="relative py-32 bg-navy-950 pt-40 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
        <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7, ease: EASE }} className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-gold" />
            <p className="text-gold/70 text-xs tracking-[0.5em] uppercase font-body">Custom Configuration</p>
            <div className="h-px w-12 bg-gold" />
          </motion.div>
          <div className="overflow-hidden mb-3">
            <motion.h1 initial={{ y: "100%", filter: "blur(6px)" }} animate={{ y: 0, filter: "blur(0px)" }} transition={{ delay: 0.4, duration: 1, ease: EASE }} className="font-heading font-bold text-white leading-[0.9]" style={{ fontSize: "clamp(2.25rem, 5vw, 5rem)" }}>
              Build Your
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-3">
            <motion.h1 initial={{ y: "100%", filter: "blur(6px)" }} animate={{ y: 0, filter: "blur(0px)" }} transition={{ delay: 0.55, duration: 1, ease: EASE }} className="font-heading font-bold italic text-gold leading-[0.9]" style={{ fontSize: "clamp(2.25rem, 5vw, 5rem)" }}>
              Custom
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1 initial={{ y: "100%", filter: "blur(6px)" }} animate={{ y: 0, filter: "blur(0px)" }} transition={{ delay: 0.68, duration: 1, ease: EASE }} className="font-heading font-bold italic text-gold leading-[0.9]" style={{ fontSize: "clamp(2.25rem, 5vw, 5rem)" }}>
              Transformer.
            </motion.h1>
          </div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="text-white/35 font-body font-light text-base mt-6 leading-relaxed">
            Complete the form below. Our engineers will review your requirements and provide a detailed quotation within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* STEP INDICATOR */}
      <div className="bg-white/2 border-t border-b border-gold/8 py-6">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center gap-2 overflow-x-auto">
            {steps.map((label, i) => (
              <div key={label} className="flex items-center gap-2 shrink-0">
                <div className="flex items-center gap-2">
                  <div className={`w-7 h-7 flex items-center justify-center text-xs font-body font-semibold transition-all duration-500 ${i < step ? "bg-gold text-ink" : i === step ? "bg-white text-ink" : "bg-white/10 text-white/30"}`}>
                    {i < step ? <CheckCircle size={14} /> : i + 1}
                  </div>
                  <span className={`text-xs font-body tracking-wide hidden sm:block ${i === step ? "text-white" : "text-white/30"}`}>{label}</span>
                </div>
                {i < steps.length - 1 && <ChevronRight size={14} className="text-white/15 ml-1" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FORM */}
      <section className="py-20 bg-navy-950 min-h-[60vh]">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div key="step0" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.4, ease: EASE }}>
                <h3 className="font-heading font-bold text-white text-2xl mb-2">Select Transformer Type</h3>
                <p className="text-white/35 font-body text-sm mb-8">Choose the transformer category that best matches your requirement.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                  {transformerTypes.map(t => (
                    <button key={t.id} onClick={() => set("type", t.id)} className={`text-left p-5 border transition-all duration-300 ${form.type === t.id ? "border-gold/60 bg-gold/5" : "border-white/8 bg-white/2 hover:border-white/20"}`}>
                      <p className={`font-body font-semibold text-sm mb-1.5 ${form.type === t.id ? "text-gold" : "text-white/70"}`}>{t.label}</p>
                      <p className="text-white/30 font-body font-light text-xs leading-relaxed">{t.desc}</p>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.4, ease: EASE }}>
                <h3 className="font-heading font-bold text-white text-2xl mb-2">Application Details</h3>
                <p className="text-white/35 font-body text-sm mb-8">Help us understand the operating environment and use case.</p>
                <div className="space-y-6 mb-10">
                  <div>
                    <label className={labelCls}>Phase Configuration</label>
                    <div className="grid grid-cols-2 gap-3">
                      {phaseOptions.map(o => (
                        <button key={o.id} onClick={() => set("phase", o.id)} className={`py-3.5 text-sm font-body font-medium border transition-all duration-300 ${form.phase === o.id ? "border-gold/60 bg-gold/5 text-gold" : "border-white/8 bg-white/2 text-white/50 hover:border-white/20"}`}>
                          {o.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className={labelCls}>Application / Industry</label>
                    <input className={inputCls} value={form.application} onChange={e => set("application", e.target.value)} placeholder="e.g. CNC machinery, UPS system, Solar inverter, Welding" />
                  </div>
                  <div>
                    <label className={labelCls}>Mounting Type</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {mountingOptions.map(o => (
                        <button key={o.id} onClick={() => set("mounting", o.id)} className={`py-3 text-xs font-body font-medium border transition-all duration-300 ${form.mounting === o.id ? "border-gold/60 bg-gold/5 text-gold" : "border-white/8 bg-white/2 text-white/50 hover:border-white/20"}`}>
                          {o.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.4, ease: EASE }}>
                <h3 className="font-heading font-bold text-white text-2xl mb-2">Technical Specifications</h3>
                <p className="text-white/35 font-body text-sm mb-8">Fill in as many details as you know. Our engineers can fill the gaps.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
                  <div>
                    <label className={labelCls}>KVA Rating</label>
                    <input className={inputCls} value={form.kva} onChange={e => set("kva", e.target.value)} placeholder="e.g. 10, 50, 200 KVA" />
                  </div>
                  <div>
                    <label className={labelCls}>Frequency (Hz)</label>
                    <input className={inputCls} value={form.frequency} onChange={e => set("frequency", e.target.value)} placeholder="50 or 60 Hz" />
                  </div>
                  <div>
                    <label className={labelCls}>Primary Voltage</label>
                    <input className={inputCls} value={form.primaryV} onChange={e => set("primaryV", e.target.value)} placeholder="e.g. 415V, 11KV" />
                  </div>
                  <div>
                    <label className={labelCls}>Secondary Voltage</label>
                    <input className={inputCls} value={form.secondaryV} onChange={e => set("secondaryV", e.target.value)} placeholder="e.g. 230V, 110V" />
                  </div>
                  <div>
                    <label className={labelCls}>Cooling Type</label>
                    <input className={inputCls} value={form.cooling} onChange={e => set("cooling", e.target.value)} placeholder="Air-cooled, Oil-cooled, Dry-type" />
                  </div>
                  <div>
                    <label className={labelCls}>Enclosure / IP Rating</label>
                    <input className={inputCls} value={form.enclosure} onChange={e => set("enclosure", e.target.value)} placeholder="Open, IP21, IP44, IP55" />
                  </div>
                  <div>
                    <label className={labelCls}>Quantity Required</label>
                    <input className={inputCls} type="number" min="1" value={form.qty} onChange={e => set("qty", e.target.value)} placeholder="1" />
                  </div>
                  <div>
                    <label className={labelCls}>Delivery Timeline</label>
                    <input className={inputCls} value={form.timeline} onChange={e => set("timeline", e.target.value)} placeholder="e.g. 4 weeks, urgent, flexible" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelCls}>Certification Requirements</label>
                    <input className={inputCls} value={form.certReq} onChange={e => set("certReq", e.target.value)} placeholder="IS 1180, IEC 60076, CE, None / Standard" />
                  </div>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.4, ease: EASE }}>
                <h3 className="font-heading font-bold text-white text-2xl mb-2">Review & Submit</h3>
                <p className="text-white/35 font-body text-sm mb-8">Provide your contact details and we'll get back within 24 hours.</p>
                <div className="bg-white/2 border border-gold/10 p-6 mb-8">
                  <p className="text-gold/60 text-xs tracking-[0.3em] uppercase font-body mb-4">Your Requirements Summary</p>
                  <div className="grid grid-cols-2 gap-3 text-sm font-body">
                    {[
                      ["Type", transformerTypes.find(t => t.id === form.type)?.label || "—"],
                      ["Phase", phaseOptions.find(p => p.id === form.phase)?.label || "—"],
                      ["KVA", form.kva || "—"],
                      ["Primary V", form.primaryV || "—"],
                      ["Secondary V", form.secondaryV || "—"],
                      ["Qty", form.qty || "1"],
                    ].map(([k, v]) => (
                      <div key={k}>
                        <span className="text-white/30">{k}: </span>
                        <span className="text-white/70">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className={labelCls}>Full Name</label>
                    <input className={inputCls} value={form.name} onChange={e => set("name", e.target.value)} placeholder="Your name" />
                  </div>
                  <div>
                    <label className={labelCls}>Company / Organisation</label>
                    <input className={inputCls} value={form.company} onChange={e => set("company", e.target.value)} placeholder="Company name" />
                  </div>
                  <div>
                    <label className={labelCls}>Email</label>
                    <input className={inputCls} type="email" value={form.email} onChange={e => set("email", e.target.value)} placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className={labelCls}>Phone</label>
                    <input className={inputCls} type="tel" value={form.phone} onChange={e => set("phone", e.target.value)} placeholder="+91 XXXXXXXXXX" />
                  </div>
                </div>
                <div className="mb-8">
                  <label className={labelCls}>Additional Notes</label>
                  <textarea className={`${inputCls} resize-none h-24`} value={form.notes} onChange={e => set("notes", e.target.value)} placeholder="Any special requirements, standards, installation constraints..." />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* NAV BUTTONS */}
          <div className="flex items-center justify-between pt-4 border-t border-gold/10">
            <button onClick={prev} disabled={step === 0} className="text-white/40 font-body text-sm tracking-wider uppercase hover:text-white/70 transition-colors duration-300 disabled:opacity-20 disabled:cursor-not-allowed">
              ← Back
            </button>
            {step < steps.length - 1 ? (
              <button onClick={next} className="bg-gold text-ink text-sm font-body font-semibold tracking-widest uppercase px-8 py-3.5 hover:bg-white transition-colors duration-300">
                Continue →
              </button>
            ) : (
              <button
                onClick={() => {
                  const typeName = transformerTypes.find(t => t.id === form.type)?.label || form.type || "Not specified";
                  const phaseName = phaseOptions.find(p => p.id === form.phase)?.label || form.phase || "Not specified";
                  const mountName = mountingOptions.find(m => m.id === form.mounting)?.label || form.mounting || "Not specified";
                  const msg = [
                    "*Custom Transformer Enquiry — Kalhare Enterprises*",
                    "",
                    `*Type:* ${typeName}`,
                    `*Phase:* ${phaseName}`,
                    `*KVA:* ${form.kva || "—"}`,
                    `*Primary Voltage:* ${form.primaryV || "—"}`,
                    `*Secondary Voltage:* ${form.secondaryV || "—"}`,
                    `*Frequency:* ${form.frequency} Hz`,
                    `*Cooling:* ${form.cooling || "—"}`,
                    `*Enclosure:* ${form.enclosure || "—"}`,
                    `*Mounting:* ${mountName}`,
                    `*Application:* ${form.application || "—"}`,
                    `*Quantity:* ${form.qty}`,
                    `*Timeline:* ${form.timeline || "—"}`,
                    `*Certifications:* ${form.certReq || "—"}`,
                    "",
                    "*Contact Details*",
                    `*Name:* ${form.name}`,
                    `*Company:* ${form.company || "—"}`,
                    `*Email:* ${form.email}`,
                    `*Phone:* ${form.phone || "—"}`,
                    ...(form.notes ? ["", `*Notes:* ${form.notes}`] : []),
                  ].join("\n");
                  window.open(`https://wa.me/918299721019?text=${encodeURIComponent(msg)}`, "_blank");
                  setSubmitted(true);
                }}
                className="bg-gold text-ink text-sm font-body font-semibold tracking-widest uppercase px-8 py-3.5 hover:bg-white transition-colors duration-300"
              >
                Send via WhatsApp
              </button>
            )}
          </div>
        </div>
      </section>
    </motion.div>
  );
}