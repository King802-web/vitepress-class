---
layout: home

hero:
  name: 计算机教学资源平台
  text: 系统化学习计算机基础知识
  tagline: PC硬件与软件 | 网络原理 | 实例教学
  image:
    src: /images/hero-image.png
    alt: 计算机教学资源平台
  actions:
    - theme: brand
      text: 开始学习
      link: /courses/pc-basics/
    - theme: alt
      text: 查看课程规划
      link: /功能.md

features:
  - icon: 🖥️
    title: PC硬件与软件课程
    details: 全面了解计算机硬件组成、工作原理以及常用软件应用，从零开始掌握计算机基础知识。
    link: /courses/pc-basics/
  - icon: 🌐
    title: 网络原理课程
    details: 基于《网络是怎样连接的》，系统讲解网络通信原理，理解现代网络运作机制。
    link: /courses/network/
---

<div class="home-content">

## 为什么选择我们的课程？

<div class="features-grid">
  <div class="feature-card">
    <div class="feature-icon">📚</div>
    <h3>系统化学习路径</h3>
    <p>精心设计的课程体系，从基础到进阶，循序渐进地构建完整知识体系</p>
  </div>
  <div class="feature-card">
    <div class="feature-icon">🔍</div>
    <h3>深入浅出的讲解</h3>
    <p>复杂概念简单化，理论结合实践，让抽象知识变得具体可理解</p>
  </div>
  <div class="feature-card">
    <div class="feature-icon">🛠️</div>
    <h3>实践驱动学习</h3>
    <p>大量动手实践环节，巩固理论知识，培养实际操作能力</p>
  </div>
  <div class="feature-card">
    <div class="feature-icon">🔄</div>
    <h3>与时俱进的内容</h3>
    <p>定期更新课程内容，反映技术发展趋势和行业最新变化</p>
  </div>
</div>

## 热门课程章节

<div class="popular-courses">
  <a href="/courses/pc-basics/hardware/overview.html" class="course-card">
    <h3>计算机组成原理概述</h3>
    <p>揭开计算机系统的神秘面纱，了解冯·诺依曼架构与现代计算机工作原理</p>
    <span class="course-card-tag">PC基础</span>
  </a>
  <a href="/courses/network/basics/models.html" class="course-card">
    <h3>网络模型与协议族</h3>
    <p>理解OSI七层模型和TCP/IP四层模型，掌握网络通信的基础框架</p>
    <span class="course-card-tag">网络原理</span>
  </a>
  <a href="/courses/pc-basics/assembly/" class="course-card">
    <h3>PC组装与维护</h3>
    <p>从零开始学习电脑组装，掌握硬件选购、兼容性分析和故障排查技巧</p>
    <span class="course-card-tag">PC基础</span>
  </a>
  <a href="/courses/network/connection/" class="course-card">
    <h3>网络连接过程详解</h3>
    <p>探索数据包的旅程，了解从输入URL到网页显示的全过程</p>
    <span class="course-card-tag">网络原理</span>
  </a>
</div>

## 学习路径推荐

<div class="learning-paths">
  <div class="path-card">
    <h3>计算机入门者</h3>
    <ol>
      <li><a href="/courses/pc-basics/hardware/">计算机硬件基础</a></li>
      <li><a href="/courses/pc-basics/os/">操作系统基础</a></li>
      <li><a href="/courses/pc-basics/software/">常用软件应用</a></li>
      <li><a href="/courses/network/basics/">网络基础知识</a></li>
    </ol>
  </div>
  <div class="path-card">
    <h3>IT从业人员</h3>
    <ol>
      <li><a href="/courses/network/basics/models.html">网络模型与协议族</a></li>
      <li><a href="/courses/network/protocols/">TCP/IP协议详解</a></li>
      <li><a href="/courses/network/security/">网络安全基础</a></li>
      <li><a href="/courses/pc-basics/assembly/">PC组装与故障诊断</a></li>
    </ol>
  </div>
</div>

## 最新课程动态

<div class="news-section">
  <div class="news-card">
    <span class="date">2023年7月1日</span>
    <h3>网络课程全面更新</h3>
    <p>新增5G网络和云计算相关内容，反映当前网络技术最新发展趋势</p>
    <a href="/courses/network/applications/">查看详情 →</a>
  </div>
  <div class="news-card">
    <span class="date">2023年6月15日</span>
    <h3>PC硬件课程增加实操视频</h3>
    <p>硬件组装章节新增高清视频教程，提供更直观的学习体验</p>
    <a href="/courses/pc-basics/assembly/">查看详情 →</a>
  </div>
</div>

</div>

<style>
.home-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.feature-card {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1.5rem;
  transition: transform 0.3s, box-shadow 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
}

.feature-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.popular-courses {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.course-card {
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 1.5rem;
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative;
}

.course-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.course-card-tag {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: var(--vp-c-brand);
  color: white;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  font-size: 0.8rem;
}

.learning-paths {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.path-card {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1.5rem;
}

.path-card ol {
  padding-left: 1.2rem;
}

.path-card li {
  margin-bottom: 0.5rem;
}

.news-section {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.news-card {
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 1.5rem;
}

.date {
  font-size: 0.85rem;
  color: #666;
}

@media (max-width: 640px) {
  .features-grid,
  .popular-courses,
  .learning-paths,
  .news-section {
    grid-template-columns: 1fr;
  }
}
</style>



