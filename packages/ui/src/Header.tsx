'use client'

import React, { useEffect, useState } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

interface HeaderProps {
    title?: string
}

export function Header({ title }: HeaderProps) {
    const { data: session } = useSession()
    const [currentPath, setCurrentPath] = useState('/')

    useEffect(() => {
        setCurrentPath(window.location.pathname)

        const interval = setInterval(() => {
            const newPath = window.location.pathname
            if (newPath !== currentPath) {
                setCurrentPath(newPath)
            }
        }, 0)

        return () => clearInterval(interval)
    }, [currentPath])

    const isActive = (path: string) => {
        if (path === '/') {
            return currentPath === '/'
        }
        return currentPath?.startsWith(path)
    }

    return (
        <header style={styles.header}>
            <div style={styles.container}>
                <div style={styles.logo}>
                    <h1 style={styles.logoText}>Multi-Zone App</h1>
                    {title && <span style={styles.pageTitle}>{title}</span>}
                </div>

                <nav style={styles.nav}>
                    <a
                        href="/"
                        style={{
                            ...styles.navLink,
                            ...(isActive('/') ? styles.navLinkActive : {})
                        }}
                    >
                        Home
                    </a>
                    <a
                        href="/mfe1"
                        style={{
                            ...styles.navLink,
                            ...(isActive('/mfe1') ? styles.navLinkActive : {})
                        }}
                    >
                        MFE1
                    </a>
                    <a
                        href="/mfe2"
                        style={{
                            ...styles.navLink,
                            ...(isActive('/mfe2') ? styles.navLinkActive : {})
                        }}
                    >
                        MFE2
                    </a>
                </nav>

                <div style={styles.auth}>
                    {session?.user ? (
                        <div style={styles.userInfo}>
                            <span style={styles.userName}>{session.user.name || session.user.email}</span>
                            <button onClick={() => signOut()} style={styles.button}>
                                Sign Out
                            </button>
                        </div>
                    ) : (
                        <button onClick={() => signIn()} style={styles.button}>
                            Sign In
                        </button>
                    )}
                </div>
            </div>
        </header>
    )
}

const styles: Record<string, React.CSSProperties> = {
    header: {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '1rem 0',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logo: {
        flex: '0 0 auto',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
    },
    logoText: {
        margin: 0,
        fontSize: '1.5rem',
        fontWeight: 'bold',
    },
    pageTitle: {
        fontSize: '1rem',
        opacity: 0.9,
        fontWeight: 'normal',
        borderLeft: '2px solid rgba(255, 255, 255, 0.3)',
        paddingLeft: '1rem',
    },
    nav: {
        display: 'flex',
        gap: '2rem',
        flex: '1',
        justifyContent: 'center',
    },
    navLink: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '1rem',
        fontWeight: '500',
        transition: 'all 0.2s',
        cursor: 'pointer',
        padding: '0.5rem 1rem',
        borderRadius: '6px',
        opacity: 0.8,
    },
    navLinkActive: {
        opacity: 1,
        background: 'rgba(255, 255, 255, 0.2)',
        fontWeight: '600',
    },
    auth: {
        flex: '0 0 auto',
    },
    userInfo: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
    },
    userName: {
        fontSize: '0.9rem',
        fontWeight: '500',
    },
    button: {
        background: 'rgba(255, 255, 255, 0.2)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        color: 'white',
        padding: '0.5rem 1.5rem',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '0.9rem',
        fontWeight: '500',
        transition: 'all 0.2s',
        backdropFilter: 'blur(10px)',
    },
}
