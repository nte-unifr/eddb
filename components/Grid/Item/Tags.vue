<template>
  <div class="tags" v-bind:class="{ 'is-hidden': isHidden }">
    <span class="tag" v-for="(tag, index) in tags" :key="`tag-${index}`">
      {{ tag }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    isHidden () {
      return !this.$store.state.config.grid.tags
    }
  }
}
</script>