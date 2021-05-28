export const state = () => ({
  image: true,
  description: true,
  tags: true
})

export const mutations = {
  toggleImage (state) {
    state.image = !state.image
  },
  toggleDescription (state) {
    state.description = !state.description
  },
  toggleTags (state) {
    state.tags = !state.tags
  }
}
