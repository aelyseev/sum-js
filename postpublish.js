const {execSync} = require('child_process');
const pkg = require('./package.json');

execSync(
    `npm dist-tag add ${pkg.name}@${pkg.version} ${process.env.TARGET}`,
    { stdio: 'inherit' }
);
