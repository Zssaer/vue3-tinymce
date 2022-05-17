import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";
import { resolve } from "path";
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: resolve(__dirname, "src/TinymceEditor.ts"),
      // main: resolve(__dirname, "index.html"),
      output: {
        entryFileNames: "TinymceEditor.js",
        manualChunks: {
          tinymce: ['tinymce']
        },
        chunkFileNames: "assets/tinymce.js",
      },
    },
    minify: "terser", 
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [vue(),visualizer()],
  
});
