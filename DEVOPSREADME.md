# Healthy Food Delivery — Frontend

React 19 frontend for the Healthy Food Delivery platform. Built with TypeScript, Vite, and Tailwind CSS. Communicates with the [Healthy Food API](https://github.com/Grupo-05-Turma-Javascript-12/healty-food-delivery-backend-pj03-gp05-js12) deployed on AWS ECS Fargate.

## Stack

| Technology | Purpose |
|---|---|
| React 19 + TypeScript | UI framework |
| Vite | Build tool and dev server |
| Tailwind CSS 4 | Styling |
| Axios | HTTP client — connects to backend API |
| React Router v7 | Client-side routing |
| React Toastify | User notifications |

## Architecture

```
Browser → Nginx (Docker) → React SPA
                               ↓
                    VITE_API_URL (env var)
                               ↓
              AWS ALB → ECS Fargate (NestJS API)
                               ↓
                    RDS PostgreSQL (private subnet)
```

## Running Locally

```bash
cp .env.development .env.local
npm install
npm run dev
```

Requires the backend API running on `http://localhost:4000`.

## Building for Production

```bash
npm run build
```

The `dist/` folder contains the static assets served by Nginx in production.

## Docker

```bash
# Build
docker build --target production -t healthyfood-frontend .

# Run
docker run -p 80:80 healthyfood-frontend
```

## Environment Variables

| Variable | Description |
|---|---|
| `VITE_API_URL` | Backend API base URL — ALB DNS in production |

## CI/CD

Automated pipeline via GitHub Actions:
- TypeScript check + ESLint on every PR
- Docker build + push to Docker Hub on merge to main

## Related

- [Backend API — NestJS + ECS Fargate](https://github.com/Grupo-05-Turma-Javascript-12/healty-food-delivery-backend-pj03-gp05-js12)