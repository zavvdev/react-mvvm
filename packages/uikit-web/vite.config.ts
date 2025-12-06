/// <reference types="vite/client" />
/// <reference types="vitest/config" />

import path, { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { globSync } from "glob";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    libInjectCss(),
    dts({
      exclude: [
        "src/__test__",
        "**/*.test.tsx",
        "**/*.spec.tsx",
        "**/*.test.ts",
        "**/*.spec.ts",
      ],
      tsconfigPath: "tsconfig.app.json",
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      input: Object.fromEntries(
        globSync(["src/templates/**/index.tsx", "src/main.ts"]).map(
          (file: string) => {
            // This remove `src/` as well as the file extension from each
            // file, so e.g. src/nested/foo.js becomes nested/foo
            var entryName = path.relative(
              "src",
              file.slice(0, file.length - path.extname(file).length),
            );
            // This expands the relative paths to absolute paths, so e.g.
            // src/nested/foo becomes /project/src/nested/foo.js
            var entryUrl = fileURLToPath(new URL(file, import.meta.url));
            return [entryName, entryUrl];
          },
        ),
      ),
      output: {
        entryFileNames: "[name].js",
        assetFileNames: "assets/[name][extname]",
        globals: {
          react: "React",
          "react-dom": "React-dom",
          "react/jsx-runtime": "react/jsx-runtime",
        },
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/__test__/setup.ts",
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: true,
    // coverage: {
    //   include: [...],
    //   exclude: [...],
    // },
  },
});
