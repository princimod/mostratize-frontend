// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa'; // Importe o plugin

// vitejs.dev
export default defineConfig({
  plugins: [
    react(),
    VitePWA({ // Adicione a configuração do PWA aqui
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      manifest: {
        name: 'Meu App PWA com Vite',
        short_name: 'VitePWA',
        description: 'Descrição do meu PWA',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png', // Você precisará adicionar esses ícones na pasta 'public'
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
});
