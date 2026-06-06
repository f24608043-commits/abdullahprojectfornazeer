import { S as reactExports, J as jsxRuntimeExports } from "./server-BTo3cY82.js";
import { R as Reveal } from "./Reveal-wb6Xivxm.js";
import { C as CircleCheckBig } from "./circle-check-big-BdmNlNzj.js";
import { j as createLucideIcon } from "./router-DoCTKy9f.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$2 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
const Calendar = createLucideIcon("calendar", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ]
];
const MessageSquare = createLucideIcon("message-square", __iconNode$1);
const __iconNode = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
];
const User = createLucideIcon("user", __iconNode);
function BookAppointmentPage() {
  const phoneDigits = "923336070227";
  const phonePretty = "+92 333 6070227";
  const [formData, setFormData] = reactExports.useState({
    fullName: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    service: "",
    urgency: "",
    symptoms: "",
    previousTreatment: "",
    medicalConditions: "",
    additionalNotes: ""
  });
  const [submitted, setSubmitted] = reactExports.useState(false);
  const services = ["Dental Implants", "Smile Designing", "Veneers", "Jaw Surgery", "Wisdom Tooth Surgery", "Root Canal Treatment", "Orthodontics (Braces)", "General Dentistry", "Other"];
  const urgencies = ["Routine Checkup", "Within 1 week", "Within 3 days", "Emergency (Today)"];
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `🦷 NMDC APPOINTMENT REQUEST

👤 PATIENT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━
Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}

📅 APPOINTMENT DETAILS
━━━━━━━━━━━━━━━━━━━━━━
Preferred Date: ${formData.preferredDate}
Preferred Time: ${formData.preferredTime}
Service: ${formData.service}
Urgency: ${formData.urgency}

🩺 MEDICAL INFORMATION
━━━━━━━━━━━━━━━━━━━━━━
Symptoms/Concerns: ${formData.symptoms}
Previous Dental Treatment: ${formData.previousTreatment}
Medical Conditions: ${formData.medicalConditions}

💬 ADDITIONAL NOTES
━━━━━━━━━━━━━━━━━━━━━━
${formData.additionalNotes || "None"}

━━━━━━━━━━━━━━━━━━━━━━
Please confirm this appointment at your earliest convenience.`;
    if (!formData.fullName.trim()) return;
    if (!formData.email.trim()) return;
    if (!formData.phone.trim()) return;
    if (!formData.preferredDate) return;
    if (!formData.preferredTime) return;
    if (!formData.service) return;
    if (!formData.urgency) return;
    if (!formData.symptoms.trim()) return;
    const whatsappUrl = `https://wa.me/${phoneDigits}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-32 pb-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.3em] text-red-600", children: "Book Appointment" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 font-display text-5xl md:text-6xl green-bold leading-tight", children: "Schedule your consultation" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-black/70 leading-relaxed", children: "Fill out the form below and we'll send your appointment request directly to our team via WhatsApp. We'll confirm your appointment within one business day." })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-4xl px-6 lg:px-10 mt-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-[2rem] border border-border bg-card p-10 shadow-soft", children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-20 w-20 text-red-600 mx-auto mb-6" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl text-black mb-4", children: "Appointment Request Sent!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-black/70 max-w-md mx-auto", children: "Your appointment request has been sent to our WhatsApp. We'll confirm your appointment within one business day. You can also reach us directly at +92 333 6070227." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSubmitted(false), className: "mt-8 inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 text-xs uppercase tracking-[0.25em] text-white hover:bg-red-600 transition-colors", children: "Book Another Appointment" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display text-xl text-black mb-6 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-5 w-5 text-blue" }),
          "Personal Information"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "Full Name", name: "fullName", value: formData.fullName, onChange: handleChange, placeholder: "Your full name", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "Email Address", name: "email", type: "email", value: formData.email, onChange: handleChange, placeholder: "email@example.com", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "Phone Number", name: "phone", type: "tel", value: formData.phone, onChange: handleChange, placeholder: "0333xxxxxxx", required: true })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display text-xl text-black mb-6 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-5 w-5 text-blue" }),
          "Appointment Details"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "Preferred Date", name: "preferredDate", type: "date", value: formData.preferredDate, onChange: handleChange, placeholder: "Select date", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "Preferred Time", name: "preferredTime", type: "time", value: formData.preferredTime, onChange: handleChange, placeholder: "Select time", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] uppercase tracking-[0.25em] text-muted-foreground block mb-3", children: "Service Required" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { name: "service", value: formData.service, onChange: handleChange, className: "w-full rounded-2xl border border-input bg-background px-5 py-4 text-sm outline-none focus:border-blue transition-colors", required: true, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select a service" }),
              services.map((service) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: service, children: service }, service))
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] uppercase tracking-[0.25em] text-muted-foreground block mb-3", children: "Urgency Level" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { name: "urgency", value: formData.urgency, onChange: handleChange, className: "w-full rounded-2xl border border-input bg-background px-5 py-4 text-sm outline-none focus:border-blue transition-colors", required: true, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select urgency level" }),
              urgencies.map((urgency) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: urgency, children: urgency }, urgency))
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display text-xl text-black mb-6 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-5 w-5 text-red-600" }),
          "Medical Information"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TextAreaField, { label: "Symptoms or Concerns", name: "symptoms", value: formData.symptoms, onChange: handleChange, placeholder: "Please describe your symptoms or dental concerns...", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TextAreaField, { label: "Previous Dental Treatment", name: "previousTreatment", value: formData.previousTreatment, onChange: handleChange, placeholder: "Any previous dental treatments or procedures..." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TextAreaField, { label: "Medical Conditions", name: "medicalConditions", value: formData.medicalConditions, onChange: handleChange, placeholder: "Any medical conditions, allergies, or medications..." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TextAreaField, { label: "Additional Notes", name: "additionalNotes", value: formData.additionalNotes, onChange: handleChange, placeholder: "Any other information you'd like to share..." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 text-xs uppercase tracking-[0.25em] text-white hover:bg-red-600 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-4 w-4" }),
          "Send Appointment Request via WhatsApp"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-sm text-black/60", children: [
          "Your request will be sent to our WhatsApp at ",
          phonePretty
        ] })
      ] })
    ] }) }) }) })
  ] });
}
function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-[10px] uppercase tracking-[0.25em] text-gray-600 block mb-3", children: [
      label,
      required && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-600 ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type, name, value, onChange, placeholder, required, className: "w-full rounded-2xl border border-input bg-background px-5 py-4 text-sm outline-none focus:border-red-600 transition-colors" })
  ] });
}
function TextAreaField({
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-[10px] uppercase tracking-[0.25em] text-gray-600 block mb-3", children: [
      label,
      required && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-600 ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name, value, onChange, placeholder, required, rows: 4, className: "w-full rounded-2xl border border-input bg-background px-5 py-4 text-sm outline-none focus:border-red-600 transition-colors resize-none" })
  ] });
}
export {
  BookAppointmentPage as component
};
