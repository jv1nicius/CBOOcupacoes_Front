import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //Resolver o problema do CORS
  /*
  server: {
    proxy: {
      '/busca': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
    },
  },*/
})
