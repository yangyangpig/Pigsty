// 以方法形式返回,通过属性访问state，比如 store.getters.size
const getters = {
  count: state => state.app.count, // 要带上app命名空间，访问不然找不到
}

export default getters