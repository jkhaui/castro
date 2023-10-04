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

export default function reactNavigationIntegration(): AstroIntegration {
    return {
        name: "@castro/react-navigation",
        hooks: {
            "astro:config:setup": ({command, updateConfig, injectScript}) => {
                if (command === "dev") {
                    injectScript("before-hydration", `
                        window.global = window;
                        globalThis.REACT_NAVIGATION_DEVTOOLS = new WeakMap();
                    `);
                }

                updateConfig({
                    vite: {
                        resolve: {
                            dedupe: ["@react-navigation/native", "@react-navigation/stack"],
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
