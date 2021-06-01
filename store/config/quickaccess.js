export const state = () => ({
  isActive: false
})

export const mutations = {
  setActive (state, value) {
    state.isActive = value
  }
}

export const actions = {
  display ({ commit }) {
    commit('setActive', true)
  },
  hide ({ commit }) {
    commit('setActive', false)
  }
}