import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "login",
      filename: "remoteEntry.js",
      exposes: { "./LoginApp": "./src/App.tsx" },
      remotes: { "shared": "http://localhost:3005/assets/remoteEntry.js" },
      shared: ['react', 'react-dom', 'zustand']
    })
  ],
  server: {
    cors: true
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  }
})
