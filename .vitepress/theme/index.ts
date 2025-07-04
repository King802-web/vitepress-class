/**
 * VitePress主题配置文件
 * 该文件定义了网站的主题配置，可以在这里扩展或覆盖默认主题的功能
 */

// 导入VitePress主题类型接口
import { Theme } from 'vitepress'
// 导入VitePress默认主题
import DefaultTheme from 'vitepress/theme'
// 导入自定义CSS样式文件
import './custom.css'

/**
 * 导出主题配置对象
 * 这个对象将被VitePress用来渲染网站
 */
export default {
  /**
   * 继承默认主题
   * 这样我们可以在保留默认主题功能的同时添加自定义功能
   */
  extends: DefaultTheme,
  
  /**
   * 增强应用程序的钩子函数
   * 在这里可以注册自定义组件、指令或插件
   * @param app Vue应用实例，可以用来注册全局组件
   * @param router VitePress路由实例，可以用来添加路由钩子
   * @param siteData 站点元数据，包含网站配置和页面信息
   */
  enhanceApp({ app, router, siteData }) {
    /**
     * 这里可以添加自定义主题逻辑，例如：
     * 1. 注册全局组件: app.component('MyComponent', MyComponent)
     * 2. 添加路由钩子: router.onBeforeRouteChange = (to) => { ... }
     * 3. 注册插件: app.use(MyPlugin)
     * 4. 添加全局状态: app.provide('myKey', myValue)
     * 5. 添加自定义指令: app.directive('my-directive', { ... })
     */
  }
} satisfies Theme // 使用类型约束确保配置符合Theme接口 