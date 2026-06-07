import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Play, BookOpen, Search } from "lucide-react";
import { useMemo, useRef, useState, useEffect } from "react";
import { Reveal } from "@/components/site/Reveal";
import { getPublicVideos, getPublicBlogs } from "@/api/adminApi";

export const Route = createFileRoute("/education")({
  component: EducationPage,
});

/* =========================================================
   🎥 VIDEOS DATA
========================================================= */

const videoCategories = ["All Videos", "Implants", "Cosmetic", "Hygiene", "Surgery"];

// ====== Education Videos (uses admin panel videos as the source of truth) ======
// Admin panel writes to Supabase table `videos`.
// This page attempts to read videos; if not available (e.g. env not set), we show
// 2 featured videos.

const fallbackVideos = [
  {
    id: 'fallback-1',
    title: 'Everything You Need to Know About Dental Implants',
    cat: 'Implants',
    thumbnailUrl: 'https://img.youtube.com/vi/N4v8yVYyZ0Q/hqdefault.jpg',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/N4v8yVYyZ0Q',
    youtubeWatchUrl: 'https://www.youtube.com/watch?v=N4v8yVYyZ0Q',
  },
  {
    id: 'fallback-2',
    title: 'Root Canal Procedure Explained',
    cat: 'Surgery',
    thumbnailUrl: 'https://img.youtube.com/vi/2nqzV1y9c2A/hqdefault.jpg',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/2nqzV1y9c2A',
    youtubeWatchUrl: 'https://www.youtube.com/watch?v=2nqzV1y9c2A',
  },
];

type VideoCard = {
  id: string | number;
  title: string;
  cat: string;
  thumbnailUrl?: string;
  youtubeEmbedUrl: string;
  youtubeWatchUrl: string;
};

function toYouTubeCard(video: any): VideoCard | null {
  // adminApi uses field `youtube_url`.
  const title = video?.title;
  const cat = video?.category || 'general';
  const youtubeUrl = video?.youtube_url;

  if (!title || !youtubeUrl) return null;

  try {
    const u = new URL(youtubeUrl);
    const v = u.searchParams.get('v');
    if (v) {
      return {
        id: video.id ?? title,
        title,
        cat,
        thumbnailUrl: `https://img.youtube.com/vi/${v}/hqdefault.jpg`,
        youtubeEmbedUrl: `https://www.youtube.com/embed/${v}`,
        youtubeWatchUrl: `https://www.youtube.com/watch?v=${v}`,
      };
    }

    const parts = u.pathname.split('/').filter(Boolean);
    const last = parts[parts.length - 1];
    if (last) {
      return {
        id: video.id ?? title,
        title,
        cat,
        thumbnailUrl: `https://img.youtube.com/vi/${last}/hqdefault.jpg`,
        youtubeEmbedUrl: `https://www.youtube.com/embed/${last}`,
        youtubeWatchUrl: `https://www.youtube.com/watch?v=${last}`,
      };
    }
  } catch {
    // ignore
  }

  return null;
}


/* =========================================================
   📖 ARTICLES DATA
========================================================= */

const articleCategories = ["All Articles", "Surgery", "Cosmetic", "General", "Hygiene"];

const articles = [
  { id: 1, title: 'Dental Health Basics', cat: 'General', content: 'Learn the fundamentals of dental health and daily care routine.' },
  { id: 2, title: 'Implant Recovery Guide', cat: 'Surgery', content: 'Complete guide to recovering from dental implant surgery.' },
  { id: 3, title: 'Whitening Safety Tips', cat: 'Cosmetic', content: 'Safe ways to whiten your teeth at home and in clinic.' },
  { id: 4, title: 'Braces Care Instructions', cat: 'General', content: 'Everything you need to know about braces maintenance.' },
  { id: 5, title: 'Root Canal Myths', cat: 'Surgery', content: 'Debunking common myths about root canal treatments.' },
  { id: 6, title: 'Gum Disease Prevention', cat: 'Hygiene', content: 'Prevent gum disease with proper oral care techniques.' },
  { id: 7, title: 'Oral Hygiene Routine', cat: 'Hygiene', content: 'Develop a healthy oral hygiene routine for better teeth.' },
  { id: 8, title: 'Tooth Pain Causes', cat: 'General', content: 'Understanding the causes of tooth pain and treatment options.' },
  { id: 9, title: 'Cosmetic Dentistry Options', cat: 'Cosmetic', content: 'Explore various cosmetic dentistry procedures available.' },
  { id: 10, title: 'Teeth Sensitivity Solutions', cat: 'Hygiene', content: 'Effective ways to treat and prevent tooth sensitivity.' },
  { id: 11, title: 'Orthodontics Explained', cat: 'General', content: 'Understanding braces, aligners, and orthodontic treatment.' },
  { id: 12, title: 'Dental Implants Benefits', cat: 'Surgery', content: 'The advantages and benefits of choosing dental implants.' },
];

/* ========================================================= */

function EducationPage() {
  const [search, setSearch] = useState("");
  const [videoCat, setVideoCat] = useState("All Videos");
  const [articleCat, setArticleCat] = useState("All Articles");
  const [dbVideos, setDbVideos] = useState<any[]>([]);
  const [dbBlogs, setDbBlogs] = useState<any[]>([]);
  const [videosLoading, setVideosLoading] = useState(true);
  const [blogsLoading, setBlogsLoading] = useState(true);

  const videoSectionRef = useRef<HTMLDivElement>(null);
  const articleSectionRef = useRef<HTMLDivElement>(null);

  // Load videos from database
  useEffect(() => {
    const loadVideos = async () => {
      try {
        const data = await getPublicVideos();
        const videoCards = data
          .map(toYouTubeCard)
          .filter((v): v is VideoCard => v !== null);
        setDbVideos(videoCards);
      } catch (err) {
        console.error('Failed to load videos from database', err);
        setDbVideos([]);
      } finally {
        setVideosLoading(false);
      }
    };
    loadVideos();

    // Load blogs from database
    const loadBlogs = async () => {
      try {
        const data = await getPublicBlogs();
        setDbBlogs(data);
      } catch (err) {
        console.error('Failed to load blogs from database', err);
        setDbBlogs([]);
      } finally {
        setBlogsLoading(false);
      }
    };
    loadBlogs();
  }, []);

  /* =========================================================
     FILTER VIDEOS
  ========================================================= */

  // Use database videos if available, otherwise fallback
  const videosToUse = dbVideos.length > 0 ? dbVideos : fallbackVideos;

  const filteredVideos = useMemo(() => {
    return videosToUse.filter((v) => {
      const matchSearch = v.title.toLowerCase().includes(search.toLowerCase());
      const matchCat = videoCat === "All Videos" || v.cat === videoCat;
      return matchSearch && matchCat;
    });
  }, [search, videoCat, videosToUse]);

  /* =========================================================
     FILTER ARTICLES
  ========================================================= */

  // Only use database blogs (all have seo_slug)
  const articlesToUse = dbBlogs;

  const filteredArticles = useMemo(() => {
    return articlesToUse.filter((a) => {
      const matchSearch = a.title.toLowerCase().includes(search.toLowerCase());

      const matchCat = articleCat === "All Articles" || a.cat === articleCat;

      return matchSearch && matchCat;
    });
  }, [search, articleCat, articlesToUse]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="pt-32 pb-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold inline-block">
                  Dental Education Center
                </span>

                <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight green-bold">
                  Learn Through
                  <span className="block text-red-600">Videos & Articles</span>
                </h1>

                <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                  Explore professional dental education resources with expert videos and comprehensive articles.
                </p>

                {/* SEARCH BAR */}
                <div className="mt-10 flex justify-center">
                  <div className="w-full max-w-2xl relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search videos or articles..."
                      className="w-full bg-white border border-gray-300 rounded-full pl-12 pr-6 py-4 outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition shadow-sm"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          🎥 VIDEOS SECTION
      ========================================================= */}
      <section className="py-24 px-6 lg:px-10 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-4xl font-bold text-gray-900">Educational Videos</h2>
              <span className="text-3xl font-bold text-red-600">{filteredVideos.length}</span>
            </div>

            {/* VIDEO FILTERS */}
            <div className="flex flex-wrap gap-3">
              {videoCategories.map((c) => (
                <motion.button
                  key={c}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setVideoCat(c)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                    videoCat === c
                      ? "bg-red-600 text-white border-red-600 shadow-lg"
                      : "bg-white border-gray-300 text-gray-700 hover:border-red-500"
                  }`}
                >
                  {c}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* VIDEO GRID - SIMPLE DESIGN */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-8">
            {filteredVideos.map((v) => (
              <motion.div
                key={v.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group"
              >
                {/* Embedded Video Player */}
                <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 aspect-video bg-black mb-4">
                  <iframe
                    src={v.youtubeEmbedUrl}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>

                {/* Title Below */}
                <div className="px-2">
                  <a
                    href={v.youtubeWatchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2">
                      {v.title}
                    </h3>
                  </a>
                  <p className="text-sm text-gray-600 mt-2">{v.cat}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          📖 ARTICLES SECTION
      ========================================================= */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-4xl font-bold text-gray-900">Educational Articles</h2>
              <span className="text-3xl font-bold text-red-600">{filteredArticles.length}</span>
            </div>

            {/* ARTICLE FILTERS */}
            <div className="flex flex-wrap gap-3">
              {articleCategories.map((c) => (
                <motion.button
                  key={c}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setArticleCat(c)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                    articleCat === c
                      ? "bg-red-600 text-white border-red-600 shadow-lg"
                      : "bg-white border-gray-300 text-gray-700 hover:border-red-500"
                  }`}
                >
                  {c}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* ARTICLE GRID - SQUARE IMAGES WITH TITLE AT BOTTOM */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
            {filteredArticles.map((a, idx) => (
              <Link
                key={a.id}
                to="/blogs/$slug"
                params={{ slug: a.seo_slug }}
                className="group cursor-pointer"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  {/* Square Image Container */}
                  <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 aspect-square bg-gradient-to-br from-red-400 to-red-600 group-hover:scale-105 transition-transform mb-4">
                    {a.title_image_url ? (
                      <img
                        src={a.title_image_url}
                        alt={a.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        {/* Article image placeholder with gradient overlay */}
                        <div className="absolute inset-0 opacity-20 bg-white" />
                        <BookOpen className="w-16 h-16 text-white relative z-10" />
                      </div>
                    )}
                  </div>

                  {/* Title Below - Positioned at bottom like in a gallery */}
                  <div className="flex flex-col">
                    <span className="text-xs bg-red-100 text-red-700 px-3 py-1 rounded-full w-fit font-semibold mb-2">
                      {a.cat}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2">
                      {a.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2 line-clamp-2">{a.content}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
