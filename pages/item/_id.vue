<template>
  <article class="container">
    <VBack />
    <section class="section has-border-bottom">
      <div class="columns">
        <div class="column">
          <ItemTitle />
        </div>
        <div class="column is-narrow">
          <VKey :id="id" size="is-medium" />
        </div>
      </div>
    </section>
    <section class="section">
      <div class="columns">
        <div class="column is-narrow" v-if="images.length > 0">
          <ItemImage />
        </div>
        <div class="column">
          <ItemDescription />
          <ItemProperties />
        </div>
      </div>
    </section>
    <section class="section">
      <ItemInformations />
    </section>
  </article>
</template>

<script>
import { mapState } from "vuex"

export default {
  computed: {
    ...mapState('item', {
      id: state => state.item.id,
      images: state => state.item.images
    })
  },
  async asyncData({ store, params }) {
    await store.dispatch('item/getItem', params.id)
  }
}
</script>

<style lang="scss" scoped>
  .section {
    padding: 1.5rem;
  }
</style>