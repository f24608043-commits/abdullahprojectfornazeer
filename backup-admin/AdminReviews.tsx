import { useEffect, useState } from 'react'
import { getAdminReviews, approveReview, deleteReview } from '../../api/adminApi'

type FilterType = 'all' | 'pending' | 'approved'

export default function AdminReviews() {
    const [reviews, setReviews] = useState<any[]>([])
    const [filter, setFilter] = useState<FilterType>('all')
    const [loading, setLoading] = useState(true)

    const load = async () => {
        try {
            const data = await getAdminReviews()
            setReviews(data)
        } catch (err) {
            console.error('Failed to load reviews', err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        load()
    }, [])

    const filtered = reviews.filter(r => {
        if (filter === 'pending') return !r.is_approved
        if (filter === 'approved') return r.is_approved
        return true
    })

    const handleApprove = async (id: string) => {
        try {
            await approveReview(id)
            await load()
        } catch (err) {
            console.error('Failed to approve review', err)
        }
    }

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this review?')) return
        try {
            await deleteReview(id)
            await load()
        } catch (err) {
            console.error('Failed to delete review', err)
        }
    }

    const pendingCount = reviews.filter(r => !r.is_approved).length

    return (
        <div style={{ padding: '2rem' }}>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1.5rem',
                    flexWrap: 'wrap',
                    gap: '1rem',
                }}
            >
                <div>
                    <h1 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.25rem' }}>Reviews</h1>
                    {pendingCount > 0 && (
                        <p style={{ color: '#f59e0b', fontSize: '0.9rem', fontWeight: 500 }}>
                            {pendingCount} review{pendingCount > 1 ? 's' : ''} waiting for approval
                        </p>
                    )}
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    {(['all', 'pending', 'approved'] as FilterType[]).map(f => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            style={{
                                padding: '0.4rem 1rem',
                                background: filter === f ? '#2563eb' : '#f1f5f9',
                                color: filter === f ? 'white' : '#475569',
                                border: 'none',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                fontSize: '0.9rem',
                                fontWeight: filter === f ? 500 : 400,
                                textTransform: 'capitalize',
                            }}
                        >
                            {f}
                            {f === 'pending' && pendingCount > 0 && (
                                <span
                                    style={{
                                        marginLeft: '0.4rem',
                                        background: filter === f ? 'rgba(255,255,255,0.3)' : '#f59e0b',
                                        color: filter === f ? 'white' : 'white',
                                        borderRadius: '10px',
                                        padding: '0 0.4rem',
                                        fontSize: '0.75rem',
                                    }}
                                >
                                    {pendingCount}
                                </span>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {loading ? (
                <div style={{ color: '#94a3b8', padding: '2rem' }}>Loading reviews...</div>
            ) : filtered.length === 0 ? (
                <div
                    style={{
                        background: 'white',
                        padding: '3rem',
                        textAlign: 'center',
                        color: '#94a3b8',
                        borderRadius: '12px',
                        border: '1px solid #e2e8f0',
                    }}
                >
                    No {filter === 'all' ? '' : filter} reviews found.
                </div>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {filtered.map(r => (
                        <div
                            key={r.id}
                            style={{
                                background: 'white',
                                padding: '1.25rem 1.5rem',
                                borderRadius: '12px',
                                boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                                borderLeft: `4px solid ${r.is_approved ? '#16a34a' : '#f59e0b'}`,
                                border: '1px solid #e2e8f0',
                                borderLeftWidth: '4px',
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start',
                                    flexWrap: 'wrap',
                                    gap: '1rem',
                                }}
                            >
                                <div style={{ flex: 1 }}>
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.75rem',
                                            marginBottom: '0.4rem',
                                        }}
                                    >
                                        <span style={{ fontWeight: 600, fontSize: '1rem' }}>{r.author_name}</span>
                                        <span
                                            style={{
                                                padding: '0.15rem 0.5rem',
                                                borderRadius: '12px',
                                                fontSize: '0.75rem',
                                                fontWeight: 500,
                                                background: r.is_approved ? '#dcfce7' : '#fef9c3',
                                                color: r.is_approved ? '#16a34a' : '#a16207',
                                            }}
                                        >
                                            {r.is_approved ? 'Approved' : 'Pending'}
                                        </span>
                                    </div>
                                    <div style={{ color: '#f59e0b', fontSize: '1rem', marginBottom: '0.4rem' }}>
                                        {'★'.repeat(r.rating)}
                                        <span style={{ color: '#e2e8f0' }}>{'★'.repeat(5 - r.rating)}</span>
                                    </div>
                                    <div style={{ color: '#374151', fontSize: '0.95rem', lineHeight: 1.5 }}>
                                        {r.comment}
                                    </div>
                                    <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.5rem' }}>
                                        {new Date(r.created_at).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                        })}
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
                                    {!r.is_approved && (
                                        <button
                                            onClick={() => handleApprove(r.id)}
                                            style={{
                                                padding: '0.4rem 1rem',
                                                background: '#dcfce7',
                                                color: '#16a34a',
                                                border: 'none',
                                                borderRadius: '8px',
                                                cursor: 'pointer',
                                                fontWeight: 500,
                                                fontSize: '0.9rem',
                                            }}
                                        >
                                            Approve
                                        </button>
                                    )}
                                    <button
                                        onClick={() => handleDelete(r.id)}
                                        style={{
                                            padding: '0.4rem 1rem',
                                            background: '#fee2e2',
                                            color: '#dc2626',
                                            border: 'none',
                                            borderRadius: '8px',
                                            cursor: 'pointer',
                                            fontWeight: 500,
                                            fontSize: '0.9rem',
                                        }}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}