<template>
  <figure class="image is-4by3" v-bind:class="{ 'is-hidden': isHidden }">
    <img v-if="image" :src="image" alt="">
    <img v-else src="~/assets/images/no-tape.png" alt="Placeholder image">
  </figure>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: ""
    }
  },
  computed: {
    isHidden () {
      return !this.$store.state.config.grid.image
    }
  }
}
</script>