let mix = require('laravel-mix')
let tailwindcss = require("tailwindcss")
let path = require("path")

require('./nova.mix')

mix
  .setPublicPath('dist')
  .js('resources/js/nova-metric-polling.js', 'js')
  .vue({ version: 3 })
  .postCss("resources/css/nova-metric-polling.css", "css", [tailwindcss("tailwind.config.js")])
  .nova('johnpaulmedina/nova-metric-polling')
