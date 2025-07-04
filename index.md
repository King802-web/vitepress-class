---
layout: home
hero:
  name: 机器人创新中心
  text: 广东省机器人创新中心
  tagline: 打造机器人产业技术创新平台和服务平台
  image:
    src: /banner.jpg
    alt: Center Image
  actions:
    - theme: brand
      text: 了解更多
      link: /about/introduction
    - theme: alt
      text: 产品系统
      link: /products/robdts
features:
  - icon: 🏢
    title: 中心概况
    details: 了解中心的基本情况、使命和愿景
    link: /about/introduction
  - icon: 🤖
    title: 产品系统
    details: 探索我们的软件和系统解决方案
    link: /products/robdts
  - icon: 🔬
    title: 研发合作
    details: 共性关键技术与技术服务
    link: /rd/key-technologies
  - icon: 🏆
    title: 成果转化
    details: 技术推广与应用
    link: /achievements/tech-promotion
---

<div class="home-content">

## 中心简介

广东省机器人创新中心致力于打造机器人产业技术创新平台和服务平台，以科技创新驱动机器人产业发展。我们整合产学研资源，推动机器人技术在各行业的应用与发展。

## 创新动态

<div class="news-grid">
  <div class="news-card">
    <h3>机器人离线编程与数字孪生中控系统推广会成功举办</h3>
    <p>2023年12月15日，机器人创新中心联合上海赛威德机器人有限公司成功举办产品推广会...</p>
    <div class="news-meta">
      <span class="news-date">2023-12-18</span>
      <a class="news-link" href="/news/center-news">阅读更多</a>
    </div>
  </div>
  
  <div class="news-card">
    <h3>2023年广东省专精特新企业政策宣讲会成功举办</h3>
    <p>6月26日，以"赋智 赋值 赋能"为主题的政策宣讲会在智造谷创新园成功举办...</p>
    <div class="news-meta">
      <span class="news-date">2023-07-24</span>
      <a class="news-link" href="/news/center-news">阅读更多</a>
    </div>
  </div>
  
  <div class="news-card">
    <h3>智能锁自动化柔性定位测试系统成功研发</h3>
    <p>广东省机器人创新中心自主研发出智能锁自动化柔性定位测试系统，实现了全自动化测试...</p>
    <div class="news-meta">
      <span class="news-date">2022-11-25</span>
      <a class="news-link" href="/news/center-news">阅读更多</a>
    </div>
  </div>
</div>

<div class="view-more">
  <a href="/news/center-news">查看更多动态</a>
</div>

## 创新联盟

当前，智能机器人是衡量科技创新和制造业发展水平的重要标志之一，是智能制造的关键抓手和技术支撑。机器人产业的发展直接关系到智能制造水平的提升以及制造强国和高质量发展战略的实施成效。

<div class="alliance-action">
  <a href="/alliance/introduction">加入创新联盟</a>
</div>

</div>

<style>
/**
 * 首页内容区域样式
 * 为首页内容设置最大宽度和边距，使内容居中显示
 */
.home-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

/**
 * 首页标题样式
 * 为首页各部分标题设置样式，包括字体大小、颜色和边距
 */
.home-content h2 {
  font-size: 1.8rem;
  color: var(--vp-c-brand);
  margin: 3rem 0 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #eaecef;
}

/**
 * 新闻网格布局
 * 使用CSS网格创建响应式新闻卡片布局
 */
.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

/**
 * 新闻卡片样式
 * 设置新闻卡片的边框、圆角、阴影和过渡效果
 */
.news-card {
  border: 1px solid #eaecef;
  border-radius: 8px;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

/**
 * 新闻卡片悬停效果
 * 当鼠标悬停在卡片上时添加提升和阴影效果
 */
.news-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

/**
 * 新闻卡片标题样式
 * 设置新闻标题的字体大小和下边距
 */
.news-card h3 {
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
}

/**
 * 新闻元数据区域样式
 * 设置包含日期和链接的容器的样式
 */
.news-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
}

/**
 * 新闻日期样式
 * 设置日期文字的颜色和大小
 */
.news-date {
  color: #666;
  font-size: 0.9rem;
}

/**
 * 新闻链接样式
 * 设置"阅读更多"链接的颜色和过渡效果
 */
.news-link {
  color: var(--vp-c-brand);
  transition: color 0.2s;
}

/**
 * 新闻链接悬停效果
 * 当鼠标悬停在链接上时改变颜色
 */
.news-link:hover {
  color: var(--vp-c-brand-dark);
}

/**
 * 查看更多按钮容器样式
 * 设置查看更多按钮的对齐方式和边距
 */
.view-more {
  text-align: center;
  margin: 2rem 0;
}

/**
 * 查看更多按钮样式
 * 设置按钮的背景色、文字颜色、内边距和圆角
 */
.view-more a {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background-color: var(--vp-c-brand);
  color: white;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s;
}

/**
 * 查看更多按钮悬停效果
 * 当鼠标悬停在按钮上时改变背景色
 */
.view-more a:hover {
  background-color: var(--vp-c-brand-dark);
}

/**
 * 联盟行动区域样式
 * 设置联盟介绍下方操作按钮的对齐方式和边距
 */
.alliance-action {
  text-align: center;
  margin: 1.5rem 0;
}

/**
 * 联盟行动按钮样式
 * 设置联盟相关按钮的样式，与查看更多按钮保持一致
 */
.alliance-action a {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background-color: var(--vp-c-brand);
  color: white;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s;
}

/**
 * 联盟行动按钮悬停效果
 * 当鼠标悬停在按钮上时改变背景色
 */
.alliance-action a:hover {
  background-color: var(--vp-c-brand-dark);
}

/**
 * 响应式适配 - 移动设备
 * 在小屏幕设备上调整样式以提供更好的用户体验
 */
@media (max-width: 768px) {
  .news-grid {
    grid-template-columns: 1fr;
  }
  
  .home-content h2 {
    font-size: 1.5rem;
  }
}
</style>



