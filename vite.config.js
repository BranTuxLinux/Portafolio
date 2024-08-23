import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

let url = 'https://brantuxlinux.github.io/Portafolio'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://brantuxlinux.github.io/Portafolio",
  
  
});
