import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

export default function PressmachContact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>

      {/* â”€â”€ HERO â”€â”€ */}
      <section className="bg-ink pt-32 pb-20 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(rgba(212,175,55,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.6) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-gold/60 text-xs tracking-[0.4em] uppercase font-body mb-5">
            Contact Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="font-heading font-bold text-white leading-[0.92] mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            Talk to Our Engineering Team.
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="text-white/35 font-body font-light text-base leading-relaxed">
            Machine enquiries, technical questions, site visits, or quotations — we're available and ready to help.
          </motion.p>
        </div>
      </section>

      {/* â”€â”€ CONTENT â”€â”€ */}
      <section className="py-20 bg-ink border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left — contact info */}
          <div>
            <motion.p {...fadeUp} className="text-gold/60 text-xs tracking-[0.4em] uppercase font-body mb-6">Find Us</motion.p>
            <motion.h2 {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="font-heading font-bold text-white text-3xl mb-10 leading-tight">
              Pressmach Machine Tools
            </motion.h2>

            <div className="space-y-8">
              {[
                {
                  icon: <MapPin size={18} className="text-gold flex-shrink-0 mt-0.5" />,
                  label: "Factory & Showroom",
                  content: "No. 9/2, Kalhare Industrial Area,\nKachohalli, Off Magadi Road,\nBangalore – 560091",
                },
                { icon: <Phone size={18} className="text-gold flex-shrink-0" />, label: "Phone", content: "+91 9008189732" },
                { icon: <Mail size={18} className="text-gold flex-shrink-0" />, label: "Email", content: "kalhare@gmail.com" },
                { icon: <Clock size={18} className="text-gold flex-shrink-0" />, label: "Working Hours", content: "Monday – Saturday\n9:00 AM – 6:00 PM IST" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                  className="flex gap-5"
                >
                  <div className="w-10 h-10 bg-white/5 border border-white/8 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white/25 font-body text-xs tracking-widest uppercase mb-1">{item.label}</p>
                    <p className="text-white/55 font-body text-sm leading-relaxed whitespace-pre-line">{item.content}</p>
                  </div>
                </motion.div>
              ))}

              <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.5 }} className="pt-2">
                <p className="text-white/25 font-body text-xs tracking-widest uppercase mb-2">Visit Our Factory</p>
                <p className="text-white/40 font-body text-sm leading-relaxed">
                  Machine demonstrations available by appointment. Contact us to schedule a factory visit and see the G-30(i), G-45(i), and G-60(i) running live.
                </p>
              </motion.div>
            </div>

            {/* WhatsApp CTA */}
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.6 }} className="mt-10">
              <a
                href="https://wa.me/919008189732"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white text-sm font-body font-semibold tracking-widest uppercase px-6 py-4 hover:bg-[#1db954] transition-colors duration-300"
              >
                <MessageCircle size={16} /> WhatsApp Us
              </a>
            </motion.div>

            {/* Map */}
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.7 }} className="mt-8 aspect-video border border-white/8 overflow-hidden relative">
              <iframe
                title="Pressmach Machine Tools Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.123456789!2d77.5088!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDU4JzE3LjgiTiA3N8KwMzAnMzEuNyJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(0.8)" }}
                allowFullScreen
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* Right — inquiry form */}
          <div>
            <motion.p {...fadeUp} className="text-gold/60 text-xs tracking-[0.4em] uppercase font-body mb-6">Quick Enquiry</motion.p>
            <motion.h2 {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="font-heading font-bold text-white text-3xl mb-8 leading-tight">
              Send Us a Message
            </motion.h2>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 border border-white/8 p-12 text-center"
              >
                <div className="w-14 h-14 bg-gold flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={24} className="text-ink" />
                </div>
                <h3 className="font-heading font-bold text-white text-2xl mb-3">Message Received</h3>
                <p className="text-white/35 font-body font-light text-sm leading-relaxed">
                  Thank you for reaching out. Our engineering team will respond within 1–2 business days.
                </p>
              </motion.div>
            ) : (
              <motion.form
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.2 }}
                className="bg-white/[0.04] border border-white/8 p-8 space-y-6"
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { label: "Full Name *", key: "name" as const, placeholder: "Your name" },
                    { label: "Email Address *", key: "email" as const, placeholder: "your@email.com" },
                    { label: "Phone Number", key: "phone" as const, placeholder: "+91 XXXXX XXXXX" },
                  ].map((f) => (
                    <div key={f.key}>
                      <label className="block text-white/35 font-body text-xs tracking-[0.2em] uppercase mb-2">{f.label}</label>
                      <input
                        type={f.key === "email" ? "email" : "text"}
                        value={form[f.key]}
                        onChange={set(f.key)}
                        placeholder={f.placeholder}
                        className="w-full border border-white/10 bg-white/5 text-white px-4 py-3 text-sm font-body placeholder:text-white/15 focus:outline-none focus:border-gold/50 transition-colors duration-300"
                        required={f.label.includes("*")}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-white/35 font-body text-xs tracking-[0.2em] uppercase mb-2">Subject</label>
                    <select
                      value={form.subject}
                      onChange={set("subject")}
                      className="w-full border border-white/10 bg-white/5 text-white px-4 py-3 text-sm font-body focus:outline-none focus:border-gold/50 transition-colors duration-300 appearance-none"
                    >
                      <option value="">Select...</option>
                      <option>Machine Enquiry</option>
                      <option>Custom Machine Request</option>
                      <option>Technical Support</option>
                      <option>Pricing / Quotation</option>
                      <option>Spare Parts</option>
                      <option>Factory Visit</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-white/35 font-body text-xs tracking-[0.2em] uppercase mb-2">Message *</label>
                  <textarea
                    value={form.message}
                    onChange={set("message")}
                    rows={5}
                    placeholder="Describe your requirements or question..."
                    required
                    className="w-full border border-white/10 bg-white/5 text-white px-4 py-3 text-sm font-body placeholder:text-white/15 focus:outline-none focus:border-gold/50 transition-colors duration-300 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-gold text-ink text-sm font-body font-semibold tracking-widest uppercase py-4 hover:bg-white transition-colors duration-300"
                >
                  Send Enquiry <Send size={14} />
                </button>
              </motion.form>
            )}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
