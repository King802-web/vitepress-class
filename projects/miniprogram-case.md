# 微信小程序案例：餐饮点餐系统

## 项目概述

本项目是一个功能完善的微信小程序餐饮点餐系统，为餐饮商家提供了一个开箱即用的数字化解决方案。系统支持堂食点餐、外卖配送、预约订座等多种业务场景，帮助餐饮商家提升运营效率和顾客体验。

## 主要功能

### 用户端功能

- **多门店选择**：支持连锁餐厅多门店管理，用户可选择就近门店
- **堂食点餐**：扫描餐桌二维码，在线浏览菜单并下单
- **外卖配送**：支持外卖配送，可设置配送范围和费用
- **预约订座**：在线预约餐位，减少等位时间
- **会员系统**：积分累计、会员等级、优惠券等功能
- **支付功能**：支持微信支付等多种支付方式
- **订单管理**：查看历史订单、订单状态跟踪

### 商家端功能

- **订单管理**：实时接收订单，处理订单状态变更
- **菜品管理**：添加、编辑、上下架菜品，设置价格和库存
- **门店管理**：设置营业时间、配送范围、门店信息等
- **会员管理**：查看会员信息，发放优惠券
- **数据统计**：销售数据分析，热销菜品排行等
- **打印功能**：支持厨房打印、前台打印等多种场景

## 技术特点

- **微信小程序原生开发**：使用微信小程序原生框架开发，性能优异
- **云开发支持**：可选择使用微信云开发，降低服务器维护成本
- **组件化设计**：采用组件化开发方式，提高代码复用性
- **多语言支持**：内置国际化解决方案，支持多语言切换
- **高度可配置**：大部分功能可通过后台配置，无需修改代码

## 项目截图

<div class="screenshots-grid">
  <div class="screenshot-item">
    <img src="/images/首页.jpg" alt="首页菜单" class="screenshot-image" />
    <div class="screenshot-caption">首页菜单</div>
  </div>
  <div class="screenshot-item">
    <img src="/images/订单.jpg" alt="订单详情" class="screenshot-image" />
    <div class="screenshot-caption">订单详情</div>
  </div>
  <div class="screenshot-item">
    <img src="/images/用户中心.jpg" alt="会员中心" class="screenshot-image" />
    <div class="screenshot-caption">会员中心</div>
  </div>
</div>

## 扫码体验

<div class="qrcode-container">
  <img src="/images/点餐二维码.jpg" alt="微信小程序二维码" class="qrcode-image" />
  <p class="qrcode-tip">扫描上方二维码，体验餐饮点餐小程序</p>
</div>

## 项目亮点

- **开箱即用**：完整的解决方案，包含前端和后台管理系统
- **高性能**：优化的代码结构和数据流，保证小程序运行流畅
- **可扩展**：模块化设计，方便根据需求进行功能扩展
- **完善文档**：提供详细的使用文档和二次开发指南
- **持续更新**：定期更新维护，跟进微信小程序最新特性

## 技术栈

- 前端：微信小程序原生框架
- 后端：Node.js / 微信云开发
- 数据库：MySQL / 云数据库
- 支付：微信支付
- 地图：腾讯地图API

## 项目来源

本项目基于开源项目 [woniudiancang/bee](https://github.com/woniudiancang/bee) 进行开发和定制，感谢原作者的贡献。

<style>
.screenshots-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin: 30px 0;
}

.screenshot-item {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}

.screenshot-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.screenshot-caption {
  padding: 10px;
  text-align: center;
  background-color: #f8f8f8;
  font-size: 14px;
  font-weight: 500;
}

.qrcode-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
}

.qrcode-image {
  width: 200px;
  height: 200px;
  margin-bottom: 15px;
}

.qrcode-tip {
  color: #666;
  font-size: 14px;
}
</style> 