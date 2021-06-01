<template>
  <h1 class="title">{{ title }}</h1>
</template>

<script>
import { mapState } from "vuex"

export default {
  computed: {
    ...mapState('item', {
      title: state => state.item.title
    })
  }
}
</script>