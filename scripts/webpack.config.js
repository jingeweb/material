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
  externals: envs.isProd
    ? {}
    : {
        jinge: 'jinge',
        'jinge-router': "window['jinge-router']",
      },
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
    static: [
      {
        directory: path.resolve(__dirname, '../public'),
      },
      {
        directory: path.resolve(__dirname, '../node_modules'),
      },
    ],
    port: 8080,
    open: true,
    host: process.env.HOST || 'localhost',
    historyApiFallback: true,
    // hot: false,
    devMiddleware: process.env.WRITE_TO_DISK
      ? {
          writeToDisk: true,
        }
      : undefined,
  },
};
