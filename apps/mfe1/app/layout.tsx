'use client'

import { SessionProvider } from 'next-auth/react'
import { Header, SideNav } from '@repo/ui'
import './globals.css'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif' }}>
                <SessionProvider>
                    <Header title="Dashboard" />
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
