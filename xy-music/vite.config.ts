import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [vue(),
    AutoImport({
      imports: ['vue','vue-router','pinia'],
      dts: 'src/auto-import.d.ts',
    })
  ],
  resolve:{
    alias:{
      '@': path.resolve(__dirname,"src")
    }
  },
  server:{
    proxy:{
      '/api': {
        target: "http://localhost:9000",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/,' ')
      }
    }
  }
})
