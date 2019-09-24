#!/usr/bin/env bash

# assume: you running this script on macos

# QUICKJS_VERSION="2019-08-18" # problem in macos
QUICKJS_VERSION="2019-09-18"
QUICKJS="quickjs-$QUICKJS_VERSION"
BASEDIR=$(pwd)/$(dirname "$0")
BINDIR="$BASEDIR/bin"

QUICKJS_TAR_XZ="$BINDIR/$QUICKJS.tar.xz"

function download {
    mkdir -p $BINDIR
    curl -o $QUICKJS_TAR_XZ "https://bellard.org/quickjs/$QUICKJS.tar.xz"
}

function build {
    mkdir -p $BINDIR/$1
    tar -zxvf $QUICKJS_TAR_XZ -C $BINDIR/$1
    pushd $BINDIR/$1/$QUICKJS
        $1;
    popd
}

function macos {
    make CONFIG_M32=
}

function windows {
    docker run --rm dockcross/windows-static-x64 > $BINDIR/dockcross-win
    chmod +x $BINDIR/dockcross-win
    $BINDIR/dockcross-win make CONFIG_DARWIN= CONFIG_WIN32=y CROSS_PREFIX=x86_64-w64-mingw32.static-
}

download
build macos
build windows
