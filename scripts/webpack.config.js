const path = require('path');

// const { I18NAlias, JingeI18NLoader } = require('jinge-i18n/compiler');
const { getTsConfigPathsAlias, envs } = require('./webpack.util');
const { getScriptLoaders, getStyleLoaders } = require('./webpack.loaders');
const { getPlugins } = require('./webpack.plugins');

module.exports = {
  mode: envs.isProd ? 'production' : 'development',
  // cache: envs.isProd
  //   ? false
  //   : {
  //       type: 'filesystem',
  //       allowCollectingMemory: true,
  //       cacheDirectory: path.resolve(__dirname, '../.tmp/.cache'),
  //       buildDependencies: {
  //         config: [__filename],
  //       },
  //     },
  entry: path.resolve(__dirname, '../src/index.ts'),
  output: {
    filename: 'js/index.[contenthash].js',
    path: path.resolve(__dirname, '../docs'),
    chunkFilename: envs.isProd ? 'js/[contenthash].js' : 'js/[name].js',
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
    open: true,
    historyApiFallback: true,
    // hot: false,
    devMiddleware: {
      writeToDisk: 'WRITE_TO_DISK' in process.env,
    },
  },
};
