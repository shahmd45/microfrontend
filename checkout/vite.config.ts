import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "checkout",
      filename: "remoteEntry.js",
      exposes: {
        "./CheckoutApp": "./src/App.tsx",
        "./PaymentApp": "./src/PaymentApp.tsx",
      },
      remotes: {
        "shared": "http://localhost:3005/assets/remoteEntry.js",
        "payment": {
          external: `new Promise((resolve) => {
            const check = () => {
              if (window.paymentApp) return resolve(window.paymentApp);
              setTimeout(check, 50);
            };
            check();
          })`,
          externalType: 'promise',
          from: 'webpack',
          format: 'var',
        }
      },
      shared: ['react', 'react-dom', 'zustand', 'react-router-dom']
    })
  ],

  server: { cors: true },

  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  }
})
