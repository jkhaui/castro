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
import babelPlugin from "vite-plugin-babel";
import {babel} from "@rollup/plugin-babel";
import reactNavigationPolyfill from "@castro/react-navigation-polyfill";

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

const babelTransformAssetsConfig = {
    extensions: ["png"],
    name: "[name].[ext]?[sha512:hash:base64:7]"
};

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
        functionPerRoute: true,
        webAnalytics: {
            enabled: true
        },
        speedInsights: {
            enabled: true
        }
    }),
    integrations: [
        react({
            experimentalReactChildren: true
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
    ],
    vite: {
        resolve: {
            extensions: extensions,
            // preserveSymlinks: true,
        },
        plugins: [
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
            }),
            // We were so close to completely avoiding direct babel transpilation :(
            // But this one plugin is still needed in 2023 otherwise Node chokes
            // trying to SSR an image required by the transitive dependency
            // @react-navigation/elements
            babelPlugin({
                babelConfig: {
                    plugins: [["transform-assets", babelTransformAssetsConfig]]
                }
            })
        ],
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
            rollupOptions: {
                plugins: [
                    // Vite uses esbuild for dev and rollup for prod builds. Therefore, we need to also include a babel
                    // plugin wih the transform assets plugin in rollup's config, otherwise the build will succeed but
                    // silently fail when invoked as Node can't parse a base64 image.
                    babel({
                        plugins: [["transform-assets", babelTransformAssetsConfig]]
                    })
                ]
            }
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
