import { S as reactExports, J as jsxRuntimeExports } from "./server-D4SjyuAh.js";
import { n as getAdminVideos, m as getAdminReviews, k as getAdminBlogs, l as getAdminContactSubmissions, j as getAdminAppointmentBookings } from "./adminApi-Cmaz68c5.js";
import { A as AdminLayout } from "./AdminLayout-Bn-jTrot.js";
function AdminDashboard() {
  const [videos, setVideos] = reactExports.useState([]);
  const [reviews, setReviews] = reactExports.useState([]);
  const [blogs, setBlogs] = reactExports.useState([]);
  const [contacts, setContacts] = reactExports.useState([]);
  const [appointments, setAppointments] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [admin, setAdmin] = reactExports.useState({});
  reactExports.useEffect(() => {
    const loadAdmin = async () => {
      const { data: { session } } = await import("./adminApi-Cmaz68c5.js").then((n) => n.v).then((m) => m.supabase.auth.getSession());
      if (session?.user) {
        setAdmin({
          name: session.user.user_metadata?.name || "Admin",
          email: session.user.email || ""
        });
      }
    };
    loadAdmin();
    Promise.all([
      getAdminVideos().catch(() => []),
      getAdminReviews().catch(() => []),
      getAdminBlogs().catch(() => []),
      getAdminContactSubmissions().catch(() => []),
      getAdminAppointmentBookings().catch(() => [])
    ]).then(([v, r, b, c, a]) => {
      setVideos(v);
      setReviews(r);
      setBlogs(b);
      setContacts(c);
      setAppointments(a);
      setLoading(false);
    });
  }, []);
  const pending = reviews.filter((r) => !r.is_approved).length;
  const published = videos.filter((v) => v.is_published).length;
  const publishedBlogs = blogs.filter((b) => b.is_published).length;
  const pendingAppointments = appointments.filter((a) => a.status === "pending").length;
  const cards = [
    { label: "Total Videos", value: videos.length, icon: "🎬", color: "#2563eb", bg: "rgba(37,99,235,0.1)", border: "rgba(37,99,235,0.2)" },
    { label: "Published", value: published, icon: "✅", color: "#16a34a", bg: "rgba(22,163,74,0.1)", border: "rgba(22,163,74,0.2)" },
    { label: "Total Reviews", value: reviews.length, icon: "⭐", color: "#7c3aed", bg: "rgba(124,58,237,0.1)", border: "rgba(124,58,237,0.2)" },
    { label: "Pending Approval", value: pending, icon: "⏳", color: "#dc2626", bg: "rgba(220,38,38,0.1)", border: "rgba(220,38,38,0.2)" },
    { label: "Total Blogs", value: blogs.length, icon: "📝", color: "#0891b2", bg: "rgba(8,145,178,0.1)", border: "rgba(8,145,178,0.2)" },
    { label: "Published Blogs", value: publishedBlogs, icon: "📄", color: "#059669", bg: "rgba(5,150,105,0.1)", border: "rgba(5,150,105,0.2)" },
    { label: "Contact Forms", value: contacts.length, icon: "📧", color: "#ea580c", bg: "rgba(234,88,12,0.1)", border: "rgba(234,88,12,0.2)" },
    { label: "Pending Appointments", value: pendingAppointments, icon: "📅", color: "#be185d", bg: "rgba(190,24,93,0.1)", border: "rgba(190,24,93,0.2)" }
  ];
  const content = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "2rem", fontFamily: "sans-serif" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "2rem" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { style: { fontSize: "1.75rem", fontWeight: 700, color: "#0f172a", margin: 0 }, children: [
        "Welcome back, ",
        admin.name || "Admin",
        " 👋"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "#64748b", marginTop: "0.375rem", fontSize: "0.95rem" }, children: "Here is what is happening with your website today." })
    ] }),
    loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "#64748b", padding: "2rem", textAlign: "center" }, children: "Loading..." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1rem", marginBottom: "2rem" }, children: cards.map((card) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { background: "#f0f9ff", padding: "1.5rem", borderRadius: "16px", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", gap: "1rem" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: "52px", height: "52px", borderRadius: "14px", background: card.bg, border: `1px solid ${card.border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", flexShrink: 0 }, children: card.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "1.75rem", fontWeight: 700, color: card.color, lineHeight: 1 }, children: card.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "#64748b", fontSize: "0.82rem", marginTop: "0.3rem" }, children: card.label })
        ] })
      ] }, card.label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem", marginBottom: "2rem" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { background: "#f0f9ff", borderRadius: "16px", padding: "1.5rem", border: "1px solid #e2e8f0", boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: { fontSize: "1rem", fontWeight: 600, color: "#0f172a", marginBottom: "1rem", marginTop: 0 }, children: "Quick Actions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "0.5rem" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/brigaidear/videos", style: { display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem 1rem", background: "rgba(37,99,235,0.06)", borderRadius: "10px", textDecoration: "none", color: "#2563eb", fontSize: "0.9rem", fontWeight: 500, border: "1px solid rgba(37,99,235,0.15)" }, children: "🎬 Add New Video" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/brigaidear/blogs", style: { display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem 1rem", background: "rgba(8,145,178,0.06)", borderRadius: "10px", textDecoration: "none", color: "#0891b2", fontSize: "0.9rem", fontWeight: 500, border: "1px solid rgba(8,145,178,0.15)" }, children: "📝 Write New Blog" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/brigaidear/reviews", style: { display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem 1rem", background: "rgba(124,58,237,0.06)", borderRadius: "10px", textDecoration: "none", color: "#7c3aed", fontSize: "0.9rem", fontWeight: 500, border: "1px solid rgba(124,58,237,0.15)" }, children: [
              "⭐ Manage Reviews",
              pending > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { marginLeft: "auto", background: "#dc2626", color: "white", borderRadius: "20px", padding: "0.1rem 0.5rem", fontSize: "0.75rem" }, children: [
                pending,
                " pending"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/brigaidear/contact", style: { display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem 1rem", background: "rgba(234,88,12,0.06)", borderRadius: "10px", textDecoration: "none", color: "#ea580c", fontSize: "0.9rem", fontWeight: 500, border: "1px solid rgba(234,88,12,0.15)" }, children: [
              "📧 View Contact Forms",
              contacts.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { marginLeft: "auto", background: "#ea580c", color: "white", borderRadius: "20px", padding: "0.1rem 0.5rem", fontSize: "0.75rem" }, children: contacts.length })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/brigaidear/bookappointment", style: { display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem 1rem", background: "rgba(190,24,93,0.06)", borderRadius: "10px", textDecoration: "none", color: "#be185d", fontSize: "0.9rem", fontWeight: 500, border: "1px solid rgba(190,24,93,0.15)" }, children: [
              "📅 Manage Appointments",
              pendingAppointments > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { marginLeft: "auto", background: "#be185d", color: "white", borderRadius: "20px", padding: "0.1rem 0.5rem", fontSize: "0.75rem" }, children: [
                pendingAppointments,
                " pending"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { background: "#f0f9ff", borderRadius: "16px", padding: "1.5rem", border: "1px solid #e2e8f0", boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { style: { fontSize: "1rem", fontWeight: 600, color: "#0f172a", marginBottom: "1rem", marginTop: 0 }, children: [
            "Pending Reviews",
            pending > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { marginLeft: "0.5rem", background: "#dc2626", color: "white", borderRadius: "20px", padding: "0.1rem 0.5rem", fontSize: "0.75rem" }, children: pending })
          ] }),
          reviews.filter((r) => !r.is_approved).length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "#94a3b8", fontSize: "0.875rem", margin: 0 }, children: "All caught up!" }) : reviews.filter((r) => !r.is_approved).slice(0, 3).map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "0.75rem", borderRadius: "10px", background: "#fef9c3", marginBottom: "0.5rem", borderLeft: "3px solid #f59e0b" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontWeight: 600, fontSize: "0.875rem", color: "#92400e" }, children: r.author_name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "#78350f", fontSize: "0.8rem", marginTop: "0.2rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: r.comment })
          ] }, r.id))
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { background: "white", borderRadius: "16px", padding: "1.5rem", border: "1px solid #e2e8f0", boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: { fontSize: "1rem", fontWeight: 600, color: "#0f172a", margin: 0 }, children: "Recent Videos" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/brigaidear/videos", style: { fontSize: "0.85rem", color: "#2563eb", textDecoration: "none" }, children: "View all" })
        ] }),
        videos.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "#94a3b8", fontSize: "0.875rem", margin: 0 }, children: "No videos yet." }) : videos.slice(0, 5).map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.75rem 0", borderBottom: "1px solid #f1f5f9" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "0.75rem" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: "36px", height: "36px", borderRadius: "8px", background: "rgba(37,99,235,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem" }, children: "🎬" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.875rem", fontWeight: 500, color: "#0f172a" }, children: v.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.75rem", color: "#94a3b8" }, children: v.category })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { padding: "0.2rem 0.6rem", borderRadius: "20px", fontSize: "0.75rem", fontWeight: 500, background: v.is_published ? "#dcfce7" : "#fef9c3", color: v.is_published ? "#16a34a" : "#a16207" }, children: v.is_published ? "Published" : "Draft" })
        ] }, v.id))
      ] })
    ] })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AdminLayout, { children: content });
}
export {
  AdminDashboard as A
};
