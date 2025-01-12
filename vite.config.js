import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  //  base: 'pixelflow',  //use this base when you want to deploy on Github without using custom domain
   base: '/',   //use this base when you deploy on Amplify AWS OR depoly on github with using custom domain
  plugins: [react()],
  build:{
    outDir: 'dist',
  },
  server:{
    open: true,
  },
})
