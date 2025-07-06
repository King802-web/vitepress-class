# 创意工作室网站

这是一个使用VitePress构建的创意工作室展示网站。

## 项目设置

```bash
# 安装依赖
npm install

# 本地开发
npm run dev
```

## 部署到GitHub Pages

### 准备工作

1. 在GitHub上创建一个名为`vitepress-class`的仓库
2. 将本地代码推送到GitHub仓库：

```bash
git init
git add .
git commit -m "初始提交"
git remote add origin https://github.com/<你的用户名>/vitepress-class.git
git push -u origin main
```

### 手动部署

#### Windows系统

1. 修改`deploy.bat`文件中的GitHub用户名：

```batch
:: 将这一行
git push -f git@github.com:<USERNAME>/vitepress-class.git main:gh-pages
:: 修改为
git push -f git@github.com:<你的用户名>/vitepress-class.git main:gh-pages
```

2. 运行部署命令：

```batch
npm run deploy
```

#### Unix/Linux/Mac系统

1. 修改`deploy.sh`文件中的GitHub用户名：

```bash
# 将这一行
git push -f git@github.com:<USERNAME>/vitepress-class.git main:gh-pages
# 修改为
git push -f git@github.com:<你的用户名>/vitepress-class.git main:gh-pages
```

2. 运行部署命令：

```bash
npm run deploy:unix
```

3. 在GitHub仓库设置中启用GitHub Pages：
   - 进入仓库的`Settings` > `Pages`
   - 在`Source`部分选择`gh-pages`分支和`/(root)`文件夹
   - 点击`Save`

4. 等待几分钟后，您的网站将可以通过 `https://<你的用户名>.github.io/vitepress-class/` 访问。

## 注意事项

- 确保所有图片和资源的路径都是相对于base路径的
- 部署前请先在本地预览：`npm run build && npm run docs:preview`
- 如果您在Windows系统上遇到Git认证问题，可以尝试使用HTTPS方式：
  ```batch
  :: 在deploy.bat中将
  git push -f git@github.com:<你的用户名>/vitepress-class.git main:gh-pages
  :: 修改为
  git push -f https://github.com/<你的用户名>/vitepress-class.git main:gh-pages
  ```
- 首次部署后，需要在GitHub仓库设置中手动启用GitHub Pages 