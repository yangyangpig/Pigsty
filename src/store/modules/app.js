const state = {
  count: 0

}
// 每个mutations都有一个事件类型type和一个回调函数handler，回调函数可以接受两个参数，state和payload，一般payload是一个对象
// 要唤醒一个mutation回调函数handler，需要以相应的type调用store.commit()方法 例如 store.mimit(''SET_TOKEN')， commit可以接受一个对象
// {type:'SET_TOKEN', amount: 10},此时payload是一个对象，通过payload.amout访问到amout
const mutations = {
  INCREA_COUNT(state, num) {
    state.count += num.amount
  },
}
// action提交的是mutation，而不是直接被变更状态
// action可以包含任何异步操作
// action通过store.dispath方法触发
// action支持载荷和对象方式进行分发.store.dispath('incrementAsync',{amount:10}),或者是store.dispath({type:'incrementAsync', amount: 10})
// 
const actions = {
  increa ({ commit },  num) {
    commit('INCREA_COUNT', num)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}