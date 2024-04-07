import path from 'path'
import { defineConfig } from 'vite';
import dts from "vite-plugin-dts";
import react from '@vitejs/plugin-react'


export default defineConfig({
build: {
    lib: {
      entry: path.resolve("src", 'index.ts'),
      name: 'ui',
      fileName: (format) => `ui.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React'
        }
      }
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        math: 'parens-division',
      },
      sass: {},
    },
  },
  plugins: [react(),
  dts({
      insertTypesEntry: true,
    })]
});
