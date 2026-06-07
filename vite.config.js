import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  server: {
    proxy: {
      '/hubtel-api': {
        target: 'https://payproxyapi.hubtel.com',
        changeOrigin: true,
        secure: false, // Disable SSL verification for development
        rewrite: (path) => path.replace(/^\/hubtel-api/, '')
      },
      '/hubtel-status': {
        target: 'https://rmsc.hubtel.com',
        changeOrigin: true,
        secure: false, // Disable SSL verification for development
        rewrite: (path) => path.replace(/^\/hubtel-status/, '')
      },
      '/vehicle-api': {
        target: 'https://api.vehicledatabases.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/vehicle-api/, ''),
        configure: (proxy, _options) => {
          proxy.on('proxyReq', (proxyReq, req, res) => {
            const apiKey = 'e9694f64e00e46348041989c0fab704a';
            proxyReq.setHeader('x-authkey', apiKey);
            proxyReq.setHeader('Ocp-Apim-Subscription-Key', apiKey);
            proxyReq.setHeader('subscription-key', apiKey);
            proxyReq.setHeader('api-key', apiKey);
          });
        }
      },
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false
      }
    }
  }
})
