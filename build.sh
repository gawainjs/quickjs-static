#!/usr/bin/env bash

# assume: you running this script on macos

# QUICKJS_VERSION="2019-08-18" # problem in macos
QUICKJS_VERSION="2019-08-10"
QUICKJS="quickjs-$QUICKJS_VERSION"
BASEDIR=$(pwd)/$(dirname "$0")
TEMPDIR="$BASEDIR/tmp"
PATCHDIR="$BASEDIR/patch"

QUICKJS_TAR_XZ="$TEMPDIR/$QUICKJS.tar.xz"

function download {
    mkdir -p $TEMPDIR
    curl -o $QUICKJS_TAR_XZ "https://bellard.org/quickjs/$QUICKJS.tar.xz"
}

function build {
    mkdir -p $TEMPDIR/$1
    tar -zxvf $QUICKJS_TAR_XZ -C $TEMPDIR/$1
    pushd $TEMPDIR/$1/$QUICKJS
        $1;
    popd
}

function macos {
    patch < $PATCHDIR/macos/Makefile.patch
    make
}

download
build macos
