export const state = () => ({
  image: false,
  description: true,
  tags: true
})

export const mutations = {
  setImage (state, val) {
    state.image = val
  },
  setDescription (state, val) {
    state.description = val
  },
  setTags (state, val) {
    state.tags = val
  }
}

export const actions = {
  toggleImage ({ commit, state }) {
    commit('setImage', !state.image)
  },
  toggleDescription ({ commit, state }) {
    commit('setDescription', !state.description)
  },
  toggleTags ({ commit, state }) {
    commit('setTags', !state.tags)
  }
}
