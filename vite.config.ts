import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from "path"
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), dts({
    insertTypesEntry: true,
    rollupTypes: true,
    include: ['lib/**/*.tsx', 'lib/**/*.ts'],
    tsconfigPath: './tsconfig.app.json',
  })],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'abyss-ui',
      fileName: 'abyss-ui'
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime'
        }
      }
    }
  }
})
