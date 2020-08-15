#!/usr/bin/env sh

set -e

npm run build

cd docs
echo "kaboel.space" > CNAME

cd ../

git add .
git commit -m 'deploy build'
git push -u origin master