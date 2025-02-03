import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  build: {
    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  base: "/", // Ensures proper routing
  server: {
    historyApiFallback: true, // Enables proper routing for React Router
  },
});
