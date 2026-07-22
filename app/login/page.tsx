'use client'

import { createClient } from '@/utils/supabase/client'
import { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const supabase = createClient()

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    
    if (error) {
      setError(error.message)
    } else {
      window.location.href = '/'
    }
    setLoading(false)
  }

  const handleSignUp = async () => {
    setLoading(true)
    setError(null)
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    })
    
    if (error) {
      setError(error.message)
    } else {
      setError('Check your email for the confirmation link.')
    }
    setLoading(false)
  }

  const handleGoogleLogin = async () => {
    setLoading(true)
    setError(null)
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    })
    
    if (error) {
      setError(error.message)
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg p-4">
      <div className="w-full max-w-md bg-surface border border-border rounded-2xl p-8 shadow-sm">
        <div className="flex justify-center mb-8">
          <span className="brand-orb w-10 h-10 rounded-full shrink-0"></span>
        </div>
        <h1 className="text-2xl font-semibold text-center mb-6 font-serif">Welcome to ProjectDash</h1>
        
        {error && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 text-red-500 rounded-lg text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleEmailLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-1">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-transparent border border-border rounded-lg text-text-primary focus:outline-none focus:border-accent transition-colors"
              required 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-1">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-transparent border border-border rounded-lg text-text-primary focus:outline-none focus:border-accent transition-colors"
              required 
            />
          </div>
          <div className="flex gap-3 pt-2">
            <button 
              type="submit" 
              disabled={loading}
              className="flex-1 bg-text-primary text-bg py-2 rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {loading ? 'Loading...' : 'Log In'}
            </button>
            <button 
              type="button" 
              onClick={handleSignUp}
              disabled={loading}
              className="flex-1 bg-accent-light text-text-primary py-2 rounded-lg font-medium hover:bg-accent hover:text-white transition-colors disabled:opacity-50"
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className="mt-6 flex items-center gap-3">
          <div className="flex-1 h-px bg-border"></div>
          <span className="text-xs text-text-muted font-medium uppercase tracking-wider">or</span>
          <div className="flex-1 h-px bg-border"></div>
        </div>

        <button 
          onClick={handleGoogleLogin}
          disabled={loading}
          className="mt-6 w-full flex items-center justify-center gap-3 bg-transparent border border-border py-2.5 rounded-lg text-text-primary hover:bg-accent-light transition-colors font-medium disabled:opacity-50"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          Continue with Google
        </button>
      </div>
    </div>
  )
}
