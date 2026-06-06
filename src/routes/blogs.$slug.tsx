import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Reveal } from "@/components/site/Reveal";
import { getPublicBlogBySlug } from "@/api/adminApi";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/blogs/$slug")({
  component: BlogDetailPage,
});

function BlogDetailPage() {
  const { slug } = Route.useParams();
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlog = async () => {
      try {
        const data = await getPublicBlogBySlug(slug);
        setBlog(data);
      } catch (err) {
        console.error('Failed to load blog', err);
      } finally {
        setLoading(false);
      }
    };
    loadBlog();
  }, [slug]);

  return (
    <div className="pt-32 pb-24">
      <section className="mx-auto max-w-4xl px-6 lg:px-10">
        <Reveal>
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-red-600 transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blogs
          </Link>

          {loading ? (
            <div className="text-center py-20">Loading blog...</div>
          ) : !blog ? (
            <div className="text-center py-20">
              <p className="text-gray-500">Blog not found.</p>
            </div>
          ) : (
            <article>
              {blog.title_image_url && (
                <div className="aspect-video w-full rounded-3xl overflow-hidden bg-gray-100 mb-8">
                  <img
                    src={blog.title_image_url}
                    alt={blog.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}

              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(blog.created_at).toLocaleDateString()}
                </span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl green-bold mb-6">
                {blog.title}
              </h1>

              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: blog.html_content }}
              />
            </article>
          )}
        </Reveal>
      </section>
    </div>
  );
}
