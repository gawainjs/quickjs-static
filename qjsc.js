const { execFile } = require('child_process');
const { platform } = require('os');
const { join } = require('path');
const { quickjsDir } = require('.');

const qjscExe = (platform() === 'win32') ? 'qjsc.exe' : 'qjsc';

/**
 * @param {readonly string[]} args 
 * @returns {Promise<{ stdout: string, stderr: string }>}
 */
exports.default = function qjsc(args) {
    return new Promise((resolve, reject) => {
        execFile(
            join(quickjsDir, qjscExe),
            args,
            (err, stdout, stderr) => {
                if (err) reject({ err, stdout, stderr });
                else resolve({ stdout, stderr });
            }
        );
    });
}
