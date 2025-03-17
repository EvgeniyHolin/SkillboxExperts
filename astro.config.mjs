import { defineConfig } from 'astro/config'
import viteSassGlob from 'vite-plugin-sass-glob-import'
import globImporter from 'node-sass-glob-importer';
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  devToolbar: { enabled: false },
  compressHTML: false,
  output: 'static',
  publicDir: './public',
  build: {
    format: 'file', // вытаскивает вложенные страницы в корень src/pages/subpage/subpage.html => dist/subpage.html
    assets: 'assets', // собирает скрипты и стили в папку dist/assets
    assetsPrefix: '.', // добавляет `.` в пути скриптов и стилей
  },
  integrations: [
    icon({
      svgoOptions: {
        plugins: [
          'preset-default'
        ],
      },
    })
  ],
  scssOptions: {
    importer: globImporter(),
  },
  vite: {
    build: {
      assetsInlineLimit: 0,
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          entryFileNames: 'scripts.js',
          assetFileNames: (assetInfo) => {
            return assetInfo.name === 'style.css'
              ? `${assetInfo.name}` // задается имя и папка (корень) для css
              : `assets/${assetInfo.name}` // задается имя и папка картинкам
          },
        },
      },
    },
    plugins: [
      viteSassGlob()
    ],
  },
})
