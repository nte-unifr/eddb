export const state = () => ({
  item: new Object()
})

export const mutations = {
  setItem(state, item) {
    state.item = item
  }
}

export const actions = {
  async getItem({ commit }, id) {
    const res = await this.$repositories.item.get(id)
    const { data } = res
    const item = await this.$apiarist.item.buildItem(data)
    commit('setItem', item)
  }
}