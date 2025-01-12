import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: 'pixelflow',
  // base: '/',
  plugins: [react()],
  build:{
    outDir: 'dist',
  },
  server:{
    open: true,
  },
})
