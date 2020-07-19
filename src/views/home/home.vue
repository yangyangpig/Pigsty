<template>
  <div>
    <h1> Welcom to  HomePage</h1>
    <button v-on:click="storeValue()"> Store value</button>
    <button v-on:click='showStoreValue()'> Show store value </button>
  </div>
</template>>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "",
  data () {return {
    show:0
  }},

  watch: {
    $route: {
      handler: function (route) {
        console.log(route)
        const query = route.query
        if (query) {
          console.log(query)
        }
      },
      immediate: true
    }
  },

  created() {},
  
  mounted() {},
  computed: {
    ...mapGetters([ {
       sum: 'count',
    }])
  },

  methods: {
    storeValue() {
      console.log("here is storeValue method")
      this.$store.dispatch('app/increa', { amount:10 })
    },
    showStoreValue() {
      console.log("here is show store value")
      // 通过属性访问
      console.log(this.$store.getters.count)
      
    }
  }
}
</script>
