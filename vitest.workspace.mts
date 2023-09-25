import { defineWorkspace } from 'vitest/config';

export default defineWorkspace([
    'apps/*',
    'packages/**',
    {
        extends: './vitest.config.base.mts'
    }
]);