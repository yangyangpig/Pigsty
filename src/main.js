import Vue from 'vue'
import App from './App.vue'
// import Cookies from 'js-cookie' // 引入操作浏览器coockies的库
// import 'normalize.css/normalize.css'  // 引入一个很小的css文件

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' // 这是element-ui官方的样式，先用着吧，功能还可以
import './styles/element-variables.scss' // 引入项目公共的css3文件
import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import '@/styles/index.scss' // global css

import store from './store'
import router from './router'

// import './icons' // icon引入

// 权限控制模块引入

// 错误处理模块引入

// 自定义filter引入
// import * as filters from './filters'

// 如果需要启动mock-server，使用mockJs中的api，则需要启动
// if (process.env.NODE_ENV === 'production') {
//   const { mockXHR } = require('../mock')
//   mockXHR()
// }

// 调用全局方法use，注册插件Element
Vue.use(Element)

// 注册自定义的过滤器到vue全局过滤器
// Object.keys(filters).forEach(key => {
//   Vue.filtres(key, filters[key])
// })

Vue.config.productionTip = false

new Vue({
  el: '#app', // 根模版
  router,
  store,
  render: h => h(App)
})
