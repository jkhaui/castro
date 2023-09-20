# Castro

Experiment/PoC to create a mobile-first SSR framework with Astro and the following integrations:

- React-Navigation for SPA/native-esque routing
- React-Native/React-Native-Web (only used to integrate React-Navigation)
- Konsta UI adaptive styling (i.e. ios/material) with Tailwind
- Capacitor for accessing native device functionality

Also acts as a decent starter template (IMHO) if you're looking for a modern monorepo setup geared 
towards shipping multiple sub-packages for an OS library. Uses pnpm workspaces, Nx, Vite, Rollup, etc.

## Setup

1. `pnpm i` in project root (run `npm i -g pnpm` first if you don't have pnpm installed)
2. `pnpm dev` to run the app

## Roadmap/TODO

- Fix hydration errors
- Lazy-load/code-split client-side routes
- PoC: persistent navigation state across page transitions using `window.sessionStorage`
- Improve dynamic routing system
- Extract modules into individual Astro plugin integrations
- Dockerize app, add examples for Node.js and other provider adapters