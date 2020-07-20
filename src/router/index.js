import Vue from 'vue'
import Router from 'vue-router'
// import ComponentsRouter from './modules/components'

Vue.use(Router)

// 导入对应的router模块

// router分为静态路由和动态路由，静态路由是没有权限控制的，全局路由。动态路由是有权限控制，动态加载的路由

// 静态路由
export const constanRoutes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    // 带有侧边栏的路由器,引入了Layout布局组件
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/dashboard/index.vue'),
    hidden: true,
  },
  {
    path: '/login-v2',
    component: () => import('@/views/login-v2/index.vue'), // 懒加载
    hidden: true
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'), // 懒加载
    hidden: true
  },
  {
    path: '/home/:userId',
    name: 'home',
    component: () => import('@/views/home/home.vue'),
    hidden: true
  },
  {
    path: '/table',
    component: () => import('@/views/table/table.vue'),
    hidden: true
  },

  {
    path: '/404',
    component:() => import('@/views/error-page/404'),
    hidden: true
  }
  
]

// 动态路由
// export const asyncRoutes = [
//   {
//     path:'role',
//     component: () => import('@/views/permission/role'),
//     name: 'RolePermission',
//     meta: {
//       title: 'Role Permission',
//       roles: ['admin']
//     }
//   },
//   // ComponentsRouter
// ]

// 创建路由器
const createRouter = () => new Router({
  // mode: 'history', // 这种会让url好看点
  scrollBehavior: () => ({ y: 0 }), // 新页面滚到最顶
  routes: constanRoutes
})
const router = createRouter()

export default router
