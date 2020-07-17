<template>
  <div class="ToDoList">
    <h1 v-html="title">My ToDoList</h1>
    <ul>
      <li v-for="item in items" :key="item.id">
        <!--代办事项-->
        <span v-text="item.title"></span>
        <!--完成按钮-->
        <!-- <button >完成</button> -->
        <button v-on:click="toggleFinish(item.id)">完成</button>
      </li>
    </ul>

    <div>
      <input type="text" v-model="newItem">
      <button @click="addNewItem">添加</button>
    </div>
    
  </div>
</template>

<script>
  export default {
    name: "TodoList",
    data() {
      return {
        title: '<span></span> this is a todo list',
        items: [
          {
            id: 1,
            title: '吃饭',
          },
          {
            id: 2,
            title: '睡觉',
          },
          {
            id: 3,
            title: '玩游戏',
          }
        ],
        
        idx: 0,
        newItem: ""
        
      }
    },

    methods: {
      toggleFinish(id) {
        this.items.map((item, index) => {
          console.log(item)
          if (item.id == id) {
            this.items.splice(index, 1)
          }
        })
      },

      addNewItem() {
        this.items.push({
          id: this.idx,
          title: this.newItem
        })

        this.id++;
        this.newItem = ' '
      }

    }


  }
</script>

<style scoped>

</style>