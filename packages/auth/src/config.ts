import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email', placeholder: 'user@example.com' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                // This is a demo - in production, validate against a real database
                if (credentials?.email && credentials?.password) {
                    // Simple demo validation
                    if (credentials.password === 'demo') {
                        return {
                            id: '1',
                            name: credentials.email.split('@')[0],
                            email: credentials.email,
                        }
                    }
                }
                return null
            },
        }),
    ],
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    cookies: {
        sessionToken: {
            name: 'next-auth.session-token',
            options: {
                httpOnly: true,
                sameSite: 'lax',
                path: '/',
                // Don't set domain for localhost - it will default to the current host
                // In production, set domain to your actual domain like .yourdomain.com
                secure: process.env.NODE_ENV === 'production',
            },
        },
    },
    pages: {
        signIn: '/auth/signin',
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id
            }
            return token
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id as string
            }
            return session
        },
    },
}
