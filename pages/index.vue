<template>
  <section class="section">
    <div class="columns">
      <div class="column">
        <div class="columns is-multiline">
          <GridItem v-for="item in kItems" :key="item.id" :id="item.id" :title="item.title" :description="item.description" :tags="item.tags" />
        </div>
      </div>
      <div class="column is-one-fifth">
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