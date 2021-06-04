<template>
  <figure class="image is-3by1" v-bind:class="{ 'is-hidden': isHidden }">
    <img v-if="image" :src="imageUrl" alt="">
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
    },
    imageUrl ({ $config: { baseURL } }) {
      if (this.image) {
        const width = 900
        const height = 300
        const quality = 80
        const fit = 'crop'
        const url = `${baseURL}/assets/${this.image}?w=${width}&h=${height}&q=${quality}&f=${fit}`
        return url
      } else {
        return ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  figure {
    background-color: #D0D1CD;
  }
</style>