// FILE: vite.config.js

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),

    // @quasar/plugin-vite options list:
    // https://github.com/quasarframework/quasar/blob/dev/vite-plugin/index.d.ts
    quasar({
      sassVariables: 'src/quasar-variables.sass'
    })
  ],


  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5157',
        // secure: false,
        changeOrigin: true,
        rewrite: (path) => path.replace('/api', '/api'),
      },
    }
  }
})
