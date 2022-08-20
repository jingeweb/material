const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const { minify } = require('html-minifier-terser');
const { envs } = require('./webpack.util');

function r(file) {
  return path.resolve(__dirname, file);
}

async function generateHtml(jsfile, cssfile) {
  let htmlCnt = fs.readFileSync(r('../public/index.html'), 'utf-8');
  let jsCnt = fs.readFileSync(r('../public/loader.js'), 'utf-8');
  jsCnt = jsCnt
    .replace('{STYLE_BUNDLE}', cssfile)
    .replace('{SCRIPT_BUNDLE}', jsfile)
    .replace('{BASE_HREF}', envs.baseHref);
  htmlCnt = htmlCnt.replace('</body>', `<script>\n${jsCnt}\n</script></body>`);
  htmlCnt = htmlCnt.replace('<base href="/"/>', `<base href="${envs.baseHref}"/>`);
  if (envs.isProd) {
    htmlCnt = await minify(htmlCnt, {
      collapseWhitespace: true,
      removeAttributeQuotes: true,
      minifyJS: true,
      minifyCSS: true,
    });
  } else {
    htmlCnt = htmlCnt.replace(
      '</head>',
      `<script src="/lib/jinge.js"></script>
<script src="/lib/jinge-router.js"></script>
</head>`,
    );
  }
  return htmlCnt;
}

let copyAssets = false;
class GenerateHtmlPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap('JINGE_MATERIAL_SITE', (compilation) => {
      compilation.hooks.additionalAssets.tapAsync('JINGE_MATERIAL_SITE', async (cb) => {
        if (!copyAssets) {
          ['assets', 'themes'].forEach((d) => {
            execSync(`mkdir -p ${r('../docs/' + d)}`);
            execSync(`cp -r ${r('../public/' + d + '/*')} ${r('../docs/' + d)}`);
          });
          execSync(`cp -r ${r('../public/404.html')} ${r('../public/.nojekyll')} ${r('../docs')}`);
          copyAssets = true;
        }
        const files = Object.keys(compilation.assets);
        const html = await generateHtml(
          ...['js', 'css'].map((type) => {
            return files.find((f) => f.startsWith(type + '/index.'));
          }),
        );
        compilation.assets['index.html'] = {
          source: () => html,
        };
        cb();
      });
    });
  }
}
module.exports = GenerateHtmlPlugin;
