const mix = require('laravel-mix')


mix
  .copy('resources/assets/img', 'public/img')
  .js('resources/assets/js/app.js', 'public/js')
  .js('resources/assets/js/modal.js', 'public/js')
  .sass('resources/assets/sass/app.scss', 'public/css')
  .react('resources/assets/js/reactdemo.jsx', 'public/js')
