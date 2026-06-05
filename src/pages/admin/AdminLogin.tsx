// src/pages/admin/AdminLogin.tsx
import { useState } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''
const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // Sign in with Supabase
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email: email.trim().toLowerCase(),
        password,
      })

      if (authError) throw authError
      if (!data.user) throw new Error('Login failed')

      // ✅ Supabase auto-saves session - just redirect
      navigate({ to: '/admin/dashboard' })

    } catch (err: any) {
      console.error('Login error:', err)
      setError('Invalid email or password')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
      fontFamily: "'Inter', sans-serif",
    }}>
      <div style={{ width: '100%', maxWidth: '420px', padding: '0 1.5rem' }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{
            width: '64px', height: '64px', borderRadius: '16px',
            background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 1rem', fontSize: '1.75rem'
          }}>🦷</div>
          <h1 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>NMDC Admin</h1>
          <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginTop: '0.375rem' }}>Sign in to your dashboard</p>
        </div>

        {/* Card */}
        <div style={{
          background: '#1e293b',
          borderRadius: '16px',
          padding: '2rem',
          border: '1px solid #334155',
          boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
        }}>
          {error && (
            <div style={{
              background: 'rgba(220,38,38,0.1)', border: '1px solid rgba(220,38,38,0.3)',
              color: '#fca5a5', padding: '0.75rem 1rem', borderRadius: '10px',
              marginBottom: '1.25rem', fontSize: '0.875rem',
            }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', color: '#cbd5e1', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="admin@gmail.com"
                required
                autoComplete="email"
                style={{
                  width: '100%', padding: '0.75rem 1rem',
                  background: '#0f172a', border: '1px solid #334155',
                  borderRadius: '10px', color: 'white', fontSize: '0.95rem',
                  boxSizing: 'border-box', outline: 'none',
                }}
              />
            </div>

            <div style={{ marginBottom: '1.75rem' }}>
              <label style={{ display: 'block', color: '#cbd5e1', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                autoComplete="current-password"
                style={{
                  width: '100%', padding: '0.75rem 1rem',
                  background: '#0f172a', border: '1px solid #334155',
                  borderRadius: '10px', color: 'white', fontSize: '0.95rem',
                  boxSizing: 'border-box', outline: 'none',
                }}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%', padding: '0.875rem',
                background: loading ? '#334155' : 'linear-gradient(135deg, #2563eb, #7c3aed)',
                color: 'white', border: 'none', borderRadius: '10px',
                fontSize: '0.95rem', fontWeight: 600, cursor: loading ? 'not-allowed' : 'pointer',
                transition: 'opacity 0.2s',
              }}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )}