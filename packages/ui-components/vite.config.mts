import {resolve} from 'path';
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import pkg from './package.json';
import baseConfig from '../../vite.config.base.mjs';

export default defineConfig({
    ...baseConfig,
    build: {
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
                'react/jsx-runtime',
            ],
        },
    },
    plugins: [
        ...baseConfig.plugins,
        react(),
    ],
});
