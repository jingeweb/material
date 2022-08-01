const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const GenerateHtmlPlugin = require('./generate-html');
const { envs } = require('./webpack.util');

function getPlugins() {
  return [
    new MiniCssExtractPlugin({
      filename: 'css/index.[contenthash].css',
      chunkFilename: envs.isProd ? 'css/[contenthash].css' : 'css/[name].css',
    }),
    new GenerateHtmlPlugin(),
  ];
}

module.exports = {
  getPlugins,
};
