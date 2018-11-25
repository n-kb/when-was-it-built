#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# rename dist dir
rm -r docs
mv dist docs

# Sends to Github
git ac -m "Updates"

git push origin master