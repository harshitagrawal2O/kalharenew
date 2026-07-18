import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle, Upload, Send } from "lucide-react";

const steps = ["Machine & Size", "Application", "Specifications", "Review & Submit"];

type FormData = {
  baseModel: string; tableSize: string; zTravel: string; phase: string;
  industry: string; applicationType: string; workpieceWeight: string;
  dielectric: string; zAxisType: string; orbitalMotion: string; digitalReadout: string; specialReqs: string;
  name: string; company: string; email: string; phone: string; notes: string;
};

const initForm: FormData = {
  baseModel: "", tableSize: "", zTravel: "", phase: "",
  industry: "", applicationType: "", workpieceWeight: "",
  dielectric: "", zAxisType: "", orbitalMotion: "", digitalReadout: "", specialReqs: "",
  name: "", company: "", email: "", phone: "", notes: "",
};

function StepIndicator({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center gap-0 mb-12">
      {steps.map((s, i) => (
        <div key={s} className="flex items-center flex-1">
          <div className="flex flex-col items-center">
            <div
              className={`w-8 h-8 flex items-center justify-center text-xs font-body font-semibold transition-all duration-400
                ${i < current ? "bg-gold text-ink" : i === current ? "bg-white text-ink" : "bg-white/10 border border-white/20 text-white/30"}`}
            >
              {i < current ? <CheckCircle size={14} /> : i + 1}
            </div>
            <p className={`hidden md:block text-[10px] font-body tracking-wider mt-2 whitespace-nowrap
              ${i === current ? "text-white font-semibold" : i < current ? "text-gold" : "text-white/25"}`}>
              {s}
            </p>
          </div>
          {i < total - 1 && (
            <div className={`h-px flex-1 mx-2 transition-all duration-400 ${i < current ? "bg-gold" : "bg-white/10"}`} />
          )}
        </div>
      ))}
    </div>
  );
}

function SelectField({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <div>
      <label className="block text-white/40 font-body text-xs tracking-[0.2em] uppercase mb-2">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-white/10 bg-white/5 text-white px-4 py-3 text-sm font-body focus:outline-none focus:border-gold/50 transition-colors duration-300 appearance-none"
      >
        <option value="">Select...</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

function InputField({ label, value, onChange, placeholder, type = "text" }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string; type?: string }) {
  return (
    <div>
      <label className="block text-white/40 font-body text-xs tracking-[0.2em] uppercase mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full border border-white/10 bg-white/5 text-white px-4 py-3 text-sm font-body placeholder:text-white/20 focus:outline-none focus:border-gold/50 transition-colors duration-300"
      />
    </div>
  );
}

export default function PressmachCustom() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>(initForm);
  const [submitted, setSubmitted] = useState(false);

  const set = (key: keyof FormData) => (val: string) => setForm((f) => ({ ...f, [key]: val }));

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ink pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="text-center max-w-lg px-8 py-16"
        >
          <div className="w-16 h-16 bg-gold flex items-center justify-center mx-auto mb-8">
            <CheckCircle size={28} className="text-ink" />
          </div>
          <h2 className="font-heading font-bold text-white text-3xl mb-4">Request Submitted</h2>
          <div className="w-12 h-px bg-gold mx-auto mb-6" />
          <p className="text-white/40 font-body font-light text-base leading-relaxed mb-8">
            Thank you, <strong className="text-white/70">{form.name}</strong>. Our engineering team will review your machine requirements and respond within 1–2 business days with a detailed proposal.
          </p>
          <button
            onClick={() => { setSubmitted(false); setStep(0); setForm(initForm); }}
            className="text-gold font-body font-medium text-sm tracking-wider uppercase border-b border-gold pb-0.5 hover:text-white hover:border-white transition-all duration-300"
          >
            Configure Another Machine
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>

      {/* â”€â”€ HERO â”€â”€ */}
      <section className="relative bg-ink pt-32 pb-20 px-6">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(rgba(212,175,55,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.6) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gold/60 text-xs tracking-[0.4em] uppercase font-body mb-5"
          >
            Custom Machine Configurator
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="font-heading font-bold text-white leading-[0.92] mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            Configure Your Machine.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-white/35 font-body font-light text-base leading-relaxed"
          >
            Tell us your process. Our engineers will specify a machine built precisely around your manufacturing requirements.
          </motion.p>
        </div>
      </section>

      {/* â”€â”€ CONFIGURATOR â”€â”€ */}
      <section className="py-16 bg-ink">
        <div className="max-w-3xl mx-auto px-6">

          <StepIndicator current={step} total={steps.length} />

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="bg-white/[0.04] border border-white/8 p-8 md:p-12"
            >

              {/* STEP 1 */}
              {step === 0 && (
                <div>
                  <h3 className="font-heading font-bold text-white text-2xl mb-2">Machine & Size</h3>
                  <p className="text-white/35 font-body font-light text-sm mb-8">Select the base model and override dimensions if required.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <SelectField label="Base Model" value={form.baseModel} onChange={set("baseModel")} options={["G-30(i) — Compact", "G-45(i) — Mid-Range", "G-60(i) — Flagship", "AWESOME-1500 — Large Format", "Custom Dimensions"]} />
                    <SelectField label="Phase" value={form.phase} onChange={set("phase")} options={["3-Phase 415V AC (Standard)", "Other — please specify in notes"]} />
                    <InputField label="Custom Table Size (optional)" value={form.tableSize} onChange={set("tableSize")} placeholder="e.g. 700 × 500 mm" />
                    <InputField label="Custom Z-Travel (optional)" value={form.zTravel} onChange={set("zTravel")} placeholder="e.g. 450 mm" />
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {step === 1 && (
                <div>
                  <h3 className="font-heading font-bold text-white text-2xl mb-2">Application Details</h3>
                  <p className="text-white/35 font-body font-light text-sm mb-8">Tell us how this machine will be used in your facility.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <SelectField label="Primary Application" value={form.applicationType} onChange={set("applicationType")} options={["Die-Sinking", "Cavity Mould Making", "Punch-Die Sets", "Micro EDM", "Prototype Tooling", "Production Component", "Multi-Purpose Tool Room", "Training / Educational"]} />
                    <SelectField label="Industry" value={form.industry} onChange={set("industry")} options={["Automotive", "Aerospace & Defence", "Plastic Mould Making", "Die Casting", "Medical Devices", "General Tool Room", "Educational Institute", "Other"]} />
                    <InputField label="Workpiece Weight (kg)" value={form.workpieceWeight} onChange={set("workpieceWeight")} placeholder="Max expected workpiece weight" />
                  </div>
                </div>
              )}

              {/* STEP 3 */}
              {step === 2 && (
                <div>
                  <h3 className="font-heading font-bold text-white text-2xl mb-2">Technical Specifications</h3>
                  <p className="text-white/35 font-body font-light text-sm mb-8">Configure the precision systems and options for your build.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <SelectField label="Dielectric Type" value={form.dielectric} onChange={set("dielectric")} options={["EDM Oil (Standard)", "Deionised Water", "Both (Dual System)", "Customer Specified"]} />
                    <SelectField label="Z-Axis Control" value={form.zAxisType} onChange={set("zAxisType")} options={["Semi-CNC Servo (Standard)", "Full CNC Servo", "Manual with DRO"]} />
                    <SelectField label="Orbital Motion System" value={form.orbitalMotion} onChange={set("orbitalMotion")} options={["Not Required", "Standard Orbital", "Advanced Orbital (XY programmable)"]} />
                    <SelectField label="Digital Readout" value={form.digitalReadout} onChange={set("digitalReadout")} options={["Z-Axis DRO (Standard)", "Full X/Y/Z DRO", "Not Required"]} />
                    <div className="md:col-span-2">
                      <label className="block text-white/40 font-body text-xs tracking-[0.2em] uppercase mb-2">Special Requirements</label>
                      <textarea
                        value={form.specialReqs}
                        onChange={(e) => set("specialReqs")(e.target.value)}
                        rows={4}
                        placeholder="Describe any special requirements — modified structure, custom tank dimensions, integration with automation, specific finish requirements..."
                        className="w-full border border-white/10 bg-white/5 text-white px-4 py-3 text-sm font-body placeholder:text-white/15 focus:outline-none focus:border-gold/50 transition-colors duration-300 resize-none"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-white/40 font-body text-xs tracking-[0.2em] uppercase mb-2">Upload Reference Drawings</label>
                      <div className="border-2 border-dashed border-white/10 p-8 text-center hover:border-gold/30 transition-colors duration-300 cursor-pointer">
                        <Upload size={24} className="text-white/20 mx-auto mb-3" />
                        <p className="text-white/25 font-body text-sm">Drop files here or click to browse</p>
                        <p className="text-white/15 font-body text-xs mt-1">PDF, DXF, DWG, STEP — max 20MB</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4 — REVIEW */}
              {step === 3 && (
                <div>
                  <h3 className="font-heading font-bold text-white text-2xl mb-2">Review & Submit</h3>
                  <p className="text-white/35 font-body font-light text-sm mb-8">Confirm your details and we'll send a detailed engineering proposal.</p>

                  <div className="bg-white/5 border border-white/8 p-6 mb-8">
                    <p className="text-white/25 font-body text-xs tracking-[0.3em] uppercase mb-4">Configuration Summary</p>
                    <div className="grid grid-cols-2 gap-3 text-sm font-body">
                      {[
                        ["Base Model", form.baseModel],
                        ["Table Size", form.tableSize || "Standard"],
                        ["Z-Travel", form.zTravel || "Standard"],
                        ["Application", form.applicationType],
                        ["Industry", form.industry],
                        ["Dielectric", form.dielectric],
                        ["Z-Axis Control", form.zAxisType],
                        ["Orbital Motion", form.orbitalMotion],
                      ].filter(([, v]) => v).map(([k, v]) => (
                        <div key={k}>
                          <p className="text-white/25 text-xs">{k}</p>
                          <p className="text-white/60 font-medium">{v}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField label="Your Name *" value={form.name} onChange={set("name")} placeholder="Full name" />
                    <InputField label="Company Name" value={form.company} onChange={set("company")} placeholder="Organisation" />
                    <InputField label="Email Address *" value={form.email} onChange={set("email")} placeholder="your@email.com" type="email" />
                    <InputField label="Phone Number" value={form.phone} onChange={set("phone")} placeholder="+91 XXXXX XXXXX" />
                    <div className="md:col-span-2">
                      <label className="block text-white/40 font-body text-xs tracking-[0.2em] uppercase mb-2">Additional Notes</label>
                      <textarea
                        value={form.notes}
                        onChange={(e) => set("notes")(e.target.value)}
                        rows={3}
                        placeholder="Delivery timeline, budget guidance, or other context for our team..."
                        className="w-full border border-white/10 bg-white/5 text-white px-4 py-3 text-sm font-body placeholder:text-white/15 focus:outline-none focus:border-gold/50 transition-colors duration-300 resize-none"
                      />
                    </div>
                  </div>
                </div>
              )}

            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <button
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              className="flex items-center gap-2 text-white/30 font-body text-sm font-medium tracking-wider uppercase disabled:opacity-0 hover:text-white/60 transition-colors duration-300"
            >
              <ArrowLeft size={14} /> Back
            </button>
            {step < steps.length - 1 ? (
              <button
                onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))}
                className="flex items-center gap-3 bg-white text-ink text-sm font-body font-semibold tracking-widest uppercase px-8 py-4 hover:bg-gold transition-colors duration-300"
              >
                Continue <ArrowRight size={14} />
              </button>
            ) : (
              <button
                onClick={() => setSubmitted(true)}
                className="flex items-center gap-3 bg-gold text-ink text-sm font-body font-semibold tracking-widest uppercase px-8 py-4 hover:bg-white transition-colors duration-300"
              >
                Request Proposal <Send size={14} />
              </button>
            )}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
