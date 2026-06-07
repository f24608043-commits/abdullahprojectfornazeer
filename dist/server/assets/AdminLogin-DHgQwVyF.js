import { S as reactExports, J as jsxRuntimeExports } from "./server-D4SjyuAh.js";
import { I as useNavigate } from "./router-BShN6dNa.js";
import { c as createClient } from "./index-DjnJ5Hw_.js";
const supabaseUrl = "https://amlmzotqvuacehuyaoxb.supabase.co";
const supabaseAnonKey = "sb_publishable_oVqK858lsOLOXgzq3U6q8Q_BSEPUZ7A";
const supabase = createClient(supabaseUrl, supabaseAnonKey);
function AdminLogin() {
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [error, setError] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email: email.trim().toLowerCase(),
        password
      });
      if (authError) throw authError;
      if (!data.user) throw new Error("Login failed");
      navigate({ to: "/brigaidear/dashboard" });
    } catch (err) {
      console.error("Login error:", err);
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
    fontFamily: "'Inter', sans-serif"
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { width: "100%", maxWidth: "420px", padding: "0 1.5rem" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center", marginBottom: "2.5rem" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        width: "64px",
        height: "64px",
        borderRadius: "16px",
        background: "linear-gradient(135deg, #2563eb, #7c3aed)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto 1rem",
        fontSize: "1.75rem"
      }, children: "🦷" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: { color: "white", fontSize: "1.5rem", fontWeight: 700, margin: 0 }, children: "NMDC Admin" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "#94a3b8", fontSize: "0.875rem", marginTop: "0.375rem" }, children: "Sign in to your dashboard" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      background: "#1e293b",
      borderRadius: "16px",
      padding: "2rem",
      border: "1px solid #334155",
      boxShadow: "0 25px 50px rgba(0,0,0,0.5)"
    }, children: [
      error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        background: "rgba(220,38,38,0.1)",
        border: "1px solid rgba(220,38,38,0.3)",
        color: "#fca5a5",
        padding: "0.75rem 1rem",
        borderRadius: "10px",
        marginBottom: "1.25rem",
        fontSize: "0.875rem"
      }, children: error }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "1.25rem" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: { display: "block", color: "#cbd5e1", fontSize: "0.875rem", fontWeight: 500, marginBottom: "0.5rem" }, children: "Email address" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "email",
              value: email,
              onChange: (e) => setEmail(e.target.value),
              placeholder: "admin@gmail.com",
              required: true,
              autoComplete: "email",
              style: {
                width: "100%",
                padding: "0.75rem 1rem",
                background: "#0f172a",
                border: "1px solid #334155",
                borderRadius: "10px",
                color: "white",
                fontSize: "0.95rem",
                boxSizing: "border-box",
                outline: "none"
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "1.75rem" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: { display: "block", color: "#cbd5e1", fontSize: "0.875rem", fontWeight: 500, marginBottom: "0.5rem" }, children: "Password" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "password",
              value: password,
              onChange: (e) => setPassword(e.target.value),
              placeholder: "••••••••",
              required: true,
              autoComplete: "current-password",
              style: {
                width: "100%",
                padding: "0.75rem 1rem",
                background: "#0f172a",
                border: "1px solid #334155",
                borderRadius: "10px",
                color: "white",
                fontSize: "0.95rem",
                boxSizing: "border-box",
                outline: "none"
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "submit",
            disabled: loading,
            style: {
              width: "100%",
              padding: "0.875rem",
              background: loading ? "#334155" : "linear-gradient(135deg, #2563eb, #7c3aed)",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontSize: "0.95rem",
              fontWeight: 600,
              cursor: loading ? "not-allowed" : "pointer",
              transition: "opacity 0.2s"
            },
            children: loading ? "Signing in..." : "Sign In"
          }
        )
      ] })
    ] })
  ] }) });
}
export {
  AdminLogin as A
};
