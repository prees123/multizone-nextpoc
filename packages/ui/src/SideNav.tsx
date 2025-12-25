'use client'

import React, { useState } from 'react'

interface SideNavProps {
    items?: Array<{
        label: string
        href: string
        icon?: string
    }>
}

const defaultItems = [
    { label: 'Home', href: '/', icon: '🏠' },
    { label: 'MFE1 Dashboard', href: '/mfe1', icon: '📊' },
    { label: 'MFE2 Settings', href: '/mfe2', icon: '⚙️' },
]

export function SideNav({ items = defaultItems }: SideNavProps) {
    const [isCollapsed, setIsCollapsed] = useState(false)

    return (
        <aside style={{
            ...styles.sidebar,
            width: isCollapsed ? '60px' : '250px',
        }}>
            <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                style={styles.toggleButton}
                aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
                {isCollapsed ? '→' : '←'}
            </button>

            <nav style={styles.nav}>
                {items.map((item, index) => (
                    <a
                        key={index}
                        href={item.href}
                        style={styles.navItem}
                        title={item.label}
                    >
                        <span style={styles.icon}>{item.icon}</span>
                        {!isCollapsed && <span style={styles.label}>{item.label}</span>}
                    </a>
                ))}
            </nav>
        </aside>
    )
}

const styles: Record<string, React.CSSProperties> = {
    sidebar: {
        background: 'linear-gradient(180deg, #2d3748 0%, #1a202c 100%)',
        color: 'white',
        minHeight: '100vh',
        padding: '1rem',
        transition: 'width 0.3s ease',
        position: 'relative',
        boxShadow: '2px 0 8px rgba(0,0,0,0.1)',
    },
    toggleButton: {
        position: 'absolute',
        top: '1rem',
        right: '-12px',
        background: '#667eea',
        border: 'none',
        color: 'white',
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '0.8rem',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
        transition: 'all 0.2s',
        zIndex: 10,
    },
    nav: {
        marginTop: '3rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
    },
    navItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        padding: '0.75rem 1rem',
        borderRadius: '8px',
        textDecoration: 'none',
        color: 'white',
        transition: 'all 0.2s',
        cursor: 'pointer',
        background: 'rgba(255, 255, 255, 0.05)',
    },
    icon: {
        fontSize: '1.5rem',
        flexShrink: 0,
    },
    label: {
        fontSize: '0.95rem',
        fontWeight: '500',
        whiteSpace: 'nowrap',
    },
}
