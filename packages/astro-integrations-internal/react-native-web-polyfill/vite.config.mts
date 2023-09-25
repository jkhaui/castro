import baseConfig from '../../../vite.config.base.mjs';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import pkg from './package.json';

export default defineConfig({
    ...baseConfig,
    build: {
        lib: {
            ...baseConfig.build.lib,
            entry: resolve(__dirname, 'src/index.mts')
        },
        rollupOptions: {
            external: [
                // ...baseConfig.rollupOptions.external,
                ...Object.keys(pkg.dependencies ?? {}),
                ...Object.keys(pkg.peerDependencies ?? {}),
            ]
        }
    },
});
