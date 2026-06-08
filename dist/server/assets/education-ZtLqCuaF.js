import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Search, BookOpen } from "lucide-react";
import { useState, useRef, useEffect, useMemo } from "react";
import { R as Reveal } from "./Reveal-Bm4r8-61.js";
import { r as getPublicVideos, p as getPublicBlogs } from "./adminApi-BjrAEKnx.js";
import "@supabase/supabase-js";
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
function toYouTubeCard(video) {
  const title = video?.title;
  const cat = video?.category || "general";
  const youtubeUrl = video?.youtube_url;
  if (!title || !youtubeUrl) return null;
  try {
    const u = new URL(youtubeUrl);
    const v = u.searchParams.get("v");
    if (v) {
      return {
        id: video.id ?? title,
        title,
        cat,
        thumbnailUrl: `https://img.youtube.com/vi/${v}/hqdefault.jpg`,
        youtubeEmbedUrl: `https://www.youtube.com/embed/${v}`,
        youtubeWatchUrl: `https://www.youtube.com/watch?v=${v}`
      };
    }
    const parts = u.pathname.split("/").filter(Boolean);
    const last = parts[parts.length - 1];
    if (last) {
      return {
        id: video.id ?? title,
        title,
        cat,
        thumbnailUrl: `https://img.youtube.com/vi/${last}/hqdefault.jpg`,
        youtubeEmbedUrl: `https://www.youtube.com/embed/${last}`,
        youtubeWatchUrl: `https://www.youtube.com/watch?v=${last}`
      };
    }
  } catch {
  }
  return null;
}
const articleCategories = ["All Articles", "Surgery", "Cosmetic", "General", "Hygiene"];
function EducationPage() {
  const [search, setSearch] = useState("");
  const [videoCat, setVideoCat] = useState("All Videos");
  const [articleCat, setArticleCat] = useState("All Articles");
  const [dbVideos, setDbVideos] = useState([]);
  const [dbBlogs, setDbBlogs] = useState([]);
  const [videosLoading, setVideosLoading] = useState(true);
  const [blogsLoading, setBlogsLoading] = useState(true);
  useRef(null);
  useRef(null);
  useEffect(() => {
    const loadVideos = async () => {
      try {
        const data = await getPublicVideos();
        const videoCards = data.map(toYouTubeCard).filter((v) => v !== null);
        setDbVideos(videoCards);
      } catch (err) {
        console.error("Failed to load videos from database", err);
        setDbVideos([]);
      } finally {
        setVideosLoading(false);
      }
    };
    loadVideos();
    const loadBlogs = async () => {
      try {
        const data = await getPublicBlogs();
        setDbBlogs(data);
      } catch (err) {
        console.error("Failed to load blogs from database", err);
        setDbBlogs([]);
      } finally {
        setBlogsLoading(false);
      }
    };
    loadBlogs();
  }, []);
  const videosToUse = dbVideos.length > 0 ? dbVideos : fallbackVideos;
  const filteredVideos = useMemo(() => {
    return videosToUse.filter((v) => {
      const matchSearch = v.title.toLowerCase().includes(search.toLowerCase());
      const matchCat = videoCat === "All Videos" || v.cat === videoCat;
      return matchSearch && matchCat;
    });
  }, [search, videoCat, videosToUse]);
  const articlesToUse = dbBlogs;
  const filteredArticles = useMemo(() => {
    return articlesToUse.filter((a) => {
      const matchSearch = a.title.toLowerCase().includes(search.toLowerCase());
      const matchCat = articleCat === "All Articles" || a.cat === articleCat;
      return matchSearch && matchCat;
    });
  }, [search, articleCat, articlesToUse]);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-gray-50 to-white", children: [
    /* @__PURE__ */ jsx("section", { className: "pt-32 pb-20 px-6 lg:px-10", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxs(motion.div, { initial: {
      opacity: 0,
      y: 40
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      duration: 0.6
    }, children: [
      /* @__PURE__ */ jsx("span", { className: "bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold inline-block", children: "Dental Education Center" }),
      /* @__PURE__ */ jsxs("h1", { className: "mt-6 text-5xl md:text-6xl font-bold leading-tight green-bold", children: [
        "Learn Through",
        /* @__PURE__ */ jsx("span", { className: "block text-red-600", children: "Videos & Articles" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg text-gray-600 max-w-2xl mx-auto", children: "Explore professional dental education resources with expert videos and comprehensive articles." }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 flex justify-center", children: /* @__PURE__ */ jsxs("div", { className: "w-full max-w-2xl relative", children: [
        /* @__PURE__ */ jsx(Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" }),
        /* @__PURE__ */ jsx("input", { value: search, onChange: (e) => setSearch(e.target.value), placeholder: "Search videos or articles...", className: "w-full bg-white border border-gray-300 rounded-full pl-12 pr-6 py-4 outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition shadow-sm" })
      ] }) })
    ] }) }) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 px-6 lg:px-10 bg-white border-y border-gray-200", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxs(motion.div, { initial: {
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
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-gray-900", children: "Educational Videos" }),
          /* @__PURE__ */ jsx("span", { className: "text-3xl font-bold text-red-600", children: filteredVideos.length })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3", children: videoCategories.map((c) => /* @__PURE__ */ jsx(motion.button, { whileHover: {
          scale: 1.05
        }, onClick: () => setVideoCat(c), className: `px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${videoCat === c ? "bg-red-600 text-white border-red-600 shadow-lg" : "bg-white border-gray-300 text-gray-700 hover:border-red-500"}`, children: c }, c)) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-8", children: filteredVideos.map((v) => /* @__PURE__ */ jsxs(motion.div, { initial: {
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
        /* @__PURE__ */ jsx("div", { className: "relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 aspect-video bg-black mb-4", children: /* @__PURE__ */ jsx("iframe", { src: v.youtubeEmbedUrl, title: v.title, allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true, className: "w-full h-full" }) }),
        /* @__PURE__ */ jsxs("div", { className: "px-2", children: [
          /* @__PURE__ */ jsx("a", { href: v.youtubeWatchUrl, target: "_blank", rel: "noopener noreferrer", className: "block group", children: /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2", children: v.title }) }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mt-2", children: v.cat })
        ] })
      ] }, v.id)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 px-6 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxs(motion.div, { initial: {
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
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-gray-900", children: "Educational Articles" }),
          /* @__PURE__ */ jsx("span", { className: "text-3xl font-bold text-red-600", children: filteredArticles.length })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3", children: articleCategories.map((c) => /* @__PURE__ */ jsx(motion.button, { whileHover: {
          scale: 1.05
        }, onClick: () => setArticleCat(c), className: `px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${articleCat === c ? "bg-red-600 text-white border-red-600 shadow-lg" : "bg-white border-gray-300 text-gray-700 hover:border-red-500"}`, children: c }, c)) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8", children: filteredArticles.map((a, idx) => /* @__PURE__ */ jsx(Link, { to: "/blogs/$slug", params: {
        slug: a.seo_slug
      }, className: "group cursor-pointer", children: /* @__PURE__ */ jsxs(motion.div, { initial: {
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
      }, children: [
        /* @__PURE__ */ jsx("div", { className: "relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 aspect-square bg-gradient-to-br from-red-400 to-red-600 group-hover:scale-105 transition-transform mb-4", children: a.title_image_url ? /* @__PURE__ */ jsx("img", { src: a.title_image_url, alt: a.title, className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsxs("div", { className: "w-full h-full flex items-center justify-center", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-20 bg-white" }),
          /* @__PURE__ */ jsx(BookOpen, { className: "w-16 h-16 text-white relative z-10" })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs bg-red-100 text-red-700 px-3 py-1 rounded-full w-fit font-semibold mb-2", children: a.cat }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2", children: a.title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mt-2 line-clamp-2", children: a.content })
        ] })
      ] }) }, a.id)) })
    ] }) })
  ] });
}
export {
  EducationPage as component
};
