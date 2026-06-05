// src/api/adminApi.ts
import { supabase } from '../lib/supabase'

const getAuthHeader = async () => {
    const { data: { session } } = await supabase.auth.getSession()
    return { Authorization: `Bearer ${session?.access_token}` }
}

// Videos
export const getAdminVideos = async () => {
    const { data, error } = await supabase
        .from('videos')
        .select('*')
        .order('created_at', { ascending: false })

    if (error) throw error
    return data || []
}

export const createVideo = async (video: any) => {
    const { data, error } = await supabase
        .from('videos')
        .insert([video])
        .select()
        .single()

    if (error) throw error
    return data
}

export const updateVideo = async (id: string, updates: any) => {
    const { data, error } = await supabase
        .from('videos')
        .update(updates)
        .eq('id', id)
        .select()
        .single()

    if (error) throw error
    return data
}

export const deleteVideo = async (id: string) => {
    const { error } = await supabase
        .from('videos')
        .delete()
        .eq('id', id)

    if (error) throw error
    return true
}

// File upload versions
export const createVideoWithFile = async (form: any) => {
    const formData = new FormData()
    formData.append('title', form.title)
    formData.append('description', form.description || '')
    formData.append('category', form.category || 'general')
    formData.append('is_published', String(form.is_published))
    formData.append('thumbnail_url', form.thumbnail_url || '')
    formData.append('upload_source', 'file')
    if (form.video_file) formData.append('video_file', form.video_file)
    if (form._thumbnail_file) formData.append('thumbnail_file', form._thumbnail_file)

    const { data: { session } } = await supabase.auth.getSession()
    const res = await fetch('http://localhost:4000/api/admin/videos/upload', {
        method: 'POST',
        headers: { Authorization: `Bearer ${session?.access_token}` },
        body: formData,
    })

    if (!res.ok) {
        const error = await res.json().catch(() => ({}))
        throw new Error(error.message || 'Upload failed')
    }
    return res.json()
}

export const updateVideoWithFile = async (id: string, form: any) => {
    const formData = new FormData()
    formData.append('title', form.title)
    formData.append('description', form.description || '')
    formData.append('category', form.category || 'general')
    formData.append('is_published', String(form.is_published))
    formData.append('thumbnail_url', form.thumbnail_url || '')
    formData.append('upload_source', 'file')
    if (form.video_file) formData.append('video_file', form.video_file)
    if (form._thumbnail_file) formData.append('thumbnail_file', form._thumbnail_file)

    const { data: { session } } = await supabase.auth.getSession()
    const res = await fetch(`http://localhost:4000/api/admin/videos/${id}/upload`, {
        method: 'PUT',
        headers: { Authorization: `Bearer ${session?.access_token}` },
        body: formData,
    })

    if (!res.ok) {
        const error = await res.json().catch(() => ({}))
        throw new Error(error.message || 'Update failed')
    }
    return res.json()
}

// Reviews
export const getAdminReviews = async () => {
    const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .order('created_at', { ascending: false })

    if (error) throw error
    return data || []
}

export const approveReview = async (id: string) => {
    const { data, error } = await supabase
        .from('reviews')
        .update({ is_approved: true })
        .eq('id', id)
        .select()
        .single()

    if (error) throw error
    return data
}

export const deleteReview = async (id: string) => {
    const { error } = await supabase
        .from('reviews')
        .delete()
        .eq('id', id)

    if (error) throw error
    return true
}