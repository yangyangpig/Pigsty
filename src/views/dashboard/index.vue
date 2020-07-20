<template>
  <div class="dashboard-container">
    <component :is="currentRole" />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import adminDashboard from './admin'
import editorDashboard from './editor'
export default {
  name: 'Dashboard',
  components: { adminDashboard, editorDashboard },

  data() {
    return {
      currentRole: 'adminDashboard'
    }
  },
  computed: {
    ...mapGetters({
      role: 'roles' // getters没有命名空间概念，state和actions才有
    })
    // ...mapActions('user',[
    //   'setRoles'
    // ])
  },

  // 可以在路由导航守卫函数通过store设置用户角色
  beforeCreate() {
    this.$store.dispatch('user/setRoles', { roles: 'admin' })
    // this.setRoles({ roles: 'admin' })
  },

  created() {
    console.log("current role:" + this.role)
    if (!this.role.includes('admin')) {
      this.currentRole = 'editorDashboard'
    }
  }
}
</script>
