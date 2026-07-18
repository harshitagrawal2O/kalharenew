import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.8, ease: EASE },
};

interface FormState { name: string; company: string; email: string; phone: string; subject: string; message: string; }
const initial: FormState = { name: "", company: "", email: "", phone: "", subject: "", message: "" };

export default function KalhareContact() {
  const [form, setForm] = useState<FormState>(initial);
  const [sent, setSent] = useState(false);
  const set = (k: keyof FormState, v: string) => setForm(f => ({ ...f, [k]: v }));

  const inputCls = "w-full bg-white/5 border border-white/10 text-white placeholder-white/25 font-body text-sm px-4 py-3.5 focus:outline-none focus:border-gold/50 transition-colors duration-300";
  const labelCls = "text-white/40 font-body text-xs tracking-[0.3em] uppercase mb-2 block";

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>

      {/* HERO */}
      <section className="relative py-36 bg-navy-950 pt-44 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-navy-950/60" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.7, ease: EASE }} className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-gold" />
            <p className="text-gold/70 text-xs tracking-[0.5em] uppercase font-body">Get In Touch</p>
          </motion.div>
          <div className="overflow-hidden mb-3">
            <motion.h1 initial={{ y: "100%", filter: "blur(6px)" }} animate={{ y: 0, filter: "blur(0px)" }} transition={{ delay: 0.4, duration: 1, ease: EASE }} className="font-heading font-bold text-white leading-[0.9]" style={{ fontSize: "clamp(2.25rem, 6vw, 6rem)" }}>Contact</motion.h1>
          </div>
          <div className="overflow-hidden mb-3">
            <motion.h1 initial={{ y: "100%", filter: "blur(6px)" }} animate={{ y: 0, filter: "blur(0px)" }} transition={{ delay: 0.55, duration: 1, ease: EASE }} className="font-heading font-bold italic text-gold leading-[0.9]" style={{ fontSize: "clamp(2.25rem, 6vw, 6rem)" }}>Kalhare</motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1 initial={{ y: "100%", filter: "blur(6px)" }} animate={{ y: 0, filter: "blur(0px)" }} transition={{ delay: 0.68, duration: 1, ease: EASE }} className="font-heading font-bold italic text-gold leading-[0.9]" style={{ fontSize: "clamp(2.25rem, 6vw, 6rem)" }}>Enterprises.</motion.h1>
          </div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }} className="text-white/35 font-body font-light text-base mt-6 max-w-lg leading-relaxed">
            Enquire about products, request a quote, or speak with our engineering team. We respond within 24 hours on business days.
          </motion.p>
        </div>
      </section>

      {/* MAIN GRID */}
      <section className="py-20 bg-navy-950 border-t border-gold/8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-16">

          {/* INFO COLUMN */}
          <div className="lg:col-span-2">
            <motion.div {...fadeUp} className="space-y-8">
              <div>
                <p className="text-gold/60 text-xs tracking-[0.4em] uppercase font-body mb-6">Our Office</p>
                {[
                  { Icon: MapPin, label: "Address", lines: ["No. 9/2, Kachohalli,", "Off Magadi Road,", "Bangalore – 560091, Karnataka"] },
                  { Icon: Phone, label: "Phone", lines: ["+91 9008189732"] },
                  { Icon: Mail, label: "Email", lines: ["kalhare@gmail.com"] },
                  { Icon: Clock, label: "Business Timings", lines: ["Open 24x7 for Enquiries"] },
                  { Icon: Clock, label: "Working Hours", lines: ["Mon–Sat: 9:00 AM – 6:30 PM", "Closed on Sundays & Public Holidays"] },
                ].map(({ Icon, label, lines }) => (
                  <motion.div key={label} {...fadeUp} className="flex gap-5 py-5 border-b border-gold/8">
                    <div className="w-9 h-9 border border-gold/20 flex items-center justify-center shrink-0">
                      <Icon size={14} className="text-gold/60" />
                    </div>
                    <div>
                      <p className="text-white/30 font-body text-xs tracking-widest uppercase mb-1">{label}</p>
                      {lines.map(l => <p key={l} className="text-white/60 font-body font-light text-sm leading-relaxed">{l}</p>)}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div {...fadeUp} className="bg-white/2 border border-gold/10 p-6">
                <p className="text-gold/60 text-xs tracking-[0.4em] uppercase font-body mb-3">GST Information</p>
                <p className="text-white/35 font-body font-light text-sm">GSTIN: 29ABZPT8409Q1Z3</p>
              </motion.div>
            </motion.div>
          </div>

          {/* FORM COLUMN */}
          <div className="lg:col-span-3">
            {sent ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full flex flex-col justify-center py-20 text-center">
                <div className="w-16 h-16 border border-gold/40 flex items-center justify-center mx-auto mb-8">
                  <ArrowRight size={24} className="text-gold" />
                </div>
                <h3 className="font-heading font-bold text-white text-2xl mb-4">Message Received</h3>
                <p className="text-white/40 font-body font-light text-base leading-relaxed max-w-sm mx-auto">We'll get back to you within one business day.</p>
              </motion.div>
            ) : (
              <motion.form initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: EASE }} onSubmit={e => { e.preventDefault(); setSent(true); }} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelCls}>Full Name *</label>
                    <input required className={inputCls} value={form.name} onChange={e => set("name", e.target.value)} placeholder="Your name" />
                  </div>
                  <div>
                    <label className={labelCls}>Company</label>
                    <input className={inputCls} value={form.company} onChange={e => set("company", e.target.value)} placeholder="Organisation name" />
                  </div>
                  <div>
                    <label className={labelCls}>Email *</label>
                    <input required type="email" className={inputCls} value={form.email} onChange={e => set("email", e.target.value)} placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className={labelCls}>Phone</label>
                    <input type="tel" className={inputCls} value={form.phone} onChange={e => set("phone", e.target.value)} placeholder="+91 XXXXXXXXXX" />
                  </div>
                </div>
                <div>
                  <label className={labelCls}>Subject</label>
                  <input className={inputCls} value={form.subject} onChange={e => set("subject", e.target.value)} placeholder="Product enquiry, quotation request, technical query…" />
                </div>
                <div>
                  <label className={labelCls}>Message *</label>
                  <textarea required className={`${inputCls} resize-none h-36`} value={form.message} onChange={e => set("message", e.target.value)} placeholder="Describe your requirement, KVA rating, voltage, quantity, timeline…" />
                </div>
                <div className="pt-2">
                  <button type="submit" className="inline-flex items-center gap-3 bg-gold text-ink text-sm font-body font-semibold tracking-widest uppercase px-8 py-4 hover:bg-white transition-colors duration-300 w-full sm:w-auto justify-center">
                    Send Enquiry <ArrowRight size={15} />
                  </button>
                </div>
              </motion.form>
            )}
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="bg-navy-950 border-t border-gold/8">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <motion.div {...fadeUp} className="flex flex-col items-center text-center mb-10">
            <p className="text-gold/60 text-xs tracking-[0.4em] uppercase font-body mb-5">Find Us</p>
            <div className="bg-white p-3 border border-gold/30">
              <img
                src="/images/kalhare/map-qr.png"
                alt="Scan QR code to navigate to Kalhare Enterprises"
                className="w-28 h-28 sm:w-36 sm:h-36 object-contain"
              />
            </div>
            <p className="text-white/40 font-body font-light text-sm mt-4 max-w-xs">
              Scan to open directions to our Kachohalli facility on your phone
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="h-80 sm:h-96 w-full overflow-hidden border border-gold/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5534577040374!2d77.5004609!3d12.9415551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d75c0bf3265%3A0x53d79a4d1c2a4f34!2sKachohalli%20Industrial%20Area%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%" height="100%" style={{ border: 0, filter: "grayscale(1) invert(0.85) contrast(0.75) hue-rotate(195deg)" }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Kalhare Enterprises location"
            />
          </motion.div>
        </div>
      </section>

    </motion.div>
  );
}