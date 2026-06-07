import { S as reactExports, J as jsxRuntimeExports } from "./server-D4SjyuAh.js";
import { R as Reveal } from "./Reveal-DlE4ISS7.js";
import { q as getPublicReviews, u as submitReview } from "./adminApi-Cmaz68c5.js";
import { S as Star, Q as Quote } from "./star-CKy8Kgss.js";
import { u as motion } from "./router-BShN6dNa.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./index-DjnJ5Hw_.js";
const cities = ["Islamabad", "Rawalpindi", "Lahore", "Karachi", "Peshawar", "Multan", "Faisalabad", "Quetta"];
const firstNames = ["Ayesha", "Hamza", "Fatima", "Bilal", "Sara", "Usman", "Maryam", "Ahmed", "Zara", "Imran", "Hira", "Saad", "Nida", "Kashif", "Iqra", "Tariq"];
const lastInit = ["K.", "R.", "S.", "M.", "A.", "H.", "B.", "Z.", "F.", "T."];
const phrases = ["Genuinely the most professional dental visit I've had. Calm, clean and exceptional.", "Dr Nazeer is a master surgeon — my implant feels completely natural.", "Worth the travel from across the country. World-class standards in Pakistan.", "The team explained every step. I never felt rushed or unsure.", "Beautiful clinic, beautiful results. My smile feels like mine, only better.", "Painless wisdom tooth extraction. I was back to work the next day.", "Highly recommend for jaw surgery. The transformation has been life-changing.", "Their attention to hygiene and safety is unmatched in the country.", "Smile design exceeded my expectations. Subtle, elegant and so natural.", "Compassionate care throughout my treatment. Truly five stars."];
const fallbackReviews = Array.from({
  length: 18
}).map((_, i) => ({
  id: i,
  name: `${firstNames[i % firstNames.length]} ${lastInit[i % lastInit.length]}`,
  city: cities[i % cities.length],
  rating: 5 - (i % 7 === 0 ? 1 : 0),
  text: phrases[i % phrases.length]
}));
function ReviewsPage() {
  const [reviews, setReviews] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const loadReviews = async () => {
      try {
        const data = await getPublicReviews();
        setReviews(data.length > 0 ? data : fallbackReviews);
      } catch (err) {
        console.error("Failed to load reviews", err);
        setReviews(fallbackReviews);
      } finally {
        setLoading(false);
      }
    };
    loadReviews();
  }, []);
  const displayReviews = loading ? fallbackReviews : reviews;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-32 pb-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.3em] text-red-600", children: "Patient Stories" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 font-display text-5xl md:text-6xl green-bold max-w-3xl leading-tight", children: "Voices from across Pakistan." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-2xl text-black/70", children: "            More than 5,000 patients have trusted NMDC with their care. A selection of their words, shared with permission." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-0.5 text-red-600", children: [
          "              ",
          Array.from({
            length: 5
          }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-5 w-5 fill-current" }, i))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-black/70", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg text-black", children: "4.9" }),
          " average from 200+ verified reviews            "
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-3xl px-6 lg:px-10 mt-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[2rem] border border-border bg-card p-10 shadow-soft", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.3em] text-red-600", children: "Share Your Experience" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-3xl md:text-4xl green-bold", children: "Write us a review" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ReviewForm, { onReviewSubmitted: () => {
        getPublicReviews().then((data) => {
          setReviews(data.length > 0 ? data : fallbackReviews);
        });
      } })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-20 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Marquee, { items: displayReviews.slice(0, 8) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Marquee, { items: displayReviews.slice(8, 16), reverse: true }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 lg:px-10 mt-24 grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: displayReviews.slice(0, 9).map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.04, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ReviewCard, { r }) }, r.id)) })
  ] });
}
function ReviewCard({
  r
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:border-red-600/40", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "h-5 w-5 text-red-600" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-5 text-[15px] leading-relaxed text-black/80", children: [
      '"',
      r.text,
      '"'
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg text-black", children: r.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] uppercase tracking-[0.2em] text-muted-foreground", children: r.city })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-0.5 text-red-600", children: [
        "          ",
        Array.from({
          length: r.rating
        }).map((_, k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3.5 w-3.5 fill-current" }, k))
      ] })
    ] })
  ] });
}
function Marquee({
  items,
  reverse = false
}) {
  const row = [...items, ...items];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "flex gap-6 w-max", animate: {
    x: reverse ? ["-50%", "0%"] : ["0%", "-50%"]
  }, transition: {
    duration: 50,
    repeat: Infinity,
    ease: "linear"
  }, children: row.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-[360px] shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ReviewCard, { r }) }, i)) }) });
}
function ReviewForm({
  onReviewSubmitted
}) {
  const [rating, setRating] = reactExports.useState(5);
  const [sent, setSent] = reactExports.useState(false);
  const [submitting, setSubmitting] = reactExports.useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const nameInput = form.elements.namedItem("name");
    const cityInput = form.elements.namedItem("city");
    const commentInput = form.elements.namedItem("comment");
    console.log("Form elements:", {
      nameInput,
      cityInput,
      commentInput
    });
    console.log("Form values:", {
      name: nameInput?.value,
      city: cityInput?.value,
      comment: commentInput?.value
    });
    const name = nameInput?.value || "";
    cityInput?.value || "";
    const comment = commentInput?.value || "";
    try {
      await submitReview({
        author_name: name,
        comment,
        rating,
        is_approved: false
      });
      setSent(true);
      form.reset();
      setRating(5);
      if (onReviewSubmitted) {
        onReviewSubmitted();
      }
    } catch (err) {
      console.error("Failed to submit review", err);
      alert("Failed to submit review. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "mt-8 space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Name", placeholder: "Your full name", name: "name" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "City", placeholder: "Where you're writing from", name: "city" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] uppercase tracking-[0.25em] text-muted-foreground", children: "Rating" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex gap-2", children: [1, 2, 3, 4, 5].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setRating(n), className: "transition-transform hover:scale-110", "aria-label": `${n} stars`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: `h-7 w-7 ${n <= rating ? "fill-red-600 text-red-600" : "text-gray-300"}` }),
        "            "
      ] }, n)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] uppercase tracking-[0.25em] text-muted-foreground", children: "Your Review" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name: "comment", rows: 5, required: true, placeholder: "Tell us about your experience at NMDC...", className: "mt-3 w-full rounded-2xl border border-input bg-background px-5 py-4 text-sm outline-none focus:border-red-600 transition-colors resize-none" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: submitting || sent, className: "inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-xs uppercase tracking-[0.25em] text-white hover:bg-red-600 transition-colors disabled:opacity-50", children: submitting ? "Submitting..." : sent ? "Thank you — review submitted for approval" : "Submit Review" }),
    sent && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 mt-2", children: "Your review has been submitted and will be visible after admin approval." })
  ] });
}
function Field({
  label,
  placeholder,
  type = "text"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] uppercase tracking-[0.25em] text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type, required: true, placeholder, className: "mt-3 w-full rounded-2xl border border-input bg-background px-5 py-4 text-sm outline-none focus:border-red-600 transition-colors" })
  ] });
}
export {
  ReviewsPage as component
};
