// common shared config
/// <reference types="vite/client" />

import {defineConfig} from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
    build: {
        // @ts-ignore
        lib: {
            fileName: 'index',
            formats: ['es']
        },
    },
    plugins: [
        dts({
            insertTypesEntry: true,
        }),
    ],
});
