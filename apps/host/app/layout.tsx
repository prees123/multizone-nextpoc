import type { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '@repo/auth'
import { Header, SideNav } from '@repo/ui'
import { SessionProvider } from './providers'
import './globals.css'

export const metadata: Metadata = {
    title: 'Multi-Zone Monorepo',
    description: 'Next.js Multi-Zones with shared authentication',
}

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const session = await getServerSession(authOptions)

    return (
        <html lang="en">
            <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif' }}>
                <SessionProvider session={session}>
                    <Header title="Home" />
                    <div style={{ display: 'flex' }}>
                        <SideNav />
                        <main style={{ flex: 1, padding: '2rem' }}>
                            {children}
                        </main>
                    </div>
                </SessionProvider>
            </body>
        </html>
    )
}
