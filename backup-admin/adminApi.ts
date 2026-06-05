import axios from 'axios'

const BASE = 'http://localhost:4000/api'

const api = axios.create({ baseURL: BASE })

api.interceptors.request.use((config) => {
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem('admin_token')
        if (token) config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

export const loginAdmin = (email: string, password: string) =>
    api.post('/auth/login', { email, password }).then(r => r.data)

export const getAdminVideos = () =>
    api.get('/admin/videos').then(r => r.data)

export const createVideo = (data: any) =>
    api.post('/admin/videos', data).then(r => r.data)

export const updateVideo = (id: string, data: any) =>
    api.put(`/admin/videos/${id}`, data).then(r => r.data)

export const deleteVideo = (id: string) =>
    api.delete(`/admin/videos/${id}`).then(r => r.data)

export const getAdminReviews = () =>
    api.get('/admin/reviews').then(r => r.data)

export const approveReview = (id: string) =>
    api.put(`/admin/reviews/${id}/approve`).then(r => r.data)

export const deleteReview = (id: string) =>
    api.delete(`/admin/reviews/${id}`).then(r => r.data)

export const uploadImage = (file: File) => {
    const form = new FormData()
    form.append('file', file)
    return api.post('/admin/upload/image', form).then(r => r.data)
<<<<<<< HEAD
}

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

    const res = await fetch('http://localhost:4000/api/admin/videos/upload', {
        method: 'POST',
        headers: { Authorization: `Bearer ${localStorage.getItem('admin_token')}` },
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

    const res = await fetch(`http://localhost:4000/api/admin/videos/${id}/upload`, {
        method: 'PUT',
        headers: { Authorization: `Bearer ${localStorage.getItem('admin_token')}` },
        body: formData,
    })
    if (!res.ok) {
        const error = await res.json().catch(() => ({}))
        throw new Error(error.message || 'Update failed')
    }
    return res.json()
}