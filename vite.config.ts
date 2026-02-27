import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    globals: true, // lets you use describe/it/expect without importing
    environment: "jsdom", // simulates the browser DOM
    setupFiles: "./src/tests/setup.ts", // runs before every test file
  },
});
