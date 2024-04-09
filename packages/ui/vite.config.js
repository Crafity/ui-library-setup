import path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  root: './',
  publicDir: 'public',
  assetsInclude: [],
  build: {
    lib: {
      entry: path.resolve('src', 'index.ts'),
      name: 'ui',
      fileName: format => `ui.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        math: 'parens-division',
      },
      sass: {},
    },
  },
  plugins: [
    svgr(),
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: {
      lib: path.resolve(__dirname, 'src/lib'),
      components: path.resolve(__dirname, 'src/components'),
      icons: path.resolve(__dirname, 'src/icons'),
    },
  },
})
