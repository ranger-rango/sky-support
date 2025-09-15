// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'
// import { tanstackRouter } from "@tanstack/router-vite-plugin"

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { tanstackRouter } from '@tanstack/router-plugin/vite'

export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
      routesDirectory : "./src/routes"
    }),
    react(),
    // ...,
  ],
})