import { defineConfig } from "vitest/config";

const testFiles = ['**/*.test.{js,jsx,ts,tsx}'];

/**
 * Vitest configuration.
 *
 * @see https://vitest.dev/config/
 */
export default defineConfig({
    test: {
        cache: {
            dir: "./.cache/vitest",
        },
        globals: true,
        environment: 'happy-dom',
        passWithNoTests: true,
        coverage: {
            provider: 'v8',
            reporter: ['text', 'clover'],
            extension: ['js', 'jsx', 'ts', 'tsx'],
            all: true,
        },
        // To mimic Jest behaviour regarding mocks.
        // @link https://vitest.dev/config/#clearmocks
        clearMocks: true,
        mockReset: true,
        restoreMocks: true,
        include: testFiles,
        exclude: [
            '**/node_modules/**',
            '**/dist/**',
            '**/.astro/**',
            '**/.{idea,git,cache,output,temp}/**',
        ],
        // deps: {
        //     experimentalOptimizer: {
        //         enabled: true,
        //     },
        // },
    },
});