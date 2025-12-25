# Multi-Zone Monorepo - Getting Started

## Prerequisites
- Node.js 18+ 
- pnpm 9+

## Installation

```bash
# Install pnpm if you don't have it
npm install -g pnpm

# Install all dependencies
pnpm install
```

## Development

Run all applications concurrently:
```bash
pnpm dev
```

This will start:
- Host: http://localhost:3000
- MFE1: http://localhost:3001/mfe1
- MFE2: http://localhost:3002/mfe2

**Note:** Access all apps through the Host at `http://localhost:3000`

## Authentication

Demo credentials:
- Email: any valid email
- Password: `demo`

## Build

Build all applications:
```bash
pnpm build
```

## Project Structure

```
practice-mono/
├── apps/
│   ├── host/          # Main app (port 3000)
│   ├── mfe1/          # MFE1 (port 3001)
│   └── mfe2/          # MFE2 (port 3002)
├── packages/
│   ├── ui/            # Shared components
│   ├── auth/          # Authentication
│   └── config/        # TypeScript config
└── package.json       # Root config
```

## Architecture

- **Multi-Zones:** Next.js apps with unified routing
- **Shared Auth:** NextAuth.js with cross-zone sessions
- **Shared UI:** Header and SideNav components
- **Monorepo:** pnpm workspaces + Turborepo
