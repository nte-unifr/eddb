<template>
  <p v-html="description" v-bind:class="{ 'is-hidden': isHidden }"></p>
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

<style lang="scss" scoped>
  p {
    max-height: 6rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>