import { AnimatePresence, motion } from "framer-motion";
import { X, Plus, Sparkles, ShieldCheck, HeartPulse } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/site/Reveal.tsx";

/* =========================================================
   TYPES
========================================================= */

type Service = {
  title: string;
  short: string;
  long: string;
  duration: string;
  anaesthesia: string;
  recovery: string;
  image: string;
};

/* =========================================================
   DENTAL SERVICES
========================================================= */

const dental: Service[] = [
  {
    title: "Dental Implants",
    short: "Permanent replacement for missing teeth.",
    long: "Single tooth implants, multiple implants, full-mouth rehabilitation and All-on-4 solutions using digital guided implant surgery and premium restorations.",
    duration: "1–3 visits",
    anaesthesia: "Local / Sedation",
    recovery: "Minimal",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80",
  },

  {
    title: "Root Canal Treatment",
    short: "Save infected teeth without extraction.",
    long: "Microscope-assisted painless root canal treatment with rotary instruments for faster healing and long-term tooth preservation.",
    duration: "1–2 visits",
    anaesthesia: "Local",
    recovery: "1–2 days",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80",
  },

  {
    title: "Teeth Whitening",
    short: "Professional smile brightening treatments.",
    long: "Advanced whitening systems for removing stains and enhancing smile brightness safely without damaging enamel.",
    duration: "1 visit",
    anaesthesia: "None",
    recovery: "Immediate",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80",
  },

  {
    title: "Smile Designing",
    short: "Custom smile transformation planning.",
    long: "Digital smile design with facial analysis, mockups and aesthetic planning for a naturally balanced smile.",
    duration: "2–4 visits",
    anaesthesia: "Minimal",
    recovery: "Minimal",
    image: "https://images.unsplash.com/photo-1445543949571-ffc3e0e2f55e?w=800&q=80",
  },

  {
    title: "Veneers",
    short: "Porcelain shells for a perfect smile.",
    long: "Ultra-thin porcelain veneers for correcting discoloration, gaps, shape irregularities and worn teeth.",
    duration: "2 visits",
    anaesthesia: "Local",
    recovery: "Minimal",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
  },

  {
    title: "Crowns & Bridges",
    short: "Restore damaged or missing teeth.",
    long: "Premium zirconia and ceramic crowns and bridges crafted digitally for precise fit and natural aesthetics.",
    duration: "2 visits",
    anaesthesia: "Local",
    recovery: "Minimal",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80",
  },

  {
    title: "Orthodontics & Braces",
    short: "Straighten teeth and improve bite.",
    long: "Metal braces, ceramic braces and clear aligners for children and adults with modern orthodontic planning.",
    duration: "6–24 months",
    anaesthesia: "None",
    recovery: "Adjustment period",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80",
  },

  {
    title: "Clear Aligners",
    short: "Invisible orthodontic correction.",
    long: "Custom transparent aligners for discreet teeth straightening with comfortable removable trays.",
    duration: "6–18 months",
    anaesthesia: "None",
    recovery: "Minimal",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
  },

  {
    title: "Scaling & Polishing",
    short: "Professional dental cleaning service.",
    long: "Deep cleaning procedures removing plaque, tartar and stains while improving gum health and fresh breath.",
    duration: "1 visit",
    anaesthesia: "None",
    recovery: "Immediate",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
  },

  {
    title: "Gum Disease Treatment",
    short: "Advanced periodontal therapy.",
    long: "Laser-assisted gum treatments, deep cleaning and periodontal maintenance for healthy gums.",
    duration: "1–3 visits",
    anaesthesia: "Local",
    recovery: "Few days",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80",
  },

  {
    title: "Tooth Extraction",
    short: "Safe and comfortable tooth removal.",
    long: "Simple and surgical extractions performed with modern minimally invasive techniques.",
    duration: "1 visit",
    anaesthesia: "Local",
    recovery: "2–5 days",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80",
  },

  {
    title: "Pediatric Dentistry",
    short: "Gentle dental care for children.",
    long: "Child-friendly preventive and restorative treatments including fluoride therapy and cavity management.",
    duration: "1 visit",
    anaesthesia: "Minimal",
    recovery: "Immediate",
    image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=800&q=80",
  },

  {
    title: "Dentures",
    short: "Comfortable replacement for missing teeth.",
    long: "Complete and partial dentures designed for aesthetics, comfort and proper chewing function.",
    duration: "2–4 visits",
    anaesthesia: "None",
    recovery: "Adjustment period",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80",
  },

  {
    title: "Dental Fillings",
    short: "Restore cavities naturally.",
    long: "Composite tooth-colored fillings restoring strength and appearance after decay removal.",
    duration: "1 visit",
    anaesthesia: "Local",
    recovery: "Immediate",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
  },

  {
    title: "Emergency Dentistry",
    short: "Urgent dental pain and trauma care.",
    long: "Immediate treatment for severe tooth pain, swelling, broken teeth and dental emergencies.",
    duration: "Immediate",
    anaesthesia: "Local",
    recovery: "Depends",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
  },
];

/* =========================================================
   MAXILLOFACIAL SERVICES
========================================================= */

const maxillofacial: Service[] = [
  {
    title: "Jaw Surgery",
    short: "Correct jaw alignment and function.",
    long: "Orthognathic surgery for correcting bite issues, facial imbalance, speech and chewing problems.",
    duration: "Major procedure",
    anaesthesia: "General",
    recovery: "2–6 weeks",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
  },

  {
    title: "Wisdom Tooth Surgery",
    short: "Removal of impacted wisdom teeth.",
    long: "Advanced surgical extraction with minimal trauma and faster healing techniques.",
    duration: "1 visit",
    anaesthesia: "Local / Sedation",
    recovery: "3–7 days",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
  },

  {
    title: "Facial Trauma Surgery",
    short: "Treatment of facial injuries and fractures.",
    long: "Comprehensive management of jaw fractures, facial bone injuries and soft tissue trauma reconstruction.",
    duration: "Complex",
    anaesthesia: "General",
    recovery: "Several weeks",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
  },

  {
    title: "Facial Reconstruction",
    short: "Restore facial aesthetics and function.",
    long: "Reconstructive surgery following trauma, tumors or congenital facial deformities.",
    duration: "Complex",
    anaesthesia: "General",
    recovery: "Several weeks",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
  },

  {
    title: "TMJ Treatment",
    short: "Relief from jaw joint pain.",
    long: "Comprehensive management of TMJ disorders including splints, therapy and surgical procedures.",
    duration: "Varies",
    anaesthesia: "Local / General",
    recovery: "Depends",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80",
  },

  {
    title: "Oral Cancer Screening",
    short: "Early detection and diagnosis.",
    long: "Clinical examination and biopsy procedures for suspicious oral lesions and cancers.",
    duration: "1 visit",
    anaesthesia: "Minimal",
    recovery: "Minimal",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
  },

  {
    title: "Cyst & Tumor Removal",
    short: "Surgical removal of oral lesions.",
    long: "Diagnosis and treatment of cysts, benign tumors and oral pathological conditions.",
    duration: "1–2 visits",
    anaesthesia: "Local / General",
    recovery: "1–2 weeks",
    image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=800&q=80",
  },

  {
    title: "Facial Aesthetic Procedures",
    short: "Enhance facial balance and appearance.",
    long: "Non-surgical and surgical facial aesthetic procedures improving harmony and rejuvenation.",
    duration: "Varies",
    anaesthesia: "Minimal",
    recovery: "Minimal",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80",
  },

  {
    title: "Bone Grafting",
    short: "Restore bone for implants and surgery.",
    long: "Advanced grafting procedures for rebuilding jawbone lost due to trauma or tooth loss.",
    duration: "1–2 visits",
    anaesthesia: "Local / Sedation",
    recovery: "1–2 weeks",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80",
  },

  {
    title: "Sinus Lift Surgery",
    short: "Prepare upper jaw for implants.",
    long: "Specialized sinus augmentation procedures creating adequate bone height for implants.",
    duration: "1 visit",
    anaesthesia: "Local",
    recovery: "1 week",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80",
  },
];

/* =========================================================
   PAGE
========================================================= */

function ServicesPage() {
  const [tab, setTab] = useState<"dental" | "maxillofacial">("dental");

  const [open, setOpen] = useState<Service | null>(null);

  const list = tab === "dental" ? dental : maxillofacial;

  return (
    <div className="pt-32 pb-28 bg-grey-100 min-h-screen overflow-hidden">
      {/* =========================================================
          HERO SECTION (NMDC-style)
      ========================================================= */}

      <section
        className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-10 pb-6"
        aria-label="Services hero"
      >
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(247, 249, 253, 0.9), rgba(247, 249, 253, 0.7)), url('https://lh3.googleusercontent.com/aida/ADBb0uiDcKkcLmmIGefvcFZNXFeBvMJYrOGZkLb21pn0RsAItNHcYqzonrWrwQBKVzIOGJWq11tj2aRwIZJvvKh-799Qw6HPHnpskH4kVGoePCjvCKAYDOTrQfJB3f943cTQbbvd7ZhFMX0Qu8lAUlDJmPSyQvqe8CwjZPmlXr9jKyceUzZY0CQhMbu2_Iri_gL86SzVBrRP8gTo2cVg1T1VLLLIvyeNB8i4sBy0J78GfsGhDCiaJbKAUYMD3w')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <Reveal>
          <div className="text-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {/* Badge */}
              <span className="inline-flex items-center gap-2 bg-black/95 text-red-500 px-6 py-2 rounded-full text-[12px] uppercase tracking-[0.3em]">
                <Sparkles className="w-4 h-4" />
                Our Services
              </span>

              {/* Heading */}
              <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight green-bold">
                Complete Dental
                <span className="block not-italic font-normal text-red-500">
                  &amp; Maxillofacial Care
                </span>
              </h1>

              {/* Description */}
              <p className="mt-8 text-lg text-blue-600 leading-relaxed max-w-3xl mx-auto">
                Advanced dental treatments, cosmetic enhancement, and specialist maxillofacial
                surgery delivered with clinical precision and patient-focused care.
              </p>

              {/* Segment control (bigger + centered like reference) */}
              <div className="mt-10 flex justify-center">
                <div className="flex p-1 bg-white/70 border border-black/5 rounded-full w-full max-w-xs shadow-sm">
                  {(["dental", "maxillofacial"] as const).map((t) => {
                    const active = tab === t;
                    return (
                      <button
                        key={t}
                        onClick={() => setTab(t)}
                        className={
                          "flex-1 py-3 px-6 rounded-full text-[12px] font-semibold transition-all duration-300 " +
                          (active ? "bg-black text-white" : "text-blue-600 hover:text-black")
                        }
                      >
                        {t === "dental" ? "DENTAL" : "MAXILLO"}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-5">
                <div className="bg-white/80 backdrop-blur rounded-3xl p-6 border border-outline-variant/20 shadow-sm">
                  <HeartPulse className="w-7 h-7 mx-auto text-black" />
                  <h3 className="mt-4 text-3xl font-bold text-black">25+</h3>
                  <p className="text-sm text-blue-600">Treatments</p>
                </div>

                <div className="bg-white/80 backdrop-blur rounded-3xl p-6 border border-outline-variant/20 shadow-sm">
                  <ShieldCheck className="w-7 h-7 mx-auto text-black" />
                  <h3 className="mt-4 text-3xl font-bold text-black">100%</h3>
                  <p className="text-sm text-blue-600">Safety Focus</p>
                </div>

                <div className="bg-white/80 backdrop-blur rounded-3xl p-6 border border-outline-variant/20 shadow-sm">
                  <Sparkles className="w-7 h-7 mx-auto text-black" />
                  <h3 className="mt-4 text-3xl font-bold text-black">Modern</h3>
                  <p className="text-sm text-blue-600">Technology</p>
                </div>

                <div className="bg-white/80 backdrop-blur rounded-3xl p-6 border border-outline-variant/20 shadow-sm">
                  <HeartPulse className="w-7 h-7 mx-auto text-black" />
                  <h3 className="mt-4 text-3xl font-bold text-black">Expert</h3>
                  <p className="text-sm text-blue-600">Specialists</p>
                </div>
              </div>
            </motion.div>
          </div>
        </Reveal>

        {/* =========================================================
            TABS
        ========================================================= */}

        <div className="mt-20 flex justify-center">
          <div className="inline-flex rounded-full bg-white border border-gray-200 p-2 shadow-sm">
            {(["dental", "maxillofacial"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`relative px-8 py-3 rounded-full text-sm font-medium capitalize transition-all duration-300 ${
                  tab === t ? "text-white" : "text-blue-600"
                }`}
              >
                {tab === t && (
                  <motion.div
                    layoutId="tab-bg"
                    className="absolute inset-0 bg-black rounded-full"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}

                <span className="relative z-10">{t}</span>
              </button>
            ))}
          </div>
        </div>
        {/* =========================================================
            SERVICES GRID
        ========================================================= */}

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {list.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.04}>
              <motion.button
                whileHover={{ y: -8 }}
                transition={{ duration: 0.25 }}
                onClick={() => setOpen(s)}
                className="group text-left w-full h-full bg-white rounded-[2rem] border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 relative"
              >
                {/* Banner Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                <div className="p-6 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-black/[0.03] rounded-full blur-3xl" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] uppercase tracking-[0.3em] text-blue-500">
                        {tab}
                      </span>

                      <div className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition">
                        <Plus className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="mt-5 text-2xl font-bold leading-snug text-black">{s.title}</h3>

                    <p className="mt-3 text-blue-600 leading-relaxed">{s.short}</p>

                    <div className="mt-6 flex items-center justify-between text-sm">
                      <span className="text-red-500">View Details</span>

                      <span className="font-medium text-blue-500">→</span>
                    </div>
                  </div>
                </div>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* =========================================================
          MODAL
      ========================================================= */}

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 40,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: 20,
              }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white w-full max-w-3xl rounded-[2rem] p-10 overflow-hidden"
            >
              <button
                onClick={() => setOpen(null)}
                className="absolute top-6 right-6 w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="bg-gray-100 px-4 py-2 rounded-full text-xs uppercase tracking-[0.2em] text-blue-600">
                {tab}
              </span>

              <h2 className="mt-6 text-5xl font-bold leading-tight">{open.title}</h2>

              <p className="mt-8 text-gray-700 leading-8 text-lg">{open.long}</p>

              <div className="mt-10 grid md:grid-cols-3 gap-5">
                <div className="rounded-2xl border border-gray-200 p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Duration</p>

                  <h4 className="mt-3 text-xl font-semibold">{open.duration}</h4>
                </div>

                <div className="rounded-2xl border border-gray-200 p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Anaesthesia</p>

                  <h4 className="mt-3 text-xl font-semibold">{open.anaesthesia}</h4>
                </div>

                <div className="rounded-2xl border border-gray-200 p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Recovery</p>

                  <h4 className="mt-3 text-xl font-semibold">{open.recovery}</h4>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ServicesPage;
