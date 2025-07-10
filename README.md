# LetsPlay

## Getting Started

1. Install dependencies
   ```bash
   npm install
   npm --workspace client install
   ```
2. Copy `.env.example` to `.env` and fill in your own values.
3. Start MongoDB locally and run the development servers:
   ```bash
   npm run start:dev
   npm --workspace client start
   ```

## Architecture Overview

This repo contains a Node.js API server in the project root and a React front-end in `client/`.  The server exposes REST endpoints under `/api` and relies on MongoDB via Mongoose.  Real-time updates use Socket.io.  The client was bootstrapped with Create React App.

## Local Development

Create `.env` in the project root like:

```env
DB_HOST=mongodb://localhost:27017/letsplay
SECRET=changeme
```

Then run the commands from the *Getting Started* section.  Jest tests can be executed with `npm test`.
