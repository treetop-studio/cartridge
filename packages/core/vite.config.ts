import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      exclude: ['**/*.stories.tsx', '**/*.test.tsx']
    })
  ],
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        themes: resolve(__dirname, 'src/themes/index.ts')
      },
      name: 'Cartridge',
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime'
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsx'
        }
      }
    },
    cssCodeSplit: false
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@treetop-studio/cartridge': resolve(__dirname, 'src'),
      '@treetop-studio/cartridge/components': resolve(__dirname, 'src/components'),
      '@treetop-studio/cartridge/themes': resolve(__dirname, 'src/themes'),
      '@treetop-studio/cartridge/utils': resolve(__dirname, 'src/utils'),
      '@treetop-studio/cartridge/types': resolve(__dirname, 'src/types')
    }
  }
})