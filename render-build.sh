#!/bin/bash

# 设置环境变量
export RENDER=true

# 安装依赖
echo "安装依赖..."
npm install

# 修复权限问题
echo "修复权限问题..."
chmod +x ./node_modules/.bin/vitepress
chmod +x ./node_modules/vitepress/bin/vitepress.js

# 构建网站
echo "构建网站..."
node build.js

echo "构建完成！" 