<template>
  <div class="card block">
    <header class="card-header">
      <p class="card-header-title">
        Filters
      </p>
      <p class="card-header-icon">
        <span class="icon">
          <VIcon icon="filter" />
        </span>
      </p>
    </header>
    <div class="card-content has-ribbon" :class="{ 'is-hidden': !this.filters.length }">
      <SidebarVClear @clear="clearFilters" />
      <div class="tags">
        <span class="tag" v-for="(filter, index) in filters" :key="`aFilter-${index}`">
          {{ filter }}
          <button class="delete is-small" @click="removeFilter(filter)"></button>
        </span>
      </div>
    </div>
    <footer class="card-footer">
      <div class="card-footer-item">
        <div class="control has-icons-left">
          <div class="select">
            <select @change="filter($event)">
              <option value="none">Add a filter</option>
              <option v-for="(filter, index) in filtersPool" :key="`filter-${index}`">{{ filter }}</option>
            </select>
          </div>
          <div class="icon is-small is-left">
            <VIcon icon="plus-circle" />
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState(['filters', 'filtersPool']),
    ...mapGetters(['total', 'fTotal']),
  },
  methods: {
    ...mapActions(['addFilter', 'removeFilter', 'clearFilters']),
    filter (e) {
      const f = e.target.value
      if (f != 'none') {
        this.addFilter(f)
        e.target.value = 'none'
      }
    }
  },

}
</script>