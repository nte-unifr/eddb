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
      <a class="card-footer-item" :class="{ 'is-active': image }" @click="toggleImage">
        <span class="icon">
          <VIcon icon="image" />
        </span>
      </a>
      <a class="card-footer-item" :class="{ 'is-active': description }" @click="toggleDescription">
        <span class="icon">
          <VIcon icon="align-justify" />
        </span>
      </a>
      <a class="card-footer-item" :class="{ 'is-active': tags }" @click="toggleTags">
        <span class="icon">
          <VIcon icon="tag" />
        </span>
      </a>
    </footer>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('config/grid', ['image', 'description', 'tags'])
  },
  methods: {
    ...mapActions('config/grid', ['toggleImage', 'toggleDescription', 'toggleTags'])
  }
}
</script>