import {resolve} from 'node:path';
import {mergeConfig} from 'vite';
import tsconfigPaths from "vite-tsconfig-paths";
import react from '@vitejs/plugin-react-swc';
import pkg from './package.json';
import baseConfig from '../../vite.config.base.mjs';

export default mergeConfig(baseConfig, {
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.mts'),
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
        react(),
        tsconfigPaths(),
    ],
});
