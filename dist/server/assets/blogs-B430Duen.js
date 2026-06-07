import { S as reactExports, J as jsxRuntimeExports } from "./server-D4SjyuAh.js";
import { k as getAdminBlogs, x as updateBlog, c as createBlog, f as deleteBlog } from "./adminApi-Cmaz68c5.js";
import { A as AdminLayout } from "./AdminLayout-Bn-jTrot.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./index-DjnJ5Hw_.js";
import "./router-BShN6dNa.js";
const emptyForm = {
  title: "",
  seo_slug: "",
  html_content: "",
  title_image_url: "",
  excerpt: "",
  is_published: false
};
function AdminBlogs() {
  const [blogs, setBlogs] = reactExports.useState([]);
  const [form, setForm] = reactExports.useState(emptyForm);
  const [editId, setEditId] = reactExports.useState(null);
  const [showForm, setShowForm] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(false);
  const [pageLoading, setPageLoading] = reactExports.useState(true);
  const load = async () => {
    try {
      const data = await getAdminBlogs();
      setBlogs(data);
    } catch (err) {
      console.error("Failed to load blogs", err);
    } finally {
      setPageLoading(false);
    }
  };
  reactExports.useEffect(() => {
    load();
  }, []);
  const generateSlug = (title) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  };
  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setForm({
      ...form,
      title: newTitle,
      seo_slug: editId ? form.seo_slug : generateSlug(newTitle)
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (editId) {
        await updateBlog(editId, {
          title: form.title,
          seo_slug: form.seo_slug,
          html_content: form.html_content,
          title_image_url: form.title_image_url,
          excerpt: form.excerpt,
          is_published: form.is_published
        });
      } else {
        await createBlog({
          title: form.title,
          seo_slug: form.seo_slug,
          html_content: form.html_content,
          title_image_url: form.title_image_url,
          excerpt: form.excerpt,
          is_published: form.is_published
        });
      }
      setForm(emptyForm);
      setEditId(null);
      setShowForm(false);
      load();
    } catch (err) {
      console.error("Failed to save blog", err);
      alert(err.message || "Failed to save blog");
    } finally {
      setLoading(false);
    }
  };
  const handleEdit = (blog) => {
    setForm({
      title: blog.title,
      seo_slug: blog.seo_slug,
      html_content: blog.html_content,
      title_image_url: blog.title_image_url || "",
      excerpt: blog.excerpt || "",
      is_published: blog.is_published
    });
    setEditId(blog.id);
    setShowForm(true);
  };
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;
    try {
      await deleteBlog(id);
      load();
    } catch (err) {
      console.error("Failed to delete blog", err);
      alert(err.message || "Failed to delete blog");
    }
  };
  const handleCancel = () => {
    setForm(emptyForm);
    setEditId(null);
    setShowForm(false);
  };
  if (pageLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(AdminLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: "Loading..." }) }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AdminLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold", children: "Blogs Management" }),
      !showForm && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setShowForm(true),
          className: "px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition",
          children: "Add New Blog"
        }
      )
    ] }),
    showForm ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg shadow p-6 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mb-6", children: editId ? "Edit Blog" : "Add New Blog" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium mb-2", children: "Title *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: form.title,
              onChange: handleTitleChange,
              required: true,
              className: "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
              placeholder: "Enter blog title"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium mb-2", children: "SEO Slug *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: form.seo_slug,
              onChange: (e) => setForm({ ...form, seo_slug: e.target.value }),
              required: true,
              className: "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
              placeholder: "blog-url-slug"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500 mt-1", children: [
            "This will be used in the URL: /blog/",
            form.seo_slug
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium mb-2", children: "Title Image URL" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "url",
              value: form.title_image_url,
              onChange: (e) => setForm({ ...form, title_image_url: e.target.value }),
              className: "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
              placeholder: "https://example.com/image.jpg"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium mb-2", children: "Excerpt" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              value: form.excerpt,
              onChange: (e) => setForm({ ...form, excerpt: e.target.value }),
              rows: 3,
              className: "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
              placeholder: "Short summary of the blog post..."
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium mb-2", children: "HTML Content *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              value: form.html_content,
              onChange: (e) => setForm({ ...form, html_content: e.target.value }),
              required: true,
              rows: 15,
              className: "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm",
              placeholder: "<h2>Your Heading</h2><p>Your content here...</p>"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mt-1", children: "Enter your blog content in HTML format" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "checkbox",
              id: "is_published",
              checked: form.is_published,
              onChange: (e) => setForm({ ...form, is_published: e.target.checked }),
              className: "w-4 h-4 text-blue-600 rounded"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "is_published", className: "text-sm font-medium", children: "Publish immediately" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "submit",
              disabled: loading,
              className: "px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50",
              children: loading ? "Saving..." : editId ? "Update Blog" : "Create Blog"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: handleCancel,
              className: "px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition",
              children: "Cancel"
            }
          )
        ] })
      ] })
    ] }) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg shadow overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Title" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Slug" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-gray-200", children: blogs.map((blog) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-gray-50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-6 py-4 whitespace-nowrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-gray-900", children: blog.title }),
            blog.title_image_url && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: blog.title_image_url,
                alt: "",
                className: "h-10 w-10 object-cover rounded mt-2"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-500", children: blog.seo_slug }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-2 py-1 text-xs rounded-full ${blog.is_published ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`, children: blog.is_published ? "Published" : "Draft" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: new Date(blog.created_at).toLocaleDateString() }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => handleEdit(blog),
                className: "text-blue-600 hover:text-blue-900 mr-4",
                children: "Edit"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => handleDelete(blog.id),
                className: "text-red-600 hover:text-red-900",
                children: "Delete"
              }
            )
          ] })
        ] }, blog.id)) })
      ] }),
      blogs.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-12 text-gray-500", children: 'No blogs yet. Click "Add New Blog" to create one.' })
    ] })
  ] }) });
}
const SplitComponent = AdminBlogs;
export {
  SplitComponent as component
};
