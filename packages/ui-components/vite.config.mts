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
            entry: resolve(__dirname, 'src/index.mts'),
        },
        minify: 'terser',
        terserOptions: {
            mangle: {
                properties: {
                    regex: /^_/,
                }
            }
        },
        rollupOptions: {
            external: [
                // ...baseConfig.rollupOptions.external,
                ...Object.keys(pkg.dependencies ?? {}),
                ...Object.keys(pkg.peerDependencies ?? {}),
                'react/jsx-runtime',
            ],
            output: {
                globals: {
                    react: 'React'
                }
            }
        },
    },
    plugins: [
        ...baseConfig.plugins,
        react(),
    ],
});
