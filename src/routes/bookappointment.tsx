import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle } from "lucide-react";
import { submitAppointmentBooking } from "@/api/adminApi";

export const Route = createFileRoute("/bookappointment")({
  head: () => ({
    meta: [
      { title: "Book Appointment — NMDC | Dr Brig Nazeer" },
      {
        name: "description",
        content: "Book a private appointment with Dr Brig Nazeer at NMDC. Fill out the form and we'll confirm via WhatsApp.",
      },
    ],
  }),
  component: BookAppointmentPage,
});

function BookAppointmentPage() {
  const phoneDigits = "923336070227";
  const phonePretty = "+92 333 6070227";

  const [formData, setFormData] = useState({
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
    additionalNotes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const services = [
    "Dental Implants",
    "Smile Designing",
    "Veneers",
    "Jaw Surgery",
    "Wisdom Tooth Surgery",
    "Root Canal Treatment",
    "Orthodontics (Braces)",
    "General Dentistry",
    "Other",
  ];

  const urgencies = [
    "Routine Checkup",
    "Within 1 week",
    "Within 3 days",
    "Emergency (Today)",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic required-field guard to prevent empty WhatsApp submissions.
    if (!formData.fullName.trim()) return;
    if (!formData.email.trim()) return;
    if (!formData.phone.trim()) return;
    if (!formData.preferredDate) return;
    if (!formData.preferredTime) return;
    if (!formData.service) return;
    if (!formData.urgency) return;
    if (!formData.symptoms.trim()) return;

    // Save to database
    try {
      await submitAppointmentBooking({
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        preferred_date: formData.preferredDate,
        preferred_time: formData.preferredTime,
        service: formData.service,
        urgency: formData.urgency,
        symptoms: formData.symptoms,
        previous_treatment: formData.previousTreatment,
        medical_conditions: formData.medicalConditions,
        additional_notes: formData.additionalNotes,
        whatsapp_sent: false,
        status: 'pending',
      });
    } catch (err) {
      console.error('Failed to save appointment booking to database', err);
      // Continue with WhatsApp redirect even if database save fails
    }

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

    const whatsappUrl = `https://wa.me/${phoneDigits}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24">
      <section className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="max-w-3xl">
            <span className="text-[11px] uppercase tracking-[0.3em] text-red-600">
              Book Appointment
            </span>
            <h1 className="mt-4 font-display text-5xl md:text-6xl green-bold leading-tight">
              Schedule your consultation
            </h1>
            <p className="mt-6 text-black/70 leading-relaxed">
              Fill out the form below and we'll send your appointment request directly to our team via WhatsApp. 
              We'll confirm your appointment within one business day.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-4xl px-6 lg:px-10 mt-16">
        <Reveal>
          <div className="rounded-[2rem] border border-border bg-card p-10 shadow-soft">
            {submitted ? (
              <div className="text-center py-16">
                <CheckCircle className="h-20 w-20 text-red-600 mx-auto mb-6" />
                <h2 className="font-display text-3xl text-black mb-4">
                  Appointment Request Sent!
                </h2>
                <p className="text-black/70 max-w-md mx-auto">
                  Your appointment request has been sent to our WhatsApp. We'll confirm your appointment 
                  within one business day. You can also reach us directly at +92 333 6070227.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 text-xs uppercase tracking-[0.25em] text-white hover:bg-red-600 transition-colors"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h3 className="font-display text-xl text-black mb-6 flex items-center gap-3">
                    <User className="h-5 w-5 text-blue" />
                    Personal Information
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <FormField
                      label="Full Name"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                    <FormField
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@example.com"
                      required
                    />
                    <FormField
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="0333xxxxxxx"
                      required
                    />
                  </div>
                </div>

                {/* Appointment Details */}
                <div>
                  <h3 className="font-display text-xl text-black mb-6 flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-blue" />
                    Appointment Details
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <FormField
                      label="Preferred Date"
                      name="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      placeholder="Select date"
                      required
                    />
                    <FormField
                      label="Preferred Time"
                      name="preferredTime"
                      type="time"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      placeholder="Select time"
                      required
                    />
                    <div className="sm:col-span-2">
                      <label className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground block mb-3">
                        Service Required
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-input bg-background px-5 py-4 text-sm outline-none focus:border-blue transition-colors"
                        required
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground block mb-3">
                        Urgency Level
                      </label>
                      <select
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-input bg-background px-5 py-4 text-sm outline-none focus:border-blue transition-colors"
                        required
                      >
                        <option value="">Select urgency level</option>
                        {urgencies.map((urgency) => (
                          <option key={urgency} value={urgency}>
                            {urgency}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Medical Information */}
                <div>
                  <h3 className="font-display text-xl text-black mb-6 flex items-center gap-3">
                    <MessageSquare className="h-5 w-5 text-red-600" />
                    Medical Information
                  </h3>
                  <div className="space-y-5">
                    <TextAreaField
                      label="Symptoms or Concerns"
                      name="symptoms"
                      value={formData.symptoms}
                      onChange={handleChange}
                      placeholder="Please describe your symptoms or dental concerns..."
                      required
                    />
                    <TextAreaField
                      label="Previous Dental Treatment"
                      name="previousTreatment"
                      value={formData.previousTreatment}
                      onChange={handleChange}
                      placeholder="Any previous dental treatments or procedures..."
                    />
                    <TextAreaField
                      label="Medical Conditions"
                      name="medicalConditions"
                      value={formData.medicalConditions}
                      onChange={handleChange}
                      placeholder="Any medical conditions, allergies, or medications..."
                    />
                    <TextAreaField
                      label="Additional Notes"
                      name="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={handleChange}
                      placeholder="Any other information you'd like to share..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 text-xs uppercase tracking-[0.25em] text-white hover:bg-red-600 transition-colors"
                  >
                    <MessageSquare className="h-4 w-4" />
                    Send Appointment Request via WhatsApp
                  </button>
                  <p className="mt-4 text-sm text-black/60">
                    Your request will be sent to our WhatsApp at {phonePretty}
                  </p>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </section>
    </div>
  );
}

function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-[10px] uppercase tracking-[0.25em] text-gray-600 block mb-3">
        {label}
        {required && <span className="text-red-600 ml-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-2xl border border-input bg-background px-5 py-4 text-sm outline-none focus:border-red-600 transition-colors"
      />
    </div>
  );
}

function TextAreaField({
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-[10px] uppercase tracking-[0.25em] text-gray-600 block mb-3">
        {label}
        {required && <span className="text-red-600 ml-1">*</span>}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={4}
        className="w-full rounded-2xl border border-input bg-background px-5 py-4 text-sm outline-none focus:border-red-600 transition-colors resize-none"
      />
    </div>
  );
}
