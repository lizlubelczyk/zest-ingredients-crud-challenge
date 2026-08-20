# Ingredients CRUD — notas de implementación

Feature completa (DB → API → UI) para el challenge, siguiendo las `skills/` del repo
[zest-support](https://github.com/inesgassiebayle/zest-support/tree/main/skills).

Branch: `feature/ingredients` (off `master`). **Sin commits** — pendientes de hacer por vos.

## Qué se construyó

### 1. Base de datos (Prisma + Postgres)
- Modelo `Ingredient` en [`backend/prisma/schema.prisma`](backend/prisma/schema.prisma): `id` uuid PK (`@default(uuid())`), `name` varchar(255), mapeado a la tabla `ingredients`.
- Convención de `skills/database.md`: PK uuid (no autoincremental), sin columnas de audit/orden.
- Migración aplicada: `backend/prisma/migrations/<ts>_init_ingredient/` (vía `prisma migrate dev`, no ediciones a mano).

### 2. Backend (NestJS) — `backend/src/ingredients/`
Siguiendo `skills/backend.md`:
- `ingredients.controller.ts` — **thin controller**, solo routing (`GET /ingredients`, `POST /ingredients`). Sin Prisma ni lógica.
- `ingredients.service.ts` — toda la lógica y el acceso a Prisma; usa tipos generados (`Ingredient`, `Prisma.IngredientCreateInput`). `findAll` ordena por `name`.
- `dto/create-ingredient.dto.ts` — DTO con `class-validator` (`@IsString`, `@IsNotEmpty`, `@MaxLength(255)`) + `@Transform` que hace `trim` **antes** de validar (así `"   "` → `""` y lo rechaza).
- `ingredients.module.ts` — registrado en `app.module.ts`.
- `main.ts` — se agregó `transform: true` al `ValidationPipe` global (ya tenía `whitelist` + `forbidNonWhitelisted`) para que el `@Transform` del DTO llegue trimmeado al service.
- Errores vía `HttpException` de Nest (`ValidationPipe` devuelve 400 automáticamente en body inválido).

### 3. Frontend (Vite + React + Tailwind v4) — `frontend/src/`
Siguiendo `skills/frontend.md` y usando **solo tokens del tema** (`frontend/src/index.css`), sin hex hardcodeados:
- `types/ingredient.ts` — tipo compartido `Ingredient`.
- `services/ingredients.ts` — cliente HTTP centralizado (`getIngredients`, `createIngredient`), sin `fetch` desparramado en componentes. Lee `VITE_API_URL`.
- `hooks/useIngredients.ts` — data-fetching + estado (loading / error / lista) separado de la vista.
- `components/ui/` — **componentes reutilizables**: `Button` (variantes primary/secondary, pill), `Card` (superficie con tokens), `Notice` ("cartel" de loading/empty/error). Extraídos para reuso en vez de duplicar clases.
- `components/AddIngredientForm.tsx` — form presentacional; usa `Button`; valida nombre no vacío del lado cliente.
- `pages/IngredientsPage.tsx` — layout de la página (lista + form + estados), compone `Card`/`Notice`/`Button`.
- `App.tsx` — renderiza `IngredientsPage`.
- `vite-env.d.ts` — tipos de `import.meta.env` (faltaba en el scaffold; sin esto no compilaba `VITE_API_URL`).

## Acceptance criteria — estado

| Criterio | Estado |
|---|---|
| `Ingredient` table vía `prisma migrate dev` | ✅ migración aplicada |
| `POST /ingredients {name:"Tomato"}` crea fila | ✅ 201 |
| `POST` sin `name` → 400 (no 500) | ✅ 400 |
| `GET /ingredients` devuelve la lista | ✅ 200 |
| UI lista + alta sin reload, la lista se actualiza | ✅ verificado en browser |
| Sin errores de consola / rejections; loading y error visibles | ✅ error state + retry probados |
| Colores/fonts/radius de tokens, sin hex | ✅ |
| PR revisado por el partner antes de mergear | ⏳ pendiente (workflow del challenge) |

### Verificación manual hecha
- `npm run lint`, `typecheck`, `build` en **backend y frontend** → todo verde.
- API probada con curl: valid (201), `{}` (400), `"   "` (400), `"  Basil  "` → trimmeado a `"Basil"`, campo extra (400 por whitelist), GET (200).
- UI en el browser: empty state → alta de Tomato/Apple (orden alfabético, sin reload) → error state matando el backend → Retry recupera.

## Cómo correrlo
```bash
docker compose up -d          # Postgres (o un Postgres local en :5432)
cd backend && npm install && cp .env.example .env
npx prisma migrate dev        # aplica la migración
npm run start:dev             # http://localhost:3000

cd ../frontend && npm install && cp .env.example .env
npm run dev                   # http://localhost:5173
```
> Nota: en esta máquina Docker no estaba corriendo, así que se usó el Postgres local de Homebrew
> creando rol/DB `zest`/`zest`/`zest_challenge` para respetar el `.env.example`. Con `docker compose up -d` funciona igual.

## Fuera de scope (respetado)
Sin Auth0, sin Docker de la app, sin otras entidades ni PATCH/DELETE/search — todo esto marcado como no requerido en `CHALLENGE.md`. Stretch goals (tests, PATCH/DELETE, search, contenerización) quedaron sin hacer.
