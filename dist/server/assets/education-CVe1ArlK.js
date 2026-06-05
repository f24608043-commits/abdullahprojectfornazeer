import { S as reactExports, J as jsxRuntimeExports } from "./server-C8G90q7p.js";
import { R as Reveal } from "./Reveal-DTJ5BtQU.js";
import { j as createLucideIcon, u as motion, A as AnimatePresence, X } from "./router-BFSBxmeH.js";
import { B as BookOpen } from "./book-open-B15b4B3w.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = createLucideIcon("search", __iconNode);
const videoCategories = ["All Videos", "Implants", "Cosmetic", "Hygiene", "Surgery"];
const fallbackVideos = [{
  id: "fallback-1",
  title: "Everything You Need to Know About Dental Implants",
  cat: "Implants",
  thumbnailUrl: "https://img.youtube.com/vi/N4v8yVYyZ0Q/hqdefault.jpg",
  youtubeEmbedUrl: "https://www.youtube.com/embed/N4v8yVYyZ0Q",
  youtubeWatchUrl: "https://www.youtube.com/watch?v=N4v8yVYyZ0Q"
}, {
  id: "fallback-2",
  title: "Root Canal Procedure Explained",
  cat: "Surgery",
  thumbnailUrl: "https://img.youtube.com/vi/2nqzV1y9c2A/hqdefault.jpg",
  youtubeEmbedUrl: "https://www.youtube.com/embed/2nqzV1y9c2A",
  youtubeWatchUrl: "https://www.youtube.com/watch?v=2nqzV1y9c2A"
}];
const articleCategories = ["All Articles", "Surgery", "Cosmetic", "General", "Hygiene"];
const articles = [{
  id: 1,
  title: "Dental Health Basics",
  cat: "General",
  content: "Learn the fundamentals of dental health and daily care routine."
}, {
  id: 2,
  title: "Implant Recovery Guide",
  cat: "Surgery",
  content: "Complete guide to recovering from dental implant surgery."
}, {
  id: 3,
  title: "Whitening Safety Tips",
  cat: "Cosmetic",
  content: "Safe ways to whiten your teeth at home and in clinic."
}, {
  id: 4,
  title: "Braces Care Instructions",
  cat: "General",
  content: "Everything you need to know about braces maintenance."
}, {
  id: 5,
  title: "Root Canal Myths",
  cat: "Surgery",
  content: "Debunking common myths about root canal treatments."
}, {
  id: 6,
  title: "Gum Disease Prevention",
  cat: "Hygiene",
  content: "Prevent gum disease with proper oral care techniques."
}, {
  id: 7,
  title: "Oral Hygiene Routine",
  cat: "Hygiene",
  content: "Develop a healthy oral hygiene routine for better teeth."
}, {
  id: 8,
  title: "Tooth Pain Causes",
  cat: "General",
  content: "Understanding the causes of tooth pain and treatment options."
}, {
  id: 9,
  title: "Cosmetic Dentistry Options",
  cat: "Cosmetic",
  content: "Explore various cosmetic dentistry procedures available."
}, {
  id: 10,
  title: "Teeth Sensitivity Solutions",
  cat: "Hygiene",
  content: "Effective ways to treat and prevent tooth sensitivity."
}, {
  id: 11,
  title: "Orthodontics Explained",
  cat: "General",
  content: "Understanding braces, aligners, and orthodontic treatment."
}, {
  id: 12,
  title: "Dental Implants Benefits",
  cat: "Surgery",
  content: "The advantages and benefits of choosing dental implants."
}];
function EducationPage() {
  const [search, setSearch] = reactExports.useState("");
  const [videoCat, setVideoCat] = reactExports.useState("All Videos");
  const [articleCat, setArticleCat] = reactExports.useState("All Articles");
  const [selectedArticle, setSelectedArticle] = reactExports.useState(null);
  reactExports.useRef(null);
  reactExports.useRef(null);
  const filteredVideos = reactExports.useMemo(() => {
    return fallbackVideos.filter((v) => {
      const matchSearch = v.title.toLowerCase().includes(search.toLowerCase());
      const matchCat = videoCat === "All Videos" || v.cat === videoCat;
      return matchSearch && matchCat;
    });
  }, [search, videoCat]);
  const filteredArticles = reactExports.useMemo(() => {
    return articles.filter((a) => {
      const matchSearch = a.title.toLowerCase().includes(search.toLowerCase());
      const matchCat = articleCat === "All Articles" || a.cat === articleCat;
      return matchSearch && matchCat;
    });
  }, [search, articleCat]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-gray-50 to-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-32 pb-20 px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 40
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      duration: 0.6
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold inline-block", children: "Dental Education Center" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 text-5xl md:text-6xl font-bold leading-tight green-bold", children: [
        "Learn Through",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-red-600", children: "Videos & Articles" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-gray-600 max-w-2xl mx-auto", children: "Explore professional dental education resources with expert videos and comprehensive articles." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-2xl relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: search, onChange: (e) => setSearch(e.target.value), placeholder: "Search videos or articles...", className: "w-full bg-white border border-gray-300 rounded-full pl-12 pr-6 py-4 outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition shadow-sm" })
      ] }) })
    ] }) }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 px-6 lg:px-10 bg-white border-y border-gray-200", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.6
      }, viewport: {
        once: true
      }, className: "mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold text-gray-900", children: "Educational Videos" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl font-bold text-red-600", children: filteredVideos.length })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3", children: videoCategories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.button, { whileHover: {
          scale: 1.05
        }, onClick: () => setVideoCat(c), className: `px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${videoCat === c ? "bg-red-600 text-white border-red-600 shadow-lg" : "bg-white border-gray-300 text-gray-700 hover:border-red-500"}`, children: c }, c)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-8", children: filteredVideos.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.5
      }, viewport: {
        once: true
      }, whileHover: {
        y: -8
      }, className: "group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 aspect-video bg-black mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { src: v.youtubeEmbedUrl, title: v.title, allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true, className: "w-full h-full" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: v.youtubeWatchUrl, target: "_blank", rel: "noopener noreferrer", className: "block group", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2", children: v.title }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 mt-2", children: v.cat })
        ] })
      ] }, v.id)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.6
      }, viewport: {
        once: true
      }, className: "mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold text-gray-900", children: "Educational Articles" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl font-bold text-red-600", children: filteredArticles.length })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3", children: articleCategories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.button, { whileHover: {
          scale: 1.05
        }, onClick: () => setArticleCat(c), className: `px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${articleCat === c ? "bg-red-600 text-white border-red-600 shadow-lg" : "bg-white border-gray-300 text-gray-700 hover:border-red-500"}`, children: c }, c)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8", children: filteredArticles.map((a, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.5,
        delay: idx * 0.05
      }, viewport: {
        once: true
      }, whileHover: {
        y: -8
      }, className: "group cursor-pointer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 aspect-square bg-gradient-to-br from-red-400 to-red-600 group-hover:scale-105 transition-transform mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full flex items-center justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-20 bg-white" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-16 h-16 text-white relative z-10" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onClick: () => setSelectedArticle(a), className: "flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs bg-red-100 text-red-700 px-3 py-1 rounded-full w-fit font-semibold mb-2", children: a.cat }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2", children: a.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 mt-2 line-clamp-2", children: a.content })
        ] })
      ] }, a.id)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: selectedArticle && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6 z-50", initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, exit: {
      opacity: 0
    }, onClick: () => setSelectedArticle(null), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { className: "bg-white w-full max-w-4xl max-h-[85vh] overflow-y-auto p-10 rounded-2xl relative", initial: {
      scale: 0.92,
      opacity: 0
    }, animate: {
      scale: 1,
      opacity: 1
    }, exit: {
      scale: 0.92,
      opacity: 0
    }, transition: {
      duration: 0.25
    }, onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedArticle(null), className: "absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-red-600 hover:text-white transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold inline-block", children: selectedArticle.cat }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 text-4xl font-bold leading-tight text-gray-900", children: selectedArticle.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-gray-700 leading-8 text-lg", children: selectedArticle.content })
    ] }) }) })
  ] });
}
export {
  EducationPage as component
};
