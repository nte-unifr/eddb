<template>
  <section class="section">
    <div class="columns">
      <div class="column">
        <div class="columns is-multiline">
          <GridItem v-for="item in kItems" :key="item.id" :item="item" />
        </div>
      </div>
      <div class="column is-full-mobile is-one-third-tablet is-one-third-desktop is-one-quarter-widescreen is-one-fifth-fullhd">
        <Sidebar />
      </div>
    </div>
  </section>
</template>

<script>
import _ from "lodash"
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['kItems'])
  },
  async asyncData({ store }) {
    await store.dispatch('getItems')
  }
}
</script>