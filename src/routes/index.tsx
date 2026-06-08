import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  HeartPulse,
  GraduationCap,
  Microscope,
  Quote,
  Star,
  ClipboardList,
  Layers,
  CheckCircle,
  BookOpen,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import drNazeer from "@/assets/dr-nazeer.jpg";
import clinic from "@/assets/clinic.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import { Counter, Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NMDC — Advanced Dental & Maxillofacial Care | Dr Brig Nazeer" },
      {
        name: "description",
        content:
          "NMDC, led by Dr Brig Nazeer, delivers premium dental implants, smile design and maxillofacial surgery with a discreet, luxury standard of care.",
      },
      { property: "og:title", content: "NMDC — Advanced Dental & Maxillofacial Care" },
      {
        property: "og:description",
        content: "Premium dental and maxillofacial care led by Dr Brig Nazeer.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const reasons = [
  {
    icon: Microscope,
    title: "Advanced Technology",
    body: "Digital imaging, guided surgery, and modern sterilisation protocols.",
  },
  {
    icon: HeartPulse,
    title: "Pain-Free Treatment",
    body: "Refined anaesthesia and gentle techniques across every procedure.",
  },
  {
    icon: Stethoscope,
    title: "Experienced Specialists",
    body: "Decades of clinical leadership in maxillofacial surgery and dentistry.",
  },
  {
    icon: Sparkles,
    title: "Modern Equipment",
    body: "Carefully selected instruments and ergonomic, calm treatment suites.",
  },
  {
    icon: GraduationCap,
    title: "Personalized Care",
    body: "Each plan is shaped around your anatomy, lifestyle and goals.",
  },
  {
    icon: ShieldCheck,
    title: "Hygiene & Safety",
    body: "Hospital-grade infection control and audited safety standards.",
  },
];

const previewServices = [
  {
    title: "Dental Implants",
    body: "Single tooth to full arch restoration with titanium implants.",
  },
  { title: "Smile Designing", body: "Bespoke aesthetic planning for a balanced, natural smile." },
  {
    title: "Jaw Surgery",
    body: "Corrective orthognathic surgery for function and facial harmony.",
  },
  {
    title: "Facial Trauma",
    body: "Reconstructive care after injury, performed with surgical precision.",
  },
];

const treatmentJourney = [
  {
    step: "Step 01",
    title: "Private Consultation",
    description:
      "Meet with our specialists for a detailed assessment of your oral health, concerns, treatment goals, and expectations.",
    icon: Stethoscope,
  },
  {
    step: "Step 02",
    title: "Digital Evaluation",
    description:
      "Advanced imaging, diagnostics, and clinical assessment provide a complete understanding of your condition and treatment needs.",
    icon: Microscope,
  },
  {
    step: "Step 03",
    title: "Personalised Treatment Plan",
    description:
      "A tailored roadmap is created specifically for your anatomy, lifestyle, goals, and long-term oral health outcomes.",
    icon: GraduationCap,
  },
  {
    step: "Step 04",
    title: "Procedure & Surgical Care",
    description:
      "Treatment is performed using modern techniques, advanced technology, and internationally recognised clinical protocols.",
    icon: HeartPulse,
  },
  {
    step: "Step 05",
    title: "Recovery & Follow-Up",
    description:
      "Dedicated aftercare, progress monitoring, and ongoing support ensure optimal healing and long-term success.",
    icon: ShieldCheck,
  },
];

const whyOralHealth = [
  {
    title: "Overall Health",
    description:
      "Healthy gums and teeth contribute to overall wellbeing and may help reduce complications associated with systemic health conditions.",
    icon: Layers,
  },
  {
    title: "Confidence & Appearance",
    description:
      "A healthy smile enhances confidence, supports positive social interactions, and contributes to a strong personal and professional presence.",
    icon: Sparkles,
  },
  {
    title: "Function & Comfort",
    description:
      "Good oral health supports comfortable eating, speaking, and everyday activities without pain or discomfort.",
    icon: Stethoscope,
  },
  {
    title: "Long-Term Prevention",
    description:
      "Preventive care helps avoid complex procedures, protects natural teeth, and promotes lifelong oral health.",
    icon: CheckCircle,
  },
];

const trustStats = [
  { label: "Years Experience", value: 30, suffix: "+" },
  { label: "Patients Treated", value: 10000, suffix: "+" },
  { label: "Successful Procedures", value: 5000, suffix: "+" },
  { label: "Patient Satisfaction", value: 99, suffix: "%" },
];

const trustIndicators = [
  {
    title: "Fellowship-Trained Specialists",
    description: "Advanced surgical education and international training.",
    icon: GraduationCap,
  },
  {
    title: "International Surgical Standards",
    description: "Protocols aligned with globally recognised best practices.",
    icon: ShieldCheck,
  },
  {
    title: "Digital Treatment Planning",
    description: "Precision-driven diagnostics and treatment preparation.",
    icon: BookOpen,
  },
  {
    title: "Advanced Sterilisation Protocols",
    description: "Hospital-grade infection control and safety measures.",
    icon: ClipboardList,
  },
  {
    title: "Patient-Centred Care",
    description: "Every treatment plan is tailored to individual needs.",
    icon: HeartPulse,
  },
  {
    title: "Modern Surgical Technology",
    description: "Advanced equipment supporting predictable outcomes.",
    icon: Microscope,
  },
];

const faqItems = [
  {
    question: "Are dental implants painful?",
    answer:
      "Modern implant procedures use advanced anaesthesia and surgical techniques designed to maximise comfort throughout treatment.",
  },
  {
    question: "How long does implant recovery take?",
    answer:
      "Most patients return to normal daily activities within a few days, while complete healing occurs gradually over several months.",
  },
  {
    question: "What is orthognathic jaw surgery?",
    answer:
      "Orthognathic surgery corrects jaw alignment issues to improve function, facial harmony, and overall oral health.",
  },
  {
    question: "How many appointments will I need?",
    answer:
      "The number of appointments depends on the complexity of treatment and your personalised treatment plan.",
  },
  {
    question: "Do you accept patients from outside Islamabad?",
    answer:
      "Yes. NMDC regularly treats patients from across Pakistan as well as overseas visitors.",
  },
  {
    question: "How do I book an appointment?",
    answer: "Appointments can be booked online, by phone, or through WhatsApp consultation.",
  },
];

const testimonials = [
  {
    name: "Ahmed Raza",
    city: "Lahore",
    text: "Dr Nazeer's precision and calm demeanor made the entire implant procedure feel effortless. The results exceeded my expectations.",
  },
  {
    name: "Sara Khan",
    city: "Karachi",
    text: "The team at NMDC treated me like family. From consultation to follow-up, every step was thoughtful and professional.",
  },
  {
    name: "Bilal Hassan",
    city: "Islamabad",
    text: "World-class care right here in Pakistan. My jaw surgery recovery was smooth and the outcome is remarkable.",
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-28 lg:pt-32">
        <div
          className="absolute inset-0 luxury-grain"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(248,245,242,0.7), rgba(248,245,242,1) 70%), url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center pb-24 lg:pb-32">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-red-600/30 bg-white/60 px-4 py-1.5 text-[11px] uppercase tracking-[0.3em] text-red-600">
                <span className="h-1.5 w-1.5 rounded-full bg-red-600" /> Established Excellence
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-black">
                Advanced Dental
                <br />
                and <span className="italic text-red-600">Maxillofacial</span> Care{" "}
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-base text-muted-foreground">Led by Dr Brig Nazeer</p>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-charcoal/75">
                {" "}
                A refined private practice combining surgical mastery with quietly attentive
                hospitality. From precise implants to complex reconstructive surgery, every detail
                is considered.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-xs uppercase tracking-[0.25em] text-white hover:bg-red-600 transition-colors duration-500"
                >
                  Book Appointment
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-black/20 bg-white/50 px-7 py-4 text-xs uppercase tracking-[0.25em] text-black hover:border-red-600 hover:text-red-600 transition-colors"
                >
                  Explore Services
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Doctor portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              {/* Main image container */}
              <div className="relative overflow-hidden rounded-[2rem] shadow-luxury border border-white/60">
                <img
                  src={drNazeer}
                  alt="Dr Brig Nazeer, lead maxillofacial surgeon at NMDC"
                  className="w-full h-[560px] object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute bottom-5 left-5 right-5 glass rounded-2xl p-4">
                  <p className="font-display text-lg text-black">Dr Brig Nazeer</p>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-gray-600">
                    Maxillofacial Surgeon · Founder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Counters */}
        <div className="relative border-t border-border/70 bg-white/40 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { n: 30, s: "+", label: "Years Experience" },
              { n: 10000, s: "+", label: "Patients Treated" },
              { n: 30, s: "+", label: "Procedures Offered" },
              { n: 99, s: "%", label: "Patient Satisfaction" },
            ].map((c, i) => (
              <Reveal key={i} delay={i * 0.05} className="text-center md:text-left">
                <p className="font-display text-4xl md:text-5xl text-charcoal">
                  {" "}
                  <Counter to={c.n} suffix={c.s} />
                </p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                  {c.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-28 grid lg:grid-cols-12 gap-14 items-center">
        <Reveal className="lg:col-span-6">
          <div className="relative">
            <img
              src={clinic}
              alt="Interior of NMDC dental clinic"
              loading="lazy"
              width={1280}
              height={1024}
              className="w-full h-[520px] object-cover rounded-[2rem] shadow-soft"
            />
            <div className="absolute -bottom-8 -right-6 glass rounded-2xl p-6 w-56 hidden md:block">
              <p className="font-display text-3xl text-red-600">A+</p>{" "}
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-gray-600">
                Quality Standard
              </p>
            </div>
          </div>
        </Reveal>
        <div className="lg:col-span-6">
          <Reveal>
            <span className="text-[11px] uppercase tracking-[0.3em] text-red-600">About NMDC</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl green-bold leading-tight">
              Surgical precision,
              <br />
              delivered with quiet warmth.
            </h2>
            <p className="mt-6 text-charcoal/75 leading-relaxed">
              {" "}
              Founded by Dr Brig Nazeer, NMDC is built on a single belief — that advanced medicine
              should feel calm, considered, and deeply personal. Our team combines decades of
              maxillofacial expertise with the hospitality of a private studio.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-black/75">
              {" "}
              {[
                "Fellowship-trained maxillofacial surgeon",
                "Former senior consultant, Armed Forces medical services",
                "Member, Pakistan Association of Oral & Maxillofacial Surgeons",
                "Over 5,000 successful procedures performed",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-600" /> {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white/60 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-28">
          <Reveal className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.3em] text-red-600">
              Why Choose Us
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl green-bold">
              {" "}
              The standard we hold ourselves to.
            </h2>
          </Reveal>
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.02}>
                <div className="group h-full rounded-3xl border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-red-600/40">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-100 border border-border group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <r.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-display text-xl text-black">{r.title}</h3>
                  <p className="mt-3 text-sm text-black/70 leading-relaxed">{r.body}</p>{" "}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <span className="text-[11px] uppercase tracking-[0.3em] text-red-600">Services</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl green-bold max-w-2xl">
              {" "}
              A complete spectrum of dental &amp; facial care.
            </h2>
          </Reveal>
          <Link to="/services" className="link-underline text-sm tracking-wide text-charcoal/80">
            View all services →
          </Link>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewServices.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <Link
                to="/services"
                className="block h-full rounded-3xl border border-border bg-blue-50 p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:border-red-600/40"
              >
                <p className="font-display text-2xl text-black">{s.title}</p>
                <p className="mt-3 text-sm text-black/70 leading-relaxed">{s.body}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-red-600">
                  {" "}
                  Learn more <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TREATMENT JOURNEY */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-28">
        <Reveal className="max-w-2xl">
          <span className="text-[11px] uppercase tracking-[0.3em] text-red-600">
            PATIENT EXPERIENCE
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl green-bold">
            Your Treatment Journey
          </h2>
          <p className="mt-6 max-w-3xl text-black/70 leading-relaxed">
            A carefully guided experience designed around comfort, precision, and exceptional
            outcomes. Every stage of treatment is planned with clarity, safety, and personalised
            attention.
          </p>
        </Reveal>
        <div className="relative mt-14 lg:mt-20">
          <div className="hidden lg:block absolute inset-x-0 top-24 h-px bg-border/60" />
          <div className="grid gap-6 lg:grid-cols-5">
            {treatmentJourney.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <div className="group relative overflow-hidden rounded-[2rem] border border-border bg-white/90 p-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-xl h-full flex flex-col">
                  <span className="hidden lg:block absolute left-1/2 top-6 h-4 w-4 -translate-x-1/2 rounded-full border border-red-600 bg-white shadow-sm" />
                  <div className="flex h-14 w-14 items-center justify-center rounded-3xl border border-border bg-blue-50 text-red-600">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <p className="mt-6 text-[11px] uppercase tracking-[0.3em] text-red-600">
                    {item.step}
                  </p>
                  <h3 className="mt-3 font-display text-xl text-black">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-charcoal/75">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY ORAL HEALTH MATTERS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-28 bg-white/80">
        <Reveal className="max-w-2xl">
          <span className="text-[11px] uppercase tracking-[0.3em] text-red-600">
            PATIENT EDUCATION
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl green-bold">
            Why Oral Health Matters
          </h2>
          <p className="mt-6 max-w-3xl text-black/70 leading-relaxed">
            Oral health influences far more than your smile. It impacts overall wellbeing,
            confidence, daily comfort, and long-term quality of life.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyOralHealth.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <div className="group rounded-[2rem] border border-border bg-gradient-to-br from-white via-slate-50 to-slate-100 p-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-red-50 text-red-600">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-xl text-black">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-charcoal/75">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-28">
        <Reveal className="max-w-3xl">
          <span className="text-[11px] uppercase tracking-[0.3em] text-red-600">Education</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl green-bold leading-tight">
            Learn from our specialists.
          </h2>
          <p className="mt-6 text-black/70 leading-relaxed">
            Watch professional educational videos on dental care, treatment procedures, and
            post-operative guidance.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {[
            { title: "Caring for Implants", duration: "5:32" },
            { title: "Smile Design Basics", duration: "7:14" },
            { title: "After Wisdom Surgery", duration: "6:45" },
            { title: "Children's Oral Health", duration: "4:28" },
            { title: "Gum Disease Prevention", duration: "5:12" },
            { title: "Teeth Whitening Guide", duration: "3:50" },
          ].map((video, i) => (
            <Reveal key={video.title} delay={i * 0.02}>
              <div className="group relative overflow-hidden rounded-2xl bg-black hover:shadow-lg transition-all duration-200">
                <div className="relative aspect-video bg-gradient-to-br from-black/80 to-gray-800 flex items-center justify-center">
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="grid h-16 w-16 place-items-center rounded-full bg-red-600 text-white transition-transform group-hover:scale-110">
                      <svg className="h-6 w-6 ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-red-600 font-semibold">{video.duration}</p>
                  <p className="mt-2 font-display text-lg text-white leading-snug">{video.title}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <Link
            to="/education"
            className="inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 text-xs uppercase tracking-[0.25em] text-white hover:bg-red-600 hover:text-white transition-colors"
          >
            View All Videos <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>

      {/* TRUST & RESULTS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-28 bg-white/90">
        <Reveal className="max-w-2xl">
          <span className="text-[11px] uppercase tracking-[0.3em] text-red-600">
            TRUST & RESULTS
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl green-bold">
            Trusted By Patients Across Pakistan
          </h2>
          <p className="mt-6 max-w-3xl text-black/70 leading-relaxed">
            Decades of experience, thousands of successful treatments, and a commitment to
            exceptional patient care have earned the trust of patients from across the country.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-3 sm:gap-6 grid-cols-2 lg:grid-cols-4">
          {trustStats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.02}>
              <div className="rounded-[2rem] border border-border bg-white/95 p-6 shadow-soft backdrop-blur-sm transition-all duration-200">
                <p className="text-xs uppercase tracking-[0.3em] text-red-600">{stat.label}</p>
                <p className="mt-6 font-display text-4xl text-black">
                  {stat.value.toLocaleString()}
                  {stat.suffix}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 grid gap-3 sm:gap-6 grid-cols-2 lg:grid-cols-3">
          {trustIndicators.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.02}>
              <div className="group rounded-[2rem] border border-border bg-card p-6 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-blue-50 text-red-600">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-xl text-black">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-charcoal/75">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-28">
        <Reveal className="max-w-2xl">
          <span className="text-[11px] uppercase tracking-[0.3em] text-red-600">
            Patient Stories
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl green-bold">
            {" "}
            Trusted by thousands across Pakistan.
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.02}>
              <div className="h-full rounded-3xl border border-border bg-card p-6 transition-all duration-200">
                <Quote className="h-6 w-6 text-gold" />
                <p className="mt-6 text-[15px] leading-relaxed text-charcoal/80">"{t.text}"</p>
                <div className="mt-8 flex items-center justify-between">
                  <div>
                    <p className="font-display text-lg text-charcoal">{t.name}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {t.city}
                    </p>
                  </div>
                  <div className="flex gap-0.5 text-gold">
                    {" "}
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-28">
        <Reveal className="max-w-3xl">
          <span className="text-[11px] uppercase tracking-[0.3em] text-red-600">
            COMMON QUESTIONS
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl green-bold">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 max-w-3xl text-black/70 leading-relaxed">
            Answers to common questions about treatments, procedures, appointments, and patient
            care.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.3fr_0.9fr]">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="space-y-4 rounded-[2rem] border border-border bg-white/90 p-6 shadow-soft"
          >
            {faqItems.map((faq, index) => (
              <AccordionItem
                value={`item-${index + 1}`}
                key={faq.question}
                className="overflow-hidden rounded-[1.75rem] border border-border/80 bg-card"
              >
                <AccordionTrigger className="px-6 text-left text-sm font-semibold text-charcoal transition-colors hover:text-black">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  <p className="text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="rounded-[2rem] bg-gradient-to-br from-red-50 to-white border border-border p-10 shadow-soft">
            <p className="text-sm uppercase tracking-[0.3em] text-red-600">Need guidance?</p>
            <h3 className="mt-4 font-display text-3xl text-black">
              Speak with our patient care team
            </h3>
            <p className="mt-4 text-sm text-charcoal/80 leading-relaxed">
              We help answer questions, coordinate referrals, and support travel arrangements for
              patients from across Pakistan.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-xs uppercase tracking-[0.25em] text-white hover:bg-red-600 transition-colors"
            >
              Book Appointment <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-black via-gray-900 to-black px-8 sm:px-16 py-20 text-white">
            <div
              aria-hidden
              className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-red-600/20 blur-3xl"
            />
            <div
              aria-hidden
              className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-blue-500/15 blur-3xl"
            />
            <div className="relative grid md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-[11px] uppercase tracking-[0.3em] text-red-400">Begin</span>{" "}
                <h3 className="mt-4 font-display text-4xl md:text-5xl leading-tight text-white">
                  A consultation with quiet confidence.
                </h3>
              </div>
              <div className="md:text-right">
                <p className="text-white/70 max-w-md md:ml-auto">
                  {" "}
                  Reserve a private appointment with Dr Brig Nazeer and discover a calmer way to
                  receive exceptional dental care.
                </p>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-red-600 px-8 py-4 text-xs uppercase tracking-[0.25em] text-white hover:bg-red-700 hover:text-white transition-colors"
                >
                  Book Appointment <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
