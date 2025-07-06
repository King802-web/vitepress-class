#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 构建
npm run build

# 进入生成的文件夹
cd .vitepress/dist

# 如果是发布到自定义域名，请取消下面一行的注释并修改为你的域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# 请替换 <USERNAME> 为你的GitHub用户名，<REPO> 为仓库名称
git push -f git@github.com:<USERNAME>/vitepress-my.git main:gh-pages

cd - 