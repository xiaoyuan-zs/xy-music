import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import AutoComponents from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue','vue-router','pinia'],
      dts: 'src/auto-import.d.ts',
      resolvers: [ElementPlusResolver()]
    }),
    AutoComponents({
      dts: 'src/auto-component.d.ts',
      resolvers: [ElementPlusResolver()]
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
