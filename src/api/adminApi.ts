// src/api/adminApi.ts
import { supabase } from "../lib/supabase";

const getAuthHeader = async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  return { Authorization: `Bearer ${session?.access_token}` };
};

// Videos
export const getAdminVideos = async () => {
  const { data, error } = await supabase
    .from("videos")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data || [];
};

export const createVideo = async (video: any) => {
  const { data, error } = await supabase.from("videos").insert([video]).select().single();

  if (error) throw error;
  return data;
};

export const updateVideo = async (id: string, updates: any) => {
  const { data, error } = await supabase
    .from("videos")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const deleteVideo = async (id: string) => {
  const { error } = await supabase.from("videos").delete().eq("id", id);

  if (error) throw error;
  return true;
};

// File upload versions using Supabase Storage
export const createVideoWithFile = async (form: any) => {
  try {
    let videoUrl = "";
    let thumbnailUrl = form.thumbnail_url || "";

    // Upload video file to Supabase Storage
    if (form.video_file) {
      const fileExt = form.video_file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("videos")
        .upload(filePath, form.video_file);

      if (uploadError) throw uploadError;

      // Get public URL
      const {
        data: { publicUrl },
      } = supabase.storage.from("videos").getPublicUrl(filePath);

      videoUrl = publicUrl;
    }

    // Upload thumbnail file to Supabase Storage
    if (form._thumbnail_file) {
      const fileExt = form._thumbnail_file.name.split(".").pop();
      const fileName = `thumb-${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("videos")
        .upload(filePath, form._thumbnail_file);

      if (uploadError) throw uploadError;

      // Get public URL
      const {
        data: { publicUrl },
      } = supabase.storage.from("videos").getPublicUrl(filePath);

      thumbnailUrl = publicUrl;
    }

    // Create video record in database
    const { data, error } = await supabase
      .from("videos")
      .insert([
        {
          title: form.title,
          description: form.description || "",
          category: form.category || "general",
          is_published: form.is_published,
          video_url: videoUrl,
          thumbnail_url: thumbnailUrl,
          upload_source: "file",
        },
      ])
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error: any) {
    console.error("Upload error:", error);
    throw new Error(error.message || "Upload failed");
  }
};

export const updateVideoWithFile = async (id: string, form: any) => {
  try {
    let videoUrl = form.video_url || "";
    let thumbnailUrl = form.thumbnail_url || "";

    // Upload new video file if provided
    if (form.video_file) {
      const fileExt = form.video_file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("videos")
        .upload(filePath, form.video_file);

      if (uploadError) throw uploadError;

      const {
        data: { publicUrl },
      } = supabase.storage.from("videos").getPublicUrl(filePath);

      videoUrl = publicUrl;
    }

    // Upload new thumbnail file if provided
    if (form._thumbnail_file) {
      const fileExt = form._thumbnail_file.name.split(".").pop();
      const fileName = `thumb-${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("videos")
        .upload(filePath, form._thumbnail_file);

      if (uploadError) throw uploadError;

      const {
        data: { publicUrl },
      } = supabase.storage.from("videos").getPublicUrl(filePath);

      thumbnailUrl = publicUrl;
    }

    // Update video record in database
    const { data, error } = await supabase
      .from("videos")
      .update({
        title: form.title,
        description: form.description || "",
        category: form.category || "general",
        is_published: form.is_published,
        video_url: videoUrl,
        thumbnail_url: thumbnailUrl,
        upload_source: "file",
      })
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error: any) {
    console.error("Update error:", error);
    throw new Error(error.message || "Update failed");
  }
};

// Reviews
export const getAdminReviews = async () => {
  const { data, error } = await supabase
    .from("reviews")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data || [];
};

export const approveReview = async (id: string) => {
  const { data, error } = await supabase
    .from("reviews")
    .update({ is_approved: true })
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const deleteReview = async (id: string) => {
  const { error } = await supabase.from("reviews").delete().eq("id", id);

  if (error) throw error;
  return true;
};

// Blogs
export const getAdminBlogs = async () => {
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data || [];
};

export const createBlog = async (blog: any) => {
  const { data, error } = await supabase.from("blogs").insert([blog]).select().single();

  if (error) throw error;
  return data;
};

export const updateBlog = async (id: string, updates: any) => {
  const { data, error } = await supabase
    .from("blogs")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const deleteBlog = async (id: string) => {
  const { error } = await supabase.from("blogs").delete().eq("id", id);

  if (error) throw error;
  return true;
};

// Contact Submissions
export const getAdminContactSubmissions = async () => {
  const { data, error } = await supabase
    .from("contact_submissions")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data || [];
};

export const deleteContactSubmission = async (id: string) => {
  const { error } = await supabase.from("contact_submissions").delete().eq("id", id);

  if (error) throw error;
  return true;
};

// Appointment Bookings
export const getAdminAppointmentBookings = async () => {
  const { data, error } = await supabase
    .from("appointment_bookings")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data || [];
};

export const updateAppointmentStatus = async (id: string, status: string) => {
  const { data, error } = await supabase
    .from("appointment_bookings")
    .update({ status })
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const deleteAppointmentBooking = async (id: string) => {
  const { error } = await supabase.from("appointment_bookings").delete().eq("id", id);

  if (error) throw error;
  return true;
};

// Public API functions (for public-facing pages)
export const getPublicReviews = async () => {
  const { data, error } = await supabase
    .from("reviews")
    .select("*")
    .eq("is_approved", true)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data || [];
};

export const submitReview = async (review: any) => {
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

export const getPublicVideos = async () => {
  const { data, error } = await supabase
    .from("videos")
    .select("*")
    .eq("is_published", true)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data || [];
};

export const submitContactForm = async (contact: any) => {
  const { data, error } = await supabase
    .from("contact_submissions")
    .insert([contact])
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const submitAppointmentBooking = async (booking: any) => {
  console.log("Submitting appointment booking:", booking);
  try {
    const { data, error } = await supabase
      .from("appointment_bookings")
      .insert([booking])
      .select()
      .single();

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

export const getPublicBlogs = async () => {
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("is_published", true)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data || [];
};

export const getPublicBlogBySlug = async (slug: string) => {
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("seo_slug", slug)
    .eq("is_published", true)
    .single();

  if (error) throw error;
  return data;
};
