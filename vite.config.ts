import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  define: {
    'process.env': process.env,
    'global': {}
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
      include: [/node_modules/]
    }
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  optimizeDeps: {
    include: ['@duneanalytics/client-sdk']
  }
})
