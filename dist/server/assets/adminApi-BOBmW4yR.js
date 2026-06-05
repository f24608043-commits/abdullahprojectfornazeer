import { c as createClient } from "./index-DjnJ5Hw_.js";
const supabaseUrl = "https://nyoslrmjxboqpeuoemsy.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55b3Nscm1qeGJvcXBldW9lbXN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk1MjY0NTAsImV4cCI6MjA5NTEwMjQ1MH0.8Gx_2z1yuCmR9YfYXK-PXUlTSyj3Aw96VppEn4Nd8NE";
const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);
const supabase$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  supabase
}, Symbol.toStringTag, { value: "Module" }));
const getAdminVideos = async () => {
  const { data, error } = await supabase.from("videos").select("*").order("created_at", { ascending: false });
  if (error) throw error;
  return data || [];
};
const createVideo = async (video) => {
  const { data, error } = await supabase.from("videos").insert([video]).select().single();
  if (error) throw error;
  return data;
};
const updateVideo = async (id, updates) => {
  const { data, error } = await supabase.from("videos").update(updates).eq("id", id).select().single();
  if (error) throw error;
  return data;
};
const deleteVideo = async (id) => {
  const { error } = await supabase.from("videos").delete().eq("id", id);
  if (error) throw error;
  return true;
};
const createVideoWithFile = async (form) => {
  const formData = new FormData();
  formData.append("title", form.title);
  formData.append("description", form.description || "");
  formData.append("category", form.category || "general");
  formData.append("is_published", String(form.is_published));
  formData.append("thumbnail_url", form.thumbnail_url || "");
  formData.append("upload_source", "file");
  if (form.video_file) formData.append("video_file", form.video_file);
  if (form._thumbnail_file) formData.append("thumbnail_file", form._thumbnail_file);
  const { data: { session } } = await supabase.auth.getSession();
  const res = await fetch("http://localhost:4000/api/admin/videos/upload", {
    method: "POST",
    headers: { Authorization: `Bearer ${session?.access_token}` },
    body: formData
  });
  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.message || "Upload failed");
  }
  return res.json();
};
const updateVideoWithFile = async (id, form) => {
  const formData = new FormData();
  formData.append("title", form.title);
  formData.append("description", form.description || "");
  formData.append("category", form.category || "general");
  formData.append("is_published", String(form.is_published));
  formData.append("thumbnail_url", form.thumbnail_url || "");
  formData.append("upload_source", "file");
  if (form.video_file) formData.append("video_file", form.video_file);
  if (form._thumbnail_file) formData.append("thumbnail_file", form._thumbnail_file);
  const { data: { session } } = await supabase.auth.getSession();
  const res = await fetch(`http://localhost:4000/api/admin/videos/${id}/upload`, {
    method: "PUT",
    headers: { Authorization: `Bearer ${session?.access_token}` },
    body: formData
  });
  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.message || "Update failed");
  }
  return res.json();
};
const getAdminReviews = async () => {
  const { data, error } = await supabase.from("reviews").select("*").order("created_at", { ascending: false });
  if (error) throw error;
  return data || [];
};
const approveReview = async (id) => {
  const { data, error } = await supabase.from("reviews").update({ is_approved: true }).eq("id", id).select().single();
  if (error) throw error;
  return data;
};
const deleteReview = async (id) => {
  const { error } = await supabase.from("reviews").delete().eq("id", id);
  if (error) throw error;
  return true;
};
export {
  approveReview as a,
  createVideoWithFile as b,
  createVideo as c,
  deleteReview as d,
  deleteVideo as e,
  getAdminVideos as f,
  getAdminReviews as g,
  updateVideoWithFile as h,
  supabase$1 as s,
  updateVideo as u
};
