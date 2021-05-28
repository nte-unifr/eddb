<template>
  <div>
    <div v-for="(information, index) in informations" :key="`information-${index}`">
      <h2 class="title is-6">{{ information.key }}</h2>
      <article class="message">
        <div class="message-body" v-html="information.value"></div>
      </article>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  computed: {
    ...mapState({
      informations: state => state.item.item.informations
    })
  }
}
</script>

<style lang="scss" scoped>
    .title {
      margin-bottom: 0.5rem;
    }
    .message {
      font-size: 0.9em;
      margin-bottom: 1.5rem;
    }
</style>