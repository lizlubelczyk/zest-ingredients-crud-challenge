# Zest — ingredients CRUD challenge

A small onboarding exercise to get hands-on with the real Zest stack (React + TypeScript + Vite + Tailwind, NestJS + TypeScript + Prisma, PostgreSQL) before working on the real app.

## Before you start: fork this repo (as a pair)

This challenge is meant to be done by two devs together, so you can practice reviewing each other's code — not two separate solo copies. Don't clone this repo directly, you won't have push access to it. Instead:

1. **One of you** forks it: click **Fork** in the top right of this page (or `gh repo fork lizlubelczyk/zest-ingredients-crud-challenge --clone`).
2. That person adds the other as a collaborator on the fork: **Settings → Collaborators → Add people**.
3. **Both of you** clone that same fork and work from it — you'll each push branches and open PRs against each other for review. See [`CHALLENGE.md`](./CHALLENGE.md#working-as-a-pair-peer-review) for how the split and review flow works.

This repo is a runnable-but-empty scaffold — Postgres via Docker Compose, a NestJS app with Prisma already wired up, a Vite/React app with Tailwind and the design system's tokens already configured. Nothing about the actual `ingredients` feature is built yet; that's the challenge.

Conventions to follow while you build come from the [zest-support](https://github.com/inesgassiebayle/zest-support) repo: [`AGENTS.md`](https://github.com/inesgassiebayle/zest-support/blob/main/AGENTS.md) and [`skills/`](https://github.com/inesgassiebayle/zest-support/tree/main/skills). If you're using an AI coding agent, point it at those files.

## Structure

```
backend/    # NestJS + Prisma, Postgres via docker-compose
frontend/   # Vite + React + TypeScript + Tailwind
docker-compose.yml   # Postgres only
```
