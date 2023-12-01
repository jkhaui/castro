import {resolve} from 'node:path';
import {mergeConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import pkg from './package.json';
import baseConfig from '../../vite.config.base.mjs';

export default mergeConfig(baseConfig,{
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
        },
        rollupOptions: {
            external: [
                // ...baseConfig.rollupOptions.external,
                ...Object.keys(pkg.devDependencies ?? {}),
                ...Object.keys(pkg.peerDependencies ?? {}),
            ],
        },
    },
    plugins: [],
});
