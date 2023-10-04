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
    resetGlobalElementsContext?: boolean;
}

export default function reactNavigation({
                                            injectGlobalStyles = true,
                                            resetGlobalElementsContext = true
                                        }: ReactNavigationOptions = {}): AstroIntegration {
    return {
        name: "astro-react-navigation",
        hooks: {
            "astro:config:setup": ({command, updateConfig, injectScript}) => {
                if (command === "dev") {
                    injectScript("before-hydration", `
                        window.global = window;
                        globalThis.REACT_NAVIGATION_DEVTOOLS = new WeakMap();
                    `);
                }

                if (resetGlobalElementsContext) {
                    // https://github.com/expo/router/discussions/588
                    // https://github.com/react-navigation/react-navigation/blob/9fe34b445fcb86e5666f61e144007d7540f014fa/packages/elements/src/getNamedContext.tsx#LL3C1-L4C1
                    // React Navigation is storing providers in a global, this is fine for the first static render
                    // but subsequent static renders of Stack or Tabs will cause React to throw a warning. To prevent this warning, we'll reset the globals before rendering.

                    // Script has been modified to remove TypeScript annotations + mangle variable names as it's pure
                    // JS code injected into the HTML document.
                    injectScript("before-hydration", `
                        function _r() {
                            const _c = "__react_navigation__elements_contexts";
                            global[_c] = new Map();
                        }
                        _r();
                    `)
                }

                if (injectGlobalStyles) {
                    injectScript("page-ssr", `import "astro-react-navigation/global-styles.css";`);
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
