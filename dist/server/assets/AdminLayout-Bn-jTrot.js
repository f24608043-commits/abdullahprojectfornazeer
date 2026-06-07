import { S as reactExports, J as jsxRuntimeExports } from "./server-D4SjyuAh.js";
import { G as useLocation, I as useNavigate } from "./router-BShN6dNa.js";
import { c as createClient } from "./index-DjnJ5Hw_.js";
const supabaseUrl = "https://amlmzotqvuacehuyaoxb.supabase.co";
const supabaseAnonKey = "sb_publishable_oVqK858lsOLOXgzq3U6q8Q_BSEPUZ7A";
const supabase = createClient(supabaseUrl, supabaseAnonKey);
function AdminLayout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (!session) {
        navigate({ to: "/brigaidear/login", replace: true });
      }
    });
    return () => subscription.unsubscribe();
  }, [navigate]);
  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate({ to: "/brigaidear/login", replace: true });
  };
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#f8fafc",
      color: "#64748b"
    }, children: "Loading admin..." });
  }
  if (!user) {
    navigate({ to: "/brigaidear/login", replace: true });
    return null;
  }
  const adminEmail = user.email || "admin";
  const adminName = user.user_metadata?.name || "Administrator";
  const navItems = [
    { path: "/brigaidear/dashboard", label: "Dashboard", icon: "📊" },
    { path: "/brigaidear/videos", label: "Videos", icon: "🎬" },
    { path: "/brigaidear/reviews", label: "Reviews", icon: "⭐" },
    { path: "/brigaidear/blogs", label: "Blogs", icon: "📝" },
    { path: "/brigaidear/contact", label: "Contact", icon: "📧" },
    { path: "/brigaidear/bookappointment", label: "Appointments", icon: "📅" }
  ];
  const sidebarStyle = {
    width: "250px",
    background: "#1e293b",
    color: "white",
    display: "flex",
    flexDirection: "column",
    flexShrink: 0,
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    zIndex: 50
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", minHeight: "100vh", fontFamily: "sans-serif", background: "#f8fafc" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: sidebarStyle, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "1.5rem", borderBottom: "1px solid #334155" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontWeight: 700, fontSize: "1.1rem", color: "white" }, children: "NMDC Admin" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.75rem", color: "#94a3b8", marginTop: "0.25rem" }, children: adminEmail })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { style: { flex: 1, padding: "1rem 0.75rem" }, children: navItems.map((item) => {
        const active = location.pathname === item.path;
        const linkStyle = {
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          padding: "0.7rem 0.75rem",
          borderRadius: "8px",
          color: active ? "white" : "#94a3b8",
          background: active ? "#2563eb" : "transparent",
          textDecoration: "none",
          marginBottom: "0.25rem",
          fontSize: "0.9rem",
          fontWeight: active ? 600 : 400
        };
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: item.path, style: linkStyle, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.icon }),
          item.label
        ] }, item.path);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "1rem 1.5rem", borderTop: "1px solid #334155" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "0.75rem" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.875rem", fontWeight: 600, color: "white" }, children: adminName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.72rem", color: "#64748b" }, children: "Administrator" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: handleLogout,
            style: {
              width: "100%",
              padding: "0.5rem",
              background: "transparent",
              color: "#94a3b8",
              border: "1px solid #334155",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "0.875rem"
            },
            children: "Sign Out                    "
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { flex: 1, marginLeft: "250px", overflow: "auto", minHeight: "100vh" }, children: [
      children,
      "            "
    ] })
  ] });
}
export {
  AdminLayout as A
};
