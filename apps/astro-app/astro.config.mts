// import {readFileSync} from "node:fs";
// import {join} from "node:path";
import tsconfigPaths from "vite-tsconfig-paths";
import {defineConfig} from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";
import AstroPWA from '@vite-pwa/astro'
import compress from "astro-compress";
import million from "million/compiler";
import reactNavigation from "astro-react-navigation";
import isomorphicDevTools from "@castro/isomorphic-devtools";
import {
    APP_ROOT_PATH,
    APP_ROUTE_MAP,
    BASE_URL,
    buildQualifiedStaticPaths,
    tabBasePathSegments
} from "./src/utils/index.mjs";
import {manifest} from "./src/app/app-metadata.js";
// const {version} = JSON.parse(
//     readFileSync(join(process.cwd(), "package.json"), "utf-8")
// )

const isDevMode = import.meta.env.DEV;

const DEV_BASE_URL = "http://localhost:4321";

const staticPaths = buildQualifiedStaticPaths(APP_ROUTE_MAP, tabBasePathSegments).map((path: string) => {
    if (path === APP_ROOT_PATH) {
        return isDevMode ? DEV_BASE_URL : BASE_URL
    }
    return `${isDevMode ? DEV_BASE_URL : BASE_URL}/${path}`
})

export default defineConfig({
    output: "server",
    site: BASE_URL,
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
    prefetch: {
        defaultStrategy: "tap",
        prefetchAll: false
    },
    integrations: [
        react(),
        tailwind(),
        svelte({
            prebundleSvelteLibraries: false
        }),
        sitemap({
            customPages: staticPaths
        }),
        compress(),
        reactNavigation({
            // resetGlobalElementsContext: false,
            injectGlobalStyles: false
        }),
        isomorphicDevTools(),
        AstroPWA({
            manifest,
            registerType: "autoUpdate",
            base: APP_ROOT_PATH,
            scope: APP_ROOT_PATH,
            includeAssets: ["favicon.ico", "**/*.webp", "**/*.png", "**/*.svg", "**/*.woff2"],
            workbox: {
                skipWaiting: true,
                clientsClaim: true,
                // https://github.com/vite-pwa/vite-plugin-pwa/issues/120#issuecomment-1202579983
                globPatterns: ['**/*.{js,css,woff2}'],
                navigateFallback: null,
                runtimeCaching: [{
                    // urlPattern: ({url, sameOrigin}) => sameOrigin && staticPaths.includes(url),
                    urlPattern: ({url}) => true,
                    // urlPattern: ({url, sameOrigin}) => url === APP_ROOT_PATH || buildQualifiedStaticPaths(APP_ROUTE_MAP, tabBasePathSegments).map((path) => `/${path}`).includes(url.pathname),
                    handler: "StaleWhileRevalidate",
                    options: {
                        cacheName: "castro-route-cache",
                        cacheableResponse: {
                            statuses: [0, 200]
                        }
                    }
                }, {
                    handler: "NetworkOnly",
                    urlPattern: ({url}) => url.pathname.startsWith("/api"),
                    method: "POST",
                    options: {
                        backgroundSync: {
                            name: "analytics-queue",
                            options: {
                                maxRetentionTime: 24 * 60
                            }
                        }
                    }
                }]
            },
            devOptions: {
                enabled: false,
                navigateFallbackAllowlist: [/^\//],
            }
        })
    ],
    vite: {
        plugins: [
            million.vite({
                mode: "react",
                server: true,
                mute: true,
                auto: true
            }),
            tsconfigPaths(),
        ],
        build: {
            minify: "terser",
        },
    }
});
