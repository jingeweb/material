/**
 * This webpack loader is only used for development of jinge-material site.
 */

const path = require('path');
const fs = require('fs');

function readFileIfExist(filePath) {
  // console.log('read', filePath);
  return new Promise((resolve) => {
    fs.readFile(filePath, 'utf-8', (err, cnt) => {
      if (err) {
        resolve('');
      } else {
        resolve(cnt);
      }
    });
  });
}

module.exports = function exampleSourceLoader() {
  const callback = this.async();
  this.cacheable && this.cacheable();

  const jsPath = this.resourcePath.replace(/\\/g, '/');
  // console.log('handle', jsPath);
  if (!jsPath.endsWith('.ts')) {
    callback(new Error('example-source-loader must be used on .ts file'));
    return;
  }

  const dirName = path.dirname(jsPath);
  const fileBaseName = path.basename(jsPath, '.ts');

  Promise.all([
    readFileIfExist(this.resourcePath),
    readFileIfExist(path.join(dirName, fileBaseName + '.scss')),
    readFileIfExist(path.join(dirName, fileBaseName + '.html')),
  ]).then(
    (cnts) => {
      // console.log(cnts);
      callback(
        null,
        `export default ${JSON.stringify({
          ts: cnts[0],
          sass: cnts[1],
          html: cnts[2],
        })}`,
      );
    },
    (err) => {
      callback(err);
    },
  );
};
