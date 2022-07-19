const path = require('path');

// const { I18NAlias, JingeI18NLoader } = require('jinge-i18n/compiler');
const { getTsConfigPathsAlias, envs } = require('./webpack.util');
const { getScriptLoaders, getStyleLoaders } = require('./webpack.loaders');
const { getPlugins } = require('./webpack.plugins');

module.exports = {
  mode: envs.isProd ? 'production' : 'development',
  entry: path.resolve(__dirname, '../src/index.ts'),
  output: {
    filename: 'js/index.[contenthash].js',
    path: path.resolve(__dirname, '../docs'),
    chunkFilename: 'js/[contenthash].js',
    publicPath: envs.baseHref,
  },
  devtool: envs.isProd ? false : 'source-map',
  resolve: {
    extensions: ['.ts', '.js'],
    alias: getTsConfigPathsAlias(),
  },
  module: {
    rules: [...getScriptLoaders(), ...getStyleLoaders()],
  },
  plugins: getPlugins(),
  stats: {
    loggingDebug: ['sass-loader'],
  },
  devServer: {
    static: path.resolve(__dirname, '../public'),
    port: 9090,
    historyApiFallback: true,
    // hot: false,
    devMiddleware: {
      writeToDisk: 'WRITE_TO_DISK' in process.env,
    },
  },
};
