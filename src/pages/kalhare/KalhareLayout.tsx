import { useState, useEffect } from "react";
import { Outlet, NavLink, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/kalhare/about" },
  { label: "Products", href: "/kalhare/products" },
  { label: "Custom Transformers", href: "/kalhare/custom" },
  { label: "Contact", href: "/kalhare/contact" },
  { label: "Test Product", href: "/kalhare/testproduct" },
];

function KalhareNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => { setMobileOpen(false); }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(0, 16, 64, 0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(212,175,55,0.15)" : "none",
      }}
    >
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gold/30"
        animate={{ opacity: scrolled ? 0 : 1 }}
        transition={{ duration: 0.4 }}
      />

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center group">
          <img
            src="/images/kalhare-logo.jpeg"
            alt="Kalhare Enterprises"
            className="h-10 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              end={link.href === "/"}
              className={({ isActive }) =>
                `relative text-sm font-body font-medium tracking-wide transition-colors duration-300 pb-1
                ${isActive ? "text-gold" : "text-white/70 hover:text-white"}`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  <motion.span
                    className="absolute -bottom-0.5 left-0 h-px bg-gold"
                    initial={false}
                    animate={{ width: isActive ? "100%" : "0%" }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/kalhare/contact"
          className="hidden md:flex items-center gap-2 bg-gold text-ink text-xs font-body font-semibold tracking-widest px-5 py-2.5 hover:bg-white transition-all duration-300"
        >
          ENQUIRE <ArrowUpRight size={12} />
        </Link>

        <button className="md:hidden text-white p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy-950/98 backdrop-blur-xl border-t border-gold/10"
          >
            <nav className="flex flex-col px-6 py-6 gap-5">
              {navLinks.map((link) => (
                <NavLink key={link.href} to={link.href} end={link.href === "/"}
                  className={({ isActive }) => `text-base font-body tracking-wide ${isActive ? "text-gold" : "text-white/70"}`}
                >
                  {link.label}
                </NavLink>
              ))}
              <Link to="/kalhare/contact" className="mt-4 bg-gold text-ink text-sm font-body font-semibold tracking-widest px-5 py-3 text-center">
                ENQUIRE NOW
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function KalhareFooter() {
  return (
    <footer className="bg-navy-950 border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 border border-gold/50 flex items-center justify-center">
                <span className="font-heading font-bold text-gold text-lg">K</span>
              </div>
              <div>
                <p className="text-white font-semibold text-sm tracking-wider">KALHARE ENTERPRISES</p>
                <p className="text-gold/40 text-[10px] tracking-[0.3em] uppercase">TRANSFORMER MANUFACTURERS</p>
              </div>
            </div>
            <p className="text-white/30 font-body font-light text-sm leading-relaxed max-w-xs">
              Premium transformer manufacturer serving India's industrial sector for over three decades. IS/IEC certified. Bangalore made.
            </p>
            <div className="gold-line mt-8 w-24" />
          </div>
          <div>
            <p className="text-gold/50 text-xs tracking-[0.3em] uppercase font-body mb-5">Navigation</p>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-white/35 hover:text-gold text-sm font-body transition-colors duration-300">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-gold/50 text-xs tracking-[0.3em] uppercase font-body mb-5">Contact</p>
            <div className="space-y-3 text-sm font-body font-light text-white/35 leading-relaxed">
              <p>No. 9/2, Kachohalli,<br />Off Magadi Road,<br />Bangalore – 560091</p>
              <p>+91 9008189732</p>
              <p>kalhare@gmail.com</p>
              <p className="font-mono text-xs text-white/20 pt-1">GSTIN: 29ABZPT8409Q1Z3</p>
            </div>
          </div>
        </div>
        <div className="gold-line mb-6" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/15 text-xs font-body tracking-wider">
            © 2025 KALHARE ENTERPRISES. A KALHARE GROUP COMPANY.
          </p>
          <Link to="/" className="text-white/15 hover:text-gold/50 text-xs font-body tracking-wider transition-colors duration-300">
            ← KALHARE GROUPS
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default function KalhareLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-navy-950">
      <KalhareNav />
      <main className="flex-1">
        <Outlet />
      </main>
      <KalhareFooter />
    </div>
  );
}
