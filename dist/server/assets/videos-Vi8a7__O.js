import { S as reactExports, J as jsxRuntimeExports } from "./server-C8G90q7p.js";
import { f as getAdminVideos, h as updateVideoWithFile, u as updateVideo, b as createVideoWithFile, c as createVideo, e as deleteVideo } from "./adminApi-BOBmW4yR.js";
import { A as AdminLayout } from "./AdminLayout-BSB7bhry.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./index-DjnJ5Hw_.js";
import "./router-BFSBxmeH.js";
const emptyForm = {
  title: "",
  description: "",
  youtube_url: "",
  thumbnail_url: "",
  category: "general",
  is_published: true,
  video_file: null,
  _thumbnail_file: null,
  upload_source: "youtube"
};
function AdminVideos() {
  const [videos, setVideos] = reactExports.useState([]);
  const [form, setForm] = reactExports.useState(emptyForm);
  const [editId, setEditId] = reactExports.useState(null);
  const [showForm, setShowForm] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(false);
  const [pageLoading, setPageLoading] = reactExports.useState(true);
  const load = async () => {
    try {
      const data = await getAdminVideos();
      setVideos(data);
    } catch (err) {
      console.error("Failed to load videos", err);
    } finally {
      setPageLoading(false);
    }
  };
  reactExports.useEffect(() => {
    load();
  }, []);
  reactExports.useEffect(() => {
    return () => {
      if (form.thumbnail_url && !form.thumbnail_url.startsWith("http")) {
        URL.revokeObjectURL(form.thumbnail_url);
      }
    };
  }, [form.thumbnail_url]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (editId) {
        if (form.upload_source === "file" && form.video_file) {
          await updateVideoWithFile(editId, form);
        } else {
          await updateVideo(editId, {
            title: form.title,
            description: form.description,
            youtube_url: form.youtube_url,
            thumbnail_url: form.thumbnail_url,
            category: form.category,
            is_published: form.is_published
          });
        }
      } else {
        if (form.upload_source === "file" && form.video_file) {
          await createVideoWithFile(form);
        } else {
          await createVideo({
            title: form.title,
            description: form.description,
            youtube_url: form.youtube_url,
            thumbnail_url: form.thumbnail_url,
            category: form.category,
            is_published: form.is_published
          });
        }
      }
      setForm(emptyForm);
      setEditId(null);
      setShowForm(false);
      await load();
    } catch (err) {
      console.error("Failed to save video", err);
      alert(err.message || "Failed to save video. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const handleEdit = (v) => {
    setForm({
      title: v.title || "",
      description: v.description || "",
      youtube_url: v.youtube_url || "",
      thumbnail_url: v.thumbnail_url || "",
      category: v.category || "general",
      is_published: v.is_published ?? true,
      video_file: null,
      _thumbnail_file: null,
      upload_source: v.youtube_url ? "youtube" : "file"
    });
    setEditId(v.id);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this video?")) return;
    try {
      await deleteVideo(id);
      await load();
    } catch (err) {
      console.error("Failed to delete video", err);
    }
  };
  const handleTogglePublish = async (v) => {
    try {
      await updateVideo(v.id, { is_published: !v.is_published });
      await load();
    } catch (err) {
      console.error("Failed to toggle publish", err);
    }
  };
  const handleCancel = () => {
    if (form.thumbnail_url && !form.thumbnail_url.startsWith("http")) {
      URL.revokeObjectURL(form.thumbnail_url);
    }
    setForm(emptyForm);
    setEditId(null);
    setShowForm(false);
  };
  const inputStyle = {
    width: "100%",
    padding: "0.6rem 0.75rem",
    border: "1px solid #e2e8f0",
    borderRadius: "8px",
    fontSize: "1rem",
    boxSizing: "border-box",
    outline: "none"
  };
  const labelStyle = {
    display: "block",
    marginBottom: "0.3rem",
    fontWeight: 500,
    fontSize: "0.9rem",
    color: "#374151"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AdminLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "2rem" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: { fontSize: "1.75rem", fontWeight: 700 }, children: "Videos" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            if (showForm) {
              handleCancel();
            } else {
              setForm(emptyForm);
              setEditId(null);
              setShowForm(true);
            }
          },
          style: {
            padding: "0.6rem 1.2rem",
            background: showForm ? "#64748b" : "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: 500,
            fontSize: "0.95rem"
          },
          children: showForm ? "Cancel" : "+ Add Video"
        }
      )
    ] }),
    showForm && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      background: "white",
      padding: "1.75rem",
      borderRadius: "12px",
      marginBottom: "2rem",
      boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
      border: "1px solid #e2e8f0"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: { marginBottom: "1.25rem", fontSize: "1.2rem", fontWeight: 600 }, children: editId ? "Edit Video" : "Add New Video" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        marginBottom: "1.5rem",
        display: "flex",
        gap: "0.5rem",
        background: "#f1f5f9",
        padding: "0.25rem",
        borderRadius: "10px",
        width: "fit-content"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setForm((f) => ({ ...f, upload_source: "youtube", video_file: null, _thumbnail_file: null })),
            style: {
              padding: "0.5rem 1.25rem",
              borderRadius: "8px",
              border: "none",
              background: form.upload_source === "youtube" ? "#2563eb" : "transparent",
              color: form.upload_source === "youtube" ? "white" : "#64748b",
              fontWeight: 600,
              fontSize: "0.9rem",
              cursor: "pointer",
              transition: "all 0.2s"
            },
            children: "📺 YouTube URL"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setForm((f) => ({ ...f, upload_source: "file", youtube_url: "" })),
            style: {
              padding: "0.5rem 1.25rem",
              borderRadius: "8px",
              border: "none",
              background: form.upload_source === "file" ? "#2563eb" : "transparent",
              color: form.upload_source === "file" ? "white" : "#64748b",
              fontWeight: 600,
              fontSize: "0.9rem",
              cursor: "pointer",
              transition: "all 0.2s"
            },
            children: "💾 Upload from Device"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "1rem" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: labelStyle, children: "Title *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              style: inputStyle,
              value: form.title,
              onChange: (e) => setForm((f) => ({ ...f, title: e.target.value })),
              required: true,
              placeholder: "Enter video title"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "1rem" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: labelStyle, children: "Description" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              style: { ...inputStyle, resize: "vertical" },
              value: form.description,
              onChange: (e) => setForm((f) => ({ ...f, description: e.target.value })),
              rows: 3,
              placeholder: "Enter video description"
            }
          )
        ] }),
        form.upload_source === "youtube" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "1rem" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: labelStyle, children: "YouTube URL *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "url",
                style: inputStyle,
                value: form.youtube_url,
                onChange: (e) => setForm((f) => ({ ...f, youtube_url: e.target.value })),
                required: form.upload_source === "youtube",
                placeholder: "https://www.youtube.com/watch?v=..."
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "1rem" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: labelStyle, children: "Thumbnail URL" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "url",
                style: inputStyle,
                value: form.thumbnail_url,
                onChange: (e) => setForm((f) => ({ ...f, thumbnail_url: e.target.value })),
                placeholder: "https://i.ytimg.com/vi/.../hqdefault.jpg"
              }
            )
          ] })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "1rem" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: labelStyle, children: "Upload Video File *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "file",
                accept: "video/mp4,video/webm,video/ogg",
                style: { ...inputStyle, padding: "0.4rem", background: "#f8fafc" },
                onChange: (e) => setForm((f) => ({ ...f, video_file: e.target.files?.[0] || null })),
                required: form.upload_source === "file" && !editId
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("small", { style: { color: "#64748b", fontSize: "0.75rem", marginTop: "0.25rem", display: "block" }, children: "Accepted: MP4, WebM, OGG (Max: 500MB)" }),
            form.video_file && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: "0.5rem", fontSize: "0.85rem", color: "#16a34a" }, children: [
              "✓ Selected: ",
              form.video_file.name,
              " (",
              (form.video_file.size / 1024 / 1024).toFixed(2),
              " MB)"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "1rem" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: labelStyle, children: "Thumbnail Image (Optional)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "file",
                accept: "image/*",
                style: { ...inputStyle, padding: "0.4rem", background: "#f8fafc" },
                onChange: (e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const previewUrl = URL.createObjectURL(file);
                    setForm((f) => ({ ...f, thumbnail_url: previewUrl, _thumbnail_file: file }));
                  }
                }
              }
            ),
            form.thumbnail_url && !form.thumbnail_url.startsWith("http") && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: form.thumbnail_url,
                alt: "Preview",
                style: { marginTop: "0.5rem", maxWidth: "200px", borderRadius: "8px", border: "1px solid #e2e8f0" },
                onLoad: (e) => URL.revokeObjectURL(e.target.src)
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "1rem" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: labelStyle, children: "Category" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              style: inputStyle,
              value: form.category,
              onChange: (e) => setForm((f) => ({ ...f, category: e.target.value })),
              placeholder: "e.g. general, orthodontics, hygiene"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { style: { display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.25rem", cursor: "pointer" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "checkbox",
              checked: form.is_published,
              onChange: (e) => setForm((f) => ({ ...f, is_published: e.target.checked })),
              style: { width: "16px", height: "16px" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "0.9rem", fontWeight: 500 }, children: "Published (visible on website)" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "0.75rem" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: loading, style: {
            padding: "0.7rem 2rem",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: loading ? "not-allowed" : "pointer",
            fontWeight: 500,
            opacity: loading ? 0.7 : 1
          }, children: loading ? form.upload_source === "file" ? "Uploading..." : "Saving..." : editId ? "Save Changes" : "Add Video" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: handleCancel, style: {
            padding: "0.7rem 1.5rem",
            background: "#f1f5f9",
            color: "#475569",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: 500
          }, children: "Cancel" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      background: "white",
      borderRadius: "12px",
      boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
      overflow: "hidden",
      border: "1px solid #e2e8f0"
    }, children: pageLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { padding: "3rem", textAlign: "center", color: "#94a3b8" }, children: "Loading videos..." }) : videos.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "3rem", textAlign: "center", color: "#94a3b8" }, children: [
      "No videos yet. Click ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "+ Add Video" }),
      " to get started."
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { overflowX: "auto" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { style: { width: "100%", borderCollapse: "collapse" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { style: { background: "#f8fafc", borderBottom: "1px solid #e2e8f0" }, children: ["Title", "Category", "Status", "Actions"].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: {
        padding: "0.75rem 1rem",
        textAlign: "left",
        fontSize: "0.85rem",
        fontWeight: 600,
        color: "#64748b"
      }, children: h }, h)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: videos.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { style: {
        borderBottom: i < videos.length - 1 ? "1px solid #f1f5f9" : "none"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { style: { padding: "0.85rem 1rem" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontWeight: 500, color: "#1e293b" }, children: v.title }),
          v.youtube_url && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.78rem", color: "#94a3b8", marginTop: "0.15rem" }, children: "📺 YouTube" }),
          v.video_url && !v.youtube_url && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "0.78rem", color: "#94a3b8", marginTop: "0.15rem" }, children: "💾 Local File" }),
          v.description && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            fontSize: "0.82rem",
            color: "#64748b",
            marginTop: "0.15rem",
            maxWidth: "300px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }, children: v.description })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: { padding: "0.85rem 1rem", color: "#64748b", fontSize: "0.9rem" }, children: v.category }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: { padding: "0.85rem 1rem" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
          padding: "0.25rem 0.65rem",
          borderRadius: "20px",
          fontSize: "0.8rem",
          fontWeight: 500,
          background: v.is_published ? "#dcfce7" : "#fef9c3",
          color: v.is_published ? "#16a34a" : "#a16207"
        }, children: v.is_published ? "Published" : "Draft" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: { padding: "0.85rem 1rem" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "0.5rem", flexWrap: "wrap" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleEdit(v), style: {
            padding: "0.3rem 0.8rem",
            background: "#f1f5f9",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "0.85rem",
            color: "#475569"
          }, children: "Edit" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleTogglePublish(v), style: {
            padding: "0.3rem 0.8rem",
            background: v.is_published ? "#fef9c3" : "#dcfce7",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "0.85rem",
            color: v.is_published ? "#a16207" : "#16a34a"
          }, children: v.is_published ? "Unpublish" : "Publish" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleDelete(v.id), style: {
            padding: "0.3rem 0.8rem",
            background: "#fee2e2",
            color: "#dc2626",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "0.85rem"
          }, children: "Delete" })
        ] }) })
      ] }, v.id)) })
    ] }) }) })
  ] }) });
}
const SplitComponent = AdminVideos;
export {
  SplitComponent as component
};
