import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // Server config hanya untuk dev
  server: {
    host: "::",
    port: 8080,
  },

  // 🔑 Konfigurasi build wajib untuk deploy
  build: {
    outDir: "dist",        // default, tapi lebih aman eksplisit
    sourcemap: true,       // opsional, untuk debugging
  },

  // 🔑 Base path harus '/' (bukan './') agar asset ter-load benar di Cloudflare
  base: "/",

  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));