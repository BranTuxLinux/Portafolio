import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://BranTuxLinux.github.io/Portafolio'
  // resolve:{
  //   alias:{
  //     '@': path.resolve(__dirname, 'src')
  //   }
  // }
})
