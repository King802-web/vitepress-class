#!/usr/bin/env bash

# 部署到Render的Shell脚本
echo "准备部署到Render..."

# 检查是否安装了render-cli
if ! command -v render &> /dev/null; then
    echo "正在安装Render CLI..."
    npm install -g @render/cli
fi

# 登录Render（如果需要）
# render login

# 部署到Render
echo "正在部署到Render..."
render deploy

echo "部署完成！" 