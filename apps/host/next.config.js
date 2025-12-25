/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            // MFE1 rewrites
            {
                source: '/mfe1',
                destination: 'http://localhost:3001/mfe1',
            },
            {
                source: '/mfe1/:path*',
                destination: 'http://localhost:3001/mfe1/:path*',
            },
            // MFE2 rewrites
            {
                source: '/mfe2',
                destination: 'http://localhost:3002/mfe2',
            },
            {
                source: '/mfe2/:path*',
                destination: 'http://localhost:3002/mfe2/:path*',
            },
        ]
    },
}

module.exports = nextConfig
