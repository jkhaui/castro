# Castro

PoC (current status: experimental*) to create a "web-native"[1] mobile-first SSR framework with Astro and the following
integrations:

- React-Navigation for SPA/native-esque routing
- React-Native/React-Native-Web (only used to integrate React-Navigation)
- Konsta UI adaptive styling (i.e. ios/material) with Tailwind
- Capacitor for accessing native device functionality

Also acts as a decent starter template (IMHO) if you're looking for a modern monorepo setup geared 
towards shipping multiple sub-packages for an OS library. Uses pnpm workspaces, Nx, Vite, Rollup, etc.

*by experimental, I mean _highly_ experimental 😀. Expect many broken deployments and massive refactoring commits as I 
figure this out.

## Setup

1. `pnpm i` in project root (run `npm i -g pnpm` first if you don't have pnpm installed)
2. `pnpm dev` to run the app

## Roadmap/TODO

- Implement file-based routing (similar to Expo Router, Next.js, etc.)
- Rewrite mobile tabbar in Svelte to showcased framework interop/mixing-&-matching
- Fix hydration errors
- Lazy-load/code-split client-side routes
- PoC: persistent navigation state across page transitions using `window.sessionStorage`
- Add authentication
- Add backend + service integrations
- Implement Redis for isomorphic client/server sessions
- Submit MVP to iOS/Google Play stores
- Improve dynamic routing system
- Extract modules into individual Astro plugin integrations
- Dockerize app, add examples for Node.js and other provider adapters
- Augment/replace Astro HTML streaming with Vite SSR-compatible RSC payload implementation (e.g. https://dev.to/one-beyond/react-server-components-without-any-frameworks-5a8p, https://github.com/cyco130/vite-rsc)
- Isomorphic client + RSC router: deeply integrate aforementioned RSC streaming with `react-navigation`
- implement file-based routing + conventions (e.g. https://github.com/oedotme/generouted, https://github.com/hannoeru/vite-plugin-pages, Remix, Next, etc.)
- Investigate validity of [Valtio](https://valtio.pmnd.rs/docs/introduction/getting-started) as framework-agnostic shared-state solution

## Philosophy

### First-Class Cross-Platform Development

TODO

### Sensible Isomorphic DX + UX

#### Routing Strategy

- **Initial lifecycle:** Browser URL request -> SSRd page -> Selective/partial client-side hydration
- **Post-hydration navigation:** Defer to client-side routing, except when bottom tab links are clicked.

#### User Sessions

TODO

#### Caching

TODO

### Framework Agnosticism

Watch Evan You's talk at RenderATL [here](https://www.youtube.com/watch?v=YMwCPfABwHg).

#### Framework-Agnostic Proxy-Based State (Valtio)

Astro recommends using [nanostores](https://docs.astro.build/en/core-concepts/sharing-state/) to share
state amongst components rendered by different frameworks (e.g. React, Svelte). 

However, [Valtio's](https://valtio.pmnd.rs/docs/guides/async) proxy-based solution appears better suited due to its first-class React Suspense support
(it will throw throw a Promise when accessed within a Suspense boundary and can also integrate with "vanilla"
JS via module scope). (NEEDS INVESTIGATION)

## Credits

- [Tamagui](https://github.com/tamagui) for the huge effort in creating 
[react-native-web-lite](https://github.com/tamagui/tamagui/tree/master/packages/react-native-web-lite), a smaller
web-first fork of [react-native-web](https://necolas.github.io/react-native-web/docs/) with first-class ESM support +
easy Vite integration.
- [Konsta](https://konstaui.com/) for the genius idea of creating a tailwind-based alternative to Ionic's adaptive
mobile UI.

## References

[1]. https://webnative.tech/
