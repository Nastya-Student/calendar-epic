import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss()],
  root: "src",
  build: {
    outdir: "../dist",
  },
  base: "/calendar-epic",
});
