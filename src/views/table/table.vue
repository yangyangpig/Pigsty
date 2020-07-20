<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column label="功能名称" width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.name }}</span>
      </template>
    </el-table-column>

    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">跳转</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: 'store: set value'
        },
        {
          name: 'store: show store value'
        }
      ],
      amount: 0
    }
  },

  watch: {
    $route: {
      handler: function(route) {
        console.log(route)
        const query = route.query
        if (query) {
          console.log(query);
        }
      },
      immediate: true
    }
  },

  created() {
  },

  mounted() {},


  methods: {
    handleEdit(index, row) {
      console.log(index, row);
      console.log("here is storeValue method")
      this.$store.dispatch('app/increa', { amount:10 })
    },
    handleDelete(index, row) {
      console.log(index, row);
      console.log("here is show store value")
      // 通过属性访问
      console.log(this.$store.getters.count)
    }
  }
};
</script>