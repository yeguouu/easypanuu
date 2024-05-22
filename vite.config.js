import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// vite.config.ts    
// import { viteMockServe } from 'vite-plugin-mock'  
// import mock from 'vite-plugin-mock';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // mock假数据
    // viteMockServe({
    //   supportTs: false, // 默认为 false，如果你需要支持 TypeScript 编写的 mock 文件，请设置为 true
    //   mockPath:'./src/mock'
    // }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 1024,
    hmr: true,
    proxy: {
      '/api': {
        target: 'http://localhost:7090',
        changeOrigin: true,
        pathRewrite: {
          '^api': '/api',
        },
      },
    },
  },
});
