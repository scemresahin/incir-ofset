import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// GitHub Pages proje sayfasında site alt-yolda yayınlanır (/<repo>/).
// CI, VITE_BASE ortam değişkenini repo adına göre ayarlar; lokal geliştirmede '/'.
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [react(), tailwindcss()],
})
