import { defineConfig } from 'vitepress'

/**
 * VitePress 站点配置文件
 * 本文件用于配置整个网站的基本设置、导航栏、侧边栏等全局元素
 */
export default defineConfig({
  // 设置基本路径，应该与GitHub仓库名称一致
  base: '/vitepress-class/',
  // 忽略死链接检查，避免构建失败
  ignoreDeadLinks: true,
  
  /**
   * 网站标题
   * 显示在浏览器标签页和首页标题中
   */
  title: " ",
  
  /**
   * 网站描述
   * 用于SEO优化，显示在搜索引擎结果中
   */
  description: "专业的设计与开发服务，提供网页设计、小程序开发和点餐系统解决方案",
  
  /**
   * 主题配置
   * 用于配置网站的主题相关设置，包括导航栏、侧边栏、页脚等
   */
  themeConfig: {
    /**
     * 网站logo
     * 显示在导航栏左侧，路径相对于public目录
     */
    logo: '/logo.svg',
    
    /**
     * 导航栏配置
     * 定义网站顶部的导航菜单，支持多级菜单
     */
    nav: [
      // 首页链接
      { text: '首页', link: '/' },
      // 关于我们
      { 
        text: '关于我们', 
        items: [
          { text: '工作室简介', link: '/about/introduction' },
          { text: '团队成员', link: '/about/team' }
        ]
      },
      // 服务内容
      { 
        text: '服务内容', 
        items: [
          { text: '网站开发', link: '/services/web-development' },
          { text: '小程序开发', link: '/services/miniprogram' },
          { text: '点餐系统', link: '/services/ordering-system' },
          { text: '设计服务', link: '/services/design' }
        ]
      },
      // 作品展示
      { text: '作品展示', link: '/projects/' },
      // 新闻动态
      // { text: '新闻动态', link: '/news/' },
      // 联系我们
      { text: '联系我们', link: '/contact/' },
      // 功能规划
      // { text: '功能规划', link: '/功能' }
    ],

    /**
     * 侧边栏配置
     * 根据不同路径显示不同的侧边栏内容
     */
    sidebar: {
      /**
       * 关于我们侧边栏
       */
      '/about/': [
        {
          text: '关于我们',
          items: [
            { text: '工作室简介', link: '/about/introduction' },
            { text: '团队成员', link: '/about/team' }
          ]
        }
      ],
      /**
       * 服务内容侧边栏
       */
      '/services/': [
        {
          text: '服务内容',
          items: [
            { text: '网站开发', link: '/services/web-development' },
            { text: '小程序开发', link: '/services/miniprogram' },
            { text: '点餐系统', link: '/services/ordering-system' },
            { text: '设计服务', link: '/services/design' }
          ]
        }
      ],
      /**
       * 作品展示侧边栏
       */
      '/projects/': [
        {
          text: '作品展示',
          items: [
            { text: '全部作品', link: '/projects/' },
            { text: '微信小程序案例', link: '/projects/miniprogram-case' }
          ]
        }
      ],
      /**
       * 新闻动态侧边栏
       */
      // '/news/': [
      //   {
      //     text: '新闻动态',
      //     items: [
      //       { text: '全部动态', link: '/news/' }
      //     ]
      //   }
      // ],
      /**
       * 微信小程序文档
       */
      '/miniprogram/': [
        {
          text: '微信小程序',
          items: [
            { text: '功能概述', link: '/miniprogram/' }
          ]
        }
      ],
      /**
       * 点餐小程序文档
       */
      '/orderapp/': [
        {
          text: '点餐小程序',
          items: [
            { text: '系统介绍', link: '/orderapp/' }
          ]
        }
      ]
    },

    /**
     * 社交链接
     * 显示在网站右上角的社交媒体图标和链接
     */
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com' },
    //   { icon: 'twitter', link: 'https://twitter.com' }
    // ],

    /**
     * 页脚配置
     * 显示在网站底部的版权信息和备案号
     */
    footer: {
      message: 'Copyright © 2023-2024 创意工作室 All Rights Reserved',
      copyright: 'ICP备案号xxxxxxxx'
    }
  }
})
