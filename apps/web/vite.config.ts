import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig, type UserConfig } from "vite";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/__test__/setup.ts",
  },
} as UserConfig);
