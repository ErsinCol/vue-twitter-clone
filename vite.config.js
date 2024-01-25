import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import * as path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader({
    svgoConfig: {
      multipass: true
    },
    defaultImport: "component"
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
