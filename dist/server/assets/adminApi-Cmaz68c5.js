import { c as createClient } from "./index-DjnJ5Hw_.js";
const supabaseUrl = "https://amlmzotqvuacehuyaoxb.supabase.co";
const supabaseAnonKey = "sb_publishable_oVqK858lsOLOXgzq3U6q8Q_BSEPUZ7A";
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
const getAdminBlogs = async () => {
  const { data, error } = await supabase.from("blogs").select("*").order("created_at", { ascending: false });
  if (error) throw error;
  return data || [];
};
const createBlog = async (blog) => {
  const { data, error } = await supabase.from("blogs").insert([blog]).select().single();
  if (error) throw error;
  return data;
};
const updateBlog = async (id, updates) => {
  const { data, error } = await supabase.from("blogs").update(updates).eq("id", id).select().single();
  if (error) throw error;
  return data;
};
const deleteBlog = async (id) => {
  const { error } = await supabase.from("blogs").delete().eq("id", id);
  if (error) throw error;
  return true;
};
const getAdminContactSubmissions = async () => {
  const { data, error } = await supabase.from("contact_submissions").select("*").order("created_at", { ascending: false });
  if (error) throw error;
  return data || [];
};
const deleteContactSubmission = async (id) => {
  const { error } = await supabase.from("contact_submissions").delete().eq("id", id);
  if (error) throw error;
  return true;
};
const getAdminAppointmentBookings = async () => {
  const { data, error } = await supabase.from("appointment_bookings").select("*").order("created_at", { ascending: false });
  if (error) throw error;
  return data || [];
};
const updateAppointmentStatus = async (id, status) => {
  const { data, error } = await supabase.from("appointment_bookings").update({ status }).eq("id", id).select().single();
  if (error) throw error;
  return data;
};
const deleteAppointmentBooking = async (id) => {
  const { error } = await supabase.from("appointment_bookings").delete().eq("id", id);
  if (error) throw error;
  return true;
};
const getPublicReviews = async () => {
  const { data, error } = await supabase.from("reviews").select("*").eq("is_approved", true).order("created_at", { ascending: false });
  if (error) throw error;
  return data || [];
};
const submitReview = async (review) => {
  console.log("Submitting review:", review);
  try {
    const { data, error } = await supabase.from("reviews").insert([review]).select().single();
    if (error) {
      console.error("Review submission error:", error);
      console.error("Error details:", error.message, error.code, error.hint);
      throw error;
    }
    console.log("Review submitted successfully:", data);
    return data;
  } catch (err) {
    console.error("Review submission caught error:", err);
    throw err;
  }
};
const getPublicVideos = async () => {
  const { data, error } = await supabase.from("videos").select("*").eq("is_published", true).order("created_at", { ascending: false });
  if (error) throw error;
  return data || [];
};
const submitContactForm = async (contact) => {
  const { data, error } = await supabase.from("contact_submissions").insert([contact]).select().single();
  if (error) throw error;
  return data;
};
const submitAppointmentBooking = async (booking) => {
  console.log("Submitting appointment booking:", booking);
  try {
    const { data, error } = await supabase.from("appointment_bookings").insert([booking]).select().single();
    if (error) {
      console.error("Appointment booking submission error:", error);
      console.error("Error details:", error.message, error.code, error.hint);
      throw error;
    }
    console.log("Appointment booking submitted successfully:", data);
    return data;
  } catch (err) {
    console.error("Appointment booking submission caught error:", err);
    throw err;
  }
};
const getPublicBlogs = async () => {
  const { data, error } = await supabase.from("blogs").select("*").eq("is_published", true).order("created_at", { ascending: false });
  if (error) throw error;
  return data || [];
};
const getPublicBlogBySlug = async (slug) => {
  const { data, error } = await supabase.from("blogs").select("*").eq("seo_slug", slug).eq("is_published", true).single();
  if (error) throw error;
  return data;
};
export {
  approveReview as a,
  createVideo as b,
  createBlog as c,
  createVideoWithFile as d,
  deleteAppointmentBooking as e,
  deleteBlog as f,
  deleteContactSubmission as g,
  deleteReview as h,
  deleteVideo as i,
  getAdminAppointmentBookings as j,
  getAdminBlogs as k,
  getAdminContactSubmissions as l,
  getAdminReviews as m,
  getAdminVideos as n,
  getPublicBlogBySlug as o,
  getPublicBlogs as p,
  getPublicReviews as q,
  getPublicVideos as r,
  submitAppointmentBooking as s,
  submitContactForm as t,
  submitReview as u,
  supabase$1 as v,
  updateAppointmentStatus as w,
  updateBlog as x,
  updateVideo as y,
  updateVideoWithFile as z
};
