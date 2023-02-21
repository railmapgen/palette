/// <reference types="vitest" />

import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config
export default defineConfig({
    base: '/rmg-palette/',
    plugins: [
        react(),
        checker({ typescript: true, eslint: { lintCommand: 'eslint ./src' } }),
        legacy({
            targets: ['defaults', '>0.2%', 'not dead'],
            modernPolyfills: true,
        }),
        splitVendorChunkPlugin(),
    ],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/setupTests.ts',
        deps: {
            fallbackCJS: true,
        },
        watch: false,
    },
});
