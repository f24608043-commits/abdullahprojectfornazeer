import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { m as getAdminReviews, a as approveReview, h as deleteReview } from "./adminApi-BjrAEKnx.js";
import { A as AdminLayout } from "./AdminLayout-5xNCayr_.js";
function AdminReviews() {
  const [reviews, setReviews] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const load = async () => {
    try {
      const data = await getAdminReviews();
      setReviews(data);
    } catch (err) {
      console.error("Failed to load reviews", err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    load();
  }, []);
  const filtered = reviews.filter((r) => {
    if (filter === "pending") return !r.is_approved;
    if (filter === "approved") return r.is_approved;
    return true;
  });
  const handleApprove = async (id) => {
    try {
      await approveReview(id);
      await load();
    } catch (err) {
      console.error("Failed to approve review", err);
    }
  };
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this review?")) return;
    try {
      await deleteReview(id);
      await load();
    } catch (err) {
      console.error("Failed to delete review", err);
    }
  };
  const pendingCount = reviews.filter((r) => !r.is_approved).length;
  return /* @__PURE__ */ jsx(AdminLayout, { children: /* @__PURE__ */ jsxs("div", { style: { padding: "2rem" }, children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1.5rem",
          flexWrap: "wrap",
          gap: "1rem"
        },
        children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h1", { style: { fontSize: "1.75rem", fontWeight: 700, marginBottom: "0.25rem" }, children: "Reviews" }),
            pendingCount > 0 && /* @__PURE__ */ jsxs("p", { style: { color: "#f59e0b", fontSize: "0.9rem", fontWeight: 500 }, children: [
              pendingCount,
              " review",
              pendingCount > 1 ? "s" : "",
              " waiting for approval"
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { style: { display: "flex", gap: "0.5rem" }, children: ["all", "pending", "approved"].map((f) => /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => setFilter(f),
              style: {
                padding: "0.4rem 1rem",
                background: filter === f ? "#2563eb" : "#f1f5f9",
                color: filter === f ? "white" : "#475569",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "0.9rem",
                fontWeight: filter === f ? 500 : 400,
                textTransform: "capitalize"
              },
              children: [
                f,
                f === "pending" && pendingCount > 0 && /* @__PURE__ */ jsx(
                  "span",
                  {
                    style: {
                      marginLeft: "0.4rem",
                      background: filter === f ? "rgba(255,255,255,0.3)" : "#f59e0b",
                      color: filter === f ? "white" : "white",
                      borderRadius: "10px",
                      padding: "0 0.4rem",
                      fontSize: "0.75rem"
                    },
                    children: pendingCount
                  }
                )
              ]
            },
            f
          )) })
        ]
      }
    ),
    loading ? /* @__PURE__ */ jsx("div", { style: { color: "#94a3b8", padding: "2rem" }, children: "Loading reviews..." }) : filtered.length === 0 ? /* @__PURE__ */ jsxs(
      "div",
      {
        style: {
          background: "white",
          padding: "3rem",
          textAlign: "center",
          color: "#94a3b8",
          borderRadius: "12px",
          border: "1px solid #e2e8f0"
        },
        children: [
          "No ",
          filter === "all" ? "" : filter,
          " reviews found."
        ]
      }
    ) : /* @__PURE__ */ jsx("div", { style: { display: "flex", flexDirection: "column", gap: "0.75rem" }, children: filtered.map((r) => /* @__PURE__ */ jsx(
      "div",
      {
        style: {
          background: "white",
          padding: "1.25rem 1.5rem",
          borderRadius: "12px",
          boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
          borderLeft: `4px solid ${r.is_approved ? "#16a34a" : "#f59e0b"}`,
          border: "1px solid #e2e8f0",
          borderLeftWidth: "4px"
        },
        children: /* @__PURE__ */ jsxs(
          "div",
          {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: "1rem"
            },
            children: [
              /* @__PURE__ */ jsxs("div", { style: { flex: 1 }, children: [
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginBottom: "0.4rem"
                    },
                    children: [
                      /* @__PURE__ */ jsx("span", { style: { fontWeight: 600, fontSize: "1rem" }, children: r.author_name }),
                      /* @__PURE__ */ jsx(
                        "span",
                        {
                          style: {
                            padding: "0.15rem 0.5rem",
                            borderRadius: "12px",
                            fontSize: "0.75rem",
                            fontWeight: 500,
                            background: r.is_approved ? "#dcfce7" : "#fef9c3",
                            color: r.is_approved ? "#16a34a" : "#a16207"
                          },
                          children: r.is_approved ? "Approved" : "Pending"
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs("div", { style: { color: "#f59e0b", fontSize: "1rem", marginBottom: "0.4rem" }, children: [
                  "★".repeat(r.rating),
                  /* @__PURE__ */ jsx("span", { style: { color: "#e2e8f0" }, children: "★".repeat(5 - r.rating) })
                ] }),
                /* @__PURE__ */ jsx("div", { style: { color: "#374151", fontSize: "0.95rem", lineHeight: 1.5 }, children: r.comment }),
                /* @__PURE__ */ jsx("div", { style: { fontSize: "0.8rem", color: "#94a3b8", marginTop: "0.5rem" }, children: new Date(r.created_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric"
                }) })
              ] }),
              /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: "0.5rem", flexShrink: 0 }, children: [
                !r.is_approved && /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: () => handleApprove(r.id),
                    style: {
                      padding: "0.4rem 1rem",
                      background: "#dcfce7",
                      color: "#16a34a",
                      border: "none",
                      borderRadius: "8px",
                      cursor: "pointer",
                      fontWeight: 500,
                      fontSize: "0.9rem"
                    },
                    children: "Approve"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: () => handleDelete(r.id),
                    style: {
                      padding: "0.4rem 1rem",
                      background: "#fee2e2",
                      color: "#dc2626",
                      border: "none",
                      borderRadius: "8px",
                      cursor: "pointer",
                      fontWeight: 500,
                      fontSize: "0.9rem"
                    },
                    children: "Delete"
                  }
                )
              ] })
            ]
          }
        )
      },
      r.id
    )) })
  ] }) });
}
export {
  AdminReviews as A
};
