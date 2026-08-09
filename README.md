# Zest — ingredients CRUD challenge

A small onboarding exercise to get hands-on with the real Zest stack (React + TypeScript + Vite + Tailwind, NestJS + TypeScript + Prisma, PostgreSQL) before working on the real app.

## Before you start: fork this repo

Don't clone this repo directly — you won't have push access to it. Instead:

1. Click **Fork** in the top right of this page (or `gh repo fork lizlubelczyk/zest-ingredients-crud-challenge --clone`) to create your own copy under your GitHub account.
2. Clone **your fork**, not this repo, and work from there. Commit and push to your fork as you go — that's how you'll turn in the challenge.
3. Then follow [`CHALLENGE.md`](./CHALLENGE.md).

This repo is a runnable-but-empty scaffold — Postgres via Docker Compose, a NestJS app with Prisma already wired up, a Vite/React app with Tailwind and the design system's tokens already configured. Nothing about the actual `ingredients` feature is built yet; that's the challenge.

Conventions to follow while you build come from the [zest-support](https://github.com/inesgassiebayle/zest-support) repo: [`AGENTS.md`](https://github.com/inesgassiebayle/zest-support/blob/main/AGENTS.md) and [`skills/`](https://github.com/inesgassiebayle/zest-support/tree/main/skills). If you're using an AI coding agent, point it at those files.

## Structure

```
backend/    # NestJS + Prisma, Postgres via docker-compose
frontend/   # Vite + React + TypeScript + Tailwind
docker-compose.yml   # Postgres only
```
