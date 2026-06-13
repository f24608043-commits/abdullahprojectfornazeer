import { Mail, MapPin, MessageCircle, Phone, Clock } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/site/Reveal.tsx";
import { submitContactForm } from "@/api/adminApi.ts";

function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement)?.value;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
    const date = (form.elements.namedItem("date") as HTMLInputElement)?.value;
    const service = (form.elements.namedItem("service") as HTMLSelectElement)?.value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value;

    // Save to database
    try {
      await submitContactForm({
        name,
        phone,
        email,
        date,
        service,
        message,
        whatsapp_sent: false,
      });
    } catch (err) {
      console.error("Failed to save contact form to database", err);
      // Continue with WhatsApp redirect even if database save fails
    }

    const whatsappMessage = `🦷 NMDC Appointment Request

👤 Name: ${name}
📞 Phone: ${phone}
📧 Email: ${email}
📅 Date: ${date}
💉 Service: ${service}
💬 Message: ${message}`;

    const url = `https://wa.me/923336070227?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(url, "_blank");
    setSent(true);
  };

  return (
    <div className="pt-32 pb-24">
      <section className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* HEADER */}
        <Reveal>
          <span className="text-[11px] uppercase tracking-[0.3em] text-red-600">Contact</span>

          <h1 className="mt-4 font-display text-5xl md:text-6xl green-bold">
            Reserve a private consultation.
          </h1>

          <p className="mt-6 max-w-2xl text-black/70">
            Reach out by phone or WhatsApp, or use the form below. We respond within one business
            day.
          </p>
        </Reveal>

        {/* GRID */}
        <div className="mt-16 grid lg:grid-cols-12 gap-10">
          {/* LEFT SIDE */}
          <Reveal className="lg:col-span-5">
            <div className="rounded-[2rem] bg-black text-white p-10 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 h-64 w-64 bg-red-600/20 blur-3xl" />
              <p className="font-display text-2xl">Get in touch</p>

              <ul className="mt-10 space-y-7">
                <Item icon={Phone} label="Phone" value="0512715959" href="tel:+92512715959" />
                <Item
                  icon={MessageCircle}
                  label="WhatsApp"
                  value="0333 6070227"
                  href="https://wa.me/923336070227"
                />
                <Item
                  icon={Mail}
                  label="Email"
                  value="nazeermdclinic@gmail.com"
                  href="mailto:nazeermdclinic@gmail.com"
                />
                <Item icon={Clock} label="Timings" value="Mon – Sat · 10:00 AM – 11:00 PM" />
                <Item
                  icon={MapPin}
                  label="Address"
                  value="Office #222, Rafay Mall, Westridge 1, Rawalpindi"
                />
              </ul>

              {/* ✅ FIXED MAP (YOUR EXACT CODE) */}
              <div className="mt-12 rounded-2xl overflow-hidden border border-white/10 relative group">
                {/* MAP PREVIEW */}
                <iframe
                  title="NMDC Exact Location"
                  src="https://www.google.com/maps?q=NMDC+Dental+Clinic+Office+222+Rafay+Mall+Westridge+1+Rawalpindi&output=embed"
                  width="100%"
                  height="220"
                  style={{ border: 0, filter: "grayscale(0.4)" }}
                  loading="lazy"
                />

                {/* CLICKABLE FULL REDIRECT (FIXED PIN LINK) */}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=NMDC+Dental+Clinic+Office+222+Rafay+Mall+Westridge+1+Rawalpindi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0"
                  aria-label="Open NMDC exact location in Google Maps"
                />
              </div>
            </div>
          </Reveal>

          {/* RIGHT FORM */}
          <Reveal className="lg:col-span-7" delay={0.1}>
            <div className="grid gap-8">
              {/* Removed TiltedCard image as requested */}

              <form
                onSubmit={handleSubmit}
                style={{ transformStyle: "preserve-3d" }}
                className="rounded-[2rem] border border-border bg-card p-10 shadow-soft transform-gpu transition duration-500 ease-out hover:scale-[1.02] hover:[transform:perspective(1400px)_rotateX(3deg)_rotateY(-2deg)] hover:shadow-[0_40px_90px_rgba(0,0,0,0.16)]"
              >
                <p className="font-display text-2xl text-black">Book an appointment</p>

                <p className="mt-2 text-sm text-black/60">Sent directly to WhatsApp instantly.</p>

                <div className="mt-8 grid sm:grid-cols-2 gap-5">
                  <Field name="name" label="Full name" placeholder="Your name" />
                  <Field name="phone" label="Phone" placeholder="0333xxxxxxx" type="tel" />
                  <Field name="email" label="Email" placeholder="email@example.com" type="email" />
                  <Field name="date" label="Preferred date" type="date" />
                </div>

                <div className="mt-5">
                  <label className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    Service
                  </label>

                  <select
                    name="service"
                    className="mt-3 w-full rounded-2xl border px-5 py-4 text-sm"
                  >
                    <option value="">Select service</option>
                    <option>Dental Implants</option>
                    <option>Smile Designing</option>
                    <option>Veneers</option>
                    <option>Jaw Surgery</option>
                    <option>Wisdom Tooth Surgery</option>
                  </select>
                </div>

                <div className="mt-5">
                  <label className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    Message
                  </label>

                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Describe your concern..."
                    className="mt-3 w-full rounded-2xl border px-5 py-4 text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 text-xs uppercase tracking-[0.25em] text-white hover:bg-red-600 transition"
                >
                  {sent ? "Opening WhatsApp..." : "Request Appointment"}
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

/* ITEM */
function Item({ icon: Icon, label, value, href }: any) {
  return (
    <li className="flex items-center gap-4">
      <span className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-red-600">
        {" "}
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <p className="text-[10px] uppercase text-white/50">{label}</p>
        <p className="text-sm text-white">{value}</p>
      </div>
    </li>
  );
}

/* FIELD */
function Field({ name, label, placeholder, type = "text" }: any) {
  return (
    <div>
      <label className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required
        className="mt-3 w-full rounded-2xl border px-5 py-4 text-sm"
      />
    </div>
  );
}

export default ContactPage;
