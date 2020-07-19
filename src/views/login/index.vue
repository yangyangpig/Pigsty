<template>
  <div>
    <h1>Welcom to LoginPage</h1>
    <!--加个跳转吧-->
    <button v-on:click="jump()">跳转到另外一个页面</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {},
  data() {
    return {}
  },

// 监听router路由器的变化，每次变化都会出发，当使用路由参数时，原来的组件实例会被复用，组件的生命周期钩子不会被触发
// 复用组件时候，想对路由参数的变化作出响应的话，只能watch监听$route对象,或者引入导航守卫

// watch高级用法
// 由于wach的一个特点是最初绑定的时候不会被执行，要等到监听的值变化时候才会执行监听，如果想一开始在绑定时候就执行监听，需要给监听值绑定handler方法，handler要配合immediate，immediate为true
// 则是初始绑定就触发监听，如果为false就和以前一样，要等到监听值变化才会执行监听
  watch: {
    $route: {
      handler: function(route) {
        console.log(route)
        const fullPath = route.fullPath
        if (fullPath) {
          console.log(fullPath)
        }
      },
      immediate: true
    }
  },

  created() {},

  mounted() {},

  methods: {
    jump() {
      console.log("begin jump to other page!!")
      this.$router.push( { name: 'home' , params:  {userId: '123' }} )
    }
  }
  
}
</script>>
