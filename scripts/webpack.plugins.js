const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const GenerateHtmlPlugin = require('./generate-html');

function getPlugins() {
  return [
    new MiniCssExtractPlugin({
      filename: 'css/index.[contenthash].css',
      chunkFilename: 'css/[contenthash].css',
    }),
    new GenerateHtmlPlugin(),
  ];
}

module.exports = {
  getPlugins,
};
