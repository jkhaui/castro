import baseConfig from "../../../vite.config.base.mjs";
import {resolve} from "path";
import {mergeConfig} from "vite";
import pkg from "./package.json";

export default mergeConfig(baseConfig,{
    build: {
        lib: {
            entry: resolve(__dirname, "src/index.mts")
        },
        rollupOptions: {
            external: [
                ...Object.keys(pkg.dependencies ?? {}),
                ...Object.keys(pkg.peerDependencies ?? {}),
            ]
        }
    },
});
