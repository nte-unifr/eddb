export const state = () => ({
  title: 'Callisto',
  subtitle: 'Iconography of Play and Games',
  info: false
})

export const mutations = {
  setInfo(state, value) {
    state.info = value
  }
}
