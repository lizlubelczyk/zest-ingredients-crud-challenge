# Zest — ingredients CRUD challenge

A small onboarding exercise to get hands-on with the real Zest stack (React + TypeScript + Vite + Tailwind, NestJS + TypeScript + Prisma, PostgreSQL) before working on the real app.

## Before you start: fork this repo (each of you, separately)

This challenge is meant to be done by two devs in parallel, each building the full feature on their own fork, then reviewing each other's work — not one shared repo. Don't clone this repo directly, you won't have push access to it. Instead:

1. **Each of you** forks it separately: click **Fork** in the top right of this page (or `gh repo fork lizlubelczyk/zest-ingredients-crud-challenge --clone`) — you'll end up with two independent forks, one per person.
2. Clone **your own fork** and build the challenge there.
3. Once you've got a PR ready, **add your partner as a collaborator on your fork** (**Settings → Collaborators → Add people**) so they can review it, and do the same on theirs. See [`CHALLENGE.md`](./CHALLENGE.md#working-as-a-pair-peer-review) for the review flow.

This repo is a runnable-but-empty scaffold — Postgres via Docker Compose, a NestJS app with Prisma already wired up, a Vite/React app with Tailwind and the design system's tokens already configured. Nothing about the actual `ingredients` feature is built yet; that's the challenge.

This repo has its own [`AGENTS.md`](./AGENTS.md), scoped to this challenge — Codex reads it automatically, and [`CLAUDE.md`](./CLAUDE.md) points Claude Code at the same file, so neither of you needs to paste conventions in manually. For anything beyond this challenge's scope, the fuller conventions live in [zest-support](https://github.com/inesgassiebayle/zest-support)'s `AGENTS.md`/`skills/`.

## Structure

```
backend/    # NestJS + Prisma, Postgres via docker-compose
frontend/   # Vite + React + TypeScript + Tailwind
docker-compose.yml   # Postgres only
AGENTS.md   # conventions for this repo — Codex reads this automatically
CLAUDE.md   # points Claude Code at AGENTS.md
```
