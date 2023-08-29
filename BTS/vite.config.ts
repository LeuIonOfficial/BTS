import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@request": path.resolve(__dirname, "./src/api/request"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@models": path.resolve(__dirname, "./src/models"),
    },
  },
  plugins: [react()],
});
