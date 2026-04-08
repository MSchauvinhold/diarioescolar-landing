import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://simeonpayba227.com.ar',
      dynamicRoutes: [
        '/institucional',
        '/comunidad',
        '/pedagogico',
        '/administrativo',
        '/quienes-somos',
      ],
    }),
  ],
})
