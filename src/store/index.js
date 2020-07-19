import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

// 注册插件
Vue.use(Vuex)

// require.contxt是webpack中，用来创建自己的模块上下文，webpack会在打包构建代码中解析它
// require.context 接受三个参数：1、要搜索的文件夹目录；2、是否搜索它子目录；3、以及一个匹配文件的正则表达式
const modulesFiles = require.context('./modules', true, /\.js$/)
// 打印结果
// 遍历出每个组件的路径
modulesFiles.keys().forEach(element => {
  console.log("element" + JSON.stringify(element))

  // 组件实例
  const reqCom = modulesFiles(element)
  // 截取路径作为组件名
  const reqComName = element.split('/')[1]

  console.log('reqCom' + JSON.stringify(reqCom))
  console.log('reqComName' + JSON.stringify(reqComName))
  // 组件挂载
  //Vue.component(reqComName, reqCom.default || reqCom)
});

// reduce()方法接受一个函数作为累加器，数组中每个值(从到右)开始缩减，最终为一个值callback参数
// previousValue(上一次调用回调返回的值，或者提供的初始值)
// currentValue(数组中当前被处理的元素)
// index （当前元素在数组中索引）
// array （调用rreduce的数组）

// modules为上一次调用返回的值，即是modules数组
// modulePath，当前要处理的值
// modules key为文件名，value为加载的内容
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // example ./app.js moduleName 为app
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

console.log("here is modules"+JSON.stringify(modules))
const store = new Vuex.Store({
  modules, // 开始了模块命名空间，文件名为命名空间名,访问时候要带上命名空间才能访问不然找不到
  getters
})

export default store