const os = require('os');
const path = require('path');

const platform = os.platform();
if (platform !== 'darwin' && platform !== 'win32') {
    console.error('Unsupported platform.');
    process.exit(1);
}

const arch = os.arch();
if (arch !== 'x64') {
    console.error('Unsupported architecture.');
    process.exit(1);
}

const quickjsVersion = '2019-09-18';
const quickjsDir = path.join(
    __dirname,
    'bin',
    { darwin: 'macos', win32: 'windows' }[platform],
    `quickjs-${ quickjsVersion }`,
);

exports.quickjsVersion = quickjsVersion;
exports.quickjsDir = quickjsDir;
