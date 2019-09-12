#!/usr/bin/env node
const { execFile } = require('child_process');
const { join } = require('path');
const { quickjsDir } = require('..');

execFile(
    join(quickjsDir, 'qjsc'),
    process.argv.slice(2),
    (err, stdout, stderr) => {
        process.stdout.write(stdout);
        process.stderr.write(stderr);
        if (err) process.exit(1);
    }
);
