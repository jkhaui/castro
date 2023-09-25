import { resolve } from 'path';
import { defineConfig } from 'vite';
import baseConfig from '../../../vite.config.base.mjs';
import pkg from './package.json';

export default defineConfig({
    ...baseConfig,
    build: {
        lib: {
            ...baseConfig.build.lib,
            entry: resolve(__dirname, 'src/index.mts'),
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: [
                ...Object.keys(pkg.dependencies ?? {}),
                ...Object.keys(pkg.peerDependencies ?? {}),
                'react/jsx-runtime',
            ],
        },
    },
});
