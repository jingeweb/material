const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { JingeComponentLoader, getJingeTemplateRuleWithAlias } = require('jinge-compiler');
const { IconAlias } = require('jinge-material-icons/compiler');
const { MaterialAlias } = require('jinge-material/compiler');
const { RouterAlias } = require('jinge-router/compiler');
const { envs } = require('./webpack.util');

function getScriptLoaders() {
  return [
    {
      test: /\.ts$/,
      oneOf: [
        {
          resourceQuery: /example/,
          use: path.resolve(__dirname, './example-loader.js'),
        },
        {
          use: [
            JingeComponentLoader,
            // JingeI18NLoader,
            {
              loader: 'esbuild-loader',
              options: {
                loader: 'ts',
                charset: 'utf8',
              },
            },
          ],
        },
      ],
    },
    getJingeTemplateRuleWithAlias({
      // ...I18NAlias,
      ...MaterialAlias,
      ...IconAlias,
      ...RouterAlias,
    }),
  ];
}

function getStyleLoaders() {
  return [
    {
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader'],
    },
    {
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            modules: {
              exportLocalsConvention: 'camelCaseOnly',
              localIdentName: envs.isProd ? '[hash:base64]' : '[local]--[hash:base64:5]',
              auto: (resourcePath) => !resourcePath.endsWith('.global.scss'),
            },
          },
        },
        'sass-loader',
      ],
    },
  ];
}

module.exports = {
  getScriptLoaders,
  getStyleLoaders,
};
