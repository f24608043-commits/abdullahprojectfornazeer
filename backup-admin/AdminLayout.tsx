<<<<<<< HEAD
// src/pages/admin/AdminLayout.tsx
import { useLocation, useNavigate } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''
const supabase = createClient(supabaseUrl, supabaseAnonKey)

interface Props {
    children: React.ReactNode
}

export default function AdminLayout({ children }: Props) {
    const location = useLocation()
    const navigate = useNavigate()
    const [user, setUser] = useState<any>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Get initial session
        supabase.auth.getSession().then(({ data: { session } }) => {
            setUser(session?.user ?? null)
            setLoading(false)
        })

        // Listen for auth changes (login/logout)
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null)
            if (!session) {
                // Auto-redirect to login if logged out
                navigate({ to: '/admin/login', replace: true })
            }
        })

        return () => subscription.unsubscribe()
    }, [navigate])

    const handleLogout = async () => {
        await supabase.auth.signOut()
        navigate({ to: '/admin/login', replace: true })
    }

    // Show loading while checking auth
    if (loading) {
        return (
            <div style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#f8fafc',
                color: '#64748b'
            }}>
                Loading admin...
            </div>
        )
    }

    // Redirect to login if not authenticated
    if (!user) {
        navigate({ to: '/admin/login', replace: true })
        return null
    }

    const adminEmail = user.email || 'admin'
    const adminName = user.user_metadata?.name || 'Administrator'

    const navItems = [
        { path: '/admin/dashboard', label: 'Dashboard', icon: '📊' },
        { path: '/admin/videos', label: 'Videos', icon: '🎬' },
        { path: '/admin/reviews', label: 'Reviews', icon: '⭐' },
    ]

    const sidebarStyle: React.CSSProperties = {
        width: '250px',
        background: '#1e293b',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0,
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        zIndex: 50,
    }

    return (
        <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'sans-serif', background: '#f8fafc' }}>
            {/* Sidebar */}
            <div style={sidebarStyle}>
                <div style={{ padding: '1.5rem', borderBottom: '1px solid #334155' }}>
                    <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'white' }}>NMDC Admin</div>
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.25rem' }}>{adminEmail}</div>
                </div>

                <nav style={{ flex: 1, padding: '1rem 0.75rem' }}>
                    {navItems.map(item => {
                        const active = location.pathname === item.path
                        const linkStyle: React.CSSProperties = {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            padding: '0.7rem 0.75rem',
                            borderRadius: '8px',
                            color: active ? 'white' : '#94a3b8',
                            background: active ? '#2563eb' : 'transparent',
                            textDecoration: 'none',
                            marginBottom: '0.25rem',
                            fontSize: '0.9rem',
                            fontWeight: active ? 600 : 400,
                        }
                        return (
                            <a href={item.path} key={item.path} style={linkStyle}>
                                <span>{item.icon}</span>
                                {item.label}
                            </a>
                        )
                    })}
                </nav>

                <div style={{ padding: '1rem 1.5rem', borderTop: '1px solid #334155' }}>
                    <div style={{ marginBottom: '0.75rem' }}>
                        <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'white' }}>{adminName}</div>
                        <div style={{ fontSize: '0.72rem', color: '#64748b' }}>Administrator</div>
                    </div>
                    <button
                        onClick={handleLogout}
=======
import { Outlet, Link, useNavigate, useLocation } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export default function AdminLayout() {
    const navigate = useNavigate()
    const location = useLocation()

    const [token, setToken] = useState<string | null>(null)
    const [admin, setAdmin] = useState<{ email?: string; name?: string }>({})
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        const t = localStorage.getItem('admin_token')
        const u = localStorage.getItem('admin_user')
        setToken(t)
        setAdmin(u ? JSON.parse(u) : {})
        setMounted(true)
    }, [])

    useEffect(() => {
        if (mounted && !token) {
            navigate({ to: '/admin/login' })
        }
    }, [mounted, token, navigate])

    const logout = () => {
        localStorage.removeItem('admin_token')
        localStorage.removeItem('admin_user')
        navigate({ to: '/admin/login' })
    }

    const navItems = [
        { path: '/admin/dashboard', label: '📊 Dashboard' },
        { path: '/admin/videos', label: '🎬 Videos' },
        { path: '/admin/reviews', label: '⭐ Reviews' },
    ]

    if (!mounted) return null

    return (
        <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'sans-serif' }}>
            <div
                style={{
                    width: '240px',
                    background: '#1e293b',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    flexShrink: 0,
                }}
            >
                <div style={{ padding: '1.5rem', borderBottom: '1px solid #334155' }}>
                    <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>NMDC Admin</div>
                    <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.25rem' }}>
                        {admin.email}
                    </div>
                </div>

                <nav style={{ flex: 1, padding: '1rem 0' }}>
                    {navItems.map(item => (
                        <Link
                            key={item.path}
                            to={item.path}
                            style={{
                                display: 'block',
                                padding: '0.75rem 1.5rem',
                                color: location.pathname === item.path ? 'white' : '#94a3b8',
                                background: location.pathname === item.path ? '#2563eb' : 'transparent',
                                textDecoration: 'none',
                                marginBottom: '0.25rem',
                                borderRadius: '0 8px 8px 0',
                                marginRight: '0.5rem',
                            }}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div style={{ padding: '1rem 1.5rem', borderTop: '1px solid #334155' }}>
                    <button
                        onClick={logout}
>>>>>>> 7521fbb67a98c37ad8e36ff17587932e08c1893b
                        style={{
                            width: '100%',
                            padding: '0.5rem',
                            background: 'transparent',
                            color: '#94a3b8',
                            border: '1px solid #334155',
                            borderRadius: '8px',
                            cursor: 'pointer',
<<<<<<< HEAD
                            fontSize: '0.875rem'
                        }}
                    >
                        Sign Out
=======
                        }}
                    >
                        Logout
>>>>>>> 7521fbb67a98c37ad8e36ff17587932e08c1893b
                    </button>
                </div>
            </div>

<<<<<<< HEAD
            {/* Main Content */}
            <div style={{ flex: 1, marginLeft: '250px', overflow: 'auto', minHeight: '100vh' }}>
                {children}
=======
            <div style={{ flex: 1, background: '#f8fafc', overflow: 'auto' }}>
                <Outlet />
>>>>>>> 7521fbb67a98c37ad8e36ff17587932e08c1893b
            </div>
        </div>
    )
}