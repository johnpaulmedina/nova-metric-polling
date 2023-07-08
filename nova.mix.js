const mix = require('laravel-mix')
const webpack = require('webpack')
const path = require('path')

class NovaMetricPolling {
  name() {
    return 'nova-metric-polling'
  }

  register(name) {
    this.name = name
  }

  webpackConfig(webpackConfig) {
    webpackConfig.externals = {
      vue: 'Vue',
    }

    webpackConfig.resolve.alias = {
      ...(webpackConfig.resolve.alias || {}),
      '@': path.join(
        __dirname,
        '../../vendor/laravel/nova/resources/js'
      ),
      'laravel-nova': path.join(
        __dirname,
        '../../vendor/laravel/nova/resources/js/mixins/packages.js'
      ),
    }

    webpackConfig.output = {
      uniqueName: this.name,
    }
  }
}

mix.extend('nova', new NovaMetricPolling())
