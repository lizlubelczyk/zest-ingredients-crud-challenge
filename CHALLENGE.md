# Challenge: the ingredients catalog, end to end

Goal: get comfortable with the real Zest stack by building one small feature all the way through — database → API → UI. No auth, no relations to other tables, nothing clever. Just the plumbing, done right.

You're implementing `ingredients`, the simplest entity in the real schema (see [`docs/db.md`](https://github.com/inesgassiebayle/zest-support/blob/main/docs/db.md) in the support repo): just an `id` and a `name`. This scaffold gives you a runnable (but empty) NestJS backend and Vite/React frontend, both already wired to Postgres and to the design system's colors/fonts. You add the feature.

## What you're building

1. **Database**: an `Ingredient` model in `backend/prisma/schema.prisma` (`id` uuid PK, `name` varchar), applied with a Prisma migration.
2. **Backend**: a NestJS `ingredients` module — `GET /ingredients` (list all) and `POST /ingredients` (create one), with request validation (a DTO using `class-validator`), following the conventions in [`skills/backend.md`](https://github.com/inesgassiebayle/zest-support/blob/main/skills/backend.md) of the support repo.
3. **Frontend**: a page that fetches and lists ingredients, and a form to add a new one. Style it with Tailwind using the tokens already wired into `frontend/src/index.css` (the Citrus palette + Playfair Display/Geist fonts) — see [`skills/frontend.md`](https://github.com/inesgassiebayle/zest-support/blob/main/skills/frontend.md).

## Acceptance criteria

- [ ] `docker compose up -d` starts Postgres; `npx prisma migrate dev` in `backend/` creates the `Ingredient` table.
- [ ] `POST /ingredients` with `{ "name": "Tomato" }` creates a row and rejects a request missing `name` (400, not a 500).
- [ ] `GET /ingredients` returns the full list.
- [ ] The frontend page lists existing ingredients and lets you add a new one without a page reload; the list updates to show it.
- [ ] No console errors, no unhandled promise rejections, loading and error states are visible (not just a blank screen) if the API call fails.
- [ ] Colors/fonts/radius come from the theme tokens already set up in `frontend/src/index.css` — no hardcoded hex colors in your components.

## Explicitly not required for this exercise

- Auth0 / login — these endpoints are unauthenticated on purpose, to keep the exercise scoped to CRUD + the frontend/backend/DB round trip.
- Docker for the frontend/backend themselves — `docker-compose.yml` here only runs Postgres. Full containerization is covered separately in the support repo's [`skills/infra.md`](https://github.com/inesgassiebayle/zest-support/blob/main/skills/infra.md) if you want to try it as a stretch goal.
- Editing/deleting ingredients, search, pagination — all optional stretch goals, not required to consider this "done."

## Stretch goals (optional, pick any)

- Add `PATCH`/`DELETE` for ingredients.
- Add a search box that filters the list (client-side is fine).
- Write a test for the backend validation (reject empty `name`).
- Containerize both services per `skills/infra.md`.

## Getting started

```bash
docker compose up -d          # starts Postgres
cd backend && npm install
cp .env.example .env
npx prisma migrate dev --name init_ingredient   # after you've added the model
npm run start:dev             # http://localhost:3000

# in another terminal
cd frontend && npm install
cp .env.example .env
npm run dev                   # http://localhost:5173
```

## If you get stuck / find a gap

If something in the support repo's `AGENTS.md`/`skills/` docs is missing, wrong, or your AI coding agent ignores it, [file a "Skill / convention miss"](https://github.com/inesgassiebayle/zest-support/issues/new?template=skill-miss.yml) — that's exactly what it's there for.
