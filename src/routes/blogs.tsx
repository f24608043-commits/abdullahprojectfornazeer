import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Reveal } from "@/components/site/Reveal";
import { getPublicBlogs } from "@/api/adminApi";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blogs")({
  head: () => ({
    meta: [
      { title: "Dental Blog — NMDC | Dr Brig Nazeer" },
      { name: "description", content: "Read expert dental health articles and tips from Dr Brig Nazeer at NMDC." },
      { property: "og:title", content: "Dental Blog — NMDC" },
      { property: "og:url", content: "/blogs" },
    ],
    links: [{ rel: "canonical", href: "/blogs" }],
  }),
  component: BlogsPage,
});

function BlogsPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const data = await getPublicBlogs();
        setBlogs(data);
      } catch (err) {
        console.error('Failed to load blogs', err);
      } finally {
        setLoading(false);
      }
    };
    loadBlogs();
  }, []);

  return (
    <div className="pt-32 pb-24">
      <section className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <span className="text-[11px] uppercase tracking-[0.3em] text-red-600">Dental Blog</span>
          <h1 className="mt-4 font-display text-5xl md:text-6xl green-bold max-w-3xl leading-tight">
            Expert Dental Insights
          </h1>
          <p className="mt-6 max-w-2xl text-black/70">
            Stay informed with the latest dental health tips, procedures, and insights from Dr Brig Nazeer.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 mt-16">
        {loading ? (
          <div className="text-center py-20">Loading blogs...</div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500">No blogs published yet.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, i) => (
              <Reveal key={blog.id} delay={i * 0.05}>
                <BlogCard blog={blog} />
              </Reveal>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

function BlogCard({ blog }: { blog: any }) {
  return (
    <a
      href={`/blogs/${blog.seo_slug}`}
      className="group block h-full rounded-3xl border border-border bg-card overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:border-red-600/40"
    >
      {blog.title_image_url && (
        <div className="aspect-video w-full overflow-hidden bg-gray-100">
          <img
            src={blog.title_image_url}
            alt={blog.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {new Date(blog.created_at).toLocaleDateString()}
          </span>
        </div>
        <h3 className="font-display text-xl text-black mb-2 line-clamp-2 group-hover:text-red-600 transition-colors">
          {blog.title}
        </h3>
        {blog.excerpt && (
          <p className="text-sm text-black/70 line-clamp-3 mb-4">{blog.excerpt}</p>
        )}
        <div className="flex items-center gap-2 text-sm font-semibold text-red-600">
          Read More
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </a>
  );
}
