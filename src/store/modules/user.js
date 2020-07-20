const state = {
  roles: []
}

const mutations = {
  SET_ROLES: (state, user) => {
    state.roles.push(user.roles)
  }
} 

const actions = {
  // set roles info
  setRoles({ commit }, user) {
    commit('SET_ROLES', user)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
