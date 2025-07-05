# 项目展示

这里展示了我们团队完成的部分精选项目案例，涵盖网站开发、小程序开发和点餐系统解决方案等多个领域。

## 网站开发项目

<div class="projects-grid">
  <div class="project-card">
    <div class="project-image">
      <img src="/images/cases/web-case1.png" alt="企业官网设计" />
    </div>
    <h3>企业官网设计</h3>
    <p>为某科技公司设计的现代化响应式企业官网，融合了品牌特色和用户体验优化。</p>
    <div class="project-tags">
      <span>响应式设计</span>
      <span>Vue.js</span>
      <span>企业官网</span>
    </div>
  </div>
  
  <div class="project-card">
    <div class="project-image">
      <img src="/images/project1.png" alt="电子商务平台" />
    </div>
    <h3>电子商务平台</h3>
    <p>为某品牌开发的全功能电子商务平台，包含商品展示、购物车、支付和会员系统等功能。</p>
    <div class="project-tags">
      <span>电商平台</span>
      <span>React</span>
      <span>支付集成</span>
    </div>
  </div>
  
  <div class="project-card">
    <div class="project-image">
      <img src="/images/project1.png" alt="教育培训网站" />
    </div>
    <h3>教育培训网站</h3>
    <p>为某教育机构开发的在线课程平台，支持视频教学、在线测试和学习进度跟踪等功能。</p>
    <div class="project-tags">
      <span>教育平台</span>
      <span>Vue.js</span>
      <span>视频播放</span>
    </div>
  </div>
</div>

## 微信小程序项目

<div class="projects-grid">
  <div class="project-card">
    <div class="project-image">
      <img src="/images/cases/miniprogram-case1.png" alt="会员服务小程序" />
    </div>
    <h3>会员服务小程序</h3>
    <p>为某品牌开发的会员服务与营销活动小程序，实现了会员积分、优惠券和活动报名等功能。</p>
    <div class="project-tags">
      <span>微信小程序</span>
      <span>会员系统</span>
      <span>营销活动</span>
    </div>
  </div>
  
  <div class="project-card">
    <div class="project-image">
      <img src="/images/project2.png" alt="社区服务小程序" />
    </div>
    <h3>社区服务小程序</h3>
    <p>为某社区开发的便民服务小程序，整合了物业服务、社区活动和邻里互助等功能。</p>
    <div class="project-tags">
      <span>微信小程序</span>
      <span>社区服务</span>
      <span>位置服务</span>
    </div>
  </div>
  
  <div class="project-card">
    <div class="project-image">
      <img src="/images/project2.png" alt="健康管理小程序" />
    </div>
    <h3>健康管理小程序</h3>
    <p>为某医疗机构开发的健康管理小程序，提供健康数据记录、在线咨询和预约挂号等服务。</p>
    <div class="project-tags">
      <span>微信小程序</span>
      <span>医疗健康</span>
      <span>数据可视化</span>
    </div>
  </div>
</div>

## 点餐系统项目

<div class="projects-grid">
  <div class="project-card">
    <div class="project-image">
      <img src="/images/cases/order-case1.png" alt="连锁餐厅点餐系统" />
    </div>
    <h3>连锁餐厅点餐系统</h3>
    <p>为某连锁餐厅开发的多功能点餐与会员管理系统，支持堂食点餐、外卖配送和预订等多种场景。</p>
    <div class="project-tags">
      <span>点餐系统</span>
      <span>多门店管理</span>
      <span>会员积分</span>
    </div>
  </div>
  
  <div class="project-card">
    <div class="project-image">
      <img src="/images/project3.png" alt="咖啡厅自助点餐系统" />
    </div>
    <h3>咖啡厅自助点餐系统</h3>
    <p>为某精品咖啡连锁店开发的自助点餐系统，提升了用户体验和运营效率。</p>
    <div class="project-tags">
      <span>自助点餐</span>
      <span>小程序</span>
      <span>支付集成</span>
    </div>
  </div>
  
  <div class="project-card">
    <div class="project-image">
      <img src="/images/project3.png" alt="校园食堂点餐系统" />
    </div>
    <h3>校园食堂点餐系统</h3>
    <p>为某高校食堂开发的点餐系统，解决了高峰期排队问题，提升了师生就餐体验。</p>
    <div class="project-tags">
      <span>校园服务</span>
      <span>高并发</span>
      <span>数据分析</span>
    </div>
  </div>
</div>

## 联系我们

如果您对我们的项目感兴趣，或者有任何定制化的需求，欢迎联系我们，我们将为您提供专业的解决方案。

<div class="contact-button">
  <a href="/contact/">立即咨询</a>
</div>

<style>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin: 40px 0;
}

.project-card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-image {
  height: 200px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.project-card:hover .project-image img {
  transform: scale(1.05);
}

.project-card h3 {
  padding: 15px 20px 5px;
  font-size: 1.3rem;
  margin: 0;
}

.project-card p {
  padding: 0 20px 15px;
  color: #666;
  margin: 10px 0;
}

.project-tags {
  padding: 0 20px 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.project-tags span {
  background-color: #f0f0f0;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 0.8rem;
  color: #666;
}

.contact-button {
  margin-top: 30px;
  text-align: center;
}

.contact-button a {
  display: inline-block;
  padding: 12px 24px;
  background-color: var(--vp-c-brand);
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 500;
  transition: background-color 0.3s;
}

.contact-button a:hover {
  background-color: var(--vp-c-brand-dark);
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style> 