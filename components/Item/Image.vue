<template>
  <figure v-if="this.images.length > 0">
    <img :src="imageUrl" alt="Placeholder image">
  </figure>
</template>

<script>
import { mapState } from "vuex"

export default {
  computed: {
    imageUrl ({ $config: { baseURL } }) {
      const width = 1600
      const height = 1200
      const quality = 90
      const fit = 'contain'
      return `${baseURL}/assets/${this.images[0]}?w=${width}&h=${height}&q=${quality}&f=${fit}`
    },
    ...mapState('item', {
      images: state => state.item.images
    }),
  }
}
</script>

<style lang="scss" scoped>
  figure {
    text-align: center;
    img {
      max-width: 680px;
      max-height: 440px;
      padding: 10px;
      background: #fff;
    }
  }
</style>