import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";
import { resolve } from 'path';  // <- Import the resolve function from Node's 'path' module

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.jsx"],
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'resources/js'),
        },
    },
    build: {
        outDir: 'public/build',  // Output directory
        emptyOutDir: true,
        manifest: true,
        rollupOptions: {
            input: 'resources/js/app.jsx',  // Entry point
        },
    },
});
