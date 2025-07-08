#!/usr/bin/env bash

# 部署到Vercel的Shell脚本
echo "准备部署到Vercel..."

# 确保已安装vercel CLI
if ! command -v vercel &> /dev/null; then
    echo "正在安装Vercel CLI..."
    npm install -g vercel
fi

# 部署到Vercel
echo "正在部署到Vercel..."
vercel --prod

echo "部署完成！" 