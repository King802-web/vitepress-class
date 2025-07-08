#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// 设置环境变量，标记为Vercel环境
process.env.VERCEL = 'true';

console.log('开始构建VitePress网站...');

try {
  // 使用node直接运行vitepress构建脚本
  console.log('运行VitePress构建...');
  
  // 直接使用Node运行VitePress的构建脚本
  const vitepressPath = path.resolve('./node_modules/vitepress/bin/vitepress.js');
  console.log(`VitePress路径: ${vitepressPath}`);
  
  if (fs.existsSync(vitepressPath)) {
    execSync(`node ${vitepressPath} build`, { stdio: 'inherit' });
    console.log('构建完成！');
  } else {
    console.error('找不到VitePress路径，尝试使用另一种方法...');
    // 备用方法：使用require直接运行VitePress
    const { build } = require('vitepress');
    build(process.cwd());
    console.log('构建完成！');
  }
} catch (error) {
  console.error('构建失败:', error);
  process.exit(1);
} 