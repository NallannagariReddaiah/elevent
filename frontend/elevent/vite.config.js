import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      host: 'localhost', // or your server's IP
      port: 5173,
    },
    plugins: [react()],
  },
})

