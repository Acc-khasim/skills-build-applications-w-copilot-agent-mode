# OctoFit Tracker

A modern multi-tier fitness tracking application built with GitHub Copilot agent mode.

## Architecture

```
octofit-tracker/
├── frontend/          # React 19 + Vite SPA (Port 5173)
├── backend/           # Node.js + Express + TypeScript API (Port 8000)
└── mongodb/           # MongoDB Database (Port 27017)
```

## Prerequisites

- Node.js 18+
- npm or yarn
- MongoDB 6.0+ (or Docker)

## Quick Start

### Backend Setup

```bash
cd octofit-tracker/backend
npm install
cp .env.example .env
npm run dev
```

Backend will run on `http://localhost:8000`

### Frontend Setup

```bash
cd octofit-tracker/frontend
npm install
npm run dev
```

Frontend will run on `http://localhost:5173`

### MongoDB Setup

Using Docker:
```bash
docker run -d -p 27017:27017 --name octofit-mongodb mongo:latest
```

Or use your local MongoDB instance and update `MONGODB_URI` in `.env`

## API Endpoints

- `GET /api/health` - Server health check
- `GET /api/workouts` - Get all workouts
- `GET /api/stats` - Get user stats

## Features

- ✅ React 19 frontend with Vite
- ✅ Express.js backend with TypeScript
- ✅ MongoDB integration with Mongoose
- ✅ CORS support
- ✅ Hot module reloading (HMR)
- ✅ Type-safe development

## Development

### Frontend Development
```bash
cd frontend
npm run dev      # Start dev server
npm run build    # Build for production
npm run lint     # Run linter
```

### Backend Development
```bash
cd backend
npm run dev      # Start with hot reload
npm run build    # Build TypeScript
npm start        # Run compiled version
npm run lint     # Run linter
```

## Port Configuration

- **Frontend**: 5173 (Vite dev server)
- **Backend**: 8000 (Express API)
- **MongoDB**: 27017 (Default MongoDB port)

## License

MIT
