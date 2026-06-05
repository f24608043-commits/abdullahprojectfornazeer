import { useEffect, useState } from 'react'
import { getAdminVideos, getAdminReviews } from '../../api/adminApi'
<<<<<<< HEAD
import AdminLayout from './AdminLayout'
=======
>>>>>>> 7521fbb67a98c37ad8e36ff17587932e08c1893b

export default function AdminDashboard() {
    const [videos, setVideos] = useState<any[]>([])
    const [reviews, setReviews] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
<<<<<<< HEAD
    const admin = JSON.parse(typeof window !== 'undefined' ? localStorage.getItem('admin_user') || '{}' : '{}')
=======
>>>>>>> 7521fbb67a98c37ad8e36ff17587932e08c1893b

    useEffect(() => {
        Promise.all([
            getAdminVideos().catch(() => []),
            getAdminReviews().catch(() => []),
        ]).then(([v, r]) => {
            setVideos(v)
            setReviews(r)
            setLoading(false)
        })
    }, [])

    const pending = reviews.filter(r => !r.is_approved).length
<<<<<<< HEAD
    const published = videos.filter(v => v.is_published).length

    const cards = [
        { label: 'Total Videos', value: videos.length, icon: '🎬', color: '#2563eb', bg: 'rgba(37,99,235,0.1)', border: 'rgba(37,99,235,0.2)' },
        { label: 'Published', value: published, icon: '✅', color: '#16a34a', bg: 'rgba(22,163,74,0.1)', border: 'rgba(22,163,74,0.2)' },
        { label: 'Total Reviews', value: reviews.length, icon: '⭐', color: '#7c3aed', bg: 'rgba(124,58,237,0.1)', border: 'rgba(124,58,237,0.2)' },
        { label: 'Pending Approval', value: pending, icon: '⏳', color: '#dc2626', bg: 'rgba(220,38,38,0.1)', border: 'rgba(220,38,38,0.2)' },
    ]

    const content = (
        <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>
                    Welcome back, {admin.name || 'Admin'} 👋
                </h1>
                <p style={{ color: '#64748b', marginTop: '0.375rem', fontSize: '0.95rem' }}>
                    Here is what is happening with your website today.
                </p>
            </div>
            {loading ? (
                <div style={{ color: '#64748b', padding: '2rem', textAlign: 'center' }}>Loading...</div>
            ) : (
                <>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                        {cards.map(card => (
                            <div key={card.label} style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: card.bg, border: `1px solid ${card.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>
                                    {card.icon}
                                </div>
                                <div>
                                    <div style={{ fontSize: '1.75rem', fontWeight: 700, color: card.color, lineHeight: 1 }}>{card.value}</div>
                                    <div style={{ color: '#64748b', fontSize: '0.82rem', marginTop: '0.3rem' }}>{card.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
                        <div style={{ background: 'white', borderRadius: '16px', padding: '1.5rem', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
                            <h2 style={{ fontSize: '1rem', fontWeight: 600, color: '#0f172a', marginBottom: '1rem', marginTop: 0 }}>Quick Actions</h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <a href="/admin/videos" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', background: 'rgba(37,99,235,0.06)', borderRadius: '10px', textDecoration: 'none', color: '#2563eb', fontSize: '0.9rem', fontWeight: 500, border: '1px solid rgba(37,99,235,0.15)' }}>
                                    🎬 Add New Video
                                </a>
                                <a href="/admin/reviews" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', background: 'rgba(124,58,237,0.06)', borderRadius: '10px', textDecoration: 'none', color: '#7c3aed', fontSize: '0.9rem', fontWeight: 500, border: '1px solid rgba(124,58,237,0.15)' }}>
                                    ⭐ Manage Reviews
                                    {pending > 0 && <span style={{ marginLeft: 'auto', background: '#dc2626', color: 'white', borderRadius: '20px', padding: '0.1rem 0.5rem', fontSize: '0.75rem' }}>{pending} pending</span>}
                                </a>
                            </div>
                        </div>
                        <div style={{ background: 'white', borderRadius: '16px', padding: '1.5rem', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
                            <h2 style={{ fontSize: '1rem', fontWeight: 600, color: '#0f172a', marginBottom: '1rem', marginTop: 0 }}>
                                Pending Reviews
                                {pending > 0 && <span style={{ marginLeft: '0.5rem', background: '#dc2626', color: 'white', borderRadius: '20px', padding: '0.1rem 0.5rem', fontSize: '0.75rem' }}>{pending}</span>}
                            </h2>
                            {reviews.filter(r => !r.is_approved).length === 0 ? (
                                <p style={{ color: '#94a3b8', fontSize: '0.875rem', margin: 0 }}>All caught up!</p>
                            ) : (
                                reviews.filter(r => !r.is_approved).slice(0, 3).map(r => (
                                    <div key={r.id} style={{ padding: '0.75rem', borderRadius: '10px', background: '#fef9c3', marginBottom: '0.5rem', borderLeft: '3px solid #f59e0b' }}>
                                        <div style={{ fontWeight: 600, fontSize: '0.875rem', color: '#92400e' }}>{r.author_name}</div>
                                        <div style={{ color: '#78350f', fontSize: '0.8rem', marginTop: '0.2rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r.comment}</div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                    <div style={{ background: 'white', borderRadius: '16px', padding: '1.5rem', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                            <h2 style={{ fontSize: '1rem', fontWeight: 600, color: '#0f172a', margin: 0 }}>Recent Videos</h2>
                            <a href="/admin/videos" style={{ fontSize: '0.85rem', color: '#2563eb', textDecoration: 'none' }}>View all</a>
                        </div>
                        {videos.length === 0 ? (
                            <p style={{ color: '#94a3b8', fontSize: '0.875rem', margin: 0 }}>No videos yet.</p>
                        ) : (
                            videos.slice(0, 5).map(v => (
                                <div key={v.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid #f1f5f9' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(37,99,235,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}>🎬</div>
                                        <div>
                                            <div style={{ fontSize: '0.875rem', fontWeight: 500, color: '#0f172a' }}>{v.title}</div>
                                            <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{v.category}</div>
                                        </div>
                                    </div>
                                    <span style={{ padding: '0.2rem 0.6rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 500, background: v.is_published ? '#dcfce7' : '#fef9c3', color: v.is_published ? '#16a34a' : '#a16207' }}>
                                        {v.is_published ? 'Published' : 'Draft'}
                                    </span>
                                </div>
                            ))
                        )}
                    </div>
                </>
            )}
        </div>
    )

    return <AdminLayout>{content}</AdminLayout>
=======

    const cards = [
        { label: 'Total Videos', value: videos.length, color: '#2563eb' },
        { label: 'Published Videos', value: videos.filter(v => v.is_published).length, color: '#16a34a' },
        { label: 'Total Reviews', value: reviews.length, color: '#7c3aed' },
        { label: 'Pending Approval', value: pending, color: '#dc2626' },
    ]

    if (loading) {
        return (
            <div style={{ padding: '2rem', color: '#64748b' }}>Loading dashboard...</div>
        )
    }

    return (
        <div style={{ padding: '2rem' }}>
            <h1 style={{ marginBottom: '0.5rem', fontSize: '1.75rem', fontWeight: 700 }}>Dashboard</h1>
            <p style={{ color: '#64748b', marginBottom: '2rem' }}>
                Welcome back. Here's what's happening on your site.
            </p>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                    gap: '1rem',
                    marginBottom: '2rem',
                }}
            >
                {cards.map(card => (
                    <div
                        key={card.label}
                        style={{
                            background: 'white',
                            padding: '1.5rem',
                            borderRadius: '12px',
                            boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                            borderTop: `4px solid ${card.color}`,
                        }}
                    >
                        <div style={{ fontSize: '2rem', fontWeight: 700, color: card.color }}>
                            {card.value}
                        </div>
                        <div style={{ color: '#64748b', fontSize: '0.9rem', marginTop: '0.25rem' }}>
                            {card.label}
                        </div>
                    </div>
                ))}
            </div>

            <div
                style={{
                    background: 'white',
                    borderRadius: '12px',
                    padding: '1.5rem',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                }}
            >
                <h2 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1rem' }}>
                    Recent Reviews Pending Approval
                </h2>
                {reviews.filter(r => !r.is_approved).length === 0 ? (
                    <p style={{ color: '#94a3b8' }}>No pending reviews. All caught up!</p>
                ) : (
                    reviews
                        .filter(r => !r.is_approved)
                        .slice(0, 3)
                        .map(r => (
                            <div
                                key={r.id}
                                style={{
                                    padding: '0.75rem',
                                    borderRadius: '8px',
                                    background: '#fef9c3',
                                    marginBottom: '0.5rem',
                                    borderLeft: '4px solid #f59e0b',
                                }}
                            >
                                <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{r.author_name}</div>
                                <div style={{ color: '#475569', fontSize: '0.85rem', marginTop: '0.2rem' }}>
                                    {r.comment}
                                </div>
                            </div>
                        ))
                )}
            </div>
        </div>
    )
>>>>>>> 7521fbb67a98c37ad8e36ff17587932e08c1893b
}