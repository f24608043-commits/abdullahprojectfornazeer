import { jsxs, jsx } from "react/jsx-runtime";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, HeartPulse, ShieldCheck, Plus, X } from "lucide-react";
import { useState } from "react";
import { R as Reveal } from "./Reveal-Bm4r8-61.js";
const dental = [{
  title: "Dental Implants",
  short: "Permanent replacement for missing teeth.",
  long: "Single tooth implants, multiple implants, full-mouth rehabilitation and All-on-4 solutions using digital guided implant surgery and premium restorations.",
  duration: "1–3 visits",
  anaesthesia: "Local / Sedation",
  recovery: "Minimal"
}, {
  title: "Root Canal Treatment",
  short: "Save infected teeth without extraction.",
  long: "Microscope-assisted painless root canal treatment with rotary instruments for faster healing and long-term tooth preservation.",
  duration: "1–2 visits",
  anaesthesia: "Local",
  recovery: "1–2 days"
}, {
  title: "Teeth Whitening",
  short: "Professional smile brightening treatments.",
  long: "Advanced whitening systems for removing stains and enhancing smile brightness safely without damaging enamel.",
  duration: "1 visit",
  anaesthesia: "None",
  recovery: "Immediate"
}, {
  title: "Smile Designing",
  short: "Custom smile transformation planning.",
  long: "Digital smile design with facial analysis, mockups and aesthetic planning for a naturally balanced smile.",
  duration: "2–4 visits",
  anaesthesia: "Minimal",
  recovery: "Minimal"
}, {
  title: "Veneers",
  short: "Porcelain shells for a perfect smile.",
  long: "Ultra-thin porcelain veneers for correcting discoloration, gaps, shape irregularities and worn teeth.",
  duration: "2 visits",
  anaesthesia: "Local",
  recovery: "Minimal"
}, {
  title: "Crowns & Bridges",
  short: "Restore damaged or missing teeth.",
  long: "Premium zirconia and ceramic crowns and bridges crafted digitally for precise fit and natural aesthetics.",
  duration: "2 visits",
  anaesthesia: "Local",
  recovery: "Minimal"
}, {
  title: "Orthodontics & Braces",
  short: "Straighten teeth and improve bite.",
  long: "Metal braces, ceramic braces and clear aligners for children and adults with modern orthodontic planning.",
  duration: "6–24 months",
  anaesthesia: "None",
  recovery: "Adjustment period"
}, {
  title: "Clear Aligners",
  short: "Invisible orthodontic correction.",
  long: "Custom transparent aligners for discreet teeth straightening with comfortable removable trays.",
  duration: "6–18 months",
  anaesthesia: "None",
  recovery: "Minimal"
}, {
  title: "Scaling & Polishing",
  short: "Professional dental cleaning service.",
  long: "Deep cleaning procedures removing plaque, tartar and stains while improving gum health and fresh breath.",
  duration: "1 visit",
  anaesthesia: "None",
  recovery: "Immediate"
}, {
  title: "Gum Disease Treatment",
  short: "Advanced periodontal therapy.",
  long: "Laser-assisted gum treatments, deep cleaning and periodontal maintenance for healthy gums.",
  duration: "1–3 visits",
  anaesthesia: "Local",
  recovery: "Few days"
}, {
  title: "Tooth Extraction",
  short: "Safe and comfortable tooth removal.",
  long: "Simple and surgical extractions performed with modern minimally invasive techniques.",
  duration: "1 visit",
  anaesthesia: "Local",
  recovery: "2–5 days"
}, {
  title: "Pediatric Dentistry",
  short: "Gentle dental care for children.",
  long: "Child-friendly preventive and restorative treatments including fluoride therapy and cavity management.",
  duration: "1 visit",
  anaesthesia: "Minimal",
  recovery: "Immediate"
}, {
  title: "Dentures",
  short: "Comfortable replacement for missing teeth.",
  long: "Complete and partial dentures designed for aesthetics, comfort and proper chewing function.",
  duration: "2–4 visits",
  anaesthesia: "None",
  recovery: "Adjustment period"
}, {
  title: "Dental Fillings",
  short: "Restore cavities naturally.",
  long: "Composite tooth-colored fillings restoring strength and appearance after decay removal.",
  duration: "1 visit",
  anaesthesia: "Local",
  recovery: "Immediate"
}, {
  title: "Emergency Dentistry",
  short: "Urgent dental pain and trauma care.",
  long: "Immediate treatment for severe tooth pain, swelling, broken teeth and dental emergencies.",
  duration: "Immediate",
  anaesthesia: "Local",
  recovery: "Depends"
}];
const maxillofacial = [{
  title: "Jaw Surgery",
  short: "Correct jaw alignment and function.",
  long: "Orthognathic surgery for correcting bite issues, facial imbalance, speech and chewing problems.",
  duration: "Major procedure",
  anaesthesia: "General",
  recovery: "2–6 weeks"
}, {
  title: "Wisdom Tooth Surgery",
  short: "Removal of impacted wisdom teeth.",
  long: "Advanced surgical extraction with minimal trauma and faster healing techniques.",
  duration: "1 visit",
  anaesthesia: "Local / Sedation",
  recovery: "3–7 days"
}, {
  title: "Facial Trauma Surgery",
  short: "Treatment of facial injuries and fractures.",
  long: "Comprehensive management of jaw fractures, facial bone injuries and soft tissue trauma reconstruction.",
  duration: "Complex",
  anaesthesia: "General",
  recovery: "Several weeks"
}, {
  title: "Facial Reconstruction",
  short: "Restore facial aesthetics and function.",
  long: "Reconstructive surgery following trauma, tumors or congenital facial deformities.",
  duration: "Complex",
  anaesthesia: "General",
  recovery: "Several weeks"
}, {
  title: "TMJ Treatment",
  short: "Relief from jaw joint pain.",
  long: "Comprehensive management of TMJ disorders including splints, therapy and surgical procedures.",
  duration: "Varies",
  anaesthesia: "Local / General",
  recovery: "Depends"
}, {
  title: "Oral Cancer Screening",
  short: "Early detection and diagnosis.",
  long: "Clinical examination and biopsy procedures for suspicious oral lesions and cancers.",
  duration: "1 visit",
  anaesthesia: "Minimal",
  recovery: "Minimal"
}, {
  title: "Cyst & Tumor Removal",
  short: "Surgical removal of oral lesions.",
  long: "Diagnosis and treatment of cysts, benign tumors and oral pathological conditions.",
  duration: "1–2 visits",
  anaesthesia: "Local / General",
  recovery: "1–2 weeks"
}, {
  title: "Facial Aesthetic Procedures",
  short: "Enhance facial balance and appearance.",
  long: "Non-surgical and surgical facial aesthetic procedures improving harmony and rejuvenation.",
  duration: "Varies",
  anaesthesia: "Minimal",
  recovery: "Minimal"
}, {
  title: "Bone Grafting",
  short: "Restore bone for implants and surgery.",
  long: "Advanced grafting procedures for rebuilding jawbone lost due to trauma or tooth loss.",
  duration: "1–2 visits",
  anaesthesia: "Local / Sedation",
  recovery: "1–2 weeks"
}, {
  title: "Sinus Lift Surgery",
  short: "Prepare upper jaw for implants.",
  long: "Specialized sinus augmentation procedures creating adequate bone height for implants.",
  duration: "1 visit",
  anaesthesia: "Local",
  recovery: "1 week"
}];
function ServicesPage() {
  const [tab, setTab] = useState("dental");
  const [open, setOpen] = useState(null);
  const list = tab === "dental" ? dental : maxillofacial;
  return /* @__PURE__ */ jsxs("div", { className: "pt-32 pb-28 bg-grey-100 min-h-screen overflow-hidden", children: [
    /* @__PURE__ */ jsxs("section", { className: "relative mx-auto max-w-7xl px-6 lg:px-10 pt-10 pb-6", "aria-label": "Services hero", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10", style: {
        backgroundImage: "linear-gradient(rgba(247, 249, 253, 0.9), rgba(247, 249, 253, 0.7)), url('https://lh3.googleusercontent.com/aida/ADBb0uiDcKkcLmmIGefvcFZNXFeBvMJYrOGZkLb21pn0RsAItNHcYqzonrWrwQBKVzIOGJWq11tj2aRwIZJvvKh-799Qw6HPHnpskH4kVGoePCjvCKAYDOTrQfJB3f943cTQbbvd7ZhFMX0Qu8lAUlDJmPSyQvqe8CwjZPmlXr9jKyceUzZY0CQhMbu2_Iri_gL86SzVBrRP8gTo2cVg1T1VLLLIvyeNB8i4sBy0J78GfsGhDCiaJbKAUYMD3w')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      } }),
      /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("div", { className: "text-center max-w-5xl mx-auto", children: /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        y: 28
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.7,
        ease: "easeOut"
      }, children: [
        /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 bg-black/95 text-red-500 px-6 py-2 rounded-full text-[12px] uppercase tracking-[0.3em]", children: [
          /* @__PURE__ */ jsx(Sparkles, { className: "w-4 h-4" }),
          "Our Services"
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "mt-8 text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight green-bold", children: [
          "Complete Dental",
          /* @__PURE__ */ jsx("span", { className: "block not-italic font-normal text-red-500", children: "& Maxillofacial Care" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-8 text-lg text-blue-600 leading-relaxed max-w-3xl mx-auto", children: "Advanced dental treatments, cosmetic enhancement, and specialist maxillofacial surgery delivered with clinical precision and patient-focused care." }),
        /* @__PURE__ */ jsx("div", { className: "mt-10 flex justify-center", children: /* @__PURE__ */ jsx("div", { className: "flex p-1 bg-white/70 border border-black/5 rounded-full w-full max-w-xs shadow-sm", children: ["dental", "maxillofacial"].map((t) => {
          const active = tab === t;
          return /* @__PURE__ */ jsx("button", { onClick: () => setTab(t), className: "flex-1 py-3 px-6 rounded-full text-[12px] font-semibold transition-all duration-300 " + (active ? "bg-black text-white" : "text-blue-600 hover:text-black"), children: t === "dental" ? "DENTAL" : "MAXILLO" }, t);
        }) }) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-12 grid grid-cols-2 md:grid-cols-4 gap-5", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-white/80 backdrop-blur rounded-3xl p-6 border border-outline-variant/20 shadow-sm", children: [
            /* @__PURE__ */ jsx(HeartPulse, { className: "w-7 h-7 mx-auto text-black" }),
            /* @__PURE__ */ jsx("h3", { className: "mt-4 text-3xl font-bold text-black", children: "25+" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-blue-600", children: "Treatments" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white/80 backdrop-blur rounded-3xl p-6 border border-outline-variant/20 shadow-sm", children: [
            /* @__PURE__ */ jsx(ShieldCheck, { className: "w-7 h-7 mx-auto text-black" }),
            /* @__PURE__ */ jsx("h3", { className: "mt-4 text-3xl font-bold text-black", children: "100%" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-blue-600", children: "Safety Focus" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white/80 backdrop-blur rounded-3xl p-6 border border-outline-variant/20 shadow-sm", children: [
            /* @__PURE__ */ jsx(Sparkles, { className: "w-7 h-7 mx-auto text-black" }),
            /* @__PURE__ */ jsx("h3", { className: "mt-4 text-3xl font-bold text-black", children: "Modern" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-blue-600", children: "Technology" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white/80 backdrop-blur rounded-3xl p-6 border border-outline-variant/20 shadow-sm", children: [
            /* @__PURE__ */ jsx(HeartPulse, { className: "w-7 h-7 mx-auto text-black" }),
            /* @__PURE__ */ jsx("h3", { className: "mt-4 text-3xl font-bold text-black", children: "Expert" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-blue-600", children: "Specialists" })
          ] })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-20 flex justify-center", children: /* @__PURE__ */ jsx("div", { className: "inline-flex rounded-full bg-white border border-gray-200 p-2 shadow-sm", children: ["dental", "maxillofacial"].map((t) => /* @__PURE__ */ jsxs("button", { onClick: () => setTab(t), className: `relative px-8 py-3 rounded-full text-sm font-medium capitalize transition-all duration-300 ${tab === t ? "text-white" : "text-blue-600"}`, children: [
        tab === t && /* @__PURE__ */ jsx(motion.div, { layoutId: "tab-bg", className: "absolute inset-0 bg-black rounded-full", transition: {
          type: "spring",
          stiffness: 300,
          damping: 30
        } }),
        /* @__PURE__ */ jsx("span", { className: "relative z-10", children: t })
      ] }, t)) }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-7", children: list.map((s, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 0.04, children: /* @__PURE__ */ jsxs(motion.button, { whileHover: {
        y: -8
      }, transition: {
        duration: 0.25
      }, onClick: () => setOpen(s), className: "group text-left w-full h-full bg-gray-100 rounded-[2rem] border border-gray-200 p-8 hover:shadow-2xl transition-all duration-500 relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-32 h-32 bg-black/[0.03] rounded-full blur-3xl" }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-[0.3em] text-blue-500", children: tab }),
            /* @__PURE__ */ jsx("div", { className: "w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition", children: /* @__PURE__ */ jsx(Plus, { className: "w-5 h-5" }) })
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "mt-7 text-2xl font-bold leading-snug text-black", children: s.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-blue-600 leading-relaxed", children: s.short }),
          /* @__PURE__ */ jsxs("div", { className: "mt-8 flex items-center justify-between text-sm", children: [
            /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "View Details" }),
            /* @__PURE__ */ jsx("span", { className: "font-medium text-blue-500", children: "→" })
          ] })
        ] })
      ] }) }, s.title)) })
    ] }),
    /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsx(motion.div, { className: "fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-5", initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, exit: {
      opacity: 0
    }, onClick: () => setOpen(null), children: /* @__PURE__ */ jsxs(motion.div, { initial: {
      opacity: 0,
      scale: 0.9,
      y: 40
    }, animate: {
      opacity: 1,
      scale: 1,
      y: 0
    }, exit: {
      opacity: 0,
      scale: 0.95,
      y: 20
    }, transition: {
      duration: 0.3
    }, onClick: (e) => e.stopPropagation(), className: "relative bg-white w-full max-w-3xl rounded-[2rem] p-10 overflow-hidden", children: [
      /* @__PURE__ */ jsx("button", { onClick: () => setOpen(null), className: "absolute top-6 right-6 w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition", children: /* @__PURE__ */ jsx(X, { className: "w-5 h-5" }) }),
      /* @__PURE__ */ jsx("span", { className: "bg-gray-100 px-4 py-2 rounded-full text-xs uppercase tracking-[0.2em] text-blue-600", children: tab }),
      /* @__PURE__ */ jsx("h2", { className: "mt-6 text-5xl font-bold leading-tight", children: open.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-8 text-gray-700 leading-8 text-lg", children: open.long }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 grid md:grid-cols-3 gap-5", children: [
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-gray-200 p-6", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.2em] text-gray-400", children: "Duration" }),
          /* @__PURE__ */ jsx("h4", { className: "mt-3 text-xl font-semibold", children: open.duration })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-gray-200 p-6", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.2em] text-gray-400", children: "Anaesthesia" }),
          /* @__PURE__ */ jsx("h4", { className: "mt-3 text-xl font-semibold", children: open.anaesthesia })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-gray-200 p-6", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.2em] text-gray-400", children: "Recovery" }),
          /* @__PURE__ */ jsx("h4", { className: "mt-3 text-xl font-semibold", children: open.recovery })
        ] })
      ] })
    ] }) }) })
  ] });
}
export {
  ServicesPage as component
};
