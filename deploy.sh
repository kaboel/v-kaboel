#!/usr/bin/env sh

set -e

npm run build

cd docs
echo "kaboel.space" > CNAM
cd ../

git add .
git commit -m 'deploy build'
git push -u origin master