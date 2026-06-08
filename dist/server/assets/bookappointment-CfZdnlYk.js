import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { j as getAdminAppointmentBookings, w as updateAppointmentStatus, e as deleteAppointmentBooking } from "./adminApi-BjrAEKnx.js";
import { A as AdminLayout } from "./AdminLayout-5xNCayr_.js";
import "@supabase/supabase-js";
import "@tanstack/react-router";
function AdminAppointments() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const load = async () => {
    try {
      const data = await getAdminAppointmentBookings();
      setBookings(data);
    } catch (err) {
      console.error("Failed to load appointment bookings", err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    load();
  }, []);
  const handleStatusChange = async (id, status) => {
    try {
      await updateAppointmentStatus(id, status);
      load();
    } catch (err) {
      console.error("Failed to update status", err);
      alert(err.message || "Failed to update status");
    }
  };
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this booking?")) return;
    try {
      await deleteAppointmentBooking(id);
      load();
    } catch (err) {
      console.error("Failed to delete booking", err);
      alert(err.message || "Failed to delete booking");
    }
  };
  const getStatusColor = (status) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      case "completed":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-yellow-100 text-yellow-800";
    }
  };
  if (loading) {
    return /* @__PURE__ */ jsx(AdminLayout, { children: /* @__PURE__ */ jsx("div", { className: "p-8", children: /* @__PURE__ */ jsx("div", { className: "text-center", children: "Loading..." }) }) });
  }
  return /* @__PURE__ */ jsx(AdminLayout, { children: /* @__PURE__ */ jsxs("div", { className: "p-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-8", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold", children: "Appointment Bookings" }),
      /* @__PURE__ */ jsxs("div", { className: "text-sm text-gray-500", children: [
        "Total: ",
        bookings.length
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow overflow-hidden", children: [
      /* @__PURE__ */ jsxs("table", { className: "w-full", children: [
        /* @__PURE__ */ jsx("thead", { className: "bg-gray-50", children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Patient" }),
          /* @__PURE__ */ jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Contact" }),
          /* @__PURE__ */ jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Date & Time" }),
          /* @__PURE__ */ jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Service" }),
          /* @__PURE__ */ jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Urgency" }),
          /* @__PURE__ */ jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Status" }),
          /* @__PURE__ */ jsx("th", { className: "px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-gray-200", children: bookings.map((booking) => /* @__PURE__ */ jsxs("tr", { className: "hover:bg-gray-50", children: [
          /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsx("div", { className: "text-sm font-medium text-gray-900", children: booking.full_name }) }),
          /* @__PURE__ */ jsxs("td", { className: "px-6 py-4 whitespace-nowrap", children: [
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-500", children: booking.phone }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-400", children: booking.email })
          ] }),
          /* @__PURE__ */ jsxs("td", { className: "px-6 py-4 whitespace-nowrap", children: [
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-900", children: booking.preferred_date }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500", children: booking.preferred_time })
          ] }),
          /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-500", children: booking.service }) }),
          /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsx("span", { className: `px-2 py-1 text-xs rounded-full ${booking.urgency === "Emergency (Today)" ? "bg-red-100 text-red-800" : "bg-gray-100 text-gray-800"}`, children: booking.urgency }) }),
          /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsxs(
            "select",
            {
              value: booking.status,
              onChange: (e) => handleStatusChange(booking.id, e.target.value),
              className: `px-2 py-1 text-xs rounded-full border-0 ${getStatusColor(booking.status)}`,
              children: [
                /* @__PURE__ */ jsx("option", { value: "pending", children: "Pending" }),
                /* @__PURE__ */ jsx("option", { value: "confirmed", children: "Confirmed" }),
                /* @__PURE__ */ jsx("option", { value: "completed", children: "Completed" }),
                /* @__PURE__ */ jsx("option", { value: "cancelled", children: "Cancelled" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium", children: /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => handleDelete(booking.id),
              className: "text-red-600 hover:text-red-900",
              children: "Delete"
            }
          ) })
        ] }, booking.id)) })
      ] }),
      bookings.length === 0 && /* @__PURE__ */ jsx("div", { className: "text-center py-12 text-gray-500", children: "No appointment bookings yet." })
    ] }),
    bookings.length > 0 && /* @__PURE__ */ jsxs("div", { className: "mt-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-4", children: "Recent Bookings Details" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-4", children: bookings.slice(0, 5).map((booking) => /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow p-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start mb-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: booking.full_name }),
            /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-500", children: [
              booking.phone,
              " · ",
              booking.email
            ] })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-400", children: new Date(booking.created_at).toLocaleString() })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4 mb-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-500", children: "Date:" }),
            /* @__PURE__ */ jsxs("p", { className: "text-sm", children: [
              booking.preferred_date,
              " at ",
              booking.preferred_time
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-500", children: "Service:" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm", children: booking.service })
          ] })
        ] }),
        booking.symptoms && /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-500", children: "Symptoms:" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm bg-gray-50 p-3 rounded-lg mt-1", children: booking.symptoms })
        ] }),
        (booking.previous_treatment || booking.medical_conditions || booking.additional_notes) && /* @__PURE__ */ jsxs("div", { className: "text-sm text-gray-600", children: [
          booking.previous_treatment && /* @__PURE__ */ jsxs("p", { className: "mb-2", children: [
            /* @__PURE__ */ jsx("strong", { children: "Previous Treatment:" }),
            " ",
            booking.previous_treatment
          ] }),
          booking.medical_conditions && /* @__PURE__ */ jsxs("p", { className: "mb-2", children: [
            /* @__PURE__ */ jsx("strong", { children: "Medical Conditions:" }),
            " ",
            booking.medical_conditions
          ] }),
          booking.additional_notes && /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Additional Notes:" }),
            " ",
            booking.additional_notes
          ] })
        ] })
      ] }, booking.id)) })
    ] })
  ] }) });
}
const SplitComponent = AdminAppointments;
export {
  SplitComponent as component
};
