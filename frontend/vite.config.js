import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Force Vite to restart and load PostCSS/Tailwind
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3020,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  }
})
