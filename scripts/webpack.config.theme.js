const path = require('path');
const fs = require('fs');
const { Compilation } = require('webpack');
const CleanCSS = require('clean-css');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { envs } = require('./webpack.util');

const PLUGIN_NAME = 'REMOVE_THEME_JS_PLUGIN';
class RemoveThemeJSPlugin {
  apply(compiler) {
    // const needCompress = this.compress;
    compiler.hooks.compilation.tap(PLUGIN_NAME, function (compilation) {
      compilation.hooks.processAssets.tap(
        {
          name: PLUGIN_NAME,
          stage: Compilation.PROCESS_ASSETS_STAGE_ADDITIONS,
        },
        function (assets) {
          // const assets = compilation.assets;
          Object.keys(assets).forEach((file) => {
            if (file.endsWith('.css.js')) {
              delete assets[file];
            } else if (envs.isProd && file.endsWith('.css')) {
              const css = new CleanCSS().minify(assets[file].source()).styles;
              assets[file] = {
                source: () => css,
                length: () => css.length,
              };
            }
          });
        },
      );
    });
  }
}

const themesDir = path.resolve(__dirname, '../src/themes');
const themesEntry = Object.fromEntries(
  fs
    .readdirSync(themesDir)
    .filter((f) => {
      return f.endsWith('.scss');
    })
    .map((file) => {
      return [file.slice(0, file.length - 5), path.join(themesDir, file)];
    }),
);

module.exports = {
  mode: envs.isProd ? 'production' : 'development',
  entry: themesEntry,
  devtool: false,
  resolve: {
    extensions: ['.scss', '.js'],
  },
  output: {
    filename: '[name].css.js',
    path: path.resolve(__dirname, '../public/themes'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        parser: {
          node: false,
        },
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false,
              sassOptions: {
                includePaths: [path.resolve(__dirname, '../')],
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new RemoveThemeJSPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
};
