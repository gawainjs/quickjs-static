#!/usr/bin/env node
const qjsc = require('../qjsc');

qjsc(process.argv.slice(2))
    .then(({ stdout, stderr }) => {
        process.stdout.write(stdout);
        process.stderr.write(stderr);
    })
    .catch(({ stdout, stderr }) => {
        process.stdout.write(stdout);
        process.stderr.write(stderr);
        process.exit(1);
    });
