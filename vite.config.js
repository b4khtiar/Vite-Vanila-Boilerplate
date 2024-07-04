import { defineConfig } from 'vite';
import lightningcss from 'vite-plugin-lightningcss';

export default defineConfig({
  publicDir: 'public',
  root: './',
  build: {
    outDir: 'dist',
  },
  plugins: [
    lightningcss({
      browserslist: '>= 0.2%',
      minify: true,
    })
  ],

});