import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: './dist',
    rollupOptions: {
      output: {
        assetFileNames: "static/[name][extname]",
      },
    },
  },
  plugins: [react()],
})
