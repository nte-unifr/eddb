<template>
  <p v-bind:class="{ 'is-hidden': isHidden }">
    {{ description }}
  </p>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      default: ''
    }
  },
  computed: {
    isHidden () {
      return !this.$store.state.config.grid.description
    }
  }
}
</script>