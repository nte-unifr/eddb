import _ from "lodash"

export const state = () => ({
  items: [],
  order: 'id',
  search: '',
  filters: [],
  filtersPool: [],
  page: 1,
  perPage: 104
})

export const getters = {
  fItems: (state) => {
    if (state.filters.length || state.search.length) {
      return _.filter(state.items, (i) => {
        const search = _.toLower(state.search)
        const title = _.toLower(i.title)
        const description = _.toLower(i.description)
        const fCondition = _.intersection(i.tags, state.filters).length === state.filters.length
        const sCondition = _.includes(title, search) || _.includes(description, search)
        return fCondition && sCondition
      })
    } else {
      return state.items
    }
  },
  kItems: (state, getters) => {
    const from = (state.page - 1) * state.perPage
    const to = state.page * state.perPage
    return _.slice(getters.fItems, from, to)
  },
  total: (state) => state.items.length,
  fTotal: (_state, getters) => getters.fItems.length,
  order: state => state.order,
  search: state => state.search,
  pages: (state, getters) => _.ceil(getters.fItems.length / state.perPage)
}

export const mutations = {
  setItems(state, items) {
    state.items = items
  },
  setOrder(state, order) {
    state.order = order
  },
  setPage (state, page) {
    state.page = page
  },
  setFilters (state, filters) {
    state.filters = filters
  },
  setFiltersPool (state, filters) {
    state.filtersPool = filters
  },
  setSearch (state, search) {
    state.search = search
  }
}

export const actions = {
  async getItems({ commit, state }) {
    if (state.items.length <= 0) {
      const res = await this.$repositories.item.index()
      const { data } = res
      const items = await this.$apiarist.item.buildItems(data)
      const filters = _
        .chain(items)
        .map('tags')
        .flatten()
        .uniq()
        .sort()
        .value()
      commit('setItems', items)
      commit('setFiltersPool', filters)
    }
  },
  goToNextPage ({ commit, state, getters }) {
    if (state.page + 1 <= getters.pages) {
      commit('setPage', state.page + 1)
    }
  },
  goToPrevPage ({ commit, state }) {
    if (state.page - 1 > 0) {
      commit('setPage', state.page -1)
    }
  },
  goToFirstPage ({ commit }) {
    commit('setPage', 1)
  },
  goToLastPage ({ commit, getters }) {
    commit('setPage', getters.pages)
  },
  addFilter ({ commit, state }, filter) {
    let filters = state.filters.slice(0)
    let filtersPool = state.filtersPool.slice(0)

    filters.push(filter)
    filters.sort()

    const indexToRemove = filtersPool.indexOf(filter)
    if (indexToRemove > -1) {
      filtersPool.splice(indexToRemove, 1)
    }

    commit('setFilters', filters)
    commit('setFiltersPool', filtersPool)
    commit('setPage', 1)
  },
  removeFilter ({ commit, state }, filter) {
    let filters = state.filters.slice(0)
    let filtersPool = state.filtersPool.slice(0)

    const indexToRemove = filters.indexOf(filter)
    if (indexToRemove > -1) {
      filters.splice(indexToRemove, 1)
    }

    filtersPool.push(filter)
    filtersPool.sort()

    commit('setFilters', filters)
    commit('setFiltersPool', filtersPool)
  },
  clearFilters ({ commit, state }) {
    let filtersPool = _
      .chain(state.filtersPool)
      .union(state.filters)
      .sort()
      .value()
    commit('setFilters', [])
    commit('setFiltersPool', filtersPool)
  },
  setSearch ({ commit }, search) {
    commit('setSearch', search)
    commit('setPage', 1)
  },
  clearSearch ({ commit }) {
    commit('setSearch', '')
  },
  sortByTitle ({ commit, state }) {
    const order = 'title'
    const items = _.sortBy(state.items, order)
    commit('setItems', items)
    commit('setOrder', order)
  },
  sortById ({ commit, state }) {
    const order = 'id'
    const items = _.sortBy(state.items, order)
    commit('setItems', items)
    commit('setOrder', order)
  }
}