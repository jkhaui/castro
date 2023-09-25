import tsconfigPaths from "vite-tsconfig-paths";
import {defineConfig} from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
import compress from "astro-compress";
import type {ManifestOptions} from "vite-plugin-pwa"
import {VitePWA} from "vite-plugin-pwa";
import reactNavigationPolyfill from "@castro/react-navigation-polyfill";
import devLogger from "@castro/dev-logger";

const development = process.env.NODE_ENV === "development";
const modeAsString = JSON.stringify(development);

const extensions = [
    ".png",
    ".web.tsx",
    ".tsx",
    ".web.ts",
    ".ts",
    ".web.jsx",
    ".jsx",
    ".web.js",
    ".js",
    ".css",
    ".json",
    ".mjs"
];

const manifest: Partial<ManifestOptions> = {
    name: "Castro",
    short_name: "Castro",
    description: "An experiment using Astro & Capacitor for cross-platform app deployment",
    theme_color: "#080c15",
    background_color: "#080c15",
    display: "standalone",
    orientation: "portrait",
    start_url: "/",
    scope: "/",
    // icons: [
    //     {
    //         src: "/favicons/favicon-192x192.png",
    //         sizes: "192x192",
    //         type: "image/png"
    //     },
    //     {
    //         src: "/favicons/favicon-512x512.png",
    //         sizes: "512x512",
    //         type: "image/png"
    //     },
    //     {
    //         src: "/favicons/favicon-512x512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //         purpose: "any maskable"
    //     }
    // ]
};

export default defineConfig({
    output: 'server',
    adapter: vercel({
        edgeMiddleware: true,
        functionPerRoute: false,
        webAnalytics: {
            enabled: true
        },
        speedInsights: {
            enabled: true
        }
    }),
    integrations: [
        react({
            // experimentalReactChildren: true
        }),
        tailwind(),
        svelte({
            prebundleSvelteLibraries: false
        }),
        partytown(),
        sitemap(),
        compress(),
        prefetch({
            throttle: 4
        }),
        reactNavigationPolyfill(),
        devLogger()
    ],
    vite: {
        resolve: {
            extensions: extensions,
        },
        plugins: [
            tsconfigPaths(),
            VitePWA({
                registerType: "autoUpdate",
                manifest,
                workbox: {
                    globDirectory: 'dist',
                    globPatterns: ['**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}'],
                    // Don't fallback on document based (e.g. `/some-page`) requests
                    // This removes an errant console.log message from showing up.
                    navigateFallback: null
                }
            })
        ],
        ssr: {
            noExternal: [
                // Ships as a cjs package so must add here to stop build from breaking
                "@ionic/pwa-elements"
            ]
        },
        define: {
            DEV: modeAsString,
            "process.env.NODE_ENV": modeAsString,
            ...(development && {
                // When dep optimisation is enabled for prod builds, rollup's commonjs resolver will throw an error
                // if `__DEV__` exists as a global var; however, it's necessary for react-navigation to work in dev mode.
                __DEV__: modeAsString,
                "global.REACT_NAVIGATION_DEVTOOLS": {},
                "global.window.REACT_NAVIGATION_DEVTOOLS": {},
            }),
            "global.window.__DEV__": modeAsString
        },
        build: {
            minify: "terser",
            // terserOptions: {
            //     mangle: {
            //         properties: {
            //             // This is definitely not safe for prod usage, use more sophisticated
            //             // heuristics for safely mangling prod builds
            //             regex: /^_/,
            //         }
            //     }
            // },
            // TODO: this is potentially a workaround but still doesn't seem to fix the prod error caused by
            // the back-icon asset from @react-navigation/stack > @react-navigation/elements.
            // Leaving it here for now because if we can get it to work, then the custom .pnpmfile.cjs can be
            // removed.
            // rollupOptions: {
            //     plugins: [
            //         modify({
            //             find: /back-icon(-mask)?\.png\?[\w\d]*/gi,
            //             replace: ''
            //         }),
        },
        optimizeDeps: {
            esbuildOptions: {
                resolveExtensions: extensions,
                // https://github.com/vitejs/vite-plugin-react/issues/192#issuecomment-1627384670
                jsx: "automatic",
                loader: {
                    ".js": "jsx"
                }
            },
        },
    }
});
