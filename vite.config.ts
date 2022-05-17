import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";
import { visualizer } from "rollup-plugin-visualizer";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: ["vue"],
      output: {
        manualChunks: {
          tinymce: ["tinymce"],
        },
        chunkFileNames: "assets/tinymce.js",
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
    },
    minify: "terser",
    lib: {
      entry: "./packages/index.ts",
      name: "vue3-tinymce",
      formats: ["es"],
      fileName: (format) => `packages/index.js`,
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    vue(),
    visualizer(),
    dts({
      include: "packages/*.ts",
    }),
  ],
});
