// src/pages/admin/AdminBlogs.tsx
import { useEffect, useState } from 'react'
import {
    getAdminBlogs,
    createBlog,
    updateBlog,
    deleteBlog
} from '../../api/adminApi'
import AdminLayout from './AdminLayout'

interface BlogForm {
    title: string
    seo_slug: string
    html_content: string
    title_image_url: string
    excerpt: string
    is_published: boolean
}

const emptyForm: BlogForm = {
    title: '',
    seo_slug: '',
    html_content: '',
    title_image_url: '',
    excerpt: '',
    is_published: false,
}

export default function AdminBlogs() {
    const [blogs, setBlogs] = useState<any[]>([])
    const [form, setForm] = useState<BlogForm>(emptyForm)
    const [editId, setEditId] = useState<string | null>(null)
    const [showForm, setShowForm] = useState(false)
    const [loading, setLoading] = useState(false)
    const [pageLoading, setPageLoading] = useState(true)

    const load = async () => {
        try {
            const data = await getAdminBlogs()
            setBlogs(data)
        } catch (err) {
            console.error('Failed to load blogs', err)
        } finally {
            setPageLoading(false)
        }
    }

    useEffect(() => {
        load()
    }, [])

    const generateSlug = (title: string) => {
        return title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '')
    }

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTitle = e.target.value
        setForm({
            ...form,
            title: newTitle,
            seo_slug: editId ? form.seo_slug : generateSlug(newTitle)
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            if (editId) {
                await updateBlog(editId, {
                    title: form.title,
                    seo_slug: form.seo_slug,
                    html_content: form.html_content,
                    title_image_url: form.title_image_url,
                    excerpt: form.excerpt,
                    is_published: form.is_published,
                })
            } else {
                await createBlog({
                    title: form.title,
                    seo_slug: form.seo_slug,
                    html_content: form.html_content,
                    title_image_url: form.title_image_url,
                    excerpt: form.excerpt,
                    is_published: form.is_published,
                })
            }
            setForm(emptyForm)
            setEditId(null)
            setShowForm(false)
            load()
        } catch (err: any) {
            console.error('Failed to save blog', err)
            alert(err.message || 'Failed to save blog')
        } finally {
            setLoading(false)
        }
    }

    const handleEdit = (blog: any) => {
        setForm({
            title: blog.title,
            seo_slug: blog.seo_slug,
            html_content: blog.html_content,
            title_image_url: blog.title_image_url || '',
            excerpt: blog.excerpt || '',
            is_published: blog.is_published,
        })
        setEditId(blog.id)
        setShowForm(true)
    }

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this blog?')) return

        try {
            await deleteBlog(id)
            load()
        } catch (err: any) {
            console.error('Failed to delete blog', err)
            alert(err.message || 'Failed to delete blog')
        }
    }

    const handleCancel = () => {
        setForm(emptyForm)
        setEditId(null)
        setShowForm(false)
    }

    if (pageLoading) {
        return (
            <AdminLayout>
                <div className="p-8">
                    <div className="text-center">Loading...</div>
                </div>
            </AdminLayout>
        )
    }

    return (
        <AdminLayout>
            <div className="p-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">Blogs Management</h1>
                    {!showForm && (
                        <button
                            onClick={() => setShowForm(true)}
                            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                        >
                            Add New Blog
                        </button>
                    )}
                </div>

                {showForm ? (
                    <div className="bg-white rounded-lg shadow p-6 mb-8">
                        <h2 className="text-xl font-semibold mb-6">
                            {editId ? 'Edit Blog' : 'Add New Blog'}
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Title *
                                </label>
                                <input
                                    type="text"
                                    value={form.title}
                                    onChange={handleTitleChange}
                                    required
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter blog title"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    SEO Slug *
                                </label>
                                <input
                                    type="text"
                                    value={form.seo_slug}
                                    onChange={(e) => setForm({ ...form, seo_slug: e.target.value })}
                                    required
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="blog-url-slug"
                                />
                                <p className="text-xs text-gray-500 mt-1">
                                    This will be used in the URL: /blog/{form.seo_slug}
                                </p>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Title Image URL
                                </label>
                                <input
                                    type="url"
                                    value={form.title_image_url}
                                    onChange={(e) => setForm({ ...form, title_image_url: e.target.value })}
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="https://example.com/image.jpg"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Excerpt
                                </label>
                                <textarea
                                    value={form.excerpt}
                                    onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                                    rows={3}
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Short summary of the blog post..."
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    HTML Content *
                                </label>
                                <textarea
                                    value={form.html_content}
                                    onChange={(e) => setForm({ ...form, html_content: e.target.value })}
                                    required
                                    rows={15}
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
                                    placeholder="<h2>Your Heading</h2><p>Your content here...</p>"
                                />
                                <p className="text-xs text-gray-500 mt-1">
                                    Enter your blog content in HTML format
                                </p>
                            </div>

                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="is_published"
                                    checked={form.is_published}
                                    onChange={(e) => setForm({ ...form, is_published: e.target.checked })}
                                    className="w-4 h-4 text-blue-600 rounded"
                                />
                                <label htmlFor="is_published" className="text-sm font-medium">
                                    Publish immediately
                                </label>
                            </div>

                            <div className="flex gap-4">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
                                >
                                    {loading ? 'Saving...' : editId ? 'Update Blog' : 'Create Blog'}
                                </button>
                                <button
                                    type="button"
                                    onClick={handleCancel}
                                    className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                ) : null}

                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Title
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Slug
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Date
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {blogs.map((blog) => (
                                <tr key={blog.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-medium text-gray-900">
                                            {blog.title}
                                        </div>
                                        {blog.title_image_url && (
                                            <img
                                                src={blog.title_image_url}
                                                alt=""
                                                className="h-10 w-10 object-cover rounded mt-2"
                                            />
                                        )}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-500">
                                            {blog.seo_slug}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 py-1 text-xs rounded-full ${
                                            blog.is_published
                                                ? 'bg-green-100 text-green-800'
                                                : 'bg-yellow-100 text-yellow-800'
                                        }`}>
                                            {blog.is_published ? 'Published' : 'Draft'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {new Date(blog.created_at).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button
                                            onClick={() => handleEdit(blog)}
                                            className="text-blue-600 hover:text-blue-900 mr-4"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(blog.id)}
                                            className="text-red-600 hover:text-red-900"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {blogs.length === 0 && (
                        <div className="text-center py-12 text-gray-500">
                            No blogs yet. Click "Add New Blog" to create one.
                        </div>
                    )}
                </div>
            </div>
        </AdminLayout>
    )
}
