import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/cat-gallery/',
  server: {
    port: 3000,
    open: true,
  },
})