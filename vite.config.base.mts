// common shared config
/// <reference types="vite/client" />

import dts from 'vite-plugin-dts';

const baseConfig = {
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
}

export default baseConfig
