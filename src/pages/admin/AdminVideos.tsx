// src/pages/admin/AdminVideos.tsx
import { useEffect, useState } from 'react'
import {
    getAdminVideos,
    createVideo,
    updateVideo,
    deleteVideo,
    createVideoWithFile,
    updateVideoWithFile
} from '../../api/adminApi'
import AdminLayout from './AdminLayout'

interface VideoForm {
    title: string
    description: string
    youtube_url: string
    thumbnail_url: string
    category: string
    is_published: boolean
    video_file?: File | null
    _thumbnail_file?: File | null
    upload_source: 'youtube' | 'file'
}

const emptyForm: VideoForm = {
    title: '',
    description: '',
    youtube_url: '',
    thumbnail_url: '',
    category: 'general',
    is_published: true,
    video_file: null,
    _thumbnail_file: null,
    upload_source: 'youtube',
}

export default function AdminVideos() {
    const [videos, setVideos] = useState<any[]>([])
    const [form, setForm] = useState<VideoForm>(emptyForm)
    const [editId, setEditId] = useState<string | null>(null)
    const [showForm, setShowForm] = useState(false)
    const [loading, setLoading] = useState(false)
    const [pageLoading, setPageLoading] = useState(true)

    const load = async () => {
        try {
            const data = await getAdminVideos()
            setVideos(data)
        } catch (err) {
            console.error('Failed to load videos', err)
        } finally {
            setPageLoading(false)
        }
    }

    useEffect(() => {
        load()
    }, [])

    // Cleanup object URLs on unmount
    useEffect(() => {
        return () => {
            if (form.thumbnail_url && !form.thumbnail_url.startsWith('http')) {
                URL.revokeObjectURL(form.thumbnail_url)
            }
        }
    }, [form.thumbnail_url])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            if (editId) {
                // Editing existing video
                if (form.upload_source === 'file' && form.video_file) {
                    await updateVideoWithFile(editId, form)
                } else {
                    await updateVideo(editId, {
                        title: form.title,
                        description: form.description,
                        youtube_url: form.youtube_url,
                        thumbnail_url: form.thumbnail_url,
                        category: form.category,
                        is_published: form.is_published,
                    })
                }
            } else {
                // Creating new video
                if (form.upload_source === 'file' && form.video_file) {
                    await createVideoWithFile(form)
                } else {
                    await createVideo({
                        title: form.title,
                        description: form.description,
                        youtube_url: form.youtube_url,
                        thumbnail_url: form.thumbnail_url,
                        category: form.category,
                        is_published: form.is_published,
                    })
                }
            }
            setForm(emptyForm)
            setEditId(null)
            setShowForm(false)
            await load()
        } catch (err: any) {
            console.error('Failed to save video', err)
            alert(err.message || 'Failed to save video. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    const handleEdit = (v: any) => {
        setForm({
            title: v.title || '',
            description: v.description || '',
            youtube_url: v.youtube_url || '',
            thumbnail_url: v.thumbnail_url || '',
            category: v.category || 'general',
            is_published: v.is_published ?? true,
            video_file: null,
            _thumbnail_file: null,
            upload_source: v.youtube_url ? 'youtube' : 'file',
        })
        setEditId(v.id)
        setShowForm(true)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this video?')) return
        try {
            await deleteVideo(id)
            await load()
        } catch (err) {
            console.error('Failed to delete video', err)
        }
    }

    const handleTogglePublish = async (v: any) => {
        try {
            await updateVideo(v.id, { is_published: !v.is_published })
            await load()
        } catch (err) {
            console.error('Failed to toggle publish', err)
        }
    }

    const handleCancel = () => {
        // Clean up object URLs to avoid memory leaks
        if (form.thumbnail_url && !form.thumbnail_url.startsWith('http')) {
            URL.revokeObjectURL(form.thumbnail_url)
        }
        setForm(emptyForm)
        setEditId(null)
        setShowForm(false)
    }

    const inputStyle = {
        width: '100%',
        padding: '0.6rem 0.75rem',
        border: '1px solid #e2e8f0',
        borderRadius: '8px',
        fontSize: '1rem',
        boxSizing: 'border-box' as const,
        outline: 'none',
    }

    const labelStyle = {
        display: 'block',
        marginBottom: '0.3rem',
        fontWeight: 500,
        fontSize: '0.9rem',
        color: '#374151',
    }

    return (
        <AdminLayout>
            <div style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <h1 style={{ fontSize: '1.75rem', fontWeight: 700 }}>Videos</h1>
                    <button
                        onClick={() => {
                            if (showForm) {
                                handleCancel()
                            } else {
                                setForm(emptyForm)
                                setEditId(null)
                                setShowForm(true)
                            }
                        }}
                        style={{
                            padding: '0.6rem 1.2rem',
                            background: showForm ? '#64748b' : '#2563eb',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontWeight: 500,
                            fontSize: '0.95rem',
                        }}
                    >
                        {showForm ? 'Cancel' : '+ Add Video'}
                    </button>
                </div>

                {showForm && (
                    <div style={{
                        background: 'white', padding: '1.75rem', borderRadius: '12px',
                        marginBottom: '2rem', boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                        border: '1px solid #e2e8f0',
                    }}>
                        <h2 style={{ marginBottom: '1.25rem', fontSize: '1.2rem', fontWeight: 600 }}>
                            {editId ? 'Edit Video' : 'Add New Video'}
                        </h2>

                        {/* 🔘 Source Toggle */}
                        <div style={{
                            marginBottom: '1.5rem',
                            display: 'flex',
                            gap: '0.5rem',
                            background: '#f1f5f9',
                            padding: '0.25rem',
                            borderRadius: '10px',
                            width: 'fit-content'
                        }}>
                            <button
                                type="button"
                                onClick={() => setForm(f => ({ ...f, upload_source: 'youtube', video_file: null, _thumbnail_file: null }))}
                                style={{
                                    padding: '0.5rem 1.25rem', borderRadius: '8px', border: 'none',
                                    background: form.upload_source === 'youtube' ? '#2563eb' : 'transparent',
                                    color: form.upload_source === 'youtube' ? 'white' : '#64748b',
                                    fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer',
                                    transition: 'all 0.2s',
                                }}
                            >
                                📺 YouTube URL
                            </button>
                            <button
                                type="button"
                                onClick={() => setForm(f => ({ ...f, upload_source: 'file', youtube_url: '' }))}
                                style={{
                                    padding: '0.5rem 1.25rem', borderRadius: '8px', border: 'none',
                                    background: form.upload_source === 'file' ? '#2563eb' : 'transparent',
                                    color: form.upload_source === 'file' ? 'white' : '#64748b',
                                    fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer',
                                    transition: 'all 0.2s',
                                }}
                            >
                                💾 Upload from Device
                            </button>
                        </div>

                        <form onSubmit={handleSubmit}>
                            {/* Title */}
                            <div style={{ marginBottom: '1rem' }}>
                                <label style={labelStyle}>Title *</label>
                                <input type="text" style={inputStyle} value={form.title}
                                    onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
                                    required placeholder="Enter video title" />
                            </div>

                            {/* Description */}
                            <div style={{ marginBottom: '1rem' }}>
                                <label style={labelStyle}>Description</label>
                                <textarea style={{ ...inputStyle, resize: 'vertical' }} value={form.description}
                                    onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
                                    rows={3} placeholder="Enter video description" />
                            </div>

                            {/* 🔀 Conditional: YouTube OR File Upload */}
                            {form.upload_source === 'youtube' ? (
                                <>
                                    <div style={{ marginBottom: '1rem' }}>
                                        <label style={labelStyle}>YouTube URL *</label>
                                        <input type="url" style={inputStyle} value={form.youtube_url}
                                            onChange={e => setForm(f => ({ ...f, youtube_url: e.target.value }))}
                                            required={form.upload_source === 'youtube'}
                                            placeholder="https://www.youtube.com/watch?v=..." />
                                    </div>
                                    <div style={{ marginBottom: '1rem' }}>
                                        <label style={labelStyle}>Thumbnail URL</label>
                                        <input type="url" style={inputStyle} value={form.thumbnail_url}
                                            onChange={e => setForm(f => ({ ...f, thumbnail_url: e.target.value }))}
                                            placeholder="https://i.ytimg.com/vi/.../hqdefault.jpg" />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div style={{ marginBottom: '1rem' }}>
                                        <label style={labelStyle}>Upload Video File *</label>
                                        <input
                                            type="file"
                                            accept="video/mp4,video/webm,video/ogg"
                                            style={{ ...inputStyle, padding: '0.4rem', background: '#f8fafc' }}
                                            onChange={e => setForm(f => ({ ...f, video_file: e.target.files?.[0] || null }))}
                                            required={form.upload_source === 'file' && !editId}
                                        />
                                        <small style={{ color: '#64748b', fontSize: '0.75rem', marginTop: '0.25rem', display: 'block' }}>
                                            Accepted: MP4, WebM, OGG (Max: 500MB)
                                        </small>
                                        {form.video_file && (
                                            <div style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: '#16a34a' }}>
                                                ✓ Selected: {form.video_file.name} ({(form.video_file.size / 1024 / 1024).toFixed(2)} MB)
                                            </div>
                                        )}
                                    </div>

                                    <div style={{ marginBottom: '1rem' }}>
                                        <label style={labelStyle}>Thumbnail Image (Optional)</label>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            style={{ ...inputStyle, padding: '0.4rem', background: '#f8fafc' }}
                                            onChange={e => {
                                                const file = e.target.files?.[0]
                                                if (file) {
                                                    const previewUrl = URL.createObjectURL(file)
                                                    setForm(f => ({ ...f, thumbnail_url: previewUrl, _thumbnail_file: file }))
                                                }
                                            }}
                                        />
                                        {form.thumbnail_url && !form.thumbnail_url.startsWith('http') && (
                                            <img src={form.thumbnail_url} alt="Preview"
                                                style={{ marginTop: '0.5rem', maxWidth: '200px', borderRadius: '8px', border: '1px solid #e2e8f0' }}
                                                onLoad={(e) => URL.revokeObjectURL((e.target as HTMLImageElement).src)}
                                            />
                                        )}
                                    </div>
                                </>
                            )}

                            {/* Category */}
                            <div style={{ marginBottom: '1rem' }}>
                                <label style={labelStyle}>Category</label>
                                <input type="text" style={inputStyle} value={form.category}
                                    onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
                                    placeholder="e.g. general, orthodontics, hygiene" />
                            </div>

                            {/* Published Checkbox */}
                            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', cursor: 'pointer' }}>
                                <input type="checkbox" checked={form.is_published}
                                    onChange={e => setForm(f => ({ ...f, is_published: e.target.checked }))}
                                    style={{ width: '16px', height: '16px' }} />
                                <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>Published (visible on website)</span>
                            </label>

                            {/* Action Buttons */}
                            <div style={{ display: 'flex', gap: '0.75rem' }}>
                                <button type="submit" disabled={loading} style={{
                                    padding: '0.7rem 2rem', background: '#2563eb', color: 'white',
                                    border: 'none', borderRadius: '8px', cursor: loading ? 'not-allowed' : 'pointer',
                                    fontWeight: 500, opacity: loading ? 0.7 : 1,
                                }}>
                                    {loading ? (form.upload_source === 'file' ? 'Uploading...' : 'Saving...') : editId ? 'Save Changes' : 'Add Video'}
                                </button>
                                <button type="button" onClick={handleCancel} style={{
                                    padding: '0.7rem 1.5rem', background: '#f1f5f9', color: '#475569',
                                    border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 500,
                                }}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {/* Videos Table */}
                <div style={{
                    background: 'white', borderRadius: '12px', boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                    overflow: 'hidden', border: '1px solid #e2e8f0',
                }}>
                    {pageLoading ? (
                        <div style={{ padding: '3rem', textAlign: 'center', color: '#94a3b8' }}>
                            Loading videos...
                        </div>
                    ) : videos.length === 0 ? (
                        <div style={{ padding: '3rem', textAlign: 'center', color: '#94a3b8' }}>
                            No videos yet. Click <strong>+ Add Video</strong> to get started.
                        </div>
                    ) : (
                        <div style={{ overflowX: 'auto' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead>
                                    <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                                        {['Title', 'Category', 'Status', 'Actions'].map(h => (
                                            <th key={h} style={{
                                                padding: '0.75rem 1rem', textAlign: 'left', fontSize: '0.85rem',
                                                fontWeight: 600, color: '#64748b',
                                            }}>
                                                {h}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {videos.map((v, i) => (
                                        <tr key={v.id} style={{
                                            borderBottom: i < videos.length - 1 ? '1px solid #f1f5f9' : 'none',
                                        }}>
                                            <td style={{ padding: '0.85rem 1rem' }}>
                                                <div style={{ fontWeight: 500, color: '#1e293b' }}>{v.title}</div>
                                                {v.youtube_url && (
                                                    <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '0.15rem' }}>
                                                        📺 YouTube
                                                    </div>
                                                )}
                                                {v.video_url && !v.youtube_url && (
                                                    <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '0.15rem' }}>
                                                        💾 Local File
                                                    </div>
                                                )}
                                                {v.description && (
                                                    <div style={{
                                                        fontSize: '0.82rem', color: '#64748b', marginTop: '0.15rem',
                                                        maxWidth: '300px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                                                    }}>
                                                        {v.description}
                                                    </div>
                                                )}
                                            </td>
                                            <td style={{ padding: '0.85rem 1rem', color: '#64748b', fontSize: '0.9rem' }}>
                                                {v.category}
                                            </td>
                                            <td style={{ padding: '0.85rem 1rem' }}>
                                                <span style={{
                                                    padding: '0.25rem 0.65rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 500,
                                                    background: v.is_published ? '#dcfce7' : '#fef9c3',
                                                    color: v.is_published ? '#16a34a' : '#a16207',
                                                }}>
                                                    {v.is_published ? 'Published' : 'Draft'}
                                                </span>
                                            </td>
                                            <td style={{ padding: '0.85rem 1rem' }}>
                                                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                                    <button onClick={() => handleEdit(v)} style={{
                                                        padding: '0.3rem 0.8rem', background: '#f1f5f9', border: 'none',
                                                        borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem', color: '#475569',
                                                    }}>
                                                        Edit
                                                    </button>
                                                    <button onClick={() => handleTogglePublish(v)} style={{
                                                        padding: '0.3rem 0.8rem',
                                                        background: v.is_published ? '#fef9c3' : '#dcfce7',
                                                        border: 'none', borderRadius: '6px', cursor: 'pointer',
                                                        fontSize: '0.85rem', color: v.is_published ? '#a16207' : '#16a34a',
                                                    }}>
                                                        {v.is_published ? 'Unpublish' : 'Publish'}
                                                    </button>
                                                    <button onClick={() => handleDelete(v.id)} style={{
                                                        padding: '0.3rem 0.8rem', background: '#fee2e2', color: '#dc2626',
                                                        border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem',
                                                    }}>
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </AdminLayout>
    )
}