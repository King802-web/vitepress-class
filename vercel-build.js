#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// 设置环境变量，标记为Vercel环境
process.env.VERCEL = 'true';

console.log('开始构建VitePress网站...');

try {
  // 执行构建命令
  console.log('运行VitePress构建...');
  execSync('npx --no-install vitepress build', { stdio: 'inherit' });
  
  console.log('构建完成！');
} catch (error) {
  console.error('构建失败:', error);
  process.exit(1);
} 