import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/@crafity/ui/dist/assets/fonts/',
          dest: path.resolve(__dirname, 'public/assets/'),
        },
      ],
    }),
  ],
})
