import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";
import { Reveal } from "@/components/site/Reveal";
import { getPublicReviews, submitReview } from "@/api/adminApi";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Patient Reviews — NMDC | Dr Brig Nazeer" },
      {
        name: "description",
        content:
          "Read genuine reviews from patients across Pakistan about their experience at NMDC.",
      },
      { property: "og:title", content: "Patient Reviews — NMDC" },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: ReviewsPage,
});

const cities = [
  "Islamabad",
  "Rawalpindi",
  "Lahore",
  "Karachi",
  "Peshawar",
  "Multan",
  "Faisalabad",
  "Quetta",
];
const firstNames = [
  "Ayesha",
  "Hamza",
  "Fatima",
  "Bilal",
  "Sara",
  "Usman",
  "Maryam",
  "Ahmed",
  "Zara",
  "Imran",
  "Hira",
  "Saad",
  "Nida",
  "Kashif",
  "Iqra",
  "Tariq",
];
const lastInit = ["K.", "R.", "S.", "M.", "A.", "H.", "B.", "Z.", "F.", "T."];
const phrases = [
  "Genuinely the most professional dental visit I've had. Calm, clean and exceptional.",
  "Dr Nazeer is a master surgeon — my implant feels completely natural.",
  "Worth the travel from across the country. World-class standards in Pakistan.",
  "The team explained every step. I never felt rushed or unsure.",
  "Beautiful clinic, beautiful results. My smile feels like mine, only better.",
  "Painless wisdom tooth extraction. I was back to work the next day.",
  "Highly recommend for jaw surgery. The transformation has been life-changing.",
  "Their attention to hygiene and safety is unmatched in the country.",
  "Smile design exceeded my expectations. Subtle, elegant and so natural.",
  "Compassionate care throughout my treatment. Truly five stars.",
];

// Fallback reviews if database is empty
const fallbackReviews = [
  {
    id: 1,
    name: "Manahil Khan",
    city: "Islamabad",
    rating: 5,
    text: "I am impressed by the exceptional service at NMDC. From the friendly reception to the skilled dental care, every aspect exceeded my expectations. The clinic is modern and hygienic, creating a comfortable environment. My dentist was thorough and professional.",
  },
  {
    id: 2,
    name: "Rayan Khan",
    city: "Rawalpindi",
    rating: 5,
    text: "The staff was warm and welcoming. The waiting area was clean and comfortable. My dentist was thorough, explaining each step of the process and addressing all my concerns. The treatment was painless and efficient. I highly recommend.",
  },
  {
    id: 3,
    name: "Shahab Khan",
    city: "Lahore",
    rating: 5,
    text: "Very much satisfied by the treatment. The doctor gave ample time and patiently explained the process. Cooperative staff and clean environment.",
  },
  {
    id: 4,
    name: "Abbas Ali",
    city: "Karachi",
    rating: 5,
    text: "I had a wonderful experience at their clinic everything is disciplined and they behave very politely with their patients.",
  },
  {
    id: 5,
    name: "Hadia Khan",
    city: "Peshawar",
    rating: 5,
    text: "The doctors are really experienced and the staff is very cooperative. I would definitely recommend it to everyone.",
  },
  {
    id: 6,
    name: "Fatma Ikram",
    city: "Multan",
    rating: 5,
    text: "I really appreciate the efforts and am fully satisfied with the treatment and care given here.",
  },
  {
    id: 7,
    name: "N",
    city: "Faisalabad",
    rating: 5,
    text: "Very cooperative and experienced doctors. Overall very good experience.",
  },
  {
    id: 8,
    name: "Uzair Khan",
    city: "Quetta",
    rating: 5,
    text: "It was great experience. I was treated very professionally.",
  },
  {
    id: 9,
    name: "Kathy Raiden",
    city: "Islamabad",
    rating: 5,
    text: "Excellent service and a very good staff.",
  },
  {
    id: 10,
    name: "Iqra Zaib",
    city: "Rawalpindi",
    rating: 5,
    text: "Very cooperative staff.",
  },
  {
    id: 11,
    name: "Abdul Nafay",
    city: "Lahore",
    rating: 5,
    text: "Great clinic with excellent service.",
  },
  {
    id: 12,
    name: "Nasim Akhthar Shalmany",
    city: "Karachi",
    rating: 5,
    text: "Good experience with professional care.",
  },
  {
    id: 13,
    name: "Aneika Ali",
    city: "Peshawar",
    rating: 5,
    text: "Highly recommended for dental care.",
  },
  {
    id: 14,
    name: "Abdullah Hassan",
    city: "Multan",
    rating: 5,
    text: "Excellent service and care provided.",
  },
  {
    id: 15,
    name: "Abubakar Saddiq",
    city: "Faisalabad",
    rating: 4,
    text: "According to Google and according to the call to the reception, Dr. Nazir's sitting time is from 2 pm to 8 pm. But today I went at 2 pm when I reached the clinic, I told the receptionist that Dr. Nazeer will come at 3 pm because he is my doctor.",
  },
  {
    id: 16,
    name: "Mushareb Shahid",
    city: "Quetta",
    rating: 5,
    text: "Excellent dental care and professional staff.",
  },
  {
    id: 17,
    name: "MUHAMMAD AHMED HALLIAN",
    city: "Islamabad",
    rating: 5,
    text: "Great experience with the dental team.",
  },
  {
    id: 18,
    name: "Saad Quddusi",
    city: "Rawalpindi",
    rating: 5,
    text: "Professional and caring dental service.",
  },
];

function ReviewsPage() {
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const data = await getPublicReviews();
        // Map database reviews to match fallback structure
        const mappedReviews = data.map((review: any) => ({
          id: review.id,
          name: review.author_name,
          city: review.city || "Pakistan",
          rating: review.rating,
          text: review.comment,
        }));
        // Show fallback reviews first, then admin-approved reviews
        setReviews([...fallbackReviews, ...(mappedReviews.length > 0 ? mappedReviews : [])]);
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

  return (
    <div className="pt-32 pb-24">
      <section className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <span className="text-[11px] uppercase tracking-[0.3em] text-red-600">
            Patient Stories
          </span>
          <h1 className="mt-4 font-display text-5xl md:text-6xl green-bold max-w-3xl leading-tight">
            Voices from across Pakistan.
          </h1>
          <p className="mt-6 max-w-2xl text-black/70">
            {" "}
            More than 5,000 patients have trusted NMDC with their care. A selection of their words,
            shared with permission.
          </p>
          <div className="mt-8 flex items-center gap-6">
            <div className="flex items-center gap-0.5 text-red-600">
              {" "}
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <p className="text-sm text-black/70">
              <span className="font-display text-lg text-black">4.9</span> average from 200+
              verified reviews{" "}
            </p>
          </div>
        </Reveal>
      </section>

      {/* Form */}
      <section className="mx-auto max-w-3xl px-6 lg:px-10 mt-28">
        <Reveal>
          <div className="rounded-[2rem] border border-border bg-card p-10 shadow-soft">
            <span className="text-[11px] uppercase tracking-[0.3em] text-red-600">
              Share Your Experience
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl green-bold">Write us a review</h2>
            <ReviewForm
              onReviewSubmitted={() => {
                // Reload reviews after submission - fallback first, then admin-approved
                getPublicReviews().then((data) => {
                  const mappedReviews = data.map((review: any) => ({
                    id: review.id,
                    name: review.author_name,
                    city: review.city || "Pakistan",
                    rating: review.rating,
                    text: review.comment,
                  }));
                  setReviews([...fallbackReviews, ...(mappedReviews.length > 0 ? mappedReviews : [])]);
                });
              }}
            />
          </div>
        </Reveal>
      </section>

      {/* Auto-sliding marquee */}
      <section className="mt-20 overflow-hidden">
        <Marquee items={displayReviews.slice(0, 8)} />
        <div className="mt-6">
          <Marquee items={displayReviews.slice(8, 16)} reverse />
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 mt-24 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayReviews.slice(0, 9).map((r, i) => (
          <Reveal key={r.id} delay={i * 0.04}>
            <ReviewCard r={r} />
          </Reveal>
        ))}
      </section>
    </div>
  );
}

function ReviewCard({ r }: { r: any }) {
  return (
    <div className="h-full rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:border-red-600/40">
      <Quote className="h-5 w-5 text-red-600" />
      <p className="mt-5 text-[15px] leading-relaxed text-black/80">"{r.text}"</p>
      <div className="mt-6 flex items-center justify-between">
        <div>
          <p className="font-display text-lg text-black">{r.name}</p>
          <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{r.city}</p>
        </div>
        <div className="flex gap-0.5 text-red-600">
          {" "}
          {Array.from({ length: r.rating }).map((_, k) => (
            <Star key={k} className="h-3.5 w-3.5 fill-current" />
          ))}
        </div>
      </div>
    </div>
  );
}

function Marquee({ items, reverse = false }: { items: any[]; reverse?: boolean }) {
  const row = [...items, ...items];
  return (
    <div className="relative">
      <motion.div
        className="flex gap-6 w-max"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      >
        {row.map((r, i) => (
          <div key={i} className="w-[360px] shrink-0">
            <ReviewCard r={r} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function ReviewForm({ onReviewSubmitted }: { onReviewSubmitted?: () => void }) {
  const [rating, setRating] = useState(5);
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const nameInput = form.elements.namedItem("name") as HTMLInputElement;
    const cityInput = form.elements.namedItem("city") as HTMLInputElement;
    const commentInput = form.elements.namedItem("comment") as HTMLTextAreaElement;

    console.log("Form elements:", { nameInput, cityInput, commentInput });
    console.log("Form values:", {
      name: nameInput?.value,
      city: cityInput?.value,
      comment: commentInput?.value,
    });

    const name = nameInput?.value || "";
    const city = cityInput?.value || "";
    const comment = commentInput?.value || "";

    try {
      await submitReview({
        author_name: name,
        comment: comment,
        rating: rating,
        is_approved: false,
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

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Name" placeholder="Your full name" name="name" />
        <Field label="City" placeholder="Where you're writing from" name="city" />
      </div>
      <div>
        <label className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          Rating
        </label>
        <div className="mt-3 flex gap-2">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              type="button"
              key={n}
              onClick={() => setRating(n)}
              className="transition-transform hover:scale-110"
              aria-label={`${n} stars`}
            >
              <Star
                className={`h-7 w-7 ${n <= rating ? "fill-red-600 text-red-600" : "text-gray-300"}`}
              />{" "}
            </button>
          ))}
        </div>
      </div>
      <div>
        <label className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          Your Review
        </label>
        <textarea
          name="comment"
          rows={5}
          required
          placeholder="Tell us about your experience at NMDC..."
          className="mt-3 w-full rounded-2xl border border-input bg-background px-5 py-4 text-sm outline-none focus:border-red-600 transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={submitting || sent}
        className="inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-xs uppercase tracking-[0.25em] text-white hover:bg-red-600 transition-colors disabled:opacity-50"
      >
        {submitting
          ? "Submitting..."
          : sent
            ? "Thank you — review submitted for approval"
            : "Submit Review"}
      </button>
      {sent && (
        <p className="text-sm text-gray-500 mt-2">
          Your review has been submitted and will be visible after admin approval.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        required
        placeholder={placeholder}
        className="mt-3 w-full rounded-2xl border border-input bg-background px-5 py-4 text-sm outline-none focus:border-red-600 transition-colors"
      />
    </div>
  );
}
