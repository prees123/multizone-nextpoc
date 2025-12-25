export default function MFE1HomePage() {
    return (
        <div style={styles.container}>
            <div style={styles.hero}>
                <h1 style={styles.title}>MFE1 - Dashboard</h1>
                <p style={styles.subtitle}>Micro Frontend 1</p>
            </div>

            <div style={styles.content}>
                <div style={styles.card}>
                    <h2 style={styles.cardTitle}>📊 Dashboard Overview</h2>
                    <p style={styles.text}>
                        This is the first micro-frontend application (MFE1) running independently
                        on port 3001 but integrated seamlessly through the Host application.
                    </p>
                </div>

                <div style={styles.grid}>
                    <div style={styles.statCard}>
                        <div style={styles.statIcon}>👥</div>
                        <div style={styles.statValue}>1,234</div>
                        <div style={styles.statLabel}>Total Users</div>
                    </div>

                    <div style={styles.statCard}>
                        <div style={styles.statIcon}>📈</div>
                        <div style={styles.statValue}>89%</div>
                        <div style={styles.statLabel}>Growth Rate</div>
                    </div>

                    <div style={styles.statCard}>
                        <div style={styles.statIcon}>💰</div>
                        <div style={styles.statValue}>$45.2K</div>
                        <div style={styles.statLabel}>Revenue</div>
                    </div>

                    <div style={styles.statCard}>
                        <div style={styles.statIcon}>⭐</div>
                        <div style={styles.statValue}>4.8</div>
                        <div style={styles.statLabel}>Rating</div>
                    </div>
                </div>

                <div style={styles.infoBox}>
                    <h3 style={styles.infoTitle}>🔗 Multi-Zone Integration</h3>
                    <p style={styles.text}>
                        This application is part of a multi-zone architecture. The shared Header
                        and SideNav components are imported from the <code>@repo/ui</code> package,
                        ensuring consistent UI across all zones.
                    </p>
                    <p style={styles.text}>
                        Authentication state is shared across all zones using NextAuth.js with
                        cookie domain configuration.
                    </p>
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
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
        margin: '0 0 1rem 0',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1.5rem',
    },
    statCard: {
        background: 'white',
        padding: '1.5rem',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        textAlign: 'center',
    },
    statIcon: {
        fontSize: '2.5rem',
        marginBottom: '0.5rem',
    },
    statValue: {
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#667eea',
        marginBottom: '0.25rem',
    },
    statLabel: {
        fontSize: '0.9rem',
        color: '#718096',
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
}
