## Purpose

This file gives targeted, actionable guidance for an AI coding agent working on this repository (React + TypeScript + Vite single-page app). Use it to quickly become productive: how the app is composed, where to make edits, and which commands to run.

## Big picture

- Frontend SPA using Vite + React + TypeScript. UI uses Tailwind + Ant Design.
- App root: `src/main.tsx` — providers wrap the app in this order: `AlertProvider` -> `AuthProvider` -> `TicketProvider` -> `App`.
- Routing constants live in `src/config/routes.tsx` and routes are declared in `src/App.tsx`.
- Auth and tickets are local-only: there is no remote API. State persistence uses `localStorage` keys:
  - user key: `ticketflow_user` (see `src/store/auth/provider.tsx`)
  - users DB key: `ticketflow_users` (see `src/store/auth/provider.tsx`)
  - tickets key: `ticketflow_tickets_v1` (see `src/store/ticket/provider.tsx`, `KEY`)

## Architecture & important patterns

- Context-based state: `src/store/{auth,ticket,alert}` expose providers and hooks (`useAuth`, `useTickets`, `useAlertContext`). Follow existing shapes in `src/types/global.tsx` when adding new context API.
- Protected routes: `src/layout/protections/protected_routes.tsx` uses `useAuth()` to gate access and redirects to `LOGIN_PAGE` when unauthenticated. When `loading` is true it renders a simple loading UI.
- Simulated backend: ticket/auth providers use in-memory/localStorage + simulated delays (setTimeout) to mimic async calls. Respect that behavior when adding features (e.g., call `await` on provider methods).
- ID generation & timestamps: tickets use a combined Date.now()/random string as `id`/`key` and ISO timestamps for `createdAt`/`updatedAt` — keep this consistent for UI sorting and comparisons.

## Where to change things

- Add routes: update `src/config/routes.tsx` and `src/App.tsx` (use `ProtectedRoute` for auth-protected pages).
- Add pages: `src/pages/` (see `pages/auth/*` and `pages/dashboard/*` for examples).
- Shared components: `src/components/` and `src/components/common`.
- Layouts: `src/layout/` contains public and dashboard layouts. Protected route logic is in `src/layout/protections`.

## Scripts / Developer workflow

- Start dev server (fast feedback):
  - npm: `npm run dev` (runs `vite`)
- Build for production (note: TypeScript build runs first):
  - npm: `npm run build` (runs `tsc -b && vite build`)
- Lint: `npm run lint` (ESLint config present).
- Preview production build: `npm run preview` (vite preview)

## Project-specific conventions

- Types centralised in `src/types/global.tsx`. New public context APIs should reference or extend these types.
- Local persistence keys are project-specific (see keys above). When adding or migrating storage, update these keys intentionally.
- UI uses Tailwind utility classes across components; avoid heavy additional CSS unless necessary. `vite.config.ts` uses `@tailwindcss/vite` plugin.
- When simulating async flows (providers), keep existing `simulateDelay` style and `loading/saving` flags so components keep consistent UX expectations.

## Integration & dependencies

- UI libraries: `antd`, `react-icons`, and `tailwindcss`. Prefer `antd` components where already used (e.g., alerts, layout).
- Router: `react-router-dom` v7 — routes use `<Routes>` and `<Route>` with elements.
- No remote APIs configured. If adding a backend integration, add a new service layer (e.g., `src/services/`) and keep existing contexts as adapters.

## Safety / editing guidance

- Preserve localStorage keys or provide a migration when changing them.
- When editing context or provider signatures, update `src/types/global.tsx` and all callers (search for `useAuth`, `useTickets`).
- Run `npm run lint` after changes. Type errors will be caught by `tsc -b` in `npm run build`.

## Examples to cite

- Route constant: `TICKETS_PAGE` is defined in `src/config/routes.tsx` and used in `src/App.tsx`.
- Protecting a route:
  - See `src/App.tsx` where `ProtectedRoute` wraps the `TicketManagementPage`.
- Auth storage keys: see `USER_KEY = 'ticketflow_user'` and `USERS_DB_KEY = 'ticketflow_users'` in `src/store/auth/provider.tsx`.

## When in doubt

- Search for `useAuth`, `useTickets`, or the localStorage keys to find affected code paths.
- Ask for clarification if a change affects data persistence semantics or routing behavior.

---

If any section is unclear or you want additional rules (formatting, testing conventions, PR checklist), tell me which area to expand and I will update this file.
