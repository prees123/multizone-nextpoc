'use client'

import { signIn } from 'next-auth/react'
import { useState } from 'react'

export default function SignInPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')

        const result = await signIn('credentials', {
            email,
            password,
            redirect: true,
            callbackUrl: '/',
        })

        if (result?.error) {
            setError('Invalid credentials. Try password: "demo"')
        }
    }

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h1 style={styles.title}>Sign In</h1>
                <p style={styles.subtitle}>
                    Demo credentials: any email + password: <code>demo</code>
                </p>

                <form onSubmit={handleSubmit} style={styles.form}>
                    <div style={styles.field}>
                        <label htmlFor="email" style={styles.label}>Email</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={styles.input}
                            placeholder="user@example.com"
                        />
                    </div>

                    <div style={styles.field}>
                        <label htmlFor="password" style={styles.label}>Password</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={styles.input}
                            placeholder="demo"
                        />
                    </div>

                    {error && <p style={styles.error}>{error}</p>}

                    <button type="submit" style={styles.button}>
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    )
}

const styles: Record<string, React.CSSProperties> = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '60vh',
    },
    card: {
        background: 'white',
        padding: '3rem',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        maxWidth: '450px',
        width: '100%',
    },
    title: {
        fontSize: '2rem',
        fontWeight: 'bold',
        marginTop: 0,
        marginBottom: '0.5rem',
        color: '#2d3748',
    },
    subtitle: {
        color: '#718096',
        marginBottom: '2rem',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
    },
    field: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
    },
    label: {
        fontSize: '0.9rem',
        fontWeight: '600',
        color: '#4a5568',
    },
    input: {
        padding: '0.75rem',
        fontSize: '1rem',
        border: '2px solid #e2e8f0',
        borderRadius: '8px',
        transition: 'border-color 0.2s',
    },
    error: {
        color: '#e53e3e',
        fontSize: '0.9rem',
        margin: 0,
    },
    button: {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        border: 'none',
        padding: '1rem',
        borderRadius: '8px',
        fontSize: '1rem',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'transform 0.2s',
    },
}
