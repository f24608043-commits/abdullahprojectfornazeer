import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ChevronDown, ArrowRight, Microscope, HeartPulse, Stethoscope, Sparkles, GraduationCap, ShieldCheck, Layers, CheckCircle, BookOpen, ClipboardList, Quote, Star } from "lucide-react";
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { R as Reveal, C as Counter } from "./Reveal-Bm4r8-61.js";
import "framer-motion";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Accordion = AccordionPrimitive.Root;
const AccordionItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Item, { ref, className: cn("border-b", className), ...props }));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
const drNazeer = "/assets/dr-nazeer-DPfKtX_S.jpg";
const clinic = "/assets/clinic-BEgy9-DA.jpg";
const heroBg = "/assets/hero-bg-B03zReP3.jpg";
const reasons = [{
  icon: Microscope,
  title: "Advanced Technology",
  body: "Digital imaging, guided surgery, and modern sterilisation protocols."
}, {
  icon: HeartPulse,
  title: "Pain-Free Treatment",
  body: "Refined anaesthesia and gentle techniques across every procedure."
}, {
  icon: Stethoscope,
  title: "Experienced Specialists",
  body: "Decades of clinical leadership in maxillofacial surgery and dentistry."
}, {
  icon: Sparkles,
  title: "Modern Equipment",
  body: "Carefully selected instruments and ergonomic, calm treatment suites."
}, {
  icon: GraduationCap,
  title: "Personalized Care",
  body: "Each plan is shaped around your anatomy, lifestyle and goals."
}, {
  icon: ShieldCheck,
  title: "Hygiene & Safety",
  body: "Hospital-grade infection control and audited safety standards."
}];
const previewServices = [{
  title: "Dental Implants",
  body: "Single tooth to full arch restoration with titanium implants."
}, {
  title: "Smile Designing",
  body: "Bespoke aesthetic planning for a balanced, natural smile."
}, {
  title: "Jaw Surgery",
  body: "Corrective orthognathic surgery for function and facial harmony."
}, {
  title: "Facial Trauma",
  body: "Reconstructive care after injury, performed with surgical precision."
}];
const treatmentJourney = [{
  step: "Step 01",
  title: "Private Consultation",
  description: "Meet with our specialists for a detailed assessment of your oral health, concerns, treatment goals, and expectations.",
  icon: Stethoscope
}, {
  step: "Step 02",
  title: "Digital Evaluation",
  description: "Advanced imaging, diagnostics, and clinical assessment provide a complete understanding of your condition and treatment needs.",
  icon: Microscope
}, {
  step: "Step 03",
  title: "Personalised Treatment Plan",
  description: "A tailored roadmap is created specifically for your anatomy, lifestyle, goals, and long-term oral health outcomes.",
  icon: GraduationCap
}, {
  step: "Step 04",
  title: "Procedure & Surgical Care",
  description: "Treatment is performed using modern techniques, advanced technology, and internationally recognised clinical protocols.",
  icon: HeartPulse
}, {
  step: "Step 05",
  title: "Recovery & Follow-Up",
  description: "Dedicated aftercare, progress monitoring, and ongoing support ensure optimal healing and long-term success.",
  icon: ShieldCheck
}];
const whyOralHealth = [{
  title: "Overall Health",
  description: "Healthy gums and teeth contribute to overall wellbeing and may help reduce complications associated with systemic health conditions.",
  icon: Layers
}, {
  title: "Confidence & Appearance",
  description: "A healthy smile enhances confidence, supports positive social interactions, and contributes to a strong personal and professional presence.",
  icon: Sparkles
}, {
  title: "Function & Comfort",
  description: "Good oral health supports comfortable eating, speaking, and everyday activities without pain or discomfort.",
  icon: Stethoscope
}, {
  title: "Long-Term Prevention",
  description: "Preventive care helps avoid complex procedures, protects natural teeth, and promotes lifelong oral health.",
  icon: CheckCircle
}];
const trustStats = [{
  label: "Years Experience",
  value: 30,
  suffix: "+"
}, {
  label: "Patients Treated",
  value: 1e4,
  suffix: "+"
}, {
  label: "Successful Procedures",
  value: 5e3,
  suffix: "+"
}, {
  label: "Patient Satisfaction",
  value: 99,
  suffix: "%"
}];
const trustIndicators = [{
  title: "Fellowship-Trained Specialists",
  description: "Advanced surgical education and international training.",
  icon: GraduationCap
}, {
  title: "International Surgical Standards",
  description: "Protocols aligned with globally recognised best practices.",
  icon: ShieldCheck
}, {
  title: "Digital Treatment Planning",
  description: "Precision-driven diagnostics and treatment preparation.",
  icon: BookOpen
}, {
  title: "Advanced Sterilisation Protocols",
  description: "Hospital-grade infection control and safety measures.",
  icon: ClipboardList
}, {
  title: "Patient-Centred Care",
  description: "Every treatment plan is tailored to individual needs.",
  icon: HeartPulse
}, {
  title: "Modern Surgical Technology",
  description: "Advanced equipment supporting predictable outcomes.",
  icon: Microscope
}];
const faqItems = [{
  question: "Are dental implants painful?",
  answer: "Modern implant procedures use advanced anaesthesia and surgical techniques designed to maximise comfort throughout treatment."
}, {
  question: "How long does implant recovery take?",
  answer: "Most patients return to normal daily activities within a few days, while complete healing occurs gradually over several months."
}, {
  question: "What is orthognathic jaw surgery?",
  answer: "Orthognathic surgery corrects jaw alignment issues to improve function, facial harmony, and overall oral health."
}, {
  question: "How many appointments will I need?",
  answer: "The number of appointments depends on the complexity of treatment and your personalised treatment plan."
}, {
  question: "Do you accept patients from outside Islamabad?",
  answer: "Yes. NMDC regularly treats patients from across Pakistan as well as overseas visitors."
}, {
  question: "How do I book an appointment?",
  answer: "Appointments can be booked online, by phone, or through WhatsApp consultation."
}];
const testimonials = [{
  name: "Ahmed Raza",
  city: "Lahore",
  text: "Dr Nazeer's precision and calm demeanor made the entire implant procedure feel effortless. The results exceeded my expectations."
}, {
  name: "Sara Khan",
  city: "Karachi",
  text: "The team at NMDC treated me like family. From consultation to follow-up, every step was thoughtful and professional."
}, {
  name: "Bilal Hassan",
  city: "Islamabad",
  text: "World-class care right here in Pakistan. My jaw surgery recovery was smooth and the outcome is remarkable."
}];
function Home() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden pt-28 lg:pt-32", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 luxury-grain", style: {
        backgroundImage: `linear-gradient(180deg, rgba(248,245,242,0.7), rgba(248,245,242,1) 70%), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }, "aria-hidden": true }),
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center pb-24 lg:pb-32", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7", children: [
          /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-red-600/30 bg-white/60 px-4 py-1.5 text-[11px] uppercase tracking-[0.3em] text-red-600", children: [
            /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-red-600" }),
            " Established Excellence"
          ] }) }),
          /* @__PURE__ */ jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxs("h1", { className: "mt-6 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-black", children: [
            "Advanced Dental",
            /* @__PURE__ */ jsx("br", {}),
            "and ",
            /* @__PURE__ */ jsx("span", { className: "italic text-red-600", children: "Maxillofacial" }),
            " Care              "
          ] }) }),
          /* @__PURE__ */ jsxs(Reveal, { delay: 0.2, children: [
            /* @__PURE__ */ jsx("p", { className: "mt-6 text-base text-muted-foreground", children: "Led by Dr Brig Nazeer" }),
            /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-xl text-[15px] leading-relaxed text-charcoal/75", children: "                A refined private practice combining surgical mastery with quietly attentive hospitality. From precise implants to complex reconstructive surgery, every detail is considered." })
          ] }),
          /* @__PURE__ */ jsx(Reveal, { delay: 0.3, children: /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap gap-4", children: [
            /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "group inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-xs uppercase tracking-[0.25em] text-white hover:bg-red-600 transition-colors duration-500", children: [
              "Book Appointment",
              /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
            ] }),
            /* @__PURE__ */ jsx(Link, { to: "/services", className: "inline-flex items-center gap-2 rounded-full border border-black/20 bg-white/50 px-7 py-4 text-xs uppercase tracking-[0.25em] text-black hover:border-red-600 hover:text-red-600 transition-colors", children: "Explore Services" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "lg:col-span-5 relative", children: /* @__PURE__ */ jsx("div", { className: "relative mx-auto max-w-md", children: /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-[2rem] shadow-luxury border border-white/60", children: [
          /* @__PURE__ */ jsx("img", { src: drNazeer, alt: "Dr Brig Nazeer, lead maxillofacial surgeon at NMDC", className: "w-full h-[560px] object-cover", loading: "lazy", decoding: "async" }),
          /* @__PURE__ */ jsxs("div", { className: "absolute bottom-5 left-5 right-5 glass rounded-2xl p-4", children: [
            /* @__PURE__ */ jsx("p", { className: "font-display text-lg text-black", children: "Dr Brig Nazeer" }),
            /* @__PURE__ */ jsx("p", { className: "text-[11px] uppercase tracking-[0.25em] text-gray-600", children: "Maxillofacial Surgeon · Founder" })
          ] })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "relative border-t border-border/70 bg-white/40 backdrop-blur-sm", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 py-10 grid grid-cols-2 md:grid-cols-4 gap-8", children: [{
        n: 30,
        s: "+",
        label: "Years Experience"
      }, {
        n: 1e4,
        s: "+",
        label: "Patients Treated"
      }, {
        n: 30,
        s: "+",
        label: "Procedures Offered"
      }, {
        n: 99,
        s: "%",
        label: "Patient Satisfaction"
      }].map((c, i) => /* @__PURE__ */ jsxs(Reveal, { delay: i * 0.05, className: "text-center md:text-left", children: [
        /* @__PURE__ */ jsxs("p", { className: "font-display text-4xl md:text-5xl text-charcoal", children: [
          "                  ",
          /* @__PURE__ */ jsx(Counter, { to: c.n, suffix: c.s })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-[11px] uppercase tracking-[0.25em] text-muted-foreground", children: c.label })
      ] }, i)) }) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-6 lg:px-10 py-28 grid lg:grid-cols-12 gap-14 items-center", children: [
      /* @__PURE__ */ jsx(Reveal, { className: "lg:col-span-6", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("img", { src: clinic, alt: "Interior of NMDC dental clinic", loading: "lazy", width: 1280, height: 1024, className: "w-full h-[520px] object-cover rounded-[2rem] shadow-soft" }),
        /* @__PURE__ */ jsxs("div", { className: "absolute -bottom-8 -right-6 glass rounded-2xl p-6 w-56 hidden md:block", children: [
          /* @__PURE__ */ jsx("p", { className: "font-display text-3xl text-red-600", children: "A+" }),
          "              ",
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs uppercase tracking-[0.2em] text-gray-600", children: "Quality Standard" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-6", children: /* @__PURE__ */ jsxs(Reveal, { children: [
        /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-[0.3em] text-red-600", children: "About NMDC" }),
        /* @__PURE__ */ jsxs("h2", { className: "mt-4 font-display text-4xl md:text-5xl green-bold leading-tight", children: [
          "Surgical precision,",
          /* @__PURE__ */ jsx("br", {}),
          "delivered with quiet warmth."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-charcoal/75 leading-relaxed", children: "              Founded by Dr Brig Nazeer, NMDC is built on a single belief — that advanced medicine should feel calm, considered, and deeply personal. Our team combines decades of maxillofacial expertise with the hospitality of a private studio." }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-8 space-y-3 text-sm text-black/75", children: [
          "              ",
          ["Fellowship-trained maxillofacial surgeon", "Former senior consultant, Armed Forces medical services", "Member, Pakistan Association of Oral & Maxillofacial Surgeons", "Over 5,000 successful procedures performed"].map((t) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "mt-2 h-1.5 w-1.5 rounded-full bg-red-600" }),
            "                  ",
            t
          ] }, t))
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-white/60 border-y border-border/60", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 py-28", children: [
      /* @__PURE__ */ jsxs(Reveal, { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-[0.3em] text-red-600", children: "Why Choose Us" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-4 font-display text-4xl md:text-5xl green-bold", children: "              The standard we hold ourselves to." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-16 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6", children: reasons.map((r, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 0.02, children: /* @__PURE__ */ jsxs("div", { className: "group h-full rounded-3xl border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-red-600/40", children: [
        /* @__PURE__ */ jsx("div", { className: "grid h-12 w-12 place-items-center rounded-2xl bg-blue-100 border border-border group-hover:bg-red-600 group-hover:text-white transition-colors", children: /* @__PURE__ */ jsx(r.icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsx("h3", { className: "mt-6 font-display text-xl text-black", children: r.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-black/70 leading-relaxed", children: r.body }),
        "                "
      ] }) }, r.title)) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-6 lg:px-10 py-28", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-end justify-between gap-6", children: [
        /* @__PURE__ */ jsxs(Reveal, { children: [
          /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-[0.3em] text-red-600", children: "Services" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-4 font-display text-4xl md:text-5xl green-bold max-w-2xl", children: "              A complete spectrum of dental & facial care." })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/services", className: "link-underline text-sm tracking-wide text-charcoal/80", children: "View all services →" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: previewServices.map((s, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 0.05, children: /* @__PURE__ */ jsxs(Link, { to: "/services", className: "block h-full rounded-3xl border border-border bg-blue-50 p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:border-red-600/40", children: [
        /* @__PURE__ */ jsx("p", { className: "font-display text-2xl text-black", children: s.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-black/70 leading-relaxed", children: s.body }),
        /* @__PURE__ */ jsxs("span", { className: "mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-red-600", children: [
          "                  Learn more ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-3 w-3" })
        ] })
      ] }) }, s.title)) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-6 lg:px-10 py-28", children: [
      /* @__PURE__ */ jsxs(Reveal, { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-[0.3em] text-red-600", children: "PATIENT EXPERIENCE" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-4 font-display text-4xl md:text-5xl green-bold", children: "Your Treatment Journey" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-3xl text-black/70 leading-relaxed", children: "A carefully guided experience designed around comfort, precision, and exceptional outcomes. Every stage of treatment is planned with clarity, safety, and personalised attention." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative mt-14 lg:mt-20", children: [
        /* @__PURE__ */ jsx("div", { className: "hidden lg:block absolute inset-x-0 top-24 h-px bg-border/60" }),
        /* @__PURE__ */ jsx("div", { className: "grid gap-6 lg:grid-cols-5", children: treatmentJourney.map((item, index) => /* @__PURE__ */ jsx(Reveal, { delay: index * 0.08, children: /* @__PURE__ */ jsxs("div", { className: "group relative overflow-hidden rounded-[2rem] border border-border bg-white/90 p-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-xl h-full flex flex-col", children: [
          /* @__PURE__ */ jsx("span", { className: "hidden lg:block absolute left-1/2 top-6 h-4 w-4 -translate-x-1/2 rounded-full border border-red-600 bg-white shadow-sm" }),
          /* @__PURE__ */ jsx("div", { className: "flex h-14 w-14 items-center justify-center rounded-3xl border border-border bg-blue-50 text-red-600", children: /* @__PURE__ */ jsx(item.icon, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ jsx("p", { className: "mt-6 text-[11px] uppercase tracking-[0.3em] text-red-600", children: item.step }),
          /* @__PURE__ */ jsx("h3", { className: "mt-3 font-display text-xl text-black", children: item.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm leading-relaxed text-charcoal/75", children: item.description })
        ] }) }, item.title)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-6 lg:px-10 py-28 bg-white/80", children: [
      /* @__PURE__ */ jsxs(Reveal, { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-[0.3em] text-red-600", children: "PATIENT EDUCATION" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-4 font-display text-4xl md:text-5xl green-bold", children: "Why Oral Health Matters" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-3xl text-black/70 leading-relaxed", children: "Oral health influences far more than your smile. It impacts overall wellbeing, confidence, daily comfort, and long-term quality of life." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: whyOralHealth.map((item, index) => /* @__PURE__ */ jsx(Reveal, { delay: index * 0.06, children: /* @__PURE__ */ jsxs("div", { className: "group rounded-[2rem] border border-border bg-gradient-to-br from-white via-slate-50 to-slate-100 p-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-xl", children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-3xl bg-red-50 text-red-600", children: /* @__PURE__ */ jsx(item.icon, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsx("h3", { className: "mt-6 font-display text-xl text-black", children: item.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm leading-relaxed text-charcoal/75", children: item.description })
      ] }) }, item.title)) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-6 lg:px-10 py-28", children: [
      /* @__PURE__ */ jsxs(Reveal, { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-[0.3em] text-red-600", children: "Education" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-4 font-display text-4xl md:text-5xl green-bold leading-tight", children: "Learn from our specialists." }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-black/70 leading-relaxed", children: "Watch professional educational videos on dental care, treatment procedures, and post-operative guidance." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-16 grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6", children: [{
        title: "Caring for Implants",
        duration: "5:32"
      }, {
        title: "Smile Design Basics",
        duration: "7:14"
      }, {
        title: "After Wisdom Surgery",
        duration: "6:45"
      }, {
        title: "Children's Oral Health",
        duration: "4:28"
      }, {
        title: "Gum Disease Prevention",
        duration: "5:12"
      }, {
        title: "Teeth Whitening Guide",
        duration: "3:50"
      }].map((video, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 0.02, children: /* @__PURE__ */ jsxs("div", { className: "group relative overflow-hidden rounded-2xl bg-black hover:shadow-lg transition-all duration-200", children: [
        /* @__PURE__ */ jsx("div", { className: "relative aspect-video bg-gradient-to-br from-black/80 to-gray-800 flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid place-items-center", children: /* @__PURE__ */ jsx("div", { className: "grid h-16 w-16 place-items-center rounded-full bg-red-600 text-white transition-transform group-hover:scale-110", children: /* @__PURE__ */ jsx("svg", { className: "h-6 w-6 ml-0.5", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M8 5v14l11-7z" }) }) }) }) }),
        /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm text-red-600 font-semibold", children: video.duration }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 font-display text-lg text-white leading-snug", children: video.title })
        ] })
      ] }) }, video.title)) }),
      /* @__PURE__ */ jsx(Reveal, { className: "mt-12 text-center", children: /* @__PURE__ */ jsxs(Link, { to: "/education", className: "inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 text-xs uppercase tracking-[0.25em] text-white hover:bg-red-600 hover:text-white transition-colors", children: [
        "View All Videos ",
        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-6 lg:px-10 py-28 bg-white/90", children: [
      /* @__PURE__ */ jsxs(Reveal, { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-[0.3em] text-red-600", children: "TRUST & RESULTS" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-4 font-display text-4xl md:text-5xl green-bold", children: "Trusted By Patients Across Pakistan" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-3xl text-black/70 leading-relaxed", children: "Decades of experience, thousands of successful treatments, and a commitment to exceptional patient care have earned the trust of patients from across the country." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-14 grid gap-3 sm:gap-6 grid-cols-2 lg:grid-cols-4", children: trustStats.map((stat, index) => /* @__PURE__ */ jsx(Reveal, { delay: index * 0.02, children: /* @__PURE__ */ jsxs("div", { className: "rounded-[2rem] border border-border bg-white/95 p-6 shadow-soft backdrop-blur-sm transition-all duration-200", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-red-600", children: stat.label }),
        /* @__PURE__ */ jsxs("p", { className: "mt-6 font-display text-4xl text-black", children: [
          stat.value.toLocaleString(),
          stat.suffix
        ] })
      ] }) }, stat.label)) }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 grid gap-3 sm:gap-6 grid-cols-2 lg:grid-cols-3", children: trustIndicators.map((item, index) => /* @__PURE__ */ jsx(Reveal, { delay: index * 0.02, children: /* @__PURE__ */ jsxs("div", { className: "group rounded-[2rem] border border-border bg-card p-6 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-xl", children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-3xl bg-blue-50 text-red-600", children: /* @__PURE__ */ jsx(item.icon, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsx("h3", { className: "mt-6 font-display text-xl text-black", children: item.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm leading-relaxed text-charcoal/75", children: item.description })
      ] }) }, item.title)) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-6 lg:px-10 py-28", children: [
      /* @__PURE__ */ jsxs(Reveal, { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-[0.3em] text-red-600", children: "Patient Stories" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-4 font-display text-4xl md:text-5xl green-bold", children: "            Trusted by thousands across Pakistan." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-14 grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6", children: testimonials.map((t, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 0.02, children: /* @__PURE__ */ jsxs("div", { className: "h-full rounded-3xl border border-border bg-card p-6 transition-all duration-200", children: [
        /* @__PURE__ */ jsx(Quote, { className: "h-6 w-6 text-gold" }),
        /* @__PURE__ */ jsxs("p", { className: "mt-6 text-[15px] leading-relaxed text-charcoal/80", children: [
          '"',
          t.text,
          '"'
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-display text-lg text-charcoal", children: t.name }),
            /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: t.city })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-0.5 text-gold", children: [
            "                    ",
            Array.from({
              length: 5
            }).map((_, k) => /* @__PURE__ */ jsx(Star, { className: "h-3.5 w-3.5 fill-current" }, k))
          ] })
        ] })
      ] }) }, t.name)) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-6 lg:px-10 py-28", children: [
      /* @__PURE__ */ jsxs(Reveal, { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-[0.3em] text-red-600", children: "COMMON QUESTIONS" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-4 font-display text-4xl md:text-5xl green-bold", children: "Frequently Asked Questions" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-3xl text-black/70 leading-relaxed", children: "Answers to common questions about treatments, procedures, appointments, and patient care." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-12 grid gap-10 lg:grid-cols-[1.3fr_0.9fr]", children: [
        /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, defaultValue: "item-1", className: "space-y-4 rounded-[2rem] border border-border bg-white/90 p-6 shadow-soft", children: faqItems.map((faq, index) => /* @__PURE__ */ jsxs(AccordionItem, { value: `item-${index + 1}`, className: "overflow-hidden rounded-[1.75rem] border border-border/80 bg-card", children: [
          /* @__PURE__ */ jsx(AccordionTrigger, { className: "px-6 text-left text-sm font-semibold text-charcoal transition-colors hover:text-black", children: faq.question }),
          /* @__PURE__ */ jsx(AccordionContent, { className: "px-6", children: /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-muted-foreground", children: faq.answer }) })
        ] }, faq.question)) }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-[2rem] bg-gradient-to-br from-red-50 to-white border border-border p-10 shadow-soft", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-[0.3em] text-red-600", children: "Need guidance?" }),
          /* @__PURE__ */ jsx("h3", { className: "mt-4 font-display text-3xl text-black", children: "Speak with our patient care team" }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm text-charcoal/80 leading-relaxed", children: "We help answer questions, coordinate referrals, and support travel arrangements for patients from across Pakistan." }),
          /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "mt-8 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-xs uppercase tracking-[0.25em] text-white hover:bg-red-600 transition-colors", children: [
            "Book Appointment ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "mx-auto max-w-7xl px-6 lg:px-10 pb-24", children: /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-black via-gray-900 to-black px-8 sm:px-16 py-20 text-white", children: [
      /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "absolute -top-32 -right-32 h-96 w-96 rounded-full bg-red-600/20 blur-3xl" }),
      /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-blue-500/15 blur-3xl" }),
      /* @__PURE__ */ jsxs("div", { className: "relative grid md:grid-cols-2 gap-10 items-center", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-[0.3em] text-red-400", children: "Begin" }),
          "                ",
          /* @__PURE__ */ jsx("h3", { className: "mt-4 font-display text-4xl md:text-5xl leading-tight text-white", children: "A consultation with quiet confidence." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "md:text-right", children: [
          /* @__PURE__ */ jsx("p", { className: "text-white/70 max-w-md md:ml-auto", children: "                  Reserve a private appointment with Dr Brig Nazeer and discover a calmer way to receive exceptional dental care." }),
          /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "mt-8 inline-flex items-center gap-3 rounded-full bg-red-600 px-8 py-4 text-xs uppercase tracking-[0.25em] text-white hover:bg-red-700 hover:text-white transition-colors", children: [
            "Book Appointment ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
          ] })
        ] })
      ] })
    ] }) }) })
  ] });
}
export {
  Home as component
};
