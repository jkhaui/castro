import {resolve} from 'path';
import {defineConfig} from 'vite';
import pkg from './package.json';
import baseConfig from '../../vite.config.base.mjs';
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
    ...baseConfig,
    build: {
        // target: ["node10.4"],
        ssr: true,
        lib: {
            ...baseConfig.build.lib,
            entry: resolve(__dirname, 'src/index.ts'),
        },
        minify: 'terser',
        terserOptions: {
            mangle: {
                properties: {
                    regex: /^_/,
                    reserved: ['h', 'Fragment']
                }
            }
        },
        rollupOptions: {
            external: [
                // ...baseConfig.rollupOptions.external,
                ...Object.keys(pkg.devDependencies ?? {}),
                ...Object.keys(pkg.peerDependencies ?? {}),
            ],
        },
    },
    optimizeDeps: {
        include: ["src"]
    },
    plugins: [
        ...baseConfig.plugins,
        react(),
    ],
});
1