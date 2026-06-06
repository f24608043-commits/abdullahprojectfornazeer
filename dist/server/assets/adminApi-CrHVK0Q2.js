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
  try {
    let videoUrl = "";
    let thumbnailUrl = form.thumbnail_url || "";
    if (form.video_file) {
      const fileExt = form.video_file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;
      const { error: uploadError } = await supabase.storage.from("videos").upload(filePath, form.video_file);
      if (uploadError) throw uploadError;
      const { data: { publicUrl } } = supabase.storage.from("videos").getPublicUrl(filePath);
      videoUrl = publicUrl;
    }
    if (form._thumbnail_file) {
      const fileExt = form._thumbnail_file.name.split(".").pop();
      const fileName = `thumb-${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;
      const { error: uploadError } = await supabase.storage.from("videos").upload(filePath, form._thumbnail_file);
      if (uploadError) throw uploadError;
      const { data: { publicUrl } } = supabase.storage.from("videos").getPublicUrl(filePath);
      thumbnailUrl = publicUrl;
    }
    const { data, error } = await supabase.from("videos").insert([{
      title: form.title,
      description: form.description || "",
      category: form.category || "general",
      is_published: form.is_published,
      video_url: videoUrl,
      thumbnail_url: thumbnailUrl,
      upload_source: "file"
    }]).select().single();
    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Upload error:", error);
    throw new Error(error.message || "Upload failed");
  }
};
const updateVideoWithFile = async (id, form) => {
  try {
    let videoUrl = form.video_url || "";
    let thumbnailUrl = form.thumbnail_url || "";
    if (form.video_file) {
      const fileExt = form.video_file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;
      const { error: uploadError } = await supabase.storage.from("videos").upload(filePath, form.video_file);
      if (uploadError) throw uploadError;
      const { data: { publicUrl } } = supabase.storage.from("videos").getPublicUrl(filePath);
      videoUrl = publicUrl;
    }
    if (form._thumbnail_file) {
      const fileExt = form._thumbnail_file.name.split(".").pop();
      const fileName = `thumb-${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;
      const { error: uploadError } = await supabase.storage.from("videos").upload(filePath, form._thumbnail_file);
      if (uploadError) throw uploadError;
      const { data: { publicUrl } } = supabase.storage.from("videos").getPublicUrl(filePath);
      thumbnailUrl = publicUrl;
    }
    const { data, error } = await supabase.from("videos").update({
      title: form.title,
      description: form.description || "",
      category: form.category || "general",
      is_published: form.is_published,
      video_url: videoUrl,
      thumbnail_url: thumbnailUrl,
      upload_source: "file"
    }).eq("id", id).select().single();
    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Update error:", error);
    throw new Error(error.message || "Update failed");
  }
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
