const webpack = require('webpack');
const path = require('path');

// const ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'localhost'

const cssLoader = {
  modules: true,
  loaderOptions: {
    sass: {
      data: `@import "@/styles/index.scss";`
    }
  }
};

// Css-loader — optimizations for production
// if (ENV === 'production') {
//   cssLoader.extract = true;
// }

module.exports = {
  // Disable sourcemaps in prod
  productionSourceMap: false,

  // Loader configuration
  css: cssLoader,

  // Webpack configuration
  configureWebpack: {
    output: {
      chunkFilename: '[name].[id].[hash].js',
      filename: '[name].[hash].js'
    },

    stats: process.env.NODE_ENV === 'production' ? 'errors-only' : undefined,

    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': path.join(__dirname, 'src'),
      }
    },

    devServer: {
      open: false,
      host: '0.0.0.0',
      port: 3017,
      https: false,
      hotOnly: false,
    },

    plugins: [
      new webpack.BannerPlugin({
        banner: `Cuff Malloy - ${new Date()}`
      }),

      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en|es/),
    ]
  },

  pluginOptions: {
    webpackBundleAnalyzer: {
      analyzerMode: 'static',
      reportFilename: 'reports/bundle/index.html',
      openAnalyzer: false
    }
  },

  chainWebpack: config => {
    if (process.env.NODE_ENV) {
      // remove vue-cli-service's progress output
      config.plugins.delete('progress');

      // @see https://github.com/vuejs/vue-cli/issues/3603
      // optionally replace with another progress output plugin
      // `npm i -D simple-progress-webpack-plugin` to use
      // config.plugin('simple-progress-webpack-plugin').use(require.resolve('simple-progress-webpack-plugin'), [{
      //   format: 'minimal', // options are minimal, compact, expanded, verbose
      // }])
    }
  }
};
