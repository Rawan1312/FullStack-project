import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // هذا الإعداد مناسب لجميع الروابط الثابتة أو المتغيرة
});
