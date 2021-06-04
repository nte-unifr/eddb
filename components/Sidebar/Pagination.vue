<template>
  <div class="card block">
    <header class="card-header">
      <p class="card-header-title">
        {{ fTotal }} / {{ total }} total items<br>
        Page {{ page }} of {{ pages > 0 ? pages : 1 }}
      </p>
      <p class="card-header-icon">
        <span class="icon">
          <VIcon icon="more-horizontal" />
        </span>
      </p>
    </header>
    <footer class="card-footer">
      <a class="card-footer-item" @click="this.first">
        <span class="icon">
          <VIcon icon="chevrons-left" />
        </span>
      </a>
      <a class="card-footer-item" @click="this.prev">
        <span class="icon">
          <VIcon icon="chevron-left" />
        </span>
      </a>
      <a class="card-footer-item" @click="this.next">
        <span class="icon">
          <VIcon icon="chevron-right" />
        </span>
      </a>
      <a class="card-footer-item" @click="this.last">
        <span class="icon">
          <VIcon icon="chevrons-right" />
        </span>
      </a>
    </footer>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState(['page']),
    ...mapGetters(['pages', 'total', 'fTotal'])
  },
  methods: {
    ...mapActions(['goToNextPage', 'goToPrevPage', 'goToFirstPage', 'goToLastPage']),
    next () {
      this.goToNextPage()
      this.scrollToTop()
    },
    prev () {
      this.goToPrevPage()
      this.scrollToTop()
    },
    first () {
      this.goToFirstPage()
      this.scrollToTop()
    },
    last () {
      this.goToLastPage()
      this.scrollToTop()
    },
    scrollToTop () {
      window.scrollTo(0,0)
    }
  },

}
</script>