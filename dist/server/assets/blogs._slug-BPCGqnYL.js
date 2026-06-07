import { S as reactExports, J as jsxRuntimeExports } from "./server-D4SjyuAh.js";
import { R as Reveal } from "./Reveal-DlE4ISS7.js";
import { o as getPublicBlogBySlug } from "./adminApi-Cmaz68c5.js";
import { j as createLucideIcon, R as Route, L as Link } from "./router-BShN6dNa.js";
import { C as Calendar } from "./calendar-D2Mg40zG.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./index-DjnJ5Hw_.js";
const __iconNode = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode);
function BlogDetailPage() {
  const {
    slug
  } = Route.useParams();
  const [blog, setBlog] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const loadBlog = async () => {
      try {
        const data = await getPublicBlogBySlug(slug);
        setBlog(data);
      } catch (err) {
        console.error("Failed to load blog", err);
      } finally {
        setLoading(false);
      }
    };
    loadBlog();
  }, [slug]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-32 pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-4xl px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blogs", className: "inline-flex items-center gap-2 text-sm text-gray-600 hover:text-red-600 transition-colors mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
      "Back to Blogs"
    ] }),
    loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-20", children: "Loading blog..." }) : !blog ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500", children: "Blog not found." }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { children: [
      blog.title_image_url && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-video w-full rounded-3xl overflow-hidden bg-gray-100 mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: blog.title_image_url, alt: blog.title, className: "h-full w-full object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-4 text-sm text-muted-foreground mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4" }),
        new Date(blog.created_at).toLocaleDateString()
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-5xl green-bold mb-6", children: blog.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "prose prose-lg max-w-none", dangerouslySetInnerHTML: {
        __html: blog.html_content
      } })
    ] })
  ] }) }) });
}
export {
  BlogDetailPage as component
};
