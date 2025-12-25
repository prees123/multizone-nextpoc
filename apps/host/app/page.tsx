'use client'

import { useSession, signIn, signOut } from 'next-auth/react'

export default function HomePage() {
    const { data: session, status } = useSession()

    return (
        <div style={styles.container}>
            <div style={styles.hero}>
                <h1 style={styles.title}>
                    Welcome to Multi-Zone Monorepo
                </h1>
                <p style={styles.subtitle}>
                    Next.js Multi-Zones with Shared Authentication
                </p>
            </div>

            <div style={styles.statusCard}>
                <h2 style={styles.cardTitle}>Authentication Status</h2>
                {status === 'loading' ? (
                    <p>Loading...</p>
                ) : session ? (
                    <div>
                        <p style={styles.welcomeText}>
                            Welcome, <strong>{session.user?.name || session.user?.email}</strong>!
                        </p>
                        <button onClick={() => signOut()} style={styles.button}>
                            Sign Out
                        </button>
                    </div>
                ) : (
                    <div>
                        <p style={styles.text}>You are not signed in.</p>
                        <button onClick={() => signIn()} style={styles.button}>
                            Sign In
                        </button>
                    </div>
                )}
            </div>

            <div style={styles.grid}>
                <a href="/mfe1" style={styles.card}>
                    <h3 style={styles.cardTitle}>MFE1 →</h3>
                    <p style={styles.cardText}>
                        Navigate to the first micro-frontend application
                    </p>
                </a>

                <a href="/mfe2" style={styles.card}>
                    <h3 style={styles.cardTitle}>MFE2 →</h3>
                    <p style={styles.cardText}>
                        Navigate to the second micro-frontend application
                    </p>
                </a>
            </div>

            <div style={styles.infoSection}>
                <h2 style={styles.sectionTitle}>Architecture Overview</h2>
                <ul style={styles.list}>
                    <li>🏗️ <strong>Monorepo Structure:</strong> pnpm workspaces + Turborepo</li>
                    <li>🔐 <strong>Shared Authentication:</strong> NextAuth.js with cross-zone sessions</li>
                    <li>🎨 <strong>Shared Components:</strong> Header and SideNav across all apps</li>
                    <li>🚀 <strong>Multi-Zones:</strong> Independent Next.js apps with unified routing</li>
                </ul>
            </div>
        </div>
    )
}

const styles: Record<string, React.CSSProperties> = {
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
    },
    hero: {
        textAlign: 'center',
        padding: '3rem 0',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        borderRadius: '12px',
        marginBottom: '2rem',
    },
    title: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        margin: '0 0 1rem 0',
    },
    subtitle: {
        fontSize: '1.25rem',
        margin: 0,
        opacity: 0.9,
    },
    statusCard: {
        background: 'white',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        marginBottom: '2rem',
    },
    cardTitle: {
        fontSize: '1.5rem',
        marginTop: 0,
        marginBottom: '1rem',
        color: '#2d3748',
    },
    welcomeText: {
        fontSize: '1.1rem',
        marginBottom: '1rem',
        color: '#4a5568',
    },
    text: {
        fontSize: '1rem',
        marginBottom: '1rem',
        color: '#4a5568',
    },
    button: {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        border: 'none',
        padding: '0.75rem 2rem',
        borderRadius: '8px',
        fontSize: '1rem',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'transform 0.2s, box-shadow 0.2s',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        marginBottom: '2rem',
    },
    card: {
        background: 'white',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        textDecoration: 'none',
        color: 'inherit',
        transition: 'transform 0.2s, box-shadow 0.2s',
        cursor: 'pointer',
    },
    cardText: {
        color: '#718096',
        margin: 0,
    },
    infoSection: {
        background: 'white',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    },
    sectionTitle: {
        fontSize: '1.5rem',
        marginTop: 0,
        marginBottom: '1.5rem',
        color: '#2d3748',
    },
    list: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
}
