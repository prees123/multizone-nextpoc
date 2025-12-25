'use client'

import { useState } from 'react'

export default function MFE2HomePage() {
    const [notifications, setNotifications] = useState(true)
    const [darkMode, setDarkMode] = useState(false)
    const [language, setLanguage] = useState('en')

    return (
        <div style={styles.container}>
            <div style={styles.hero}>
                <h1 style={styles.title}>MFE2 - Settings</h1>
                <p style={styles.subtitle}>Micro Frontend 2</p>
            </div>

            <div style={styles.content}>
                <div style={styles.card}>
                    <h2 style={styles.cardTitle}>⚙️ Application Settings</h2>
                    <p style={styles.text}>
                        This is the second micro-frontend application (MFE2) running independently
                        on port 3002. It demonstrates how different teams can work on separate
                        features while maintaining a unified user experience.
                    </p>
                </div>

                <div style={styles.settingsGrid}>
                    <div style={styles.settingCard}>
                        <div style={styles.settingHeader}>
                            <div>
                                <h3 style={styles.settingTitle}>🔔 Notifications</h3>
                                <p style={styles.settingDesc}>Receive email notifications</p>
                            </div>
                            <label style={styles.switch}>
                                <input
                                    type="checkbox"
                                    checked={notifications}
                                    onChange={(e) => setNotifications(e.target.checked)}
                                    style={styles.checkbox}
                                />
                                <span style={styles.slider}></span>
                            </label>
                        </div>
                    </div>

                    <div style={styles.settingCard}>
                        <div style={styles.settingHeader}>
                            <div>
                                <h3 style={styles.settingTitle}>🌙 Dark Mode</h3>
                                <p style={styles.settingDesc}>Enable dark theme</p>
                            </div>
                            <label style={styles.switch}>
                                <input
                                    type="checkbox"
                                    checked={darkMode}
                                    onChange={(e) => setDarkMode(e.target.checked)}
                                    style={styles.checkbox}
                                />
                                <span style={styles.slider}></span>
                            </label>
                        </div>
                    </div>

                    <div style={styles.settingCard}>
                        <div style={styles.settingHeader}>
                            <div>
                                <h3 style={styles.settingTitle}>🌍 Language</h3>
                                <p style={styles.settingDesc}>Select your preferred language</p>
                            </div>
                            <select
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                                style={styles.select}
                            >
                                <option value="en">English</option>
                                <option value="es">Español</option>
                                <option value="fr">Français</option>
                                <option value="de">Deutsch</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div style={styles.infoBox}>
                    <h3 style={styles.infoTitle}>🏗️ Architecture Benefits</h3>
                    <ul style={styles.list}>
                        <li><strong>Independent Development:</strong> Teams can work on MFE1 and MFE2 simultaneously</li>
                        <li><strong>Shared Components:</strong> Header and SideNav are consistent across all zones</li>
                        <li><strong>Shared Authentication:</strong> Login state persists across all micro-frontends</li>
                        <li><strong>Optimized Builds:</strong> Turborepo caches builds for faster development</li>
                    </ul>
                </div>
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
        padding: '2rem',
        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        color: 'white',
        borderRadius: '12px',
        marginBottom: '2rem',
    },
    title: {
        fontSize: '2rem',
        fontWeight: 'bold',
        margin: '0 0 0.5rem 0',
    },
    subtitle: {
        fontSize: '1.1rem',
        margin: 0,
        opacity: 0.9,
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
    },
    card: {
        background: 'white',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    },
    cardTitle: {
        fontSize: '1.5rem',
        marginTop: 0,
        marginBottom: '1rem',
        color: '#2d3748',
    },
    text: {
        color: '#4a5568',
        lineHeight: 1.6,
        margin: 0,
    },
    settingsGrid: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    settingCard: {
        background: 'white',
        padding: '1.5rem',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    },
    settingHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    settingTitle: {
        fontSize: '1.1rem',
        margin: '0 0 0.25rem 0',
        color: '#2d3748',
    },
    settingDesc: {
        fontSize: '0.9rem',
        margin: 0,
        color: '#718096',
    },
    switch: {
        position: 'relative',
        display: 'inline-block',
        width: '50px',
        height: '24px',
    },
    checkbox: {
        opacity: 0,
        width: 0,
        height: 0,
    },
    slider: {
        position: 'absolute',
        cursor: 'pointer',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#ccc',
        transition: '0.4s',
        borderRadius: '24px',
    },
    select: {
        padding: '0.5rem 1rem',
        borderRadius: '8px',
        border: '2px solid #e2e8f0',
        fontSize: '0.9rem',
        cursor: 'pointer',
    },
    infoBox: {
        background: '#f7fafc',
        padding: '2rem',
        borderRadius: '12px',
        border: '2px solid #e2e8f0',
    },
    infoTitle: {
        fontSize: '1.25rem',
        marginTop: 0,
        marginBottom: '1rem',
        color: '#2d3748',
    },
    list: {
        color: '#4a5568',
        lineHeight: 1.8,
        margin: 0,
        paddingLeft: '1.5rem',
    },
}
