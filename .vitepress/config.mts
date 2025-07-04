import { defineConfig } from 'vitepress'

/**
 * VitePress 站点配置文件
 * 本文件用于配置整个网站的基本设置、导航栏、侧边栏等全局元素
 */
export default defineConfig({
  /**
   * 网站标题
   * 显示在浏览器标签页和首页标题中
   */
  title: "广东省机器人创新中心",
  
  /**
   * 网站描述
   * 用于SEO优化，显示在搜索引擎结果中
   */
  description: "打造机器人产业技术创新平台和服务平台",
  
  /**
   * 主题配置
   * 用于配置网站的主题相关设置，包括导航栏、侧边栏、页脚等
   */
  themeConfig: {
    /**
     * 网站logo
     * 显示在导航栏左侧，路径相对于public目录
     */
    logo: '/logo.png',
    
    /**
     * 导航栏配置
     * 定义网站顶部的导航菜单，支持多级菜单
     */
    nav: [
      // 首页链接
      { text: '首页', link: '/' },
      { 
        // 下拉菜单 - 中心概况
        text: '中心概况', 
        items: [
          { text: '中心简介', link: '/about/introduction' },
          { text: '成立背景', link: '/about/background' },
          { text: '建设目标', link: '/about/goals' },
          { text: '中心任务/功能', link: '/about/functions' },
          { text: '运行机制', link: '/about/mechanism' },
          { text: '创新中心分中心', link: '/about/branches' },
          { text: '文化理念', link: '/about/culture' },
          { text: '荣誉资质', link: '/about/honors' }
        ]
      },
      { 
        // 下拉菜单 - 产品系统
        text: '产品系统', 
        items: [
          { text: 'RobDTS软件', link: '/products/robdts' },
          { text: '柔性制造系统', link: '/products/flexible-manufacturing' },
          { text: '智能磨抛工作站', link: '/products/polishing-station' },
          { text: '智能制造实训平台', link: '/products/training-platform' },
          { text: '智能焊接工作站', link: '/products/welding-station' },
          { text: '售后服务', link: '/products/after-sales' }
        ]
      },
      { 
        // 下拉菜单 - 研发合作
        text: '研发合作', 
        items: [
          { text: '共性关键技术', link: '/rd/key-technologies' },
          { text: '技术服务', link: '/rd/tech-services' },
          { text: '省企业重点实验室', link: '/rd/key-laboratory' },
          { text: '产学研合作', link: '/rd/industry-university-research' },
          { text: '驻站研发', link: '/rd/on-site-rd' }
        ]
      },
      { 
        // 下拉菜单 - 成果转化
        text: '成果转化', 
        items: [
          { text: '技术推广', link: '/achievements/tech-promotion' },
          { text: '专利授权', link: '/achievements/patents' },
          { text: '联合制造', link: '/achievements/joint-manufacturing' },
          { text: '产业孵化', link: '/achievements/incubation' },
          { text: '标准制定', link: '/achievements/standards' }
        ]
      },
      { 
        // 下拉菜单 - 创新动态
        text: '创新动态', 
        items: [
          { text: '中心动态', link: '/news/center-news' },
          { text: '媒体聚焦', link: '/news/media-focus' },
          { text: '行业动态', link: '/news/industry-news' },
          { text: '前沿技术', link: '/news/cutting-edge' }
        ]
      },
      { 
        // 下拉菜单 - 创新联盟
        text: '创新联盟', 
        items: [
          { text: '联盟介绍', link: '/alliance/introduction' },
          { text: '联盟成员', link: '/alliance/members' },
          { text: '联盟动态', link: '/alliance/news' },
          { text: '湾区资讯', link: '/alliance/bay-area-info' }
        ]
      },
      // 单页链接 - 服务中心
      { text: '服务中心', link: '/service' }
    ],

    /**
     * 侧边栏配置
     * 根据不同路径显示不同的侧边栏内容
     * 可以为每个路径定制不同的侧边栏
     */
    sidebar: {
      /**
       * 中心概况侧边栏
       * 当访问 /about/ 路径下的页面时显示此侧边栏
       */
      '/about/': [
        {
          text: '中心概况',
          items: [
            { text: '中心简介', link: '/about/introduction' },
            { text: '成立背景', link: '/about/background' },
            { text: '建设目标', link: '/about/goals' },
            { text: '中心任务/功能', link: '/about/functions' },
            { text: '运行机制', link: '/about/mechanism' },
            { text: '创新中心分中心', link: '/about/branches' },
            { text: '文化理念', link: '/about/culture' },
            { text: '荣誉资质', link: '/about/honors' }
          ]
        }
      ],
      /**
       * 产品系统侧边栏
       * 当访问 /products/ 路径下的页面时显示此侧边栏
       */
      '/products/': [
        {
          text: '产品系统',
          items: [
            { text: 'RobDTS软件', link: '/products/robdts' },
            { text: '柔性制造系统', link: '/products/flexible-manufacturing' },
            { text: '智能磨抛工作站', link: '/products/polishing-station' },
            { text: '智能制造实训平台', link: '/products/training-platform' },
            { text: '智能焊接工作站', link: '/products/welding-station' },
            { text: '售后服务', link: '/products/after-sales' }
          ]
        }
      ],
      /**
       * 研发合作侧边栏
       * 当访问 /rd/ 路径下的页面时显示此侧边栏
       */
      '/rd/': [
        {
          text: '研发合作',
          items: [
            { text: '共性关键技术', link: '/rd/key-technologies' },
            { text: '技术服务', link: '/rd/tech-services' },
            { text: '省企业重点实验室', link: '/rd/key-laboratory' },
            { text: '产学研合作', link: '/rd/industry-university-research' },
            { text: '驻站研发', link: '/rd/on-site-rd' }
          ]
        }
      ],
      /**
       * 成果转化侧边栏
       * 当访问 /achievements/ 路径下的页面时显示此侧边栏
       */
      '/achievements/': [
        {
          text: '成果转化',
          items: [
            { text: '技术推广', link: '/achievements/tech-promotion' },
            { text: '专利授权', link: '/achievements/patents' },
            { text: '联合制造', link: '/achievements/joint-manufacturing' },
            { text: '产业孵化', link: '/achievements/incubation' },
            { text: '标准制定', link: '/achievements/standards' }
          ]
        }
      ],
      /**
       * 创新动态侧边栏
       * 当访问 /news/ 路径下的页面时显示此侧边栏
       */
      '/news/': [
        {
          text: '创新动态',
          items: [
            { text: '中心动态', link: '/news/center-news' },
            { text: '媒体聚焦', link: '/news/media-focus' },
            { text: '行业动态', link: '/news/industry-news' },
            { text: '前沿技术', link: '/news/cutting-edge' }
          ]
        }
      ],
      /**
       * 创新联盟侧边栏
       * 当访问 /alliance/ 路径下的页面时显示此侧边栏
       */
      '/alliance/': [
        {
          text: '创新联盟',
          items: [
            { text: '联盟介绍', link: '/alliance/introduction' },
            { text: '联盟成员', link: '/alliance/members' },
            { text: '联盟动态', link: '/alliance/news' },
            { text: '湾区资讯', link: '/alliance/bay-area-info' }
          ]
        }
      ]
    },

    /**
     * 社交链接
     * 显示在网站右上角的社交媒体图标和链接
     * 支持多种社交平台图标，如GitHub、Twitter等
     */
    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ],

    /**
     * 页脚配置
     * 显示在网站底部的版权信息和备案号
     */
    footer: {
      message: 'Copyright 2023 广东省机器人创新中心有限公司 All Rights Reserved',
      copyright: '粤ICP备20068987号'
    }
  }
})
