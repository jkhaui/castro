import type {AstroIntegration} from "astro";

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

interface ReactNavigationOptions {
    injectGlobalStyles?: boolean;
}

export default function reactNavigation({
                                            injectGlobalStyles = true
                                        }: ReactNavigationOptions = {}): AstroIntegration {
    return {
        name: "astro-react-navigation",
        hooks: {
            "astro:config:setup": ({command, updateConfig, injectScript}) => {
                injectScript("before-hydration", `
                    window.global = window;
                    globalThis.REACT_NAVIGATION_DEVTOOLS = new WeakMap();
                `);

                if (injectGlobalStyles) {
                    injectScript("page-ssr", `import "astro-react-navigation/global-styles.css";`);
                }

                updateConfig({
                    vite: {
                        resolve: {
                            dedupe: ["@react-navigation/native"],
                            extensions: extensions,
                        },
                        define: {
                            DEV: modeAsString,
                            "process.env.NODE_ENV": modeAsString,
                            ...(development && {
                                // When dep optimisation is enabled for prod builds, rollup"s commonjs resolver will
                                // throw an error if `__DEV__` exists as a global var; however, it"s necessary for
                                // `react-navigation` to work in dev mode.
                                __DEV__: modeAsString,
                                "global.REACT_NAVIGATION_DEVTOOLS": {},
                                "global.window.REACT_NAVIGATION_DEVTOOLS": {},
                            }),
                            "global.window.__DEV__": modeAsString
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
                })
            }
        }
    }
}
