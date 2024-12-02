import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4008, // Set the port to 4008
    host: '0.0.0.0', // Enable hosting on the local network
  },
})
