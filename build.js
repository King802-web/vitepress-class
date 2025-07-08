#!/usr/bin/env node

// 设置环境变量，标记为Vercel环境
process.env.VERCEL = 'true';

async function main() {
  console.log('开始构建VitePress网站...');
  
  try {
    // 使用VitePress API构建
    console.log('导入VitePress...');
    const { build } = await import('vitepress');
    
    console.log('开始构建...');
    await build(process.cwd());
    
    console.log('构建完成！');
  } catch (error) {
    console.error('构建失败:', error);
    process.exit(1);
  }
}

main(); 