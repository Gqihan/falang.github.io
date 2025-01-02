import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {

    host: '0.0.0.0', // 这个用于启动
    port: '8092', // 指定启动端口
    open: true //启动后是否自动打开浏览器

  },
  base: '/falang.github.io/', // 替换为你的 GitHub 仓库名称
})
