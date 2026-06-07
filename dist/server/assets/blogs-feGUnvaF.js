import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { R as Reveal } from "./Reveal-Bm4r8-61.js";
import { p as getPublicBlogs } from "./adminApi-BjrAEKnx.js";
import { Calendar, ArrowRight } from "lucide-react";
import "framer-motion";
import "@supabase/supabase-js";
function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const data = await getPublicBlogs();
        setBlogs(data);
      } catch (err) {
        console.error("Failed to load blogs", err);
      } finally {
        setLoading(false);
      }
    };
    loadBlogs();
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "pt-32 pb-24", children: [
    /* @__PURE__ */ jsx("section", { className: "mx-auto max-w-7xl px-6 lg:px-10", children: /* @__PURE__ */ jsxs(Reveal, { children: [
      /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-[0.3em] text-red-600", children: "Dental Blog" }),
      /* @__PURE__ */ jsx("h1", { className: "mt-4 font-display text-5xl md:text-6xl green-bold max-w-3xl leading-tight", children: "Expert Dental Insights" }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-2xl text-black/70", children: "Stay informed with the latest dental health tips, procedures, and insights from Dr Brig Nazeer." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "mx-auto max-w-7xl px-6 lg:px-10 mt-16", children: loading ? /* @__PURE__ */ jsx("div", { className: "text-center py-20", children: "Loading blogs..." }) : blogs.length === 0 ? /* @__PURE__ */ jsx("div", { className: "text-center py-20", children: /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: "No blogs published yet." }) }) : /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: blogs.map((blog, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 0.05, children: /* @__PURE__ */ jsx(BlogCard, { blog }) }, blog.id)) }) })
  ] });
}
function BlogCard({
  blog
}) {
  return /* @__PURE__ */ jsxs("a", { href: `/blogs/${blog.seo_slug}`, className: "group block h-full rounded-3xl border border-border bg-card overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:border-red-600/40", children: [
    blog.title_image_url && /* @__PURE__ */ jsx("div", { className: "aspect-video w-full overflow-hidden bg-gray-100", children: /* @__PURE__ */ jsx("img", { src: blog.title_image_url, alt: blog.title, className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" }) }),
    /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4 text-xs text-muted-foreground mb-3", children: /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsx(Calendar, { className: "h-3.5 w-3.5" }),
        new Date(blog.created_at).toLocaleDateString()
      ] }) }),
      /* @__PURE__ */ jsx("h3", { className: "font-display text-xl text-black mb-2 line-clamp-2 group-hover:text-red-600 transition-colors", children: blog.title }),
      blog.excerpt && /* @__PURE__ */ jsx("p", { className: "text-sm text-black/70 line-clamp-3 mb-4", children: blog.excerpt }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm font-semibold text-red-600", children: [
        "Read More",
        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
      ] })
    ] })
  ] });
}
export {
  BlogsPage as component
};
