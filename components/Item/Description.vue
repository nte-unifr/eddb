<template>
  <article class="message is-dark" v-show="description">
    <div class="message-body is-size-6" v-html="description"></div>
  </article>
</template>

<script>
import { mapState } from "vuex"

export default {
  computed: {
    ...mapState({
      description: state => state.item.item.description
    })
  }
}
</script>