import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { l as getAdminContactSubmissions, g as deleteContactSubmission } from "./adminApi-BjrAEKnx.js";
import { A as AdminLayout } from "./AdminLayout-5xNCayr_.js";
import "@supabase/supabase-js";
import "@tanstack/react-router";
function AdminContact() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const load = async () => {
    try {
      const data = await getAdminContactSubmissions();
      setSubmissions(data);
    } catch (err) {
      console.error("Failed to load contact submissions", err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    load();
  }, []);
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this submission?")) return;
    try {
      await deleteContactSubmission(id);
      load();
    } catch (err) {
      console.error("Failed to delete submission", err);
      alert(err.message || "Failed to delete submission");
    }
  };
  if (loading) {
    return /* @__PURE__ */ jsx(AdminLayout, { children: /* @__PURE__ */ jsx("div", { className: "p-8", children: /* @__PURE__ */ jsx("div", { className: "text-center", children: "Loading..." }) }) });
  }
  return /* @__PURE__ */ jsx(AdminLayout, { children: /* @__PURE__ */ jsxs("div", { className: "p-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-8", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold", children: "Contact Submissions" }),
      /* @__PURE__ */ jsxs("div", { className: "text-sm text-gray-500", children: [
        "Total: ",
        submissions.length
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow overflow-hidden", children: [
      /* @__PURE__ */ jsxs("table", { className: "w-full", children: [
        /* @__PURE__ */ jsx("thead", { className: "bg-gray-50", children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Name" }),
          /* @__PURE__ */ jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Phone" }),
          /* @__PURE__ */ jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Email" }),
          /* @__PURE__ */ jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Service" }),
          /* @__PURE__ */ jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Date" }),
          /* @__PURE__ */ jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "WhatsApp" }),
          /* @__PURE__ */ jsx("th", { className: "px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-gray-200", children: submissions.map((submission) => /* @__PURE__ */ jsxs("tr", { className: "hover:bg-gray-50", children: [
          /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsx("div", { className: "text-sm font-medium text-gray-900", children: submission.name }) }),
          /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-500", children: submission.phone }) }),
          /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-500", children: submission.email || "-" }) }),
          /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-500", children: submission.service || "-" }) }),
          /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: submission.date || "-" }),
          /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsx("span", { className: `px-2 py-1 text-xs rounded-full ${submission.whatsapp_sent ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`, children: submission.whatsapp_sent ? "Sent" : "Not Sent" }) }),
          /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium", children: /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => handleDelete(submission.id),
              className: "text-red-600 hover:text-red-900",
              children: "Delete"
            }
          ) })
        ] }, submission.id)) })
      ] }),
      submissions.length === 0 && /* @__PURE__ */ jsx("div", { className: "text-center py-12 text-gray-500", children: "No contact submissions yet." })
    ] }),
    submissions.length > 0 && /* @__PURE__ */ jsxs("div", { className: "mt-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-4", children: "Recent Messages" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-4", children: submissions.slice(0, 5).map((submission) => /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow p-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start mb-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: submission.name }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: submission.phone })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-400", children: new Date(submission.created_at).toLocaleString() })
        ] }),
        submission.message && /* @__PURE__ */ jsx("p", { className: "text-gray-700 bg-gray-50 p-4 rounded-lg", children: submission.message })
      ] }, submission.id)) })
    ] })
  ] }) });
}
const SplitComponent = AdminContact;
export {
  SplitComponent as component
};
