<template>
  <div class="card block">
    <header class="card-header">
      <p class="card-header-title">
        Grid configuration
      </p>
      <p class="card-header-icon">
        <span class="icon">
          <VIcon icon="grid" />
        </span>
      </p>
    </header>
    <footer class="card-footer">
      <a class="card-footer-item" :class="{ 'is-active': this.$store.state.config.grid.image }" @click="this.toggleImage">
        <span class="icon">
          <VIcon icon="image" />
        </span>
      </a>
      <a class="card-footer-item" :class="{ 'is-active': this.$store.state.config.grid.description }" @click="this.toggleDescription">
        <span class="icon">
          <VIcon icon="align-justify" />
        </span>
      </a>
      <a class="card-footer-item" :class="{ 'is-active': this.$store.state.config.grid.tags }" @click="this.toggleTags">
        <span class="icon">
          <VIcon icon="tag" />
        </span>
      </a>
    </footer>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations('config/grid', ['toggleImage', 'toggleDescription', 'toggleTags'])
  }
}
</script>