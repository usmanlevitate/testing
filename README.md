# NestJS + Next.js Testing

Simple full-stack starter for `usmanlevitate/testing`.

| App | Stack | Port | Folder |
|-----|-------|------|--------|
| API | NestJS | `3001` | `api/` |
| Web | Next.js | `3000` | `web/` |

## Prerequisites

- Node.js 20+
- npm

## Run locally

Install dependencies (already done if you just cloned after `npm install` in each app):

```bash
npm --prefix api install
npm --prefix web install
```

Start the API:

```bash
npm run start:api
```

Start the frontend (separate terminal):

```bash
npm run start:web
```

Open [http://localhost:3000](http://localhost:3000). The page loads `GET /` from the Nest API.

## Useful endpoints

- `GET http://localhost:3001/` — hello payload
- `GET http://localhost:3001/health` — health check
- `GET http://localhost:3001/info` — API name, version, and endpoint list
