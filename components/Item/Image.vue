<template>
  <div>
    <figure>
      <img :src="image" alt="" />
      <div>
        <a :href="original" class="button is-primary is-small">
          <span class="icon">
            <VIcon icon="external-link" :width=15 :height=15 />
          </span>
          <span>Original</span>
        </a>
      </div>
    </figure>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  computed: {
    image ({ $config: { baseURL } }) {
      const width = 1000
      const height = 1100
      const quality = 90
      const fit = 'contain'
      return `${baseURL}/assets/${this.images[0]}?w=${width}&h=${height}&q=${quality}&f=${fit}`
    },
    original ({ $config: { baseURL } }) {
      return `${baseURL}/assets/${this.images[0]}`
    },
    ...mapState('item', {
      images: state => state.item.images
    }),
  }
}
</script>

<style lang="scss" scoped>
  figure {
    padding: 10px;
    background: #fff;
    img {
      max-width: 500px;
      max-height: 550px;
    }
  }
</style>