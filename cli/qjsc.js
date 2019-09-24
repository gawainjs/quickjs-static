#!/usr/bin/env node
const { execFile } = require('child_process');
const { platform } = require('os');
const { join } = require('path');
const { quickjsDir } = require('..');

const qjsc = (platform() === 'win32') ? 'qjsc.exe' : 'qjsc';

execFile(
    join(quickjsDir, qjsc),
    process.argv.slice(2),
    (err, stdout, stderr) => {
        process.stdout.write(stdout);
        process.stderr.write(stderr);
        if (err) process.exit(1);
    }
);
