# VitePress 项目

这是一个使用 VitePress 构建的静态网站项目。

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

## 构建

```bash
# 构建静态网站
npm run build

# 预览构建结果
npm run docs:preview
```

## 部署

### 部署到 GitHub Pages

```bash
# Windows
npm run deploy:win
# 或
npm run deploy

# Unix/Linux/macOS
npm run deploy:unix
```

### 部署到 Vercel

#### 方法一：使用脚本部署

```bash
# Windows
npm run deploy:vercel:win
# 或
npm run deploy:vercel

# Unix/Linux/macOS
npm run deploy:vercel:unix
```

#### 方法二：通过 Vercel 平台部署

1. 在 [Vercel](https://vercel.com) 注册账号并登录
2. 点击 "New Project" 按钮
3. 导入你的 GitHub 仓库
4. 配置构建设置:
   - Framework Preset: Other
   - Build Command: npm run build
   - Output Directory: .vitepress/dist
5. 点击 "Deploy" 按钮

### 部署到 Render

#### 方法一：使用脚本部署

```bash
# Windows
npm run deploy:render:win
# 或
npm run deploy:render

# Unix/Linux/macOS
npm run deploy:render:unix
```

#### 方法二：通过 Render 平台部署

1. 在 [Render](https://render.com) 注册账号并登录
2. 点击 "New" 按钮，选择 "Static Site"
3. 连接你的 GitHub 仓库
4. 配置部署设置:
   - Name: 你的项目名称
   - Build Command: npm install && npm run build
   - Publish Directory: .vitepress/dist
5. 点击 "Create Static Site" 按钮

## 项目配置

- 项目配置文件位于 `.vitepress/config.mts`
- GitHub Pages 部署基路径: `/vitepress-class/`
- Vercel 部署基路径: `/`
- Render 部署基路径: `/`

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