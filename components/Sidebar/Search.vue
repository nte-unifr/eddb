<template>
  <div class="card block">
    <header class="card-header">
      <p class="card-header-title">
        Search
      </p>
      <p class="card-header-icon">
        <span class="icon">
          <VIcon icon="search" />
        </span>
      </p>
    </header>
    <div class="card-content has-ribbon">
      <SidebarVClear @clear="clearSearch" :class="{ 'is-hidden': !this.search.length }" />
      <input class="input" type="text" placeholder="..." v-model="searching">
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState(['search']),
    searching: {
      get () {
        return this.search
      },
      set (value) {
        this.setSearch(value)
      }
    }
  },
  methods: {
    ...mapActions(['setSearch', 'clearSearch']),
  }
}
</script>

<style lang="scss" scoped>
  .card-content {
    padding: 15px;
    input {
      border: none;
      &:focus {
        border-bottom: 1px solid #00134a;
        border-radius: 0;
        box-shadow: none;
      }
    }
  }
</style>