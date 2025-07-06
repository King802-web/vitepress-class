@echo off
echo 开始部署到GitHub Pages...

:: 构建
call npm run build

:: 进入生成的文件夹
cd .vitepress\dist

:: 如果是发布到自定义域名，请取消下面一行的注释并修改为你的域名
:: echo www.example.com > CNAME

:: 初始化Git仓库
git init
git add -A
git commit -m "deploy"

:: 如果发布到 https://<USERNAME>.github.io/<REPO>
:: 请替换 <USERNAME> 为你的GitHub用户名
git push -f git@github.com:King802-web/vitepress-class.git master:gh-pages

cd ..\..

echo 部署完成! 