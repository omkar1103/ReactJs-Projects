import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ReactJs-Projects/01basicreact/',  // Replace with your repo name
  build: {
    outDir: 'dist',  // This is the default output directory for Vite
  },
})
