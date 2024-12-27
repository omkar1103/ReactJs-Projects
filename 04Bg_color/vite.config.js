import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ReactJs-Projects/04Bg_color/',  // Replace with your repo name
  build: {
    outDir: 'dist',  // This is the default output directory for Vite
  },
})
