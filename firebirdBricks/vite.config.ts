import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Vite 8 now supports native tsconfig paths!
  resolve: {
    tsconfigPaths: true
  }
})