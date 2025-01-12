import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
   base: 'pixelflow',  //use this base when you want to deploy on Github
  //  base: '/',   //use this base when you want to deploy on Amplify AWS
  plugins: [react()],
  build:{
    outDir: 'dist',
  },
  server:{
    open: true,
  },
})
