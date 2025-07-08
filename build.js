#!/usr/bin/env node

// 设置环境变量，标记为Render环境
process.env.RENDER = 'true';

async function main() {
  console.log('开始构建VitePress网站...');
  
  try {
    // 使用VitePress API构建
    console.log('导入VitePress...');
    
    // 尝试直接使用require导入vitepress
    try {
      console.log('尝试方法1: 使用require导入');
      const vitepress = require('vitepress');
      console.log('开始构建...');
      await vitepress.build(process.cwd());
      console.log('构建完成！');
      return;
    } catch (err) {
      console.log('方法1失败:', err.message);
    }
    
    // 尝试使用动态导入
    try {
      console.log('尝试方法2: 使用动态导入');
      const { build } = await import('vitepress');
      console.log('开始构建...');
      await build(process.cwd());
      console.log('构建完成！');
      return;
    } catch (err) {
      console.log('方法2失败:', err.message);
    }
    
    // 尝试直接执行vitepress命令
    try {
      console.log('尝试方法3: 使用child_process执行vitepress');
      const { execSync } = require('child_process');
      console.log('执行: node ./node_modules/vitepress/bin/vitepress.js build');
      execSync('node ./node_modules/vitepress/bin/vitepress.js build', { stdio: 'inherit' });
      console.log('构建完成！');
      return;
    } catch (err) {
      console.log('方法3失败:', err.message);
      throw err; // 重新抛出错误，因为这是最后的尝试
    }
  } catch (error) {
    console.error('构建失败:', error);
    process.exit(1);
  }
}

main(); 