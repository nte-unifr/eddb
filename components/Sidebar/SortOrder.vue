<template>
  <div class="card block">
    <header class="card-header">
      <p class="card-header-title">
        Sort order
      </p>
      <p class="card-header-icon">
        <span class="icon">
          <VIcon icon="more-vertical" />
        </span>
      </p>
    </header>
    <footer class="card-footer">
      <a class="card-footer-item" :class="{ 'is-active': order === 'title' }" @click="this.sortByTitle">
        <span class="icon">
          <VIcon icon="type" />
        </span>
      </a>
      <a class="card-footer-item" :class="{ 'is-active': order === 'id' }" @click="this.sortById">
        <span class="icon">
          <VIcon icon="key" />
        </span>
      </a>
    </footer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['order'])
  },
  methods: {
    ...mapActions(['sortByTitle', 'sortById'])
  },

}
</script>