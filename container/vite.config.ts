import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "container",
      filename: "remoteEntry.js",
      remotes: {
        "product": "http://localhost:3001/assets/remoteEntry.js",
        "cart": "http://localhost:3002/assets/remoteEntry.js",
        "checkout": "http://localhost:3003/assets/remoteEntry.js",
        "login": "http://localhost:3004/assets/remoteEntry.js",
        "shared": "http://localhost:3005/assets/remoteEntry.js"
      },
      shared: ['react', 'react-dom', 'zustand', 'react-router-dom'],
    })
  ],

  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  }
})
