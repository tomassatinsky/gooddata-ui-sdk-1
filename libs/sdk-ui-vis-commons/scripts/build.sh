#!/usr/bin/env bash

_build_styles() {
  echo
    # node-sass -q --importer node_modules/node-sass-magic-importer/dist/cli.js -o styles/css styles/scss/main.scss
}

_clean() {
    rm -rf dist
}

_common-build() {
    mkdir dist

    _build_styles
}

build() {
    _clean
    _common-build
    tsc -p tsconfig.build.json
}

build-dev() {
    _clean
    _common-build
    tsc -p tsconfig.dev.json
}

build-dev-watch() {
    _common-build
    tsc --watch -p tsconfig.dev.json &
    _build_styles
}

FLAG=$1
if [ "$FLAG" = "--dev" ]; then
    build-dev
elif [ "$FLAG" = "--dev-watch" ]; then
    build-dev-watch
elif [ "$FLAG" = "--styles" ]; then
    _build_styles
else
    build
fi
