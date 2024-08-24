import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

let url = "https://brantuxlinux.github.io/Portafolio";
let urlTest = "./";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: urlTest,
});
