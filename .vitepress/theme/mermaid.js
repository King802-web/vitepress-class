// 参考掘金文章实现 https://juejin.cn/post/7485305668360224808
export function renderMermaid() {
  if (typeof window === 'undefined') return;
  
  // 确保mermaid已加载
  if (typeof window.mermaid === 'undefined') {
    console.warn('Mermaid not loaded');
    return;
  }

  // 初始化mermaid配置
  window.mermaid.initialize({
    startOnLoad: true,
    theme: 'default',
    securityLevel: 'loose'
  });

  // 查找所有mermaid代码块
  const codeBlocks = document.querySelectorAll('pre[class*="language-mermaid"]');
  if (codeBlocks.length > 0) {
    console.log(`Found ${codeBlocks.length} mermaid code blocks`);
    
    // 处理每个代码块
    codeBlocks.forEach((pre) => {
      // 创建一个div替换pre
      const div = document.createElement('div');
      div.className = 'mermaid';
      div.textContent = pre.textContent;
      
      // 替换pre元素
      if (pre.parentNode) {
        pre.parentNode.replaceChild(div, pre);
      }
    });
    
    // 渲染所有mermaid图表
    window.mermaid.init(undefined, document.querySelectorAll('.mermaid'));
  }
} 