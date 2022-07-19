const fs = require('fs');
const path = require('path');

function getTsConfigPathsAlias() {
  const code = fs.readFileSync(path.resolve(__dirname, '../tsconfig.json'), 'utf-8');
  const cfg = new Function(`return ${code}`)();
  const paths = cfg.compilerOptions.paths || {};

  return Object.keys(paths).reduce(function (res, k) {
    const p = paths[k][0];
    const key = /\/\*$/.test(k) ? k.slice(0, -2) : k;
    const _path = /\/\*$/.test(p) ? p.slice(0, -2) : p;
    // 如果key有重复且原key中不包含/*，则不写入alias
    if (res[key] && !/\/\*$/.test(k)) return res;
    res[key] = path.resolve(_path);
    return res;
  }, {});
}

const envs = {
  isProd: 'PROD' in process.env,
  baseHref: process.env.BASE_HREF || ('PROD' in process.env ? '/material/' : '/'),
};

module.exports = {
  getTsConfigPathsAlias,
  envs,
};
