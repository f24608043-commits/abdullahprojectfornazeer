import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { R as Reveal } from "./Reveal-Bm4r8-61.js";
import { o as getPublicBlogBySlug } from "./adminApi-BjrAEKnx.js";
import { ArrowLeft, Calendar } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { R as Route } from "./router-D19rCBEg.js";
import "framer-motion";
import "@supabase/supabase-js";
import "@tanstack/react-query";
function BlogDetailPage() {
  const {
    slug
  } = Route.useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
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
  return /* @__PURE__ */ jsx("div", { className: "pt-32 pb-24", children: /* @__PURE__ */ jsx("section", { className: "mx-auto max-w-4xl px-6 lg:px-10", children: /* @__PURE__ */ jsxs(Reveal, { children: [
    /* @__PURE__ */ jsxs(Link, { to: "/blogs", className: "inline-flex items-center gap-2 text-sm text-gray-600 hover:text-red-600 transition-colors mb-8", children: [
      /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
      "Back to Blogs"
    ] }),
    loading ? /* @__PURE__ */ jsx("div", { className: "text-center py-20", children: "Loading blog..." }) : !blog ? /* @__PURE__ */ jsx("div", { className: "text-center py-20", children: /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: "Blog not found." }) }) : /* @__PURE__ */ jsxs("article", { children: [
      blog.title_image_url && /* @__PURE__ */ jsx("div", { className: "aspect-video w-full rounded-3xl overflow-hidden bg-gray-100 mb-8", children: /* @__PURE__ */ jsx("img", { src: blog.title_image_url, alt: blog.title, className: "h-full w-full object-cover" }) }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4 text-sm text-muted-foreground mb-4", children: /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4" }),
        new Date(blog.created_at).toLocaleDateString()
      ] }) }),
      /* @__PURE__ */ jsx("h1", { className: "font-display text-4xl md:text-5xl green-bold mb-6", children: blog.title }),
      /* @__PURE__ */ jsx("div", { className: "prose prose-lg max-w-none", dangerouslySetInnerHTML: {
        __html: blog.html_content
      } })
    ] })
  ] }) }) });
}
export {
  BlogDetailPage as component
};
