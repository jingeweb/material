const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { IconAlias } = require('jinge-material-icons/compiler');
const { MaterialAlias } = require('jinge-material/compiler');
const { RouterAlias } = require('jinge-router/compiler');
const { I18NAlias, JingeI18NLoader } = require('jinge-i18n/compiler');
const { JingeComponentLoader, getJingeTemplateRuleWithAlias } = require('jinge-compiler');

const isProd = 'PROD' in process.env;
const baseHref = process.env.BASE_HREF || (isProd ? '/material/' : '/');

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: path.join(__dirname, 'src/index.ts'),
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist'),
    chunkFilename: '[contenthash].js',
    publicPath: baseHref,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [JingeComponentLoader, JingeI18NLoader],
      },
      {
        test: /\.html$/,
        use: getJingeTemplateRuleWithAlias({
          ...I18NAlias,
          ...MaterialAlias,
          ...IconAlias,
          ...RouterAlias,
        }),
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'index.css',
      chunkFilename: '[contenthash].css',
    }),
  ],
};
