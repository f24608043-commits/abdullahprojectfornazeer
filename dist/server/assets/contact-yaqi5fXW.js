import { S as reactExports, J as jsxRuntimeExports } from "./server-C8G90q7p.js";
import { R as Reveal } from "./Reveal-DTJ5BtQU.js";
import { j as createLucideIcon, P as Phone, b as MessageCircle, M as Mail, a as MapPin } from "./router-BFSBxmeH.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }]
];
const Clock = createLucideIcon("clock", __iconNode);
function ContactPage() {
  const [sent, setSent] = reactExports.useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.namedItem("name")?.value;
    const phone = form.elements.namedItem("phone")?.value;
    const email = form.elements.namedItem("email")?.value;
    const date = form.elements.namedItem("date")?.value;
    const service = form.elements.namedItem("service")?.value;
    const message = form.elements.namedItem("message")?.value;
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-32 pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 lg:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.3em] text-red-600", children: "Contact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 font-display text-5xl md:text-6xl green-bold", children: "Reserve a private consultation." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-2xl text-black/70", children: "Reach out by phone or WhatsApp, or use the form below. We respond within one business day." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 grid lg:grid-cols-12 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "lg:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[2rem] bg-black text-white p-10 relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 -right-20 h-64 w-64 bg-red-600/20 blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl", children: "Get in touch" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-10 space-y-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { icon: Phone, label: "Phone", value: "0512715959", href: "tel:+92512715959" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { icon: MessageCircle, label: "WhatsApp", value: "0333 6070227", href: "https://wa.me/923336070227" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { icon: Mail, label: "Email", value: "nazeermdclinic@gmail.com", href: "mailto:nazeermdclinic@gmail.com" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { icon: Clock, label: "Timings", value: "Mon – Sat · 10:00 AM – 11:00 PM" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { icon: MapPin, label: "Address", value: "Office #222, Rafay Mall, Westridge 1, Rawalpindi" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 rounded-2xl overflow-hidden border border-white/10 relative group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "NMDC Exact Location", src: "https://www.google.com/maps?q=NMDC+Dental+Clinic+Office+222+Rafay+Mall+Westridge+1+Rawalpindi&output=embed", width: "100%", height: "220", style: {
            border: 0,
            filter: "grayscale(0.4)"
          }, loading: "lazy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.google.com/maps/search/?api=1&query=NMDC+Dental+Clinic+Office+222+Rafay+Mall+Westridge+1+Rawalpindi", target: "_blank", rel: "noopener noreferrer", className: "absolute inset-0", "aria-label": "Open NMDC exact location in Google Maps" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "lg:col-span-7", delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, style: {
        transformStyle: "preserve-3d"
      }, className: "rounded-[2rem] border border-border bg-card p-10 shadow-soft transform-gpu transition duration-500 ease-out hover:scale-[1.02] hover:[transform:perspective(1400px)_rotateX(3deg)_rotateY(-2deg)] hover:shadow-[0_40px_90px_rgba(0,0,0,0.16)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl text-black", children: "Book an appointment" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-black/60", children: "Sent directly to WhatsApp instantly." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid sm:grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { name: "name", label: "Full name", placeholder: "Your name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { name: "phone", label: "Phone", placeholder: "0333xxxxxxx", type: "tel" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { name: "email", label: "Email", placeholder: "email@example.com", type: "email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { name: "date", label: "Preferred date", type: "date" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] uppercase tracking-[0.25em] text-muted-foreground", children: "Service" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { name: "service", className: "mt-3 w-full rounded-2xl border px-5 py-4 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select service" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Dental Implants" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Smile Designing" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Veneers" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Jaw Surgery" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Wisdom Tooth Surgery" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] uppercase tracking-[0.25em] text-muted-foreground", children: "Message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name: "message", rows: 5, placeholder: "Describe your concern...", className: "mt-3 w-full rounded-2xl border px-5 py-4 text-sm resize-none" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "mt-8 inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 text-xs uppercase tracking-[0.25em] text-white hover:bg-red-600 transition", children: sent ? "Opening WhatsApp..." : "Request Appointment" })
      ] }) }) })
    ] })
  ] }) });
}
function Item({
  icon: Icon,
  label,
  value,
  href
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "grid h-11 w-11 place-items-center rounded-full border border-white/10 text-red-600", children: [
      "        ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase text-white/50", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white", children: value })
    ] })
  ] });
}
function Field({
  name,
  label,
  placeholder,
  type = "text"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] uppercase tracking-[0.25em] text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name, type, placeholder, required: true, className: "mt-3 w-full rounded-2xl border px-5 py-4 text-sm" })
  ] });
}
export {
  ContactPage as component
};
