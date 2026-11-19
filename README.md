# React Learning App

A React 19 and TypeScript application built with Vite. Features are organized by domain:

- `src/features/billing-cycle` contains the billing-cycle selector.
- `src/features/pet-management` contains pet management UI, state, API calls, and types.
- `src/App.tsx` composes the features, and `src/main.tsx` mounts the app.

## Development

Install dependencies with `npm install`, then start the frontend:

```sh
npm run dev
```

Pet management uses a local JSON Server API. Start it in a separate terminal:

```sh
npx json-server db.json --port 3000
```

## Validation

```sh
npm run build
npm run lint
```
