# AGENTS.md — ingredients CRUD challenge

Entry point for any AI coding agent working in this repo (Codex reads this file natively; Claude Code is pointed here by `CLAUDE.md`).

## What this repo is

A small onboarding exercise, not the real Zest app — see [`CHALLENGE.md`](./CHALLENGE.md) for the actual assignment and acceptance criteria before writing any code. It's a runnable-but-empty scaffold: `backend/` is NestJS + Prisma wired to Postgres (no `Ingredient` model yet — that's the first task), `frontend/` is Vite + React + Tailwind v4 with the real design tokens already configured in `src/index.css`.

## Ground rules

- **Don't build beyond what `CHALLENGE.md` asks for.** No Auth0, no Docker for the app itself, no entities beyond `Ingredient` — see its "Explicitly not required" section. If you're about to add something not listed there, stop and check with the dev, not just proceed.
- **Backend**: thin controllers, business logic in services, a DTO with `class-validator` decorators for the `POST` body, Prisma migrations (not hand edits) for schema changes. `ValidationPipe` is already wired globally in `src/main.ts`.
- **Frontend**: use the theme tokens already defined in `frontend/src/index.css` (`bg-primary`, `text-foreground`, `font-heading`, etc.) — no hardcoded hex colors. Handle loading/error states explicitly, don't leave a blank screen on a failed request.
- **Git workflow**: this repo is worked on as two independent forks, one per dev, each building the whole feature solo, then reviewing each other's PR before merging — see [`CHALLENGE.md`](./CHALLENGE.md#working-as-a-pair-peer-review). Branch off `main` (e.g. `feature/ingredients`), don't commit straight to `main`, don't merge your own PR before your partner has reviewed it.
- **This is a stepping stone to the real project.** Fuller conventions (auth, infra, the actual `docs/db.md` schema) live in [zest-support](https://github.com/inesgassiebayle/zest-support)'s `AGENTS.md`/`skills/` — check there for anything this file doesn't cover, and don't assume this challenge's scope (no auth, single entity) carries over to the real app.

## Found a gap?

If something's missing or wrong here, or your agent ignores a rule, [file a skill-miss issue](https://github.com/inesgassiebayle/zest-support/issues/new?template=skill-miss.yml) on zest-support — same process as the real project.
