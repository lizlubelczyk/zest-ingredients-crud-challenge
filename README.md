# Zest — ingredients CRUD challenge

A small onboarding exercise to get hands-on with the real Zest stack (React + TypeScript + Vite + Tailwind, NestJS + TypeScript + Prisma, PostgreSQL) before working on the real app.

## Before you start: fork this repo (each of you, separately)

This challenge is meant to be done by two devs in parallel, each building the full feature on their own fork, then reviewing each other's work — not one shared repo. Don't clone this repo directly, you won't have push access to it. Instead:

1. **Each of you** forks it separately: click **Fork** in the top right of this page (or `gh repo fork lizlubelczyk/zest-ingredients-crud-challenge --clone`) — you'll end up with two independent forks, one per person.
2. Clone **your own fork** and build the challenge there.
3. Once you've got a PR ready, **add your partner as a collaborator on your fork** (**Settings → Collaborators → Add people**) so they can review it, and do the same on theirs. See [`CHALLENGE.md`](./CHALLENGE.md#working-as-a-pair-peer-review) for the review flow.

This repo is a runnable-but-empty scaffold — Postgres via Docker Compose, a NestJS app with Prisma already wired up, a Vite/React app with Tailwind and the design system's tokens already configured. Nothing about the actual `ingredients` feature is built yet; that's the challenge.

Conventions to follow while you build come from the [zest-support](https://github.com/inesgassiebayle/zest-support) repo: [`AGENTS.md`](https://github.com/inesgassiebayle/zest-support/blob/main/AGENTS.md) and [`skills/`](https://github.com/inesgassiebayle/zest-support/tree/main/skills). If you're using an AI coding agent, point it at those files.

## Structure

```
backend/    # NestJS + Prisma, Postgres via docker-compose
frontend/   # Vite + React + TypeScript + Tailwind
docker-compose.yml   # Postgres only
```
